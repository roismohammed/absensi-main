import React, {Fragment, useEffect, useMemo, useState} from 'react';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {Card, Dropdown, Form} from 'react-bootstrap';
import {
    IconArrowRight,
    IconBolt,
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight,
    IconChevronUp,
    IconFilterBolt,
    IconLayout,
    IconSearch
} from '@tabler/icons-react';
import {Link, router, usePage} from "@inertiajs/react";

const SimpleTable = ({data, columns, actions = [], onAction, filters = []}) => {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState({})
    const [globalFilter, setGlobalFilter] = useState('')
    const page = usePage().props
    const [{pageIndex, pageSize}, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    })

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    )

    const requestBody = {};

    if (pagination.pageIndex > 0) {
        requestBody.page = pagination.pageIndex;
    }

    if (globalFilter.length > 0) {
        requestBody.search = globalFilter;
    }

    if (columnFilters.length != '') {
        requestBody.filter = columnFilters
    }

    const fetchData = () => {
        if (requestBody.page || requestBody.search != '' || requestBody.filter.length > 0) {
            router.visit(page.ziggy.location, {
                preserveState: true,
                preserveScroll: true,
                method: 'get',
                data: requestBody,
                replace: true,
            });
        } else {
            router.visit(page.ziggy.location, {
                preserveState: true,
                preserveScroll: true,
                method: 'get',
                replace: true,
            });
        }
    };

    const handleFilter = (e) => {
        const newFilter = {
            ...columnFilters, // Menyalin filter yang sudah ada
            [e.target.name]: e.target.value // Menambah filter baru dari event
        };
        setColumnFilters(newFilter);
    };

    useEffect(() => {
        console.log(requestBody)
        fetchData()
    }, [pageIndex, globalFilter, columnFilters]);

    const resetFilter = () => {
        setGlobalFilter('');
        setColumnFilters({});
    }

    const table = useReactTable({
        data: data.data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        enableMultiRemove: true,
        enableSortingRemoval: true,
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        state: {
            sorting: sorting,
            globalFilter: globalFilter,
            pagination,
        },
        pageCount: data.meta.last_page,
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
        initialState: {
            pagination: {
                pageSize: data.meta.per_page,
            },
        },
        sortDescFirst: setSorting,
        debugTable: true,
    });
    return (
        <Fragment>
            <Card.Body className={'border-bottom border-light-subtle'}>
                <div className="d-flex gap-2 justify-content-between">
                    <div className="left-content d-inline-flex gap-2 flex-shrink-1">
                        <Form className={'input-icon'}>
                            <Form.Control
                                name={'search'}
                                id={'search'}
                                value={globalFilter ?? ''}
                                onChange={e => {
                                    setGlobalFilter(e.target.value);
                                    setPagination({pageIndex: 0})
                                }}
                                placeholder={'Masukan Pencarian'}/>
                            <div className="input-icon-addon">
                                <IconSearch size={18}/>
                            </div>
                        </Form>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="white"
                                className="shadow-none text-dark border"
                            >
                                <IconFilterBolt
                                    stroke={1.8}
                                    size={18}
                                    className={'me-1'}
                                />
                                Filter
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                className={'shadow-sm dropdown-menu-arrow rounded-3 border-light-subtle py-0'}
                                as={'div'}
                            >
                                <Dropdown.Header className='border-bottom py-2 bg-light border-light-subtle'>
                                    Kamu Dapat Menampilkan Data Sesuai Kriteria
                                </Dropdown.Header>
                                <div className="container p-3">
                                    <div className="filter-wrapper mb-3">
                                        <h5>Filter</h5>
                                        {filters && filters.map((filter, index) => {
                                            if (filter.type == 'select'){
                                                return(
                                                    <Form.Group key={index} className={'mb-2'}>
                                                        <Form.Label className="form-label fw-medium mb-0">{filter.title}</Form.Label>
                                                        <Form.Select
                                                            name={filter.column}
                                                            value={columnFilters[filter.column]}
                                                            onChange={e => handleFilter(e)}
                                                        >
                                                            <option value="">{filter.placeholder}</option>
                                                            {filter.options.map((option, index) => (
                                                                <option key={index} value={option.id}>{option.text}</option>
                                                            ))}
                                                        </Form.Select>
                                                    </Form.Group>
                                                )
                                            }else if(filter.type == 'date'){
                                                return(
                                                    <Form.Group key={index} className={'mb-2'}>
                                                        <Form.Label className="form-label fw-medium mb-0">{filter.title}</Form.Label>
                                                        <Form.Control type={'date'} name={filter.column}  onChange={e => handleFilter(e)} />
                                                    </Form.Group>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div className="sorting-wrapper my-3">
                                        <h5>Sorting</h5>
                                        <Form as={'div'} className={'form-wrapper'}>
                                            <Form.Group className={'mb-3'}>
                                                <Form.Label className={'mb-1 form-medium'}>Opsi</Form.Label>
                                                <Form.Select>
                                                    <option value="">Pilih Sorting</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className={'mb-3'}>
                                                <Form.Label className={'mb-1 form-medium'}>Pengurutan</Form.Label>
                                                <Form.Select>
                                                    <option value="">Pilih Pengurutan</option>
                                                    <option value="asc">Ascending</option>
                                                    <option value="desc">Descending</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Form>
                                    </div>

                                    {filters && filters.length > 0 && (
                                        <div className="d-grid mt-3">
                                            <button onClick={resetFilter} className="btn btn-dark">Reset</button>
                                        </div>
                                    )}
                                </div>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="right-content d-flex gap-2">
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="white"
                                id="dropdown-basic"
                                className={'btn shadow-none text-dark border'}
                            >
                                <IconLayout
                                    stroke={1.5}
                                    size={18}
                                    className={'me-1'}
                                />
                                Kolom
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                className={'shadow-sm dropdown-menu-arrow rounded-3  border-light border py-0'}
                            >
                                <Dropdown.Header className='border-bottom py-2 bg-light border-light-subtle'>
                                    Pilih Kolom yang ingin ditampilkan
                                </Dropdown.Header>

                                <div className="px-3 border-b border-black pt-3">
                                    <Form>
                                        <Form.Group>
                                            <Form.Check
                                                inline
                                                type={'checkbox'}
                                                {...{
                                                    checked: table.getIsAllColumnsVisible(),
                                                    onChange: table.getToggleAllColumnsVisibilityHandler(),
                                                }}
                                                label={'Pilih Semua'}
                                            />
                                        </Form.Group>
                                    </Form>
                                </div>
                                {table.getAllLeafColumns().map(column => {
                                    return (
                                        <div key={column.id} className="px-3 py-0">
                                            <Form>
                                                <Form.Check
                                                    {...{
                                                        type: 'checkbox',
                                                        checked: column.getIsVisible(),
                                                        onChange: column.getToggleVisibilityHandler(),
                                                    }}
                                                    label={column.columnDef.header}
                                                />
                                            </Form>
                                        </div>
                                    )
                                })}

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="white"
                                id="dropdown-basic"
                                className={'btn shadow-none text-dark border'}
                            >
                                <IconBolt
                                    stroke={1.5}
                                    size={18}
                                    className={'me-1'}
                                />
                                Aksi
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                className={'shadow-sm dropdown-menu-arrow rounded-3  border-light border py-0'}
                            >
                                <Dropdown.Header className='border-bottom py-2 bg-light border-light-subtle'>
                                    Lakukan Tindakan sesuai kebutuhan
                                </Dropdown.Header>
                                <div className="p-2">
                                    {actions.map((action, index) => (
                                        <Dropdown.Item
                                            className={'d-flex align-items-center no-pointer-events rounded-3 '}
                                            key={index}>
                                            <span>
                                                {action.icon ? action.icon :
                                                    <IconArrowRight size={16} className={'me-1'}/>}
                                            </span>
                                            <span>
                                                {action.type === "link" ? (
                                                    <Link className={'text-reset'}
                                                          href={action.url}>{action.title}</Link>
                                                ) : (
                                                    <span onClick={() => onAction(action.action)}>{action.title}</span>
                                                )}
                                            </span>
                                        </Dropdown.Item>
                                    ))}
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Card.Body>
            <div className="table-responsive">
                <table className="table table-vcenter table-sm card-table table-hover">
                    <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    colSpan={header.colSpan}
                                    className={'fs-5'}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div
                                            {...{
                                                className:
                                                    header.column.getCanSort()
                                                        ? 'd-flex align-item-center cursor-pointer select-none'
                                                        : 'd-flex align-item-center',
                                                onClick:
                                                    header.column.getToggleSortingHandler(),
                                            }}
                                        >
                                            {flexRender(
                                                header.column.columnDef
                                                    .header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: <IconChevronUp className={'ms-2'} size={15}/>,
                                                desc: <IconChevronDown className={'ms-2'} size={15}/>,
                                            }[
                                                header.column.getIsSorted()
                                                ] ?? null}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className={'py-2'}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef
                                                .footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </tfoot>
                </table>
                <div className="card-footer">
                    <div className="d-flex align-items-center gap-2">
                        <div className="left-section flex-grow-1 d-flex align-items-center gap-2">
                            <button
                                className="border border-light-subtle bg-white rounded p-1"
                                onClick={() => table.setPageIndex(0)}
                                disabled={table.getState().pagination.pageIndex < 2}
                            >
                                {<IconChevronsLeft size={16}/>}
                            </button>
                            <button
                                className="border border-light-subtle bg-white rounded p-1"
                                onClick={() => table.previousPage()}
                                disabled={table.getState().pagination.pageIndex < 2}
                            >
                                {<IconChevronLeft size={16}/>}
                            </button>
                            <button
                                className="border border-light-subtle bg-white rounded p-1"
                                onClick={() => table.setPageIndex(table.getState().pagination.pageIndex == 0 ? table.getState().pagination.pageIndex + 2 : table.getState().pagination.pageIndex + 1)}
                                disabled={!table.getCanNextPage()}
                            >
                                {<IconChevronRight size={16}/>}
                            </button>
                            <button
                                className="border border-light-subtle bg-white rounded p-1"
                                onClick={() =>
                                    table.setPageIndex(table.getPageCount() - 1)
                                }
                                disabled={!table.getCanNextPage()}
                            >
                                {<IconChevronsRight size={16}/>}
                            </button>
                            <div className="d-flex align-items-center gap-1">
                                <div>Halaman</div>
                                <strong>{table.getState().pagination.pageIndex == 0 ? 1 : table.getState().pagination.pageIndex}</strong> dari <strong>{table.getPageCount() - 1}</strong>

                            </div>
                            <div className="d-inline-flex align-items-center gap-1">
                                <span>| Ke Halaman:</span>
                                <span>
                                    <input
                                        min={1}
                                        max={table.getPageCount() - 1}
                                        type="number"
                                        defaultValue={
                                            table.getState().pagination.pageIndex + 1
                                        }
                                        onChange={e => {
                                            table.setPageIndex(e.target.value);
                                        }}
                                        className="form-control text-center"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="right-section d-flex gap-2 align-items-center">
                            <div className="page-info d-flex btn border shadow-none gap-1">
                                <span>Menampilkan <strong>{data.meta.from}</strong> dari <strong>{data.meta.to}</strong> Data</span>
                            </div>
                            <div className="form-group">
                                <select
                                    className='form-select'
                                    value={table.getState().pagination.pageSize}
                                    onChange={e => {
                                        table.setPageSize(Number(e.target.value));
                                    }}
                                >
                                    {[10, 15, 25, 50, 100, 200, 500, 1000].map(pageSize => (
                                        <option key={pageSize} value={pageSize}>
                                            {pageSize} Baris
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SimpleTable;

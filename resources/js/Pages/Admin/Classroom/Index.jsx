import React, {Fragment, useMemo, useState} from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader.jsx";
import {IconDatabaseExport, IconDatabaseImport, IconEdit, IconTrash, IconUserPlus} from "@tabler/icons-react";
import {Button, Card} from "react-bootstrap";
import SimpleTable from "@/Components/SimpleTable.jsx";
import AlertConfirmation from "@/Components/AlertConfirmation.jsx";

const Index = ({classrooms}) => {
    const data = classrooms;
    const [confirm, setConfirm] = useState({
        show: false,
        url: ''
    })

    const columns = useMemo(
        () => [
            {
                header: "SL/Kode",
                accessorKey: 'id',

            },
            {
                header: "Nama Kelas",
                accessorKey: 'name',

            },
            {
                header: "Kode Kelas",
                accessorKey: 'code',

            },
            {
                header: "Dibuat",
                accessorKey: 'created_at',

            },
            {
                header: "Diupdate",
                accessorKey: 'updated_at',
            },
            {
                header: 'Aksi',
                cell: ({row}) => (
                    <Fragment>
                        <div className="btn-group flex gap-1">
                            <Link className={'btn rounded btn-sm border-warning text-warning'}>
                                <IconEdit size={16} stroke={1.8}/>
                            </Link>
                            <Button onClick={() => handleDelete({id: row.original.id})} size={'sm'} variant={'danger'}
                                    className={'rounded'}>
                                <IconTrash size={16} stroke={1.8}/>
                            </Button>
                        </div>
                    </Fragment>
                )
            }
        ],
        []
    )


    const status = [
        {id: 'active', name: 'Aktif', unavailable: false},
        {id: 'non-active', name: 'Non-Aktif', unavailable: false}
    ];

    const actions = [
        {
            title: 'Guru Baru',
            icon: <IconUserPlus className={'me-1'} size={18}/>,
            type: 'link',
            url: route('teacher.create')
        },
        {
            title: 'Import Guru',
            icon: <IconDatabaseImport className={'me-1'} size={18}/>,
            type: 'action',
            action: 'importTeacher'

        },
        {
            title: 'Export Guru',
            icon: <IconDatabaseExport className={'me-1'} size={18}/>,
            type: 'action',
            action: 'exportTeacher'
        },
    ];

    const filters = [
        {
            type: 'select',
            column: 'gender',
            title: 'Jenis Kelamin',
            placeholder: 'Pilih Jenis Kelamin',
            options: [
                {
                    id: 'Laki-Laki',
                    text: 'Laki-Laki',
                },
                {
                    id: 'Perempuan',
                    text: 'Perempuan',
                }
            ]
        },
        {
            type: 'select',
            column: 'status',
            title: 'Status',
            placeholder: 'Pilih Status',
            options: [
                {
                    id: 'active',
                    text: 'Active',
                },
                {
                    id: 'non-active',
                    text: 'Non-Active',
                }
            ]
        },
        {
            type: 'date',
            column: 'created_at',
            title: 'Tanggal Dibuat',
        }
    ];

    const handleDelete = ({id}) => {
        setConfirm({
            url: route('classroom.destroy', {classroom: id}),
            show: true,
        })
    }

    const handleClose = () => {
        setConfirm({
            show: false
        })
    }


    return (
        <div>
            <Head title={'Data Kelas'}/>
            <AlertConfirmation url={confirm.url} show={confirm.show} handleClose={handleClose}/>
            <Card className={'rounded-3 border-light-subtle shadow-sm'}>
                <SimpleTable data={data} columns={columns} actions={[]} filters={[]}/>
            </Card>
        </div>
    );
};
Index.layout = page => (
    <Authenticated
        children={page}
        header={
            <PageHeader pretitle={'Kelas'} title={'Data Kelas'}>

            </PageHeader>
        }
    />
);
export default Index;

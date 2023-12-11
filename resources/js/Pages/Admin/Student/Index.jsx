import React, {Fragment, useMemo, useState} from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PageHeader from "@/Components/PageHeader.jsx";
import SimpleTable from "@/Components/SimpleTable.jsx";
import {Head, Link} from "@inertiajs/react";
import {IconDatabaseExport, IconDatabaseImport, IconEdit, IconTrash, IconUserPlus} from "@tabler/icons-react";
import {Button, Form} from "react-bootstrap";
import AlertConfirmation from "@/Components/AlertConfirmation.jsx";

const Index = ({students}) => {

    const [confirm, setConfirm] = useState({
        show: false,
        url: '',
    })
    const columns = useMemo(
        () => [
            {
                header: "SL/Kode",
                accessorKey: 'id',

            },
            {
                header: "Nama Lengkap",
                accessorKey: 'name',
                cell: ({row}) => (
                    <Link href={route('student.show', row.original.id)}>{row.original.name}</Link>
                )
            },
            {
                header: "Jenis Kelamin",
                accessorKey: 'gender',

            },
            {
                header: "NIS",
                accessorKey: 'nis',

            },
            {
                header: "Phone",
                accessorKey: 'phone',
            },
            {
                header: "Email",
                accessorKey: 'email',

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
            title: 'Siswa Baru',
            icon: <IconUserPlus className={'me-1'} size={18}/>,
            type: 'link',
            url: route('student.create')
        },
        {
            title: 'Import Siswa',
            icon: <IconDatabaseImport className={'me-1'} size={18}/>,
            type: 'action',
            action: 'importTeacher'

        },
        {
            title: 'Export Siswa',
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
    ];

    const handleDelete = ({id}) => {
        setConfirm({
            url: route('student.destroy', {student: id}),
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
            <Head title={'Data Siswa'}/>
            <AlertConfirmation url={confirm.url} show={confirm.show} handleClose={handleClose}/>
            <div className="card rounded-3 border-light shadow-sm">
                <SimpleTable data={students} columns={columns} actions={actions} filters={filters}/>
            </div>
        </div>
    );
};
Index.layout = page => (
    <Authenticated
        children={page}
        header={
            <PageHeader pretitle={'Siswa'} title={'Data Siswa'}>

            </PageHeader>
        }
    />
);
export default Index;

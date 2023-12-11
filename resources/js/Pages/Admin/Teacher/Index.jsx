import React, {Fragment, useState} from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import SimpleTable from '@/Components/SimpleTable.jsx';
import {Head, Link, router} from '@inertiajs/react';
import {
    IconDatabaseExport,
    IconDatabaseImport,
    IconEdit,
    IconPhone,
    IconTrash,
    IconUserPlus
} from '@tabler/icons-react';
import PageHeader from '@/Components/PageHeader.jsx';
import {Button} from "react-bootstrap";
import toast from "react-hot-toast";
import AlertConfirmation from "@/Components/AlertConfirmation.jsx";

const Index = ({teachers}) => {

    const [confirm, setConfirm] = useState({
        url: '',
        show: false,
    })

    const handleDelete = ({id}) => {
        setConfirm({
            url: route('teacher.destroy', {teacher: id}),
            show: true,
        })
    }

    const handleClose = () => {
        setConfirm({
            show: false
        })
    }

    const columns = [
        {
            header: 'Kode',
            accessorKey: 'id'
        },
        {
            header: 'Nama Lengkap',
            accessorKey: 'name'
        },
        {
            header: 'NIP',
            accessorKey: 'nip'
        },
        {
            header: 'Telp',
            accessorKey: 'phone',
            cell: ({row}) => (
                <Fragment>
                    <Link
                        href={'tel:' + row.original.phone}
                        className="flex items-center flex-row-reverse justify-end gap-1 text-blue-600 font-semibold"
                    >
                        {row.original.phone}
                        <IconPhone size={15}/>
                    </Link>
                </Fragment>
            )
        },
        {
            header: 'Jabatan',
            accessorKey: 'position_name'
        },
        {
            header: 'Dibuat Pada',
            accessorKey: 'created_at'
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
    ];

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

    return (
        <div>
            <Head title={'Semua Guru'}/>
            <AlertConfirmation url={confirm.url} show={confirm.show} handleClose={handleClose}/>
            <div className="card rounded-3 border-light shadow-sm">
                <SimpleTable data={teachers} columns={columns} actions={actions}/>
            </div>
        </div>
    );
};
Index.layout = (page) => (
    <Authenticated children={page} header={<PageHeader pretitle={'Pengajuan'} title={'Data Pengajar'}/>}/>
);
export default Index;

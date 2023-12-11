import React, {useMemo} from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader.jsx";
import {IconBook, IconDatabaseExport, IconDatabaseImport, IconUserPlus} from "@tabler/icons-react";
import {Card} from "react-bootstrap";
import SimpleTable from "@/Components/SimpleTable.jsx";

const Index = ({lessons}) => {
    const data = lessons;
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
        ],
        []
    )


    const status = [
        {id: 'active', name: 'Aktif', unavailable: false},
        {id: 'non-active', name: 'Non-Aktif', unavailable: false}
    ];

    const actions = [
        {
            title: 'Tambah Mapel',
            icon: <IconBook className={'me-1'} size={18}/>,
            type: 'link',
            url: route('teacher.create')
        },
        {
            title: 'Import Mapel',
            icon: <IconDatabaseImport className={'me-1'} size={18}/>,
            type: 'action',
            action: 'importTeacher'

        },
        {
            title: 'Export Mapel',
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
    return (
        <div>
            <Head title={'Data Mata Pelajaran'}/>
            <Card className={'rounded-3 shadow-sm border-light-subtle'}>
                <SimpleTable data={data} columns={columns} actions={actions} filters={filters} />
            </Card>
        </div>
    );
};
Index.layout = page => (
    <Authenticated
        children={page}
        header={
            <PageHeader pretitle={'Mata Pelajaran'} title={'Data Mata Pelajaran'}>

            </PageHeader>
        }
    />
);
export default Index;

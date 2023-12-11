import React, {useMemo} from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {IconDoor, IconReportAnalytics, IconSchool, IconShoppingCart, IconUsers} from "@tabler/icons-react";
import {Card} from "react-bootstrap";
import SimpleTable from "@/Components/SimpleTable.jsx";

const Dashboard = ({students}) => {
    const columns = useMemo(
        () => [
            {
                header: "SL/Kode",
                accessorKey: 'id',

            },
            {
                header: "Nama Lengkap",
                accessorKey: 'name',

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
        ],
        []
    )

    return (
        <div>
            <Head title="Dashboard"/>
            <div className="card card-md shadow-sm border-light rounded mb-3">
                <div className="card-stamp card-stamp-lg">
                    <div className="card-stamp-icon bg-primary">
                        <IconSchool size={150} stroke={1.2}/>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-10">
                            <h3 className="h1">Selamat Datang Abd. Asis 🚀</h3>
                            <div className="markdown text-secondary">
                                Selamat datang, Abd. Asis! Terima kasih telah menggunakan aplikasi manajemen pondok
                                pesantren ini. Semoga aplikasi ini membantu Anda dalam mengelola dan memantau kegiatan
                                sehari-hari di pondok pesantren. Jangan ragu untuk menjelajahi berbagai fitur yang
                                tersedia untuk mempermudah tugas Anda. Hari ini, tanggal 6 Desember 2023, mari kita
                                bersama-sama menjadikan pengelolaan pondok pesantren lebih efisien dan berkualitas
                            </div>
                            <div className="mt-3">
                                <Link
                                    href={route('teacher.index')}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <IconReportAnalytics size={18} className={'me-1'}/>
                                    Lihat Laporan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3 row-cards">
                <div className="col-sm-6 col-lg-3">
                    <div className="card border-light-subtle shadow-sm card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-primary text-white avatar">
                                        {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                        <IconSchool/>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        Data Santri
                                    </div>
                                    <div className="text-secondary">
                                        2.325 Santri Aktif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="card border-light-subtle shadow-sm card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-green text-white avatar">
                                        <IconUsers/>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        Data Asatid
                                    </div>
                                    <div className="text-secondary">
                                        82 Asatid
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="card border-light-subtle shadow-sm card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-twitter text-white avatar">
                                        <IconDoor/>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        Data Kelas
                                    </div>
                                    <div className="text-secondary">
                                        23 Kelas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="card border-light-subtle shadow-sm card-sm">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-facebook text-white avatar">
                                        <IconShoppingCart/>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-medium">
                                        Transaksi Harian
                                    </div>
                                    <div className="text-secondary">
                                        234 Total Transaksi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Card className='shadow-sm rounded-3 border-light-subtle'>
                <SimpleTable data={students} columns={columns}/>
            </Card>

        </div>
    );
};
Dashboard.layout = (page) => <Authenticated children={page}/>;
export default Dashboard;

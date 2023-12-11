import React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader.jsx";
import {IconMail, IconPhone, IconReportAnalytics} from "@tabler/icons-react";
import {Card} from "react-bootstrap";

const Show = ({student}) => {
    return (
        <div>
            <Head title={'Detail Siswa'}/>
            <Card className={'border-light-subtle rounded-3 shadow-sm'}>
                <Card.Header className={'border-light-subtle'}>Detail Siswa</Card.Header>
                <div className="row">
                    <div className="col-md-4 border-end border-light-subtle">
                        <Card.Body>

                        </Card.Body>
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <h5 className="fs-4">
                                <IconReportAnalytics size={16} className={'me-1'}/>
                                Riwayat Absensi
                            </h5>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
};

Show.layout = (page) => {
    const student = page.props.student.data;
    return (
        <Authenticated
            children={page}
            header={
                <PageHeader pretitle={student.name} title={student.name} type={'meta'}>
                    <div className="row">
                        <div className="col-auto">
                            <p><IconPhone size={14}/> {student.phone}</p>
                        </div>
                        <div className="col-auto">
                            <p><IconMail size={14}/> {student.email}</p>
                        </div>
                    </div>
                </PageHeader>
            }
        />
    )
};
export default Show;

import React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, useForm} from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader.jsx";
import {Card, Form} from "react-bootstrap";
import InputText from "@/Components/InputText.jsx";
import {IconDeviceFloppy, IconDeviceMobile, IconId, IconMail, IconUser} from "@tabler/icons-react";
import InputSelect from "@/Components/InputSelect.jsx";
import InputTextArea from "@/Components/InputTextArea.jsx";
import toast from "react-hot-toast";

const Create = ({}) => {

    const {data, setData, processing, errors, post, reset} = useForm({
        name: '',
        nis: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
    })

    const submit = (e) => {
        e.preventDefault();
        post(route('student.store'), {
            onSuccess: page => {
                toast.success('Data berhasil disimpan');
                reset('name', 'nis', 'email', 'phone', 'address', 'gender')
            },
            onError: errors => (
                toast.error('Kesalahan Saat Menyimpan Data')
            )
        })
    }

    return (
        <div>
            <Head title='Tambah Siswa'/>
            <Card className={'rounded-3 border-light py-3 shadow-sm'}>
                <form onSubmit={submit}>
                    <div className="row">
                        <div className="col-md-4 border-end border-light">
                            <Card.Body>
                                <h5 className={'fs-4'}>Biodata Siswa</h5>
                                <p>Kamu dapat menambahakn siswa dengan biodata yang dibutuhkan</p>
                                <p>User untuk login siswa akan di ambil berdasarkan <span
                                    className={'fw-semibold'}>Email</span> dan Password sesuai <span
                                    className={'fw-semibold'}>NIS</span></p>
                            </Card.Body>
                        </div>
                        <div className="col">
                            <Card.Body>
                                <InputText
                                    label={'Nama Lengkap'} icon={<IconUser size={16}/>}
                                    placeholder={'Masukan Nama Lengkap'}
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />
                                <InputText label={'NIS'} icon={<IconId size={16}/>}
                                           placeholder={'Masukan Nomor Induk Siswa'}
                                           value={data.nis}
                                           onChange={(e) => setData('nis', e.target.value)}
                                />
                                <InputText label={'Telepon'} icon={<IconDeviceMobile size={16}/>}
                                           placeholder={'Masukan Email'}
                                           value={data.phone}
                                           onChange={(e) => setData('phone', e.target.value)}
                                />
                                <InputText type={'email'} label={'Email'} icon={<IconMail size={16}/>}
                                           placeholder={'Masukan Telepon'}
                                           value={data.email}
                                           onChange={(e) => setData('email', e.target.value)}
                                           errors={errors.email}
                                />
                                <InputSelect
                                    label={'Jenis Kelamin'}
                                    placeholder={'Pilih Jenis Kelamin'}
                                    value={data.gender}
                                    onSelect={e => setData('gender', e.target.value)}
                                    options={[
                                        {
                                            id: 'Laki-Laki',
                                            text: 'Laki-Laki'
                                        },
                                        {
                                            id: 'Perempuan',
                                            text: 'Perempuan'
                                        }
                                    ]}
                                    errors={errors.gender}
                                />
                                <InputTextArea
                                    placeholder={'Masukan Alamat Lengkap'}
                                    label={'Alamat Lengkap'}
                                    name={'address'}
                                    value={data.address}
                                    onChange={e => setData('address', e.target.value)}
                                />
                                <Form.Group className={'text-end'}>
                                    <button disabled={processing} className={'btn btn-primary'}>
                                        <IconDeviceFloppy className={'me-1'} size={16}/>
                                        Simpan
                                    </button>
                                </Form.Group>
                            </Card.Body>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
};
Create.layout = page => (
    <Authenticated
        children={page}
        header={
            <PageHeader pretitle={'Siswa'} title={'Tambah Siswa'}>

            </PageHeader>
        }
    />
);
export default Create;

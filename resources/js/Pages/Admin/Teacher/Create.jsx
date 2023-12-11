import React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, useForm} from "@inertiajs/react";
import InputText from "@/Components/InputText.jsx";
import {IconCalendar, IconDeviceFloppy, IconDeviceMobile, IconId, IconMail, IconUser} from "@tabler/icons-react";
import InputTextArea from "@/Components/InputTextArea.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import PageHeader from "@/Components/PageHeader.jsx";
import InputSelect from "@/Components/InputSelect.jsx";
import {Button, Card} from "react-bootstrap";

const Create = ({positions}) => {

    const {data, setData, processing, post, errors} = useForm({
        name: '',
        nip: '',
        phone_number: '',
        email: '',
        address: '',
        join_at: '',
        position_id: '',
    });

    const positionOptions = positions.map((position) => {
        return({
            id: position.id,
            text: position.name
        })
    })

    const submit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div>
            <Head title="Tambah Pengajar"/>
            <div className="container-wrapper">
                <form onSubmit={submit}>
                    <Card className='border-light shadow-sm rounded-3'>
                        <div className="col-span-1 space-y-2">
                            <Card.Body>
                                <h2 className="text-md font-medium">Pengajar Baru</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                    Kamu bisa menambah user yang dapat mengelola sistem, pengguna disini
                                    memiliki lebih banyak hak akses dari pada user guru dan siswa.
                                </p>
                            </Card.Body>
                        </div>
                        <div className="col-span-2 space-y-6">
                            <Card.Body>
                                <div className="form-group mb-4">
                                    <InputText
                                        icon={<IconUser size={16}/>}
                                        iconPosition={'start'}
                                        label={'Nama Lengkap'}
                                        placeHolder={'Masukan Nama Lengkap'}
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        name={'name'}
                                        error={errors.name}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <InputText
                                        icon={<IconDeviceMobile size={16}/>}
                                        iconPosition={'start'}
                                        placeHolder={'Masukan Telepon'}
                                        label={'Telepon'}
                                        value={data.phone_number}
                                        onChange={e => setData('phone_number', e.target.value)}
                                        name={'phone_number'}
                                        error={errors.phone_number}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <InputText
                                        icon={<IconId size={16}/>}
                                        iconPosition={'start'}
                                        placeHolder={'Masukan NIP'}
                                        label={'Nomor Induk Penduduk'}
                                        value={data.nip}
                                        onChange={e => setData('nip', e.target.value)}
                                        name={'nip'}
                                        error={errors.nip}
                                    />
                                </div>

                                <div className="form-group mb-4 divide-y">
                                    <InputTextArea
                                        label="Alamat"
                                        placeHolder="Masukan Alamat"
                                        name={'address'}
                                        value={data.address}
                                        onChange={e => setData('address', e.target.value)}
                                        error={errors.address}
                                    />
                                </div>
                            </Card.Body>
                        </div>
                        <div className="col-span-1 space-y-2">
                            <Card.Body>
                                <h2 className="text-md font-medium">Kepegawaian</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                    Informasi tentang kepegawaian mengenai tanggal bergabung kamu bisa menetapkan disini
                                </p>
                            </Card.Body>
                        </div>
                        <div className="col-span-2 space-y-6">
                            <Card.Body>
                                <div className="form-group mb-4">
                                    <InputText
                                        icon={<IconCalendar size={16}/>}
                                        iconPosition={'start'}
                                        label={'Tanggal Bergabung'}
                                        placeHolder={'Pilih Tanggal Bergabung'}
                                        type={'date'}
                                        value={data.join_at}
                                        onChange={e => setData('join_at', e.target.value)}
                                        error={errors.join_at}
                                        name={'join_at'}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <InputSelect name={'position_id'}
                                                 onSelect={value => setData('position_id', value.id)}
                                                 placeholder={'Pilih Jabatan'}
                                                 label={'Jabatan'}
                                                 options={positionOptions}/>
                                </div>
                            </Card.Body>
                        </div>
                        <div className="col-span-1 space-y-2">
                            <Card.Body>
                                <h2 className="text-md font-medium">Akun Pengguna</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                                    Informasi Login yang akan digunakan oleh guru, untuk email silahkan atur disini
                                    password akan di set secara default dan guru bisa menggantinya sendiri.
                                </p>
                                <p><span className='font-semibold text-slate-600'>Password</span>: Bismillah</p>
                            </Card.Body>
                        </div>
                        <div className="col-span-2 space-y-6">
                            <Card.Body>
                                <div className="form-group mb-4">
                                    <InputText
                                        icon={<IconMail size={16}/>}
                                        iconPosition={'start'}
                                        placeHolder={'Masukan Email Aktif'}
                                        label={'Email'}
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        error={errors.email}
                                        name={'email'}
                                    />
                                    <small className="text-slate-500">* Email digunakan untuk login</small>
                                </div>
                                <div className="form-group text-end mb-4">
                                    <Button variant={'primary'} disabled={processing}>
                                        <IconDeviceFloppy size={18} className={'me-1'} stroke={1.5}/>
                                        Simpan
                                    </Button>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </form>

            </div>
        </div>
    );
};
Create.layout = page => (
    <Authenticated
        children={page}
        header={<PageHeader pretitle={'Pengajar'} title={'Tambah Pengajar'}/>}
    />
);
export default Create;

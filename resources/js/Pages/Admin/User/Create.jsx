import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import Card from '@/Components/Card.jsx';
import InputText from '@/Components/InputText.jsx';
import { IconDeviceFloppy, IconLock, IconMail, IconUser } from '@tabler/icons-react';
import InputTextArea from '@/Components/InputTextArea.jsx';
import InputPassword from '@/Components/InputPassword.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import toast from 'react-hot-toast';

const Create = ({}) => {
   const { data, setData, post, errors, reset, processing } = useForm({
      name: '',
      email: '',
      password: '',
      address: '',
      password_confirmation: ''
   });

   const submit = (e) => {
      e.preventDefault();
      post(route('pengguna.store'), {
         onSuccess: (page) => {
            reset('name', 'email', 'password', 'address', 'password_confirmation');
            toast.success('Data berhasil disimpan');
         },
         onError: (errors) => {
            toast.error('Terjadi kesalahan saat menyimpan data');
         }
      });
   };
   return (
      <div>
         <Head title="Tambah Pengguna" />
         <div className="container-wrapper">
            <Card className={'grid grid-cols-1 gap-6 divide-gray-50 lg:grid-cols-3'}>
               <div className="col-span-1 space-y-2">
                  <Card.Body>
                     <h2 className="text-md font-medium">Pengguna Baru</h2>
                     <p className="text-sm text-gray-500 dark:text-gray-300">
                        Kamu bisa menambah user yang dapat mengelola sistem, pengguna disini
                        memiliki lebih banyak hak akses dari pada user guru dan siswa.
                     </p>
                  </Card.Body>
               </div>
               <div className="col-span-2 space-y-6">
                  <Card.Body>
                     <form onSubmit={submit}>
                        <div className="form-group mb-4">
                           <InputText
                              icon={<IconUser size={16} />}
                              iconPosition={'start'}
                              label={'Nama Lengkap'}
                              placeHolder={'Masukan Nama Lengkap'}
                              error={errors.name}
                              onChange={(e) => setData('name', e.target.value)}
                              value={data.name}
                           />
                        </div>

                        <div className="form-group mb-4">
                           <InputText
                              icon={<IconMail size={16} />}
                              iconPosition={'start'}
                              type={'email'}
                              placeHolder={'Email Pengguna'}
                              label={'Email'}
                              onChange={(e) => setData('email', e.target.value)}
                              value={data.email}
                           />
                        </div>
                        <div className="form-group mb-4 divide-y">
                           <InputTextArea
                              error={errors.address}
                              label="Alamat"
                              placeHolder="Masukan Alamat"
                              name={'address'}
                              onChange={(e) => setData('address', e.target.value)}
                              value={data.address}
                           />
                        </div>
                        <div className="form-group mb-4">
                           <InputPassword
                              icon={<IconLock size={16} stroke={1.8} />}
                              label={'Password'}
                              placeHolder={'Masukan Password'}
                              name={'password'}
                              onChange={(e) => setData('password', e.target.value)}
                              value={data.password}
                           />
                        </div>
                        <div className="form-group mb-4">
                           <InputPassword
                              icon={<IconLock size={16} stroke={1.8} />}
                              label={'Konfirmasi Password'}
                              placeHolder={'Masukan Konfirmasi Password'}
                              onChange={(e) => setData('password_confirmation', e.target.value)}
                              value={data.password_confirmation}
                           />
                        </div>
                        <div className="form-group flex justify-end mb-4">
                           <PrimaryButton disabled={processing}>
                              <IconDeviceFloppy size={16} stroke={1.5} />
                              Simpan
                           </PrimaryButton>
                        </div>
                     </form>
                  </Card.Body>
               </div>
            </Card>
         </div>
      </div>
   );
};
Create.layout = (page) => <Authenticated children={page} />;
export default Create;

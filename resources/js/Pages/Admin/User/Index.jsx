import React, { Fragment } from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { IconEdit, IconTrash, IconUserPlus } from '@tabler/icons-react';
import { Head, Link } from '@inertiajs/react';
import SimpleTable from '@/Components/SimpleTable.jsx';

const Index = ({ users }) => {
   const columns = [
      {
         header: 'Nama Lengkap',
         accessorKey: 'name'
      },
      {
         header: 'Email',
         accessorKey: 'email'
      },
      {
         header: 'Tanggal Dibuat',
         accessorKey: 'created_at'
      },
      {
         header: 'Aksi',
         accessorKey: 'id',
         cell: ({ row }) => (
            <div className="btn-group flex gap-1">
               <button className="hover:bg-orange-100 p-0.5 rounded-sm text-orange-500">
                  <IconEdit size={16} stroke={1.8} />
               </button>
               <button className="hover:bg-rose-100 p-0.5 rounded-sm text-rose-500">
                  <IconTrash size={16} stroke={1.8} />
               </button>
            </div>
         )
      }
   ];
   return (
      <div>
         <Head title={'Pengguna'} />
         <Link href={route('pengguna.create')} className="btn--primary">
            <IconUserPlus size={16} />
            Pengguna Baru
         </Link>
         <div className="bg-white shadow-sm mt-5 rounded-md py-2">
            <SimpleTable data={users.data} columns={columns} paginate={users} />
         </div>
      </div>
   );
};
Index.layout = (page) => <Authenticated children={page} />;
export default Index;

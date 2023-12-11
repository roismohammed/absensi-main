import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header.jsx';
import Guest from '@/Layouts/GuestLayout.jsx';

const Welcome = ({}) => {
   return (
      <div>
         <Head title="Beranda" />
         <Header />
         <div className="flex justify-center items-center h-screen">
            <div className="tagline-wrapper text-center">
               <h1 className="text-3xl font-bold mb-1">Halo, Selamat Menggunakan Lawintia</h1>
               <p className="font-medium text-lg">
                  Lawintia adalah starter project Laravel + Inertia + Tailwindcss
               </p>
            </div>
         </div>
      </div>
   );
};
Welcome.layout = (page) => <Guest children={page} />;
export default Welcome;

import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
   return (
      <div className="min-h-screen bg-gray-50">
         <main>{children}</main>
      </div>
   );
}

import React, { Fragment, useEffect } from 'react';
import {IconAffiliateFilled, IconCaretDown, IconCaretDownFilled, IconMoon, IconSun} from '@tabler/icons-react';
import { useStore } from '@/Context/useStore.jsx';
import { Avatar } from 'flowbite-react';
import { Menu } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import useSidebarToggle from '@/Components/SidebarToggle.jsx';

const HeaderTwo = () => {
   const { isDarkMode, toggleDarkMode } = useStore();
   const { isExpanded } = useSidebarToggle();

   const handleToggle = () => {
      toggleDarkMode();
      if (localStorage.getItem('color-theme')) {
         if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
         } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
         }

         // if NOT set via local storage previously
      } else {
         if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
         } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
         }
      }
   };

   return (
      <Fragment>
         <header
            className={`h-16 ${
               isExpanded ? 'md:w-[calc(100%-80px)]' : 'md:w-[calc(100%-260px)]'
            } border-b fixed top-0 border-slate-100 flex z-50 py-4 items-center w-full bg-white justify-between shadow-sm shadow-slate-50`}
         >
            <div className="container flex mx-auto px-5">
               <div className="section-start flex-1 flex md:invisible items-center">
                   <IconAffiliateFilled className="text-blue-500" size={34} />
               </div>
               <div className="section-end flex  items-center ">
                  <button
                     onClick={handleToggle}
                     type="button"
                     className="text-slate-700  transition-all group ease-in-out duration-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-200 dark:hover:text-slate-50 dark:focus:ring-slate-200 rounded-full text-sm p-2.5"
                  >
                     {isDarkMode ? (
                        <IconMoon
                           stroke={1.5}
                           id="theme-toggle-dark-icon"
                           className="w-5 h-5 group-hover:rotate-90 transition-transform duration-700"
                        />
                     ) : (
                        <IconSun
                           stroke={1.5}
                           id="theme-toggle-light-icon"
                           className=" w-5 h-5 group-hover:rotate-90 transition-transform duration-700"
                        />
                     )}
                  </button>
                  <Menu as={'section'} className="box-profile relative select-none ">
                     {({ open: profileDropdown }) => (
                        <>
                           <Menu.Button
                              aria-label={'profileDropdown'}
                              className="cursor-pointer focus:ring-2 px-4 focus:ring-blue-200 group rounded-md hover:bg-slate-100 py-1.5 flex gap-2 items-center"
                           >
                              <div className="avatar-item">
                                 <Avatar
                                    placeholderInitials="AS"
                                    status="online"
                                    rounded
                                    statusPosition={'top-right'}
                                    className="group-hover:ring-2 group-hover:ring-slate-50 rounded-full"
                                 />
                              </div>
                              <div className="bio-item">
                                 <h5 className="text-slate-700 font-medium mb-0 leading-none">
                                    Abd. Asis
                                 </h5>
                                 <p className="text-xs font-medium text-slate-400">Gold Member</p>
                              </div>
                              <IconCaretDownFilled size={16} className="text-slate-500" />
                           </Menu.Button>
                           {profileDropdown && (
                              <Menu.Items
                                 static
                                 aria-labelledby="profileDropdown"
                                 id={'profileDropdown'}
                                 as={'div'}
                                 className="bg-white absolute divide-y border border-slate-100 divide-gray-100 rounded-md mt-2 shadow w-44 dark:bg-gray-700 "
                              >
                                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                       <Link
                                          href={route('dashboard')}
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                       >
                                          Dashboard
                                       </Link>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                       >
                                          Settings
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                       >
                                          Earnings
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                       >
                                          Sign out
                                       </a>
                                    </li>
                                 </ul>
                              </Menu.Items>
                           )}
                        </>
                     )}
                  </Menu>
               </div>
            </div>
         </header>
      </Fragment>
   );
};

export default HeaderTwo;

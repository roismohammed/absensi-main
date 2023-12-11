import React, { Fragment } from 'react';
import useSidebarToggle from '@/Components/SidebarToggle.jsx';

const SidebarMenuTitle = ({ title }) => {
   const { isExpanded } = useSidebarToggle();
   return (
      <Fragment>
         <li
            className={`${
               isExpanded
                  ? 'hidden'
                  : 'item-menu px-0 rounded-md text-sm mt-5 mb-2 font-normal text-slate-500'
            }`}
         >
            {title}
         </li>
      </Fragment>
   );
};

export default SidebarMenuTitle;

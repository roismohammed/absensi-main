import React from 'react';

const PageHeader = ({ pretitle, title, children, type }) => {

    if (type == 'meta'){
        return(
           <div>
               <div className="page-header">
                   <div className="container-xl">
                       <div className="row align-items-center">
                           <div className="col-auto">
                               <span className="avatar bg-primary-lt border-primary-subtle avatar-md">ID</span>
                           </div>
                           <div className="col">
                               <h2 className="page-title">{title}</h2>
                               <div className="page-subtitle">
                                   {children}
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
    else{
        return (
            <div>
                <div className="page-header d-print-none">
                    <div className="container-xl">
                        <div className="row g-2 align-items-center">
                            <div className="col">
                                {/* Page pre-title */}
                                <div className="page-pretitle">{pretitle}</div>
                                <h2 className="page-title">{title}</h2>
                            </div>
                            {/* Page title actions */}
                            <div className="col-auto ms-auto d-print-none">
                                <div className="btn-list">{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default PageHeader;

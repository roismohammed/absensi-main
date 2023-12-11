import React, { forwardRef, Fragment, useState } from 'react';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';

const InputPassword = forwardRef(function InputPassword(props, ref) {
   const [isHide, setIsHide] = useState(true);
   const { label, name, error, placeHolder, icon, iconPosition, ...otherProps } = props;
   return (
      <div>
         <label className="font-medium text-sm text-slate-800" htmlFor={name}>
            {label}
         </label>
         {icon != null ? (
            <Fragment>
               {iconPosition == 'end' ? (
                  <div className="input-group overflow-hidden flex items-center focus-within:ring-2 focus-within:ring-blue-600 text-input text-slate-800 rounded-md border border-slate-200 shadow-sm flex w-full">
                     <input
                        {...otherProps}
                        type={isHide ? 'password' : 'text'}
                        placeholder={placeHolder}
                        className="w-full border-0 ps-0 focus:ring-0  text-sm font-medium"
                        id={name}
                        autoComplete={'new-password'}
                        name={name}
                     />
                     <button
                        type={'button'}
                        onClick={() => setIsHide(!isHide)}
                        className="icon-input transition-all duration-700 rounded-md px-3"
                     >
                        {isHide ? (
                           <IconEyeClosed className="text-slate-600" size={14} stroke={1.5} />
                        ) : (
                           <IconEye className="text-slate-600" size={14} stroke={1.5} />
                        )}
                     </button>
                     <span className="icon-input rounded-md px-3">{icon}</span>
                  </div>
               ) : (
                  <div>
                     <div className="input-group overflow-hidden flex items-center focus-within:ring-2 focus-within:ring-blue-600 text-input text-slate-800 rounded-md border border-slate-200 shadow-sm flex w-full">
                        <span className="icon-input rounded-md px-3">{icon}</span>
                        <input
                           {...otherProps}
                           type={isHide ? 'password' : 'text'}
                           placeholder={placeHolder}
                           className="w-full border-0 focus:ring-0 ps-0 text-sm font-medium"
                           autoComplete={'new-password'}
                           id={name}
                           name={name}
                        />
                        <button
                           type={'button'}
                           onClick={() => setIsHide(!isHide)}
                           className="icon-input transition-all duration-700 rounded-md px-3"
                        >
                           {isHide ? (
                              <IconEyeClosed className="text-slate-600" size={14} stroke={1.5} />
                           ) : (
                              <IconEye className="text-slate-600" size={14} stroke={1.5} />
                           )}
                        </button>
                     </div>
                  </div>
               )}
            </Fragment>
         ) : (
            <div className="input-group overflow-hidden flex items-center focus-within:ring-2 focus-within:ring-blue-600 text-input text-slate-800 rounded-md border border-slate-200 shadow-sm flex w-full">
               <input
                  {...otherProps}
                  type={isHide ? 'password' : 'text'}
                  placeholder={placeHolder}
                  className="w-full border-0 focus:ring-0 ps-0 text-sm font-medium"
                  id={name}
                  autoComplete={'new-password'}
                  name={name}
               />
               <button
                  type={'button'}
                  onClick={() => setIsHide(!isHide)}
                  className="icon-input transition-all duration-700 rounded-md px-3"
               >
                  {isHide ? (
                     <IconEyeClosed className="text-slate-600" size={14} stroke={1.5} />
                  ) : (
                     <IconEye className="text-slate-600" size={14} stroke={1.5} />
                  )}
               </button>
            </div>
         )}
      </div>
   );
});

export default InputPassword;

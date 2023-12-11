import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput(
   { type = 'text', className = '', isFocused = false, ...props },
   ref
) {
   const input = ref ? ref : useRef();

   useEffect(() => {
      if (isFocused) {
         input.current.focus();
      }
   }, []);

   return (
      <input
         {...props}
         type={type}
         className={
            'focus:text-slate-600 text-slate-600 border-slate-200 w-full outline-none focus:border-blue-500 transition-all ease-in duration-300 focus:ring-blue-500 rounded-md shadow-sm' +
            className
         }
         ref={input}
      />
   );
});

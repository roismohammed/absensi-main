export default function PrimaryButton({ className = '', disabled, children, ...props }) {
   return (
      <button
         {...props}
         className={
            `inline-flex gap-1.5 items-center px-4 py-2 text-[0.8rem] bg-blue-600 border border-transparent rounded-[4px] font-normal text-xs text-white tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-500 ${
               disabled && 'opacity-25'
            } ` + className
         }
         disabled={disabled}
      >
         {children}
      </button>
   );
}

import React from 'react';

const Card = ({ className, children }) => {
   return (
      <div className={'border border-slate-100 bg-white shadow-sm rounded ' + className}>
         {children}
      </div>
   );
};

const Title = (children) => {
   return <h1>{{ children }}</h1>;
};

const Header = ({ children }) => {
   return <div className="p-5 border-b border-slate-200/30">{children}</div>;
};

const Body = ({ children }) => {
   return <div className="p-5">{children}</div>;
};

const Footer = ({ children }) => {
   return <div className="p-5 bg-slate-100">{children}</div>;
};

export default Object.assign(Card, {
   Title: Title,
   Header: Header,
   Body: Body,
   Footer: Footer
});

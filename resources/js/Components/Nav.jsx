import { Link } from '@inertiajs/react';
import React from 'react';

const NavItem = ({ children }) => {
    return <li className="nav-item ps-1 my-0">{children}</li>;
};

const NavLink = ({ children, href }) => {
    return (
        <Link className="nav-link text-dark fw-medium" href={href}>
            {children}
        </Link>
    );
};

const Icon = ({ children }) => {
    return (
        <span className="nav-link-icon d-md-none text-dark d-lg-inline-block">
            {children}
        </span>
    );
};

const Title = ({ children }) => {
    return <span className="nav-link-title"> {children}</span>;
};

export default Object.assign(NavItem, {
    Link: NavLink,
    Icon: Icon,
    Title: Title,
});

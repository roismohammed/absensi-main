import React, {Fragment, useEffect, useState} from 'react';
import {Accordion} from 'react-bootstrap';
import {Link, usePage} from '@inertiajs/react';
const NavDropdown = ({children, icon, title, target}) => {
    return (
        <li className="nav-item dropdown px-0">
            <Accordion.Item eventKey={target} className="border-0 px-0">
                <Accordion.Header className={'px-0'}>
                    <div className="menu-box d-flex align-items-baseline gap-1">
                        <div className="icon-menu text-dark me-1">{icon}</div>
                        <div className="text-menu text-dark fw-medium">
                            {title}
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body className="py-0 mt-0">
                    <div className="docs-menu-submenu text-dark fw-medium ps-2 d-grid " style={{marginLeft: '3px'}}>
                        {children}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </li>
    );
};

const Item = ({link, title}) => {
    const {url, component} = usePage();
    const page = usePage().props;
    const [active, setActive] = useState(false);

    useEffect(() => {
        const path = new URL(page.ziggy.location).pathname.split('/')[1];
        if (page.ziggy.location == link) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [url]);

    return (
        <Fragment>
            <Link
                className={
                    active
                        ? 'docs-menu-item active text-dark'
                        : 'text-dark docs-menu-item'
                }
                href={link}
            >
                {title}
            </Link>
        </Fragment>
    );
};

export default Object.assign(NavDropdown, {
    Item: Item,
});

import React, { Fragment } from 'react';
import { Link } from '@inertiajs/react';
import {
    IconAdjustments, IconBell,
    IconCircle,
    IconCirclesFilled,
    IconDots,
    IconLogin, IconLogout, IconNotification, IconPrescription,
    IconRegistered,
    IconSettings, IconSettingsX,
    IconSignRight,
    IconSpeakerphone,
    IconUser,
    IconUsers
} from '@tabler/icons-react';
import { Dropdown } from "react-bootstrap";

const Header = ({ user }) => {

    return (
        <Fragment>
            <header className="navbar navbar-expand-md sticky-top d-none d-lg-flex shadow-none border-bottom border-light-subtle d-print-none">
                <div className="container-xl">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu"
                        aria-controls="navbar-menu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-nav flex-row order-md-last">
                        <div className="d-none d-md-flex">
                            <Dropdown className="nav-item dropdown d-none d-md-flex me-3">
                                <Dropdown.Toggle as={'button'}
                                    className="nav-link border"
                                    tabIndex={-1}
                                    aria-label="Show notifications"
                                >
                                    <IconBell size={16} stroke={1.5} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    className="dropdown-menu shadow-sm border-light-subtle dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                    <div className="card">
                                        <div className="card-header border-light-subtle">
                                            <h3 className="card-title">Update Terbaru</h3>
                                        </div>
                                        <div className="list-group list-group-flush border-light-subtle list-group-hoverable">
                                            <div className="list-group-item border-light-subtle">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span
                                                            className="status-dot status-dot-animated bg-red d-block" />
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a href="#" className="text-body d-block">
                                                            Example 1
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Change deprecated html tags to text decoration classes
                                                            (#29604)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="list-group-item-actions">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path
                                                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="status-dot d-block" />
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a href="#" className="text-body d-block">
                                                            Example 2
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            justify-content:between ⇒
                                                            justify-content:space-between (#29734)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="list-group-item-actions show">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-yellow"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path
                                                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span className="status-dot d-block" />
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a href="#" className="text-body d-block">
                                                            Example 3
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Update change-version.js (#29736)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="list-group-item-actions">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path
                                                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <span
                                                            className="status-dot status-dot-animated bg-green d-block" />
                                                    </div>
                                                    <div className="col text-truncate">
                                                        <a href="#" className="text-body d-block">
                                                            Example 4
                                                        </a>
                                                        <div className="d-block text-muted text-truncate mt-n1">
                                                            Regenerate package-lock.json (#29730)
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a href="#" className="list-group-item-actions">
                                                            {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="icon text-muted"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path
                                                                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link d-flex lh-1 text-reset p-0"
                                data-bs-toggle="dropdown"
                                aria-label="Open user menu"
                            >
                                <span
                                    className="avatar avatar-sm"
                                >
                                    AS
                                </span>
                                <div className="d-none d-xl-block ps-2">
                                    <div>{user.name}</div>
                                    <div className="mt-1 small text-muted">{user.roles}</div>
                                </div>
                            </a>
                            <div className="dropdown-menu shadow-sm border-light-subtle dropdown-menu-end dropdown-menu-arrow">
                                <Link href="./profile.html" className="dropdown-item">
                                    <IconUser size={16} className={'me-1'} />
                                    Profile
                                </Link>
                                <Link href="#" className="dropdown-item">
                                    <IconAdjustments size={16} className={'me-1'} />
                                    Preferensi
                                </Link>
                                <Link href="#" className="dropdown-item">
                                    <IconSpeakerphone size={16} className={'me-1'} />
                                    Feedback
                                </Link>
                                <div className="dropdown-divider border-light-subtle" />
                                <Link href="./settings.html" className="dropdown-item">
                                    <IconSettings size={16} className={'me-1'} />
                                    Settings
                                </Link>
                                <Link href="./sign-in.html" className="dropdown-item text-danger">
                                    <IconLogout size={16} className={'me-1'} />
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;

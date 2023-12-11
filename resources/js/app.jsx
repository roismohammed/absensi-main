import './bootstrap';
import '../css/app.css';
import "../dist/css/tabler.min.css"
import "../dist/css/tabler-vendors.min.css"
import "../dist/css/tabler-flags.min.css"
import "../dist/css/tabler-vendors.min.css"
import "../dist/js/tabler.min.js"


import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout.jsx';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true});
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout = page.default.layout || ((page) => <Authenticated children={page}/>);
        return page;
    },
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#1C64F2',
        delay: 500,
        showSpinner: true
    }
});

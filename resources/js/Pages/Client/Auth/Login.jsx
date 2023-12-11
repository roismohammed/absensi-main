import React, { Fragment, useEffect } from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel.jsx';
import TextInput from '@/Components/TextInput.jsx';
import InputError from '@/Components/InputError.jsx';
import Checkbox from '@/Components/Checkbox.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import Guest from '@/Layouts/GuestLayout.jsx';

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Fragment>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="img-container ">
                <div className="container">
                    <div className="row p-5 d-flex justify-content-center align-items-center min-vh-100">
                        <div className="col-md-4 col-sm-8 box-login" >
                            <div className="box-shadow  rounded shadow bg-white p-5 ">
                                <div className='text-center '>
                                    <svg
                                        style={{ width: '60px', height: '60px', marginBottom: '10px', background: '' }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-user-circle text-primary"
                                        width='24'
                                        height='24'
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                    </svg>
                                    <h1 >User Login</h1>

                                </div>
                                <form onSubmit={submit}>
                                    <div>
                                        <InputLabel className='font-bold' htmlFor="email" value="Email" />

                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block form-control w-25 "
                                            autoComplete="username"
                                            placeholder='Alamat email'
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />

                                        <InputError message={errors.email} className="mt-2" />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel htmlFor="password" value="Password" />

                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block form-control"
                                            placeholder='Password'
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                        />

                                        <InputError message={errors.password} className="mt-2" />
                                    </div>
                                    <div className="block mt-4">
                                        <label className="flex items-center justify-beetwen">
                                            <Checkbox
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                            />
                                            <span className="mx-1 text-sm text-gray-600">Remember me</span>



                                        </label>
                                    </div>

                                    <div className="flex items-center justify-end mt-4">

                                        <PrimaryButton className="w-full ml-2 btn btn-primary" disabled={processing}>
                                            Log in
                                        </PrimaryButton>

                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="underline mt-3 text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
Login.layout = (page) => <Guest children={page} />;
export default Login;

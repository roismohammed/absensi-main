import React, {forwardRef, Fragment} from 'react';
import {Form, OverlayTrigger, Popover} from "react-bootstrap";
import {IconHelp} from "@tabler/icons-react";

const InputText = forwardRef(function InputText(props, ref) {
    const {label, name, errors, placeholder, help, icon, iconPosition, ...otherProps} = props;
    const FormHelp = (
        <Popover id="popover-basic" className={'shadow-sm '}>
            <Popover.Header as="h3" className={'d-flex align-items-center gap-1 border-light-subtle'}><IconHelp size={18}/> Bantuan</Popover.Header>
            <Popover.Body>
                {help}
            </Popover.Body>
        </Popover>
    )
    return (
        <Fragment>
            <div className="form-group mb-3">
                <Form.Label htmlFor={name} className='form-label d-flex mb-1'>
                    <span>{label}</span>
                    {help && (
                        <OverlayTrigger trigger={"click"} placement={'auto'} overlay={FormHelp}>
                            <span className="form-help ms-2">?</span>
                        </OverlayTrigger>
                    )}
                </Form.Label>
                {icon != null ? (
                    <Fragment>
                        {iconPosition == 'end' ? (
                            <div
                                className={`input-icon ${
                                    errors ? 'is-invalid' : ''
                                }`}
                            >
                                <input
                                    placeholder={placeholder}
                                    className={`form-control ${
                                        errors ? 'is-invalid' : ''
                                    }`}
                                    id={name}
                                    name={name}
                                    {...otherProps}
                                />
                                <span className="input-icon-addon">{icon}</span>
                            </div>
                        ) : (
                            <div
                                className={`input-icon ${
                                    errors ? 'is-invalid' : ''
                                }`}
                            >
                                <span className="input-icon-addon">{icon}</span>
                                <input
                                    placeholder={placeholder}
                                    className={`form-control ${
                                        errors ? 'is-invalid' : ''
                                    }`}
                                    id={name}
                                    name={name}
                                    {...otherProps}
                                />
                            </div>
                        )}
                    </Fragment>
                ) : (
                    <div>
                        <div className={`input-group flex ${
                            errors ? 'is-invalid' : ''
                        }`}>
                            <input
                                placeholder={placeholder}
                                className={`form-control ${
                                    errors ? 'is-invalid' : ''
                                }`}
                                id={name}
                                name={name}
                                {...otherProps}
                            />
                        </div>
                    </div>
                )}
                {errors && (
                    <span className="invalid-feedback">{errors}</span>
                )}
            </div>
        </Fragment>
    );
});

export default InputText;

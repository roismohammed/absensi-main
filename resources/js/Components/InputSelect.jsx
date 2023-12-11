import React, {Fragment} from 'react';
import {Form, OverlayTrigger, Popover} from "react-bootstrap";
import {IconHelp} from "@tabler/icons-react";

const InputSelect = ({options = [], label, help, onSelect, name, value ,placeholder, errors, props}) => {
    const FormHelp = (
        <Popover id="popover-basic" className={'shadow-sm '}>
            <Popover.Header as="h3" className={'d-flex align-items-center gap-1 border-light-subtle'}><IconHelp size={18}/> Bantuan</Popover.Header>
            <Popover.Body>
                {help}
            </Popover.Body>
        </Popover>
    );
    return (
        <Fragment>
            <Form.Group className={'mb-3'}>
                <Form.Label className='form-label d-flex mb-1'>
                    <span>{label}</span>
                    {help && (
                        <OverlayTrigger trigger={"click"} placement={'auto'} overlay={FormHelp}>
                            <span className="form-help ms-2">?</span>
                        </OverlayTrigger>
                    )}
                </Form.Label>
                <Form.Select className={`${errors && 'is-invalid'}`} value={value} onChange={onSelect} placeholder={placeholder}
                             id={name} name={name}   {...props}>
                    <option value="">{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.id}>{option.text}</option>
                    ))}
                </Form.Select>
                {errors && (
                    <small className="text-danger">{errors}</small>
                )}
            </Form.Group>
        </Fragment>
    );
};

export default InputSelect;

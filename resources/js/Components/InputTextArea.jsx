import React, {forwardRef} from 'react';
import {Form, OverlayTrigger, Popover} from "react-bootstrap";
import {IconHelp} from "@tabler/icons-react";

const InputTextArea = forwardRef(function InputTextArea(props, ref) {
   const { label,  placeholder, error, help, rows = 3, id, name, ...customProps } = props;
   const FormHelp = (
       <Popover id="popover-basic" className={'shadow-sm '}>
           <Popover.Header as="h3" className={'d-flex align-items-center gap-1 border-light-subtle'}><IconHelp size={18}/> Bantuan</Popover.Header>
           <Popover.Body>
               {help}
           </Popover.Body>
       </Popover>
   )
   return (
      <div className="form-group mb-3">
          <Form.Label htmlFor={name} className='form-label d-flex mb-1'>
              <span>{label}</span>
              {help && (
                  <OverlayTrigger trigger={"click"} placement={'auto'} overlay={FormHelp}>
                      <span className="form-help ms-2">?</span>
                  </OverlayTrigger>
              )}
          </Form.Label>
         <textarea
            {...customProps}
            name={name}
            id={id}
            rows={rows}
            placeholder={placeholder}
            className={`form-control ${
               error
                  ? 'is-invalid'
                  : ''
            } `}
         ></textarea>
         {error && (
            <span className="peer-invalid:visible text-xs font-medium text-rose-500">{error}</span>
         )}
      </div>
   );
});

export default InputTextArea;

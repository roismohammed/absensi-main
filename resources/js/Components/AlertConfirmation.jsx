import {Button, Modal} from "react-bootstrap";
import {Fragment, useState} from "react";
import {IconInfoTriangle} from "@tabler/icons-react";
import {router} from "@inertiajs/react";
import toast from "react-hot-toast";

const AlertConfirmation = ({show, handleClose, url}) => {

    const onConfirm = () => {
        router.delete(url, {
            onSuccess: page => {
                handleClose();
                toast.success('Data berhasil dihapus');
            },
            onError: errors => (
                toast.error('Kesalahan saat menghapus data')
            )
        })
    }

    return (
        <Fragment>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="border-top border-danger modal-sm modal-blur"
            >
                <Modal.Header className={'border-light-subtle'} closeButton>
                    <Modal.Title><IconInfoTriangle size={16}/> Yakin ingin menghapus data ini?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Data yang dihapus tidak dapat dikembalikan lagi!
                </Modal.Body>
                <Modal.Footer className={'border-light-subtle'}>
                    <Button variant="danger" onClick={onConfirm}>Ya, Yakin</Button>
                    <Button variant="dark" onClick={handleClose}>
                        Batal
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default AlertConfirmation;

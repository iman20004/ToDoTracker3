import React from 'react';

import { WModal, WMHeader, WMMain, WMFooter, WButton } from 'wt-frontend';

const Delete = (props) => {

    const handleDelete = async () => {
        props.deleteList(props.activeid);
        props.setShowDelete(false);
    }

    return (
        <WModal className="delete-modal" visible={true} cover={true}>
            <WMHeader className="modal-header" onClose={() => props.setShowDelete(false)}>
                Delete List?
			</WMHeader>

            <WMFooter>
                <WButton className="modal-button cancel-button" onClick={() => props.setShowDelete(false)} wType="texted">
                    Cancel
				</WButton>
                <label className="col-spacer">&nbsp;</label>
                <WButton className="modal-button" onClick={handleDelete} clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="danger">
                    Delete
				</WButton>
            </WMFooter>

        </WModal>
    );
}

export default Delete;
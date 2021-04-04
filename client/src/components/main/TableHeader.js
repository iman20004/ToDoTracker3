import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const undoDisable = !props.stack.hasTransactionToUndo();
    const redoDisable = !props.stack.hasTransactionToRedo();
    const clickDisabled = () => { };

    const handleSortByDescription = () => {
        props.sortItems('description');
    }

    const handleSortByDueDate = () => {
        props.sortItems('due_date');
    }

    const handleSortByStatus = () => {
        props.sortItems('completed');
    }

    const handleSortByAssigned = () => {
        props.sortItems('assigned_to');
    }

    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' onClick={handleSortByDescription} wType="texted" >Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' onClick={handleSortByDueDate} wType="texted">Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' onClick={handleSortByStatus} wType="texted" >Status</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' onClick={handleSortByAssigned} wType="texted" >Assigned To</WButton>
            </WCol>

            <WCol size="3">
                <div className="table-header-buttons">
                    <WButton className="table-header-button" onClick={undoDisable ? clickDisabled : props.undo} wType="texted" clickAnimation={undoDisable ? '' : 'ripple-light'} shape="rounded" disabled={undoDisable ? 'true' : ''}>
                        <i className="material-icons">undo</i>
                    </WButton>
                    <WButton className="table-header-button" onClick={redoDisable ? clickDisabled : props.redo} wType="texted" clickAnimation={redoDisable ? '' : 'ripple-light'} shape="rounded" disabled={redoDisable ? 'true' : ''}>
                        <i className="material-icons">redo</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.closeList} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};



export default TableHeader;
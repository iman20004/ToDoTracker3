import React        from 'react';
import TableEntry   from './TableEntry';

const TableContents = (props) => {

    const entries = props.activeList ? props.activeList.items : null;
    
    const isFirst = (key) => {
        const firstID = entries.length >= 1 ? entries[0].id : -1
        return firstID === key
    }

    const isLast = (key) => {
        const LastID = entries.length >= 1 ? entries[entries.length - 1].id : -1
        return LastID === key
    }

    return (
        entries ? <div className=' table-entries container-primary'>
            {
                entries.map((entry, index) => (
                    <TableEntry
                        data={entry} key={entry.id}
                        deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                        editItem={props.editItem}
                        first={isFirst(entry.id)} last={isLast(entry.id)}
                    />
                ))
            }

            </div>
            : <div className='container-primary' />
    );
};

export default TableContents;
import React from 'react';
import { SettingContext } from '../../context/setting/context';
import { useContext } from 'react';
function update(props) {
    const context = useContext(SettingContext);
    const itemPerPageHandeler = (e) => {
        context.setPageItems(parseInt(e.target.value));
        console.log('itemperpage', context.pageItems);
        
    }
    return (
        <div>
            <h1>Update</h1>
            <form >
                <span>Update number of item perPage</span>
                <input type="number" name="itemPerPage" onChange={itemPerPageHandeler} />

                {/* <button type="submit">Add Item</button> */}
            </form>

        </div>
    )
}

export default update

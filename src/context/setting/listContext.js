import React from 'react'
export const ListContext = React.createContext();
import { useState } from 'react';
function listContext(props) {
    const [list, setList] = useState(
        [
            { _id: 1, complete: false, text: 'do assignments', difficulty: 5, assignee: 'Ayah' },
            { _id: 2, complete: true, text: 'study to the exam', difficulty: 5, assignee: 'Ayah' },

            { _id: 3, complete: true, text: 'Buying things for the house ', difficulty: 1, assignee: 'Ahmad' },

            { _id: 4, complete: true, text: 'cooking the lunch', difficulty: 2, assignee: 'Mam' },


        ]
    )


    function addItem(item) {
        // console.log(item);
        item._id = Math.random();
        item.complete = false;
        setList([...list, item]);
        console.log('list-listContext', list);
    }

    function toggleComplete(id) {
        let completedItem = list.filter(item => item._id === id)[0] || {};
        if (completedItem._id) {
            completedItem.complete = !completedItem.complete;
            const newList = list.map(item => {

                item._id === completedItem._id ? completedItem : item;


            });
            setList(newList);
        }
    }

    return (
        <div>
            <ListContext.Provider value={{ list, addItem, toggleComplete }}>
                {props.children}
            </ListContext.Provider>

        </div>
    )



}



export default listContext

// import React from 'react'

// export const PageContext = React.createContext();
// function PageProvider(props) {
//     const [display, setDisplay] = useState(false);
//     const [itemCount, setItemCount] = useState(3);
//     const [sortField, setSortField] = useState('difficulty');
//     const [startingPage, setStartingPage] = useState(1);


//     const state = {
//         display,
//         setDisplay,
//         itemCount,
//         setItemCount,
//         sortField,
//         setSortField,
//         startingPage,
//         setStartingPage,

//     }
//     return (
//         <PageContext.Provider value={state}>
//             {props.children}
//         </PageContext.Provider>
//     )
// }

// export default PageProvider


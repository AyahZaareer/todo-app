// import React from 'react'
// export const ListContext = React.createContext();
// import { useState } from 'react';
// import { useEffect } from 'react';
// import cookie from 'react-cookie';
// function listContext(props) {
//     const [values, setValues] = useState({});
//     const [pageItems, setPageItems] = useState(3);


//     const [list, setList] = useState(
//         [
//             { _id: 1, complete: false, text: 'do assignments', difficulty: 5, assignee: 'Ayah' },
//             { _id: 2, complete: true, text: 'study to the exam', difficulty: 5, assignee: 'Ayah' },

//             { _id: 3, complete: true, text: 'Buying things for the house ', difficulty: 1, assignee: 'Ahmad' },

//             { _id: 4, complete: true, text: 'cooking the lunch', difficulty: 2, assignee: 'Mam' },


//         ]
//     )




//     function addItem(item) {
//         // console.log(item);
//         item._id = Math.random();
//         item.complete = false;
//         setList([...list, item]);
//         console.log('list-listContext', list);
//     }

//     function toggleComplete(id) {
//         let completedItem = list.map(item => {
//             if (item.id === id) {
//                 item.complete = !item.complete;
//             }
//             return item;
//         });

//         setList(completedItem);
//     }

//     function deleteItem(id) {
//         const items = list.filter(item => item.id !== id);
//         setList(items);
//     }

//     const handleSubmit = (event) => {
//         if (event) event.preventDefault();
//         // callback(values);
//         values._id = uuid();
//         values.complete = false;
//         setList([...list, values]);
//         // event.target.reset();
//         // localStorage.setItem('List', JSON.stringify(list));
//     };
//     const handleChange = (event) => {
//         event.persist();
//         setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//     };




//     return (
//         <div>
//             <ListContext.Provider value={{ addItem, list, toggleComplete, handleChange, handleSubmit, deleteItem, setList, pageItems, setPageItems }}>
//                 {props.children}
//             </ListContext.Provider>

//         </div>
//     )



// }



// export default listContext


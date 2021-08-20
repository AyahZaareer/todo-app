import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Form from './Form.jsx';
import { useContext } from 'react';
import { ListContext } from '../../context/setting/listContext.js';

import { v4 as uuid } from 'uuid';
import Header from '../header/Header.jsx';
import List from './list';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoForm from './list';



export const ToDo = () => {
  // console.log('props-todo',props)
  const listContext = useContext(ListContext)

  const [list, setList] = useState(listContext.list);
  const [incomplete, setIncomplete] = useState([]);
  const [values, setValues] = useState({})
  // const { handleChange, handleSubmit } = useForm(addItem);
  // console.log('list-todo', list);
  // function addItem(item) {
  //   console.log(item);
  //   item._id = Math.random();
  //   item.complete = false;
  //   setList([...list, item]);
  // }

  function deleteItem(id) {
    const items = list.filter(item => item._id !== id);
    setList(items);
  }

  // function toggleComplete(id) {

  //   const items = list.map(item => {
  //     if (item.id == id) {
  //       item.complete = !item.complete;
  //     }
  //     return item;
  //   });

  //   setList(items);

  // }
  function toggleComplete(id) {
    let item = list.filter(ele => ele._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      const list2 = list.map(listItem => {

        listItem._id === item._id ? item : listItem;


      });
      setList(list2);
    }
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    // callback(values);
    values._id = uuid();
    values.complete = false;
    setList([...list, values]);
    event.target.reset();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };
  // useEffect(() => {
  //   let list = [
  //     { _id: 1, complete: false, text: 'do assignments', difficulty: 5, assignee: 'Ayah' },
  //     { _id: 2, complete: true, text: 'study to the exam', difficulty: 5, assignee: 'Ayah' },
  //     { _id: 3, complete: true, text: 'Buying things for the house ', difficulty: 1, assignee: 'Ahmad' },
  //     { _id: 4, complete: true, text: 'cooking the lunch', difficulty: 2, assignee: 'Mam' },


  //   ]
  //   setList(list);
  // }, [])

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);


  const editor = (text, id) => {
    let item = list.filter(item => item._id === id)[0] || {};
    if (item) {
      item.text = text;
      let list5 = list.map(itm => {
        if (itm._id === id) {
          return item;
        } else {
          return itm;
        }
      });
      setList(list5);
    }
  };

  return (
    <>

      <Header incomplete={incomplete} />
      {/* <header>
        <h2>
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </h2>
      </header> */}
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />



      <List list={list}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
        editor={editor} />

      {/* {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))} */}

    </>
  );
};

export default ToDo;



// import React, { useEffect, useState } from 'react';
// import useForm from '../../hooks/form.js';

// import { v4 as uuid } from 'uuid';
// import Header from '../header/Header.jsx';
// import List from './list';

// const ToDo = (props) => {

//   const [list, setList] = useState([]);
//   const [incomplete, setIncomplete] = useState([]);
//   const { handleChange, handleSubmit } = useForm(addItem);

//   function addItem(item) {
//     console.log(item);
//     item.id = uuid();
//     item.complete = false;
//     setList([...list, item]);
//   }

//   function deleteItem(id) {
//     const items = list.filter(item => item.id !== id);
//     setList(items);
//   }

//   function toggleComplete(id) {

//     const items = list.map(item => {
//       if (item.id == id) {
//         item.complete = !item.complete;
//       }
//       return item;
//     });

//     setList(items);

//   }

//   useEffect(() => {
//     let incompleteCount = list.filter(item => !item.complete).length;
//     setIncomplete(incompleteCount);
//     document.title = `To Do List: ${incomplete}`;
//   }, [list]);

//   return (
//     <>
//       <Header incomplete={incomplete} />


//       <form onSubmit={handleSubmit}>

//         <h2>Add To Do Item</h2>

//         <label>
//           <span>To Do Item</span>
//           <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
//         </label>

//         <label>
//           <span>Assigned To</span>
//           <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
//         </label>

//         <label>
//           <span>Difficulty</span>
//           <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
//         </label>

//         <label>
//           <button type="submit">Add Item</button>
//         </label>
//       </form>

//       <List assignee={props.assignee} difficulty={props.difficulty} toggleComplete={toggleComplete} />

//       {/* {list.map(item => (
//         <div key={item.id}>
//           <p>{item.text}</p>
//           <p><small>Assigned to: {item.assignee}</small></p>
//           <p><small>Difficulty: {item.difficulty}</small></p>
//           <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
//           <hr />
//         </div>
//       ))} */}

//     </>
//   );
// };

// export default ToDo;

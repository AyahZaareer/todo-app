

import React, { useContext, useEffect, useState } from 'react';

import "./todo.css"
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import List from './List'



import { FormGroup, InputGroup, Button,  Label } from "@blueprintjs/core";
// import { Label } from 'blueprint-components';

import { ListContext } from '../../context/setting/Setting';

const ToDo = (props) => {
  const { handleSubmit, handleChange } = useContext(ListContext);

  const [incomplete, setIncomplete] = useState([]);
  const listObject = useContext(ListContext);





  useEffect(() => {
    let incompleteCount = listObject.list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [listObject.list, incomplete]);


  return (
    <>


      <h1 style={{
          margin:'2rem',
          display: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
         
        }}>{incomplete} items pending</h1>

      <card style={{
       
          display: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          weidth: '20rem',
          margin:'3rem'
        }}
      className='app'>



        <FormGroup  >

          <h2 intent="danger">Add ToDo Item</h2>

          <Label intent="danger">
            <span
            style={{
              padding: '1rem',
              display: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              weidth: '20rem',
              fontWeight:'bold'
            }}>ToDo Item</span>
            <InputGroup 
            onChange={handleChange} name="text" type="text" placeholder="Item Details" intent="danger" autoComplete="off" />
          </Label>
          <Label intent="danger">
            <span style={{
              padding: '1rem',
          fontWeight:'bold',
          display: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          weidth: '20rem'
        }}
            >Assigned To</span>
            <InputGroup onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" intent="danger" autoComplete="off" />
          </Label>

          <Label style={{
              padding: '1rem',
          fontWeight:'bold',
          display: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          weidth: '20rem'
        }}
           >
            <span>Difficulty</span>
            < input onChange={handleChange} defaultValue={5} type="range" min={1} max={10} name="difficulty" intent="danger" class="range" />
          </Label>

          <Label>
            <Button style={{
          backgroundColor: '#3397a5',
          display: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          weidth: '20rem'
        }} className="btn" type="click" onClick={handleSubmit} >Add Item</Button>
          </Label>
        </FormGroup>
      </card>


      <List />
    </>
  );
};

export default ToDo;

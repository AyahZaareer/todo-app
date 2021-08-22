

import React, { useContext, useState, useEffect } from 'react';

import { Card, Button, Elevation, Icon, Label } from "@blueprintjs/core";

import { ListContext } from '../../context/setting/Setting';


function List(props) {

  const { list, toggleComplete, deleteItem, itemNumber, handlePaginationChange, displayComplete, done, setDone, a } = useContext(ListContext);




  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemNumber);
  // console.log(ListContext.list)
  // let x = props.list.length;
  function next() {
    setStartIndex(startIndex + itemNumber);
    setEndIndex(endIndex + itemNumber);
  }


  function previous() {
    setStartIndex(startIndex - itemNumber);
    setEndIndex(endIndex - itemNumber);
  }

  //   function next() {
  //     if (endIndex < x) {
  //         // console.log('stopIndex/list', stopIndex);
  //         setFirstIndex(startIndex +itemNumber);
  //         setEndIndexIndex(stopIndex + itemNumber);
  //     }
  // }

  // function previous() {
  //     if (startIndex > 0) {
  //         FirstsetIndex(startIndex - itemNumber);
  //         setStopIndex(endIndex - itemNumber);
  //     }
  // }



  useEffect(() => {
    setStartIndex(0);
    setEndIndex(itemNumber);
  }, [itemNumber]);






  useEffect(() => {
    setDone(list);
  }, [list]);




  const listOfTodos = done.slice(startIndex, endIndex).map((item, idx) => {

    let deff;
    if (item.difficulty > 7) { deff = 'hard' }
    else if (item.difficulty > 5 && item.difficulty <= 7) { deff = 'medium' }
    else { deff = 'easy' }
    return (


      <Card style={{
        width: '30rem',
        margin: '1rem'
      }}
        interactive={true} elevation={Elevation.TWO}>
        <h3 style={{
          backgroundColor: '#3397a5',
          display: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          weidth: '20rem'
        }}
        >List : {item.text}</h3>
        <h4 style={{

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          weidth: '20rem'
        }}
        >Assigned to: {item.assignee}</h4>
        <h4 style={{

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          weidth: '20rem'
        }}
        >difficulty : {deff}</h4>
        <Button style={{

          display: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          weidth: '20rem',
          margin: '1rem'
        }}
          className="btn" onClick={() => toggleComplete(item)}>{item.complete ? 'complete' : "incomplete"}</Button>
        <Button style={{


          background: '#d41010',
          weidth: '20rem',
          margin: '1rem'
        }}
          className="btn" onClick={() => deleteItem(item._id)}>Delete</Button>
      </Card>
    )
  });



  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }} >
      <Label>
        <Label style={{

          weidth: '20rem',
          margin: '1rem',
          marginRight: '20rem',
          fontWeight:'bolder'
        }}> Change Items Per Page</Label>

        <input style={{



          weidth: '20rem',
          margin: '1rem',
          marginRight: '20rem',
        }} onChange={handlePaginationChange} defaultValue={endIndex} type="range" min={1} max={5} name="items-per-page" />
      </Label>

      <button style={{


        marginRight: '20rem',
        weidth: '20rem',
        
        // display: 'flex',
      }} className={a} onClick={displayComplete}>
        incomplete
      </button>
      <ul >
        {listOfTodos}
      </ul>
      {/* <Icon icon="double-chevron-left" onClick={() => next()}></Icon>
      <Icon icon='double-chevron-right' onClick={() => previous()}></Icon> */}


      <Button
        style={{


          background: '#3d7b92',
          weidth: '20rem',
          margin: '1rem'
        }} onClick={() => previous()}> Previous </Button>

      <Button style={{


        background: '#3d7b92',
        weidth: '20rem',
        margin: '1rem'
      }} onClick={() => next()} > Next </Button>


    </div >
  )
}

export default List

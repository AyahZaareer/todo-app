import React from 'react'
import { SettingContext } from '../../context/setting/context';
import { If, Else } from 'react-if';
import { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button } from 'react-bootstrap';
import ItemCard from './Card';



function list(props) {
    console.log('props.list',props.list)
    const settingContext = useContext(SettingContext);

    const [index, setIndex] = useState(0);
    const [stopIndex, setStopIndex] = useState(settingContext.pageItems);
    console.log('itemperPage/list', settingContext.pageItems);
  
    let length = props.list.length;




    function nextPage() {
        if (stopIndex < length) {
            console.log('stopIndex/list', stopIndex);
            setIndex(index + settingContext.pageItems);
            setStopIndex(stopIndex + settingContext.pageItems);
        }
    }

    function prevPage() {
        if (index > 0) {
            setIndex(index - settingContext.pageItems);
            setStopIndex(stopIndex - settingContext.pageItems);
        }
    }
    return (
        <div>
            <ListGroup>
   

                {props.list.filter(item => (settingContext.completed ? true : !item.complete)).sort((item1, item2) => {
                    let x;
                    settingContext.difficulty === 'Ascending' ? (x = 1) : (x = -1);
                    if (item1.difficulty > item2.difficulty) {
                        return x;
                    }
                    if (item1.difficulty < item2.difficulty) {
                        return x * -1;
                    } else {
                        return 0;
                    }
                }).slice(index, stopIndex).map(item => (
                    <>
                        <If condition={item.complete}>
                            <ItemCard
                                color={'success'}
                                asignee={item.assignee}
                                title={item.text}
                                diff={item.difficulty}
                                key={item._id}
                                callDelete={() => { props.deleteItem(item._id); }}
                                callToggle={() => { props.toggleComplete(item._id); }}
                                badge={'Completed'} />

                        </If>
                        <Else condition={item.complete}>
                            <ItemCard
                                color={'danger'}
                                asignee={item.assignee}
                                title={item.text}
                                diff={item.difficulty}
                                key={item._id}
                                callDelete={() => { props.deleteItem(item._id); }}
                                callToggle={() => { props.toggleComplete(item._id); }}
                                badge={'In Progress'}
                            />
                        </Else>
                    </>
                ))}
                {length > 4 &&
                    <div>
                        <Button size="sm" className="m-3" onClick={prevPage}>Prev</Button>
                        <Button size="sm" className="m-3" onClick={nextPage}>Next</Button>
                    </div>}


            </ListGroup>

        </div >
    )
}

export default list





// import React, { useState } from 'react';
// export const SettingContext = React.createContext();
// import { useEffect } from 'react';
// import cookie from 'react-cookie';
// function SettingtProvider(props) {
//     const [itemPerPage, setItemPerPage] = useState(3);


//     const [difficulty, setDifficulty] = useState('Ascending');

//     const [showCompleted, setShowCompleted] = useState(false);


//     // const handleSubmit = async (event) => {
//     //     if (event) event.preventDefault();
//     //     // callback(values);
//     //     // values._id = uuid();
//     //     values.complete = false;
//     //     let incompleteCount = list.filter((item) => !item.complete).length;
//     //     setIncomplete(incompleteCount);
//     //     event.target.reset();
//     //     setList([...list, values]);

//     //     const token = cookie.load('auth');

//     //     const config = {
//     //         headers: { Authorization: `Bearer ${token}` },
//     //     };
//     //     await axios.post(`${API}/todo`, values, config);
//     // }

//     // const handleChange = (event) => {
//     //     setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//     // };

//     // async function toggleComplete(id) {

//     //     let obj;
//     //     let completedItem = list.map(item => {
//     //         if (item._id === id) {
//     //             item.complete = !item.complete;
//     //             obj = { complete: item.complete }
//     //         }
//     //         return item;
//     //     });

//     //     setList(completedItem);
//     //     const token = cookie.load('auth');
//     //     const config = {
//     //         headers: { Authorization: `Bearer ${token}` },
//     //     };
//     //     await axios.put(`${API}/todo/${id}`, obj, config);
//     // }
//     // function handleNumber(e) {
//     //     setNumber(Number(e.target.value));
//     // }


//     // function handleIncomplete() {
//     //     setshowIncomplete(!showIncomplete);
//     // }

//     // async function deleteItem(id) {
//     //     const items = list.filter(item => item.id !== id);
//     //     setList(items);
//     //     const token = cookie.load('auth');
//     //     const config = {
//     //         headers: { Authorization: `Bearer ${token}` },
//     //     };
//     //     await axios.delete(`${API}/todo/${id}`, config);
//     // }

//     // function save(e) {
//     //     e.preventDefault();
//     //     const obj = { number: e.target.pageNumber.value, showIncomplete: e.target.incomplete.value };
//     //     localStorage.setItem('settings', JSON.stringify(obj));
//     //     setLocalStorage(storage + 1);
//     // }

//     // useEffect(() => {
//     //     let local = localStorage.getItem('settings');
//     //     if (local) {
//     //         let settings = JSON.parse(local);
//     //         setNumber(Number(settings.number));
//     //         if (settings.showIncomplete == 'true') setShowIncomplete(true);
//     //         if (settings.showIncomplete == 'false') setShowIncomplete(false);
//     //     }
//     // }, [storge])

//     // useEffect(async () => {
//     //     const token = cookie.load('auth');
//     //     const config = {
//     //         headers: { Authorization: `Bearer ${token}` },
//     //     };
//     //     const request = await axios.get(`${API}/todo/`, config);
//     //     setList(request.data);

//     // }, [])


//     const settingStata = {

//         showCompleted,
//         difficulty,
//         itemPerPage,
//         setShowCompleted,
//         setDifficulty,
//         setItemPerPage



//     }

//     // useEffect(() => {
//     //     const localSetting = JSON.parse(localStorage.getItem('setting'));
//     //     if (localSetting) {
//     //         setPageItems(Number(localSetting.pageItems));
//     //         setCompleted(completed);
//     //     }
//     // }, [])
//     return (
//         <SettingContext.Provider value={settingStata}>
//             {props.children}
//         </SettingContext.Provider>
//     )
// }

// export default SettingtProvider




import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../../context/auth/auth'
export const ListContext = React.createContext();


function List(props) {

    const [list, setList] = useState([]);
    const [values, setValues] = useState({});
    const [itemNumber, setItemNumber] = useState();
    const [a, setA] = useState("on");
    const [done, setDone] = useState([]);
    const { user } = useContext(AuthContext);


    let API_TO = 'https://api-js401.herokuapp.com/api/v1/todo'


    async function handleSubmit(event) {

        // if (user.capabilities.includes('create')) {
            if (event) event.preventDefault();
            values.id = uuid();
            values.complete = false;

            console.log(values);
            let item1 = [...list, values]
            let item = {
                "complete": values.complete,
                "difficulty": values.difficulty,
                "id": values.id,
                "text": values.text,
                "assignee": values.assignee,
            }

                ; let a = await axios.post(API_TO, item)
            let c = (await axios.get(API_TO)).data.results
            console.log(c);
            setList(c);
        // } else { alert("you cant creat") }
    }




    function handlePaginationChange(e) {
        // if (user.capabilities.includes('update')) {
            localStorage.setItem('itemNumber', JSON.stringify(e.target.value))
            setItemNumber(JSON.parse(localStorage.getItem('itemNumber')));
        // } else { alert("you cant edit") }
    }
    function handleChange(event) {
        console.log(event.target.value, "kkkkkk");
        setValues((values) => ({ ...values, [event.target.name]: event.target.value }));

    }

    let getList = async () => {
        let c = (await axios.get(API_TO)).data.results
        setList(c);
    }
    let getItemNum = async () => {
        if (JSON.parse(localStorage.getItem('itemNumber'))) {
            setItemNumber(Number(JSON.parse(localStorage.getItem('itemNumber'))))
        }
        return () => {
            let localList = Number(JSON.parse(localStorage.getItem('itemNumber')))

            setItemNumber(localList);
        }
    }



    useEffect(async () => {

        getItemNum().then(() => { console.log("done") })

        getList().then(() => { console.log("done") })
        let c = (await axios.get(API_TO)).data.results
        setList(c);


    }, [])
    function displayComplete() {
        // if (user.capabilities.includes('update')) {
            if (done === list)
                setDone(() => done.filter((item) => item.complete !== true));
            else setDone(list);

            done === list ? setA('off') : setA('on')
        // } else { alert("you cant update") }
    }

    async function toggleComplete(item) {

        // if (user.capabilities.includes('update')) {

            item.complete = !item.complete;
            let l = {
                "complete": item.complete
            }
            let a = await axios.put(`${API_TO}/${item._id}`, l)
            let c = (await axios.get(API_TO)).data.results
            setList(c);


        // } else { alert("you cant update") }
    }


    async function deleteItem(_id) {
        // if (user.capabilities.includes('delete')) {
            let a = await axios.delete(`${API_TO}/${_id}`)
            console.log(a);
            let c = (await axios.get(API_TO)).data.results
            console.log(c);
            setList(c);
        // } else { alert("you cant delete") }
    }

    return <ListContext.Provider value={{ list, handleSubmit, handleChange, toggleComplete, handlePaginationChange, a, setA, deleteItem, itemNumber, setItemNumber, setList, displayComplete, done, setDone }}>{props.children}</ListContext.Provider>;
}

export default List;
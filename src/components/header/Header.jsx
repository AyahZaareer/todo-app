import React from 'react'

function Header(props) {
    return (
        <div>
           <h1>To Do List: {props.incomplete} items pending</h1>
        </div>
    )
}

export default Header

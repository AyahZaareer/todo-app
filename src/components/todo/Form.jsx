import React from 'react'

function Form(props) {
    return (
        <div>
            <h2>Add to do list</h2>
            <form onSubmit={props.handleSubmit}>
                <span>To do item</span>
                <input type="text" name="text" placeholder="Item Details" onChange={props.handleChange} />
                <span>Assigned</span>
                <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                <span>Difficulty</span>
                <input onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
                <button type="submit">Add Item</button>
            </form>

        </div>
    )
}

export default Form

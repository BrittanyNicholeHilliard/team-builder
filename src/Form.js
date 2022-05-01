import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'



export default function Form(props) {

    const { change, submit, values } = props

    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value)
    }
    /**const name = event.target.name;
     * const value= event.target.value;
     * 
    
     */


        const handleSubmit = event => {
            event.preventDefault();
            props.submit();
        }

return(
<form onSubmit={handleSubmit}>
    <label>Name: 
    <input
    type="text"
    name="name"
    placeholder="Name"
    value={props.values.name}
    onChange={handleChange}
    />
    </label>
    <label>Email Address: 
        <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={props.values.email}
        onChange={handleChange} />
    </label>
    <label>Role: 
        <input
        placeholder="Enter role here"
        name="role"
        value={props.values.role}
        onChange={handleChange} />
    </label>
    <input type="submit" value="Create Your Teammate" />

</form>

)

}
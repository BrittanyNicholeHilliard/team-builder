import './App.css';
import React, {useState} from 'react'
import Form from './Form.js'


function App() {

const [members, setMembers] = useState([]);
const [values, setFormValues] =useState({name: '', email: '', role: ''})

const onSubmit = () => {
  setMembers([values, ...members]);
  setFormValues({name: '', email: '', role: ''})
}

const onChange = (name, value) => {
  setFormValues({...values, [name]: value})
}

  return (
    <div className="App">
      <h1> Team Building App </h1>
    <Form 
    values={values}
    change={onChange}
    submit={onSubmit}/>

    {members.map(member => {
        return (
            <div>
               {member.name}: {member.email}, {member.role}
            </div>
        )
    })}

    </div>
  );
}

export default App;

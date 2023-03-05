import React, {useState, useRef} from 'react'
const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [nameIsvalid, SetNameIsvalid] = useState(true)
  const inputRef = useRef();
  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === '') {
      SetNameIsvalid(false);
      return
    }
    const enteredName = inputRef.current.value
    setName('')
    console.log(name)
    console.log(enteredName)
  }
  const nameInputClass = !nameIsvalid ? 'form-control invalid' : "form-control";
  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} ref={inputRef} onChange={nameHandler} />
        {!nameIsvalid && <p className='error-text'>Name is invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import React, {useState, useRef, useEffect} from 'react'
const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [nameIsvalid, SetNameIsvalid] = useState(false)
  const inputRef = useRef();

  useEffect(() => {
    if(nameIsvalid) {
      console.log("Name Input is not valid")
    }
  },[nameIsvalid])

  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === '') {
      SetNameIsvalid(true);
      return
    }
    const enteredName = inputRef.current.value
    setName('')
    console.log(name)
    console.log(enteredName)
    SetNameIsvalid(false)
  }
  const nameInputClass = nameIsvalid ? 'form-control invalid' : "form-control";
  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} ref={inputRef} onChange={nameHandler} />
        {nameIsvalid && <p className='error-text'>Name is invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

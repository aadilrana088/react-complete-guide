import React, {useState, useRef} from 'react'
const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const inputRef = useRef();
  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = inputRef.current.value
    console.log(name)
    console.log(enteredName)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={inputRef} onChange={nameHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

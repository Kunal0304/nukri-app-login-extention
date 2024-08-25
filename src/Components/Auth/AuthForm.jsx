import React, { useState } from 'react';
import './Form.css';
import LoginForm from './LoginForm';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='logo512.png' alt='spaceship' />
        </div>
          <LoginForm submitForm={submitForm} setLoginPage= {setIsSubmitted} /> 
      </div>
    </>
  );
};

export default Form;

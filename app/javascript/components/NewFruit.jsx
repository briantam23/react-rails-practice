import React from 'react';

const NewFruit = ({ handleFormSubmit }) => {
  
  const handleSubmit = (formFields, e) => {
    handleFormSubmit(formFields.name.value, formFields.description.value); 
    e.target.reset();
  }

  const formFields = {};
  
  return(
    <form onSubmit={ e => handleSubmit(formFields, e) }>
      <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
      <input ref={input => formFields.description = input} placeholder='Enter a description' />
      <button>Submit</button>
    </form>
  )
}

export default NewFruit;
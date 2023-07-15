import React from 'react';
import Button from './Button';

const Form = () => (
  <div className="form-container">
    <h3>Add a Book</h3>
    <form>
      <input type="text" placeholder="Book title" id="title " />
      <input type="text" placeholder="Book author" id="author" />
      <Button type="button" label="Submit" />
    </form>
  </div>
);

export default Form;

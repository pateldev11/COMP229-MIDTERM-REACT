import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './Addproduct'; // Import AddProduct component
import SignUpUser from './SignUpUser'; // Import SignUpUser component

ReactDOM.render(
  <React.StrictMode>
    <div>
      <AddProduct />
      <SignUpUser />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

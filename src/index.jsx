import React from 'react';
import ReactDOM from 'react-dom';
import Customers from './components/Customers';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <div>

<div className="container">
<h1> Hello World </h1>
<Customers />
</div>

    </div>
  
);


ReactDOM.render(<App />, document.getElementById('root'));
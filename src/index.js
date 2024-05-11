import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './component/TodoList';


function App() {
    return (
      <Fragment>
         <TodoList/>
      </Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);



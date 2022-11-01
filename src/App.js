import { Fragment } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Fragment>
          <h1 className='heading'>ToDo App</h1>
          <Todo/>
      </Fragment>
    </div>
  );
}

export default App;

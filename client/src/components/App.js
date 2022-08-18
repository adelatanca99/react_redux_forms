import React from 'react';
import './App.css'
import Form from './Form';

const App = () => {
  return (
    <>
      <div className='container'>Forms with Formik</div>
      <div className="App">
        <Form />
      </div>
    </>
  );
};

export default App;




// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import StreamCreate from './streams/StreamCreate';
// import StreamEdit from './streams/StreamEdit';
// import StreamDelete from './streams/StreamDelete';
// import StreamList from './streams/StreamList';
// import StreamShow from './streams/StreamShow';
// import Header from './Header';

{/* <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
          </Switch>
          <Route path="/" exact component={StreamList} />

          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter> */}
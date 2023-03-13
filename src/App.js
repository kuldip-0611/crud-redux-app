import { useState } from 'react';
import './App.css';
import CrudCard from './components/CrudCard';

import EditForm from './components/EditForm';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal';
import { Button } from 'reactstrap';




function App() {

  return (
    <div className="App">
      <CrudCard />
      <EditForm />








    </div>
  );
}

export default App;

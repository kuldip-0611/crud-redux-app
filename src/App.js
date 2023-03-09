import { useState } from 'react';
import './App.css';
import CrudCard from './components/CrudCard';

import EditForm from './components/EditForm';
import ModalComponent from './components/ModalComponent';
import { Button } from 'reactstrap';


function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
      <CrudCard />
     <EditForm />

     {/* <ModalComponent /> */}


    </div>
  );
}

export default App;

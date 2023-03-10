import { useState } from 'react';
import './App.css';
import CrudCard from './components/CrudCard';

import EditForm from './components/EditForm';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal';
import { Button } from 'reactstrap';
import FormUsinfFormik from './components/FormUsinfFormik';



function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
      {/* <CrudCard />
      <EditForm /> */}

      <FormUsinfFormik />

    
      



    </div>
  );
}

export default App;

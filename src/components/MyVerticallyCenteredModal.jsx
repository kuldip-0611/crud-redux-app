import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  FormFeedback,
  FormText,
  Input,
} from "reactstrap";
import { editperticularForm } from "../features/userSlice";

function MyVerticallyCenteredModal(props) {
  const [user, setUser] = useState({
    id: props.item.id,
    name: props.item.name,
    email: props.item.email,
    phone: props.item.phone,
    website: props.item.website,
  });

  const inputsHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const editData = ()=>{
     dispatch(editperticularForm({ user }))
     {props.onHide()}
  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Basic Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <Label className="text-start" for="exampleEmail">
                Name
              </Label>
              <Input
                id="exampleEmail"
                name="name"
                placeholder="with a placeholder"
                type="text"
                onChange={inputsHandler}
                value={user.name}
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-start" for="examplePassword">
                Email
              </Label>
              <Input
                id="examplePassword"
                name="email"
                placeholder="email placeholder"
                type="email"
                onChange={inputsHandler}
                value={user.email}
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-start" for="exampleEmail">
                Phone
              </Label>
              <Input
                id="exampleEmail"
                name="phone"
                placeholder="with a placeholder"
                type="tel"
                onChange={inputsHandler}
                value={user.phone}
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-start" for="exampleEmail">
                Website Link
              </Label>
              <Input
                id="exampleEmail"
                name="website"
                placeholder="with a placeholder"
                type="text"
                onChange={inputsHandler}
                value={user.website}
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={editData}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ))} */}
    </>
  );
}
export default MyVerticallyCenteredModal;

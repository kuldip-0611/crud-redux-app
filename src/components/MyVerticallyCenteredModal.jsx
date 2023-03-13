import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Field, Formik, Form, ErrorMessage, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Col } from "reactstrap";
import * as yup from "yup";
import { editperticularForm } from "../features/userSlice";

function MyVerticallyCenteredModal(props) {
  const value = {
    id: props.item.id,
    name: props.item.name,
    email: props.item.email,
    phone: props.item.phone,
    website: props.item.website,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter your name"),
    email: yup
      .string()
      .required("please enter mail")
      .email("please enter valid email"),
    phone: yup.string().required("please enter phone number"),
    website: yup.string().required("please enter website link"),
  });

  const dispatch = useDispatch();

  const editData = (values) => {
    dispatch(editperticularForm(values));

    props.onHide();
  };
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
          <Formik
            initialValues={value}
            validationSchema={validationSchema}
            onSubmit={editData}
          >
            <Form className="w-100">
              <Col>
                <lable>Name</lable>
                <Field type="text" name="name" className="w-100" />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </Col>
              <Col>
                <lable>Email</lable>
                <Field type="email" name="email" className="w-100" />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </Col>
              <Col>
                <lable>Phone</lable>
                <Field type="tel" name="phone" className="w-100" />
                <p className="text-danger">
                  <ErrorMessage name="phone" />
                </p>
              </Col>
              <Col>
                <lable>Website</lable>
                <Field type="text" name="website" className="w-100" />
                <p className="text-danger">
                  <ErrorMessage name="website" />
                </p>
              </Col>
              <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button type="submit">OK</Button>
              </Modal.Footer>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
      {/* ))} */}
    </>
  );
}
export default MyVerticallyCenteredModal;

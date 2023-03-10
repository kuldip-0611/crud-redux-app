import { Field, Formik, Form ,ErrorMessage} from "formik";
import React from "react";
import { Col, Container } from "reactstrap";
import * as yup from 'yup'

const FormUsinfFormik = () => {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    website: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter your name"),
    email:yup.string().required("please enter mail"),
    phone:yup.string().required("please enter phone number"),
    website:yup.string().required("please enter website link")
  })
  return (
    <>
      <Container>
        <Formik initialValues={initialValue} validationSchema={validationSchema}>
          <Form>
            <Col>
              <lable>Name</lable>
              <Field type="text" name="name" />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </Col>
            <Col>
            <lable>Email</lable>
              <Field type="email" name="email" />
              <p className="text-danger">
                <ErrorMessage name="email" />
              </p>
            </Col>
            <Col>
            <lable>Phone</lable>
              <Field type="tel" name="phone" />
              <p className="text-danger">
                <ErrorMessage name="phone" />
              </p>
            </Col>
            <Col>
            <lable>Website</lable>
              <Field type="text" name="website" />
              <p className="text-danger">
                <ErrorMessage name="website" />
              </p>
            </Col>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default FormUsinfFormik;

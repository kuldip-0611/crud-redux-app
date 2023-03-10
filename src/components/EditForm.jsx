import React from "react";
import { useSelector } from "react-redux";

import {
  Form,
  FormGroup,
  Label,
  FormFeedback,
  FormText,
  Input,
} from "reactstrap";

const EditForm = ({ NAME, EMAIL, PHONE, WEBSITE }) => {
  const individualData = useSelector((state) => {
    return state.user.individualData;
  });
  return (
    <>
      {individualData.map((item) => (
        <Form className="w-25">
          <p className="text-start">Basic Form</p>
          <FormGroup>
            <Label className="text-start" for="exampleEmail">
              Name
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="text"
              value={item.NAME}
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-start" for="examplePassword">
              Email
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="email placeholder"
              type="email"
              value={item.EMAIL}
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-start" for="exampleEmail">
              Phone
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="tel"
              value={item.PHONE}
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-start" for="exampleEmail">
              Website Link
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="text"
              value={item.WEBSITE}
            />
          </FormGroup>
        </Form>
      ))}
    </>
  );
};

export default EditForm;

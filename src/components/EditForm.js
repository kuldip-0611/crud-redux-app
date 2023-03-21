import React from "react";
import { useSelector } from "react-redux";

import {
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const EditForm = () => {
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
              value={item.name}
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
              value={item.email}
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
              value={item.phone}
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
              value={item.website}
            />
          </FormGroup>
        </Form>
      ))}
    </>
  );
};

export default EditForm;

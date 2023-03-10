import React, { useEffect, useState } from "react";
import {
  editperticularForm,
  fetchUser,
  removerPerticularUser,
} from "../features/userSlice";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
} from "reactstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import CardBox from "./CardBox";

const CrudCard = () => {
  const userArray = useSelector((state) => state.user);
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleModal = (item) => {
    // dispatch(editperticularForm(item));
    // setModalShow(true);
  };

  return (
    <>
      <Container>
        <Row>
          {userArray.users
            ? userArray.users.map((item) => <CardBox item={item}/>)
            : "loading"}
        </Row>
      </Container>
    </>
  );
};

export default CrudCard;

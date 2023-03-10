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
const CardBox = (props) => {
  const [like, setLike] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={props.item}
      />
      <Card
        className="m-3"
        key={props.item.id}
        style={{
          width: "18rem",
        }}
      >
        <img
          alt="Sample"
          src={`https://avatars.dicebear.com/v2/avataaars/${props.item.username}.svg?options[mood][]=happy`}
        />
        <CardBody>
          <CardTitle tag="h5" className="text-start">
            {props.item.name}
          </CardTitle>
          <CardSubtitle className="mb-2 text-start text-muted" tag="h6">
            <AiOutlineMail />
            {props.item.email}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-start text-muted" tag="h6">
            <AiOutlinePhone />
            {props.item.phone}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-start text-muted" tag="h6">
            <AiOutlineLink />
            {props.item.website}
          </CardSubtitle>

          <div className="d-flex justify-content-around mt-3">
            <Button  onClick={ () => setLike(!like) }>
              {like === false ?   <AiOutlineHeart /> : <AiFillHeart />}
            </Button>
            <Button onClick={() => setModalShow(true)}>
              <AiFillEdit />
            </Button>

            <Button
              onClick={() => dispatch(removerPerticularUser(props.item.id))}
            >
              <AiFillDelete />
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardBox;

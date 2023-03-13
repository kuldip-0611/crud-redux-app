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
      <Card
        className="m-3"
        key={props.item.id}
        style={{
          width: "20rem",
        }}
      >
        <img
          alt="Sample"
          src={`https://avatars.dicebear.com/v2/avataaars/${props.item.username}.svg?options[mood][]=happy`}
          className='bg-light'
        />
        <CardBody>
          <CardTitle tag="h5" className="text-start mt-3">
            {props.item.name}
          </CardTitle>
          <CardSubtitle className="mb-2 text-start text-muted mt-3" tag="h6">
            <AiOutlineMail />
            {props.item.email}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-start text-muted mt-3" tag="h6">
            <AiOutlinePhone />
            {props.item.phone}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-start text-muted mt-3" tag="h6">
            <AiOutlineLink />
            {props.item.website}
          </CardSubtitle>

          <div className="d-flex justify-content-around mt-4 gap-5 bg-light">
            <Button onClick={() => setLike(!like)} className='bg-light'>
              {like === false ? <AiOutlineHeart color="black" /> : <AiFillHeart color="red" />}
            </Button>
            <Button onClick={() => setModalShow(true)} className='bg-light'>
              <AiFillEdit color="black" />
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              item={props.item}
            />

            <Button 
              onClick={() => dispatch(removerPerticularUser(props.item.id))} className='bg-light'
            >
              <AiFillDelete color="black" />
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardBox;

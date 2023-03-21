import React, { useEffect } from "react";
import { fetchUser } from "../features/userSlice";

import { Container, Row } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import CardBox from "./CardBox";

const CrudCard = () => {
  const userArray = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);



  return (
    <>
      <Container className="container-fluid">
        <Row>
          {userArray.users
            ? userArray.users.map((item) => <CardBox item={item} key={item.id} />)
            : "loading"}
        </Row>
      </Container>
    </>
  );
};

export default CrudCard;

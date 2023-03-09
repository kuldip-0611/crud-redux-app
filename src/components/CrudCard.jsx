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
import MyVerticallyCenteredModal from "./ModalComponent";

const CrudCard = () => {
  const userArray = useSelector((state) => state.user);
  const [like,setLike] = useState();
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <Container>
        <Row>
          {userArray.users
            ? userArray.users.map((item) => (
                <Card
                  className="m-3"
                  key={item.id}
                  style={{
                    width: "18rem",
                  }}
                >
                  <img
                    alt="Sample"
                    src={`https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?options[mood][]=happy`}
                  />
                  <CardBody>
                    <CardTitle tag="h5" className="text-start">
                      {item.name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-start text-muted"
                      tag="h6"
                    >
                      <AiOutlineMail />
                      {item.email}
                    </CardSubtitle>
                    <CardSubtitle
                      className="mb-2 text-start text-muted"
                      tag="h6"
                    >
                      <AiOutlinePhone />
                      {item.phone}
                    </CardSubtitle>
                    <CardSubtitle
                      className="mb-2 text-start text-muted"
                      tag="h6"
                    >
                      <AiOutlineLink />
                      {item.website}
                    </CardSubtitle>

                    <div className="d-flex justify-content-around mt-3">
                      <Button value={like} onClick={()=>setLike(!like)}>
                        {(like===false) ? <AiFillHeart /> : <AiOutlineHeart />}
                      </Button>
                      <Button>
                        <AiFillEdit />
                      </Button>
                     
                      <Button
                        onClick={() => dispatch(removerPerticularUser(item.id))}
                      >
                        <AiFillDelete />
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))
            : "loading"}
        </Row>
      </Container>
    </>
  );
};

export default CrudCard;

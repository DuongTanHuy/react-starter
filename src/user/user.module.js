import { Col, Row } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserForm } from "./user.form";
import { UserList } from "./user.list";

export const UserModule = () => {
  // const [users, setUsers] = useState(data);
  const users = useSelector((state) => state.users);
  // const dispatch = useDispatch();
  const [updatingUser, setUpdatingUser] = useState(null);

  const onUserDelete = (user) => {
    // dispatch(usersActions.deleteUser())
    // setUsers(users.filter((u) => u.id !== user.id));
  };

  const onUserUpdateRequest = (user) => {
    setUpdatingUser(user);
  };

  const onSubmit = (user) => {
    // if (users.find((u) => user.id === u.id)) {
    //   setUsers(
    //     users.map((u) => {
    //       if (u.id === user.id) {
    //         return user;
    //       }
    //       return u;
    //     })
    //   );
    //   setUpdatingUser(null);
    // } else {
    //   setUsers([user, ...users]);
    // }
  };

  return (
    <Row gutter={8}>
      <Col span={16}>
        <UserList
          data={users}
          onDelete={onUserDelete}
          onUpdate={onUserUpdateRequest}
        />
      </Col>
      <Col span={8}>
        <UserForm updatingUser={updatingUser} onSubmit={onSubmit}></UserForm>
      </Col>
    </Row>
  );
};

// const data = Array.from({ length: 4 }).map(() => ({
//   id: Math.random(),
//   firstName: "Tri",
//   lastName: "Pham",
//   city: "Da Nang",
//   country: "Vietnam",
//   address: "24 TBH",
//   workAt: "mgm tp",
// }));

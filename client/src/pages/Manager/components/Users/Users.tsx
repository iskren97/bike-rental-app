import { AiOutlineUser } from 'react-icons/ai';
import useFetchData from '../../../../hooks/useFetchData';
import {
  UsersActionButton,
  UsersContainer,
  UsersInnerContainer,
  UsersParagraph,
  LoadingDisplay,
} from './Users.styled';
import axios from 'axios';
import { useState } from 'react';

const Users = () => {
  const { data, setData, isFetching } = useFetchData('/users');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (isFetching || isLoading) {
    return <LoadingDisplay>Loading ...</LoadingDisplay>;
  }

  const handleUserDelete = (userID: number) => {
    setIsLoading(true);

    axios
      .delete(`/users/${userID}`)
      .then(({ data }) => {
        setData((prevUsers) =>
          prevUsers.filter((user) => user._id !== data._id)
        );
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <UsersContainer>
      {data?.map((user) => {
        return (
          <UsersInnerContainer key={user._id}>
            <AiOutlineUser />
            <UsersParagraph>Username: {user.username}</UsersParagraph>
            <UsersParagraph>Role: {user.role}</UsersParagraph>
            <UsersActionButton onClick={() => handleUserDelete(user._id)}>
              Delete User
            </UsersActionButton>
            <UsersActionButton>Edit User</UsersActionButton>
          </UsersInnerContainer>
        );
      })}
    </UsersContainer>
  );
};

export default Users;
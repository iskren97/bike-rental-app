import { AiOutlineUser } from 'react-icons/ai';
import useFetchData from '../../../hooks/useFetchData';
import {
  UsersActionButton,
  UsersContainer,
  UsersInnerContainer,
  UsersParagraph,
  UsersHeading,
} from './Users.styled';
import axios from 'axios';
import { useState } from 'react';
import { UserDTO } from '../../../types/user';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

// Users component part of Manager
// it handles the logic around Users
// creation, deletion, !no update func yet.!

const Users = () => {
  const { data: users, setData: setUsers, isFetching } = useFetchData('/users');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUserDelete = (userID: string) => {
    setIsLoading(true);

    axios
      .delete(`/users/${userID}`)
      .then(({ data }) => {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== data._id)
        );
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  if (isFetching || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <UsersContainer>
      {users.length > 1 ? (
        <>
          {users.map((user: UserDTO) => {
            {
              return (
                <UsersInnerContainer key={user._id}>
                  <AiOutlineUser />
                  <UsersParagraph>Username: {user.username}</UsersParagraph>
                  <UsersParagraph>Role: {user.role}</UsersParagraph>
                  <UsersActionButton onClick={() => handleUserDelete(user._id)}>
                    Delete User
                  </UsersActionButton>
                  <UsersActionButton disabled>Edit User</UsersActionButton>
                </UsersInnerContainer>
              );
            }
          })}
        </>
      ) : (
        <UsersHeading>You are the only user left.</UsersHeading>
      )}
    </UsersContainer>
  );
};

export default Users;

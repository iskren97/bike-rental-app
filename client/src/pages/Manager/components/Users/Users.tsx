import { AiOutlineUser } from 'react-icons/ai';
import useFetchData from '../../../../hooks/useFetchData';
import {
  UsersActionButton,
  UsersContainer,
  UsersInnerContainer,
  UsersParagraph,
  LoadingDisplay,
  UsersHeading,
} from './Users.styled';
import axios from 'axios';
import { useState } from 'react';
import { useGetUserID } from '../../../../hooks/useGetUserId';

// Users component part of Manager
// it handles the logic around Users

const Users = () => {
  const { data: users, setData: setUsers, isFetching } = useFetchData('/users');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userID = useGetUserID();

  if (isFetching || isLoading) {
    return <LoadingDisplay>Loading ...</LoadingDisplay>;
  }

  const handleUserDelete = (userID: number) => {
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

  return (
    <UsersContainer>
      {users.length > 0 ? (
        <>
          {users.map((user) => {
            {
              return (
                user._id !== userID && (
                  <UsersInnerContainer key={user._id}>
                    <AiOutlineUser />
                    <UsersParagraph>Username: {user.username}</UsersParagraph>
                    <UsersParagraph>Role: {user.role}</UsersParagraph>
                    <UsersActionButton
                      onClick={() => handleUserDelete(user._id)}
                    >
                      Delete User
                    </UsersActionButton>
                    <UsersActionButton disabled>Edit User</UsersActionButton>
                  </UsersInnerContainer>
                )
              );
            }
          })}
        </>
      ) : (
        <UsersHeading>No Users yet.</UsersHeading>
      )}
    </UsersContainer>
  );
};

export default Users;

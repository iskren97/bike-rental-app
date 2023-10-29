const useUser = () => {
  const user = localStorage.getItem('user');

  if (user) {
    return JSON.parse(user);
  }
};

export default useUser;

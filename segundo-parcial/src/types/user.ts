type User = {
  id: string;
  username: string;
  name: string;
  lastName: string;
  email: string;
  picture: string;
  creationDate: Date | string;
  phoneNumber?: string;
};

export default User;

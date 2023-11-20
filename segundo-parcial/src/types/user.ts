type User = {
  id: string;
  username: string;
  email: string;
  picture: string;
  creationDate: Date | string;
  phoneNumber?: string;
};

export default User;

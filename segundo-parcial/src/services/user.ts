import User from "../types/user";

const TIMEOUT = 100;

const USERS: User[] = [
  {
    id: "ojqweqwoiweoqiwei",
    username: "bsmith43",
    email: "bsmith43@gmail.com",
    picture:
      "https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png",
    creationDate: "2023-11-20T14:43:05.861Z",
    phoneNumber: "(11) 1234-1234",
  },
];

export async function GetUsers(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USERS.map((user) => user.id));
    }, TIMEOUT);
  });
}

export async function GetUserInfo(userId: string): Promise<User | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USERS.find((user) => user.id === userId));
    }, TIMEOUT);
  });
}

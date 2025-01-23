interface UserInfo {
  email: string;
  username: string;
  password: string;
}
export async function useRegisterUser(userInformation: UserInfo) {
  console.log(userInformation);
}

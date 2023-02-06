import { saveAccount } from "../repositories/accountRepository.js";
import { hashPassword } from "../helpers/password.js"

export async function createUserUserCase(name, email, password) {
  const createDate = new Date().toISOString().substring(0.10);
  const hashedPassword = await hashPassword(password);
  const user = {
    name: name,
    email: email,
    password: hashedPassword,
    createDate
  };

  await saveAccount(user);
  return user

}
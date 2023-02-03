import { saveAccount } from "../repositories/accountRepository.js";
import { encodePassword } from "./helpers.js";

export async function createUserUserCase(name, email, passaword) {
  const createDate = new Date().toISOString().substring(0.10);
  const hashPassword = encodePassword(passaword);
  const user = {
    name: name,
    email: email,
    password: hashPassword,
    createDate
  };

  await saveAccount(user);
  return user

}
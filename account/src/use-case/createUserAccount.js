import bcrypt from "bcryptjs";
const users = [];

export function createUserUseCase(name, email, password) {
const id = users.length + 1;
const createdDate = new Date(). toISOString().substring(0, 10);
const passwordHash = bcrypt.hashSync(password ,10);
const user = {
    id,
    name,
    email,
    password: passwordHash,
    createdDate
};

saveAccount(user);

return user;

}
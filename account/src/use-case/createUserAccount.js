import bcrypt from "bcryptjs";
const users = [];

export async function createUserUseCase(name, email, password) {
const id = users.length + 1;
const createdDate = new Date(). toISOString().substring(0, 10);

const salt = await bcrypt.genSaltSync(10);
const password1 = await req.body.password;
const passwordHash = bcrypt.hashSync(password ,6);
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
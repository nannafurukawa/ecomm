
import { comparePassword } from "../helpers/password.js";
import { generateToken } from "../helpers/token.js";
import { findUserByEmail } from "../repositories/accountRepository";

export async function createUserTokenUseCase(email, password){
    const possibleUser = await findUserByEmail(email);

    if (!possibleUser) {
        return null;
    }

    const passwordIsMatch = comparePassword(password, possibleUser.password);

    if (passwordIsMatch) {
        return generateToken(possibleUser._id);
    }
    
    return null;
}
import { createUserUseCase } from '../../src/use-case/createUserAccount.js'

const user1 = createUserUseCase ('Marlon', 'lobofurukawa@yahoo.com');
const user2 = createUserUseCase('Nanna', 'nannabessa@gmail.com')

console.log(user1, user2);
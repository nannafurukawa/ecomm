import {createUserUseCase} from '../../src/use-case/createUserAccount.js';

const user1 = createUserUseCase('Nanna', 'nannabessa@gmail.com', 'nanna07');
const user2= createUserUseCase('Marlon', 'lobofurukawa@yahoo.com', 'marlonlobo');

console.log(user1, user2);

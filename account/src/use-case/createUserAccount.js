let contas = []

export function createUserUseCase(nome, email, senha) {

    const user = {
        id: contas.length + 1,
        name: nome,
        email: email,
        password: senha,
        createdDate: (formatDate(new Date()))
    }

    contas.push(user)
    return user
}
function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
createUserUseCase("nanna", 'nannabessa@gmail.com', '12345')
createUserUseCase("marlon", 'lobofurukawa@yahoo.com', '12345')

console.log("contas:", contas)
const pass = document.querySelector('#pass');
const newPassword = document.querySelector('#newPassword');

function generatePass() {
    newPassword.innerHTML = '';
    
    if (!pass.value) {
        alert("Digite o tamanho da senha desejada");
        return;
    }

    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    const passLength = parseInt(pass.value, 10);

    for (let i = 0; i < passLength; ++i) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    newPassword.textContent = password;
}

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit');

    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    // console.log(email);

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    // console.log(password);

    userEmail.value = '';
    userPassword.value = '';

    if(email === 'john@gmail.com' && password === 'John1234'){
        console.log('Valid User');
        window.location.href = 'bank.html'
    }else if(email !== 'john@gmail.com'){
        alert('Please Entry Valid Email');
    }else{
        alert('Please Entry Valid Password');
    }
})
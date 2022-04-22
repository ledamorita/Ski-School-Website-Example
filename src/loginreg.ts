const loginForm = document.getElementById('login')!;
const registerForm = document.getElementById('register')!;
const btnForm = document.getElementById('btn')!;

function loginBtnFun(...args: string[]): void {
  loginForm.style.left = '50px';
  registerForm.style.left = '500px';
  btnForm.style.left = '0px';
}

function regBtnFun(...args: string[]): void {
  loginForm.style.left = '-450px';
  registerForm.style.left = '50px';
  btnForm.style.left = '110px';
}

let emailArray: string[] = [];
let passwordArray: string[] = [];

function register(event: Event): void {
  event.preventDefault();

  const email: string = (document.getElementById('re') as HTMLInputElement)
    .value;
  const password: string = (document.getElementById('rp') as HTMLInputElement)
    .value;
  const passwordRetype: string = (
    document.getElementById('rrp') as HTMLInputElement
  ).value;

  if (email === '') {
    alert('Email required.');
    return;
  } else if (password === '') {
    alert('Password required.');
    return;
  } else if (password.length < 6) {
    alert('Password is too weak.');
    return;
  } else if (passwordRetype === '') {
    alert('Password required.');
    return;
  } else if (password !== passwordRetype) {
    alert("Password don't match retype your Password.");
    return;
  } else if (emailArray.indexOf(email) === -1) {
    emailArray.push(email);
    passwordArray.push(password);

    alert(`${email} Thanks for registration. \nTry to login now.`);

    (document.getElementById('re') as HTMLInputElement).value = '';
    (document.getElementById('rp') as HTMLInputElement).value = '';
    (document.getElementById('rrp') as HTMLInputElement).value = '';
    (function loginBtnFun(...args: string[]): void {
      loginForm.style.left = '50px';
      registerForm.style.left = '500px';
      btnForm.style.left = '0px';
    })();
  } else {
    alert(`${email} is already register.`);
    return;
  }
}

function login(event: Event): void {
  event.preventDefault();

  const email: string = (document.getElementById('le') as HTMLInputElement)
    .value;
  const password: string = (document.getElementById('lp') as HTMLInputElement)
    .value;

  const i = emailArray.indexOf(email);

  if (emailArray.indexOf(email) === -1) {
    if (email === '') {
      alert('Email required.');
      return;
    }
    alert('Email does not exist.');
    (document.getElementById('le') as HTMLInputElement).value = '';
    return;
  } else if (passwordArray[i] !== password) {
    if (password === '') {
      alert('Password required.');
      return;
    }
    alert('Password does not match.');
    (document.getElementById('lp') as HTMLInputElement).value = '';
    return;
  } else {
    alert(
      `Dear ${email}, you are logged in.\n Now you can go to make an appoinment!`
    );
    (document.getElementById('le') as HTMLInputElement).value = '';
    (document.getElementById('lp') as HTMLInputElement).value = '';
    window.location.href = '/src/sub-page/booking.html';
    return;
  }
}

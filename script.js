const createAccountBtn = document.getElementById('createAccount')
const accountModal = document.querySelector('.accountModal');

createAccountBtn.addEventListener('click', ()=>{
  console.log('click')
  accountModal.classList.add('.movemodal')
  
})
const bubble_parent = document.querySelector('.bg-bubbles')
        const bubble_children = document.querySelectorAll('li')

        bubble_children.forEach((item)=>{
            const delay = Math.random() * 10 + 1
            const position = Math.random() * 100 + 0
            item.style.animationDelay = `${delay}s`
            item.style.left = `${position}%`
        })
        

        function togglePassword() {
          let passwordInput = document.getElementById('password');
            let toggleButton = document.querySelector('.pasu div');
            if (passwordInput.getAttribute('type') === 'password') {
                passwordInput.setAttribute('type', 'text');
                toggleButton.textContent = 'Hide';
            } else {
                passwordInput.setAttribute('type', 'password');
                toggleButton.textContent = 'Show';
            }
        }

        function togglePassword_r() {
            let passwordInput = document.getElementById('password1');
let toggleButton = document.querySelector('.pasu div');

if (passwordInput.getAttribute('type') === 'password') {
  passwordInput.setAttribute('type', 'text');
  toggleButton.textContent = 'Hide';
} else {
  passwordInput.setAttribute('type', 'password');
  toggleButton.textContent = 'Show';
}
  }

  function togglePassword_r2() {
    let passwordInput = document.getElementById('password2');
    let toggleButton = document.querySelector('.pasu .div2');

    if (passwordInput.getAttribute('type') === 'password') {
    passwordInput.setAttribute('type', 'text');
    toggleButton.textContent = 'Hide';
    } else {
    passwordInput.setAttribute('type', 'password');
    toggleButton.textContent = 'Show';
    }
    }
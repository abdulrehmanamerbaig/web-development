
      var display = document.querySelector('.modal-body textarea')
      var but = document.querySelectorAll('.hoohoo [desc]')
      console.log(but)
      but.forEach((x) => {
    x.addEventListener("click", handleButtonClick);
  });

  function handleButtonClick(event){
    display.value = event.target.attributes['desc'].value
  }
  if (!document.cookie.includes('visited=true')) {
    // Set a cookie to remember the visit
    document.cookie = 'visited=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    
    // Perform actions for first-time visit (e.g., start animation)
    document.querySelector('.glass').classList.add('glass_animation')
    document.querySelector('.task-adder').classList.add('task-adder-')
    document.querySelector('nav').classList.add('nav-')
} document.querySelector('.sign-out').addEventListener('click', function() {
        // Delete the 'visited' cookie
        document.cookie = 'visited=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    });
    document.querySelector('nav a').addEventListener('click', function() {
        // Delete the 'visited' cookie
        document.cookie = 'visited=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    });


    const divs = document.querySelectorAll('.colors button');
    divs.forEach(div => {
      div.addEventListener('click', () => {
        const bgColorClass = div.className; // Get the class name of the clicked div
        document.getElementById('main-body').className = bgColorClass; // Set the class name to the body
        localStorage.setItem('selectedColor', bgColorClass);
      });
    });
    const selectedColor = localStorage.getItem('selectedColor');

if (selectedColor) {
  document.getElementById('main-body').className = selectedColor;
}
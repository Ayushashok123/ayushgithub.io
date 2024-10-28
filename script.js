// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone=document.getElementById("phone").value;
//     const message = document.getElementById("message").value;

//     if (name && email && phone && message) {
//         document.getElementById("formMessage").textContent = "Thank you for your message!";
//         document.getElementById("contactForm").reset();
//     } else {
//         document.getElementById("formMessage").textContent = "Please fill in all fields.";
//     }
// });


  const scriptURL = 'https://script.google.com/macros/s/AKfycbySePimaqWJtoCWWUTi2mWCsZ9jSBkvAEfzZ_7B6UKi65_8CUmnLv33QPLW6sSTHrRdQQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (name && email && phone && message) {
        document.getElementById("formMessage").textContent = "Thank you for your message!";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill in all fields.";
    }
});

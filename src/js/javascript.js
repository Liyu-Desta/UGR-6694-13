document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailContent = "Email: " + email + "\nMessage: " + message;
    console.log(emailContent); 
    setTimeout(function() {
      alert("Comment submitted successfully!");
    }, 500);
    document.getElementById("contactForm").reset();
  });

// Redirect Shop Now button
document.addEventListener("DOMContentLoaded", function() {
  const shopBtn = document.querySelector(".hero button");
  if (shopBtn) {
    shopBtn.addEventListener("click", function() {
      window.location.href = "shop.html";
    });
  }
});

// Add to Cart alert
document.addEventListener("DOMContentLoaded", function() {
  const cartButtons = document.querySelectorAll(".product-card button");
  cartButtons.forEach(button => {
    button.addEventListener("click", function() {
      button.classList.add("added"); // add CSS class
      alert("This bouquet has been added to your cart!");
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    // Check if thank-you message already exists
    let thankYou = document.getElementById("thankYouMessage");
    if (!thankYou) {
      thankYou = document.createElement("p");
      thankYou.id = "thankYouMessage";
      thankYou.textContent = "Thank you for contacting us! We’ll get back to you soon.";
      thankYou.style.color = "pink";
      thankYou.style.fontWeight = "bold";
      form.parentNode.appendChild(thankYou);
    } else {
      thankYou.style.display = "block";
    }

    form.reset(); // clear form fields
  });
});


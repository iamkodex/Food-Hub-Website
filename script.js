const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Mobile navigation
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const menuIsOpen = navLinks.classList.contains("show");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
});

const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Contact form validation
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const message = document.getElementById("customerMessage").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all the fields.";
        formMessage.style.color = "crimson";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "crimson";
        return;
    }

    formMessage.textContent = "Thank you, " + name + ". Your message has been checked.";
    formMessage.style.color = "green";

    contactForm.reset();
});

// This form demonstrates front-end validation only.
// It is not connected to an email service or database.

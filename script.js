function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

document.querySelectorAll("#navLinks a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("show");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("formMessage");

    message.textContent = "Thank you, " + name + "! Your message has been received.";

    this.reset();
});

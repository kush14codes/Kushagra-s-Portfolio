// ========== MENU TOGGLE ==========
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// ========== SCROLL SECTION ACTIVE LINK ==========
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY; // ✅ fixed typo
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  // Sticky Header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle when scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ========== SCROLL REVEAL ==========
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {
  origin: 'bottom',
});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ========== TYPED JS ==========
const typed = new Typed('.multiple-text', {
  strings: ['Data Scientist', 'Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


// ========== EMAILJS FORM SUBMISSION ==========
// Initialize EmailJS
(function() {
  emailjs.init("LRvVKh0uApMJN0nVm"); // Your public key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    phone: document.getElementById("phone").value || "", // optional
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_9xy4001", "template_6d0cttn", params)
    .then(function(response) {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("❌ Failed to send message. Please try again later.");
      console.error("Error:", error);
    });
});


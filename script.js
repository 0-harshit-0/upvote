// Smooth scroll to the "How It Works" section when "Learn More" is clicked.
document.addEventListener("DOMContentLoaded", function () {
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function () {
      document.getElementById("howItWorks").scrollIntoView({ behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Randomly position each collage logo on initial load
  const logos = document.querySelectorAll('.collage-logo');
  logos.forEach(function (logo) {
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;
    logo.style.top = randomTop + '%';
    logo.style.left = randomLeft + '%';

    // Add an event listener to update position on each animation cycle
    logo.addEventListener('animationiteration', function () {
      const newRandomTop = Math.random() * 100;
      const newRandomLeft = Math.random() * 100;
      logo.style.top = newRandomTop + '%';
      logo.style.left = newRandomLeft + '%';
    });
  });
});

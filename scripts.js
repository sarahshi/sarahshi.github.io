// Responsive navigation menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Smooth scrolling
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // Close the responsive navigation menu if open
    nav.classList.remove("open");
  });
});

// Get the height of the first image
const imgHeight = document.querySelector('.column img').clientHeight;

// Set the height of all images to be the same as the height of the first image
const imgs = document.querySelectorAll('.column img');
imgs.forEach(img => {
  img.style.height = `${imgHeight}px`;
});


// Create a scrollingText function
function scrollingText(element) {
  const container = document.createElement("div");
  container.className = "scrolling-container";
  container.style.overflow = "hidden";
  container.style.position = "fixed";
  container.style.whiteSpace = "nowrap";
  container.style.top = element.offsetTop + "px";
  container.style.left = "100%";
  container.style.fontSize = "24px";
  container.appendChild(element);

  document.body.appendChild(container);

  // Define scroll speed
  const speed = 2;

  // Animate the scrolling text
  function animate() {
    const containerWidth = container.getBoundingClientRect().width;
    const currentPosition = parseFloat(container.style.left);
    const newPosition = currentPosition - speed;

    if (newPosition + containerWidth < 0) {
      container.style.left = "100%";
    } else {
      container.style.left = newPosition + "px";
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// Initialize scrollingText function when the page loads
window.addEventListener("load", function () {
  const researchHeader = document.querySelector("#research h2");
  const codeHeader = document.querySelector("#code h2");
  const teachingHeader = document.querySelector("#teaching h2");
  const fieldHeader = document.querySelector("#field h2");
  
  scrollingText(researchHeader);
  scrollingText(codeHeader);
  scrollingText(teachingHeader);
  scrollingText(fieldHeader);
});

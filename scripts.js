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

// Create a scrollingText function
function scrollingText() {
  const text = "This is a scrolling text example. ";
  const container = document.createElement("div");
  container.className = "scrolling-container";
  container.style.overflow = "hidden";
  container.style.position = "fixed";
  container.style.whiteSpace = "nowrap";
  container.style.top = "20px";
  container.style.left = "100%";
  container.style.fontSize = "24px";
  container.innerText = text;

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
window.addEventListener("load", scrollingText);

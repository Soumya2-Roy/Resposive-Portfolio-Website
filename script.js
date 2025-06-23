// ============ Typed Text Effect ============
const typed = new Typed(".text", {
  strings: ["Web Developer", "Frontend Developer", "Designer", "Java Programmer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// ============ Scroll to Top Button ============
const scrollUpBtn = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

// ============ Scroll Active Link ============
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ============ Smooth Scroll (Optional Enhancement) ============
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

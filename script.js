document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    "section, h1, h2, .box, .skill-box, p, .cvlinktext, .bottone1",
  );

  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            "opacity 0.65s ease-out, transform 0.65s ease-out";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        } else {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateY(20px)";
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px" },
  );

  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    animObserver.observe(el);
  });

  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 60);
      backToTop.classList.toggle("visible", window.scrollY > 500);
    },
    { passive: true },
  );

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  const scrollSections = document.querySelectorAll("header[id], section[id]");
  const navLinkEls = document.querySelectorAll(".nav-link[href^='#']");

  let suppressObserver = false;
  let suppressTimer = null;

  navLinkEls.forEach((link) => {
    link.addEventListener("click", () => {
      navLinkEls.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      clearTimeout(suppressTimer);
      suppressObserver = true;
      suppressTimer = setTimeout(() => { suppressObserver = false; }, 1000);
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      if (suppressObserver) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinkEls.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            );
          });
        }
      });
    },
    { threshold: 0.60 },
  );

  scrollSections.forEach((s) => sectionObserver.observe(s));
});

// document.getElementById('toggle-mode').addEventListener('click', function() {
//     const body = document.body;
//     const button = document.getElementById('toggle-mode');

//     if (body.classList.contains('light-mode')) {
//         body.classList.remove('light-mode');
//         button.innerHTML = '<b>Light Mode</b>';
//     } else {
//         body.classList.add('light-mode');
//         button.innerHTML = '<b>Dark Mode</b>';
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    "section, h1, h2, .box, .skill-box, p, .cvlinktext, #bottone1"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            "opacity 1s ease-out, transform 1s ease-out";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        } else {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateY(20px)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px",
    }
  );

  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    observer.observe(element);
  });
});

// lol i stole this from a website i found on google

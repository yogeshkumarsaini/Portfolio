 // Mobile nav toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    mobileToggle && mobileToggle.addEventListener('click', () => mobileNav.classList.toggle('hidden'));

    // Fade-in reveal
    const appear = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: 0.18 });
    appear.forEach(el => io.observe(el));

    // Header hide on scroll
    let lastScroll = 0;
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) header.classList.add('hide');
      else header.classList.remove('hide');
      lastScroll = current <= 0 ? 0 : current;
      updateScrollBar();
    });

    // Scroll top progress bar
    function updateScrollBar() {
      const d = document.documentElement;
      const percent = (window.scrollY / (d.scrollHeight - d.clientHeight)) * 100;
      document.getElementById('scrollBar').style.width = percent + '%';
    }
    window.addEventListener('resize', updateScrollBar);
    updateScrollBar();

    // Soft glow cursor
    const cursorDot = document.getElementById('cursorDot');
    const cursorGlow = document.getElementById('cursorGlow');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let gx = mx, gy = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursorDot.style.left = mx + 'px';
      cursorDot.style.top = my + 'px';
      gx += (mx - gx) * 0.16;
      gy += (my - gy) * 0.16;
      cursorGlow.style.left = gx + 'px';
      cursorGlow.style.top = gy + 'px';
    });

    // expand glow on interactive elements
    const interactive = 'a, button, .card-hover, .focus-ring';
    document.querySelectorAll(interactive).forEach(el => {
      el.addEventListener('mouseenter', () => cursorGlow.classList.add('cursor-expand'));
      el.addEventListener('mouseleave', () => cursorGlow.classList.remove('cursor-expand'));
    });

    // hide cursor on touch devices & keyboard navigation
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      cursorDot.style.display = 'none';
      cursorGlow.style.display = 'none';
    }
    window.addEventListener('keydown', (e) => { if (e.key === 'Tab') { cursorDot.style.display='none'; cursorGlow.style.display='none'; } });

    // EMAILJS CONTACT FORM HANDLER

    emailjs.init("PUBLIC_KEY"); // Replace this

    document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // VALIDATION
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
      alert("Please enter a valid name.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters.");
      return;
    }

    const templateParams = {
      from_name: name,
      email_id: email,
      message: message,
    };

    emailjs.send("SERVICE_ID", "TEMPLATE_ID", templateParams)
      .then(() => {
        const popup = document.getElementById("successPopup");
        popup.classList.remove("hidden");

        setTimeout(() => popup.classList.add("hidden"), 3000);

        document.getElementById("contactForm").reset();
      })
      .catch(() => alert("Error sending email. Try again later."));
});
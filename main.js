const mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {

  const navbar = document.getElementById("navbar");
  const navbarCloseBtn = document.getElementById("navbar-closeBtn");
  const sun = document.getElementById("light-mode");
  const moon = document.getElementById("dark-mode");
  const expandBtn = document.getElementById("navbar-expandBtn");
  const close = document.getElementById("others-panel-close");
  let navIsOpen = false;
  let navTimer;
  let darkmode = true;
  let expanded = false;

  gsap.to(moon, { color: "#ea6efb" });

  expandBtn.addEventListener("click", () => {
    if (!expanded) {
      gsap.to("#others-panel", { x: "0rem" })
      expanded = true;
    } else {
      gsap.to("#others-panel", { x: "-10rem" })
      expanded = false;
    }
  });

  close.addEventListener("click", () => {
    if (expanded === true) {
      gsap.to("#others-panel", { x: "-10rem" })
      expanded = false;
    }
  });

  navbar.addEventListener("click", () => {
    if (!navIsOpen) {
      navIsOpen = true;

      gsap.to(navbar, { height: "5rem", width: "45rem", y: "3rem", borderRadius: "10px", duration: 0.5, ease: "power2.out", cursor: "default" });
      gsap.to(navbarCloseBtn, { width: "6rem", borderRadius: "5px", height: "1rem", position: "absolute", y: "6.5rem", opacity: 1, duration: 0.5 });
      gsap.to("#alpha-w", { y: "0rem", duration: 0.8, ease: "power2.out", opacity: 1 });
      gsap.to("#alpha-a", { y: "0rem", duration: 0.8, ease: "power2.out", opacity: 1 });
      gsap.to("#alpha-f", { y: "0rem", duration: 0.8, ease: "power2.out", opacity: 1 });
      gsap.to("#alpha-f-2", { y: "0rem", duration: 0.8, ease: "power2.out", opacity: 1 });
      gsap.to("#alpha-dot", { y: "0rem", duration: 0.8, ease: "power2.out", opacity: 1 });
      gsap.to("#alpha-m", { y: "0rem", duration: 0.8, ease: "power2.out", opacity: 1 });
      gsap.to("#alpha-e", { y: "0rem", duration: 0.8, ease: "power2.out", opacity: 1 });
      gsap.to("#navbar-LightDarkModeToggle-btnContainer", { opacity: 1, y: 0, duration: 0.7 });
      gsap.to("#open", { opacity: 0, duration: 0.01, y: "5rem" });
      gsap.to("#navbar-expandBtn", { opacity: 1, y: "0.5rem", duration: 0.7 })
    }
  });

  navbarCloseBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    gsap.to(navbar, { cursor: "pointer", width: "20rem", height: "1rem", y: "0rem", borderRadius: "0px 0px 10px 10px", duration: 0.5, ease: "power2.out" });
    gsap.to(navbarCloseBtn, { width: "6rem", borderRadius: "5px", height: "1rem", position: "absolute", y: "7.0rem", opacity: 0, duration: 0.3 });
    gsap.to("#alpha-w", { y: "4rem", duration: 0.8, ease: "power2.out", opacity: 1 });
    gsap.to("#alpha-a", { y: "3.5rem", duration: 0.8, ease: "power2.out", opacity: 1 });
    gsap.to("#alpha-f", { y: "3rem", duration: 0.8, ease: "power2.out", opacity: 1 });
    gsap.to("#alpha-f-2", { y: "2.5rem", duration: 0.8, ease: "power2.out", opacity: 1 });
    gsap.to("#alpha-dot", { y: "2rem", duration: 0.8, ease: "power2.out", opacity: 1 });
    gsap.to("#alpha-m", { y: "1.5rem", duration: 0.8, ease: "power2.out", opacity: 1 });
    gsap.to("#alpha-e", { y: "1rem", duration: 0.8, ease: "power2.out", opacity: 1 });
    gsap.to("#navbar-LightDarkModeToggle-btnContainer", { opacity: 0, y: "5rem", duration: 0.7 });
    gsap.to("#open", { x: "9rem", y: "0rem" });
    gsap.to("#navbar-expandBtn", { opacity: 0, y: "-4rem" })

    navIsOpen = false;
  });

  const lightModeStyle = document.createElement("style");
  lightModeStyle.innerText = `
    .music-text a { color: #000000 !important; }

    .others-panel-class-1:hover { 
      background-color: #ffffff !important; 
      color: #000000 !important; 
      transform: scale(1.07); 
    }

    #navbar-expandBtn:hover { 
      background-color: #ffffff !important; 
      color: #000000 !important; 
    }

    #port-box-primary-avatar:hover { background-color: #f0f0f0 !important; }
    #port-box-primary-main-tag:hover { background-color: #f0f0f0 !important; }
    #port-box-primary-bio:hover { background-color: #f0f0f0 !important; }
    #port-box-secondary-maininfo:hover { background-color: #f0f0f0 !important; }
    #port-box-secondary-tags-box-1-a:hover { background-color: #f0f0f0 !important; }
    #port-box-secondary-tags-box-1-b:hover { background-color: #f0f0f0 !important; }
    #games-panel-content-1:hover { background-color: #d4d4d4 !important; }
    #games-panel-content-2:hover { background-color: #d4d4d4 !important; }
    .anime-card:hover { background-color: #d4d4d4 !important; }

    .music-item:hover { background-color: rgba(0, 0, 0, 0.1) !important; }
    .lfm-featured:hover { background-color: rgba(0, 0, 0, 0.1) !important; }

    body::-webkit-scrollbar-track { background: #e0e0e0 !important; }
    body::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2) !important; }
    #music-panel-content::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2) !important; }
  `;

  sun.addEventListener("click", (e) => {
    e.stopPropagation();
    darkmode = false;

    document.head.appendChild(lightModeStyle);

    gsap.to("#theme-toggle-layer", { x: "2.3rem", duration: 0.1, backgroundColor: "#ffffff" });
    gsap.to(sun, { color: "#fcfc01" });
    gsap.to(moon, { color: "black" });

    gsap.to("body", { backgroundColor: "#e0e0e0", duration: 0.3 });

    gsap.to("#port-box-primary-avatar", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#port-box-primary-main-tag", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#port-box-primary-bio", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#port-box-primary-socials", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to(".port-box-primary-socials-app", { backgroundColor: "#f2f2f2", color: "#000000", duration: 0.3 });

    gsap.to("#port-box-primary-main-tag-tag-hi", { color: "#d63cd1", duration: 0.3 }); 
    gsap.to("#port-box-primary-main-tag-tag-im", { color: "#000000", duration: 0.3 });
    gsap.to("#port-box-primary-main-tag-tag-kuri", { color: "#000000", duration: 0.3 });

    gsap.to("#port-box-secondary-maininfo", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#port-box-secondary-tags-box-1-a", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#port-box-secondary-tags-box-1-b", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#port-box-secondary-maininfo-project-1", { color: "#000000", duration: 0.3 });

    gsap.to("#frontEnd", { color: "#000000", duration: 0.3 });
    gsap.to("#artist", { color: "#000000", duration: 0.3 });
    gsap.to("#designer", { color: "#000000", duration: 0.3 });
    gsap.to("#html", { color: "#000000", duration: 0.3 });
    gsap.to("#css", { color: "#000000", duration: 0.3 });
    gsap.to("#js", { color: "#000000", duration: 0.3 });

    gsap.to("#games-panel", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#games-panel-title", { color: "#000000", duration: 0.3 });
    gsap.to("#games-panel-content-1", { backgroundColor: "#f2f2f2", duration: 0.3 });
    gsap.to("#games-panel-content-2", { backgroundColor: "#f2f2f2", duration: 0.3 });
    gsap.to("#games-panel-content-1-img", { backgroundColor: "#e0e0e0", duration: 0.3 });
    gsap.to("#games-panel-content-2-img", { backgroundColor: "#e0e0e0", duration: 0.3 });
    gsap.to(".span-class-container", { color: "#000000", duration: 0.3 });

    gsap.to("#music-panel", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#music-panel-title", { color: "#000000", duration: 0.3 });

    gsap.to(".lfm-status", { color: "#555555", duration: 0.3 });
    gsap.to(".lfm-feat-title", { color: "#000000", duration: 0.3 });
    gsap.to(".lfm-feat-artist", { color: "#333333", duration: 0.3 });
    gsap.to(".lfm-item-title", { color: "#000000", duration: 0.3 });
    gsap.to(".lfm-item-artist", { color: "#555555", duration: 0.3 });
    gsap.to(".lfm-history-item a", { color: "#000000", duration: 0.3 });
    gsap.to(".lfm-history-item span", { color: "#000000", duration: 0.3 });

    gsap.to("#container-anime", { backgroundColor: "#ffffff", duration: 0.3 });
    gsap.to("#anime-panel-title", { backgroundColor: "#ffffff", color: "#000000", duration: 0.3 });
    gsap.to(".anime-card", { backgroundColor: "#f2f2f2", duration: 0.3 });
    gsap.to(".anime-name", { color: "#000000", duration: 0.3 });
    gsap.to(".anime-score", { color: "#000000", duration: 0.3 });

    gsap.to("#port-box-primary-bio-p", { color: "#000000", duration: 0.3 });

    gsap.to(".others-panel-class-1", { color: "#000000", duration: 0.3 });
    gsap.to("#others-panel-battery", { color: "#000000", duration: 0.3 });
    gsap.to("#battery-text", { color: "#000000", duration: 0.3 });
    gsap.to("#navbar-expandBtn", { color: "#000000", duration: 0.3 });

    gsap.to("#fill", { backgroundColor: "#000000", duration: 0.3 });
  });

  moon.addEventListener("click", (e) => {
    e.stopPropagation();
    darkmode = true;

    if (lightModeStyle.parentNode) {
      lightModeStyle.parentNode.removeChild(lightModeStyle);
    }

    gsap.to("#theme-toggle-layer", { x: "-2.3rem", duration: 0.1, backgroundColor: "#333" });
    gsap.to(moon, { color: "#ea6efb" });
    gsap.to(sun, { color: "black" });

    gsap.to("body", { backgroundColor: "hsl(0, 0%, 5%)", duration: 0.3 });

    gsap.to("#port-box-primary-avatar", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#port-box-primary-main-tag", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#port-box-primary-bio", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#port-box-primary-socials", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to(".port-box-primary-socials-app", { backgroundColor: "hsl(0, 0%, 9%)", color: "hsl(0, 0%, 83%)", duration: 0.3 });

    gsap.to("#port-box-primary-main-tag-tag-hi", { color: "hsl(312, 100%, 70%)", duration: 0.3 });
    gsap.to("#port-box-primary-main-tag-tag-im", { color: "hsl(0, 0%, 83%)", duration: 0.3 });
    gsap.to("#port-box-primary-main-tag-tag-kuri", { color: "hsl(0, 0%, 83%)", duration: 0.3 });

    gsap.to("#port-box-secondary-maininfo", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#port-box-secondary-tags-box-1-a", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#port-box-secondary-tags-box-1-b", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#port-box-secondary-maininfo-project-1", { color: "hsl(0, 0%, 83%)", duration: 0.3 });

    gsap.to("#frontEnd", { color: "hsl(0, 0%, 83%)", duration: 0.3 });
    gsap.to("#artist", { color: "hsl(0, 0%, 83%)", duration: 0.3 });
    gsap.to("#designer", { color: "hsl(0, 0%, 83%)", duration: 0.3 });
    gsap.to("#html", { color: "hsl(0, 0%, 83%)", duration: 0.3 });
    gsap.to("#css", { color: "hsl(0, 0%, 83%)", duration: 0.3 });
    gsap.to("#js", { color: "hsl(0, 0%, 83%)", duration: 0.3 });

    gsap.to("#games-panel", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#games-panel-title", { color: "hsl(0, 0%, 90%)", duration: 0.3 });
    gsap.to("#games-panel-content-1", { backgroundColor: "hsl(0, 0%, 12%)", duration: 0.3 });
    gsap.to("#games-panel-content-2", { backgroundColor: "hsl(0, 0%, 12%)", duration: 0.3 });
    gsap.to("#games-panel-content-1-img", { backgroundColor: "hsl(0, 0%, 14%)", duration: 0.3 });
    gsap.to("#games-panel-content-2-img", { backgroundColor: "hsl(0, 0%, 14%)", duration: 0.3 });
    gsap.to(".span-class-container", { color: "hsl(0, 0%, 90%)", duration: 0.3 });

    gsap.to("#music-panel", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#music-panel-title", { color: "hsl(0, 0%, 90%)", duration: 0.3 });
    gsap.to(".lfm-status", { color: "hsl(0, 0%, 90%)", duration: 0.3 });
    gsap.to(".lfm-feat-title", { color: "white", duration: 0.3 });
    gsap.to(".lfm-feat-artist", { color: "hsl(0, 0%, 83%)", duration: 0.3 });
    gsap.to(".lfm-item-title", { color: "hsl(0, 0%, 98%)", duration: 0.3 });
    gsap.to(".lfm-item-artist", { color: "hsl(0, 0%, 90%)", duration: 0.3 });
    gsap.to(".lfm-history-item a", { color: "#ccc", duration: 0.3 });
    gsap.to(".lfm-history-item span", { color: "#ccc", duration: 0.3 });

    gsap.to("#container-anime", { backgroundColor: "hsl(0, 0%, 9%)", duration: 0.3 });
    gsap.to("#anime-panel-title", { backgroundColor: "hsl(0, 0%, 9%)", color: "hsl(0, 0%, 90%)", duration: 0.3 });
    gsap.to(".anime-card", { backgroundColor: "hsl(0, 0%, 12%)", duration: 0.3 });
    gsap.to(".anime-name", { color: "hsl(0, 0%, 90%)", duration: 0.3 });
    gsap.to(".anime-score", { color: "hsl(0, 0%, 90%)", duration: 0.3 });

    gsap.to("#port-box-primary-bio-p", { color: "hsl(0, 0%, 83%)", duration: 0.3 });

    gsap.to(".others-panel-class-1", { color: "#000000", duration: 0.3 });
    gsap.to("#others-panel-battery", { color: "#000000", duration: 0.3 });
    gsap.to("#battery-text", { color: "#000000", duration: 0.3 });

    gsap.to("#navbar-expandBtn", { color: "#000000", duration: 0.3 });

    gsap.to("#fill", { backgroundColor: "hsla(312, 100%, 90%, 0.900)", duration: 0.3 });
  });

  if (navIsOpen) return; {
    navbar.addEventListener("mouseenter", (e) => {
      e.stopPropagation();
      clearTimeout(navTimer);
      navTimer = setTimeout(() => {
        gsap.to("#open", { innerText: "open", opacity: 1, duration: 0.15 });
      }, 1000);
    });
    navbar.addEventListener("mouseleave", (e) => {
      e.stopPropagation();
      clearTimeout(navTimer);
      gsap.to("#open", { opacity: 0, duration: 0.15 });
    });
  }
});

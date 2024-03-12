const homepart1button = document.querySelector(".home-part1-button");

homepart1button.addEventListener("mouseout", function () {
    if (!homepart1button.classList.contains("ButtonColorOriginal")) {
        homepart1button.classList.add("ButtonColorOriginal");
    }
});

const tabsShow = document.querySelectorAll(".tab-show");
const tabsActive = document.querySelectorAll(".tab-active");
const showActive = document.querySelectorAll(".show-active");

tabsActive.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();

            tabsShow.forEach(e => {
                if (!e.classList.contains("displayNone")) {
                    e.classList.remove("display");
                    e.classList.add("displayNone");
                } else if (e.classList.contains("displayNone")) {
                    e.classList.remove("display");
                }
            });

            showActive.forEach(e => {
                if (!e.classList.contains("visibility-hidden")) {
                    e.classList.add("visibility-hidden");
                }
            });
            
        if (e.target.classList.contains("skillsTab")) {

            let index = Array.from(tabsActive).indexOf(e.currentTarget);
            tabsShow[index].classList.add("display");
            showActive[index].classList.remove("visibility-hidden");
            showActive[index].classList.add("visibility-visible");

        } else if (e.target.classList.contains("experienceTab")) {

            let index = Array.from(tabsActive).indexOf(e.currentTarget);
            tabsShow[index].classList.add("display");
            showActive[index].classList.remove("visibility-hidden");
            showActive[index].classList.add("visibility-visible");

        } else if (e.target.classList.contains("educationTab")) {

            let index = Array.from(tabsActive).indexOf(e.currentTarget);
            tabsShow[index].classList.add("display");
            showActive[index].classList.remove("visibility-hidden");
            showActive[index].classList.add("visibility-visible");

        } 
    })
});

const header = document.querySelector(".header");
let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        header.classList.remove("position-sticky");
        header.classList.add("position-static");
    } else {
        // Scrolling up
        header.classList.remove("position-static");
        header.classList.add("position-sticky");
    }

    lastScrollPosition = currentScrollPosition;
});

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
    document.querySelector(".hamline1").classList.toggle('hamline1Toggle');
    document.querySelector(".hamline3").classList.toggle('hamline3Toggle');

    document.querySelector(".hamline2").classList.toggle("displayNone");
    this.classList.toggle("hamburgerToggleCenterX");
    this.classList.toggle("paddingleft");
    document.querySelector(".ham-nav-links").classList.toggle("display");
})

window.addEventListener("scroll", () => {
    const hamline1Toggle = document.querySelector(".hamline1");
    const hamline3Toggle = document.querySelector(".hamline3");

    if (hamline1Toggle.classList.contains("hamline1Toggle") && hamline3Toggle.classList.contains("hamline3Toggle")) 
    {
        hamburger.classList.toggle("hamburgerToggleCenterX");
        hamburger.classList.toggle("paddingleft");
        hamline1Toggle.classList.toggle('hamline1Toggle');
        document.querySelector(".hamline2").classList.toggle("displayNone");
        hamline3Toggle.classList.toggle('hamline3Toggle');

        document.querySelector(".ham-nav-links").classList.toggle("display");
    }

})


window.addEventListener("resize", () => {
    const hamline1Toggle = document.querySelector(".hamline1");
    const hamline3Toggle = document.querySelector(".hamline3");

    if (hamline1Toggle.classList.contains("hamline1Toggle") && hamline3Toggle.classList.contains("hamline3Toggle")) 
    {
        hamburger.classList.toggle("hamburgerToggleCenterX");
        hamburger.classList.toggle("paddingleft");
        hamline1Toggle.classList.toggle('hamline1Toggle');
        document.querySelector(".hamline2").classList.toggle("displayNone");
        hamline3Toggle.classList.toggle('hamline3Toggle');

        document.querySelector(".ham-nav-links").classList.toggle("display");
    }

})

document.querySelectorAll(".ham-nav-link").forEach(e => {
    e.addEventListener("click", () => {
        const hamline1Toggle = document.querySelector(".hamline1");
        const hamline3Toggle = document.querySelector(".hamline3");
    
        if (hamline1Toggle.classList.contains("hamline1Toggle") && hamline3Toggle.classList.contains("hamline3Toggle")) 
        {
            hamburger.classList.toggle("hamburgerToggleCenterX");
            hamburger.classList.toggle("paddingleft");
            hamline1Toggle.classList.toggle('hamline1Toggle');
            document.querySelector(".hamline2").classList.toggle("displayNone");
            hamline3Toggle.classList.toggle('hamline3Toggle');
    
            document.querySelector(".ham-nav-links").classList.toggle("display");
        }
    })
})


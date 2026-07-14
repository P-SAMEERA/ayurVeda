const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* -------------------------
   Scroll Reveal Animation
-------------------------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".reveal").forEach(section => {

    observer.observe(section);

});


/* -------------------------
   Services Data
-------------------------- */

const services = {

    panchakarma: {

        title: "Panchakarma",

        image: "Panchakarma Therapy",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, ligula nec volutpat feugiat, lorem massa fermentum erat, nec suscipit lorem sapien sed nisl.",

        duration: "45 - 60 Minutes",

        benefits: [

            "Lorem ipsum dolor sit amet",

            "Consectetur adipiscing elit",

            "Natural detoxification",

            "Holistic wellness"

        ]

    },

    nadi: {

        title: "Nadi Pariksha",

        image: "Nadi Pariksha",

        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusantium.",

        duration: "30 Minutes",

        benefits: [

            "Lorem ipsum",

            "Lorem ipsum",

            "Lorem ipsum"

        ]

    },

    herbal: {

        title: "Herbal Therapy",

        image: "Herbal Therapy",

        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero dolorem.",

        duration: "60 Minutes",

        benefits: [

            "Natural herbs",

            "Improved wellness",

            "Preventive care"

        ]

    },

    consultation: {

        title: "Lifestyle Consultation",

        image: "Lifestyle Consultation",

        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, necessitatibus.",

        duration: "45 Minutes",

        benefits: [

            "Diet guidance",

            "Daily routine",

            "Stress management"

        ]

    }

};


/* -------------------------
   Modal Elements
-------------------------- */

const overlay = document.getElementById("modalOverlay");

const modal = document.getElementById("serviceModal");

const closeBtn = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");

const modalDesc = document.getElementById("modalDescription");

const modalDuration = document.getElementById("modalDuration");

const modalBenefits = document.getElementById("modalBenefits");

const modalImageTitle = document.getElementById("modalImageTitle");


/* -------------------------
   Open Modal
-------------------------- */

function openModal(serviceKey) {

    const service = services[serviceKey];

    if (!service) return;

    modalTitle.textContent = service.title;

    modalDesc.textContent = service.description;

    modalDuration.textContent = service.duration;

    modalImageTitle.textContent = service.image;

    modalBenefits.innerHTML = "";

    service.benefits.forEach(item => {

        const li = document.createElement("li");

        li.textContent = "✔ " + item;

        modalBenefits.appendChild(li);

    });

    overlay.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* -------------------------
   Close Modal
-------------------------- */

function closeModal() {

    overlay.classList.remove("show");

    document.body.style.overflow = "";

}


/* -------------------------
   Card Click Events
-------------------------- */

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("click", () => {

        openModal(card.dataset.service);

    });

});


/* -------------------------
   Close Button
-------------------------- */

if (closeBtn) {

    closeBtn.addEventListener("click", closeModal);

}


/* -------------------------
   Click Outside Modal
-------------------------- */

if (overlay) {

    overlay.addEventListener("click", (e) => {

        if (e.target === overlay) {

            closeModal();

        }

    });

}


/* -------------------------
   ESC Key Close
-------------------------- */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeModal();

    }

});


/* -------------------------
   Sticky Header Shadow
-------------------------- */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

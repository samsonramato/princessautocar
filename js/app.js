/* ==== CONFIGURATION ==== 
 * Replace these values with your own:
 * - placeId: the Google Place ID for your business
 * - googleApiKey: (optional) Google Maps JavaScript API key with Places library enabled (restrict it!)
 */
const CONFIG = {
    placeId: "ChIJiQOyxa3JRIYRDTP37pEv34A",          // e.g. "ChIJN1t_tDeuEmsRUsoyG83frY4"
    googleApiKey: "AIzaSyC0Sn9RXCs6m_H8gcNZ2_ePF0fx_aJhg-k"      // optional -- if provided, reviews will be fetched and displayed
};

/* ------------------ TRANSLATIONS ------------------ */
const translations = {
    en: {
        nav_home: "Home", nav_services: "Services", nav_cars: "Cars", nav_about: "About", nav_contact: "Contact",
        hero_title: "Your Trusted Auto Repair & Used Car Dealer in Austin",
        hero_subtitle: "Honest work, fair prices, and family-like service you can rely on.",
        btn_services: "Our Services", btn_inventory: "View Cars",
        why_title: "Why Choose Princess Auto Austin",
        featured_title: "Featured Cars",
        reviews_title: "Customer Reviews",
        cta_title: "Need Auto Repair Today?", cta_sub: "We’ll take care of your vehicle like it’s our own.",
        btn_book: "Book an Appointment",
        btn_view_more: "See All Cars",
        btn_services_short: "Services",
        cta_call: "Call/Book"
    },
    es: {
        nav_home: "Inicio", nav_services: "Servicios", nav_cars: "Autos", nav_about: "Acerca", nav_contact: "Contacto",
        hero_title: "Su Taller de Reparación y Venta de Autos Usados en Austin",
        hero_subtitle: "Trabajo honesto, precios justos y un servicio familiar.",
        btn_services: "Nuestros Servicios", btn_inventory: "Ver Autos",
        why_title: "Por qué elegir Princess Auto Austin",
        featured_title: "Autos Destacados",
        reviews_title: "Reseñas de Clientes",
        cta_title: "¿Necesita reparación hoy?", cta_sub: "Cuidamos su vehículo como si fuera nuestro.",
        btn_book: "Reservar",
        btn_view_more: "Ver Todos los Autos",
        cta_call: "Llamar / Reservar"
    },
    am: {
        nav_home: "መነሻ", nav_services: "አገልግሎቶች", nav_cars: "መኪናዎች", nav_about: "ስለ እኛ", nav_contact: "እውነታ",
        hero_title: "በአስቲን የሚታመን የመኪና ጥገና እና ተጠቃሚ መኪና ሽያጭ",
        hero_subtitle: "ታማኝ አገልግሎት፣ ተመጣጣኝ ዋጋ፣ እና የቤተሰብ እንኳን ተቀባ እንክብካቤ።",
        btn_services: "አገልግሎቶቻችን", btn_inventory: "መኪናዎችን ይመልከቱ",
        why_title: "ለምን Princess Auto Austinን ይመርጣሉ",
        featured_title: "የተለያዩ መኪናዎች",
        reviews_title: "የደንበኞች ግምገማዎች",
        cta_title: "መኪናዎ ዛሬ ጥገና ይፈልጋል?", cta_sub: "መኪናዎን እኛ የራሳችን እንደሆነ እንከብባታለን።",
        btn_book: "ቀጠሮ ይያዙ",
        btn_view_more: "ሁሉንም መኪናዎች ይመልከቱ",
        cta_call: "ይደውሉ / ቀጠሮ"
    }
};

/* ------------------ DOM UTIL & NAV ------------------ */
function el(selector) {
    return document.querySelector(selector);
}
function els(selector) {
    return Array.from(document.querySelectorAll(selector));
}
function setYear() {
    const y = new Date().getFullYear();
    els("#year,#year2,#yearInv,#yearAbout,#yearContact").forEach(n => {
        if (n) n.textContent = y;
    });
}

/* Mobile nav toggle */
function setupNavToggles() {
    els(".nav-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
            const nav = btn.nextElementSibling;
            const controls = document.querySelector(".controls");
            if (nav) {
                nav.classList.toggle("show");
                controls.classList.toggle("show");
            }
        });
    });
}

/* Language switcher */
function applyTranslations(lang) {
    els("[data-i18n]").forEach(elm => {
        const key = elm.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            elm.textContent = translations[lang][key];
        }
    });
}
function setupLanguageSwitchers() {
    const selects = els("#langSwitcher, #langSwitcherSvc, #langSwitcherInv, #langSwitcherAbout, #langSwitcherContact");
    selects.forEach(sel => {
        if (!sel) return;
        sel.addEventListener("change", () => {
            applyTranslations(sel.value);
            // sync other selects
            selects.forEach(s => s.value = sel.value);
        });
    });
    // initial apply
    const mainSel = el("#langSwitcher") || el("#langSwitcherInv") || el("#langSwitcherSvc");
    const initial = mainSel ? mainSel.value : "en";
    applyTranslations(initial);
}

/* ------------------ Sample Data for Cars ------------------ */
const sampleCars = [
    { id: 1, title: "2012 Honda Civic LX", price: "$7,900", mileage: "120,000 mi", img: "assets/slide1.jpg", desc: "Well-maintained, single owner." },
    { id: 2, title: "2014 Toyota Corolla", price: "$8,500", mileage: "110,500 mi", img: "assets/slide2.jpg", desc: "Reliable commuter, recent inspection." },
    { id: 3, title: "2016 Subaru Outback", price: "$12,400", mileage: "135,000 mi", img: "assets/slide3.jpg", desc: "AWD, great for Texas weather." }
];

function renderFeaturedCars() {
    const wrap = el("#featuredCars");
    if (!wrap) return;
    wrap.innerHTML = "";
    sampleCars.slice(0, 3).forEach(c => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src="${c.img}" alt="${c.title}">
        <h3>${c.title}</h3>
        <p class="muted">${c.mileage} • <strong>${c.price}</strong></p>
        <p>${c.desc}</p>
        <div style="margin-top:8px;"><a class="btn-outline dark" href="inventory.html#car-${c.id}">View</a></div>
      `;
        wrap.appendChild(card);
    });
}

function renderInventory() {
    const wrap = el("#inventoryList");
    if (!wrap) return;
    wrap.innerHTML = "";
    sampleCars.forEach(c => {
        const div = document.createElement("div");
        div.className = "card";
        div.id = `car-${c.id}`;
        div.innerHTML = `<img src="${c.img}" alt="${c.title}"><h3>${c.title}</h3><p>${c.mileage} • <strong>${c.price}</strong></p><p>${c.desc}</p><div style="margin-top:8px;"><a class="btn-primary" href="contact.html">Inquire</a></div>`;
        wrap.appendChild(div);
    });
    // search box
    const search = el("#searchInput");
    if (search) {
        search.addEventListener("input", () => {
            const q = search.value.trim().toLowerCase();
            const cards = wrap.querySelectorAll(".card");
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(q) ? "" : "none";
            });
        });
    }
}

/* ------------------ Reviews: Google + Local ------------------ */
function createReviewCard(author, rating, text, time) {
    const d = document.createElement("div");
    d.className = "review-card";
    d.innerHTML = `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                    <strong>${author}</strong><span class="rating">${'★'.repeat(Math.round(rating))}</span>
                   </div>
                   <p style="color:var(--muted);font-size:14px;margin-bottom:8px;">${new Date(time * 1000).toLocaleDateString()}</p>
                   <p>${text}</p>`;
    return d;
}

/* Local testimonials stored in localStorage */
function loadLocalTestimonials() {
    const reviewsWrap = el("#reviewsWrap") || el("#contactReviews");
    if (!reviewsWrap) return;
    const stored = JSON.parse(localStorage.getItem("localTestimonials") || "[]");
    stored.forEach(r => {
        const card = createReviewCard(r.name, r.rating, r.text, r.time || Date.now() / 1000);
        reviewsWrap.appendChild(card);
    });
}

/* Add local review form handlers */
function setupLocalReviewForm() {
    const openBtn = el("#openLocalReview");
    const modal = el("#localReviewModal");
    const closeBtn = el("#closeLocalReview");
    const form = el("#localReviewForm");
    if (openBtn && modal) {
        openBtn.addEventListener("click", () => modal.classList.remove("hidden"));
    }
    if (closeBtn) {
        closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    }
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const fd = new FormData(form);
            const item = {
                name: (fd.get("name") || "Anonymous").trim(),
                text: (fd.get("text") || "").trim(),
                rating: Number(fd.get("rating") || 5),
                time: Math.floor(Date.now() / 1000)
            };
            const arr = JSON.parse(localStorage.getItem("localTestimonials") || "[]");
            arr.unshift(item);
            localStorage.setItem("localTestimonials", JSON.stringify(arr));
            modal.classList.add("hidden");
            // update display
            const reviewsWrap = el("#reviewsWrap") || el("#contactReviews");
            if (reviewsWrap) {
                const card = createReviewCard(item.name, item.rating, item.text, item.time);
                reviewsWrap.insertBefore(card, reviewsWrap.firstChild);
            }
            form.reset();
        });
    }
}

/* ------------------ Google Reviews fetch via Maps JS API ------------------ */
/* This uses the Google Maps JS library with PlacesService.getDetails - works client-side.
   To enable: set CONFIG.googleApiKey and CONFIG.placeId. Make sure the key has Places API and Maps JS enabled,
   and restrict the key to your Netlify domain in Google Cloud Console. */
function loadGoogleReviewsIfPossible() {
    if (!CONFIG.googleApiKey || !CONFIG.placeId) {
        renderReviewFallback();
        return;
    }

    // load google maps script with places
    const scriptId = "gmaps-js-api";
    if (document.getElementById(scriptId)) {
        initPlaces();
        return;
    }
    const s = document.createElement("script");
    s.id = scriptId;
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(CONFIG.googleApiKey)}&libraries=places&v=weekly`;
    s.defer = true;
    s.async = true;
    s.onload = initPlaces;
    s.onerror = () => {
        console.warn("Failed to load Google Maps JS API. Showing fallback.");
        renderReviewFallback();
    };
    document.head.appendChild(s);

    function initPlaces() {
        try {
            // we need a map or a div to anchor PlacesService - create an offscreen map element
            const mapDiv = document.createElement("div");
            mapDiv.style.display = "none";
            document.body.appendChild(mapDiv);
            const map = new google.maps.Map(mapDiv);
            // const service = new google.maps.places.Place(map);
            const service = new google.maps.places.PlacesService(map);
            service.getDetails({ placeId: CONFIG.placeId, fields: ["name", "rating", "reviews", "formatted_address", "url"] }, (place, status) => {
                if (status !== google.maps.places.PlacesServiceStatus.OK || !place) {
                    console.warn("PlacesService failed:", status);
                    renderReviewFallback();
                    return;
                }
                // render reviews
                const wrap = el("#reviewsWrap") || el("#contactReviews");
                if (!wrap) return;
                wrap.innerHTML = "";
                if (place.reviews && place.reviews.length) {
                    place.reviews.slice(0, 27).forEach(r => {
                        // Google review's time is in seconds
                        const card = createReviewCard(r.author_name, r.rating, r.text, r.time || Math.floor(Date.now() / 1000));
                        wrap.appendChild(card);
                    });
                } else {
                    renderReviewFallback("No Google reviews found yet — be the first!");
                }
                // also set leave review button
                setLeaveReviewLinks(place.url || null);
            });
        } catch (err) {
            console.error("Error using Google Maps Places:", err);
            renderReviewFallback();
        }
    }
}

// /* ------------------ Google Reviews fetch via Maps JS API ------------------ */




/* Fallback display when no API key or failure */
function renderReviewFallback(msg) {
    const wrap = el("#reviewsWrap") || el("#contactReviews");
    if (!wrap) return;
    wrap.innerHTML = "";
    const p = document.createElement("div");
    p.className = "card";
    p.innerHTML = `<p>${msg || "View our reviews on Google Maps."}</p>
                   <p style="margin-top:8px;"><a id="mapsLink" href="#" target="_blank" rel="noopener">Open Google Maps</a></p>`;
    wrap.appendChild(p);
    setLeaveReviewLinks();
}

/* Set links for leaving a Google review and opening maps */
function setLeaveReviewLinks(mapsUrl) {
    const leaveBtn = el("#leaveGoogleReviewBtn");
    const leaveBtn2 = el("#leaveGoogleReviewBtn2");
    const mapsLink = el("#mapsLink");
    let reviewUrl = "#";
    let mapsOpen = "#";
    if (CONFIG.placeId) {
        reviewUrl = `https://search.google.com/local/writereview?placeid=${CONFIG.placeId}`;
        mapsOpen = `https://www.google.com/maps/place/?q=place_id:${CONFIG.placeId}`;
    } else if (mapsUrl) {
        mapsOpen = mapsUrl;
    }
    if (leaveBtn) leaveBtn.href = reviewUrl;
    if (leaveBtn2) leaveBtn2.href = reviewUrl;
    if (mapsLink) mapsLink.href = mapsOpen;
}

/* ------------------ Contact form (simple mailto fallback) ------------------ */
function setupContactForm() {
    const form = el("#contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const name = fd.get("name");
        const email = fd.get("email");
        const phone = fd.get("phone");
        const message = fd.get("message");
        // For Netlify forms or your backend, replace this with an actual POST.
        // For now we'll open the default mail client as a fallback:
        const subject = encodeURIComponent(`Website Inquiry from ${name}`);
        const body = encodeURIComponent(`${message}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
        window.location.href = `mailto:princessautocar@gmail.com?subject=${subject}&body=${body}`;
    });
}

/* ------------------ Init function ------------------ */
function init() {
    setYear();
    setupNavToggles();
    setupLanguageSwitchers();
    renderFeaturedCars();
    renderInventory();
    setupLocalReviewForm();
    loadLocalTestimonials();
    setupContactForm();
    // initialize google reviews or fallback
    loadGoogleReviewsIfPossible();
    // set review link even if no API
    setLeaveReviewLinks();
}

/* run init when DOM ready */
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

/* Expose CONFIG (easy for user to edit in console) */
window.PRINCESS_CONFIG = CONFIG;

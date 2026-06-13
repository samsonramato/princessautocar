// ─────────────────────────────────────────────────────────────
// INVENTORY
// Each car looks like this:
//
//   {
//     id: 1,
//     title: "2018 Toyota Camry SE",
//     year: 2018,
//     make: "Toyota",
//     price: 15900,            // number, no $ — formatted automatically
//     mileage: "78,000 mi",
//     img: "/assets/your-photo.jpg",  // put the photo in public/assets/
//     desc: "One owner, clean title, recently serviced.",
//     featured: true,          // true = also show on the home page
//   },
//
// NOTE: the entries below are SAMPLES matched to the available photos
// (Chevrolet Equinox, Ford F-150, Hyundai Elantra). Replace the
// details/prices/mileage with the real cars on your lot.
// If you empty this list, the site shows a "call for availability" message.
// ─────────────────────────────────────────────────────────────
export const cars = [
  {
    id: 1,
    title: "2018 Chevrolet Equinox LT",
    year: 2018,
    make: "Chevrolet",
    price: 16900,
    mileage: "72,000 mi",
    img: "/assets/slide1.jpg",
    desc: "Spacious AWD SUV with a smooth ride. Inspected and reconditioned, clean title.",
    featured: true,
  },
  {
    id: 2,
    title: "2016 Ford F-150 XLT",
    year: 2016,
    make: "Ford",
    price: 22900,
    mileage: "98,000 mi",
    img: "/assets/slide2.jpg",
    desc: "Crew-cab pickup, strong and dependable. Great for work or hauling.",
    featured: true,
  },
  {
    id: 3,
    title: "2021 Hyundai Elantra SEL",
    year: 2021,
    make: "Hyundai",
    price: 17500,
    mileage: "45,000 mi",
    img: "/assets/slide3.jpg",
    desc: "Low-mileage sedan with excellent fuel economy and modern features.",
    featured: true,
  },
];

export const formatPrice = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

// ─────────────────────────────────────────────────────────────
// INVENTORY
// Add your real cars here. Each car looks like this:
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
// While this list is empty, the site shows an honest
// "call for current availability" message instead of fake cars.
// ─────────────────────────────────────────────────────────────
export const cars = [];

export const formatPrice = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

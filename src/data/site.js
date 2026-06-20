// Central business info — edit these in one place.
export const site = {
  name: "Princess Auto Austin",
  tagline: "Car Sales & Maintenance",
  description:
    "Family-owned auto repair shop and used-car dealer in Austin, TX. Honest pricing, skilled technicians, and quality inspected vehicles since 2007.",
  address: "11114 N Lamar Blvd, Ste C, Austin, TX 78753",
  // Broken-out address parts for structured data (schema.org PostalAddress)
  addressParts: {
    street: "11114 N Lamar Blvd, Ste C",
    city: "Austin",
    region: "TX",
    postalCode: "78753",
    country: "US",
  },
  // Geo coordinates (used for LocalBusiness schema + map)
  geo: { latitude: 30.3810949, longitude: -97.6899031 },
  phonePrimary: "(512) 926-7900",
  phoneHiring: "(512) 293-9293",
  phoneHref: "tel:+15129267900",
  email: "princessautocar@gmail.com",
  hours: [
    { day: "Mon–Fri", time: "8:30 AM – 5:30 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  // Machine-readable hours for schema.org openingHoursSpecification (24h, ISO day names)
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:30" },
    { days: ["Saturday"], opens: "09:00", closes: "15:00" },
  ],
  // Google Place ID (used for the "Leave a Review" link)
  googlePlaceId: "ChIJiQOyxa3JRIYRDTP37pEv34A",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.938828467336!2d-97.68990312438211!3d30.38109487475595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644c9adc5b20389%3A0x80df2f91eef7330d!2sPrincess%20Auto!5e0!3m2!1sen!2sus!4v1764457654329!5m2!1sen!2sus",
};

export const reviewUrl = `https://search.google.com/local/writereview?placeid=${site.googlePlaceId}`;
export const mapsUrl = `https://www.google.com/maps/place/?q=place_id:${site.googlePlaceId}`;

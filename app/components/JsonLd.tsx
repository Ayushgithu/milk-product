import React from "react";
import { SITE } from "../lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dairy",
    name: SITE.brandName,
    legalName: SITE.companyLegalName,
    description:
      "Fresh pasteurized milk manufacturer - Gold Full Cream, Double Toned, and Chai Special variants.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: "Chhatarpur",
      addressRegion: "Madhya Pradesh",
      postalCode: "471001",
      addressCountry: "IN",
    },
    telephone: SITE.phoneTel,
    email: SITE.email,
    openingHours: "Mo-Sa 09:00-18:30",
    priceRange: "₹₹",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

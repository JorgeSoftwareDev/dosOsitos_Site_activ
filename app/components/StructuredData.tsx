export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Bakery",
        "@id": "https://dosositosbakery.com/#bakery",
        "name": "Dos Ositos Bakery",
        "url": "https://dosositosbakery.com",
        "description": "Cookies & Bars baked with Amor.",
        "priceRange": "$$",
        "servesCuisine": "Bakery",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Signal Hill",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://instagram.com/dosositosbakery",
          "https://facebook.com/dosositosbakery"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://dosositosbakery.com/#organization",
        "name": "Dos Ositos Bakery",
        "url": "https://dosositosbakery.com"
      },
      {
        "@type": "WebSite",
        "@id": "https://dosositosbakery.com/#website",
        "url": "https://dosositosbakery.com",
        "name": "Dos Ositos Bakery"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

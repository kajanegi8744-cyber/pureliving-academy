# QA Checklist

## Static checks (performed by packaging script)
- PASS — index.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — products.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — product.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — search.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — cart.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — checkout.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — confirmation.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — contact.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — quote.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — appointment.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — newsletter.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — account.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — support.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — resources.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — downloads.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — gtm-lab.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — ga4-lab.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — simulator.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — documentation.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — interview.html: GTM ID occurs 2 times (expected once in script and once in noscript).
- PASS — downloads/water-filter-buying-guide.pdf exists.
- PASS — downloads/product-comparison-checklist.pdf exists.
- PASS — downloads/home-air-quality-guide.pdf exists.
- PASS — downloads/home-appliance-maintenance-guide.pdf exists.
- PASS — downloads/conversion-tracking-practice-guide.pdf exists.
- PASS — downloads/sample-products.csv exists.
- PASS — downloads/demo-product-catalogue.json exists.

## Manual / live checks (NOT TESTED here)
- [ ] Every navigation link opens correctly on the deployed GitHub Pages URL.
- [ ] Product search, category filtering and price sorting work on mobile and desktop.
- [ ] Add to Cart, quantity update, remove, cart total and checkout work end-to-end.
- [ ] Invalid checkout cannot create an order; valid checkout creates one demo transaction.
- [ ] Refresh/back/retry does not create duplicate purchase events for the same transaction.
- [ ] Every PDF/CSV/JSON link downloads the expected file on the deployed subpath.
- [ ] Invalid forms do not push `generate_lead`; successful demo forms do.
- [ ] GTM Preview connects to the deployed website and expected tags fire.
- [ ] GA4 DebugView receives intended events and parameters.
- [ ] Google Ads conversion setup is independently verified.
- [ ] Browser console has no errors; images and responsive layout checked.

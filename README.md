# PureLiving — Store & Conversion Tracking Academy

A static, GitHub Pages-compatible training project. It includes 20 HTML pages, a responsive stylesheet, demo e-commerce interactions, client-side demo forms, Data Layer events, five substantive PDF resources, CSV and JSON product data, and Hindi-friendly tracking documentation.

## Important demo limits
- GTM Container ID `GTM-ML22WP84` is installed in every HTML page.
- The GTM snippet only loads the container. It does **not** configure GA4/Google Ads tags, triggers, variables, linking, consent settings, or account-level conversions.
- Forms do not send data to a backend. Product/cart/order state is demo data stored in browser storage.
- No real payments are processed. Never enter real payment information or passwords.
- `purchase` is pushed after a valid demo checkout and uses a unique demo transaction ID. This client-side demo guard is not a substitute for server-side order confirmation in production.
- Download events track a click/initiated download, not confirmed file consumption.
- Before production, review consent, privacy, accessibility, security, and legal requirements.

## Deploy to GitHub Pages
1. Extract the ZIP.
2. Create a GitHub repository and upload the **contents** of this folder to the repository root.
3. In repository Settings → Pages, select deployment from the `main` branch and `/ (root)` (or the branch/folder you use).
4. Wait for the published URL, then test the homepage and all resource links at the deployed subpath.
5. Open GTM Preview/Tag Assistant for the deployed URL and confirm the container connects.
6. Configure a GA4 Google tag, Custom Event triggers and GA4 Event tags in GTM. Use `documentation.html` and `gtm-lab.html`.
7. Verify events in Preview and GA4 DebugView. Configure Google Ads linking/import or direct conversion tags separately.

## Main pages
Home, Products, Product Details, Search, Cart, Checkout, Confirmation, Contact, Quote, Appointment, Newsletter, Signup/Login Demo, Support/FAQ, Resources, Download Center, GTM Practice Lab, GA4 Debugging Lab, Client Requirement Simulator, Tracking Documentation, Interview Practice.

## Event examples
- `view_item_list`, `select_item`, `view_item`
- `add_to_cart`, `remove_from_cart`, `view_cart`, `begin_checkout`
- `add_shipping_info`, `add_payment_info`, `purchase`
- `generate_lead`, `file_download`, `sign_up`, `form_start`, `faq_toggle`, `phone_click`, `email_click`

## QA status
Static project checks are performed during packaging: expected pages, GTM snippet count, and downloadable file existence. Browser-level manual tests, live GitHub Pages deployment, Tag Assistant connection, and GA4/Google Ads data receipt are **NOT TESTED** in this environment. Do not treat those as PASS until you verify them yourself.

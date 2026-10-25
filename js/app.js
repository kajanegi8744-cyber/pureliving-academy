/* PureLiving Academy - demo interactions */
(function () {
  "use strict";

  function trackEvent(eventName, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params
    });
    console.log("Demo tracking event:", eventName, params || {});
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a");
    const button = event.target.closest("button");

    if (link) {
      const href = link.getAttribute("href") || "";
      const text = (link.innerText || link.textContent || "").trim();

      if (href.toLowerCase().endsWith(".pdf")) {
        trackEvent("guide_click", {
          link_text: text,
          file_name: href.split("/").pop()
        });
      }

      if (link.hasAttribute("download")) {
        trackEvent("file_download", {
          link_text: text,
          file_name: href.split("/").pop()
        });
      }
    }

    if (button) {
      const text = (button.innerText || button.textContent || "").trim();
      trackEvent("demo_button_click", {
        button_text: text
      });
    }
  });

  document.addEventListener("submit", function (event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    trackEvent("demo_form_submit", {
      form_id: form.id || "unnamed_form",
      form_name: form.getAttribute("name") || "demo_form"
    });
  });

  console.log("PureLiving Academy demo interactions loaded.");
})();

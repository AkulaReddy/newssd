(function () {
  let eventCounter = 1; // To number events Q1, Q2, Q3...

  // Function to capture page view
  function capturePageView() {
    const data = {
      type: "page_view",
      url: window.location.href,
      title: document.title,
      timestamp: new Date().toISOString(),
    };
    printEvent(data);
  }

  // Function to capture click events
  function captureClick(event) {
    const el = event.target;
    const data = {
      type: "click",
      tag: el.tagName,
      id: el.id || null,
      classes: el.className || null,
      text: el.innerText ? el.innerText.trim().substring(0, 50) : null,
      x: event.clientX,
      y: event.clientY,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    };
    printEvent(data);
  }

  // Function to print events as Q1, Q2, ...
  function printEvent(data) {
    console.log(`E${eventCounter}:`, data);
    eventCounter++;
  }

  // Attach event listeners
  document.addEventListener("DOMContentLoaded", capturePageView);
  document.addEventListener("click", captureClick, true); // use capture phase to catch all clicks
})();

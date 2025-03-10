// Navigation Bar
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
// End of Navigation Bar

// Pricng & Plans
const billingToggle = document.getElementById("billing-toggle");
const plans = document.querySelectorAll(".plan");

billingToggle.addEventListener("change", function () {
  plans.forEach((plan, index) => {
    const priceElement = plan.querySelector(".plan-price");
    const billingElement = plan.querySelector(".plan-billing");

    if (this.checked) {
      // Yearly pricing
      switch (index) {
        case 0:
          priceElement.innerHTML =
            "$66.75<span class='per-month'>/month</span>";
          billingElement.innerHTML =
            'Billed at <span class="crossed-out">$1,068</span> $801/year';
          break;
        case 1:
          priceElement.innerHTML =
            "$149.25<span class='per-month'>/month</span>";
          billingElement.innerHTML =
            'Billed at <span class="crossed-out">$2,388</span> $1,791/year';
          break;
        case 2:
          priceElement.innerHTML =
            "$411.75<span class='per-month'>/month</span>";
          billingElement.innerHTML =
            'Billed at <span class="crossed-out">$6,588</span> $4,941/year';
          break;
      }
    } else {
      // Monthly pricing
      switch (index) {
        case 0:
          priceElement.innerHTML = "$89<span class='per-month'>/month</span>";
          billingElement.innerHTML = "Pay monthly, cancel any time";
          break;
        case 1:
          priceElement.innerHTML = "$199<span class='per-month'>/month</span>";
          billingElement.innerHTML = "Pay monthly, cancel any time";
          break;
        case 2:
          priceElement.innerHTML = "$549<span class='per-month'>/month</span>";
          billingElement.innerHTML = "Pay monthly, cancel any time";
          break;
      }
    }
  });
});
// End of Pricng & Plans

// Clients Logo Slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".logo-slider");
  const sliderContent = slider.innerHTML;
  slider.innerHTML = sliderContent + sliderContent;
});
// End of Clients Logo Slider

// Who Are You?

// End of Who Are You?

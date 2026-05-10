(function () {
  function getEl(id) {
    return document.getElementById(id);
  }

  function formatMoney(value) {
    return "$" + Math.round(value / 10) * 10;
  }

  function formatRange(low, high) {
    return formatMoney(low) + " – " + formatMoney(high);
  }

  function showFeedback(message) {
    const feedback = getEl("form-feedback");

    if (!feedback) return;

    feedback.textContent = message;
    feedback.hidden = false;
  }

  function hideFeedback() {
    const feedback = getEl("form-feedback");

    if (!feedback) return;

    feedback.textContent = "";
    feedback.hidden = true;
  }

  function scrollToResultIfNeeded() {
    const resultCard = getEl("result-card");

    if (!resultCard) return;

    requestAnimationFrame(function () {
      const resultTop = resultCard.getBoundingClientRect().top;
      const safeTop = 88;
      const resultIsLow = resultTop > window.innerHeight * 0.65;
      const resultIsCovered = resultTop < safeTop;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (resultIsLow || resultIsCovered) {
        resultCard.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  }

  function calculateRepairCost() {
    const category = getEl("repair-category")?.value;
    const jobType = getEl("repair-job")?.value;
    const jobSize = getEl("job-size")?.value;
    const marketLevel = getEl("market-level")?.value || "average";
    const homeType = getEl("home-type")?.value || "house";
    const urgency = getEl("urgency")?.value || "normal";

    const repairData = window.HRC_REPAIR_COST_DATA?.[category];
    const jobData = repairData?.jobs?.[jobType];
    const sizeData = jobData?.sizes?.[jobSize];

    if (!repairData || !jobData || !sizeData) {
      showFeedback("Please choose a repair type and job size first.");
      return;
    }

    hideFeedback();

    const marketMultiplier = window.HRC_REGION_MULTIPLIERS?.[marketLevel] || 1;
    const urgencyMultiplier = window.HRC_URGENCY_MODIFIERS?.[urgency] || 1;
    const homeTypeMultiplier = homeType === "apartment" ? 1.05 : 1;

    const finalMultiplier =
      marketMultiplier * urgencyMultiplier * homeTypeMultiplier;

    const totalLow = sizeData.low * finalMultiplier;
    const totalHigh = sizeData.high * finalMultiplier;

    const laborLow = totalLow * sizeData.laborShare;
    const laborHigh = totalHigh * sizeData.laborShare;

    const materialLow = totalLow - laborLow;
    const materialHigh = totalHigh - laborHigh;

    getEl("result-total").textContent = formatRange(totalLow, totalHigh);
    getEl("result-labor").textContent = formatRange(laborLow, laborHigh);
    getEl("result-materials").textContent = formatRange(
      materialLow,
      materialHigh,
    );
    getEl("result-time").textContent = sizeData.time;
    getEl("result-recommendation").textContent = sizeData.recommendation;
    getEl("result-note").textContent = sizeData.note;

    const resultCard = getEl("result-card");
    if (!resultCard) return;

    resultCard.hidden = false;
    scrollToResultIfNeeded();
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = getEl("repair-cost-form");
    const resultCard = getEl("result-card");

    if (!form || !resultCard) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      calculateRepairCost();
    });

    form.addEventListener("reset", function () {
      hideFeedback();
      resultCard.hidden = true;
    });
  });
})();

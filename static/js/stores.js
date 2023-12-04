document.addEventListener("DOMContentLoaded", function () {
  const storesLocator = document.getElementById("stores-locator");
  const cardMaps = document.querySelectorAll(".card-map");

  storesLocator.addEventListener("change", function () {
    const selectedCity = storesLocator.value;

    cardMaps.forEach(function (card) {
      if (card.id === selectedCity) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});


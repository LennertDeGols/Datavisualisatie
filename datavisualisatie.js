const visualisation = document.querySelector("#visualisation");

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    showData(data);
  });

function showData(data) {

  data.forEach(day => {

    const dayCard = document.createElement("article");
    dayCard.classList.add("day-card");

    const title = document.createElement("h3");
    title.textContent = day.dag;

    dayCard.appendChild(title);

    day.activiteiten.forEach(activity => {

      const activityDiv = document.createElement("div");
      activityDiv.classList.add("activity");

      const text = document.createElement("p");

      text.textContent =
        activity.locatie +
        " - " +
        activity.type +
        " (" +
        activity.minuten +
        " minuten)";

      const blocks = document.createElement("div");
      blocks.classList.add("blocks");

      const amountOfBlocks =
        Math.round(activity.minuten / 30);

      for (let i = 0; i < amountOfBlocks; i++) {

        const block = document.createElement("div");

        block.classList.add("block");

        block.classList.add(
          activity.locatie.toLowerCase()
        );

        blocks.appendChild(block);
      }

      activityDiv.appendChild(text);
      activityDiv.appendChild(blocks);

      dayCard.appendChild(activityDiv);
    });

    visualisation.appendChild(dayCard);
  });
}
const devs = [];
let techCount = 0;
const mainDiv = document.getElementById("main-tech-div");
const form = document.getElementById("dev-form");

const addTechButton = document.getElementById("add-button");
addTechButton.addEventListener("click", () => {
  const techDiv = document.createElement("div");
  techDiv.id = `div-${techCount}`;
  techDiv.classList = "tech-div";

  const techLabel = document.createElement("label");
  techLabel.htmlFor = `technology-${techDiv.id}`;
  techLabel.innerText = "Tecnologia:";
  const techNameInput = document.createElement("input");
  techNameInput.type = "text";
  techNameInput.id = `technology-${techDiv.id}`;
  techNameInput.name = `techName`;

  const expYears = document.createElement("label");
  expYears.htmlFor = `expYears-${techDiv.id}`;
  expYears.innerText = "Anos de experiência:";

  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.id = `radio1-${techDiv.id}`;
  radio1.name = `expYears-${techDiv.id}`;
  radio1.value = "0-2 anos";
  const radio1Label = document.createElement("label");
  radio1Label.htmlFor = `radio1-${techDiv.id}`;
  radio1Label.innerText = "0-2 anos";

  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.id = `radio2-${techDiv.id}`;
  radio2.name = `expYears-${techDiv.id}`;
  radio2.value = "3-4 anos";
  const radio2Label = document.createElement("label");
  radio2Label.htmlFor = `radio2-${techDiv.id}`;
  radio2Label.innerText = "3-4 anos";

  const radio3 = document.createElement("input");
  radio3.type = "radio";
  radio3.id = `radio3-${techDiv.id}`;
  radio3.name = `expYears-${techDiv.id}`;
  radio3.value = "5+ anos";
  const radio3Label = document.createElement("label");
  radio3Label.htmlFor = `radio3-${techDiv.id}`;
  radio3Label.innerText = "5+ anos";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover Tecnologia";
  removeButton.addEventListener("click", (ev) => {
    mainDiv.removeChild(techDiv);
  });

  techDiv.append(
    techLabel,
    document.createElement("br"),
    techNameInput,
    document.createElement("br"),
    document.createElement("br"),
    expYears,
    document.createElement("br"),
    radio1,
    radio1Label,
    radio2,
    radio2Label,
    radio3,
    radio3Label,
    document.createElement("br"),
    document.createElement("br"),
    removeButton,
    document.createElement("br"),
    document.createElement("br")
  );

  mainDiv.append(techDiv);
  techCount++;
});

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  console.clear();

  const dev = {
    devName: "",
    technogies: [],
  };

  dev.devName = document.getElementById("name-dev").value;
  const technologiesList = document.querySelectorAll(".tech-div");
  technologiesList.forEach((item) => {
    const technology = {
      techName: "",
      expYears: "",
    };
    technology.techName = document.querySelector(
      `#technology-${item.id}`
    ).value;
    technology.expYears = document.querySelector(
      `input[name='expYears-${item.id}']:checked`
    ).value;

    dev.technogies.push(technology);
  });

  devs.push(dev);
  alert(`DEV ${dev.devName} cadastrado com sucesso!`);
  console.log(devs);

  technologiesList.forEach((item) => item.remove());
  document.getElementById("name-dev").value = "";
});

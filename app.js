const projects = [
  {
    id: 1,
    name: "Color flipper",
    img: "./assets/colorPicker.png",
    url: "color-flipper/index.html",
  },
  {
    id: 2,
    name: "Counter",
    img: "./assets/counter.png",
    url: "counter/index.html",
  },
  {
    id: 3,
    name: "Reviews",
    img: "./assets/reviews.png",
    url: "reviewsproject/index.html",
  },
];

const appsContainer = document.querySelector(".wrapper__projects");

const generateProjects = (apps) => {
  appsContainer.innerHTML = "";

  apps.forEach((app) => {
    const appDiv = document.createElement("div");
    appDiv.classList.add("project");
    appDiv.innerHTML = `
    <a class="link" href=${app.url}>
    <img class="project__img" src="${app.img}"/>
    <h4 class="project__title">${app.name}</h4></a>
    `;
    appsContainer.appendChild(appDiv);
  });
};

generateProjects(projects);

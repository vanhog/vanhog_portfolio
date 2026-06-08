let projects;
let projectList = [];

function showCurrent(indx) {
  console.log(indx);
  const rightText = document.getElementById('project-text');
  rightText.innerText = projects.projects[indx].description;

  const rightImg = document.getElementById('project-image');
  rightImg.innerHTML =
    '<img src=./assets/' + projects.projects[indx].img + ' />';
}
async function loadProjects() {
  const res = await fetch(new URL('../assets/projects.json', import.meta.url));
  projects = await res.json();
}
export const Projects = {
  async render(container) {
    if (!projects) await loadProjects();
    for (let elem in projects.projects) {
      const p = document.createElement('p');
      p.innerText = projects.projects[elem].title;
      p.setAttribute('class', 'project-title');
      p.setAttribute('id', String(elem));
      p.addEventListener('mouseover', (event) => {
        // highlight the mouseover target
        event.target.style.fontWeight = '500';
        showCurrent(elem);
      });
      p.addEventListener('mouseout', (event) => {
        // highlight the mouseover target
        event.target.style.fontWeight = 'normal';
      });
      projectList.push(p);
    }

    for (let elem of projectList) {
      container.appendChild(elem);
    }

    let a = 0;
    let b = 2;

    return a + b;
  },
};

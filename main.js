const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    imageUrl: "https://thumbs.dreamstime.com/b/harry-potter-school-uniform-black-outline-white-background-tattoo-logo-232461674.jpg",
    expel: false
  },
  {
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
    imageUrl: "https://i.pinimg.com/564x/29/66/60/296660cc32f433328d13576e97df15ad.jpg",
    expel: false
  }
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

const filter = (array, typeString) => {
  const houseArray = [];

  for(const student of array) {
    if(student.house === typeString) {
      houseArray.push(student);
    }
  }
  return houseArray;
}





const gryffindorButton = document.querySelector('#gryffindor-btn');
const slytherinButton = document.querySelector('#slytherin-btn');
const hufflepuffButton = document.querySelector('#hufflepuff-btn');
const ravenclawButton = document.querySelector('#ravenclaw-btn');

gryffindorButton.addEventListener('click', () => {
  const gryffindorHouse = filter(students, 'Gryffindor');
  cardsOnDom(gryffindorHouse);
});

slytherinButton.addEventListener('click', () => {
  const slytherinHouse = filter(students, 'Slytherin');
  cardsOnDom(slytherinHouse);
});

hufflepuffButton.addEventListener('click', () => {
  const hufflepuffHouse = filter(students, 'Hufflepuff');
  cardsOnDom(hufflepuffHouse);
});

ravenclawButton.addEventListener('click', () => {
  const ravenclawHouse = filter(students, 'Ravenclaw');
  cardsOnDom(ravenclawHouse);
});

const form = document.querySelector('form');

const createStudent = (e) => {
  e.preventDefault();
  const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  const houseIndex = Math.floor(Math.random() * 4);

  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector('#name').value,
    house: houses[houseIndex],
    
   
  }

  students.push(newStudentObj);
  cardsOnDom(students);
  form.reset();
  
}

form.addEventListener('submit', createStudent);

const app = document.querySelector('#app');

const voldamortArmy = [];

const cardsOnDom = (array) => {
  let domString = "";
  for(const student of array) {
    domString += `<div class="card" id="student-card" style="width: 18rem;">
    <img class="card-img-top" src="${student.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">house: ${student.house}</p>
      <button class="btn btn-dark" id="expel--${student.id}">EXPEL</button>
    </div>
  </div>`
  }
  renderToDom('#app', domString);

  const expelButton = document.querySelectorAll(".btn-dark");
expelButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const studentId = parseInt(e.target.id.split("--")[1]);
    const index = students.findIndex((student) => student.id === studentId);
    const expelledStudent = students.splice(index, 1)[0];
    voldamortArmy.push(expelledStudent);
    expelledArmy(voldamortArmy);
    cardsOnDom(students);
  }); 
  
});

};
// cardsOnDom(students);



const expelledArmy = (array) => {
  let domString = "";
  for(const student of array) {
    domString+= `<div class="card" id="student-card" style="width: 18rem;">
    <img class="card-img-top" src="${student.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">VOLDAMORT'S ARMY</p>
    </div>
  </div>`
  }
  renderToDom("#expelled-students", domString);
  };
  















  // const startApp = () => {
  //   cardsOnDom(students);
  // }
  // startApp();
  


  

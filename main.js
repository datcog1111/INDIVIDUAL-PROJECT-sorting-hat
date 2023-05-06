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
  },
 {
  id: 3,
  name: "Draco Malfoy",
  house: "Slytherin",
  imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b17d896-1cf9-446a-9286-c6b37fb00d1c/d6qvuvw-372b9e8e-fb44-4b4f-9830-24ee9825623b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiMTdkODk2LTFjZjktNDQ2YS05Mjg2LWM2YjM3ZmIwMGQxY1wvZDZxdnV2dy0zNzJiOWU4ZS1mYjQ0LTRiNGYtOTgzMC0yNGVlOTgyNTYyM2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fRw0FNFts6W-MRiCna-Z2CyYWFfNOVjZ_JYkOQPQI9M",
  expel: false

 },
 {
  id: 4,
  name: "Severus Snape",
  house: "Slytherin",
  imageUrl: "data:image/png;base64,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",
  expel: false

 },
 {
  id: 5,
  name: "Luna Lovegood",
  house: "Ravenclaw",
  imageUrl: "data:image/jpeg;base64,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",
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




const allButton = document.querySelector('#all-btn');
const gryffindorButton = document.querySelector('#gryffindor-btn');
const slytherinButton = document.querySelector('#slytherin-btn');
const hufflepuffButton = document.querySelector('#hufflepuff-btn');
const ravenclawButton = document.querySelector('#ravenclaw-btn');



allButton.addEventListener('click', () => {
  cardsOnDom(students);
})

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
    imageUrl: "https://www.kids-n-fun.com/kleurplaatjes/dobby-harry-potter/dobby-4.jpg"
   
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
      <p class="card-text">House: ${student.house}</p>
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
    domString+= `<div class="card" id="army-card" style="width: 18rem;">
    <img class="card-img-top" src="${student.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">VOLDAMORT'S ARMY</p>
    </div>
  </div>`
  }
  renderToDom("#expelled-students", domString);
  };

   
  















  const startApp = () => {
    cardsOnDom(students);
  }
  startApp();
  


  

//create new Date 

const today = new Date();

const thisYear = today.getFullYear(); 


//footer

const footer = document.createElement('footer');

footer.className = "site-footer";

//contact info 

const contactHeading = document.createElement ('h3'); 
contactHeading.textContent = "Contact Me"; 

const contactEmail = document.createElement ('p');
contactEmail.innerHTML = "Email: <a href='mailto:fatimarettea1997@gmail.com'>fatimarettea1997@gmail.com</a>"

const contactPhone = document.createElement('p'); 
contactPhone.textContent = "Phone: (818)220-9005" 

//append
footer.appendChild(contactHeading); 
footer.appendChild(contactEmail); 
footer.appendChild(contactPhone); 

// copyright 

const copyright = document.createElement('p');

copyright.innerHTML = `©Fatima Rettea ${thisYear}. All rights reserved.`;


//footer to the page 

document.body.appendChild(footer);

document.body.appendChild(copyright);

//skills section

// skills section
const skills = [
    "Basic Tech Troubleshooting",
    "Bilangual English & Spanish",
    "Creative Problem Solving"
];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

skillsList.className = "skills-list";

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

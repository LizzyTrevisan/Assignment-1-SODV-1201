/*
* @Author: Leiziane Trevisan Dardin
* @StudentID: 459656
* @Date: optional
* @Description: I have been using ChatGpt only as a guide to clarify doubts and add new functionalities as fectch I haven't  I have seen before.
OpenAI. (2025). ChatGPT (June 2025 version). https://chat.openai.com/
*/


let staffList = document.createElement("ul");
staffList.className = "staffListDisplay";
document.body.appendChild(staffList);

let sortByNameBtn = document.createElement("button");
sortByNameBtn.className = "sortBtn";
sortByNameBtn.textContent = "Sort by Name";

sortByNameBtn.addEventListener("click", function () {
  let sortedList = [...staffData].sort((a, b) => a.name.localeCompare(b.name));
  displayStaff(sortedList);
});

document.body.appendChild(sortByNameBtn);


let sortBySalaryBtn = document.createElement("button");
sortBySalaryBtn.className = "sortBtn";
sortBySalaryBtn.textContent = "Sort by Salary";

<<<<<<< Updated upstream
sortBySalaryBtn.addEventListener("click", function () {
 
=======
sortBySalaryBtn.addEventListener("click", function (){
>>>>>>> Stashed changes
  let sortedSalary = [...staffData].sort((a, b) => a.salary - b.salary);
  displayStaff(sortedSalary);
});

document.body.appendChild(sortBySalaryBtn);

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
function displayStaff(list) {
  staffList.innerHTML = "";

  list.forEach(person => {
    let li = document.createElement("li");
    li.textContent = `${person.name} - $${person.salary.toLocaleString()}`;
    staffList.appendChild(li);
  });
}


let staffData = [];

fetch("staff.txt")"
  .then(response => response.text())
  .then(text => {
    let lines = text.trim().split('\n');

staffData = lines.map(line => {

  line = line.replace(/[\[\]"]/g, '').trim();


  let parts = line.split(',');

  if (parts.length < 6) {
<<<<<<< Updated upstream
    console.warn('Line is not valid:', line);
=======
    console.warn('Line s not valid:', line);
>>>>>>> Stashed changes
    return null;
  }

  let name = parts[0].trim();
  let salaryStr = parts[5].trim().replace('$', '').replace(/,/g, '');

  return {
    name: name,
    salary: parseFloat(salaryStr)
  };
}).filter(item => item !== null); 

    displayStaff(staffData);
  })
  .catch(error => console.log("Error loading the list from staff.txt", error));


  let clearBtn = document.createElement("button");
  clearBtn.className = "sortBtn";
  clearBtn.textContent = "Clear";

  clearBtn.addEventListener("click", function() {
    staffList.innerHTML ="";

  });

  document.body.appendChild(clearBtn);

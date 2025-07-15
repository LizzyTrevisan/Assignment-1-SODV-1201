/*
* @Author: Leiziane Trevisan Dardin
* @StudentID: 459656
* @Date: optional
* @Description: I have been using ChatGpt only as a guide to clarify doubts and add new functionalities as fectch I haven't  I have seen before.
OpenAI. (2025). ChatGPT (June 2025 version). https://chat.openai.com/
*/

// Cria a lista UL
let staffList = document.createElement("ul");
staffList.className = "staffListDisplay";
document.body.appendChild(staffList);

// Botão Sort por Nome
let sortByNameBtn = document.createElement("button");
sortByNameBtn.className = "sortBtn";
sortByNameBtn.textContent = "Sort by Name";

sortByNameBtn.addEventListener("click", function () {
  let sortedList = [...staffData].sort((a, b) => a.name.localeCompare(b.name));
  displayStaff(sortedList);
});

document.body.appendChild(sortByNameBtn);

// Botão Sort por Salário
let sortBySalaryBtn = document.createElement("button");
sortBySalaryBtn.className = "sortBtn";
sortBySalaryBtn.textContent = "Sort by Salary";

sortBySalaryBtn.addEventListener("click", function () {
  // Correção aqui: salary é número, não precisa localeCompare
  let sortedSalary = [...staffData].sort((a, b) => a.salary - b.salary);
  displayStaff(sortedSalary);
});

document.body.appendChild(sortBySalaryBtn);

// Função para exibir a lista
function displayStaff(list) {
  staffList.innerHTML = "";

  list.forEach(person => {
    let li = document.createElement("li");
    li.textContent = `${person.name} - $${person.salary.toLocaleString()}`;
    staffList.appendChild(li);
  });
}

// Carrega os dados do staff.txt
let staffData = [];

fetch("staff.txt") // <-- CORREÇÃO: estava escrito "fectch"
  .then(response => response.text())
  .then(text => {
    let lines = text.trim().split('\n');

staffData = lines.map(line => {
  // Remove colchetes e aspas
  line = line.replace(/[\[\]"]/g, '').trim();

  // Divide em partes
  let parts = line.split(',');

  if (parts.length < 6) {
    console.warn('Linha inválida ignorada:', line);
    return null;
  }

  let name = parts[0].trim();
  let salaryStr = parts[5].trim().replace('$', '').replace(/,/g, '');

  return {
    name: name,
    salary: parseFloat(salaryStr)
  };
}).filter(item => item !== null); // Remove nulls do array

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
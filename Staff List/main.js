/*
* @Author: Leiziane Trevisan Dardin
* @StudentID: 459656
* @Description: I have been using ChatGPT only as a guide to clarify doubts and add new functionalities.
*/

// Nav Bar
const nav = document.createElement("nav");
nav.id = "nav";

const navLinks = document.createElement("div");
navLinks.className = "nav-links";

const linkProfile = document.createElement("a");
linkProfile.href = '../Profile Page/index.html';
linkProfile.textContent = "Profile";

const linkGradeConverter = document.createElement("a");
linkGradeConverter.href = '../Grade Converter/index.html';
linkGradeConverter.textContent = "Grade Converter";

const linkStaffPage = document.createElement("a");
linkStaffPage.href = '#Staff List';
linkStaffPage.textContent = "Staff List";

const linkTemperatureConverter = document.createElement("a");
linkTemperatureConverter.href = '../Temperature Converter/index.html';
linkTemperatureConverter.textContent = "Temperature Converter";

navLinks.append(linkProfile, linkGradeConverter, linkStaffPage, linkTemperatureConverter);
nav.appendChild(navLinks);
document.getElementById("navbar-container").appendChild(nav);

// Content
const main = document.querySelector("main");
const contentContainer = document.createElement("div");
contentContainer.className = "content-container";
main.appendChild(contentContainer);

const staffList = document.createElement("ul");
staffList.className = "staffListDisplay";

const buttonsContainer = document.createElement("div");
buttonsContainer.className = "buttonsContainer";

const sortByNameBtn = document.createElement("button");
sortByNameBtn.className = "sortBtn";
sortByNameBtn.textContent = "Sort by Name";
sortByNameBtn.addEventListener("click", () => {
  const sortedList = [...staffData].sort((a, b) => a.name.localeCompare(b.name));
  displayStaff(sortedList);
});

const sortBySalaryBtn = document.createElement("button");
sortBySalaryBtn.className = "sortBtn";
sortBySalaryBtn.textContent = "Sort by Salary";
sortBySalaryBtn.addEventListener("click", () => {
  const sortedList = [...staffData].sort((a, b) => a.salary - b.salary);
  displayStaff(sortedList);
});

const clearBtn = document.createElement("button");
clearBtn.className = "sortBtn";
clearBtn.textContent = "Clear";
clearBtn.addEventListener("click", () => {
  staffList.innerHTML = "";
});

buttonsContainer.append(sortByNameBtn, sortBySalaryBtn, clearBtn);
contentContainer.append(staffList, buttonsContainer);

let staffData = [];

function displayStaff(list) {
  staffList.innerHTML = "";
  list.forEach(person => {
    const li = document.createElement("li");
    li.textContent = `${person.name} - $${person.salary.toLocaleString()}`;
    staffList.appendChild(li);
  });
}

fetch("staff.txt")
  .then(response => response.text())
  .then(text => {
    const lines = text.trim().split('\n');
    staffData = lines.map(line => {
      line = line.replace(/[\[\]"]/g, '').trim();
      const parts = line.split(',');

      if (parts.length < 6) {
        console.warn('Invalid Line:', line);
        return null;
      }

      const name = parts[0].trim();
      const salaryStr = parts[5].trim().replace('$', '').replace(/,/g, '');
      return { name: name, salary: parseFloat(salaryStr) };
    }).filter(item => item !== null);
  })
  .catch(error => console.log("Error loading the list from staff.txt", error));

// Footer
const footer = document.querySelector("footer");
if (footer) {
  const footerText = document.createElement("p");
  footerText.innerHTML = `&copy; ${new Date().getFullYear()} Leiziane Trevisan Dardin. All rights reserved.`;
  footer.appendChild(footerText);
}
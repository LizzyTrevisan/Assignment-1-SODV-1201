/*
* @Author: Leiziane Trevisan Dardin
* @StudentID: 459656
* @Date: optional
* @Description: I have been using ChatGpt only as a guide to clarify doubts and add new functionalities I have seen or don't remember.
OpenAI. (2025). ChatGPT (June 2025 version). https://chat.openai.com/
*/

const title = "Grade Calculator";
let calculator = document.createElement("h1");
calculator.textContent = title;
calculator.style.textAlign = "center";
calculator.style.fontSize = "40px";
calculator.style.fontFamily= "Arial";
calculator.style.color ="#004D40";
document.body.appendChild(calculator);

let container = document.createElement("div");
    container.style.textAlign = "center";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.gap = "10px";
    container.style.marginTop = "30px";
    document.body.appendChild(container);

let gradeInput = document.createElement("input");
    gradeInput.placeholder = "Enter your grade";
    gradeInput.style.fontSize = "20px"
    gradeInput.style.textAlign = "center";
    gradeInput.style.position = "center";
    gradeInput.style.borderRadius="3px";
    gradeInput.style.margin = "30px";
    gradeInput.style.padding ="5px";
    gradeInput.style.boxShadow = "0 0 5px rgb(143, 127, 127)";
    container.appendChild(gradeInput);

let gradeFinal = document.createElement("p");
    container.appendChild(gradeFinal);

let warningText = document.createElement("p");
    warningText.style.color = "red";
    warningText.style.fontSize= "20px";
    warningText.style.marginTop = "5px";
    warningText.style.minHeight = "30px"; //this is great to not move the btn of its location.
    warningText.style.margin = "5px";
    container.appendChild(warningText);

let gradeBtnConverter = document.createElement("button");
    gradeBtnConverter.style.padding = "5px";
    gradeBtnConverter.style.borderRadius = "7.5px";
    gradeBtnConverter.style.boxShadow = "0 0 10px rgba(0, 77, 64, 0.5)";
    gradeBtnConverter.style.marginTop = "5px";
    gradeBtnConverter.textContent = "Calculate";
    container.appendChild(gradeBtnConverter);

function MarkToGrade (){

    gradeFinal.textContent = "";
    warningText.textContent = "";
    gradeFinal.style.color = "black";

try{ //using exception handling (try-catch)

        let gradeValue = parseInt(gradeInput.value);

        //starting with an empty placeholder
        if(gradeInput.value.trimEnd() === ""){
            warningText.textContent = "Please enter a grade!";
            return;
        }

        //validating is just numbers entered
        if(isNaN(gradeValue)){
            warningText.textContent = "Please enter a valid grade!";
            warningText.style.color= "#D404040";
            return;
        }
        
        //validating there is no negative numbers or above 100
        if (gradeValue < 0 || gradeValue > 100) {
            warningText.textContent = "Grade cannot be less than 0 or more than 100";
            gradeFinal.style.color = "red";
            return;
        }

        //Validating the Grades according to the table provided
        if(gradeValue >= 90) {
            gradeFinal.textContent = 'A';
            return;
        } else if (gradeValue >=80 && gradeValue < 90){
            gradeFinal.textContent = 'B';
            return;
        } else if (gradeValue >=70 && gradeValue < 80){
            gradeFinal.textContent = 'C';
            return;
        } else if (gradeValue >=60 && gradeValue < 70){
            gradeFinal.textContent = 'D';
            return;
        } else if (gradeValue >=50 && gradeValue < 60 ){
            gradeFinal.textContent = 'E';
            return;
        } else {
            gradeFinal.textContent = "Failed";
            gradeFinal.style.color = "red";
            return;
        }
    } catch (error){
            warningText.textContent = "Error!"
    }
}

//to use Enter key from keyboard and accept the value entered instead of clicking the btn
gradeBtnConverter.addEventListener("click", MarkToGrade);
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        MarkToGrade();
    }
});
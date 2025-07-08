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
document.body.appendChild(calculator);

calculator.style.textAlign = "center";
calculator.style.fontSize = "40px";
calculator.style.fontFamily= "Arial";
calculator.style.color ="#004D40";


let gradeInput = document.createElement("input");
    gradeInput.placeholder = "Enter your grade";
    gradeInput.style.textAlign = "center";
    gradeInput.style.position = "center";
    document.body.appendChild(gradeInput);

let gradeFinal = document.createElement("p");
    document.body.appendChild(gradeFinal);

let warningText = document.createElement("p");
    warningText.style.color = "red";
    warningText.style.marginTop = "10px";
    warningText.style.margin = "10px";
    document.body.appendChild(warningText);

let gradeBtnConverter = document.createElement("button");
    gradeBtnConverter.style.padding = "2px";
    gradeBtnConverter.textContent = "Calculate";
    document.body.appendChild(gradeBtnConverter);



function MarkToGrade (){

    gradeFinal.textContent = "";
    warningText.textContent = "";
    gradeFinal.style.color = "black";

try{

        let gradeValue = parseInt(gradeInput.value);

        if(gradeInput.value.trimEnd() === ""){
            warningText.textContent = "Please enter a grade!";
            return;
        }

        if(isNaN(gradeValue)){
            warningText.textContent = "Please enter a valid grade!";
            warningText.style.color= "#D404040";
            return;
        }
        
        if (gradeValue < 0 || gradeValue > 100) {
            warningText.textContent = "Grade cannot be less than 0 or more than 100";
            gradeFinal.style.color = "red";
            return;
        }
        
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
gradeBtnConverter.addEventListener("click", MarkToGrade);

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        MarkToGrade();
    }

});
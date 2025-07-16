
/*
* @Author: Leiziane Trevisan Dardin
* @StudentID: 459656
* @Date: optional
* @Description: I have been using ChatGpt only as a guide to clarify doubts and add new functionalities I have seen or don't remember. I also had learnt how to use querySelector using main.
OpenAI. (2025). ChatGPT (June 2025 version). https://chat.openai.com/
*/

//1. task = Create a personal profile page with any kind of style

//Picture appears after 10 secs

let picture= document.createElement("img");
    picture.src="./images/image.png";
    picture.style.width = "300px";


let main = document.querySelector("main");

setTimeout(() => {
    main.appendChild(picture);
    }, 10000);


//Paragraphs with text

let paragraph1= document.createElement("p");
    paragraph1.textContent = "Hello, my name is Leiziane but you can call me Lizzy!";


let paragraph2 = document.createElement("p");
    paragraph2.textContent = "I am originally from Brazil, but I have been living in Canada for almost 12 years now";


    main.appendChild(paragraph1);
    main.appendChild(paragraph2);







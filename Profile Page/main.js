//1. task = Create a personal profile page with any kind of style

//A header navigation bar(with links to the pages with the pages created in other tasks).

var navBar = document.createElement("nav");
var ul = document.createElement("ul");
    navBar.appendChild(ul);

    
    //using for each to generate my links
var linkText = ["Home", "Grade Converter", "Staff Page", "Temperature Converter"];
var linkHref = ["home.html", "grade.html", "staff.html", "temperature.html"];

    linkText.forEach(function(text, index) {
        var li = document.createElement("li");
        var anchor = document.createElement("a");
        
        anchor.textContent = text;
        anchor.href = linkHref[index];

        li.appendChild(anchor);
        ul.appendChild(li);
    });


    document.body.appendChild(navBar);



//Picture appears after 10 secs

var picture= document.createElement("img");
    picture.src="./images/image.png";
    picture.style.width = "300px";

setTimeout(function(){
    document.body.appendChild(picture);
    }, 10000);



//Paragraphs with text

var paragraph1= document.createElement("p");
    paragraph1.textContent = "Hello, my name is Leiziane but you cna call me Lizzy!";

    document.body.appendChild(paragraph1);

var paragraph2 = document.createElement("p");
    paragraph2.textContent = "I am originally from Brazil, but I have been living in Canada for almost 12 years now";

    document.body.appendChild(paragraph2);








// footer

//****Falta arrumar a data como current date */

var footer = document.createElement("footer");
var footerText = document.createElement("p");

footerText.textContent = "Copyright &copy; July 16th 2025 Leiziane Trevisan Dardin. All rights reserved.";

footer.appendChild(footerText);
document.body.appendChild(footer);
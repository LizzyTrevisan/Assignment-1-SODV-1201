// //Layout master for nav and footer

// let header = document.createElement("header");
// header.style.textAlign = "center";
// header.style.padding ="15px";
// header.style.borderBottom = "2px solid #004D40";
// header.style.marginBottom = "30px";
// header.style.fontFamily = "Arial";

// let nav = document.createElement("nav");

// let pagesName = [
//     {name: "Profile Page", link: "../Profile Page/index.html" },
//     {name: "Grade Calculator", link: "../Grade converter/index.html" },
//     {name: "Temperature Converter", link: "temperature.html" },
// ];
  
// pagesName.forEach(page => {
//     let anchor = document.createElement("a");
    
//     anchor.href = page.link;
//     anchor.textContent = page.name;
//     anchor.style.margin = "0 15px";
//     anchor.style.textDecoration = "none";
//     anchor.style.color = "004D40";
//     anchor.style.fontWeight = "bold";
//     anchor.style.fontSize = "18px";
//     anchor.onmouseover = () => anchor.style.color = "#00796B";
//     anchor.onmouseout = () => anchor.style.color ="#0040D40";
//     nav.appendChild(anchor);
// });

// header.appendChild(nav);
// document.body.prepend(nav);


// //FOOTER

// let footer = document.createElement("footer");
// footer.style.textAlign = "center";
// footer.style.padding = "15px";
// footer.style.marginTop = "50px";
// footer.style.fontSize = "14px";
// footer.style.color = "#666";
// footer.style.borderTop = "1px solid #ccc";
// footer.style.fontFamily = "Arial";

// let year = new Date().getFullYear();
// footer.innerHTML = `&copy; ${year} Leiziane Trevisan Dardin. All Rights Reserved.`;

// document.body.appendChild(footer);
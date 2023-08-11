const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]
/* Declaring the alternative text for each image file */
const altTexts = {
    'pic1.jpg' : "Close up of a human eye", 
    'pic2.jpg' : "Rock that looks like a wave", 
    'pic3.jpg' : "Purple and white pansies", 
    'pic4.jpg' : "Section of wall from a pharoah's tomb", 
    'pic5.jpg' : "Large moth on a leaf"
};
/* Looping through images */
for (const image in images) {   
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/${image}");
    newImage.setAttribute('alt', altTexts[image]);
    thumbBar.appendChild(newImage);
}

//Add event listener to thumbBar to change displayedImage src to selected image src
thumbBar.addEventListener
thumbBar.addEventListener("click", (e) => {
    displayedImage.setAttribute("src", e.target.src);
    displayedImage.setAttribute("alt", e.target.alt);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if(btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else { //btn class === light
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});

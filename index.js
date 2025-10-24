console.log ("hello world");

//select the main heading by its tag name 
const mainHeading = document.querySelector("h1");

const aboutSection = document.querySelector('#about');
console.log(mainHeading);
console.log(aboutSection);

const themeToggleButton = document.querySelector('#theme-toggle');
const bodyElement = document.querySelector('body');

/*themeToggleButton.addEventListener('click',function(){
    bodyElement.classList.toggle('dark-mode');
}); */

function handleThemeToggle(){
    bodyElement.classList.toggle('dark-mode');
}
themeToggleButton.addEventListener('click',handleThemeToggle);

   
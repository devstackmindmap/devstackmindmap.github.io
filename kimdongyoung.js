const button = document.querySelector('button');
let i = 1;

button.addEventListener('click', event => {
    i++;
    document.querySelector(".img img-fluid").setAttribute("src", "profile/profile"+ i +".png")
});
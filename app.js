function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = 'Copyright &copy; ' + y + ' Sabe Brasil';
}

copyrightYear();


function toggle() {
    const thanks = document.querySelector(".option-1");
    const rating = document.querySelector(".option-2");
    rating.classList.add("hidden");
    thanks.classList.remove("hidden");
}
function toggleD() {
    const thanks = document.querySelector(".option-2");
    const rating = document.querySelector(".option-1");
    rating.classList.add("hidden");
    thanks.classList.remove("hidden");
}
const button = document.querySelector("#btn-1");
button.addEventListener("click", () => {
    toggle();
});
const button2 = document.querySelector("#btn-2");
button2.addEventListener("click", () => {
    toggleD();
});
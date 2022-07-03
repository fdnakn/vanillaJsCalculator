const myinput = document.getElementById("myinput");
const hesapla = document.getElementById("hesapla");
const toplama = document.getElementById("toplama");
const nums = document.querySelectorAll(".sayilar button");

let birinciDeger = 0;


nums.forEach(num => {
    num.addEventListener('click', () => {
        myinput.value += num.textContent;
        birinciDeger = +myinput.value;
    })
})


toplama.addEventListener('click', () => {
    myinput.value = "";
    hesaplamaFunc();
})


function hesaplamaFunc() {
    hesapla.addEventListener('click', () => {
        myinput.value = birinciDeger*2;
    })
}

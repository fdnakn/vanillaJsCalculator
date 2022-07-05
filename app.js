const myinput = document.getElementById("myinput");
const hesapla = document.getElementById("hesapla");
const toplama = document.getElementById("toplama");
const nums = document.querySelectorAll(".sayilar button");

let sayi1 = "";


nums.forEach(num => {
    num.addEventListener("click", () => {
        myinput.value +=  +num.textContent;
        
    })
})

toplama.addEventListener("click",()=>{
    sayi1 = myinput.value;
    myinput.value="";
})

hesapla.addEventListener("click",()=>{
    myinput.value = +sayi1 + +myinput.value ;
    console.log(myinput)
})



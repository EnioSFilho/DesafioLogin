const btnSend = document.getElementById('btn1')
const btnReset = document.getElementById('btn2')
const btnform = document.getElementById('btn3')
const title = document.querySelector('#titulo')
const title1 = document.querySelector('#titulo1')
const entrada = document.getElementById('entrada1')
const entrada2 = document.getElementById('entrada2')


btnSend.onclick = () => {

    btnSend.classList.add("animate__animated", "animate__bounceOut");
    btnReset.classList.add("animate__animated", "animate__bounceOut");
    title.classList.add("animate__animated", "animate__backOutUp");
    title1.classList.add("animate__animated", "animate__backOutUp");
    btnform.classList.add("animate__animated", "animate__fadeInUp");
    
    btnform.style.display = "block"
      
}

btnReset.addEventListener('click', ()=>{

    entrada.value = "";
    entrada2.value = "";
})





let txtTitle = "Ecommerce desarrollado por Francisco Santibañez | "
    const time = 500;
    let refresh = null;
function title(){
    document.title = txtTitle
    txtTitle = txtTitle.substring(1, txtTitle.length) + txtTitle.charAt(0);
    refresh = setTimeout("title()", time);
}

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelectorAll('#header');

    window.onscroll = () => {
        if(window.pageYOffset  !== 0){
            navbar[0].classList.add('sticky');
        }else{
            navbar[0].classList.remove('sticky');
        }
    }

    const btnMenu = document.querySelectorAll('#menu__toggle');
    const menuBox = document.querySelectorAll('.menu')

    btnMenu[0].addEventListener('click', (evt) => {
        if(evt.target.checked){
            console.log(menuBox);
            menuBox[0].style.top = '100%';
        }else{
            menuBox[0].style.top = '-300%';
        }
    })

    title();
    
})
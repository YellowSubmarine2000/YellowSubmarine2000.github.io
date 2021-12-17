/*
function button() {
    var name = document.getElementById('name').value;
    var mail1 = document.getElementById('mail').value;
    var request = document.getElementById('request').value;

    alert("Имя: "+name+"\nE-mail: "+mail1+"\nСообщение: "+request);
}
*/

/* Не сказал бы, что это лучший код, который я писал, но он куда универсальнее чем твой, посмотри как он работает */

alert('ВНИМАНЕ: Все интерактивные элементы на данной странице не функциональны, так как это лишь пример верстки призванный показать мои способности в HTML и CSS')

const forms = document.querySelectorAll("form")

forms.forEach((form) => {
    let AllInputs = form.querySelectorAll("input[type='text'], input[type='email'], input[type='phone'], textarea"
    )
    AllInputs = Array.from(AllInputs)
    const submit = form.querySelector("input[type='submit']")
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const AllInputsValue = AllInputs.map((input) => input.value && input.attributes.name.value + ": " + input.value)
        const stringValue = AllInputsValue.join(" \n")
        console.log(stringValue.replace(/\s+/g, '') ? stringValue : "Инпуты пустые")
    }, false)
})

$(document).ready(function(){
    $('.microsoft_slider').slick({
        slidesToShow:2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        dotsClass: 'dots',
        responsive: [
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
  });
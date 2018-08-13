window.onload = function(){
    let number = document.getElementById('btn');
    console.log(number.innerHTML)
    word = Number.parseInt(number.innerHTML)
    number.innerHTML = word + 1 
}
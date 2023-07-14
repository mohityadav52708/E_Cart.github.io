let buybutton =(document.getElementById("buynow"));
buybutton.addEventListener("click", function (e) {
    console.log(newwindow());

});
function newwindow(){
    alert('Oops!! I think You have not login or sign-up yet. Please Login or Sign-Up first for buying anything')
     window.open('indexlogin.html');
}
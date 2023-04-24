var myCharacter = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var $ = document.querySelector.bind(document);

var my_color_string = "#";
$(".change_color").onclick = function () {
    my_color_string = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        my_color_string += myCharacter[index];
    }
    $(".my_content").style.backgroundColor = my_color_string;
    $(".my_status").textContent = "You have just clicked on MY CHANGING COLOR button"
    setTimeout(function() {
        $(".my_status").textContent = "";
    },600)
}
$(".restore_color").onclick = function() {
    $(".my_content").style.backgroundColor = "#000";
    $(".my_status").textContent = "You have just clicked on MY RESTORE COLOR button"
    setTimeout(function() {
        $(".my_status").textContent = "";
    },600)
}
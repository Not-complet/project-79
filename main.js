menu_list_array = ["Chicken Tandori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza", "Veggie Extravaganza Pizza"];
function getmenu(){
    var htmldata;
    htmldata = "<ol class='menulist'>";
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++){
       htmldata = htmldata+'<li>'+ menu_list_array[i] + '</li>';
    }
    htmldata=htmldata+'</ol>';
    document.getElementById("display_menu").innerHTML = htmldata;
    console.log(htmldata);
}
function add_item(){
    var htmldata_2;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata_2="<section class='cards'>";
    for (var i =0; i < menu_list_array.length; i++){
        htmldata_2 = htmldata_2 +"<div class='card'>" + "<img src='images/pizzaImg.png'/>" + menu_list_array[i] + "</div>";
    }
    htmldata_2 = htmldata_2 + "</section>";
    console.log(htmldata_2);
    console.log(menu_list_array);
    document.getElementById("display_addedmenu").innerHTML = htmldata_2;
}



function init(){
    //when we click on li's 
//$("li").click(function(){ changed after creating new li's and adding to ul
$("ul").on("click", "li" , function(){ //we can only add jquery to the elements that exist initially we add it to the 
    //instead of putting all this we can have a class
//    //if li is gray
////    console.log($(this).css("color")); //when we click li it gives rgb(0,0,0) and if we click the same li it gives rgb(128,128,128)
//    if($(this).css("color") === "rgb(128, 128, 128)"){ //if($(this).css("color") === "gray")we are comparing to gray but we need to compare it with rgb(128,128,128)
//    //turn it black
//        //so instead of printing a console
////        console.log("It is currently gray!");
//        $(this).css({
//            color:"black",
//            textDecoration:"none"
//        });       
//    }
//    //else turn it gray
//    else{
//$(this).css({
//    color:"gray",
//    textDecoration:"line-through" //text-decoration gives an error of unexpected token - hyphen so use camel case
//});
//    }
    $(this).toggleClass("completed");
});
//fading input text in/out
function listen(){
    $("#plus").click(function(){
        $("input[type='text']").fadeToggle();
    });
};

listen();
//click on x  to delete new todo
$("ul").on("click","span",function(event){
    //when we click on X we want to remove that particular li
//    $(this).remove();//with this only span is removed
//    $(this).parent().remove(); //this is span then parent is li now insead of removing it immediately we will fade it out
    $(this).parent().fadeOut(1000,function(){
      $(this).remove(); //this refers to li here .remove is used if we want that li shouldn't be shown in body elements as well
    });
    //this method prevents event bubbling
    event.stopPropagation();
});

//add new todos
$("input[type='text']").keypress(function(event){
//    console.log("key pressed");
    if(event.which === 13)  //which is char code
    {
//        console.log("you hit enter");
        //need to get the value of the input use val
       var todotext= $(this).val();  //this refers to the input that key pressed in
        $(this).val("");//clearing a input acts as a setter instead of getter
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todotext + "</li>"); //selecting the ul and then append adds the string to this ul
    }
    
}); 
//var icon = document.querySelector(".fa-plus");
//
//icon.addEventListener("click",function(){
//    alert("clicked on the plus");
//});




}

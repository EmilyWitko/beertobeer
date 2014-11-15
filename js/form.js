$(document).ready(function() {

    // ADD MALT
    $("#addMalt").click(function (e) {
        console.log(e);
        e.preventDefault();
        $("#maltButton").append('<p><input type="text" name="malt" placeholder="malt"> <input type="text" name="weight"                             placeholder="lbs/ounces"> <button class="delete">Delete</button></p>');
    });
    
    // ADD HOPS
    $("#addHops").click(function (e) {
        console.log(e);
        e.preventDefault();
        $("#hopsButton").append('<p><input type="text" name="Hops" placeholder="hops"> <input type="text"   name="weight"                         placeholder="lbs/ounces"> <button class="delete">Delete</button></p>');
    });
    
    // ADD YEAST
    $("#addYeast").click(function (e) {
        console.log(e);
        e.preventDefault();
        $("#yeastButton").append('<p><input type="text" name="yeast" placeholder="yeast"> <button class="delete">Delete</button></p>');
    });
    
    $("body").on("click", ".delete", function (e) {
        $(this).parent("p").remove();
    }); 

    $("body").on("click", ".delete", function (e) {
        $(this).parent("p").remove();
    });
});

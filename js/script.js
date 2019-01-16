
//*** UNIT 3 - INTERACTIVE FORM ***//


// set focus on the first text by default
$("#name").focus();


//// "job role" section ////
// hide text area
$("#other-title").hide();
// when other is selected, show the text area, otherwise keep it hidden
$("#title").on("click", function(e){
    if (e.target.value === "other"){
        $("#other-title").show();
    } else {
        $("#other-title").hide();
    }
});


//// "t-shirt" section ////
// variables for both drop down menus
const $colors = $("#colors-js-puns");
const $design = $("#design");
// hide color drop down menu
$colors.hide();
// when a certain design is selected, show appropiate colors
$($design).change(function(){   
    if ($design.val() === "js puns") {
        $colors.show();
        $("#color").val("cornflowerblue");
        $("#color option[value = 'cornflowerblue']").show();
        $("#color option[value = 'darkslategrey']").show();
        $("#color option[value = 'gold']").show();
        $("#color option[value = 'tomato']").hide();
        $("color option[value = 'steelblue']").hide();
        $("#color option[value = 'dimgrey']").hide();
    } 
    else if ($design.val() === "heart js"){
        $design.show();
        $("#color").val("tomato");
        $("#color option[value = 'cornflowerblue']").hide();
        $("#color option[value = 'darkslategrey']").hide();
        $("#color option[value = 'gold']").hide();
        $("#color option[value= 'tomato']").show();
        $("#color option[value = 'steelblue']").show();
        $("#color option[value = 'dimgrey']").show();
    }
    });


//// "register for activities" section ////
/* 1. Some events are at the same day and time as others. If the user selects a workshop, 
don't allow selection of a workshop at the same day and time -- you should disable the 
checkbox and visually indicate that the workshop in the competing time slot isn't available. 
 2. When a user unchecks an activity, make sure that competing activities (if there are any) 
are no longer disabled. 
 3. As a user selects activities, a running total should display below the list of checkboxes. 
For example, if the user selects "Main Conference", then Total: $200 should appear. 
If they add 1 workshop, the total should change to Total: $300. */

// variables to select activity checkboxes
const $jsFrameworks = $("input[name = 'js-frameworks']");
const $jsLibs = $("input [name = 'js-libs']");
const $express = $("input [name = 'express']");
const $node = $("input [name = 'node']");

// if js-frameworks is checked, stop express from being checked
$($jsFrameworks).change(function() {
    if ($(this).is(":checked")){
        $express.prop("disabled", true)
    } else {
        $express.prop("disabled", false)
    }
});
// if express is checked, stop js-frameworks from being checked
$($express).change(function() {
    if ($(this).is(":checked")) {
        $jsFrameworks.prop("disabled", true)
    } else {
        $jsFrameworks.prop("disabled", false)
    }
});
// if js-libs is checked, stop node from being checked
$($jsLibs).change(function() {
    if ($(this).is(":checked")) {
        $node.prop("disabled", true)
    } else {
        $node.prop("disabled", false)
    }
});
// if node is checked, stop js-libs from being checked
$($node).change(function() {
    if ($(this).is(":checked")) {
        $jsLibs.prop("disabled", true)
    } else {
        $jsLibs.prop("disabled", false)
    }
});

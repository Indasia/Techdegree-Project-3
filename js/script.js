
//*** UNIT 3 - INTERACTIVE FORM ***//


// set focus on the first text by default
$(document).ready(function(){
    $("#name").focus();
});

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
/*  As a user selects activities, a running total should display below the list of checkboxes. 
For example, if the user selects "Main Conference", then Total: $200 should appear. 
If they add 1 workshop, the total should change to Total: $300. */

// variables to select activity checkboxes
const $jsFrameworks = $("input[name = 'js-frameworks']");
const $jsLibs = $("input[name = 'js-libs']");
const $express = $("input[name = 'express']");
const $node = $("input[name = 'node']");

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

// running total for activity checkboxes
let total = 0;
$(".activities").append("<p>Total: </p>")


//// "payment info" section ////

// 1. Display payment sections based on the payment option chosen in the select menu.

const $payment = $("#payment");
const $cc = $("#payment option[value = 'credit card']")
const $paypal = $("#payment option[value = 'paypal']")
const $bitcoin = $("#payment option[value = 'bitcoin']")

/*
The "Credit Card" payment option should be selected by default. Display the #credit-card div, 
and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match 
the payment option displayed on the page.
*/

$("#payment").change(function(){   
    if ($payment.val() === "credit card") {
        $("#credit-card").show();
        $("p").hide();
    } else if ($payment.val() === "paypal") {
        $("p:first").show();
        $("p:last").hide();
        $("#credit-card").hide();
    } else if ($payment.val() === "bitcoin") {
        $("p:last").show();
        $("p:first").hide();

        $("#credit-card").hide();
    }
});

/*
 NOTE: The user should not be able to select the "Select Payment Method" option from the 
payment select menu, because the user should not be able to submit the form without a chosen payment option.
*/ 




//// form validation ////
// valid name
function isValidName(name) {
    return /^[a-z]+$/;
}
// valid email address
function isValidEmail(email) {
    /[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}
// user must select at least one checkbox

// valid payment method


//// form messages ////
//*** UNIT 3 - INTERACTIVE FORM ***//


// set focus on the first text by default
$(document).ready(function(){
    $("#name").focus();
});

//--------------------------- "job role" section ---------------------------//

// hide text area
$("#other-title").hide();
// when other is selected, show the text area, otherwise keep it hidden
$("#title").on("click", function(event){
    if (event.target.value === "other"){
        $("#other-title").show();
    } else {
        $("#other-title").hide();
    }
});

//--------------------------- "t-shirt" section ---------------------------//

// variables for both drop down menus
const $colors = $("#colors-js-puns");
const $design = $("#design");
const $selectTheme = $("#design option[value = 'select theme']");

// disable the select theme option
$selectTheme.prop("disabled", true).hide();

// hide color drop down menu
$colors.hide();
// when a certain design is selected, show appropriate colors
$($design).change(function(){   
    if ($design.val() === "js puns") {
        $colors.show();
        $("#color").val("cornflowerblue");
        $("#color option[value = 'cornflowerblue']").show();
        $("#color option[value = 'darkslategrey']").show();
        $("#color option[value = 'gold']").show();
        $("#color option[value = 'tomato']").hide();
        $("#color option[value = 'steelblue']").hide();
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

//--------------------------- "register for activities" section ---------------------------//

// variables to select activity checkboxes
const $jsFrameworks = $("input[name = 'js-frameworks']");
const $jsLibs = $("input[name = 'js-libs']");
const $express = $("input[name = 'express']");
const $node = $("input[name = 'node']");
const $activities = $(".activities");

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

// the starting price is $0 when an activity isn't selected
let price = 0;
// create a span to hold the total price, and append it to the activities section
const runningTotal = document.createElement("span");
$(".activities").append(runningTotal);

// when an activity is checked, add or subtract price from total
$($activities).on("change", function (event) {
// get the text content of the label which is the parent
    const checkbox = $(event.target).parent().text();
// get the last 3 characters and make them an integer and save it as "cost"
    let cost = parseInt(checkbox.substring(checkbox.length - 3));
// if the event target is checked...
    if ($(event.target).is(':checked')) {
// increase the price by the cost
        price += cost;
    } else {
// if it's unchecked decrease the price by the cost
        price -= cost;
    }
// update it on the page
    runningTotal.innerHTML = "Total: $" + price;
});

//--------------------------- "payment info" section ---------------------------//

// variable for payment div
const $payment = $("#payment");
const $selectMethod = $("#payment option[value = 'select_method']");

// disable select payment method and hide it
$selectMethod.prop("disabled", true).hide();

//hide <p> elements so that only the credit card section shows
$($("p").get(0)).hide();
$($("p").get(1)).hide();

// if a certain payment method is selected, hide the other two payment methods
$($payment).change(function(){ 
// if credit card is selected, show the credit card section and hide paypal and bitcoin
    if ($payment.val() === "credit card") {
        $("#credit-card").show();
        $($("p").get(0)).hide();
        $($("p").get(1)).hide();
// if paypal is selected, show the paypal section and hide credit card and bitcoin section
    } else if ($payment.val() === "paypal") {
        $($("p").get(0)).show();
        $($("p").get(1)).hide();
        $("#credit-card").hide();
// if bitcoin is selected, show the bitcoin section and hide paypal and credit card section
    } else if ($payment.val() === "bitcoin") {
        $($("p").get(1)).show();
        $($("p").get(0)).hide();
        $("#credit-card").hide();
    }
});

//--------------------------- form validation ---------------------------//

// worked with Lisa and Natia on this section
// a function that checks the form for errors before submitting
function validateForm() {
// variables for the name and emai input fields
    let nameValue = $('#name').val();
    let emailValue = $('#mail').val();
// if the characters that the user enters into the name field don't match the reg exp, show an error    
    if (isValidName(nameValue) == false) {
        $("#name").css("border-color", "red");
        setTimeout(function () { alert("Please enter your name!"); }, 1500);
    }
// if the characters that the user enters into the name field don't match the reg exp, show an error
    if (isValidEmail(emailValue) == false) {
        $("#mail").css("border-color", "red");
        setTimeout(function () { alert("Please enter a valid email address!"); }, 1500);
    }
// if the activity price is 0 when the user tries to click sumbit, show an error
    if (price === 0) {
        setTimeout(function () { alert("You must select an activity!"); }, 1500);
    }
// variables for the credit card section
    let cardNumber = $("#cc-num").val();
    let zip = $("#zip").val();
    let cvv = $("#cvv").val();
/* if the user is paying with a credit card, show error if card number 
reg exp, zip reg exp, and cvv reg exp dont match */
    if ($payment.val() === "credit card") {
        if (isValidCardNumber(cardNumber) == false) {
            $("#cc-num").css("border-color", "red");
            setTimeout(function () { alert("Please enter a valid credit card number that is between 13-16 digits!"); }, 1500);
        }
        if (isValidZipcode(zip) == false) {
            $("#zip").css("border-color", "red");
            setTimeout(function () { alert("Please enter your 5-digit ZIPCODE!"); }, 1500);
        }
        if (isValidCVV(cvv) == false) {
            $("#zip").css("border-color", "red");
            setTimeout(function () { alert("Please enter the 3-digit number on the back of your card!"); }, 1500);
        }
    };
};
// name reg exp
function isValidName(nameValue) {
    return /^[a-zA-Z][a-zA-Z\s]+$/i.test(nameValue);
};
// this email regex is taken from https://emailregex.com/
function isValidEmail(emailValue) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
};
// credit card reg exp
function isValidCardNumber(cardNumber) {
    return /^\d{13,16}D*$/.test(cardNumber);
}
// zipcode reg exp
function isValidZipcode(zipcode) {
    return /^\d{5}$/.test(zipcode);
}
// cvv reg exp
function isValidCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}
// if there are errors in the validation form, prevent the form from submitting
$('button').on('click', function (e) {
    e.preventDefault();
    validateForm();
});
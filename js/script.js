
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
$selectTheme.prop("disabled", true);

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

// the starting price is $0
let $price = 0;
// when an activity is checked, add or subtract price
$($activities).on("change", function () {
    if ($("input[name = 'all']").prop("checked")) {
        $price += 200;
    } else {
        $price -= 200;
    }
    if ($("input[name = 'js-frameworks']").prop("checked")) {
        $price += 100;
    } else {
        $price -= 100;
    }
    if ($("input[name = 'js-libs']").prop("checked")) {
        $price += 100;
    } else {
        $price -= 100;
    }
    if ($("input[name = 'express']").prop("checked")) {
        $price += 100;
    } else {
        $price -= 100;
    }
    if ($("input[name = 'node']").prop("checked")) {
        $price += 100;
    } else {
        $price -= 100;
    }
    if ($("input[name = 'build-tools']").prop("checked")) {
        $price += 100;
    } else {
        $price -= 100;
    }
    if ($("input[name = 'npm']").prop("checked")) {
        $price += 100;
    } else {
        $price -= 100;
    }

    let $runningTotalDiv = $(`<div>Total: ${$price} </div>`);
    $activities.append($runningTotalDiv);
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
$("#payment").change(function(){ 
    if ($payment.val() === "credit card") {
        $("#credit-card").show();
        $($("p").get(0)).hide();
        $($("p").get(1)).hide();
    } else if ($payment.val() === "paypal") {
        $($("p").get(0)).show();
        $($("p").get(1)).hide();
        $("#credit-card").hide();
    } else if ($payment.val() === "bitcoin") {
        $($("p").get(1)).show();
        $($("p").get(0)).hide();
        $("#credit-card").hide();
    }
});
\

//--------------------------- form validation ---------------------------//

var form = document.getElementsByTagName('form')[0];
var error = document.querySelector('.error');
const button = document.getElementsByTagName("button");

// validate the name input
// name input cannot blank
// validate the email input


// validate the credit card number input
const ccValidation = function(event) {
    const valid = true;
    $('#cc-num').on('keyup', function () {
        const ccRegex = /^[0-9]{13,16}$/;
        const ccNumVal = $('#cc-num').val();
        if (!$(this).val().match(ccRegex)) {
            if ($('#isCreditCardValid').length === 0) {
                $('#cc-num').after('<p class="validateCreditCard" id="isCreditCardValid">Please enter a valid credit card number between 13-16 digits.</p>');
                valid = false;
                event.preventDefault();
            }
        } else {
            $('#isCreditCardValid').remove()
            valid = true;
        }
        return valid;
    });

}
ccValidation();

//validate the ZIP code input
const zipValidation = function (event) {
    const valid = true;
    $('#zip').on('keyup', function () {
        const zipRegex = /^[0-9]{5}$/;
        const ccNumVal = $('#zip').val();
        if (!$(this).val().match(zipRegex)) {
            if ($('#isZipCodeValid').length === 0) {
                $('#zip').after('<p class="validateZipCode" id="isZipCodeValid">Please enter a valid 5-digit ZIP code.</p>');
                valid = false;
                event.preventDefault();
            }
        } else {
            $('#isZipCodeValid').remove()
            valid = true;
        }
        return valid;
    });

}
zipValidation();

// validate the CVV input
const cvvValidation = function (event) {
    const valid = true;
    $('#cvv').on('keyup', function () {
        const cvvRegex = /^[0-9]{3}$/;
        const ccNumVal = $('#cvv').val();
        if (!$(this).val().match(cvvRegex)) {
            if ($('#isCvvValid').length === 0) {
                $('#cvv').after('<p class="validateCvv" id="isCvvValid">Please enter a valid 3-digit CVV.</p>');
                valid = false;
                event.preventDefault();
            }
        } else {
            $('#isCvvValid').remove()
            valid = true;
        }
        return valid;
    });

}
cvvValidation();
const txtMony = document.getElementById("monyZ");
if (txtMony.validity.typeMismatch) {
    console.log('Input is not valid type');
}

var chk = (oe) => {
    console.log("helo2")
    console.log(oe.target)
    // var valx = oe.target;
    var valx = txtMony;
    console.log("object=" + valx);
    if (valx.validty.valueMissing) {
        console.log("ادخل قيمة");
        valx.setCustomValidity("ادخل قيمة المصروف")

    } else if (isNaN(valx.value)) {
        console.log("ليست رقم");
        valx.setCustomValidity("لابد من إدخال ارقام");
    } else if (Number(valx.vlaue) < 1) {
        console.log("اقل من 0");

        valx.setCustomValidity("ادخل قيمة اكبر من 0");

    } else {
        valx.setCustomValidity("");
        return true;
    }



};


// txtMony.addEventListener("invalid", chk(txtMony));
// txtMony.addEventListener("input", chk(txtMony));


// /**
//  * @author ComFreek
//  * @license MIT (c) 2013-2015 ComFreek <http://stackoverflow.com/users/603003/comfreek>
//  * Please retain this author and license notice!
//  */
// (function (exports) {
//     function valOrFunction(val, ctx, args) {
//         if (typeof val == "function") {
//             return val.apply(ctx, args);
//         } else {
//             return val;
//         }

//     }

//     function InvalidInputHelper(input, options) {
//         input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));

//         function changeOrInput() {
//             if (input.value == "") {
//                 input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
//             } else if (isNaN(input.value)) {
//                 input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
//             }
//             else if (Number(input.value)<1) {
//                 input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
//             }
//             else
//                 {
//                     input.setCustomValidity("");
//             }
//         }

//         function invalid() {
//             if (input.value == "") {
//                 input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
//             } else {
//                 input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
//             }
//         }

//         input.addEventListener("change", changeOrInput);
//         input.addEventListener("input", changeOrInput);
//         input.addEventListener("invalid", invalid);
//     }
//     exports.InvalidInputHelper = InvalidInputHelper;
// })(window);



// InvalidInputHelper(document.getElementById("monyZ"), {
//     defaultText: "أدخل قيمة المصروف",
//     emptyText: "أدخل قيمة المصروف",
//     invalidText: function (input) {
//         return 'The email address "' + input.value + '" is invalid!';
//     }
// });
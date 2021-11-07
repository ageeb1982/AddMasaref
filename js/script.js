const txtMony = document.getElementById("monyZ");
if (txtMony.validity.typeMismatch) {
    console.log("Input is not valid type");
}

var chk = (oe) => {
    console.log("helo2");
    console.log(oe.target);
    // var valx = oe.target;
    var valx = txtMony;
    console.log("object=" + valx);
    if (valx.validty.valueMissing) {
        console.log("ادخل قيمة");
        valx.setCustomValidity("ادخل قيمة المصروف");
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

function clearSelected() {
    var txtCustNo = document
        .getElementById("txtCustNo")
        .querySelectorAll("option");

    txtCustNo.forEach((bb) => {
        bb.removeAttribute("selected");
    });
}

let txtSrchX = document.getElementById("MassSrch");

var cmdSrchX = document.getElementById("cmdSrch");

let LoadInitData = () => {
    var txtCustNo = document.getElementById("txtCustNo");
    let url = "/Custs/GetMassAccount";
    url = "data.json";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        let vx = "";
        const datajson = this.responseText;

        let data = JSON.parse(datajson);
        let i = 0;
        data.forEach((item) => {
            if (i < 5) {
                i++;
                let rr = '<option  value="' + item.Id + '" >' + item.Name + "</option>";
                vx += rr;
            }
        });

        var cust_no = document.getElementById("txtCustNo");

        cust_no.innerHTML += vx;
    };
    xhttp.open("GET", url);
    xhttp.send();
};

LoadInitData();

let srch = () => {
    var txtCustNo = document
        .getElementById("txtCustNo")
        .querySelectorAll("option");
    var OldValue = document.getElementById("txtCustNo").value;
    let v2 = document.getElementById("MassSrch").value;
    let IsSelect = false;
    //console.log(v2)
    //var url = '@Url.Action("GetCust", "Custs")';
    let url = "/Custs/GetCust";
    url = "data.json";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        let vx = "";
        const datajson = this.responseText;

        let data = JSON.parse(datajson);
        if (v2) {
            data.forEach((item) => {
                //   console.log(v2)
                var ee = item.Name.includes(v2);
                // console.log(`name => ${item.Name}`)
                if (item.Name.includes(v2)) {
                    var IsExiest = false;
                    //   console.log(txtCustNo);
                    txtCustNo.forEach((II) => {
                        //   console.log(II.value);
                        if (II.value == item.Id) {
                            IsExiest = true;
                        }
                    });

                    if (IsExiest == false) {
                        let SelX = "";
                        if (!IsSelect) {
                            clearSelected();
                            SelX = "selected";
                            IsSelect = true;
                        }
                        let rr =
                            "<option " +
                            SelX +
                            ' value="' +
                            item.Id +
                            '" >' +
                            item.Name +
                            "</option>";
                        vx += rr;
                    }
                }
                //   console.log("rr=>" + vx);
            });
        }
        var cust_no = document.getElementById("txtCustNo");

        cust_no.innerHTML += vx;
    };
    xhttp.open("GET", url);
    xhttp.send();
};

cmdSrchX.addEventListener("click", srch);

txtSrchX.addEventListener("keypress", (oe) => {
    if (oe.key == "Enter") {
        oe.preventDefault();
        srch();
    }

    //   srch();
});

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
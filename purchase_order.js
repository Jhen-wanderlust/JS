
//Shift + Alt + F.“vs code fix spacing”






PO = {

    trans_date: '07/02/2019',
    warehouse: 'warehouse1',
    Suplier: 'ABC Marketing',
    terms: 'CASH',
    items: ['ITM500', 'ITM501'],
    quantity: ['50', '50'],
    price: ['20', '20'],
    vat_setup: ['PUR VAT', 'PUR VAT'],
    UM: ['BTL', 'BTL'],
    discounts: [null, null],
    disc_amount: null
};

console.log(PO);






setTimeout(() => {

    document.querySelector("#txt_info_trndte").value = PO.trans_date;
}, 4000)

setTimeout(() => {

    var textToFind = PO.warehouse;

    var dd = document.getElementById("txt_info_warcde");
    for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
        }
    }

}, 4000)



setTimeout(() => {
    $(".searchable_modaltxtfilterer").val(PO.Suplier).change();

}, 4000)


//click search and select and lastly the next button
// the system will redirect to item entry then the page will load.

// for I/C




PO = {

    trans_date: '07/02/2019',
    warehouse: 'warehouse1',
    Suplier: 'ABC Marketing',
    terms: 'CASH',
    items: ['ITM500', 'ITM501'],
    quantity: ['50', '50'],
    price: ['20', '20'],
    vat_setup: ['PUR VAT', 'PUR VAT'],
    UM: ['BTL', 'BTL'],
    discounts: [null, null],
    disc_amount: null
};

console.log(PO);
console.log(PO.items.length);
var it = PO.items.length;


// for I/C
var x = document.querySelectorAll(".input.cla_chkic");


for (var i = 0; i < it ; i++) {

  x[i].value = "I";
  

};






//terms
var textToFind = PO.terms;

                      var dd = document.querySelectorAll("#txttrmcde")[0];
                      for (var i = 0; i < dd.options.length; i++) {
                          if (dd.options[i].text === textToFind) {
                              dd.selectedIndex = i;
                              break;
                          }
                        }




setTimeout(() => {
    $("#itmdsc1").val(PO.items[0]).change();
    $("#itmdsc2").val(PO.items[1]).change();
    $("#itmdsc3").val(PO.items[2]).change();
    $("#itmdsc4").val(PO.items[3]).change();
    $("#itmdsc5").val(PO.items[4]).change();
    $("#itmdsc6").val(PO.items[5]).change();
    $("#itmdsc7").val(PO.items[6]).change();
    $("#itmdsc8").val(PO.items[7]).change();
    $("#itmdsc9").val(PO.items[8]).change();
    $("#itmdsc10").val(PO.items[9]).change();
    $("#itmdsc11").val(PO.items[10]).change();
    $("#itmdsc12").val(PO.items[11]).change();
    $("#itmdsc13").val(PO.items[12]).change();
    $("#itmdsc14").val(PO.items[13]).change();
    $("#itmdsc15").val(PO.items[14]).change();
    $("#itmdsc16").val(PO.items[15]).change();
    $("#itmdsc17").val(PO.items[16]).change();
    $("#itmdsc18").val(PO.items[17]).change();
    $("#itmdsc19").val(PO.items[18]).change();
    $("#itmdsc20").val(PO.items[19]).change();


}, 2000)


setTimeout(() => {

    var em = document.querySelector("#itmdsc1").value;
    if (em === '') {

        setTimeout(() => {
            $("#ui-id-4").click();
        }, 2000)


        setTimeout(() => {
            $("#ui-id-3").click();
        }, 4000)

    } else {

        false;
    }



}, 2000)


//click the autocomplete
setTimeout(() => {
    document.querySelectorAll(".ui-menu-item")[2].click();


}, 2000)


setTimeout(() => {
    $("#txtqty1").val(PO.quantity[0]).change();
    $("#txtqty2").val(PO.quantity[1]).change();
    $("#txtqty3").val(PO.quantity[2]).change();
    $("#txtqty4").val(PO.quantity[3]).change();
    $("#txtqty5").val(PO.quantity[4]).change();
    $("#txtqty6").val(PO.quantity[5]).change();
    $("#txtqty7").val(PO.quantity[6]).change();
    $("#txtqty8").val(PO.quantity[7]).change();
    $("#txtqty9").val(PO.quantity[8]).change();
    $("#txtqty10").val(PO.quantity[9]).change();
    $("#txtqty11").val(PO.quantity[10]).change();
    $("#txtqty12").val(PO.quantity[11]).change();
    $("#txtqty13").val(PO.quantity[12]).change();
    $("#txtqty14").val(PO.quantity[13]).change();
    $("#txtqty15").val(PO.quantity[14]).change();
    $("#txtqty16").val(PO.quantity[15]).change();
    $("#txtqty17").val(PO.quantity[16]).change();
    $("#txtqty18").val(PO.quantity[17]).change();
    $("#txtqty19").val(PO.quantity[18]).change();
    $("#txtqty20").val(PO.quantity[19]).change();



}, 2000)

// scroll left
document.querySelector('.vScrollTable').scrollLeft = 300;

setTimeout(() => {


    $("#txtgroprc1").val(PO.price[0]).change();
    $("#txtgroprc2").val(PO.price[1]).change();
    $("#txtgroprc3").val(PO.price[2]).change();
    $("#txtgroprc4").val(PO.price[3]).change();
    $("#txtgroprc5").val(PO.price[4]).change();
    $("#txtgroprc6").val(PO.price[5]).change();
    $("#txtgroprc7").val(PO.price[6]).change();
    $("#txtgroprc8").val(PO.price[7]).change();
    $("#txtgroprc9").val(PO.price[8]).change();
    $("#txtgroprc10").val(PO.price[9]).change();
    $("#txtgroprc11").val(PO.price[10]).change();
    $("#txtgroprc12").val(PO.price[11]).change();
    $("#txtgroprc13").val(PO.price[12]).change();
    $("#txtgroprc14").val(PO.price[13]).change();
    $("#txtgroprc15").val(PO.price[14]).change();
    $("#txtgroprc16").val(PO.price[15]).change();
    $("#txtgroprc17").val(PO.price[16]).change();
    $("#txtgroprc18").val(PO.price[17]).change();
    $("#txtgroprc19").val(PO.price[18]).change();
    $("#txtgroprc20").val(PO.price[19]).change();

}, 2000)



setTimeout(() => {
    var textToFind = PO.UM[0];

    var dd = document.getElementById("untmea1");
    for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
        }
    }

    setTimeout(() => {
        var textToFind = PO.UM[1];

        var dd = document.getElementById("untmea2");
        for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === textToFind) {
                dd.selectedIndex = i;
                break;
            }
        }

        setTimeout(() => {
            var textToFind = PO.UM[2];

            var dd = document.getElementById("untmea3");
            for (var i = 0; i < dd.options.length; i++) {
                if (dd.options[i].text === textToFind) {
                    dd.selectedIndex = i;
                    break;
                }
            }

            setTimeout(() => {
                var textToFind = PO.UM[3];

                var dd = document.getElementById("untmea4");
                for (var i = 0; i < dd.options.length; i++) {
                    if (dd.options[i].text === textToFind) {
                        dd.selectedIndex = i;
                        break;
                    }
                }
                setTimeout(() => {
                    var textToFind = PO.UM[4];

                    var dd = document.getElementById("untmea5");
                    for (var i = 0; i < dd.options.length; i++) {
                        if (dd.options[i].text === textToFind) {
                            dd.selectedIndex = i;
                            break;
                        }
                    }


                    setTimeout(() => {
                        var textToFind = PO.UM[5];

                        var dd = document.getElementById("untmea6");
                        for (var i = 0; i < dd.options.length; i++) {
                            if (dd.options[i].text === textToFind) {
                                dd.selectedIndex = i;
                                break;
                            }
                        }

                        setTimeout(() => {
                            var textToFind = PO.UM[6];

                            var dd = document.getElementById("untmea7");
                            for (var i = 0; i < dd.options.length; i++) {
                                if (dd.options[i].text === textToFind) {
                                    dd.selectedIndex = i;
                                    break;
                                }
                            }

                            setTimeout(() => {
                                var textToFind = PO.UM[7];

                                var dd = document.getElementById("untmea8");
                                for (var i = 0; i < dd.options.length; i++) {
                                    if (dd.options[i].text === textToFind) {
                                        dd.selectedIndex = i;
                                        break;
                                    }
                                }
                                setTimeout(() => {
                                    var textToFind = PO.UM[8];

                                    var dd = document.getElementById("untmea9");
                                    for (var i = 0; i < dd.options.length; i++) {
                                        if (dd.options[i].text === textToFind) {
                                            dd.selectedIndex = i;
                                            break;
                                        }
                                    }
                                    setTimeout(() => {
                                        var textToFind = PO.UM[9];

                                        var dd = document.getElementById("untmea10");
                                        for (var i = 0; i < dd.options.length; i++) {
                                            if (dd.options[i].text === textToFind) {
                                                dd.selectedIndex = i;
                                                break;
                                            }
                                        }
                                    }, 2000)
                                }, 2000)
                            }, 2000)
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)




setTimeout(() => {
    $("#txtvatcde1").val(PO.vat_setup[0]).change();
    $("#txtvatcde2").val(PO.vat_setup[1]).change();
    $("#txtvatcde3").val(PO.vat_setup[2]).change();
    $("#txtvatcde4").val(PO.vat_setup[3]).change();
    $("#txtvatcde5").val(PO.vat_setup[4]).change();
    $("#txtvatcde6").val(PO.vat_setup[5]).change();
    $("#txtvatcde7").val(PO.vat_setup[6]).change();
    $("#txtvatcde8").val(PO.vat_setup[7]).change();
    $("#txtvatcde9").val(PO.vat_setup[8]).change();
    $("#txtvatcde10").val(PO.vat_setup[9]).change();
    $("#txtvatcde11").val(PO.vat_setup[10]).change();
    $("#txtvatcde12").val(PO.vat_setup[11]).change();
    $("#txtvatcde13").val(PO.vat_setup[12]).change();
    $("#txtvatcde14").val(PO.vat_setup[13]).change();
    $("#txtvatcde15").val(PO.vat_setup[14]).change();
    $("#txtvatcde16").val(PO.vat_setup[15]).change();
    $("#txtvatcde17").val(PO.vat_setup[16]).change();
    $("#txtvatcde18").val(PO.vat_setup[17]).change();
    $("#txtvatcde19").val(PO.vat_setup[18]).change();
    $("#txtvatcde20").val(PO.vat_setup[19]).change();


}, 2000)




// for discount entry txtdisper1
setTimeout(() => {
    $("#txtdisper1").val(PO.discounts[0]).change();
    $("#txtdisper2").val(PO.discounts[0]).change();
    $("#txtdisper3").val(PO.discounts[2]).change();
    $("#txtdisper4").val(PO.discounts[3]).change();
    $("#txtdisper5").val(PO.discounts[4]).change();
    $("#txtdisper6").val(PO.discounts[5]).change();
    $("#txtdisper7").val(PO.discounts[6]).change();
    $("#txtdisper8").val(PO.discounts[7]).change();
    $("#txtdisper9").val(PO.discounts[8]).change();
    $("#txtdisper10").val(PO.discounts[9]).change();
    $("#txtdisper11").val(PO.discounts[10]).change();
    $("#txtdisper12").val(PO.discounts[11]).change();
    $("#txtdisper13").val(PO.discounts[12]).change();
    $("#txtdisper14").val(PO.discounts[13]).change();
    $("#txtdisper15").val(PO.discounts[14]).change();
    $("#txtdisper16").val(PO.discounts[15]).change();
    $("#txtdisper17").val(PO.discounts[16]).change();
    $("#txtdisper18").val(PO.discounts[17]).change();
    $("#txtdisper19").val(PO.discounts[18]).change();
    $("#txtdisper20").val(PO.discounts[19]).change();


}, 2000)



//txtdisamt1
setTimeout(() => {
    $("#txtdisamt1").val(PO.disc_amount[0]).change();
    $("#txtdisamt2").val(PO.disc_amount[0]).change();
    $("#txtdisamt3").val(PO.disc_amount[2]).change();
    $("#txtdisamt4").val(PO.disc_amount[3]).change();
    $("#txtdisamt5").val(PO.disc_amount[4]).change();
    $("#txtdisamt6").val(PO.disc_amount[5]).change();
    $("#txtdisamt7").val(PO.disc_amount[6]).change();
    $("#txtdisamt8").val(PO.disc_amount[7]).change();
    $("#txtdisamt9").val(PO.disc_amount[8]).change();
    $("#txtdisamt10").val(PO.disc_amount[9]).change();
    $("#txtdisamt11").val(PO.disc_amount[10]).change();
    $("#txtdisamt12").val(PO.disc_amount[11]).change();
    $("#txtdisamt13").val(PO.disc_amount[12]).change();
    $("#txtdisamt14").val(PO.disc_amount[13]).change();
    $("#txtdisamt15").val(PO.disc_amount[14]).change();
    $("#txtdisamt16").val(PO.disc_amount[15]).change();
    $("#txtdisamt17").val(PO.disc_amount[16]).change();
    $("#txtdisamt18").val(PO.disc_amount[17]).change();
    $("#txtdisamt19").val(PO.disc_amount[18]).change();
    $("#txtdisamt20").val(PO.disc_amount[19]).change();


}, 2000)







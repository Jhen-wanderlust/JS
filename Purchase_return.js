

setTimeout(() => {

    document.querySelector("#txttrndte").value = PURCH_RETURN.trans_date;
}, 4000)

setTimeout(() => {

    var textToFind = PURCH_RETURN.warehouse;

    var dd = document.getElementById("txtwarcde");
    for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
        }
    }

}, 4000)



setTimeout(() => {
    $(".searchable_modaltxtfilterer").val(PURCH_RETURN.Suplier).change();

}, 4000)


//click search and select and lastly the next button
// the system will redirect to item entry then the page will load.

// for I/C






// for I/C
var x = document.querySelectorAll(".input.cla_chkic");


for (var i = 0; i < it ; i++) {

  x[i].value = "I";
  

};






//terms
var textToFind = PURCH_RETURN.terms;

                      var dd = document.querySelectorAll("#txttrmcde")[0];
                      for (var i = 0; i < dd.options.length; i++) {
                          if (dd.options[i].text === textToFind) {
                              dd.selectedIndex = i;
                              break;
                          }
                        }




setTimeout(() => {
    $("#itmdsc1").val(PURCH_RETURN.items[0]).change();
    $("#itmdsc2").val(PURCH_RETURN.items[1]).change();
    $("#itmdsc3").val(PURCH_RETURN.items[2]).change();
    $("#itmdsc4").val(PURCH_RETURN.items[3]).change();
    $("#itmdsc5").val(PURCH_RETURN.items[4]).change();
    $("#itmdsc6").val(PURCH_RETURN.items[5]).change();
    $("#itmdsc7").val(PURCH_RETURN.items[6]).change();
    $("#itmdsc8").val(PURCH_RETURN.items[7]).change();
    $("#itmdsc9").val(PURCH_RETURN.items[8]).change();
    $("#itmdsc10").val(PURCH_RETURN.items[9]).change();
    $("#itmdsc11").val(PURCH_RETURN.items[10]).change();
    $("#itmdsc12").val(PURCH_RETURN.items[11]).change();
    $("#itmdsc13").val(PURCH_RETURN.items[12]).change();
    $("#itmdsc14").val(PURCH_RETURN.items[13]).change();
    $("#itmdsc15").val(PURCH_RETURN.items[14]).change();
    $("#itmdsc16").val(PURCH_RETURN.items[15]).change();
    $("#itmdsc17").val(PURCH_RETURN.items[16]).change();
    $("#itmdsc18").val(PURCH_RETURN.items[17]).change();
    $("#itmdsc19").val(PURCH_RETURN.items[18]).change();
    $("#itmdsc20").val(PURCH_RETURN.items[19]).change();


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
    $("#txtqty1").val(PURCH_RETURN.quantity[0]).change();
    $("#txtqty2").val(PURCH_RETURN.quantity[1]).change();
    $("#txtqty3").val(PURCH_RETURN.quantity[2]).change();
    $("#txtqty4").val(PURCH_RETURN.quantity[3]).change();
    $("#txtqty5").val(PURCH_RETURN.quantity[4]).change();
    $("#txtqty6").val(PURCH_RETURN.quantity[5]).change();
    $("#txtqty7").val(PURCH_RETURN.quantity[6]).change();
    $("#txtqty8").val(PURCH_RETURN.quantity[7]).change();
    $("#txtqty9").val(PURCH_RETURN.quantity[8]).change();
    $("#txtqty10").val(PURCH_RETURN.quantity[9]).change();
    $("#txtqty11").val(PURCH_RETURN.quantity[10]).change();
    $("#txtqty12").val(PURCH_RETURN.quantity[11]).change();
    $("#txtqty13").val(PURCH_RETURN.quantity[12]).change();
    $("#txtqty14").val(PURCH_RETURN.quantity[13]).change();
    $("#txtqty15").val(PURCH_RETURN.quantity[14]).change();
    $("#txtqty16").val(PURCH_RETURN.quantity[15]).change();
    $("#txtqty17").val(PURCH_RETURN.quantity[16]).change();
    $("#txtqty18").val(PURCH_RETURN.quantity[17]).change();
    $("#txtqty19").val(PURCH_RETURN.quantity[18]).change();
    $("#txtqty20").val(PURCH_RETURN.quantity[19]).change();



}, 2000)

// scroll left
document.querySelector('.vScrollTable').scrollLeft = 300;

setTimeout(() => {


    $("#txtgroprc1").val(PURCH_RETURN.price[0]).change();
    $("#txtgroprc2").val(PURCH_RETURN.price[1]).change();
    $("#txtgroprc3").val(PURCH_RETURN.price[2]).change();
    $("#txtgroprc4").val(PURCH_RETURN.price[3]).change();
    $("#txtgroprc5").val(PURCH_RETURN.price[4]).change();
    $("#txtgroprc6").val(PURCH_RETURN.price[5]).change();
    $("#txtgroprc7").val(PURCH_RETURN.price[6]).change();
    $("#txtgroprc8").val(PURCH_RETURN.price[7]).change();
    $("#txtgroprc9").val(PURCH_RETURN.price[8]).change();
    $("#txtgroprc10").val(PURCH_RETURN.price[9]).change();
    $("#txtgroprc11").val(PURCH_RETURN.price[10]).change();
    $("#txtgroprc12").val(PURCH_RETURN.price[11]).change();
    $("#txtgroprc13").val(PURCH_RETURN.price[12]).change();
    $("#txtgroprc14").val(PURCH_RETURN.price[13]).change();
    $("#txtgroprc15").val(PURCH_RETURN.price[14]).change();
    $("#txtgroprc16").val(PURCH_RETURN.price[15]).change();
    $("#txtgroprc17").val(PURCH_RETURN.price[16]).change();
    $("#txtgroprc18").val(PURCH_RETURN.price[17]).change();
    $("#txtgroprc19").val(PURCH_RETURN.price[18]).change();
    $("#txtgroprc20").val(PURCH_RETURN.price[19]).change();

}, 2000)



setTimeout(() => {
    var textToFind = PURCH_RETURN.UM[0];

    var dd = document.getElementById("untmea1");
    for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
        }
    }

    setTimeout(() => {
        var textToFind = PURCH_RETURN.UM[1];

        var dd = document.getElementById("untmea2");
        for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === textToFind) {
                dd.selectedIndex = i;
                break;
            }
        }

        setTimeout(() => {
            var textToFind = PURCH_RETURN.UM[2];

            var dd = document.getElementById("untmea3");
            for (var i = 0; i < dd.options.length; i++) {
                if (dd.options[i].text === textToFind) {
                    dd.selectedIndex = i;
                    break;
                }
            }

            setTimeout(() => {
                var textToFind = PURCH_RETURN.UM[3];

                var dd = document.getElementById("untmea4");
                for (var i = 0; i < dd.options.length; i++) {
                    if (dd.options[i].text === textToFind) {
                        dd.selectedIndex = i;
                        break;
                    }
                }
                setTimeout(() => {
                    var textToFind = PURCH_RETURN.UM[4];

                    var dd = document.getElementById("untmea5");
                    for (var i = 0; i < dd.options.length; i++) {
                        if (dd.options[i].text === textToFind) {
                            dd.selectedIndex = i;
                            break;
                        }
                    }


                    setTimeout(() => {
                        var textToFind = PURCH_RETURN.UM[5];

                        var dd = document.getElementById("untmea6");
                        for (var i = 0; i < dd.options.length; i++) {
                            if (dd.options[i].text === textToFind) {
                                dd.selectedIndex = i;
                                break;
                            }
                        }

                        setTimeout(() => {
                            var textToFind = PURCH_RETURN.UM[6];

                            var dd = document.getElementById("untmea7");
                            for (var i = 0; i < dd.options.length; i++) {
                                if (dd.options[i].text === textToFind) {
                                    dd.selectedIndex = i;
                                    break;
                                }
                            }

                            setTimeout(() => {
                                var textToFind = PURCH_RETURN.UM[7];

                                var dd = document.getElementById("untmea8");
                                for (var i = 0; i < dd.options.length; i++) {
                                    if (dd.options[i].text === textToFind) {
                                        dd.selectedIndex = i;
                                        break;
                                    }
                                }
                                setTimeout(() => {
                                    var textToFind = PURCH_RETURN.UM[8];

                                    var dd = document.getElementById("untmea9");
                                    for (var i = 0; i < dd.options.length; i++) {
                                        if (dd.options[i].text === textToFind) {
                                            dd.selectedIndex = i;
                                            break;
                                        }
                                    }
                                    setTimeout(() => {
                                        var textToFind = PURCH_RETURN.UM[9];

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
    $("#txtvatcde1").val(PURCH_RETURN.vat_setup[0]).change();
    $("#txtvatcde2").val(PURCH_RETURN.vat_setup[1]).change();
    $("#txtvatcde3").val(PURCH_RETURN.vat_setup[2]).change();
    $("#txtvatcde4").val(PURCH_RETURN.vat_setup[3]).change();
    $("#txtvatcde5").val(PURCH_RETURN.vat_setup[4]).change();
    $("#txtvatcde6").val(PURCH_RETURN.vat_setup[5]).change();
    $("#txtvatcde7").val(PURCH_RETURN.vat_setup[6]).change();
    $("#txtvatcde8").val(PURCH_RETURN.vat_setup[7]).change();
    $("#txtvatcde9").val(PURCH_RETURN.vat_setup[8]).change();
    $("#txtvatcde10").val(PURCH_RETURN.vat_setup[9]).change();
    $("#txtvatcde11").val(PURCH_RETURN.vat_setup[10]).change();
    $("#txtvatcde12").val(PURCH_RETURN.vat_setup[11]).change();
    $("#txtvatcde13").val(PURCH_RETURN.vat_setup[12]).change();
    $("#txtvatcde14").val(PURCH_RETURN.vat_setup[13]).change();
    $("#txtvatcde15").val(PURCH_RETURN.vat_setup[14]).change();
    $("#txtvatcde16").val(PURCH_RETURN.vat_setup[15]).change();
    $("#txtvatcde17").val(PURCH_RETURN.vat_setup[16]).change();
    $("#txtvatcde18").val(PURCH_RETURN.vat_setup[17]).change();
    $("#txtvatcde19").val(PURCH_RETURN.vat_setup[18]).change();
    $("#txtvatcde20").val(PURCH_RETURN.vat_setup[19]).change();


}, 2000)




// for discount entry txtdisper1
setTimeout(() => {
    $("#txtdisper1").val(PURCH_RETURN.discounts[0]).change();
    $("#txtdisper2").val(PURCH_RETURN.discounts[0]).change();
    $("#txtdisper3").val(PURCH_RETURN.discounts[2]).change();
    $("#txtdisper4").val(PURCH_RETURN.discounts[3]).change();
    $("#txtdisper5").val(PURCH_RETURN.discounts[4]).change();
    $("#txtdisper6").val(PURCH_RETURN.discounts[5]).change();
    $("#txtdisper7").val(PURCH_RETURN.discounts[6]).change();
    $("#txtdisper8").val(PURCH_RETURN.discounts[7]).change();
    $("#txtdisper9").val(PURCH_RETURN.discounts[8]).change();
    $("#txtdisper10").val(PURCH_RETURN.discounts[9]).change();
    $("#txtdisper11").val(PURCH_RETURN.discounts[10]).change();
    $("#txtdisper12").val(PURCH_RETURN.discounts[11]).change();
    $("#txtdisper13").val(PURCH_RETURN.discounts[12]).change();
    $("#txtdisper14").val(PURCH_RETURN.discounts[13]).change();
    $("#txtdisper15").val(PURCH_RETURN.discounts[14]).change();
    $("#txtdisper16").val(PURCH_RETURN.discounts[15]).change();
    $("#txtdisper17").val(PURCH_RETURN.discounts[16]).change();
    $("#txtdisper18").val(PURCH_RETURN.discounts[17]).change();
    $("#txtdisper19").val(PURCH_RETURN.discounts[18]).change();
    $("#txtdisper20").val(PURCH_RETURN.discounts[19]).change();


}, 2000)



//txtdisamt1
setTimeout(() => {
    $("#txtdisamt1").val(PURCH_RETURN.disc_amount[0]).change();
    $("#txtdisamt2").val(PURCH_RETURN.disc_amount[0]).change();
    $("#txtdisamt3").val(PURCH_RETURN.disc_amount[2]).change();
    $("#txtdisamt4").val(PURCH_RETURN.disc_amount[3]).change();
    $("#txtdisamt5").val(PURCH_RETURN.disc_amount[4]).change();
    $("#txtdisamt6").val(PURCH_RETURN.disc_amount[5]).change();
    $("#txtdisamt7").val(PURCH_RETURN.disc_amount[6]).change();
    $("#txtdisamt8").val(PURCH_RETURN.disc_amount[7]).change();
    $("#txtdisamt9").val(PURCH_RETURN.disc_amount[8]).change();
    $("#txtdisamt10").val(PURCH_RETURN.disc_amount[9]).change();
    $("#txtdisamt11").val(PURCH_RETURN.disc_amount[10]).change();
    $("#txtdisamt12").val(PURCH_RETURN.disc_amount[11]).change();
    $("#txtdisamt13").val(PURCH_RETURN.disc_amount[12]).change();
    $("#txtdisamt14").val(PURCH_RETURN.disc_amount[13]).change();
    $("#txtdisamt15").val(PURCH_RETURN.disc_amount[14]).change();
    $("#txtdisamt16").val(PURCH_RETURN.disc_amount[15]).change();
    $("#txtdisamt17").val(PURCH_RETURN.disc_amount[16]).change();
    $("#txtdisamt18").val(PURCH_RETURN.disc_amount[17]).change();
    $("#txtdisamt19").val(PURCH_RETURN.disc_amount[18]).change();
    $("#txtdisamt20").val(PURCH_RETURN.disc_amount[19]).change();


}, 2000)











                    
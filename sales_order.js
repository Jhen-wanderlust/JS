


SO = {
    trans_date: '07/06/2019',
    warehouse: 'warehouse1',
    Suplier: 'Acme Minimart',
    terms: '30 Days',
    items: ['ITM100', 'ITM400'],
    quantity: ['150', '100'],
    price: ['20', '35'],
    vat_setup: [null, null],
    UM: ['BTL', 'BTL'],
    discounts: [null, '10'],
    disc_amount: null
  }
  
  console.log(SO)
  console.log(SO.items.length)
  it = SO.items.length



setTimeout(() => {

    document.querySelector("#txt_info_trndte").value = SO.trans_date;
}, 4000)

setTimeout(() => {

    var textToFind = SO.warehouse;

    var dd = document.getElementById("txt_info_warcde");
    for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
        }
    }

}, 4000)



setTimeout(() => {
    $(".searchable_modaltxtfilterer").val(SO.Suplier).change();

}, 4000)


//click search and select and lastly the next button
// the system will redirect to item entry then the page will load.

// for I/C



var em = document.querySelector("#itmdsc5").value;
if (em === '') {

    setTimeout(() => {
        $("#ui-id-5").click();
    }, 2000)


    setTimeout(() => {
        $("#ui-id-4").click();
    }, 4000)

} else {

    false;
}




// for I/C
var x = document.querySelectorAll(".input.cla_chkic");


for (var i = 0; i < it ; i++) {

  x[i].value = "I";
  

};






//terms
var textToFind = SO.terms;

                      var dd = document.querySelectorAll("#txttrmcde")[0];
                      for (var i = 0; i < dd.options.length; i++) {
                          if (dd.options[i].text === textToFind) {
                              dd.selectedIndex = i;
                              break;
                          }
                        }




setTimeout(() => {
    $("#itmdsc1").val(SO.items[0]).change();
    $("#itmdsc2").val(SO.items[1]).change();
    $("#itmdsc3").val(SO.items[2]).change();
    $("#itmdsc4").val(SO.items[3]).change();
    $("#itmdsc5").val(SO.items[4]).change();
    $("#itmdsc6").val(SO.items[5]).change();
    $("#itmdsc7").val(SO.items[6]).change();
    $("#itmdsc8").val(SO.items[7]).change();
    $("#itmdsc9").val(SO.items[8]).change();
    $("#itmdsc10").val(SO.items[9]).change();
    $("#itmdsc11").val(SO.items[10]).change();
    $("#itmdsc12").val(SO.items[11]).change();
    $("#itmdsc13").val(SO.items[12]).change();
    $("#itmdsc14").val(SO.items[13]).change();
    $("#itmdsc15").val(SO.items[14]).change();
    $("#itmdsc16").val(SO.items[15]).change();
    $("#itmdsc17").val(SO.items[16]).change();
    $("#itmdsc18").val(SO.items[17]).change();
    $("#itmdsc19").val(SO.items[18]).change();
    $("#itmdsc20").val(SO.items[19]).change();


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
    $("#txtqty1").val(SO.quantity[0]).change();
    $("#txtqty2").val(SO.quantity[1]).change();
    $("#txtqty3").val(SO.quantity[2]).change();
    $("#txtqty4").val(SO.quantity[3]).change();
    $("#txtqty5").val(SO.quantity[4]).change();
    $("#txtqty6").val(SO.quantity[5]).change();
    $("#txtqty7").val(SO.quantity[6]).change();
    $("#txtqty8").val(SO.quantity[7]).change();
    $("#txtqty9").val(SO.quantity[8]).change();
    $("#txtqty10").val(SO.quantity[9]).change();
    $("#txtqty11").val(SO.quantity[10]).change();
    $("#txtqty12").val(SO.quantity[11]).change();
    $("#txtqty13").val(SO.quantity[12]).change();
    $("#txtqty14").val(SO.quantity[13]).change();
    $("#txtqty15").val(SO.quantity[14]).change();
    $("#txtqty16").val(SO.quantity[15]).change();
    $("#txtqty17").val(SO.quantity[16]).change();
    $("#txtqty18").val(SO.quantity[17]).change();
    $("#txtqty19").val(SO.quantity[18]).change();
    $("#txtqty20").val(SO.quantity[19]).change();



}, 2000)

// scroll left
document.querySelector('.vScrollTable').scrollLeft = 300;

setTimeout(() => {


    $("#txtgroprc1").val(SO.price[0]).change();
    $("#txtgroprc2").val(SO.price[1]).change();
    $("#txtgroprc3").val(SO.price[2]).change();
    $("#txtgroprc4").val(SO.price[3]).change();
    $("#txtgroprc5").val(SO.price[4]).change();
    $("#txtgroprc6").val(SO.price[5]).change();
    $("#txtgroprc7").val(SO.price[6]).change();
    $("#txtgroprc8").val(SO.price[7]).change();
    $("#txtgroprc9").val(SO.price[8]).change();
    $("#txtgroprc10").val(SO.price[9]).change();
    $("#txtgroprc11").val(SO.price[10]).change();
    $("#txtgroprc12").val(SO.price[11]).change();
    $("#txtgroprc13").val(SO.price[12]).change();
    $("#txtgroprc14").val(SO.price[13]).change();
    $("#txtgroprc15").val(SO.price[14]).change();
    $("#txtgroprc16").val(SO.price[15]).change();
    $("#txtgroprc17").val(SO.price[16]).change();
    $("#txtgroprc18").val(SO.price[17]).change();
    $("#txtgroprc19").val(SO.price[18]).change();
    $("#txtgroprc20").val(SO.price[19]).change();

}, 2000)



setTimeout(() => {
    var textToFind = SO.UM[0];

    var dd = document.getElementById("untmea1");
    for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
        }
    }

    setTimeout(() => {
        var textToFind = SO.UM[1];

        var dd = document.getElementById("untmea2");
        for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === textToFind) {
                dd.selectedIndex = i;
                break;
            }
        }

        setTimeout(() => {
            var textToFind = SO.UM[2];

            var dd = document.getElementById("untmea3");
            for (var i = 0; i < dd.options.length; i++) {
                if (dd.options[i].text === textToFind) {
                    dd.selectedIndex = i;
                    break;
                }
            }

            setTimeout(() => {
                var textToFind = SO.UM[3];

                var dd = document.getElementById("untmea4");
                for (var i = 0; i < dd.options.length; i++) {
                    if (dd.options[i].text === textToFind) {
                        dd.selectedIndex = i;
                        break;
                    }
                }
                setTimeout(() => {
                    var textToFind = SO.UM[4];

                    var dd = document.getElementById("untmea5");
                    for (var i = 0; i < dd.options.length; i++) {
                        if (dd.options[i].text === textToFind) {
                            dd.selectedIndex = i;
                            break;
                        }
                    }


                    setTimeout(() => {
                        var textToFind = SO.UM[5];

                        var dd = document.getElementById("untmea6");
                        for (var i = 0; i < dd.options.length; i++) {
                            if (dd.options[i].text === textToFind) {
                                dd.selectedIndex = i;
                                break;
                            }
                        }

                        setTimeout(() => {
                            var textToFind = SO.UM[6];

                            var dd = document.getElementById("untmea7");
                            for (var i = 0; i < dd.options.length; i++) {
                                if (dd.options[i].text === textToFind) {
                                    dd.selectedIndex = i;
                                    break;
                                }
                            }

                            setTimeout(() => {
                                var textToFind = SO.UM[7];

                                var dd = document.getElementById("untmea8");
                                for (var i = 0; i < dd.options.length; i++) {
                                    if (dd.options[i].text === textToFind) {
                                        dd.selectedIndex = i;
                                        break;
                                    }
                                }
                                setTimeout(() => {
                                    var textToFind = SO.UM[8];

                                    var dd = document.getElementById("untmea9");
                                    for (var i = 0; i < dd.options.length; i++) {
                                        if (dd.options[i].text === textToFind) {
                                            dd.selectedIndex = i;
                                            break;
                                        }
                                    }
                                    setTimeout(() => {
                                        var textToFind = SO.UM[9];

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
    var textToFind = SO.UM[11];

    var dd = document.getElementById("untmea1");
    for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
        }
    }

    setTimeout(() => {
        var textToFind = SO.UM[12];

        var dd = document.getElementById("untmea2");
        for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === textToFind) {
                dd.selectedIndex = i;
                break;
            }
        }

        setTimeout(() => {
            var textToFind = SO.UM[13];

            var dd = document.getElementById("untmea3");
            for (var i = 0; i < dd.options.length; i++) {
                if (dd.options[i].text === textToFind) {
                    dd.selectedIndex = i;
                    break;
                }
            }

            setTimeout(() => {
                var textToFind = SO.UM[14];

                var dd = document.getElementById("untmea4");
                for (var i = 0; i < dd.options.length; i++) {
                    if (dd.options[i].text === textToFind) {
                        dd.selectedIndex = i;
                        break;
                    }
                }
                setTimeout(() => {
                    var textToFind = SO.UM[15];

                    var dd = document.getElementById("untmea5");
                    for (var i = 0; i < dd.options.length; i++) {
                        if (dd.options[i].text === textToFind) {
                            dd.selectedIndex = i;
                            break;
                        }
                    }


                    setTimeout(() => {
                        var textToFind = SO.UM[16];

                        var dd = document.getElementById("untmea6");
                        for (var i = 0; i < dd.options.length; i++) {
                            if (dd.options[i].text === textToFind) {
                                dd.selectedIndex = i;
                                break;
                            }
                        }

                        setTimeout(() => {
                            var textToFind = SO.UM[17];

                            var dd = document.getElementById("untmea7");
                            for (var i = 0; i < dd.options.length; i++) {
                                if (dd.options[i].text === textToFind) {
                                    dd.selectedIndex = i;
                                    break;
                                }
                            }

                            setTimeout(() => {
                                var textToFind = SO.UM[18];

                                var dd = document.getElementById("untmea8");
                                for (var i = 0; i < dd.options.length; i++) {
                                    if (dd.options[i].text === textToFind) {
                                        dd.selectedIndex = i;
                                        break;
                                    }
                                }
                                setTimeout(() => {
                                    var textToFind = SO.UM[19];

                                    var dd = document.getElementById("untmea9");
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



setTimeout(() => {
    $("#txtvatcde1").val(SO.vat_setup[0]).change();
    $("#txtvatcde2").val(SO.vat_setup[1]).change();
    $("#txtvatcde3").val(SO.vat_setup[2]).change();
    $("#txtvatcde4").val(SO.vat_setup[3]).change();
    $("#txtvatcde5").val(SO.vat_setup[4]).change();
    $("#txtvatcde6").val(SO.vat_setup[5]).change();
    $("#txtvatcde7").val(SO.vat_setup[6]).change();
    $("#txtvatcde8").val(SO.vat_setup[7]).change();
    $("#txtvatcde9").val(SO.vat_setup[8]).change();
    $("#txtvatcde10").val(SO.vat_setup[9]).change();
    $("#txtvatcde11").val(SO.vat_setup[10]).change();
    $("#txtvatcde12").val(SO.vat_setup[11]).change();
    $("#txtvatcde13").val(SO.vat_setup[12]).change();
    $("#txtvatcde14").val(SO.vat_setup[13]).change();
    $("#txtvatcde15").val(SO.vat_setup[14]).change();
    $("#txtvatcde16").val(SO.vat_setup[15]).change();
    $("#txtvatcde17").val(SO.vat_setup[16]).change();
    $("#txtvatcde18").val(SO.vat_setup[17]).change();
    $("#txtvatcde19").val(SO.vat_setup[18]).change();
    $("#txtvatcde20").val(SO.vat_setup[19]).change();


}, 2000)


//

// for discount entry txtdiscper
setTimeout(() => {
    $("#txtdiscper1").val(SO.discounts[0]).change();
    $("#txtdiscper2").val(SO.discounts[1]).change();
    $("#txtdiscper3").val(SO.discounts[2]).change();
    $("#txtdiscper4").val(SO.discounts[3]).change();
    $("#txtdiscper5").val(SO.discounts[4]).change();
    $("#txtdiscper6").val(SO.discounts[5]).change();
    $("#txtdiscper7").val(SO.discounts[6]).change();
    $("#txtdiscper8").val(SO.discounts[7]).change();
    $("#txtdiscper9").val(SO.discounts[8]).change();
    $("#txtdiscper10").val(SO.discounts[9]).change();
    $("#txtdiscper11").val(SO.discounts[10]).change();
    $("#txtdiscper12").val(SO.discounts[11]).change();
    $("#txtdiscper13").val(SO.discounts[12]).change();
    $("#txtdiscper14").val(SO.discounts[13]).change();
    $("#txtdiscper15").val(SO.discounts[14]).change();
    $("#txtdiscper16").val(SO.discounts[15]).change();
    $("#txtdiscper17").val(SO.discounts[16]).change();
    $("#txtdiscper18").val(SO.discounts[17]).change();
    $("#txtdiscper19").val(SO.discounts[18]).change();
    $("#txtdiscper20").val(SO.discounts[19]).change();


}, 2000)



//txtdiscamt
setTimeout(() => {
    $("#txtdiscamt1").val(SO.disc_amount[0]).change();
    $("#txtdiscamt2").val(SO.disc_amount[1]).change();
    $("#txtdiscamt3").val(SO.disc_amount[2]).change();
    $("#txtdiscamt4").val(SO.disc_amount[3]).change();
    $("#txtdiscamt5").val(SO.disc_amount[4]).change();
    $("#txtdiscamt6").val(SO.disc_amount[5]).change();
    $("#txtdiscamt7").val(SO.disc_amount[6]).change();
    $("#txtdiscamt8").val(SO.disc_amount[7]).change();
    $("#txtdiscamt9").val(SO.disc_amount[8]).change();
    $("#txtdiscamt10").val(SO.disc_amount[9]).change();
    $("#txtdiscamt11").val(SO.disc_amount[10]).change();
    $("#txtdiscamt12").val(SO.disc_amount[11]).change();
    $("#txtdiscamt13").val(SO.disc_amount[12]).change();
    $("#txtdiscamt14").val(SO.disc_amount[13]).change();
    $("#txtdiscamt15").val(SO.disc_amount[14]).change();
    $("#txtdiscamt16").val(SO.disc_amount[15]).change();
    $("#txtdiscamt17").val(SO.disc_amount[16]).change();
    $("#txtdiscamt18").val(SO.disc_amount[17]).change();
    $("#txtdiscamt19").val(SO.disc_amount[18]).change();
    $("#txtdiscamt20").val(SO.disc_amount[19]).change();


}, 2000)









//scratch below 


localStorage.setItem("data1", 0);
let  listData = [
                      
    '',
    '01/07/2019',
    '01/07/2019'

        ]

        let  listData1 = [
                      
            '',
            'warehouse1',
            'warehouse1'

           ]

           let  listData2 = [
                      
            '',
            'CPL1',
            'CPL2'

           ]

        

        var counter= localStorage.getItem("data1");
        setTimeout(() => 

        { 
        document.querySelector("#txt_info_trndte").value = listData[counter];
        },4000)
        setTimeout(() => 

        { 
        document.querySelector("#txt_info_warcde").value = listData1[counter];
        },4000)
        setTimeout(() => 

        { 
        document.querySelector("#txt_info_prccde").value = listData2[counter];
        },4000)
        
           
        counter++;
        localStorage.setItem("data1",counter);



localStorage.setItem("data2", 0);
let  listData = [
                      
         '',
         'ABC Marketing',
         'Walk-in'
         
        
        ]

        

        var counter= localStorage.getItem("data2");
        setTimeout(() => 

        { 
        document.querySelectorAll(".searchable_modaltxtfilterer")[0].value = listData[counter];
        },4000)
       
           
        counter++;
        localStorage.setItem("data2",counter);


localStorage.setItem("data3", 0);
let  listData = [
                      
         '',
         'CASH',
         '30 Days'
         
        
        ]
       
        

        var counter= localStorage.getItem("data3");
        setTimeout(() => 

        { 
        document.querySelectorAll("#txttrmcde").value = listData[counter];
        },4000)
        
           
        counter++;
        localStorage.setItem("data3",counter);


        // for I/C
    var x = document.querySelectorAll(".input.cla_chkic");
    var myarray = []   //assigning them to the variable x. Then we create an array variable

    //loop over all the “a” elements in x, and for each element,
    for (var i=0; i<x.length; i++){
    var Item1 = x[0].value = "I";
    var Item2 = x[1].value = "I";
    myarray.push([Item1,Item2]);
    };

       
                
let  listData1 = [
              

  'ITM5000',
  'ITM5010'

   
    ]
    

    setTimeout(() => 

    { 
    $("#itmdsc1").val(listData1[0]).change();
    $("#itmdsc2").val(listData1[1]).change();
    

      },2000)






//click the autocomplete
setTimeout(() => 

                        { 
                          document.querySelectorAll(".ui-menu-item")[2].click();


                          },2000)



let  listData1 = [
              

  'ITM5000',
  'ITM5010'

   
    ]
    

    setTimeout(() => 

    { 
    $("#itmdsc1").val(listData1[0]).change();
    $("#itmdsc2").val(listData1[1]).change();
    

      },2000)





      let  data_qty = [

        '50',
        '100',
        '200',
        '300',
        '5000',
        
          ]

                let  data_price = [
   
                    '20',
                    '10',
                    '15',
                    '30',
                    

                    

                    ]

          setTimeout(() => 
      
          { 
                $("#txtqty1").val(data_qty[0]).change();
                $("#txtqty2").val(data_qty[0]).change();
                $("#txtgroprc1").val(data_price[0]).change();
                $("#txtgroprc2").val(data_price[0]).change();

            },2000)



            let  listData6 = [
   
              'SAL VAT',
              

              ]
              let  listData4 = [
   
                'BTL',
                'CASE',
                'CAN',
                
                ]

            setTimeout(() => 
      
            { 
            $("#txtvatcde1").val(listData6[0]).change();
            $("#txtvatcde2").val(listData6[0]).change();
         
             },2000)


             setTimeout(() => 

                                              { 
                                          var textToFind =  listData4[0];

                                          var dd = document.getElementById("untmea1");
                                          for (var i = 0; i < dd.options.length; i++) {
                                              if (dd.options[i].text === textToFind) {
                                                  dd.selectedIndex = i;
                                                  break;
                                              }
                                          }
       
                                            setTimeout(() => 

                                            { 
                                        var textToFind =  listData4[1];

                                        var dd = document.getElementById("untmea2");
                                        for (var i = 0; i < dd.options.length; i++) {
                                            if (dd.options[i].text === textToFind) {
                                                dd.selectedIndex = i;
                                                break;
                                            }
                                        }
                                },2000)
                    },2000)
                    
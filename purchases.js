

//PURCH 4
PURCH = {
  trans_date: '07/10/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: '30 Days',
  items: ['ITM200', 'ITM200'],
  quantity: ['40', '20'],
  price: ['10', '10'],
  vat_setup: ['PUR VAT','PUR VAT'],
  UM: ['CASE', 'CASE'],
  discounts: null,
  disc_amount: null,
  PO_qty: ['40'],
  PURCH_num : 'PUR-0000005',
  copy_PO: 'PO-0000032',
};

console.log(PURCH);
console.log(PURCH.items.length);
 it = PURCH.items.length;
 pqty = PURCH.PO_qty.length;




setTimeout(() => {

  document.querySelector("#txt_info_trndte").value = PURCH.trans_date;
}, 4000)

setTimeout(() => {

  var textToFind = PURCH.warehouse;

  var dd = document.getElementById("txt_info_warcde");
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i;
      break;
    }
  }

}, 4000)



setTimeout(() => {
  $(".searchable_modaltxtfilterer").val(PURCH.Suplier).change();

}, 4000)


//click search and select and lastly the next button
// the system will redirect to item entry then the page will load.

//terms

var textToFind = PURCH.terms;

var dd = document.querySelectorAll("#txttrmcde")[0];
for (var i = 0; i < dd.options.length; i++) {
  if (dd.options[i].text === textToFind) {
    dd.selectedIndex = i;
    break;
  }
}

//EWT

var textToFind = PURCH.EWT;

var dd = document.querySelectorAll("#txtewt")[0];
for (var i = 0; i < dd.options.length; i++) {
  if (dd.options[i].text === textToFind) {
    dd.selectedIndex = i;
    break;
  }
}

//EVAT

var textToFind = PURCH.EVAT;

var dd = document.querySelectorAll("#txtevat")[0];
for (var i = 0; i < dd.options.length; i++) {
  if (dd.options[i].text === textToFind) {
    dd.selectedIndex = i;
    break;
  }
}




/*****************     COPY PO  START  ************/

setTimeout(() => {

  var em = document.querySelector("#docnum").value;
  if (em === PURCH.PURCH_num) {

    setTimeout(() => {
      copy_so();
    }, 2000)

    setTimeout(() => {
      document.querySelectorAll('.fa.fa-search')[1].click();
    }, 4000)


  } else {

    false;
  }

}, 2000)




setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[1].value = PURCH.copy_PO;
}, 4000)


setTimeout(() => {
  document.querySelectorAll('.searchable_modalbtnfilterer.save')[1].click();
}, 4000)


setTimeout(() => {
  document.querySelectorAll(".filter_select.edit")[0].click();
}, 4000)


setTimeout(() => {
  
  // for pqty
  //Print array list values with loop to div dynamically 
  
  var x = document.querySelectorAll("#tblsearch1 td input.regex-numericwithcommaperiod");
  
  
  for (var i = 0; i < pqty.length; i++) {
  
    x[i].value = pqty[i];
  
  
  };
  }, 4000)

//input regex-numericwithcommaperiod




setTimeout(() => {
  copy_selected();
}, 4000)

/*****************     COPY PO  END  ************/

// for I/C
var x = document.querySelectorAll(".input.cla_chkic");


for (var i = 0; i < it; i++) {

  x[i].value = it[i];


};




//items

setTimeout(() => {
  $("#itmdsc1").val(PURCH.items[0]).change();
  $("#itmdsc2").val(PURCH.items[1]).change();
  $("#itmdsc3").val(PURCH.items[2]).change();
  $("#itmdsc4").val(PURCH.items[3]).change();
  $("#itmdsc5").val(PURCH.items[4]).change();
  $("#itmdsc6").val(PURCH.items[5]).change();
  $("#itmdsc7").val(PURCH.items[6]).change();
  $("#itmdsc8").val(PURCH.items[7]).change();
  $("#itmdsc9").val(PURCH.items[8]).change();
  $("#itmdsc10").val(PURCH.items[9]).change();
  $("#itmdsc11").val(PURCH.items[10]).change();
  $("#itmdsc12").val(PURCH.items[11]).change();
  $("#itmdsc13").val(PURCH.items[12]).change();
  $("#itmdsc14").val(PURCH.items[13]).change();
  $("#itmdsc15").val(PURCH.items[14]).change();
  $("#itmdsc16").val(PURCH.items[15]).change();
  $("#itmdsc17").val(PURCH.items[16]).change();
  $("#itmdsc18").val(PURCH.items[17]).change();
  $("#itmdsc19").val(PURCH.items[18]).change();
  $("#itmdsc20").val(PURCH.items[19]).change();


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
  $("#txtqty1").val(PURCH.quantity[0]).change();
  $("#txtqty2").val(PURCH.quantity[1]).change();
  $("#txtqty3").val(PURCH.quantity[2]).change();
  $("#txtqty4").val(PURCH.quantity[3]).change();
  $("#txtqty5").val(PURCH.quantity[4]).change();
  $("#txtqty6").val(PURCH.quantity[5]).change();
  $("#txtqty7").val(PURCH.quantity[6]).change();
  $("#txtqty8").val(PURCH.quantity[7]).change();
  $("#txtqty9").val(PURCH.quantity[8]).change();
  $("#txtqty10").val(PURCH.quantity[9]).change();
  $("#txtqty11").val(PURCH.quantity[10]).change();
  $("#txtqty12").val(PURCH.quantity[11]).change();
  $("#txtqty13").val(PURCH.quantity[12]).change();
  $("#txtqty14").val(PURCH.quantity[13]).change();
  $("#txtqty15").val(PURCH.quantity[14]).change();
  $("#txtqty16").val(PURCH.quantity[15]).change();
  $("#txtqty17").val(PURCH.quantity[16]).change();
  $("#txtqty18").val(PURCH.quantity[17]).change();
  $("#txtqty19").val(PURCH.quantity[18]).change();
  $("#txtqty20").val(PURCH.quantity[19]).change();



}, 2000)

// scroll left
document.querySelector('.vScrollTable').scrollLeft = 300;
// scroll left
document.querySelector('#div_showout').scrollLeft = 300;





setTimeout(() => {


  $("#txtgroprc1").val(PURCH.price[0]).change();
  $("#txtgroprc2").val(PURCH.price[1]).change();
  $("#txtgroprc3").val(PURCH.price[2]).change();
  $("#txtgroprc4").val(PURCH.price[3]).change();
  $("#txtgroprc5").val(PURCH.price[4]).change();
  $("#txtgroprc6").val(PURCH.price[5]).change();
  $("#txtgroprc7").val(PURCH.price[6]).change();
  $("#txtgroprc8").val(PURCH.price[7]).change();
  $("#txtgroprc9").val(PURCH.price[8]).change();
  $("#txtgroprc10").val(PURCH.price[9]).change();
  $("#txtgroprc11").val(PURCH.price[10]).change();
  $("#txtgroprc12").val(PURCH.price[11]).change();
  $("#txtgroprc13").val(PURCH.price[12]).change();
  $("#txtgroprc14").val(PURCH.price[13]).change();
  $("#txtgroprc15").val(PURCH.price[14]).change();
  $("#txtgroprc16").val(PURCH.price[15]).change();
  $("#txtgroprc17").val(PURCH.price[16]).change();
  $("#txtgroprc18").val(PURCH.price[17]).change();
  $("#txtgroprc19").val(PURCH.price[18]).change();
  $("#txtgroprc20").val(PURCH.price[19]).change();

}, 2000)



setTimeout(() => {
  var textToFind = PURCH.UM[0];

  var dd = document.getElementById("untmea1");
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i;
      break;
    }
  }

  setTimeout(() => {
    var textToFind = PURCH.UM[1];

    var dd = document.getElementById("untmea2");
    for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
        dd.selectedIndex = i;
        break;
      }
    }

    setTimeout(() => {
      var textToFind = PURCH.UM[2];

      var dd = document.getElementById("untmea3");
      for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i;
          break;
        }
      }

      setTimeout(() => {
        var textToFind = PURCH.UM[3];

        var dd = document.getElementById("untmea4");
        for (var i = 0; i < dd.options.length; i++) {
          if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
          }
        }
        setTimeout(() => {
          var textToFind = PURCH.UM[4];

          var dd = document.getElementById("untmea5");
          for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === textToFind) {
              dd.selectedIndex = i;
              break;
            }
          }


          setTimeout(() => {
            var textToFind = PURCH.UM[5];

            var dd = document.getElementById("untmea6");
            for (var i = 0; i < dd.options.length; i++) {
              if (dd.options[i].text === textToFind) {
                dd.selectedIndex = i;
                break;
              }
            }

            setTimeout(() => {
              var textToFind = PURCH.UM[6];

              var dd = document.getElementById("untmea7");
              for (var i = 0; i < dd.options.length; i++) {
                if (dd.options[i].text === textToFind) {
                  dd.selectedIndex = i;
                  break;
                }
              }

              setTimeout(() => {
                var textToFind = PURCH.UM[7];

                var dd = document.getElementById("untmea8");
                for (var i = 0; i < dd.options.length; i++) {
                  if (dd.options[i].text === textToFind) {
                    dd.selectedIndex = i;
                    break;
                  }
                }
                setTimeout(() => {
                  var textToFind = PURCH.UM[8];

                  var dd = document.getElementById("untmea9");
                  for (var i = 0; i < dd.options.length; i++) {
                    if (dd.options[i].text === textToFind) {
                      dd.selectedIndex = i;
                      break;
                    }
                  }
                  setTimeout(() => {
                    var textToFind = PURCH.UM[9];

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
  $("#txtvatcde1").val(PURCH.vat_setup[0]).change();
  $("#txtvatcde2").val(PURCH.vat_setup[1]).change();
  $("#txtvatcde3").val(PURCH.vat_setup[2]).change();
  $("#txtvatcde4").val(PURCH.vat_setup[3]).change();
  $("#txtvatcde5").val(PURCH.vat_setup[4]).change();
  $("#txtvatcde6").val(PURCH.vat_setup[5]).change();
  $("#txtvatcde7").val(PURCH.vat_setup[6]).change();
  $("#txtvatcde8").val(PURCH.vat_setup[7]).change();
  $("#txtvatcde9").val(PURCH.vat_setup[8]).change();
  $("#txtvatcde10").val(PURCH.vat_setup[9]).change();
  $("#txtvatcde11").val(PURCH.vat_setup[10]).change();
  $("#txtvatcde12").val(PURCH.vat_setup[11]).change();
  $("#txtvatcde13").val(PURCH.vat_setup[12]).change();
  $("#txtvatcde14").val(PURCH.vat_setup[13]).change();
  $("#txtvatcde15").val(PURCH.vat_setup[14]).change();
  $("#txtvatcde16").val(PURCH.vat_setup[15]).change();
  $("#txtvatcde17").val(PURCH.vat_setup[16]).change();
  $("#txtvatcde18").val(PURCH.vat_setup[17]).change();
  $("#txtvatcde19").val(PURCH.vat_setup[18]).change();
  $("#txtvatcde20").val(PURCH.vat_setup[19]).change();


}, 2000)




// for discount entry txtdisper1
setTimeout(() => {
  $("#txtdisper1").val(PURCH.discounts[0]).change();
  $("#txtdisper2").val(PURCH.discounts[0]).change();
  $("#txtdisper3").val(PURCH.discounts[2]).change();
  $("#txtdisper4").val(PURCH.discounts[3]).change();
  $("#txtdisper5").val(PURCH.discounts[4]).change();
  $("#txtdisper6").val(PURCH.discounts[5]).change();
  $("#txtdisper7").val(PURCH.discounts[6]).change();
  $("#txtdisper8").val(PURCH.discounts[7]).change();
  $("#txtdisper9").val(PURCH.discounts[8]).change();
  $("#txtdisper10").val(PURCH.discounts[9]).change();
  $("#txtdisper11").val(PURCH.discounts[10]).change();
  $("#txtdisper12").val(PURCH.discounts[11]).change();
  $("#txtdisper13").val(PURCH.discounts[12]).change();
  $("#txtdisper14").val(PURCH.discounts[13]).change();
  $("#txtdisper15").val(PURCH.discounts[14]).change();
  $("#txtdisper16").val(PURCH.discounts[15]).change();
  $("#txtdisper17").val(PURCH.discounts[16]).change();
  $("#txtdisper18").val(PURCH.discounts[17]).change();
  $("#txtdisper19").val(PURCH.discounts[18]).change();
  $("#txtdisper20").val(PURCH.discounts[19]).change();


}, 2000)



//txtdisamt1
setTimeout(() => {
  $("#txtdisamt1").val(PURCH.disc_amount[0]).change();
  $("#txtdisamt2").val(PURCH.disc_amount[0]).change();
  $("#txtdisamt3").val(PURCH.disc_amount[2]).change();
  $("#txtdisamt4").val(PURCH.disc_amount[3]).change();
  $("#txtdisamt5").val(PURCH.disc_amount[4]).change();
  $("#txtdisamt6").val(PURCH.disc_amount[5]).change();
  $("#txtdisamt7").val(PURCH.disc_amount[6]).change();
  $("#txtdisamt8").val(PURCH.disc_amount[7]).change();
  $("#txtdisamt9").val(PURCH.disc_amount[8]).change();
  $("#txtdisamt10").val(PURCH.disc_amount[9]).change();
  $("#txtdisamt11").val(PURCH.disc_amount[10]).change();
  $("#txtdisamt12").val(PURCH.disc_amount[11]).change();
  $("#txtdisamt13").val(PURCH.disc_amount[12]).change();
  $("#txtdisamt14").val(PURCH.disc_amount[13]).change();
  $("#txtdisamt15").val(PURCH.disc_amount[14]).change();
  $("#txtdisamt16").val(PURCH.disc_amount[15]).change();
  $("#txtdisamt17").val(PURCH.disc_amount[16]).change();
  $("#txtdisamt18").val(PURCH.disc_amount[17]).change();
  $("#txtdisamt19").val(PURCH.disc_amount[18]).change();
  $("#txtdisamt20").val(PURCH.disc_amount[19]).change();


}, 2000)






























//scratch

localStorage.setItem("data1", 0);
let listData = [

  '',
  '01/07/2019',
  '01/07/2019'

]

let listData1 = [

  '',
  'warehouse1',
  'warehouse1'

]



var counter = localStorage.getItem("data1");
setTimeout(() => {
  document.querySelector("#txt_info_trndte").value = listData[counter];
}, 4000)
setTimeout(() => {
  document.querySelector("#txt_info_warcde").value = listData1[counter];
}, 4000)


counter++;
localStorage.setItem("data1", counter);



localStorage.setItem("data2", 0);

let listData = [

  '',
  'ABC Marketing',
  'Walk-in'

]



var counter = localStorage.getItem("data2");
setTimeout(() => {
  document.querySelectorAll(".searchable_modaltxtfilterer")[0].value = listData[counter];
}, 4000)


counter++;
localStorage.setItem("data2", counter);


localStorage.setItem("data3", 0);
let listData = [

  '',
  'CASH',
  '30 Days'


]



var counter = localStorage.getItem("data3");
setTimeout(() => {
  document.querySelectorAll("#txttrmcde").value = listData[counter];
}, 4000)


counter++;
localStorage.setItem("data3", counter);


// for I/C
var x = document.querySelectorAll(".input.cla_chkic");
var myarray = []   //assigning them to the variable x. Then we create an array variable

//loop over all the “a” elements in x, and for each element,
for (var i = 0; i < x.length; i++) {
  var Item1 = x[0].value = "I";
  var Item2 = x[1].value = "I";
  myarray.push([Item1, Item2]);
};



let listData1 = [


  'ITM5000',
  'ITM5010'


]


setTimeout(() => {
  $("#itmdsc1").val(listData1[0]).change();
  $("#itmdsc2").val(listData1[1]).change();


}, 2000)






//click the autocomplete
setTimeout(() => {
  document.querySelectorAll(".ui-menu-item")[2].click();


}, 2000)



let listData1 = [


  'ITM5000',
  'ITM5010'


]


setTimeout(() => {
  $("#itmdsc1").val(listData1[0]).change();
  $("#itmdsc2").val(listData1[1]).change();


}, 2000)





let data_qty = [

  '50',
  '100',
  '200',
  '300',
  '5000',

]

let data_price = [

  '20',
  '10',
  '15',
  '30',




]

setTimeout(() => {
  $("#txtqty1").val(data_qty[0]).change();
  $("#txtqty2").val(data_qty[0]).change();
  $("#txtgroprc1").val(data_price[0]).change();
  $("#txtgroprc2").val(data_price[0]).change();

}, 2000)



let listData6 = [

  'PUR VAT',


]
let listData4 = [

  'BTL',
  'CASE',
  'CAN',

]

setTimeout(() => {
  $("#txtvatcde1").val(listData6[0]).change();
  $("#txtvatcde2").val(listData6[0]).change();

}, 2000)


setTimeout(() => {
  var textToFind = listData4[0];

  var dd = document.getElementById("untmea1");
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i;
      break;
    }
  }

  setTimeout(() => {
    var textToFind = listData4[1];

    var dd = document.getElementById("untmea2");
    for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
        dd.selectedIndex = i;
        break;
      }
    }
  }, 2000)
}, 2000)

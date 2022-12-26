//SAL 4
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

  document.querySelector("#txt_info_trndte").value = SAL.trans_date;
}, 4000)

setTimeout(() => {

  var textToFind = SAL.warehouse;

  var dd = document.getElementById("txt_info_warcde");
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i;
      break;
    }
  }

}, 4000)



setTimeout(() => {
  $(".searchable_modaltxtfilterer").val(SAL.Customer).change();

}, 4000)


//click search and select and lastly the next button
// the system will redirect to item entry then the page will load.

//terms

var textToFind = SAL.terms;

var dd = document.querySelectorAll("#txttrmcde")[0];
for (var i = 0; i < dd.options.length; i++) {
  if (dd.options[i].text === textToFind) {
    dd.selectedIndex = i;
    break;
  }
}

//EWT

var textToFind = SAL.EWT;

var dd = document.querySelectorAll("#txtewt")[0];
for (var i = 0; i < dd.options.length; i++) {
  if (dd.options[i].text === textToFind) {
    dd.selectedIndex = i;
    break;
  }
}

//EVAT

var textToFind = SAL.EVAT;

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
  if (em === SAL.SAL_num) {

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
  document.querySelectorAll('.searchable_modaltxtfilterer')[1].value = SAL.copy_SO;
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
  $("#itmdsc1").val(SAL.items[0]).change();
  $("#itmdsc2").val(SAL.items[1]).change();
  $("#itmdsc3").val(SAL.items[2]).change();
  $("#itmdsc4").val(SAL.items[3]).change();
  $("#itmdsc5").val(SAL.items[4]).change();
  $("#itmdsc6").val(SAL.items[5]).change();
  $("#itmdsc7").val(SAL.items[6]).change();
  $("#itmdsc8").val(SAL.items[7]).change();
  $("#itmdsc9").val(SAL.items[8]).change();
  $("#itmdsc10").val(SAL.items[9]).change();
  $("#itmdsc11").val(SAL.items[10]).change();
  $("#itmdsc12").val(SAL.items[11]).change();
  $("#itmdsc13").val(SAL.items[12]).change();
  $("#itmdsc14").val(SAL.items[13]).change();
  $("#itmdsc15").val(SAL.items[14]).change();
  $("#itmdsc16").val(SAL.items[15]).change();
  $("#itmdsc17").val(SAL.items[16]).change();
  $("#itmdsc18").val(SAL.items[17]).change();
  $("#itmdsc19").val(SAL.items[18]).change();
  $("#itmdsc20").val(SAL.items[19]).change();
  $("#itmdsc21").val(SAL.items[20]).change();
  $("#itmdsc22").val(SAL.items[21]).change();
  $("#itmdsc23").val(SAL.items[22]).change();
  $("#itmdsc24").val(SAL.items[23]).change();
  $("#itmdsc25").val(SAL.items[24]).change();
  $("#itmdsc26").val(SAL.items[25]).change();
  $("#itmdsc27").val(SAL.items[26]).change();
  $("#itmdsc28").val(SAL.items[27]).change();
  $("#itmdsc29").val(SAL.items[28]).change();
  $("#itmdsc30").val(SAL.items[29]).change();

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
  $("#txtqty1").val(SAL.quantity[0]).change();
  $("#txtqty2").val(SAL.quantity[1]).change();
  $("#txtqty3").val(SAL.quantity[2]).change();
  $("#txtqty4").val(SAL.quantity[3]).change();
  $("#txtqty5").val(SAL.quantity[4]).change();
  $("#txtqty6").val(SAL.quantity[5]).change();
  $("#txtqty7").val(SAL.quantity[6]).change();
  $("#txtqty8").val(SAL.quantity[7]).change();
  $("#txtqty9").val(SAL.quantity[8]).change();
  $("#txtqty10").val(SAL.quantity[9]).change();
  $("#txtqty11").val(SAL.quantity[10]).change();
  $("#txtqty12").val(SAL.quantity[11]).change();
  $("#txtqty13").val(SAL.quantity[12]).change();
  $("#txtqty14").val(SAL.quantity[13]).change();
  $("#txtqty15").val(SAL.quantity[14]).change();
  $("#txtqty16").val(SAL.quantity[15]).change();
  $("#txtqty17").val(SAL.quantity[16]).change();
  $("#txtqty18").val(SAL.quantity[17]).change();
  $("#txtqty19").val(SAL.quantity[18]).change();
  $("#txtqty20").val(SAL.quantity[19]).change();
  $("#txtqty21").val(SAL.quantity[20]).change();
  $("#txtqty22").val(SAL.quantity[21]).change();
  $("#txtqty23").val(SAL.quantity[22]).change();
  $("#txtqty24").val(SAL.quantity[23]).change();
  $("#txtqty25").val(SAL.quantity[24]).change();
  $("#txtqty26").val(SAL.quantity[25]).change();
  $("#txtqty27").val(SAL.quantity[26]).change();
  $("#txtqty28").val(SAL.quantity[27]).change();
  $("#txtqty29").val(SAL.quantity[28]).change();
  $("#txtqty30").val(SAL.quantity[29]).change();


}, 2000)

// scroll left
document.querySelector('.vScrollTable').scrollLeft = 300;

setTimeout(() => {


  $("#txtgroprc1").val(SAL.price[0]).change();
  $("#txtgroprc2").val(SAL.price[1]).change();
  $("#txtgroprc3").val(SAL.price[2]).change();
  $("#txtgroprc4").val(SAL.price[3]).change();
  $("#txtgroprc5").val(SAL.price[4]).change();
  $("#txtgroprc6").val(SAL.price[5]).change();
  $("#txtgroprc7").val(SAL.price[6]).change();
  $("#txtgroprc8").val(SAL.price[7]).change();
  $("#txtgroprc9").val(SAL.price[8]).change();
  $("#txtgroprc10").val(SAL.price[9]).change();
  $("#txtgroprc11").val(SAL.price[10]).change();
  $("#txtgroprc12").val(SAL.price[11]).change();
  $("#txtgroprc13").val(SAL.price[12]).change();
  $("#txtgroprc14").val(SAL.price[13]).change();
  $("#txtgroprc15").val(SAL.price[14]).change();
  $("#txtgroprc16").val(SAL.price[15]).change();
  $("#txtgroprc17").val(SAL.price[16]).change();
  $("#txtgroprc18").val(SAL.price[17]).change();
  $("#txtgroprc19").val(SAL.price[18]).change();
  $("#txtgroprc20").val(SAL.price[19]).change();
  $("#txtgroprc21").val(SAL.price[20]).change();
  $("#txtgroprc22").val(SAL.price[21]).change();
  $("#txtgroprc23").val(SAL.price[22]).change();
  $("#txtgroprc24").val(SAL.price[23]).change();
  $("#txtgroprc25").val(SAL.price[24]).change();
  $("#txtgroprc26").val(SAL.price[25]).change();
  $("#txtgroprc27").val(SAL.price[26]).change();
  $("#txtgroprc28").val(SAL.price[27]).change();
  $("#txtgroprc29").val(SAL.price[28]).change();
  $("#txtgroprc30").val(SAL.price[29]).change();
  

}, 2000)



setTimeout(() => {
  var textToFind = SAL.UM[0];

  var dd = document.getElementById("untmea1");
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i;
      break;
    }
  }

  setTimeout(() => {
    var textToFind = SAL.UM[1];

    var dd = document.getElementById("untmea2");
    for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
        dd.selectedIndex = i;
        break;
      }
    }

    setTimeout(() => {
      var textToFind = SAL.UM[2];

      var dd = document.getElementById("untmea3");
      for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i;
          break;
        }
      }

      setTimeout(() => {
        var textToFind = SAL.UM[3];

        var dd = document.getElementById("untmea4");
        for (var i = 0; i < dd.options.length; i++) {
          if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
          }
        }
        setTimeout(() => {
          var textToFind = SAL.UM[4];

          var dd = document.getElementById("untmea5");
          for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === textToFind) {
              dd.selectedIndex = i;
              break;
            }
          }


          setTimeout(() => {
            var textToFind = SAL.UM[5];

            var dd = document.getElementById("untmea6");
            for (var i = 0; i < dd.options.length; i++) {
              if (dd.options[i].text === textToFind) {
                dd.selectedIndex = i;
                break;
              }
            }

            setTimeout(() => {
              var textToFind = SAL.UM[6];

              var dd = document.getElementById("untmea7");
              for (var i = 0; i < dd.options.length; i++) {
                if (dd.options[i].text === textToFind) {
                  dd.selectedIndex = i;
                  break;
                }
              }

              setTimeout(() => {
                var textToFind = SAL.UM[7];

                var dd = document.getElementById("untmea8");
                for (var i = 0; i < dd.options.length; i++) {
                  if (dd.options[i].text === textToFind) {
                    dd.selectedIndex = i;
                    break;
                  }
                }
                setTimeout(() => {
                  var textToFind = SAL.UM[8];

                  var dd = document.getElementById("untmea9");
                  for (var i = 0; i < dd.options.length; i++) {
                    if (dd.options[i].text === textToFind) {
                      dd.selectedIndex = i;
                      break;
                    }
                  }
                  setTimeout(() => {
                    var textToFind = SAL.UM[9];

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
  var textToFind = SAL.UM[11];

  var dd = document.getElementById("untmea11");
  for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i;
          break;
      }
  }

  setTimeout(() => {
      var textToFind = SAL.UM[12];

      var dd = document.getElementById("untmea12");
      for (var i = 0; i < dd.options.length; i++) {
          if (dd.options[i].text === textToFind) {
              dd.selectedIndex = i;
              break;
          }
      }

      setTimeout(() => {
          var textToFind = SAL.UM[13];

          var dd = document.getElementById("untmea13");
          for (var i = 0; i < dd.options.length; i++) {
              if (dd.options[i].text === textToFind) {
                  dd.selectedIndex = i;
                  break;
              }
          }

          setTimeout(() => {
              var textToFind = SAL.UM[14];

              var dd = document.getElementById("untmea14");
              for (var i = 0; i < dd.options.length; i++) {
                  if (dd.options[i].text === textToFind) {
                      dd.selectedIndex = i;
                      break;
                  }
              }
              setTimeout(() => {
                  var textToFind = SAL.UM[15];

                  var dd = document.getElementById("untmea15");
                  for (var i = 0; i < dd.options.length; i++) {
                      if (dd.options[i].text === textToFind) {
                          dd.selectedIndex = i;
                          break;
                      }
                  }


                  setTimeout(() => {
                      var textToFind = SAL.UM[16];

                      var dd = document.getElementById("untmea16");
                      for (var i = 0; i < dd.options.length; i++) {
                          if (dd.options[i].text === textToFind) {
                              dd.selectedIndex = i;
                              break;
                          }
                      }

                      setTimeout(() => {
                          var textToFind = SAL.UM[17];

                          var dd = document.getElementById("untmea17");
                          for (var i = 0; i < dd.options.length; i++) {
                              if (dd.options[i].text === textToFind) {
                                  dd.selectedIndex = i;
                                  break;
                              }
                          }

                          setTimeout(() => {
                              var textToFind = SAL.UM[18];

                              var dd = document.getElementById("untmea18");
                              for (var i = 0; i < dd.options.length; i++) {
                                  if (dd.options[i].text === textToFind) {
                                      dd.selectedIndex = i;
                                      break;
                                  }
                              }
                              setTimeout(() => {
                                  var textToFind = SAL.UM[19];

                                  var dd = document.getElementById("untmea19");
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
  var textToFind = SAL.UM[20];

  var dd = document.getElementById("untmea20");
  for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i;
          break;
      }
  }

  setTimeout(() => {
      var textToFind = SAL.UM[21];

      var dd = document.getElementById("untmea21");
      for (var i = 0; i < dd.options.length; i++) {
          if (dd.options[i].text === textToFind) {
              dd.selectedIndex = i;
              break;
          }
      }

      setTimeout(() => {
          var textToFind = SAL.UM[22];

          var dd = document.getElementById("untmea22");
          for (var i = 0; i < dd.options.length; i++) {
              if (dd.options[i].text === textToFind) {
                  dd.selectedIndex = i;
                  break;
              }
          }

          setTimeout(() => {
              var textToFind = SAL.UM[24];

              var dd = document.getElementById("untmea23");
              for (var i = 0; i < dd.options.length; i++) {
                  if (dd.options[i].text === textToFind) {
                      dd.selectedIndex = i;
                      break;
                  }
              }
              setTimeout(() => {
                  var textToFind = SAL.UM[25];

                  var dd = document.getElementById("untmea24");
                  for (var i = 0; i < dd.options.length; i++) {
                      if (dd.options[i].text === textToFind) {
                          dd.selectedIndex = i;
                          break;
                      }
                  }


                  setTimeout(() => {
                      var textToFind = SAL.UM[26];

                      var dd = document.getElementById("untmea25");
                      for (var i = 0; i < dd.options.length; i++) {
                          if (dd.options[i].text === textToFind) {
                              dd.selectedIndex = i;
                              break;
                          }
                      }

                      setTimeout(() => {
                          var textToFind = SAL.UM[27];

                          var dd = document.getElementById("untmea26");
                          for (var i = 0; i < dd.options.length; i++) {
                              if (dd.options[i].text === textToFind) {
                                  dd.selectedIndex = i;
                                  break;
                              }
                          }

                          setTimeout(() => {
                              var textToFind = SAL.UM[28];

                              var dd = document.getElementById("untmea27");
                              for (var i = 0; i < dd.options.length; i++) {
                                  if (dd.options[i].text === textToFind) {
                                      dd.selectedIndex = i;
                                      break;
                                  }
                              }
                              setTimeout(() => {
                                  var textToFind = SAL.UM[29];

                                  var dd = document.getElementById("untmea28");
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
  $("#txtvatcde1").val(SAL.vat_setup[0]).change();
  $("#txtvatcde2").val(SAL.vat_setup[1]).change();
  $("#txtvatcde3").val(SAL.vat_setup[2]).change();
  $("#txtvatcde4").val(SAL.vat_setup[3]).change();
  $("#txtvatcde5").val(SAL.vat_setup[4]).change();
  $("#txtvatcde6").val(SAL.vat_setup[5]).change();
  $("#txtvatcde7").val(SAL.vat_setup[6]).change();
  $("#txtvatcde8").val(SAL.vat_setup[7]).change();
  $("#txtvatcde9").val(SAL.vat_setup[8]).change();
  $("#txtvatcde10").val(SAL.vat_setup[9]).change();
  $("#txtvatcde11").val(SAL.vat_setup[10]).change();
  $("#txtvatcde12").val(SAL.vat_setup[11]).change();
  $("#txtvatcde13").val(SAL.vat_setup[12]).change();
  $("#txtvatcde14").val(SAL.vat_setup[13]).change();
  $("#txtvatcde15").val(SAL.vat_setup[14]).change();
  $("#txtvatcde16").val(SAL.vat_setup[15]).change();
  $("#txtvatcde17").val(SAL.vat_setup[16]).change();
  $("#txtvatcde18").val(SAL.vat_setup[17]).change();
  $("#txtvatcde19").val(SAL.vat_setup[18]).change();
  $("#txtvatcde20").val(SAL.vat_setup[19]).change();
  $("#txtvatcde21").val(SAL.vat_setup[20]).change();
  $("#txtvatcde22").val(SAL.vat_setup[21]).change();
  $("#txtvatcde23").val(SAL.vat_setup[22]).change();
  $("#txtvatcde24").val(SAL.vat_setup[23]).change();
  $("#txtvatcde25").val(SAL.vat_setup[24]).change();
  $("#txtvatcde26").val(SAL.vat_setup[25]).change();
  $("#txtvatcde27").val(SAL.vat_setup[26]).change();
  $("#txtvatcde28").val(SAL.vat_setup[27]).change();
  $("#txtvatcde29").val(SAL.vat_setup[28]).change();
  $("#txtvatcde30").val(SAL.vat_setup[29]).change();


}, 2000)


// for discount entry txtdiscper
setTimeout(() => {
  $("#txtdiscper1").val(SAL.discounts[0]).change();
  $("#txtdiscper2").val(SAL.discounts[1]).change();
  $("#txtdiscper3").val(SAL.discounts[2]).change();
  $("#txtdiscper4").val(SAL.discounts[3]).change();
  $("#txtdiscper5").val(SAL.discounts[4]).change();
  $("#txtdiscper6").val(SAL.discounts[5]).change();
  $("#txtdiscper7").val(SAL.discounts[6]).change();
  $("#txtdiscper8").val(SAL.discounts[7]).change();
  $("#txtdiscper9").val(SAL.discounts[8]).change();
  $("#txtdiscper10").val(SAL.discounts[9]).change();
  $("#txtdiscper11").val(SAL.discounts[10]).change();
  $("#txtdiscper12").val(SAL.discounts[11]).change();
  $("#txtdiscper13").val(SAL.discounts[12]).change();
  $("#txtdiscper14").val(SAL.discounts[13]).change();
  $("#txtdiscper15").val(SAL.discounts[14]).change();
  $("#txtdiscper16").val(SAL.discounts[15]).change();
  $("#txtdiscper17").val(SAL.discounts[16]).change();
  $("#txtdiscper18").val(SAL.discounts[17]).change();
  $("#txtdiscper19").val(SAL.discounts[18]).change();
  $("#txtdiscper20").val(SAL.discounts[19]).change();
  $("#txtdiscper21").val(SAL.discounts[20]).change();
  $("#txtdiscper22").val(SAL.discounts[21]).change();
  $("#txtdiscper23").val(SAL.discounts[22]).change();
  $("#txtdiscper24").val(SAL.discounts[23]).change();
  $("#txtdiscper25").val(SAL.discounts[24]).change();
  $("#txtdiscper26").val(SAL.discounts[25]).change();
  $("#txtdiscper27").val(SAL.discounts[26]).change();
  $("#txtdiscper28").val(SAL.discounts[27]).change();
  $("#txtdiscper29").val(SAL.discounts[28]).change();
  $("#txtdiscper30").val(SAL.discounts[29]).change();


}, 2000)



//txtdiscamt
setTimeout(() => {
  $("#txtdiscamt1").val(SAL.disc_amount[0]).change();
  $("#txtdiscamt2").val(SAL.disc_amount[1]).change();
  $("#txtdiscamt3").val(SAL.disc_amount[2]).change();
  $("#txtdiscamt4").val(SAL.disc_amount[3]).change();
  $("#txtdiscamt5").val(SAL.disc_amount[4]).change();
  $("#txtdiscamt6").val(SAL.disc_amount[5]).change();
  $("#txtdiscamt7").val(SAL.disc_amount[6]).change();
  $("#txtdiscamt8").val(SAL.disc_amount[7]).change();
  $("#txtdiscamt9").val(SAL.disc_amount[8]).change();
  $("#txtdiscamt10").val(SAL.disc_amount[9]).change();
  $("#txtdiscamt11").val(SAL.disc_amount[10]).change();
  $("#txtdiscamt12").val(SAL.disc_amount[11]).change();
  $("#txtdiscamt13").val(SAL.disc_amount[12]).change();
  $("#txtdiscamt14").val(SAL.disc_amount[13]).change();
  $("#txtdiscamt15").val(SAL.disc_amount[14]).change();
  $("#txtdiscamt16").val(SAL.disc_amount[15]).change();
  $("#txtdiscamt17").val(SAL.disc_amount[16]).change();
  $("#txtdiscamt18").val(SAL.disc_amount[17]).change();
  $("#txtdiscamt19").val(SAL.disc_amount[18]).change();
  $("#txtdiscamt20").val(SAL.disc_amount[19]).change();
  $("#txtdiscamt21").val(SAL.disc_amount[10]).change();
  $("#txtdiscamt22").val(SAL.disc_amount[11]).change();
  $("#txtdiscamt23").val(SAL.disc_amount[12]).change();
  $("#txtdiscamt24").val(SAL.disc_amount[13]).change();
  $("#txtdiscamt25").val(SAL.disc_amount[14]).change();
  $("#txtdiscamt26").val(SAL.disc_amount[15]).change();
  $("#txtdiscamt27").val(SAL.disc_amount[16]).change();
  $("#txtdiscamt28").val(SAL.disc_amount[17]).change();
  $("#txtdiscamt29").val(SAL.disc_amount[18]).change();
  $("#txtdiscamt30").val(SAL.disc_amount[19]).change();


}, 2000)

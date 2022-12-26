
    


INV = {
  warehouse: 'warehouse1',
  Date_inv: ['09/30/2019'],
  }
  

  setTimeout(() => {

    document.querySelector("#txt_info_trndte").value = INV.Date_inv;
  }, 4000)
  
  setTimeout(() => {
  
    var textToFind = INV.warehouse;
  
    var dd = document.getElementById("txt_info_warcde");
    for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
        dd.selectedIndex = i;
        break;
      }
    }
  
  }, 4000)
  



INV = {
  DocNum : ['','DMG-OUT'],
  }
  
  var counter = localStorage.getItem('data14')
  
  setTimeout(() => {
    document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
      INV.DocNum[counter]
  }, 4000)
  
  counter++
  localStorage.setItem('data14', counter)




  INV = {

   
    items: ['ITM100', 'ITM200'],
    quantity: ['120', '100'],
    price: ['20', '15'],
    vat_setup: [null],
    UM: ['CASE']
    }
    
    it = INV.items.length









  
//items

setTimeout(() => {
    $("#itmdsc1").val(INV.items[0]).change();
    $("#itmdsc2").val(INV.items[1]).change();
    $("#itmdsc3").val(INV.items[2]).change();
    $("#itmdsc4").val(INV.items[3]).change();
    $("#itmdsc5").val(INV.items[4]).change();
    $("#itmdsc6").val(INV.items[5]).change();
    $("#itmdsc7").val(INV.items[6]).change();
    $("#itmdsc8").val(INV.items[7]).change();
    $("#itmdsc9").val(INV.items[8]).change();
    $("#itmdsc10").val(INV.items[9]).change();
    $("#itmdsc11").val(INV.items[10]).change();
    $("#itmdsc12").val(INV.items[11]).change();
    $("#itmdsc13").val(INV.items[12]).change();
    $("#itmdsc14").val(INV.items[13]).change();
    $("#itmdsc15").val(INV.items[14]).change();
    $("#itmdsc16").val(INV.items[15]).change();
    $("#itmdsc17").val(INV.items[16]).change();
    $("#itmdsc18").val(INV.items[17]).change();
    $("#itmdsc19").val(INV.items[18]).change();
    $("#itmdsc20").val(INV.items[19]).change();
  
  
  }, 2000)
  

  setTimeout(() => {
    $("#txtqty1").val(INV.quantity[0]).change();
    $("#txtqty2").val(INV.quantity[1]).change();
    $("#txtqty3").val(INV.quantity[2]).change();
    $("#txtqty4").val(INV.quantity[3]).change();
    $("#txtqty5").val(INV.quantity[4]).change();
    $("#txtqty6").val(INV.quantity[5]).change();
    $("#txtqty7").val(INV.quantity[6]).change();
    $("#txtqty8").val(INV.quantity[7]).change();
    $("#txtqty9").val(INV.quantity[8]).change();
    $("#txtqty10").val(INV.quantity[9]).change();
    $("#txtqty11").val(INV.quantity[10]).change();
    $("#txtqty12").val(INV.quantity[11]).change();
    $("#txtqty13").val(INV.quantity[12]).change();
    $("#txtqty14").val(INV.quantity[13]).change();
    $("#txtqty15").val(INV.quantity[14]).change();
    $("#txtqty16").val(INV.quantity[15]).change();
    $("#txtqty17").val(INV.quantity[16]).change();
    $("#txtqty18").val(INV.quantity[17]).change();
    $("#txtqty19").val(INV.quantity[18]).change();
    $("#txtqty20").val(INV.quantity[19]).change();
  
  
  
  }, 2000)
  setTimeout(() => {


    $("#txtgroprc1").val(INV.price[0]).change();
    $("#txtgroprc2").val(INV.price[1]).change();
    $("#txtgroprc3").val(INV.price[2]).change();
    $("#txtgroprc4").val(INV.price[3]).change();
    $("#txtgroprc5").val(INV.price[4]).change();
    $("#txtgroprc6").val(INV.price[5]).change();
    $("#txtgroprc7").val(INV.price[6]).change();
    $("#txtgroprc8").val(INV.price[7]).change();
    $("#txtgroprc9").val(INV.price[8]).change();
    $("#txtgroprc10").val(INV.price[9]).change();
    $("#txtgroprc11").val(INV.price[10]).change();
    $("#txtgroprc12").val(INV.price[11]).change();
    $("#txtgroprc13").val(INV.price[12]).change();
    $("#txtgroprc14").val(INV.price[13]).change();
    $("#txtgroprc15").val(INV.price[14]).change();
    $("#txtgroprc16").val(INV.price[15]).change();
    $("#txtgroprc17").val(INV.price[16]).change();
    $("#txtgroprc18").val(INV.price[17]).change();
    $("#txtgroprc19").val(INV.price[18]).change();
    $("#txtgroprc20").val(INV.price[19]).change();
  
  }, 2000)



  

setTimeout(() => {
  var textToFind = INV.UM[0];

  var dd = document.getElementById("untmea1");
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i;
      break;
    }
  }

  setTimeout(() => {
    var textToFind = INV.UM[1];

    var dd = document.getElementById("untmea2");
    for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
        dd.selectedIndex = i;
        break;
      }
    }

    setTimeout(() => {
      var textToFind = INV.UM[2];

      var dd = document.getElementById("untmea3");
      for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i;
          break;
        }
      }

      setTimeout(() => {
        var textToFind = INV.UM[3];

        var dd = document.getElementById("untmea4");
        for (var i = 0; i < dd.options.length; i++) {
          if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
          }
        }
        setTimeout(() => {
          var textToFind = INV.UM[4];

          var dd = document.getElementById("untmea5");
          for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === textToFind) {
              dd.selectedIndex = i;
              break;
            }
          }


          setTimeout(() => {
            var textToFind = INV.UM[5];

            var dd = document.getElementById("untmea6");
            for (var i = 0; i < dd.options.length; i++) {
              if (dd.options[i].text === textToFind) {
                dd.selectedIndex = i;
                break;
              }
            }

            setTimeout(() => {
              var textToFind = INV.UM[6];

              var dd = document.getElementById("untmea7");
              for (var i = 0; i < dd.options.length; i++) {
                if (dd.options[i].text === textToFind) {
                  dd.selectedIndex = i;
                  break;
                }
              }

              setTimeout(() => {
                var textToFind = INV.UM[7];

                var dd = document.getElementById("untmea8");
                for (var i = 0; i < dd.options.length; i++) {
                  if (dd.options[i].text === textToFind) {
                    dd.selectedIndex = i;
                    break;
                  }
                }
                setTimeout(() => {
                  var textToFind = INV.UM[8];

                  var dd = document.getElementById("untmea9");
                  for (var i = 0; i < dd.options.length; i++) {
                    if (dd.options[i].text === textToFind) {
                      dd.selectedIndex = i;
                      break;
                    }
                  }
                  setTimeout(() => {
                    var textToFind = INV.UM[9];

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
  $("#txtvatcde1").val(INV.vat_setup[0]).change();
  $("#txtvatcde2").val(INV.vat_setup[1]).change();
  $("#txtvatcde3").val(INV.vat_setup[2]).change();
  $("#txtvatcde4").val(INV.vat_setup[3]).change();
  $("#txtvatcde5").val(INV.vat_setup[4]).change();
  $("#txtvatcde6").val(INV.vat_setup[5]).change();
  $("#txtvatcde7").val(INV.vat_setup[6]).change();
  $("#txtvatcde8").val(INV.vat_setup[7]).change();
  $("#txtvatcde9").val(INV.vat_setup[8]).change();
  $("#txtvatcde10").val(INV.vat_setup[9]).change();
  $("#txtvatcde11").val(INV.vat_setup[10]).change();
  $("#txtvatcde12").val(INV.vat_setup[11]).change();
  $("#txtvatcde13").val(INV.vat_setup[12]).change();
  $("#txtvatcde14").val(INV.vat_setup[13]).change();
  $("#txtvatcde15").val(INV.vat_setup[14]).change();
  $("#txtvatcde16").val(INV.vat_setup[15]).change();
  $("#txtvatcde17").val(INV.vat_setup[16]).change();
  $("#txtvatcde18").val(INV.vat_setup[17]).change();
  $("#txtvatcde19").val(INV.vat_setup[18]).change();
  $("#txtvatcde20").val(INV.vat_setup[19]).change();


}, 2000)


SRT = {
  trans_date: '07/12/2019',
  warehouse: 'warehouse1',
  Customer: 'walk-in',
  terms: 'COD',
  items: ['ITM100'],
  quantity: ['1'],
  price: ['20'],
  vat_setup: ['SAL VAT'],
  UM: ['BTL'],
  discounts: [null],
  disc_amount: '1.5'
}

console.log(SRT)
console.log(SRT.items.length)
it = SRT.items.length

setTimeout(() => {

  document.querySelector("#txttrndte").value = SRT.trans_date;
}, 4000)

setTimeout(() => {

  var textToFind = SRT.warehouse;

  var dd = document.getElementById("txtwarcde");
  for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i;
          break;
      }
  }

}, 4000)



setTimeout(() => {
  $(".searchable_modaltxtfilterer").val(SRT.Customer).change();

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
var textToFind = SRT.terms;

                    var dd = document.querySelectorAll("#txttrmcde")[0];
                    for (var i = 0; i < dd.options.length; i++) {
                        if (dd.options[i].text === textToFind) {
                            dd.selectedIndex = i;
                            break;
                        }
                      }




setTimeout(() => {
  $("#itmdsc1").val(SRT.items[0]).change();
  $("#itmdsc2").val(SRT.items[1]).change();
  $("#itmdsc3").val(SRT.items[2]).change();
  $("#itmdsc4").val(SRT.items[3]).change();
  $("#itmdsc5").val(SRT.items[4]).change();
  $("#itmdsc6").val(SRT.items[5]).change();
  $("#itmdsc7").val(SRT.items[6]).change();
  $("#itmdsc8").val(SRT.items[7]).change();
  $("#itmdsc9").val(SRT.items[8]).change();
  $("#itmdsc10").val(SRT.items[9]).change();
  $("#itmdsc11").val(SRT.items[10]).change();
  $("#itmdsc12").val(SRT.items[11]).change();
  $("#itmdsc13").val(SRT.items[12]).change();
  $("#itmdsc14").val(SRT.items[13]).change();
  $("#itmdsc15").val(SRT.items[14]).change();
  $("#itmdsc16").val(SRT.items[15]).change();
  $("#itmdsc17").val(SRT.items[16]).change();
  $("#itmdsc18").val(SRT.items[17]).change();
  $("#itmdsc19").val(SRT.items[18]).change();
  $("#itmdsc20").val(SRT.items[19]).change();


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
  $("#txtqty1").val(SRT.quantity[0]).change();
  $("#txtqty2").val(SRT.quantity[1]).change();
  $("#txtqty3").val(SRT.quantity[2]).change();
  $("#txtqty4").val(SRT.quantity[3]).change();
  $("#txtqty5").val(SRT.quantity[4]).change();
  $("#txtqty6").val(SRT.quantity[5]).change();
  $("#txtqty7").val(SRT.quantity[6]).change();
  $("#txtqty8").val(SRT.quantity[7]).change();
  $("#txtqty9").val(SRT.quantity[8]).change();
  $("#txtqty10").val(SRT.quantity[9]).change();
  $("#txtqty11").val(SRT.quantity[10]).change();
  $("#txtqty12").val(SRT.quantity[11]).change();
  $("#txtqty13").val(SRT.quantity[12]).change();
  $("#txtqty14").val(SRT.quantity[13]).change();
  $("#txtqty15").val(SRT.quantity[14]).change();
  $("#txtqty16").val(SRT.quantity[15]).change();
  $("#txtqty17").val(SRT.quantity[16]).change();
  $("#txtqty18").val(SRT.quantity[17]).change();
  $("#txtqty19").val(SRT.quantity[18]).change();
  $("#txtqty20").val(SRT.quantity[19]).change();



}, 2000)

// scroll left
document.querySelector('.vScrollTable').scrollLeft = 300;

setTimeout(() => {


  $("#txtgroprc1").val(SRT.price[0]).change();
  $("#txtgroprc2").val(SRT.price[1]).change();
  $("#txtgroprc3").val(SRT.price[2]).change();
  $("#txtgroprc4").val(SRT.price[3]).change();
  $("#txtgroprc5").val(SRT.price[4]).change();
  $("#txtgroprc6").val(SRT.price[5]).change();
  $("#txtgroprc7").val(SRT.price[6]).change();
  $("#txtgroprc8").val(SRT.price[7]).change();
  $("#txtgroprc9").val(SRT.price[8]).change();
  $("#txtgroprc10").val(SRT.price[9]).change();
  $("#txtgroprc11").val(SRT.price[10]).change();
  $("#txtgroprc12").val(SRT.price[11]).change();
  $("#txtgroprc13").val(SRT.price[12]).change();
  $("#txtgroprc14").val(SRT.price[13]).change();
  $("#txtgroprc15").val(SRT.price[14]).change();
  $("#txtgroprc16").val(SRT.price[15]).change();
  $("#txtgroprc17").val(SRT.price[16]).change();
  $("#txtgroprc18").val(SRT.price[17]).change();
  $("#txtgroprc19").val(SRT.price[18]).change();
  $("#txtgroprc20").val(SRT.price[19]).change();

}, 2000)



setTimeout(() => {
  var textToFind = SRT.UM[0];

  var dd = document.getElementById("untmea1");
  for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i;
          break;
      }
  }

  setTimeout(() => {
      var textToFind = SRT.UM[1];

      var dd = document.getElementById("untmea2");
      for (var i = 0; i < dd.options.length; i++) {
          if (dd.options[i].text === textToFind) {
              dd.selectedIndex = i;
              break;
          }
      }

      setTimeout(() => {
          var textToFind = SRT.UM[2];

          var dd = document.getElementById("untmea3");
          for (var i = 0; i < dd.options.length; i++) {
              if (dd.options[i].text === textToFind) {
                  dd.selectedIndex = i;
                  break;
              }
          }

          setTimeout(() => {
              var textToFind = SRT.UM[3];

              var dd = document.getElementById("untmea4");
              for (var i = 0; i < dd.options.length; i++) {
                  if (dd.options[i].text === textToFind) {
                      dd.selectedIndex = i;
                      break;
                  }
              }
              setTimeout(() => {
                  var textToFind = SRT.UM[4];

                  var dd = document.getElementById("untmea5");
                  for (var i = 0; i < dd.options.length; i++) {
                      if (dd.options[i].text === textToFind) {
                          dd.selectedIndex = i;
                          break;
                      }
                  }


                  setTimeout(() => {
                      var textToFind = SRT.UM[5];

                      var dd = document.getElementById("untmea6");
                      for (var i = 0; i < dd.options.length; i++) {
                          if (dd.options[i].text === textToFind) {
                              dd.selectedIndex = i;
                              break;
                          }
                      }

                      setTimeout(() => {
                          var textToFind = SRT.UM[6];

                          var dd = document.getElementById("untmea7");
                          for (var i = 0; i < dd.options.length; i++) {
                              if (dd.options[i].text === textToFind) {
                                  dd.selectedIndex = i;
                                  break;
                              }
                          }

                          setTimeout(() => {
                              var textToFind = SRT.UM[7];

                              var dd = document.getElementById("untmea8");
                              for (var i = 0; i < dd.options.length; i++) {
                                  if (dd.options[i].text === textToFind) {
                                      dd.selectedIndex = i;
                                      break;
                                  }
                              }
                              setTimeout(() => {
                                  var textToFind = SRT.UM[8];

                                  var dd = document.getElementById("untmea9");
                                  for (var i = 0; i < dd.options.length; i++) {
                                      if (dd.options[i].text === textToFind) {
                                          dd.selectedIndex = i;
                                          break;
                                      }
                                  }
                                  setTimeout(() => {
                                      var textToFind = SRT.UM[9];

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
  $("#txtvatcde1").val(SRT.vat_setup[0]).change();
  $("#txtvatcde2").val(SRT.vat_setup[1]).change();
  $("#txtvatcde3").val(SRT.vat_setup[2]).change();
  $("#txtvatcde4").val(SRT.vat_setup[3]).change();
  $("#txtvatcde5").val(SRT.vat_setup[4]).change();
  $("#txtvatcde6").val(SRT.vat_setup[5]).change();
  $("#txtvatcde7").val(SRT.vat_setup[6]).change();
  $("#txtvatcde8").val(SRT.vat_setup[7]).change();
  $("#txtvatcde9").val(SRT.vat_setup[8]).change();
  $("#txtvatcde10").val(SRT.vat_setup[9]).change();
  $("#txtvatcde11").val(SRT.vat_setup[10]).change();
  $("#txtvatcde12").val(SRT.vat_setup[11]).change();
  $("#txtvatcde13").val(SRT.vat_setup[12]).change();
  $("#txtvatcde14").val(SRT.vat_setup[13]).change();
  $("#txtvatcde15").val(SRT.vat_setup[14]).change();
  $("#txtvatcde16").val(SRT.vat_setup[15]).change();
  $("#txtvatcde17").val(SRT.vat_setup[16]).change();
  $("#txtvatcde18").val(SRT.vat_setup[17]).change();
  $("#txtvatcde19").val(SRT.vat_setup[18]).change();
  $("#txtvatcde20").val(SRT.vat_setup[19]).change();


}, 2000)


//

// for discount entry txtdiscper
setTimeout(() => {
  $("#txtdiscper1").val(SRT.discounts[0]).change();
  $("#txtdiscper2").val(SRT.discounts[1]).change();
  $("#txtdiscper3").val(SRT.discounts[2]).change();
  $("#txtdiscper4").val(SRT.discounts[3]).change();
  $("#txtdiscper5").val(SRT.discounts[4]).change();
  $("#txtdiscper6").val(SRT.discounts[5]).change();
  $("#txtdiscper7").val(SRT.discounts[6]).change();
  $("#txtdiscper8").val(SRT.discounts[7]).change();
  $("#txtdiscper9").val(SRT.discounts[8]).change();
  $("#txtdiscper10").val(SRT.discounts[9]).change();
  $("#txtdiscper11").val(SRT.discounts[10]).change();
  $("#txtdiscper12").val(SRT.discounts[11]).change();
  $("#txtdiscper13").val(SRT.discounts[12]).change();
  $("#txtdiscper14").val(SRT.discounts[13]).change();
  $("#txtdiscper15").val(SRT.discounts[14]).change();
  $("#txtdiscper16").val(SRT.discounts[15]).change();
  $("#txtdiscper17").val(SRT.discounts[16]).change();
  $("#txtdiscper18").val(SRT.discounts[17]).change();
  $("#txtdiscper19").val(SRT.discounts[18]).change();
  $("#txtdiscper20").val(SRT.discounts[19]).change();


}, 2000)



//txtdiscamt
setTimeout(() => {
  $("#txtdiscamt1").val(SRT.disc_amount[0]).change();
  $("#txtdiscamt2").val(SRT.disc_amount[1]).change();
  $("#txtdiscamt3").val(SRT.disc_amount[2]).change();
  $("#txtdiscamt4").val(SRT.disc_amount[3]).change();
  $("#txtdiscamt5").val(SRT.disc_amount[4]).change();
  $("#txtdiscamt6").val(SRT.disc_amount[5]).change();
  $("#txtdiscamt7").val(SRT.disc_amount[6]).change();
  $("#txtdiscamt8").val(SRT.disc_amount[7]).change();
  $("#txtdiscamt9").val(SRT.disc_amount[8]).change();
  $("#txtdiscamt10").val(SRT.disc_amount[9]).change();
  $("#txtdiscamt11").val(SRT.disc_amount[10]).change();
  $("#txtdiscamt12").val(SRT.disc_amount[11]).change();
  $("#txtdiscamt13").val(SRT.disc_amount[12]).change();
  $("#txtdiscamt14").val(SRT.disc_amount[13]).change();
  $("#txtdiscamt15").val(SRT.disc_amount[14]).change();
  $("#txtdiscamt16").val(SRT.disc_amount[15]).change();
  $("#txtdiscamt17").val(SRT.disc_amount[16]).change();
  $("#txtdiscamt18").val(SRT.disc_amount[17]).change();
  $("#txtdiscamt19").val(SRT.disc_amount[18]).change();
  $("#txtdiscamt20").val(SRT.disc_amount[19]).change();


}, 2000)










localStorage.setItem("data1", 0);
    let  listData = [
                        
        '',
        'SRT-0002',
        'SRT-0003',
        'SRT-0004',

            ]

            

            var counter= localStorage.getItem("data1");
            setTimeout(() => 

            { 
            document.querySelector("#txt_pager_qsearch").value = listData[counter];
            },4000)
        
            
            counter++;
            localStorage.setItem("data1",counter);







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

        

        var counter= localStorage.getItem("data1");
        setTimeout(() => 

        { 
        document.querySelector("#txttrndte").value = listData[counter];
        },4000)
        setTimeout(() => 

        { 
        document.querySelector("#txtwarcde").value = listData1[counter];
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
                    
    

                    // for discount entry
                    let x = document.querySelectorAll(".input.cla_detnum.regex-numericwithperiodslash");                    
                    let discounts = [10,20,30,40,50];                    
                    x.forEach((data,index) => 
                     {
                        //let n = Math.floor(Math.random()* discounts.length);
                        //data.value = discounts[n]
                        
                        (index == 1) ? data.value = discounts[0] : false;
                        (index == 3) ? data.value = discounts[1] : false;
                        (index == 5) ? data.value = discounts[2] : false;
                        (index == 7) ? data.value = discounts[3] : false;
                        (index == 9) ? data.value = discounts[4] : false;

                        
                        
                     })

                    

                    for (var i=0; i<x.length; i++){
                    
                      var li =  x[0].value = 10; 
                      var li1 =  x[3].value = 50;
                      var li2 =  x[5].value = 30;
                      var li3 =  x[7].value = 30;
                
                    
                    };

                   
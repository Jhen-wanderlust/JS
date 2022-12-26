


//Partner A donated 2000 Cans of Sprite for P15.75 per can


let  listData = [
    'ITM300',
    'ITM302',
    'ITM304'
 
  
          ]
  
          setTimeout(() => 
                
     {   
  
                   
       document.querySelector('#add_btn').click();
       // open the page
              
            setTimeout(() => 
                
            { 
  
                                let listExistngData = [];  // Array In which we'll store existing data of list
  
                                document.querySelectorAll('#datatable tr td').forEach((data) => 
                                  {  // tds only under #datatable tr
                                      (data.id == 'itmdsc') ? listExistngData.push(data.innerText) : false ;  
                                       // If any td have this id only then insert its text in array
                                  })  
  
                                  let counter1 = 0;
                             
                                  setInterval(() =>
                                    {
                                      // if condition matches then add that text else try next text
                                      if(!listExistngData.includes(listData[counter1]))
                                        { 
                                            document.querySelector('#txt_info_itmdsc').value = listData[counter1];
                                          setTimeout(() => {   document.querySelectorAll('.ui-dialog-buttonset')[1].querySelectorAll('button')[0].click();   },2000)  
                                        }
                                       else 
                                        {
                                           counter1++;
                                        }                                         
  
  
                                    },2000)
  
            },2000)
  },2000)
          
localStorage.setItem("data", 0);



let  listData1 = [ //Item Type
                                                    
    '',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY'
  
  
  
        ]

        let  listData2 = [ //Classification
          
            '',
          'Beverages',
          'Beverages',
          'Beverages'
          
          

        ]

        let  listData3 = [ //Brand
  
          
            '',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola'
          
          
        ]



        let  listData4 = [ //warehouse
          
          
            '',
          'warehouse1',
          'warehouse1',
          'warehouse1'
        
        ]

        let  listData5 = [ //U/M 
            '',
            'CAN',
            'CAN',
            'CAN'
            
          

        ]

        let  listData6 = [ //Unit Cost (BTL)
          
            '',
          '20',
          '20',
          '20'
          

        ]

        let  listData7 = [ // Selling Price (BTL)
          
            '',
            '25',
            '25',
            '25'
            
          

        ]
        let  listData8 = [ // Re-order Level
            '',
            '501',
            '502',
            '503'
            

        ]

     
        
   try{
      var message = document.querySelectorAll(".section_title")[0];
      message.innerHTML = "";
         
        var counter= localStorage.getItem("data");

                    setTimeout(() => 

                                              { 
                                          var textToFind =  listData1[counter];

                                          var dd = document.getElementById('txt_info_itmtyp');
                                          for (var i = 0; i < dd.options.length; i++) {
                                              if (dd.options[i].text === textToFind) {
                                                  dd.selectedIndex = i;
                                                  break;
                                              }
                                          }
                    },2000)
                    
                    setTimeout(() => 

                                              { 
                                          var textToFind =  listData2[counter];

                                          var dd = document.getElementById('txt_info_itmclacde');
                                          for (var i = 0; i < dd.options.length; i++) {
                                              if (dd.options[i].text === textToFind) {
                                                  dd.selectedIndex = i;
                                                  break;
                                              }
                                          }
                    },2000)

                    setTimeout(() => 

                                              { 
                                          var textToFind =  listData3[counter];

                                          var dd = document.getElementById('txt_info_brncde');
                                          for (var i = 0; i < dd.options.length; i++) {
                                              if (dd.options[i].text === textToFind) {
                                                  dd.selectedIndex = i;
                                                  break;
                                              }
                                          }
                    },2000)

                   
                          setTimeout(() => 

                                              { 
                                          var textToFind =  listData4[counter];

                                          var dd = document.getElementById('txt_info_warcde');
                                          for (var i = 0; i < dd.options.length; i++) {
                                              if (dd.options[i].text === textToFind) {
                                                  dd.selectedIndex = i;
                                                  break;
                                              }
                                          }
                    },2000)
                         
                         
                         
                         
                          setTimeout(() => 

                          { 
                          document.querySelector("#txt_info_untmea1").value = "";
                          document.querySelector("#txt_info_untcst").value = "";
                          document.querySelector("#txt_info_untprc").value = "";
                          document.querySelector("#txt_info_crilvl").value = "";

                          },2000)
                          setTimeout(() => 

                          { 
                          document.querySelector("#txt_info_untmea1").value  = listData5[counter];
                          document.querySelector("#txt_info_untcst").value  = listData6[counter];
                          document.querySelector("#txt_info_untprc").value  = listData7[counter];
                          document.querySelector("#txt_info_crilvl").value  = listData8[counter];

                          },3000)
                          setTimeout(() => 

                          { 
                            document.querySelector("#rdo_trd").checked = true;
                          },6000)
                          
                         
                    
                          
                          
                          counter++;
                          
                          localStorage.setItem("data",counter);


             }  

             catch(err) {
              message.innerHTML = "Error: " + err + ".";
            }
                                                              setTimeout(() => 
                                    
                                                                    { 
                                    
                                                                      document.getElementsByName('btnsave')[0].click();
                                                                      
                                                                    },2000)
                                                                        setTimeout(() => 
                                    
                                                                                  {
                                    
                                                                                  document.querySelector('.ajs-button.print').click();
                                                                                    
                                                                        
                                                                                  },2000)
                                                                    



// inventory transaction type

localStorage.setItem("data1", 0);
let  listData = [
                      
         '',
        'INCOMING',
        'OUTCOMING',
        'INCOMING',
        'INCOMING'

        ]

        

        var counter= localStorage.getItem("data1");
        setTimeout(() => 

        { 
        document.querySelectorAll(".searchable_modaltxtfilterer")[0].value = listData[counter];
        },4000)
       
           
        counter++;
        localStorage.setItem("data1",counter);



        // date
        localStorage.setItem("date", 0);
       
                
                let  listData1 = [
                              
                    '',
                    '9-19-2021'
        
            
                    ]
                    var counterdate= localStorage.getItem("date");
        setTimeout(() => 

        { 
    document.querySelectorAll("#txt_info_trndte")[0].value = listData1[counterdate];
     },3000)

    counterdate++;
    localStorage.setItem("date",counterdate);


    // click next tp







// for I/C
    var x = document.querySelectorAll(".input.cla_chkic");
    var myarray = []   //assigning them to the variable x. Then we create an array variable

    //loop over all the “a” elements in x, and for each element,
    for (var i=0; i<x.length; i++){
    var Item = x[1].value = "I";

    myarray.push([Item]);
    };


    //select item in inventory and search 


localStorage.setItem("data", 0);
let  listData = [
'',
'ITM99',
'ITM100',
'ITM200',
'ITM252',
'ITM310',
'ITM312',
'ITM314',
'ITM316',
'ITM320',
'ITM322',
'ITM324',
'ITM400',
'ITM402',
'ITM500',
'ITM501',
'ITM502',
'ITM300',
'ITM302',
'ITM304'
 
  
          ]
  
     
                   
    
            
                            
                             
                 var counter1= localStorage.getItem("data");
                                  setInterval(() =>
                                    {
                                      // if condition matches then add that text else try next text
                                      
                                        document.querySelector('#pager_search_input').value = listData[counter1];
                                          setTimeout(() => {   document.querySelector('#pager_search_btn').click();   },4000)  
                                          
                    
  
                                    },2000)
  
            
                                    counter1++;
                                    localStorage.setItem("data",counter1);

            setTimeout(() => {   document.querySelector('#edit_btn').click();   },4000) 

                                        
                                          setTimeout(() => {  
                                            setTimeout(() => 
                                            
                                            { 
                                              document.querySelector("#txt_info_multium").checked=false;
                                            
                                            },8000)
                                           },4000) 




// items


localStorage.setItem("item", 0);
       
                
let  listData1 = [
              
  '',
  'ITM3040'
   
    ]
    var counteritem= localStorage.getItem("item");

    setTimeout(() => 

    { 
    $("#itmdsc2").val(listData1[counteritem]).change();


      },2000)



counteritem++;
localStorage.setItem("item",counteritem);


//click the autocomplete
setTimeout(() => 

                        { 
                          document.querySelectorAll(".ui-menu-item")[2].click();


                          },2000)




localStorage.setItem("Qty_prices", 0);
       
                
let  listData1 = [
              
  '',
  '2000'
   
    ]

    let  listData2 = [
              
      '',
      '15.75'
       
        ]


var counter= localStorage.getItem("Qty_prices");

setTimeout(() => 

{ 
document.querySelectorAll("#txtqty2")[0].value = listData1[counter];
},2000)

//txtuntprc2

setTimeout(() => 

{ 
document.querySelectorAll("#txtuntprc2")[0].value =listData2[counter] ;
},2000)


counter++;
localStorage.setItem("Qty_prices",counter);
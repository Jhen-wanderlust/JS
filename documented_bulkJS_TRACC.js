let listData = '';
fetch("https://random-words5.p.rapidapi.com/getMultipleRandom?count=5", 
  {
	  "method"  : "GET",
	  "headers" : 
         {
		        "x-rapidapi-host" : "random-words5.p.rapidapi.com",
		        "x-rapidapi-key"  : "6380941e96msh759d45d28810a94p1e90a5jsnee97fc4ccaad"
	       }
  })
  .then(response => response.json())
  .then(data =>  
         {
           listData = data
         })

let listExistngData = [];  // Array In which we'll store existing data of list

document.querySelectorAll('#datatable tr td').forEach((data) => // if td is greater than length 2? 
   {
      (data.innerText.length > 2) ? listExistngData.push(data.innerText) : false ;  
   })  

listExistngData.forEach((data) => 
   {
   
             listData.includes(data) ? console.log(`${data} Is already in List`) : console.log(`${data} Is not in List`);
   })



setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_brndsc").value = listData[0];
                           // this will always give 0? no will give all 
                           // no right now getRand will give 0 because its 0 yes for first iterate
                           val1 = document.querySelector("#txt_brndsc").value; //  itlet us try that if it works or not simple
                           // i understand may be you wanted to do if(val1 === listData[getRand]) ? noooo it works fine ok but that condition is useless this will always meet 
                           if (val1 == "undefined") {
                             document.querySelectorAll('.ui-state-default')[2].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-state-default')[3].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                     setTimeout(() =>   {
                                                            document.querySelectorAll('.ui-state-default')[2].click();// close button
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)       
              

  //item class
let getRand = localStorage.getItem("getRandom");

let  listData = [
            'Beverages',
            'Alcohol',
            'Energy Drink',
            'Water'
            
    
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_itmclacde").value = listData[getRand ];
                           val1 = document.querySelector("#txt_itmclacde").value; 
                           if (val1 == "undefined") {
                             document.querySelectorAll('.ui-state-default')[4].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.ui-state-hover')[0].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      
                                                        setTimeout(() =>   {
                                                            document.querySelectorAll('.ui-state-default')[4].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)       
              

  //terms


  localStorage.setItem("getRandom", 0);
  localStorage.setItem("getRandom1", 0);
  

  // tree to write tree like code. it looks good and make feels other you are experienced
   let getRand = localStorage.getItem("getRandom");
  let getRand1 = localStorage.getItem("getRandom1");
  
  let  listData = [
                        'COD',
                    '30 Days',
                    '45 Days',
                    '60 Days'        
                  ]
  
// for shorter arrays its ok inline                  
let  listData1 = ['0', '30', '45', '60']
  
setTimeout( () =>
  
    { 
  
            document.querySelector('#add_btn').click();
            setTimeout(() => 
  
                          { 
                             document.querySelector("#txt_info[trmdsc]").value = listData[getRand ];
                              document.querySelector("#txt_info_trmday").value = listData1[getRand1 ];
                             val1 = document.querySelector("#txt_info[trmdsc]c").value; 
                            
                             if (val1 == "undefined") {
                               document.querySelectorAll('.ui-state-default')[2].click(); //close
                             }
                             else {
                             setTimeout(() => 
  
                                   { 
  // alos this code for same work? yes but so much entry this code also for same page? no diffrent
                                       document.querySelectorAll('.ui-state-default')[3].click(); //save
                                       setTimeout(() => 
  
                                                {
  
                                                  document.querySelector('.ajs-button.print').click(); //ok btn
                                                  localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                  localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                          if (val1 === val1) // for existing data
                                                          setTimeout(() =>   {
                                                              document.querySelectorAll('.ui-state-default')[2].click(); //close
                                                          },2000)
                                                },2000)
  
                                   },2000)
                             }     
                          },2000)
    },6000)       
                
   //memo type


   
localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0); // for GL

let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2"); // for GL

let  listData = [
            'ADV FR CUST',
            'ADV TO SUPP',
            'DELIVERY FEE',
            'FURN FIXT',
            'PURCH DISCT',
            'PRICE ADJUSTMENT',
            'SALES DISCT',
            'REP MAINT',
            'UTILITIES',
            'VAT PAYABLE'
            
                ]


                let  listData1 = [
                  'Payables',
                  'Receivables',
                  'Payables',
                  'Payables',
                  'Payables',
                  'Payables',
                  'Receivables',
                  'Payables',
                  'Payables',
                  'Payables'
                  
                      ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_memtypdsc ").value = listData[getRand ];
                           document.querySelector("#txt_trantype cla_input").value = listData1[getRand1];
                           val1 = document.querySelector("#txt_memtypdsc").value; 
                           if (val1 == "undefined") {
                             document.querySelectorAll('.ui-state-default')[4].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.ui-state-hover')[0].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand) + 1);
                                                        if (val1 === val1) // for existing data
                                                        setTimeout(() =>   {
                                                            document.querySelectorAll('.ui-state-default')[4].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)      



  //chart of accounts


localStorage.setItem("getRandom", 0);
localStorage.setItem("getRandom1", 0);
localStorage.setItem("getRandom2", 0); 
localStorage.setItem("getRandom3", 0); 
let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2"); 
let getRand3 = localStorage.getItem("getRandom3"); 

let  listData = [
  'A-00010',
  'A-00010-01',
  'A-00010-05',
  'A-00010-10',
  'A-00010-20',
  'A-00020',
  'A-00030',
  'A-00034',
  'A-00035',
  'A-00040',
  'A-00041',
  'A-00042',
  'A-00045',
  'R-00010',
  'R-00020',
  'R-00040',
  'R-00050',
  'R-00060',
  'C-00010',
  'C-00010-01',
  'C-00010-02',
  'C-00010-03'
  

  
            
                ]


                let  listData1 = [
                
                  'Cash',
'Petty Cash',
'Cash on Hand',
'CIB-BDO-SA-2265',
'CIB-BDO-CA-1969',
'Checks on hand',
'Accounts Receivable',
'Advances to Employees',
'Advances to Supplier',
'VAT Input',
'Pre-paid EWT',
'Pre-paid EVAT',
'Pre-paid Insurance',
'Pre-paid Rent',
'Rental Deposit',
'Inventory',
'Inventory-Alcohol',
'Inventory-Beverages',
'Inventory-Energy Drink',
'Inventory-Water',
'Office Supplies',
'Furniture & Fixtures',
'Equipment',


                  
                      ]


                      let  listData2 = [
                      
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Current Assets',
                        'Revenue',
                        'Revenue',
                        'Revenue',
                        'Revenue',
                        'Revenue',
                        'Cost of Goods',
                        'Cost of Goods',
                        'Cost of Goods',
                        
                        
                            ]

                            let  listData3 = [
                      
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              'A-00070'
                              
                              
                                  ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_actcde").value = listData[getRand ];
                           document.querySelector("#txt_actdsc").value = listData1[getRand1];
                          document.querySelector("#acctyp").value = listData2[getRand2];
                           document.querySelector('#txt_pacc').value = listData3[getRand3];
                           document.querySelector("#txt_cacc").value = "E-00010";

         
         
                           val1 = document.querySelector("#txt_actcde").value; 
                           if (val1 == "undefined") {
                             document.querySelectorAll('.ui-state-default')[4].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.ui-state-hover')[0].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                                                localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                                                localStorage.setItem("getRandom3", parseInt(getRand3) + 1);
                                                        if (val1 === val1) // for existing data
                                                        setTimeout(() =>   {
                                                            document.querySelectorAll('.ui-state-default')[4].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)      

//bank account 


let getRand = localStorage.getItem("getRandom");

let  listData = [
            'Beverages',
            'Alcohol',
            'Energy Drink',
            'Water'
            
    
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txt_itmclacde").value = listData[getRand ];
                           val1 = document.querySelector("#txt_itmclacde").value; 
                           if (val1 == "undefined") {
                             document.querySelectorAll('.ui-state-default')[4].click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.ui-state-hover')[0].click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                        if (val1 === val1) // for existing data
                                                        setTimeout(() =>   {
                                                            document.querySelectorAll('.ui-state-default')[4].click();
                                                        },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)
  },6000)       
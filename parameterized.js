localStorage.setItem('data7', 0)
//separate

var dataset = [
    'Sales',
    'Implementation',
     'Programmer'
]

var counter = localStorage.getItem('data7')

document.querySelector('ID').value = '{dataset[counter]}'; 

counter++
localStorage.setItem('data7', counter)





let  listData = [
    'Deduction'
   
          ]

setTimeout( () =>

{ 

    document.querySelector('#add_btn').click();



    setTimeout(() => 

                  { 
                    ;(function() {

                      // TaxClass
                            var TaxData = [
                             
                              'NT',
                              'DT'
                              
                            ]
                            let genData = TaxData[Math.floor(Math.random() * TaxData.length)]
                             document.getElementById("txtclass").value = genData;


                    })();


                      document.querySelector("#txtdesc").value = listData[0];
                      
                   
                            setTimeout(() => {
                                
                                document.querySelector('#btn_Save').click();
                                
                                    document.querySelector('.ajs-button.print').click();
                              
                            }, 4000);
                       
                          setTimeout(() =>   {
                              document.querySelector("#btn_close").click();
                            },4000)
                  },4000)


},6000)       


/***Loan Allowance
Transpo
Meal
Load */


let getRand = localStorage.getItem("getRandom");

let  listData = [
          'Loan Allowance',
          'Transpo',
          'Meal',
          'Load'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txtdesc").value = listData[getRand ];
                           val1 = document.querySelector("#txtdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_close").click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_Save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                                }       
                        },2000)


  },6000)       
                  



  
let getRand = localStorage.getItem("getRandom");

let  listData = [
          'Loan Allowance',
          'Transpo',
          'Meal',
          'Load'
                ]

setTimeout( () =>

  { 

          document.querySelector('#pager_default_add').click();
          setTimeout(() => 

                        { 
                           document.querySelector("#txtdesc").value = listData[getRand ];
                           val1 = document.querySelector("#txtdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_close").click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_Save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                                }       
                        },2000)


  },6000)       
             
  


let getRand = localStorage.getItem("getRandom");

let  listData = [
           
           
            'Salary Adjustment'
          
                ]

setTimeout( () =>

  { 

          document.querySelector('#add_btn').click();
          setTimeout(() => 

                        { 


                          ;(function() {

                            // TaxClass
                                  var TaxData = [
                                    'BAS',
                                    'DM',
                                    'HP',
                                    'NT',
                                    'REG',
                                    'SUP'
                                  ]
                                  let genData = TaxData[Math.floor(Math.random() * TaxData.length)]
                                   document.getElementById("txtclass").value = genData;


                        })();


                           document.querySelector("#txtdesc").value = listData;
                           val1 = document.querySelector("#txtdesc").value; 
                           if (val1 == "undefined") {
                             document.querySelector("#btn_close").click();
                           }
                           else {
                           setTimeout(() => 

                                 { 

                                     document.querySelector('#btn_Save').click();
                                     setTimeout(() => 

                                              {

                                                document.querySelector('.ajs-button.print').click();
                                                localStorage.setItem("getRandom", parseInt(getRand) + 1);
                                                      if (val1 === val1) // for existing data
                                                      setTimeout(() =>   {
                                                        document.querySelector("#btn_close").click();
                                                      },2000)
                                              },2000)

                                 },2000)
                           }     
                        },2000)


  },6000)       
                  
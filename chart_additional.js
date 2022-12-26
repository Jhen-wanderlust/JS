let getRand = localStorage.getItem("getRandom");
let getRand1 = localStorage.getItem("getRandom1");
let getRand2 = localStorage.getItem("getRandom2"); 
let getRand3 = localStorage.getItem("getRandom3"); 

let  listData = [
    'A-00010-03',
    'A-00010-04',
    'A-00030-01',
    'A-00040-01',
    'A-00040-02',
    'A-00040-03',
    'A-00053',
    'A-00054',
    'A-00060',
    'A-00061',
    'R-00070',
    'R-00090',
    'C-00010-10',
    'C-00019',
    'X-00029-01',
    'X-00029-02',
    'X-00062',
    'X-00090',
    'X-00100'
    
  

  
  
                ]


                let  listData1 = [
                
                    'Cash in Bank-BDO-SA-2265',
                    'Cash in Bank-BDO-CA-1969',
                    'Accounts Receivable-Trade',
                    'Iinventory-Alcohol Drinks',
                    'Inventory-Beverage Drinks',
                    'Inventory-Energy Drinks',
                    'PREPAID EWT',
                    'PREPAID EVAT',
                    'FURNITURE AND FIXTURES',
                    'Accum. Depreciation-Furniture and Fixture',
                    'BANK INTEREST',
                    'OTHER INCOME',
                    'CGS-Supplies',
                    'Inventory Gain/Loss',
                    'Office Supplies',
                    'Cleaning and Pantry Supplies',
                    'FUEL, PARKING AND TOLL FEES',
                    'REGISTRATIONS, FEES AND LICENSES',
                    'MISCELLANEOUS EXPENSE',
                    
                  

                  
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
                        'Revenue',
                        'Revenue',
                        'Cost of Goods',
                        'Cost of Goods',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense',
                        'Expense'
                        
                            ]

                            let  listData3 = [
                      
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null
                                

                          
                                  ]

                             
                            

setTimeout( () =>

    { 

          document.querySelector('#add_btn').click();
        

        setTimeout(() => 

                           { 
                           
                           document.querySelector("#txt_actcde").value = listData[getRand];
                           document.querySelector("#txt_actdsc").value = listData1[getRand1];
                          
                           
                           setTimeout(() => 

                           { 

                            $("#acctyp").val(listData2[getRand2]).change(); 

                           },2000)
                          setTimeout(() => 

                           { 
                           document.querySelector('#txt_pacc').value = listData3[getRand3];
                           },2000)
                           
                           localStorage.setItem("getRandom", parseInt(getRand) + 1);
                           localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                           localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                           localStorage.setItem("getRandom3", parseInt(getRand3) + 1);
                      

                                          
                    },2000)               
    },6000)               
              


    setTimeout(() => 

    { 
    var xi = document.querySelector('#acctyp').value;
    var x = document.querySelector("#txt_cacc");

    if (xi == 'Revenue' || xi == 'Expense' ) {

      x.value = "E-00010";
      
    }  else if (xi == 'Cost of Goods') {

      x.value = "E-00010";

    }else{
          false;
    }
     
  },2000) 
   



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
  'A-00046',
  'A-00047',
  'A-00070',
  'A-00070-01',
  'A-00070-02',
  'A-00070-03',
  'A-00070-04',
  'A-00100',
  'A-00200',
  'A-00210',
  'A-00300',
  'A-00990',
  'L-00010',
  'L-00010-01',
  'L-00010-02',
  'L-00020',
  'L-00040',
  'L-00050',
  'L-00200',
  'E-00010',
  'E-00015',
  'E-00020',
  'E-00030',
  'R-00010',
  'R-00020',
  'R-00040',
  'R-00050',
  'R-00060',
  'C-00010',
  'C-00010-01',
  'C-00010-02',
  'C-00010-03',
  'C-00020',
  'C-00030',
  'C-00050',
  'X-00010',
  'X-00020',
  'X-00030',
  'X-00030-01',
  'X-00030-02',
  'X-00030-03',
  'X-00030-03-01',
  'X-00340',
  'X-00350',
  'X-00410',
  'X-00420',
  'X-00500',
  'X-00510',
  'X-00520',
  'X-00540',
  'X-00990'
  

  
  
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
                  'Depreciation',
                  'Goodwill',
                  'Accounts Payable',
                  'Accounts Payable-Trade',
                  'Advances from Customer',
                  'Output VAT',
                  'EWT Payable',
                  'EVAT Payable',
                  'Advances from Subsidiaries',
                  'Retained Earnings',
                  'Prior Year Adjustments',
                  'Capital, Partner A',
                  'Capital, Partner B',
                  'SALES',
                  'Service Revenue',
                  'Interest Income',
                  'Inventory Gain',
                  'Purchase Discounts',
                  'Cost of Goods Sold',
                  'CGS-Alcohol',
                  'CGS-Beverages',
                  'CGS-Water',
                  'Sales Discount',
                  'Sales Return',
                  'Inventory Loss',
                  'Salaries',
                  'Rental',
                  'Utilities',
                  'Electricity ',
                  'Water ',
                  'Communication ',
                  'Telephone',
                  'Transportation ',
                  'Supplies',
                  'Bank Charges',
                  'Delivery Charge',
                  'Repairs & Maintenance',
                  'Meals & Representation',
                  'Insurance',
                  'Depreciation',
                  'Miscellaneous'
                  

                  
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
                          'Current Assets',
                          'Current Assets',
                          'Current Assets',
                          'Current Assets',
                          'Current Assets',
                          'Current Assets',
                          'Current Assets',
                          'Current Assets',
                          'Fixed Assets',
                          'Fixed Assets',
                          'Fixed Assets',
                          'Other Assets',
                          'Current Liabilities',
                          'Current Liabilities',
                          'Current Liabilities',
                          'Current Liabilities',
                          'Current Liabilities',
                          'Current Liabilities',
                          'Other Liabilities',
                          'Equity',
                          'Equity',
                          'Equity',
                          'Equity',
                          'Revenue',
                          'Revenue',
                          'Revenue',
                          'Revenue',
                          'Revenue',
                          'Cost of Goods',
                          'Cost of Goods',
                          'Cost of Goods',
                          'Cost of Goods',
                          'Cost of Goods',
                          'Cost of Goods',
                          'Cost of Goods',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense',
                          'Expense'

                            ]

                            let  listData3 = [
                      
                              '',
                              'A-00010',
                              'A-00010',
                              'A-00010',
                              'A-00010',
                              'A-00010',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              'A-00070',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              'C-00010',
                              'C-00010',
                              'C-00010',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              'X-00030',
                              'X-00030',
                              'X-00030',
                              'X-00030-03',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              '',
                              ''

                          
                                  ]

                             
                            

setTimeout( () =>

    { 


        setTimeout(() => 

                           { 
                           
                           document.querySelector("#txt_actcde").value = listData[getRand];
                           document.querySelector("#txt_actdsc").value = listData1[getRand1];
                            $("#txt_acctyp").val(listData2[getRand2]).change(); 
                           document.querySelector('#txt_pacc').value = listData3[getRand3];
                         
                           
                           localStorage.setItem("getRandom", parseInt(getRand) + 1);
                           localStorage.setItem("getRandom1", parseInt(getRand1) + 1);
                           localStorage.setItem("getRandom2", parseInt(getRand2) + 1);
                           localStorage.setItem("getRandom3", parseInt(getRand3) + 1);
                      

                                          
                    },8000)               
    },6000)               
              
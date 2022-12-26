
//customer 

setTimeout(() => {
    textToFind = '60 Days';

    var dd = document.getElementById("txttrmcde");
    for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i;
            break;
        }
    }   


    document.querySelector('#txtprccde').value = 'Price List1';

         document.querySelector('#txtsleman').value = 'John Diaz';

}, 4000);





salesman = document.querySelector('#txtsleman').value;
terms =  document.querySelectorAll('#txttrmcde option')[2].innerText;
pricelist = document.querySelector('#txtprccde').value;


salesman = salesman;
localStorage.setItem("salesman", salesman);

terms = terms;
localStorage.setItem("terms", terms);

pricelist = pricelist;
localStorage.setItem("pricelist", pricelist);

// on transaction 


let me = document.querySelector('#txtremarks');
let  txttrmcde =  document.querySelectorAll('#txttrmcde option')[2].innerText;
txttrmcde = txttrmcde;

let terms = localStorage.getItem("terms"); 
((txttrmcde) === terms) ? me.value = 'Matching Value!' : me.value = 'Terms value is not matching'; 


//gettext remarks display 
let me = document.querySelector('#txtremarks');
let  txtsleman =  document.querySelector("#txtsleman").value;
txtsleman = txtsleman;

let salesman = localStorage.getItem("salesman"); 
((txtsleman) === salesman) ? me.value = 'Matching Value!' : me.value = 'Salesman value is not matching'; 

//gettext remarks display 
let me = document.querySelector('#txtremarks');
let  txtprccde =  document.querySelector("#txtprccde").value;
txtprccde = txtprccde;

let pricelist = localStorage.getItem("pricelist"); 
((txtprccde) === pricelist) ? me.value = 'Matching Value!' : me.value = 'Pricelist value is not matching'; 


//gettext remarks display 


item_sales = document.querySelector("#txt_info_sal_taxcde").value;
item_sales = item_sales;
localStorage.setItem("item_sales", item_sales);


let me = document.querySelector('#txtremarks');
let  sales_vat =  document.querySelector("#txtvatcde1").value;
sales_vat = sales_vat;
let item_sales = localStorage.getItem("item_sales"); 
((sales_vat) === item_sales) ? me.value = 'Matching Value!' : me.value = 'Vat sales value is not matching';  






//end

item_purch = document.querySelector("#txt_info_pur_taxcde").value;
item_purch = item_purch;
localStorage.setItem("item_purch", item_purch);

let me = document.querySelector('#txtremarks');
let  purch_vat = document.querySelector("#txtvatcde1").value;
purch_vat = purch_vat;
let item_purch = localStorage.getItem("item_purch"); 
((purch_vat) === item_purch) ? me.value = 'Matching Value!' : me.value = 'Vat sales value is not matching';  




item_saleEwat = document.querySelector("#txt_info_sal_ewtcde").walue;
item_saleEwat = item_saleEwat;
localStorage.setItem("item_saleEwat", item_saleEwat);

let  sale_ewt = document.querySelector("#txtvatcde1").value;
sale_ewt = sale_ewt;
let item_saleEwat = localStorage.getItem("item_saleEwat"); 
((sale_ewt) === item_saleEwat) ? me.value = 'Matching Value!' : me.value = 'Vat sales value is not matching';    



item_purchEwat = document.querySelector("#txt_info_pur_ewtcde").value;
item_purchEwat = item_purchEwat;
localStorage.setItem("item_purchEwat", item_purchEwat);

let  purch_ewt = document.querySelector("#txtvatcde1").value;
purch_ewt = purch_ewt;
let item_purchEwat = localStorage.getItem("item_purchEwat"); 
((purch_ewt) === item_purchEwat) ? me.value = 'Matching Value!' : me.value = 'Vat sales value is not matching';    





item_salesEvat = document.querySelector("#txt_info_sal_evatcde").value;
item_salesEvat = item_salesEvat;
localStorage.setItem("item_salesEvat", item_salesEvat);

let  sales_evat = document.querySelector("#txtvatcde1").value;
sales_evat = sales_evat;
let item_salesEvat = localStorage.getItem("item"); 
((sales_evat) === item_salesEvat) ? me.value = 'Matching Value!' : me.value = 'Vat sales value is not matching';    




item_purchEvat = document.querySelector("#txt_info_pur_evatcde").value;
item_purchEvat = item_purchEvat;
localStorage.setItem("item_purchEvat", item_purchEvat);

let  purch_evat = document.querySelector("#txtvatcde1").value;
purch_evat = purch_evat;
let item_purchEvat = localStorage.getItem("item"); 
((purch_evat) === item_purchEvat) ? me.value = 'Matching Value!' : me.value = 'Vat sales value is not matching';   



//search SO

let listData = [

    '',
    'SO-0000010',
  
  
  ]
  
  var counter = localStorage.getItem("data2");
  setTimeout(() => {
    document.querySelectorAll(".searchable_modaltxtfilterer")[0].value = listData[counter];
  }, 4000)
  
  counter++;
  localStorage.setItem("data2", counter);



let listData = [

    '',
    'SO-0000020'
  
  ]
  
  var counter = localStorage.getItem("data3");
  setTimeout(() => {
    document.querySelectorAll(".searchable_modaltxtfilterer")[1].value = listData[counter];
  }, 4000)
  
  counter++;
  localStorage.setItem("data3", counter);


  let listData = [

    '07-08-2019',
    '07-08-2020'
  
  ]
  
 
  setTimeout(() => {
    document.querySelector("#txt_sales_cancelled_datefrom").value = listData[0];
    document.querySelector("#txt_sales_cancelled_dateto").value = listData[1];
  }, 4000)
  

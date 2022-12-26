




//receivables report
//for date
let listData = ['{dateReceivfrom}', '{dateReceivTo}']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)


//Other Receivables Register
datalist = {
  Doc_No_From : 'ARR-0001',
  Doc_No_to: 'ARR-0005',
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Memo_type_From: 'Accounts Payable-Trade',
  Memo_type_To: 'Water',
 
}

console.log(datalist);


setTimeout(() => {
  //1
document.querySelector('#docnomfrm_other_recv_reg').value= datalist.Doc_No_From;
  
document.querySelector('#docnomto_other_recv_reg').value= datalist.Doc_No_to;

  //2
document.querySelector('#cusfrm_other_recv_reg').value= datalist.Customer_From;
  
document.querySelector('#cus_other_recv_reg').value= datalist.Customer_To;

//3
document.querySelector('#salesmanfrm_other_recv_regdesc').value= datalist.Salesman_From;
  
document.querySelector('#salesmanto_other_recv_regdesc').value= datalist.Salesman_To;

//4
document.querySelector('#memotypfrm_other_recv_regdesc').value= datalist.Memo_type_From;
  
document.querySelector('#memotypto_other_recv_regdesc').value= datalist.Memo_type_To;


}, 3000);



localStorage.setItem('data7', 0)
//separate


//5 and 5 times

var data = [
  'trndte',
  'docnum',
  'refnum',
  'cusdsc',
  'smncde'

]

var counter = localStorage.getItem('data7')


document.querySelector('#sort1_other_recv_reg').value= data[counter];

document.querySelector('#sort2_other_recv_reg').value= data[counter];
  
document.querySelector('#sort3_other_recv_reg').value= data[counter];

counter++
localStorage.setItem('data7', counter)



func_printbyother_recv_reg('pdf');

//Cash Collection



//date

let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)


print_CashCollection('pdf');


//Check Collection by Check Date


//date from and to 


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)



datalist = {
  Doc_No_From : 'ARP-0001',
  Doc_No_to: 'ARP-0008',
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Memo_type_From: 'Accounts Payable-Trade',
  Memo_type_To: 'Water',
 
}

console.log(datalist);


setTimeout(() => {
  //1
document.querySelector('#docnumfrom').value= datalist.Doc_No_From;
  
document.querySelector('#docnumto').value= datalist.Doc_No_to;

  //2
document.querySelector('#cusfrom').value= datalist.Customer_From;
  
document.querySelector('#custo').value= datalist.Customer_To;

//3
document.querySelector('#salesmanfromdesc').value= datalist.Salesman_From;
  
document.querySelector('#salesmantodesc').value= datalist.Salesman_To;

//4
document.querySelector('#memotypefromdesc').value= datalist.Memo_type_From;
  
document.querySelector('#memotypetodesc').value= datalist.Memo_type_To;


}, 3000);


//check date



let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelector('#checkdatefrom_bycheckdate').value =
    listData[0]
  document.querySelector('#checkdateto_bycheckdate').value =
    listData[1]
}, 4000)



print_CheckCollByDate('pdf');




//Check Collection by Date Received




//date from and to 



let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)



datalist = {
  Doc_No_From : 'ARP-0001',
  Doc_No_to: 'ARP-0008',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Memo_type_From: 'Accounts Payable-Trade',
  Memo_type_To: 'Water',
 
}

console.log(datalist);






setTimeout(() => {
  //1
document.querySelector('#docnomfrm_bychckdate').value= datalist.Doc_No_From;
  
document.querySelector('#docnomto_bychckdate').value= datalist.Doc_No_to;

  //2
document.querySelector('#salesmanfrmdesc').value= datalist.Salesman_From;
  
document.querySelector('#salesmantodesc').value= datalist.Salesman_To;

//3
document.querySelector('#memotypfrmdsc').value=  datalist.Memo_type_From;
  
document.querySelector('#memotyptodsc').value=  datalist.Memo_type_To;




}, 3000);


//check date



let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelector('#chckdatefrom_bychckdate').value =
    listData[0]
  document.querySelector('#chckdateto_bychckdate').value =
    listData[1]
}, 4000)


func_printbychckdaterecv('pdf');


//Collection Register

//date from and to 


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)



datalist = {
  Doc_No_From : 'ARP-0001',
  Doc_No_to: 'ARP-0008',
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Memo_type_From: 'Accounts Payable-Trade',
  Memo_type_To: 'Water',
 
}

console.log(datalist);


setTimeout(() => {
  //1
document.querySelector('#docnomfrm_collreg').value= datalist.Doc_No_From;
  
document.querySelector('#docnomto_collreg').value= datalist.Doc_No_to;

  //2
document.querySelector('#cusfrm_collreg').value= datalist.Customer_From;
  
document.querySelector('#cus_collreg').value= datalist.Customer_To;

//3
document.querySelector('#salesmanfrm_collreg').value= datalist.Salesman_From;
  
document.querySelector('#salesmanto_collreg').value= datalist.Salesman_To;

//4
document.querySelector('#memotypfrm_collregdesc').value= datalist.Memo_type_From;
  
document.querySelector('#memotypto_collregdesc').value= datalist.Memo_type_To;


}, 3000);


//check date


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelector('#chckdatefrom_collreg').value =
    listData[0]
  document.querySelector('#chckdateto_collreg').value =
    listData[1]
}, 4000)



localStorage.setItem('data7', 0)
//separate


//5 and 5 times

var data = [
  'trndte',
  'docnum',
  'refnum',
  'cusdsc',
  'smncde',
  'chkdte'

]

var counter = localStorage.getItem('data7')


document.querySelector('#sort1_collreg').value= data[counter];

document.querySelector('#sort2_collreg').value= data[counter];
  
document.querySelector('#sort3_collreg').value= data[counter];

counter++
localStorage.setItem('data7', counter)

func_printbycollreg('pdf');


//Unapplied Collection


//date from and to 


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)



datalist = {
  Doc_No_From : 'ARP-0001',
  Doc_No_to: 'SRT-00003',
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Memo_type_From: 'Accounts Payable-Trade',
  Memo_type_To: 'Water',
 
}

console.log(datalist);


setTimeout(() => {
  //1
document.querySelector('#docnumfrom').value= datalist.Doc_No_From;
  
document.querySelector('#docnumto').value= datalist.Doc_No_to;

  //2
document.querySelector('#cusfrom').value= datalist.Customer_From;
  
document.querySelector('#custo').value= datalist.Customer_To;

//3
document.querySelector('#salesmanfromdesc').value= datalist.Salesman_From;
  
document.querySelector('#salesmantodesc').value= datalist.Salesman_To;

//4
document.querySelector('#memotypefromdesc').value= datalist.Memo_type_From;
  
document.querySelector('#memotypetodesc').value= datalist.Memo_type_To;


}, 3000);


//check date



let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelector('#checkdatefrom_bycheckdate').value =
    listData[0]
  document.querySelector('#checkdateto_bycheckdate').value =
    listData[1]
}, 4000)

//Collection by Salesman



//date from and to 


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)



datalist = {

  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',

 
}

console.log(datalist);


setTimeout(() => {

//3
document.querySelector('#salesmanfrm_collbysalesmandesc').value= datalist.Salesman_From;
  
document.querySelector('#salesmanto_collbysalesmandesc').value= datalist.Salesman_To;




}, 3000);


//check date



let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelector('#chckdatefrom_collbysalesman').value =
    listData[0]
  document.querySelector('#chckdatefrom_collbysalesman').value =
    listData[1]
}, 4000)

func_printbycollbysalesman('pdf');


//Individual Statement of Account





//date from and to 


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)



datalist = {
  
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
 
}

console.log(datalist);


setTimeout(() => {

  //2
document.querySelector('#cusfrom').value= datalist.Customer_From;
  
document.querySelector('#custo').value= datalist.Customer_To;



}, 3000);


print_IndividualSOA('pdf');



//Customer Ledger



datalist = {
  
  Customer: '1678 Shopping Mall',
  Territory : 'Bulacan',
  Salesman: 'Abbie Tan',
  
 
}

console.log(datalist);


setTimeout(() => {
  //1
document.querySelector('#docnumfrom').value= datalist.Customer;
  
document.querySelector('#docnumto').value= datalist.Territory;

document.querySelector('#cusfrom').value= datalist.Salesman;
  


}, 3000);



let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)




localStorage.setItem('data7', 0)
//separate

var ids = [
  '#radio_cusled_salesvscoll',
  '#radio_cusled_salesvscoll',
  '#radio_cusled_sum',
  '#radio_cusled_salesvscoll_perpaygrp',
  '#radio_cusled_salesvscoll_perpaygrp'
 
]

var counter = localStorage.getItem('data7')

document.querySelector(ids[counter]).checked = true;

counter++
localStorage.setItem('data7', counter)


localStorage.setItem('data8', 0)
//separate

var data = [
  'CPG1',
  'CPG2',
  'CPG3'
 

]

var counter = localStorage.getItem('data8')


document.querySelector('#paygrp_cusled').innerHTML= data[counter];

counter++
localStorage.setItem('data8', counter)




//Schedule of Receivables




datalist = {
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Pay_from: 'CPG1',
  pay_to: 'CPG3',
 
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#cusfrom').value= datalist.Customer_From;
  
document.querySelector('#custo').value= datalist.Customer_To;




}, 3000);



datalist = {
 
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Pay_from: 'CPG1',
  pay_to: 'CPG3',
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#salesmanfromdesc').value= datalist.Salesman_From;
  
document.querySelector('#salesmantodesc').value= datalist.Salesman_To;




}, 3000);




datalist = {
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Pay_from: 'CPG1',
  pay_to: 'CPG3',
 
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#paygrpfrom').value= datalist.Pay_From;
  
document.querySelector('#paygrpto').value= datalist.Pay_To;




}, 3000);

//print

print_SchedOfReceivables('bycus','pdf','');
print_SchedOfReceivables('by_paygrp','pdf','');
print_SchedOfReceivables('bysalesman','pdf','');



//Cust Credit limit

datalist = {
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
 
 
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#customerfrm_cuscred').value= datalist.Customer_From;
  
document.querySelector('#customerto_cuscred').value= datalist.Customer_To;




}, 3000);


func_printbycruscred('pdf');

//Statement of Account (with Cut-Off Date)



datalist = {
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
 
 
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#searchfrom_stmtofacc').value= datalist.Customer_From;
  
document.querySelector('#searchto_stmtofacc').value= datalist.Customer_To;




}, 3000);





let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelector('#stmtofacc_transdatefrom').value =
    listData[0]
  document.querySelector('#stmtofacc_transdateto').value =
    listData[1]
}, 4000)

print_StatementOfAccount('pdf');


//Aging of Receivables (with Cut-Off Date)



datalist = {
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Pay_from: 'CPG1',
  pay_to: 'CPG3'
 
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#cusfrom').value= datalist.Customer_From;
  
document.querySelector('#custo').value= datalist.Customer_To;




}, 3000);



datalist = {
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Pay_from: 'CPG1',
  pay_to: 'CPG3'
 
 
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#salesmanfromdesc').value= datalist.Salesman_From;
  
document.querySelector('#salesmantodesc').value= datalist.Salesman_To;




}, 3000);




datalist = {
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
  Salesman_From: 'Abbie Tan',
  Salesman_To: 'John Diaz',
  Pay_from: 'CPG1',
  pay_to: 'CPG3'
 
 
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#cusgrpcdefromdesc').value= datalist.Pay_From;
  
document.querySelector('#cusgrpcdetodesc').value= datalist.Pay_To;




}, 3000);

//print
print_AgingOfReceivables('bycus','pdf');
print_AgingOfReceivables('bysalesman','pdf');
print_AgingOfReceivables('bypaygroup','pdf');


//Summary of Receivables by Customer (with Cut-Off Date)





datalist = {
 
  Customer_From: '1678 Shopping Mall',
  Customer_To: 'Walk-in',
 
 
}

console.log(datalist);


setTimeout(() => {


  //2
document.querySelector('#customerfrm_summrecv').value= datalist.Customer_From;
  
document.querySelector('#customerto_summrecv').value= datalist.Customer_To;




}, 3000);





let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelector('#trandatefrm_summrecv').value =
    listData[0]
  document.querySelector('#trandateto_summrecv').value =
    listData[1]
}, 4000)

func_printbycruscred('pdf');


//Other Receivables Doc. No. Series


datalist = {
  Doc_No_From : 'ARR-0001',
  Doc_No_to: 'ARR-0005',
  
 
}

console.log(datalist);


setTimeout(() => {
  //1
document.querySelector('#docnofrom').value= datalist.Doc_No_From;
  
document.querySelector('#docnoto').value= datalist.Doc_No_to;



}, 3000);


print_OtherReceivablesDocNoSeries('pdf');


//Receipts/Collection Document No. Series

datalist = {
  Doc_No_From : 'ARP-0001',
  Doc_No_to: 'ARP-0008',
  
 
}

console.log(datalist);


setTimeout(() => {
  //1
document.querySelector('#docnofrom').value= datalist.Doc_No_From;
  
document.querySelector('#docnoto').value= datalist.Doc_No_to;



}, 3000);


print_receiptcoll('pdf');

//Collection Bank Transfer Register



let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)

setTimeout(() => {

document.querySelector('#bankacc_colbanktran').value= 'BDO-SA-2265';

}, 3000);


func_printbycolbanktran('pdf');


//Direct Collection Register


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)

let listData1 = ['07-08-2019', '07-08-2020']

setTimeout(() => {
  document.querySelector('#chckddatefrm').value =
    listData1[0]
  document.querySelector('#chckddateto').value =
    listData1[1]
}, 4000)



print_DirectCollReg('pdf');

//Collection Register by Payment Type


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)


func_printbycolreg_bypay('pdf');

//Other Receivables Cancelled Register


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)


print_report('pdf');


//Summary of Receivables By Payment Group (with Cut-Off Date)

let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelector('#cusgrpfrm_summrecvdesc').value =
    listData[0]
  document.querySelector('#cusgrpto_summrecvdesc').value =
    listData[1]
}, 4000)



localStorage.setItem('data7', 0)
//separate
//iterate 2 times
var ids = [
  '#rad_setdte',
  '#rad_currdte'

]

var counter = localStorage.getItem('data7')

document.querySelector(ids[counter]).checked = true;

counter++
localStorage.setItem('data7', counter)


//print
func_printbycruscred('pdf');


//Receipts/Collection Cancelled Register


let listData = ['07-19-2019', '09-02-2019']

setTimeout(() => {
  document.querySelectorAll('.processed_hasDatepickerDteToday')[0].value =
    listData[0]
  document.querySelectorAll('.processed_hasDatepickerDteToday')[1].value =
    listData[1]
}, 4000)


print_CancelledReg('pdf');

/********************* END OF THE WORLD *************************** */ 
//Set Report Cut-off Date

      /*                
      it should reflect to other reports 
      check reflection to the ff.
          - Statement of Account (with Cut-Off Date)
            Aging of Receivables (with Cut-Off Date)
            Summary of Receivables by Customer (with Cut-Off Date)
            Summary of Receivables by Payment Group (with Cut-Off Date)

      */ 


setTimeout(() => {

       document.querySelector('#cutoffdate').value = '05-28-2018';
        //chck_init
            document.querySelector('#chck_init').checked = true;
           setTimeout(() => {
                setreport();
           }, 4000);
}, 4000);

let me = document.querySelector('#cutoffdate').value;
me = me;
localStorage.setItem('me', me);


setTimeout(() => {
  document.querySelectorAll('.ui-button-text-only')[1].click();
    setTimeout(() => {
      document.querySelectorAll('.ajs-button.print')[0].click();
    }, 4000);
}, 8000);



//Statement of Account (with Cut-Off Date)
let  account = document.querySelector("#txt_balancebasis_cutoffdate").value;
account = account;
let me = localStorage.getItem("me"); 
((account) === me) ? alert('Matching Value!') : alert('Value do not match');  

// Aging of Receivables (with Cut-Off Date)
let  account = document.querySelector("#dateasof_bycus").value;
account = account;
let me = localStorage.getItem("me"); 
((account) === me) ? alert('Matching Value!') : alert('Value do not match');  
  

      let  account = document.querySelector("#dateasof_bycus").value;
      account = account;
      let me = localStorage.getItem("me"); 
      ((account) === me) ? alert('Matching Value!') : alert('Value do not match');  

            let  account = document.querySelector("#dteasof").value;
            account = account;
            let me = localStorage.getItem("me"); 
            ((account) === me) ? alert('Matching Value!') : alert('Value do not match');  



//  Summary of Receivables by Customer (with Cut-Off Date)
let  account = document.querySelector("#dateasof_summrecv").value;
account = account;
let me = localStorage.getItem("me"); 
((account) === me) ? alert('Matching Value!') : alert('Value do not match');  

//   Summary of Receivables by Payment Group (with Cut-Off Date)
let  account = document.querySelector("#txtarsetrepdte1").value;
account = account;
let me = localStorage.getItem("me"); 
((account) === me) ? alert('Matching Value!') : alert('Value do not match');  




/*

Other Receivables Register
Cash Collection
Check Collection by Check Date
Check Collection by Date Received
Collection Register
Unapplied Collection
Collection by Salesman
Individual SOA
Customer Ledger
Schedule of Receivables
Customer Credit Limit
Statement of Account (with Cut-Off Date)
Aging of Receivables (with Cut-Off Date)
Summary of Receivables by Customer (with Cut-Off Date)
Other Receivables Document No. Series
Receipts/Collection Document No. Series
Collection Bank Transfer Register
Direct Collection Register
Collection Register by Payment Type
Other Receivables Cancelled Register
Summary of Receivables by Payment Group (with Cut-Off Date)
Receipts/Collection Cancelled Register
Set Report Cut-off Date


**/

// using alertify as validation 
if($('#chk_disablep1').is(':checked')){alertify.alert('Checking this option will affect the accuracy of your Inventory Count, Stock Card & Cost of Goods.')}

//txtuntprc1

setTimeout(() => {


  $("#txtuntprc1").val(INV.price[0]).change();
  $("#txtuntprc2").val(INV.price[1]).change();
  $("#txtuntprc3").val(INV.price[2]).change();
  $("#txtuntprc4").val(INV.price[3]).change();
  $("#txtuntprc5").val(INV.price[4]).change();
  $("#txtuntprc6").val(INV.price[5]).change();
  $("#txtuntprc7").val(INV.price[6]).change();
  $("#txtuntprc8").val(INV.price[7]).change();
  $("#txtuntprc9").val(INV.price[8]).change();
  $("#txtuntprc10").val(INV.price[9]).change();
  $("#txtuntprc11").val(INV.price[10]).change();
  $("#txtuntprc12").val(INV.price[11]).change();
  $("#txtuntprc13").val(INV.price[12]).change();
  $("#txtuntprc14").val(INV.price[13]).change();
  $("#txtuntprc15").val(INV.price[14]).change();
  $("#txtuntprc16").val(INV.price[15]).change();
  $("#txtuntprc17").val(INV.price[16]).change();
  $("#txtuntprc18").val(INV.price[17]).change();
  $("#txtuntprc19").val(INV.price[18]).change();
  $("#txtuntprc20").val(INV.price[19]).change();

}, 2000)



//random physical count dates



localStorage.setItem('data7', 0)


;(function() {
  var randomString = function(length) {
    
    var text = "";
  
    var possible = "123456789";
    
    for(var i = 0; i < length; i++) {
    
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    }
    
    return text;
  }

  // random string length
  var random = 0 + randomString(1) + '/';
  var ran1 = 1 + randomString(1) ;

  mey = random.toString();
  mey1 = ran1.toString();
//separate
var counter = localStorage.getItem('data7')

  dte = [

    mey + mey1+'/2019',
    mey + mey1  + '/2020',
    mey + mey1 +'/2021',
    mey + mey1 +'/2022'
  ]
  
  
  var today = new Date(dte[counter]);
  
  
  counter++
  localStorage.setItem('data7', counter)
  
  
  var tomorrow = new Date(today);
  tomorrow.setDate(today.getDate()+1);
  me = tomorrow.toLocaleDateString();
  change = me.replace('/','-'); 
  change1 = change.replace('/','-'); 
  
  })();
  
//fire
document.querySelector('#txt_info_trndte').value = change1;
document.querySelector('#txtfilter_procdtefrm').value = change1;

//inactive item


localStorage.setItem('data7', 0)
localStorage.setItem('data', 0)


//separated
;(function() {
    var randomString = function(length) {
      
      var text = "";
    
      var possible = "123456789";
      
      for(var i = 0; i < length; i++) {
      
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      
      }
      
      return text;
    }

    // random string length
    var random = randomString(5) + '_Inactive';
    mey = random.toString();
    
  //separate
  var counter = localStorage.getItem('data7')

    dte = [
      mey,
      mey,
      mey 
          ]
    

    
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
                                      if(!listExistngData.includes(dte[counter1]))
                                        { 
                                            document.querySelector('#txt_info_itmdsc').value = dte[counter1];
                                          setTimeout(() => {   document.querySelectorAll('.ui-dialog-buttonset')[1].querySelectorAll('button')[0].click();   },2000)  
                                        }
                                      else 
                                        {
                                          counter1++;
                                        }                                         


                                    },2000)

            },5000)

            counter++
            localStorage.setItem('data7', counter)
 })();


 let  listData1 = [ //Item Type
                                                    
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY'
  
  
        ]

        let  listData2 = [ //Classification
          'Water',
          'Water',
          'Water',
          'Water',
          'Beverages',
          'Beverages',
          'Beverages',
          'Beverages',
          'Beverages',
          'Beverages',
          'Beverages',
          'Alcohol',
          'Alcohol',
          'Beverages',
          'Beverages',
          'Energy Drink'
          

        ]

        let  listData3 = [ //Brand
  
      
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola',
          'Coca-Cola'
         
          
        ]



        let  listData4 = [ //warehouse
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1',
          'warehouse1'
        
        ]

        let  listData5 = [ //U/M 
          'BTL ',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL',
          'BTL'
          

        ]

        let  listData6 = [ //Unit Cost (BTL)
          '82',
          '15',
          '10',
          '16',
          '11',
          '11',
          '11',
          '11',
          '13',
          '13',
          '13',
          '235',
          '362',
          '20',
          '20',
          '20'
          

        ]

        let  listData7 = [ // Selling Price (BTL)
          '110',
          '20',
          '15',
          '22',
          '15',
          '15',
          '15',
          '15',
          '18',
          '18',
          '18',
          '325',
          '490',
          '30',
          '30',
          '30',
          

        ]
        let  listData8 = [ // Re-order Level
                  '500',
                  '501',
                  '502',
                  '503',
                  '508',
                  '509',
                  '510',
                  '511',
                  '512',
                  '513',
                  '514',
                  '520',
                  '521',
                  '522',
                  '523',
                  '524'

        ]

     
        
        
         
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
                          

                          //chk_inactive

                          setTimeout(() => 

                          { 
                            document.querySelector("#chk_inactive").checked = true;
                          },6000)
                          


                          setTimeout(() => 

                          { 
                            document.querySelector("#txt_info_multium").checked=true;

                          },8000)
     
            localStorage.setItem("data",counter);

//1 Bank Transfer, Payables 1-3, Other Receivables 1-5, Credit Memo 1-3, Inventory 1-5

INV = {
  DocNum: ['REP-OUT'],
  Date1: ['07/15/2019'],
  warehouse: 'warehouse1',
  items: ['ITM402'],
  quantity: ['1'],
  price: ['490.00'],
  vat_setup: [null],
  UM: ['BTL']
}

INV = {
  DocNum: ['DMG-OUT'],
  Date1: ['07/16/2019'],
  warehouse: 'warehouse1',
  items: ['ITM100'],
  quantity: ['3'],
  price: ['15'],
  vat_setup: [null],
  UM: ['BTL']
}

INV = {
  DocNum: ['DMG-OUT'],
  Date1: ['09/09/2019'],
  warehouse: 'warehouse1',
  items: ['ITM100'],
  quantity: ['1'],
  price: ['150'],
  vat_setup: [null],
  UM: ['CASE']
}

INV = {
  DocNum: ['DMG-OUT'],
  Date1: ['09/30/2019'],
  warehouse: 'warehouse1',
  items: ['ITM100', 'ITM200'],
  quantity: ['120', '100'],
  price: ['20', '15'],
  vat_setup: [null],
  UM: ['CASE']
}

//Other Receivables

ARR = {
  Date1: ['08/03/2019'],
  Customer: ['Champion Store'],
  terms: ['COD'],
  MemoType: ['Service Fee'],
  Amount: ['10000']
}

document.querySelector('#txt_info_trndte').value = ARR.Date1;



setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    ARR.Customer;
}, 4000)




setTimeout(() => {
  var textToFind = ARR.terms[0];

  var dd =  document.querySelector('#txttrmcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  var textToFind = ARR.MemoType[0];

  var dd =  document.querySelector('#selmemtypcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)

setTimeout(() => {
  var textToFind = ARR.EWT[0];

  var dd =  document.querySelector('#selewtcode')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)

setTimeout(() => {
  var textToFind = ARR.EVAT[0];

  var dd =  document.querySelector('#selevatcode')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  var textToFind = ARR.EVAT[0];

  var dd =  document.querySelector('#seltaxcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  document.querySelector('#txtamount').value =
    ARR.Amount;
}, 4000)


ARR = {
  Date1: ['08/06/2019'],
  Customer: ['Acme Store'],
  terms: ['COD'],
  MemoType: ['PRICE ADJUSTMENT'],
  Amount: ['22']
}

document.querySelector('#txt_info_trndte').value = ARR.Date1;
ARR = {
  Date1: ['08/06/2019'],
  Customer: ['Acme Store'],
  terms: ['COD'],
  MemoType: ['ADV TO SUPP'],
  Amount: ['55,000']
}

document.querySelector('#txt_info_trndte').value = ARR.Date1;
ARR = {
  Date1: ['08/06/2019'],
  Customer: ['GOLDMART'],
  terms: ['30 Days'],
  MemoType: ['Service Fee'],
  Amount: ['55000'],
  EWT: 'SAL SERVICES',
  EVAT: null,
  vat_setup: ['SAL VAT']
}

document.querySelector('#txt_info_trndte').value = ARR.Date1;
ARR = {
  Date1: ['08/06/2019'],
  Customer: ['GOLDMART'],
  terms: ['30 Days'],
  MemoType: ['Service Fee'],
  Amount: ['20000'],
  EWT: 'SAL SERVICES',
  EVAT: null,
  vat_setup: ['SAL VAT']
}

document.querySelector('#txt_info_trndte').value = ARR.Date1;




setTimeout(() => {
  var textToFind = ARR.terms[0];

  var dd =  document.querySelector('#txttrmcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  var textToFind = ARR.MemoType[0];

  var dd =  document.querySelector('#selmemtypcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)

setTimeout(() => {
  var textToFind = ARR.EWT[0];

  var dd =  document.querySelector('#selewtcode')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)

setTimeout(() => {
  var textToFind = ARR.EVAT[0];

  var dd =  document.querySelector('#selevatcode')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  var textToFind = ARR.EVAT[0];

  var dd =  document.querySelector('#seltaxcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  document.querySelector('#txtamount').value =
    ARR.Amount;
}, 4000)


// other payables

APR = {
  Date1: ['07-31-2019'],
  Supplier: ['Holiday Insurance'],
  terms: ['30 Days'],
  MemoType: ['PRE-PAID INSURANCE'],
  Amount: ['12000']
}

  document.querySelector('#txt_info_trndte').value = APR.Date1;



setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    APR.Supplier;
}, 4000)


APR = {
  Date1: ['07-31-2019'],
  Supplier: ['Holiday Insurance'],
  terms: ['30 Days'],
  MemoType: ['PRE-PAID INSURANCE'],
  Amount: ['12000']
}



setTimeout(() => {
  var textToFind = APR.terms[0];

  var dd =  document.querySelector('#txttrmcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  var textToFind = APR.MemoType[0];

  var dd =  document.querySelector('#selmemtypcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  document.querySelector('#txtamount').value =
    APR.Amount;
}, 4000)












APR = {
  Date1: ['07/31/2019'],
  Supplier: ['Holiday Insurance'],
  terms: ['CASH'],
  MemoType: ['PRE-PAID INSURANCE'],
  Amount: ['12000']
}

document.querySelector('#txt_info_trndte').value = APR.Date1;


APR = {
  Date1: ['08/06/2019'],
  Supplier: ['Delta Furnitures'],
  terms: ['30 Days'],
  MemoType: ['FURN FIXT'],
  Amount: ['25000']
}

document.querySelector('#txt_info_trndte').value = APR.Date1;


APR = {
  Date1: ['08/06/2019'],
  Supplier: ['Sky Cable Corporation'],
  terms: ['COD'],
  MemoType: ['ADV TO SUPP'],
  Amount: ['55,000'],
  EWT: 'PUR SERVICES',
  vat_setup: ['PUR VAT']
}

document.querySelector('#txt_info_trndte').value = APR.Date1;



setTimeout(() => {
  var textToFind = APR.terms[0];

  var dd =  document.querySelector('#txttrmcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  var textToFind = APR.MemoType[0];

  var dd =  document.querySelector('#selmemtypcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)

setTimeout(() => {
  var textToFind = APR.EWT[0];

  var dd =  document.querySelector('#selewtcode')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)

setTimeout(() => {
  var textToFind = APR.EVAT[0];

  var dd =  document.querySelector('#selevatcode')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  var textToFind = APR.EVAT[0];

  var dd =  document.querySelector('#seltaxcde')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)


setTimeout(() => {
  document.querySelector('#txtamount').value =
    APR.Amount;
}, 4000)



ARCM = {
  Date1: ['05/08/2019'],
  Customer: ['Charlie Enterprises'],
  terms: ['COD'],
  MemoType: ['Service Fee'],
  Amount: ['420.00']
}

ARCM = {
  Date1: ['05/08/2019'],
  Customer: ['Acme Minimart'],
  terms: ['COD'],
  MemoType: ['Service Fee'],
  Amount: [' 500.00']
}

//using the application to Outstanding Receivables under SAL-0011
ARCM = {
  Date1: ['09/16/2019'],
  Customer: ['Holiday Supermart'],
  terms: ['COD'],
  MemoType: ['Service Fee'],
  Amount: ['1000']
}

BT = {
  Bank1: ['BPI-CA-1969'],
  Bank2: ['BDO-SA-2265'],
  trans_num: ['01/08/201'],
  txt_amount: ['20000'],
  diag_rdo: ['true']
}



CADV = {
  Date1: ['08/25/2019'],
  Emp: ['Mark Reyes'],
  type: ['ADV TO EMP'],
  Ptype: ['Cash'],
  Amount: ['500'],

}



document.querySelectorAll('.searchable_modaltxtfilterer')[1].value =  CADV.Emp;

document.getElementsByName('txt_date')[0].value = CADV.Date1;



setTimeout(() => {
  var textToFind = CADV.type[0];

  var dd =  document.querySelector('#txtadvtypcde_add')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)



CADV = {
  Date1: ['08/25/2019'],
  Emp: ['Mark Reyes'],
  type: ['ADV TO EMP'],
  Ptype: ['Cash'],
  Amount: ['500'],

}

setTimeout(() => {
  var textToFind = CADV.Ptype[0];

  var dd =  document.querySelector('#cbo_paytyp')
  
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 4000)

 document.querySelector('#txt_amount').value= CADV.Amount;





 
CV = {
  memo: [ 'Salaries', 'Water'],
  bank_name: ['', 'BDO-SA-2265', null],
  check_num: ['', null, null],
  Check_Date: ['', null, null],
  trans_Date: ['', '08-31-2019', null]
}

var counter = localStorage.getItem('data7')

let pay = document.querySelector('#txt_paytyp').value
let check = document.querySelector('#chk_dirpay').checked

if (pay === 'Check') {
  setTimeout(() => {
    document.querySelector('#txt_bnkcde').value = CV.bank_name[counter]
    document.querySelector('#txt_chknum').value = CV.check_num[counter]
    document.querySelector('#txt_chkdte').value = CV.Check_Date[counter]
  }, 4000)

  if (check === true) {
    setTimeout(() => {
      var textToFind = CV.memo[counter]

      var dd = document.querySelector('#txt_memtyp')
      for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i
          break
        }
      }
    }, 4000)
  }
} else if (pay === 'Cash') {
  if (check === true) {
    setTimeout(() => {
      var textToFind = CV.memo[counter]

      var dd = document.querySelector('#txt_memtyp')
      for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i
          break
        }
      }
    }, 4000)
  }
} else {
  if (pay === 'Bank Transfer') {
    setTimeout(() => {
      setTimeout(() => {
        var textToFind = CV.memo[counter]
  
        var dd = document.querySelector('#txt_memtyp')
        for (var i = 0; i < dd.options.length; i++) {
          if (dd.options[i].text === textToFind) {
            dd.selectedIndex = i
            break
          }
        }
      }, 4000)
      document.querySelector('#txt_chkdte').value = CV.trans_Date[1]
      document.querySelector('#txt_bnkcde').value = CV.bank_name[counter]
    }, 4000)
  }
}

counter++
localStorage.setItem('data7', counter)

  

// Credit memo


ARP = {
  
  date: ['','08/05/2019'],

}

var counter = localStorage.getItem('data2')

setTimeout(() => {
  document.querySelector('#txt_info_trndte').value = ARP.date[counter]
 
}, 4000)

counter++
localStorage.setItem('data2', counter)





ARP = {
  memo: ['', 'Sales Discount'],
  netAmount: ['','420'],
 
}

var counter = localStorage.getItem('data7')




  setTimeout(() => {
    document.querySelector('#txt_amountfor').value = ARP.netAmount[counter]
  
  }, 4000)


 setTimeout(() => {
      var textToFind = ARP.memo[counter]

      var dd = document.querySelector('#sel_memtypcde')
      for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i
          break
        }
      }
    }, 4000)

counter++
localStorage.setItem('data7', counter)
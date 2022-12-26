// after next
ARP = {
  trans_num: ['ARP-0012']
}

setTimeout(() => {
  var em = document.querySelector('#txt_docnum').value
  if (em === ARP.trans_num[0]) {
    setTimeout(() => {
      show_outstanding_click('ADD')
    }, 2000)
  } else {
    false
  }
}, 2000)

//ARP1

ARP = {
  customer: ['', 'Holiday Supermart'],
}

var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value = ARP.customer[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)





ARP = {
  Net_Amount: ['','35798.48'],
  date: ['','09/16/2019'],
  direct_col_rdo: ['', false]
}

var counter = localStorage.getItem('data2')

setTimeout(() => {
  document.querySelector('#txt_dte').value = ARP.date[counter]
  document.querySelector('#txt_amountfor').value = ARP.Net_Amount[counter]
  document.querySelector('#chk_dirpay').checked = ARP.direct_col_rdo[counter]
}, 4000)

counter++
localStorage.setItem('data2', counter)




ARP = {
  payment_type: ['', 'Cash',
]
}

var counter = localStorage.getItem('data1')

setTimeout(() => {
  $('#txt_paytyp')
    .val(ARP.payment_type[counter])
    .change()
}, 4000)

counter++
localStorage.setItem('data1', counter)




ARP = {
  memo: ['', null],
  date_deposited: ['','09/15/2019'],
  bank_name: ['', 'BPI'],
  check_num: ['', '68581127'],
  Check_Date: ['','09/15/2019'],

}

var counter = localStorage.getItem('data7')

let pay = document.querySelector('#txt_paytyp').value
let check = document.querySelector('#chk_dirpay').checked

if (pay === 'Check') {
  setTimeout(() => {
    document.querySelector('#txt_bnkcde').value = ARP.bank_name[counter]
    document.querySelector('#txtb_chknum').value = ARP.check_num[counter]
    document.querySelector('#txtb_chkdte').value = ARP.Check_Date[counter]
    document.querySelector('#txt_depdte').value = ARP.date_deposited[counter]
  }, 4000)

  if (check === true) {
    setTimeout(() => {
      var textToFind = ARP.memo[counter]

      var dd = document.querySelectorAll('.cla_memtyp')[1]
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
      var textToFind = ARP.memo[counter]

      var dd = document.querySelectorAll('.cla_memtyp')[1]
      for (var i = 0; i < dd.options.length; i++) {
        if (dd.options[i].text === textToFind) {
          dd.selectedIndex = i
          break
        }
      }
    }, 4000)
  }
} else {
  false
}

counter++
localStorage.setItem('data7', counter)





ARP = {
  Deposit_bank: ['', null]
}

var counter = localStorage.getItem('data9')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[1].value =
    ARP.Deposit_bank[counter]
}, 4000)

counter++
localStorage.setItem('data9', counter)

// after next
CV = {
  trans_num: ['CV-0008']
}

setTimeout(() => {
  var em = document.querySelector('#txt_docnum').value
  if (em === CV.trans_num[0]) {
    setTimeout(() => {
      show_outstanding_click('ADD')
    }, 2000)
  } else {
    false
  }
}, 2000)

//ARP1

CV = {
  customer: ['', 'ECJ BUILDING']
}

var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    CV.customer[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

CV = {
  Net_Amount: ['', '28000'],
  date: ['', '08/31/2019'],
  direct_col_rdo: ['', false],
  rdo_advdoc: ['', false]
}

var counter = localStorage.getItem('data2')

setTimeout(() => {
  document.querySelector('#txt_trndte').value = CV.date[counter]
  document.querySelector('#txt_netamt').value = CV.Net_Amount[counter]
  document.querySelector('#chk_dirpay').checked = CV.direct_col_rdo[counter]
  document.querySelector('#rdo_advdoc').checked = CV.rdo_advdoc[counter]
}, 4000)

counter++
localStorage.setItem('data2', counter)

CV = {
  payment_type: ['', 'Check']
}

var counter = localStorage.getItem('data1')

setTimeout(() => {
  $('#txt_paytyp')
    .val(CV.payment_type[counter])
    .change()
}, 4000)

counter++
localStorage.setItem('data1', counter)

CV = {
  memo: ['', null],
  bank_name: ['', 'BDO-SA-2265'],
  check_num: ['', '106'],
  Check_Date: ['', null],
  trans_Date: ['', null]
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
      document.querySelector('#txt_chkdte').value = CV.trans_Date[1]
      document.querySelector('#txt_bnkcde').value = CV.bank_name[counter]
    }, 4000)
  }
}

counter++
localStorage.setItem('data7', counter)

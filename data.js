// validate Accounting Vat Inclusive computation
let grandtot = document.querySelector('#txtgrandtot').value

var cleantext = grandtot.replace(',', '').trim()
var cleantext1 = cleantext.replace(',', '').trim()
var notext = cleantext1.replace('P', '').trim()

console.log(notext)

let result = parseFloat(notext).toFixed(2) / 1.12

let vatable_auto = parseFloat(result).toFixed(2)

console.log(vatable_auto)
// for vat amount

let vatAmount =
  parseFloat(notext).toFixed(2) - parseFloat(vatable_auto).toFixed(2)

let vatAmount_auto = parseFloat(vatAmount).toFixed(2)

var value_amount = parseFloat(vatAmount_auto).toFixed(2)
console.log(value_amount)

// validation
let tracc_vatable = document.querySelector('#txt_vatable').value
var cleantext_vat = tracc_vatable.replace(',', '').trim()
let tracc_vatamount = document.querySelector('#txt_vatamount').value
var cleantext_vatamount = tracc_vatamount.replace(',', '').trim()

let remarks = document.querySelector('#txtremarks')
// animation

if (vatable_auto === cleantext_vat) {
  remarks.value = 'Computation Matched'

  var ofs = 0
  var el = document.getElementById('txtremarks')

  window.setInterval(function () {
    el.style.background = 'rgba(160, 249,0,' + Math.abs(Math.sin(ofs)) + ')'
    ofs += 0.01
  }, 10)
} else if (value_amount === cleantext_vatamount) {
  remarks.value = 'Computation Matched'

  var ofs = 0
  var el = document.getElementById('txtremarks')

  window.setInterval(function () {
    el.style.background = 'rgba(160, 249,0,' + Math.abs(Math.sin(ofs)) + ')'
    ofs += 0.01
  }, 10)
} else {
  remarks.value =
    'Computation Error: Should be VATable: ' +
    vatable_auto +
    ' VAT Amount: ' +
    value_amount

  var ofs = 0
  var el = document.getElementById('txtremarks')

  window.setInterval(function () {
    el.style.background = 'rgba(255,0,0,' + Math.abs(Math.sin(ofs)) + ')'
    ofs += 0.01
  }, 10)
}

//............................<END>......
let remarks = document.querySelectorAll('#txtfld_docinfo_remark')[0]

let Debit = document.querySelector('#lbl_total_debit').innerText

let total_debit = Debit.replace('Total Debit:', '').trim()

console.log(total_debit)

let credit = document.querySelector('#lbl_total_credit').innerText

let total_credit = credit.replace('Total Credit:', '').trim()

console.log(total_credit)

if (total_debit === total_credit) {
  remarks.value = 'Balance credit & debit amount'

  var ofs = 0
  var el = document.querySelectorAll('#txtfld_docinfo_remark')[0]

  window.setInterval(function () {
    el.style.background = 'rgba(160, 249,0,' + Math.abs(Math.sin(ofs)) + ')'
    ofs += 0.01
  }, 10)
} else {
  remarks.value = 'Unbalance credit & debit amount'

  var ofs = 0
  var el = document.querySelectorAll('#txtfld_docinfo_remark')[0]

  window.setInterval(function () {
    el.style.background = 'rgba(255,0,0,' + Math.abs(Math.sin(ofs)) + ')'
    ofs += 0.01
  }, 10)
}

let Difference = document.querySelector('#lbl_total_diff').innerText

let total_Dif = Difference.replace('Difference:', '').trim()

console.log(total_Dif)

//RE

let remarks = document.querySelectorAll('#txtfld_docinfo_remark')[0]

let Debit = document.querySelector('#totdebit').innerText

let total_debit = Debit.replace('Debit:', '').trim()

console.log(total_debit)

let credit = document.querySelector('#totcredit').innerText

let total_credit = credit.replace('Credit:', '').trim()

console.log(total_credit)

if (total_debit === total_credit) {
  remarks.value = 'Balance credit & debit amount'

  var ofs = 0
  var el = document.querySelectorAll('#txtfld_docinfo_remark')[0]

  window.setInterval(function () {
    el.style.background = 'rgba(160, 249,0,' + Math.abs(Math.sin(ofs)) + ')'
    ofs += 0.01
  }, 10)
} else {
  remarks.value = 'Unbalance credit & debit amount'

  var ofs = 0
  var el = document.querySelectorAll('#txtfld_docinfo_remark')[0]

  window.setInterval(function () {
    el.style.background = 'rgba(255,0,0,' + Math.abs(Math.sin(ofs)) + ')'
    ofs += 0.01
  }, 10)
}

let Difference = document.querySelector('#lbl_total_diff').innerText

let total_Dif = Difference.replace('Difference:', '').trim()

console
  .log(total_Dif)

  [amount].reduce((a, b) => a + b, 0)

let amount = parseFloat(clean).toFixed(2)

var x = document.querySelectorAll('.xclass_gran.input.cla_detnum')
var sum = 0
// Here array.values() function is called.
var iterator = x.values()

// Here all the elements of the array is being printed.
for (let elements of iterator) {
  var num = elements.value

  var clean = num.replace(',', '').trim()

  var amount = [Math.abs(clean)]

  for (var i = 0; i < amount.length; i++) {
    sum += parseInt(amount[i])
  }

  console.log(sum)
}




// GRAND TOTAL COMPUTATION:

//first fire




//first fire

let useme = ''
var x = document.querySelectorAll('.xclass_gran.input.input.cla_ic.regex-amt.cla_detnum')
var sum = 0
// Here array.values() function is called.
var iterator = x.values()

// Here all the elements of the array is being printed.
for (let elements of iterator) {
  var num = elements.value

  var clean = num.replace(',', '').trim()

  var amount = [Math.abs(clean)]

  useme = amount
  console.log([useme])
  for (var i = 0; i < useme.length; i++) {
    sum += parseInt(useme[i])
  }

  result = sum
}
 

  


//second fire


let grandtot = document.querySelector('#txtgrandtot').value;

var cleantext = grandtot.replace(',', '').trim()
var icleantext = cleantext.replace(',', '').trim()
var notext = icleantext.replace('P', '').trim()
var iamount = parseInt(notext)
console.log(iamount)

//third fire
var me = document.querySelector('#txtapvby')
if (result === iamount) {
  me.value = 'GRAND TOTAL IS CORRECT'
} else {
  me.value = 'GRAND TOTAL IS INCORRECT'
}

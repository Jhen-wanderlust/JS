//BR1

BR = {
  bank: [
    '',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BPI-CA-1969',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265',
    'BDO-SA-2265'
  ]
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: [
    '',
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true
  ],
  diag_rdo_withdrawal: [
    '',
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false
  ],

  diag_dtp_trndte: [
    '',
    '07/01/2019',
    '07/01/2019',
    '07/01/2019',
    '07/01/2019',
    '07/01/2019',
    '08/22/2019',
    '08/29/2019',
    '09/01/2019',
    '09/02/2019',
    '09/03/2019',
    '09/13/2019',
    '09/13/2019',
    '09/20/2019',
    '09/27/2019',
    '09/30/2019'
  ],
  diag_txt_amount: [
    '',
    '200000',
    '150000',
    '50000',
    '30000',
    '55000',
    '1000000',
    '15000',
    '800',
    '600',
    '118315.84',
    '800',
    '57565.85',
    '126248.57',
    '383860.14',
    '376323.2'
  ],
  diag_txt_actcde: [
    '',
    'E-00020',
    'E-00030',
    'A-00010-10',
    'E-00020',
    'A-00010-10',
    'E-00030',
    'A-00010-05',
    'R-00040',
    'A-00010-10',
    'A-00010-05',
    'R-00040',
    'A-00010-05',
    'A-00010-05',
    'A-00010-05',
    'A-00010-05'
  ]
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

/***BR-0000001:
BR-0000002:
BR-0000003:

 */

BR = {
  bank: ['', 'BDO-SA-2265', 'BDO-SA-2265', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true, true, false],
  diag_rdo_withdrawal: ['', false, false, true],

  diag_dtp_trndte: ['', '07/01/2019', '07/01/2019', '07/01/2019'],
  diag_txt_amount: ['', '200000', '150000', '50000'],
  diag_txt_actcde: ['', 'E-00020', 'E-00030', 'A-00010-10']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000006:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '08/22/2019'],
  diag_txt_amount: ['', '1000000'],
  diag_txt_actcde: ['', 'E-00030']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000007:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '08/29/2019'],
  diag_txt_amount: ['', '15000'],
  diag_txt_actcde: ['', 'A-00010-05']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000008:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '09/01/2019'],
  diag_txt_amount: ['', '800'],
  diag_txt_actcde: ['', 'R-00040']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000009:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', false],
  diag_rdo_withdrawal: ['', true],

  diag_dtp_trndte: ['', '09/02/2019'],
  diag_txt_amount: ['', '600'],
  diag_txt_actcde: ['', 'A-00010-10']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000010:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '09/03/2019'],
  diag_txt_amount: ['', '118315.84'],
  diag_txt_actcde: ['', 'A-00010-05']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000011:BR-0000012:

BR = {
  bank: ['', 'BPI-CA-1969', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true, true],
  diag_rdo_withdrawal: ['', false, false],

  diag_dtp_trndte: ['', '09/13/2019', '09/13/2019'],
  diag_txt_amount: ['', '800', '57565.85'],
  diag_txt_actcde: ['', 'R-00040', 'A-00010-05']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000013:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '09/20/2019'],
  diag_txt_amount: ['', '126248.57'],
  diag_txt_actcde: ['', 'A-00010-05']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000014:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '09/27/2019'],
  diag_txt_amount: ['', '383860.14', ,],
  diag_txt_actcde: ['', 'A-00010-05']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-0000015:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '09/30/2019'],
  diag_txt_amount: ['', '376323.2'],
  diag_txt_actcde: ['', 'A-00010-05']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-000004:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '07/07/2019'],
  diag_txt_amount: ['', '30000'],
  diag_txt_actcde: ['', 'E-00020']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)

//BR-000005:

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '08/13/2019'],
  diag_txt_amount: ['', '55000'],
  diag_txt_actcde: ['', 'A-00010-10']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)


//BR-0000001:


BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['', true],
  diag_rdo_withdrawal: ['', false],

  diag_dtp_trndte: ['', '07/01/2019'],
  diag_txt_amount: ['', '200000'],
  diag_txt_actcde: ['', 'E-00020']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)




//BR-0000002:


BR = {
  bank: ['', 'BDO-SA-2265', 'BDO-SA-2265', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['',  true],
  diag_rdo_withdrawal: ['', false, ],
  diag_dtp_trndte: ['',  '07/01/2019'],
  diag_txt_amount: ['',  '150000' ],
  diag_txt_actcde: ['', 'E-00030']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)


//3

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['',  false],
  diag_rdo_withdrawal: ['',  true],

  diag_dtp_trndte: ['','07/01/2019'],
  diag_txt_amount: ['',  '50000'],
  diag_txt_actcde: ['', 'A-00010-10']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)


//12

BR = {
  bank: ['', 'BDO-SA-2265']
}
var counter = localStorage.getItem('data')

setTimeout(() => {
  document.querySelectorAll('.searchable_modaltxtfilterer')[0].value =
    BR.bank[counter]
}, 4000)

counter++
localStorage.setItem('data', counter)

BR = {
  diag_rdo_deposit: ['',  true],
  diag_rdo_withdrawal: ['',  false],

  diag_dtp_trndte: ['','07/01/2019'],
  diag_txt_amount: ['',  '57565.85  '],
  diag_txt_actcde: ['', 'A-00010-05']
}

//for withdral

var counter = localStorage.getItem('data1')

setTimeout(() => {
  document.querySelector('#diag_rdo_withdrawal').checked =
    BR.diag_rdo_withdrawal[counter]
}, 4000)
//for deposit

setTimeout(() => {
  document.querySelector('#diag_rdo_deposit').checked =
    BR.diag_rdo_deposit[counter]
}, 4000)
setTimeout(() => {
  document.querySelector('#diag_dtp_trndte').value = BR.diag_dtp_trndte[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_amount').value = BR.diag_txt_amount[counter]
}, 4000)

setTimeout(() => {
  document.querySelector('#diag_txt_actcde').value = BR.diag_txt_actcde[counter]
}, 4000)

counter++
localStorage.setItem('data1', counter)



//EDIT STEP 7:Execute JavaScript

let listData = [
  'ITM99',
  'ITM100',
  'ITM200',
  'ITM252',
  'ITM310',
  'ITM312',
  'ITM314',
  'ITM316',
  'ITM320',
  'ITM322',
  'ITM324',
  'ITM400',
  'ITM402',
  'ITM500',
  'ITM501',
  'ITM502'
]

setTimeout(() => {
  document.querySelector('#add_btn').click()
  // open the page

  setTimeout(() => {
    let listExistngData = [] // Array In which we'll store existing data of list

    document.querySelectorAll('#datatable tr td').forEach(data => {
      // tds only under #datatable tr
      data.id == 'itmdsc' ? listExistngData.push(data.innerText) : false
      // If any td have this id only then insert its text in array
    })

    let counter1 = 0

    setInterval(() => {
      // if condition matches then add that text else try next text
      if (!listExistngData.includes(listData[counter1])) {
        document.querySelector('#txt_info_itmdsc').value = listData[counter1]
        setTimeout(() => {
          document
            .querySelectorAll('.ui-dialog-buttonset')[1]
            .querySelectorAll('button')[0]
            .click()
        }, 2000)
      } else {
        counter1++
      }
    }, 2000)
  }, 5000)
}, 5000)

let listData1 = [
  //Item Type

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

let listData2 = [
  //Classification
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

let listData3 = [
  //Brand

  'Absolute',
  'Absolute',
  'Absolute',
  'Wilkins',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Fundador',
  'Fundador',
  'Gatorade',
  'Gatorade',
  'Gatorade'
]

let listData4 = [
  //warehouse
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

let listData5 = [
  //U/M
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

let listData6 = [
  //Unit Cost (BTL)
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

let listData7 = [
  // Selling Price (BTL)
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
  '30'
]
let listData8 = [
  // Re-order Level
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

var counter = localStorage.getItem('data')

setTimeout(() => {
  var textToFind = listData1[counter]

  var dd = document.getElementById('txt_info_itmtyp')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData2[counter]

  var dd = document.getElementById('txt_info_itmclacde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData3[counter]

  var dd = document.getElementById('txt_info_brncde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData4[counter]

  var dd = document.getElementById('txt_info_warcde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  document.querySelector('#txt_info_untmea1').value = ''
  document.querySelector('#txt_info_untcst').value = ''
  document.querySelector('#txt_info_untprc').value = ''
  document.querySelector('#txt_info_crilvl').value = ''
}, 2000)
setTimeout(() => {
  document.querySelector('#txt_info_untmea1').value = listData5[counter]
  document.querySelector('#txt_info_untcst').value = listData6[counter]
  document.querySelector('#txt_info_untprc').value = listData7[counter]
  document.querySelector('#txt_info_crilvl').value = listData8[counter]
}, 3000)
setTimeout(() => {
  document.querySelector('#rdo_trd').checked = true
}, 6000)

localStorage.setItem('data', counter)

// second batch

let listData = [
  'ITM300',
  'ITM302',
  'ITM304',
  'ITM253',
  'ITM325',
  'ITM330',
  'ITM335',
  'ITM340',
  'ITM345',
  'ITM350',
  'ITM355',
  'ITM503',
  'ITM510',
  'ITM511',
  'ITM512',
  'ITM513',
  'ITM521',
  'ITM522',
  'ITM523',
  'ITM524',
  'ITM700',
  'ITM800',
  'ITM801',
  'ITM900',
  'ITM910',
  'ITM920',
  'ITM930',
  'ITM940',
  'ITM950',
  'ITM326',
  'ITM332',
  'ITM334',
  'ITM366'
]

setTimeout(() => {
  document.querySelector('#add_btn').click()
  // open the page

  setTimeout(() => {
    let listExistngData = [] // Array In which we'll store existing data of list

    document.querySelectorAll('#datatable tr td').forEach(data => {
      // tds only under #datatable tr
      data.id == 'itmdsc' ? listExistngData.push(data.innerText) : false
      // If any td have this id only then insert its text in array
    })

    let counter1 = 0

    setInterval(() => {
      // if condition matches then add that text else try next text
      if (!listExistngData.includes(listData[counter1])) {
        document.querySelector('#txt_info_itmdsc').value = listData[counter1]
        setTimeout(() => {
          document
            .querySelectorAll('.ui-dialog-buttonset')[1]
            .querySelectorAll('button')[0]
            .click()
        }, 2000)
      } else {
        counter1++
      }
    }, 2000)
  }, 5000)
}, 5000)

let listData1 = [
  //Item Type

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
  'INVENTORY',
  'INVENTORY',
  'INVENTORY'
]

let listData2 = [
  //Classification
  'Beverages',
  'Beverages',
  'Beverages',
  'Water',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Alcohol',
  'Energy Drink',
  'Energy Drink',
  'Alcohol',
  'Alcohol',
  'Alcohol',
  'Alcohol',
  'Alcohol',
  'Alcohol',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages'
]

let listData3 = [
  //Brand

  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Wilkins',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gilbeys',
  'Red Bull',
  'Red Bull',
  'Tanduay',
  'Tanduay',
  'Tanduay',
  'Tanduay',
  'Tanduay',
  'Tanduay',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola'
]

let listData4 = [
  //warehouse
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
  'warehouse1',
  'warehouse1',
  'warehouse1'
]

let listData5 = [
  //U/M
  'CAN',
  'CAN',
  'CAN',
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
  'BTL',
  'BTL',
  'BTL',
  'BTL',
  'CAN',
  'CAN',
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

let listData6 = [
  //Unit Cost (BTL)
  '20',
  '20',
  '20',
  '45',
  '50',
  '11',
  '12',
  '50',
  '11',
  '12',
  '50',
  '20',
  '45',
  '45',
  '45',
  '45',
  '122',
  '122',
  '135',
  '45',
  '150',
  '95.75',
  '89',
  '30',
  '41',
  '35',
  '35',
  '100',
  '649',
  '13',
  '60',
  '60',
  '60'
]

let listData7 = [
  // Selling Price (BTL)
  '25',
  '25',
  '25',
  '51',
  '55',
  '12',
  '13',
  '55',
  '12',
  '13',
  '55',
  '25',
  '50',
  '50',
  '50',
  '50',
  '130',
  '130',
  '145',
  '50',
  '200',
  '105',
  '95',
  '35',
  '46',
  '41',
  '40',
  '150',
  '700',
  '18',
  '80',
  '80',
  '80'
]
let listData8 = [
  // Re-order Level
  '501',
  '502',
  '503',
  '503',
  '522',
  '523',
  '524',
  '525',
  '526',
  '527',
  '528',
  '529',
  '530',
  '531',
  '532',
  '533',
  '534',
  '535',
  '536',
  '537',
  '538',
  '539',
  '540',
  '541',
  '542',
  '543',
  '544',
  '545',
  '546',
  '515',
  '517',
  '518',
  '519'
]

var counter = localStorage.getItem('data')

setTimeout(() => {
  var textToFind = listData1[counter]

  var dd = document.getElementById('txt_info_itmtyp')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData2[counter]

  var dd = document.getElementById('txt_info_itmclacde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData3[counter]

  var dd = document.getElementById('txt_info_brncde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData4[counter]

  var dd = document.getElementById('txt_info_warcde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  document.querySelector('#txt_info_untmea1').value = ''
  document.querySelector('#txt_info_untcst').value = ''
  document.querySelector('#txt_info_untprc').value = ''
  document.querySelector('#txt_info_crilvl').value = ''
}, 2000)
setTimeout(() => {
  document.querySelector('#txt_info_untmea1').value = listData5[counter]
  document.querySelector('#txt_info_untcst').value = listData6[counter]
  document.querySelector('#txt_info_untprc').value = listData7[counter]
  document.querySelector('#txt_info_crilvl').value = listData8[counter]
}, 3000)
setTimeout(() => {
  document.querySelector('#rdo_trd').checked = true
}, 6000)

localStorage.setItem('data', counter)

//compressed second batch

let listData = [
  'ITM300',
  'ITM302',
  'ITM304',
  'ITM253',
  'ITM325',
  'ITM330',
  'ITM335',
  'ITM340',
  'ITM345',
  'ITM350',
  'ITM355',
  'ITM503',
  'ITM510',
  'ITM511',
  'ITM512',
  'ITM513',
  'ITM521',
  'ITM522',
  'ITM523',
  'ITM524',
  'ITM700',
  'ITM800',
  'ITM801',
  'ITM900',
  'ITM910',
  'ITM920',
  'ITM930',
  'ITM940',
  'ITM950',
  'ITM326',
  'ITM332',
  'ITM334',
  'ITM366',
  'ITM501',
  'ITM502'
]

setTimeout(() => {
  document.querySelector('#add_btn').click()
  // open the page

  setTimeout(() => {
    let listExistngData = [] // Array In which we'll store existing data of list

    document.querySelectorAll('#datatable tr td').forEach(data => {
      // tds only under #datatable tr
      data.id == 'itmdsc' ? listExistngData.push(data.innerText) : false
      // If any td have this id only then insert its text in array
    })

    let counter1 = 0

    setInterval(() => {
      // if condition matches then add that text else try next text
      if (!listExistngData.includes(listData[counter1])) {
        document.querySelector('#txt_info_itmdsc').value = listData[counter1]
        setTimeout(() => {
          document
            .querySelectorAll('.ui-dialog-buttonset')[1]
            .querySelectorAll('button')[0]
            .click()
        }, 2000)
      } else {
        counter1++
      }
    }, 2000)
  }, 3000)
}, 3000)

let listData1 = [
  //Item Type
  '',
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
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY'
]

let listData2 = [
  //Classification
  '',
  'Beverages',
  'Beverages',
  'Beverages',
  'Water',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Energy Drink',
  'Alcohol',
  'Energy Drink',
  'Energy Drink',
  'Alcohol',
  'Alcohol',
  'Alcohol',
  'Alcohol',
  'Alcohol',
  'Alcohol',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Energy Drink'
]

let listData3 = [
  //Brand
  '',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Wilkins',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gatorade',
  'Gilbeys',
  'Red Bull',
  'Red Bull',
  'Tanduay',
  'Tanduay',
  'Tanduay',
  'Tanduay',
  'Tanduay',
  'Tanduay',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Gatorade',
  'Gatorade'
]

let listData4 = [
  //warehouse
  '',
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
  'warehouse1',
  'warehouse1',
  'warehouse1',
  'warehouse1',
  'warehouse1'
]

let listData5 = [
  //U/M
  '',
  'CAN',
  'CAN',
  'CAN',
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
  'BTL',
  'BTL',
  'BTL',
  'BTL',
  'CAN',
  'CAN',
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

let listData6 = [
  //Unit Cost (BTL)
  '',
  '20',
  '20',
  '20',
  '45',
  '50',
  '11',
  '12',
  '50',
  '11',
  '12',
  '50',
  '20',
  '45',
  '45',
  '45',
  '45',
  '122',
  '122',
  '135',
  '45',
  '150',
  '95.75',
  '89',
  '30',
  '41',
  '35',
  '35',
  '100',
  '649',
  '13',
  '60',
  '60',
  '60',
  '20',
  '20'
]

let listData7 = [
  // Selling Price (BTL)
  '',
  '25',
  '25',
  '25',
  '51',
  '55',
  '12',
  '13',
  '55',
  '12',
  '13',
  '55',
  '25',
  '50',
  '50',
  '50',
  '50',
  '130',
  '130',
  '145',
  '50',
  '200',
  '105',
  '95',
  '35',
  '46',
  '41',
  '40',
  '150',
  '700',
  '18',
  '80',
  '80',
  '80',
  '30',
  '30'
]
let listData8 = [
  // Re-order Level
  '',
  '501',
  '502',
  '503',
  '503',
  '522',
  '523',
  '524',
  '525',
  '526',
  '527',
  '528',
  '529',
  '530',
  '531',
  '532',
  '533',
  '534',
  '535',
  '536',
  '537',
  '538',
  '539',
  '540',
  '541',
  '542',
  '543',
  '544',
  '545',
  '546',
  '515',
  '517',
  '518',
  '519',
  '523',
  '524'
]

var message = document.querySelectorAll('.section_title')[0]
message.innerHTML = ''

var counter = localStorage.getItem('data')

setTimeout(() => {
  var textToFind = listData1[counter]

  var dd = document.getElementById('txt_info_itmtyp')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData2[counter]

  var dd = document.getElementById('txt_info_itmclacde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData3[counter]

  var dd = document.getElementById('txt_info_brncde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData4[counter]

  var dd = document.getElementById('txt_info_warcde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  document.querySelector('#txt_info_untmea1').value = ''
  document.querySelector('#txt_info_untcst').value = ''
  document.querySelector('#txt_info_untprc').value = ''
  document.querySelector('#txt_info_crilvl').value = ''
}, 2000)
setTimeout(() => {
  document.querySelector('#txt_info_untmea1').value = listData5[counter]
  document.querySelector('#txt_info_untcst').value = listData6[counter]
  document.querySelector('#txt_info_untprc').value = listData7[counter]
  document.querySelector('#txt_info_crilvl').value = listData8[counter]
}, 3000)
setTimeout(() => {
  document.querySelector('#rdo_trd').checked = true
}, 6000)

counter++

localStorage.setItem('data', counter)
 


//Multiple UM
localStorage.setItem('getRandom', 0)
try {
  let getRand = localStorage.getItem('getRandom')
  listData = [
    'ITM100',
    'ITM200',
    'ITM310',
    'ITM312',
    'ITM314',
    'ITM316',
    'ITM320',
    'ITM322',
    'ITM400',
    'ITM402',
    'ITM500',
    'ITM502'
  ]

  document.querySelector('#pager_search_input') = listData[getRand]

  localStorage.setItem('getRandom', parseInt(getRand) + 1)
} catch (err) {
  message.innerHTML = 'Error: ' + err + '.'
}

// ang laman nya:
try {
  let UM = [
    '',
    'CASE',
    'CASE',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'CASE',
    'CASE',
    'CASE',
    'CASE'
  ]

  let Selling_Price = [
    '',
    '200',
    '800',
    '180',
    '180',
    '180',
    '180',
    '216',
    '216',
    '1950',
    '2940',
    '1080',
    '1080'
  ]

  let UnitCost = [
    '',
    '150',
    '200',
    '132',
    '132',
    '132',
    '132',
    '156',
    '156',
    '1410',
    '2172',
    '720',
    '720'
  ]

  let Conversion = [
    '',
    '10',
    '20',
    '12',
    '12',
    '12',
    '12',
    '13',
    '14',
    '6',
    '6',
    '36',
    '36'
  ]

  var counter1 = localStorage.getItem('data')

  setTimeout(() => {
    document.querySelector('#txtuntmea').value = UM[counter1]
  }, 4000)

  setTimeout(() => {
    document.querySelector('#unitprice').value = Selling_Price[counter1]
  }, 4000)

  setTimeout(() => {
    document.querySelector('#unitcost').value = UnitCost[counter1]
  }, 4000)

  setTimeout(() => {
    document.querySelector('#txtconver').value = Conversion[counter1]
  }, 4000)

  counter1++
  localStorage.setItem('data', counter1)
} catch (err) {
  message.innerHTML = 'Error: ' + err + '.'
}



//compressed third batch

let listData = [
 
  'ITM950',
  'ITM326',
  'ITM332',
  'ITM334',
  'ITM366',
  'ITM501',
  'ITM502'
]

setTimeout(() => {
  document.querySelector('#add_btn').click()
  // open the page

  setTimeout(() => {
    let listExistngData = [] // Array In which we'll store existing data of list

    document.querySelectorAll('#datatable tr td').forEach(data => {
      // tds only under #datatable tr
      data.id == 'itmdsc' ? listExistngData.push(data.innerText) : false
      // If any td have this id only then insert its text in array
    })

    let counter1 = 0

    setInterval(() => {
      // if condition matches then add that text else try next text
      if (!listExistngData.includes(listData[counter1])) {
        document.querySelector('#txt_info_itmdsc').value = listData[counter1]
        setTimeout(() => {
          document
            .querySelectorAll('.ui-dialog-buttonset')[1]
            .querySelectorAll('button')[0]
            .click()
        }, 2000)
      } else {
        counter1++
      }
    }, 2000)
  }, 3000)
}, 3000)

let listData1 = [
  //Item Type
  '',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY',
  'INVENTORY'
  
]

let listData2 = [
  //Classification
  '',
  'Alcohol',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Beverages',
  'Energy Drink'
]

let listData3 = [
  //Brand
  '',
  'Tanduay',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Coca-Cola',
  'Gatorade',
  'Gatorade'
]

let listData4 = [
  //warehouse
  '',
  'warehouse1',
  'warehouse1',
  'warehouse1',
  'warehouse1',
  'warehouse1',
  'warehouse1',
  'warehouse1'
]

let listData5 = [
  //U/M
  '',
  'BTL',
  'BTL',
  'BTL',
  'BTL',
  'BTL',
  'BTL',
  'BTL'
]

let listData6 = [
  //Unit Cost (BTL)
  '',
  '649',
  '13',
  '60',
  '60',
  '60',
  '20',
  '20'
]

let listData7 = [
  // Selling Price (BTL)
  '',
  '700',
  '18',
  '80',
  '80',
  '80',
  '30',
  '30'
]
let listData8 = [
  // Re-order Level
  '',
  '546',
  '515',
  '517',
  '518',
  '519',
  '523',
  '524'
]

var message = document.querySelectorAll('.section_title')[0]
message.innerHTML = ''

var counter = localStorage.getItem('data')

setTimeout(() => {
  var textToFind = listData1[counter]

  var dd = document.getElementById('txt_info_itmtyp')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData2[counter]

  var dd = document.getElementById('txt_info_itmclacde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData3[counter]

  var dd = document.getElementById('txt_info_brncde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  var textToFind = listData4[counter]

  var dd = document.getElementById('txt_info_warcde')
  for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === textToFind) {
      dd.selectedIndex = i
      break
    }
  }
}, 2000)

setTimeout(() => {
  document.querySelector('#txt_info_untmea1').value = ''
  document.querySelector('#txt_info_untcst').value = ''
  document.querySelector('#txt_info_untprc').value = ''
  document.querySelector('#txt_info_crilvl').value = ''
}, 2000)
setTimeout(() => {
  document.querySelector('#txt_info_untmea1').value = listData5[counter]
  document.querySelector('#txt_info_untcst').value = listData6[counter]
  document.querySelector('#txt_info_untprc').value = listData7[counter]
  document.querySelector('#txt_info_crilvl').value = listData8[counter]
}, 3000)
setTimeout(() => {
  document.querySelector('#rdo_trd').checked = true
}, 6000)

counter++

localStorage.setItem('data', counter)
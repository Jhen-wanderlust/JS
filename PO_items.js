//PURCH_RETURN 1
//This is deducted from your payables under PUR-0002.

PURCH_RETURN = {
  trans_date: '07/12/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: null,
  items: ['ITM500'],
  quantity: ['5'],
  price: ['10'],
  vat_setup: ['PUR VAT'],
  UM: ['BTL'],
  discounts: [null, null],
  disc_amount: null
}

console.log(PURCH_RETURN)
console.log(PURCH_RETURN.items.length)
it = PURCH_RETURN.items.length




//PURCH_RETURN 2
PURCH_RETURN = {
  trans_date: '09/02/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: null,
  items: ['ITM100'],
  quantity: ['1'],
  price: ['190'],
  vat_setup: ['PUR VAT'],
  UM: ['CASE'],
  discounts: [null, null],
  disc_amount: null
}

console.log(PURCH_RETURN)
console.log(PURCH_RETURN.items.length)
it = PURCH_RETURN.items.length

//PO1

PO = {
  trans_date: '02/07/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: 'CASH',
  items: ['ITM500', 'ITM501'],
  quantity: ['50', '50'],
  price: ['20', '20'],
  vat_setup: ['PUR VAT', 'PUR VAT'],
  UM: ['BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: null
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

/*PO2:  Per case 20 pcs x 500ml  	
        Per case 10 pcs x 1L  */
PO = {
  trans_date: '02/07/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: '30 Days',
  items: ['ITM200', 'ITM100', 'ITM400', 'ITM500', 'ITM501'],
  quantity: ['100', '200', '200', '300', '300'],
  price: ['10', '15', '30', '20', '20'],
  vat_setup: ['PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT'],
  UM: ['CASE', 'CASE', 'BTL', 'BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: null
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

//PO3 - update on tp
PO = {
  trans_date: '08/22/2019',
  warehouse: 'warehouse1',
  Suplier: 'Ballway',
  terms: 'COD',
  items: ['ITM300', 'ITM400', 'ITM402', 'ITM940'],
  quantity: ['5000', '1000', '1000', '1000'],
  price: ['21', '235', '362', '48'],
  vat_setup: [null],
  UM: ['CAN', 'BTL', 'BTL', 'BTL'],
  discounts: [null, '10', '10', '10'],
  disc_amount: null
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

//PO4
PO = {
  trans_date: '08/22/2019',
  warehouse: 'warehouse1',
  Suplier: 'Echo Distributors',
  terms: 'COD',
  items: ['ITM700'],
  quantity: ['2000'],
  price: ['402'],
  vat_setup: [null],
  UM: ['BTL'],
  discounts: [null]
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

//PO5
PO = {
  trans_date: '02/09/2019',
  warehouse: 'warehouse1',
  Suplier: 'Echo Distributors',
  terms: 'CASH',
  items: ['ITM99', 'ITM100', 'ITM200', 'ITM252', 'ITM253'],
  quantity: ['2000', '2000', '2000', '2000', '2000'],
  price: ['88', '15', '10', '16', '45'],
  vat_setup: [null],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: ['5', '5', '5', '5', '5'],
  disc_amount: ['0.19', '0.29', '1.67', '0.30', '0.86']
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

//PO6
PO = {
  trans_date: '09/09/2019',
  warehouse: 'warehouse1',
  Suplier: 'Foxtrot Distributors',
  terms: 'CASH',
  items: ['ITM500', 'ITM501'],
  quantity: ['1000', '1000'],
  price: ['25.50', '25.50'],
  vat_setup: [null],
  UM: ['BTL', 'BTL'],
  discounts: ['5', '5'],
  disc_amount: ['0.04845', '0.04845']
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

//PO7
PO = {
  trans_date: '09/09/2019',
  warehouse: 'warehouse1',
  Suplier: 'Foxtrot Distributors',
  terms: 'CASH',
  items: ['ITM502', 'ITM503', 'ITM513'],
  quantity: ['60', '2000', '2000'],
  price: ['20', '23', '45'],
  vat_setup: [null],
  UM: ['CASE', 'BTL', 'BTL'],
  discounts: ['5', '5', '5'],
  disc_amount: ['0.38', '0.437', '0.855']
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

//PO8
PO = {
  trans_date: '11/09/2019',
  warehouse: 'warehouse1',
  Suplier: 'Ballway Distributors',
  terms: '60 Days',
  items: ['ITM400', 'ITM402', 'ITM940', 'ITM910', 'ITM920', 'ITM930', 'ITM900'],
  quantity: ['350', '350', '2000', '2000', '2000', '2000', '2000'],
  price: ['235', '362', '48', '30', '41', '35', '35'],
  vat_setup: [null],
  UM: ['CASE', 'CASE', 'BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: ['10', '10', '10', '10', '10', '10', '10'],
  disc_amount: ['4.23', '6.516', '0.864', null, '36.9', '0.5', '0.5']
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

//PO9
PO = {
  trans_date: '09/17/2019',
  warehouse: 'warehouse1',
  Suplier: 'Foxtrot Distributors',
  terms: '90 Days',
  items: [
    'ITM302',
    'ITM304',
    'ITM310',
    'ITM312',
    'ITM314',
    'ITM316',
    'ITM320',
    'ITM322',
    'ITM325',
    'ITM355',
    'ITM500',
    'ITM501'
  ],

  quantity: [
    '3000',
    '3000',
    '250',
    '250',
    '250',
    '250',
    '250',
    '250',
    '5000',
    '5000',
    '5000',
    '5000'
  ],
  price: [
    '20',
    '20',
    '132',
    '132',
    '132',
    '132',
    '216',
    '216',
    '60',
    '60',
    '20',
    '20'
  ],

  vat_setup: [
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT'
  ],

  UM: [
    'CAN',
    'CAN',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'BTL',
    'BTL',
    'BTL',
    'BTL'
  ],

  discounts: [
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '',
    ''
  ],
  disc_amount: null
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

//PO10
PO = {
  trans_date: '09/21/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: '90 Days',
  items: ['ITM310', 'ITM99'],
  quantity: ['500', '2000'],
  price: ['132', '88'],
  vat_setup: ['PUR VAT', 'PUR VAT'],
  UM: ['PACK', 'BTL'],
  discounts: [null, null],
  disc_amount: null
}

console.log(PO)
console.log(PO.items.length)
it = PO.items.length

// Purchases
//purch1
PURCH = {
  trans_date: '07/02/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: 'CASH',
  items: ['ITM500', 'ITM501'],
  quantity: ['50', '50'],
  price: ['20', '20'],
  vat_setup: ['PUR VAT', 'PUR VAT'],
  UM: ['BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: null,
  PO_qty: null,
  PURCH_num: null,
  copy_PO: null
}

console.log(PURCH)
console.log(PURCH.items.length)
it = PURCH.items.length

/*PO2:  Per case 20 pcs x 500ml  	
        Per case 10 pcs x 1L  */
PURCH = {
  trans_date: '07/05/2019', // need to change
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: '30 Days',
  items: ['ITM200', 'ITM100', 'ITM400', 'ITM500', 'ITM501'],
  quantity: ['60', '100', '100', '100', '100'],
  price: ['200', '150', '30', '20', '20'],
  vat_setup: ['PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT'],
  UM: ['CASE', 'CASE', 'BTL', 'BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: null,
  PO_qty: null,
  PURCH_num: null,
  copy_PO: null
}

console.log(PURCH)
console.log(PURCH.items.length)
it = PURCH.items.length

//Purch 3


PURCH = {
  trans_date: '07/07/2019',
  warehouse: 'warehouse1',
  Suplier: 'Ballway Distributors',
  terms: 'CASH',
  items: ['ITM300', 'Delivery Charge'],
  quantity: ['3000', '1',],
  price: ['20', '500'],
  vat_setup: ['PUR VAT', 'PUR VAT'],
  UM: ['CAN','PCS'],
  discounts: ['10'],
  disc_amount: ['0.36'],
  PO_qty: null,
  PURCH_num: null,
  copy_PO: null
}

console.log(PURCH)
console.log(PURCH.items.length)
it = PURCH.items.length


//PURCH 4
PURCH = {
  trans_date: '07/10/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: '30 Days',
  items: ['ITM200', 'ITM200'],
  quantity: ['40', '20'],
  price: ['10', '10'],
  vat_setup: ['PUR VAT', 'PUR VAT'],
  UM: ['CASE', 'CASE'],
  discounts: null,
  disc_amount: null,
  PO_qty: ['40'],
  PURCH_num: 'PUR-0004',
  copy_PO: 'PO-0002'
}

console.log(PURCH)
console.log(PURCH.items.length)
it = PURCH.items.length
pqty = PURCH.PO_qty
//PURCH 5
PURCH = {
  trans_date: '03/08/2019', //nedd change
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: '30 Days',
  items: ['ITM200', 'ITM100', 'ITM500', 'ITM501', 'ITM300', 'ITM302'],
  quantity: ['50', '100', '500', '500', '5000', '5000'],
  price: ['240', '190', '20', '20', '20', '20'],
  vat_setup: ['PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT'],
  UM: ['CASE', 'CASE', 'BTL', 'BTL', 'CAN', 'CAN'],
  discounts: [null, null, '5', '5', '10', '10'],
  disc_amount: [null, null, '0.38', '0.38', '0.36', '0.36'],
  PO_qty: null,
  PURCH_num: null,
  copy_PO: null
}

console.log(PURCH)
console.log(PURCH.items.length)
it = PURCH.items.length
pqty = PURCH.PO_qty
//PURCH 6
PURCH = {
  trans_date: '08/25/2019',
  warehouse: 'warehouse1',
  Suplier: 'Ballway',
  terms: 'COD',
  items: ['ITM300', 'ITM400', 'ITM402', 'ITM940'],
  quantity: ['5000', '500', '500', '500'],
  price: ['21', '235', '362', '48'],
  vat_setup: ['PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT'],
  UM: ['CAN', 'BTL', 'BTL', 'BTL'],
  discounts: [null, '10', '10', '10'],
  disc_amount: null,
  PO_qty: null,
  PURCH_num: null,
  copy_PO: null
}

console.log(PURCH)
console.log(PURCH.items.length)
it = PURCH.items.length
pqty = PURCH.PO_qty
//PURCH 7
PURCH = {
  trans_date: '08/26/2019',
  warehouse: 'warehouse1',
  Suplier: 'Echo Distributors',
  terms: '30 Days',
  EWT: 'PUR GOODS',
  EVAT: null,
  items: ['ITM700'],
  quantity: ['1000'],
  price: ['402'],
  vat_setup: ['PUR VAT'],
  UM: ['BTL'],
  discounts: null,
  disc_amount: null,
  PO_qty: null,
  PURCH_num: null,
  copy_PO: null
}

console.log(PURCH)
console.log(PURCH.items.length)
it = PURCH.items.length
pqty = PURCH.PO_qty

//PURCH 8
PURCH = {
  trans_date: '09/03/2019',
  warehouse: 'warehouse1',
  Suplier: 'Echo Distributors',
  terms: 'COD',
  items: ['ITM99', 'ITM100', 'ITM200', 'ITM252', 'ITM253'],
  EWT: null,
  EVAT: null,
  quantity: ['1200', '1200', '2000', '1000', '1000'],
  price: ['88', '15', '10', '16', '45'],
  vat_setup: ['PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: null,
  disc_amount: null,
  PO_qty: ['1200', '1200', '2000', '1000', '1000'],
  PURCH_num: 'PUR-0008',
  copy_PO: 'PO-0005'
}

console.log(PURCH)
it = PURCH.items.length
pqty = PURCH.PO_qty

//PURCH 9
PURCH = {
  trans_date: '09/09/2019',
  warehouse: 'warehouse1',
  Suplier: 'Foxtrot Distributors',
  terms: '30 Days',
  items: ['ITM500', 'ITM501'],
  EWT: null,
  EVAT: null,
  quantity: ['1000', '1000'],
  price: ['25.50', '25.50'],
  vat_setup: [null],
  UM: ['BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: [null, null],
  PO_qty: ['1000', '1000'],
  PURCH_num: 'PUR-0009',
  copy_PO: 'PO-0006'
}

console.log(PURCH)
it = PURCH.items.length
pqty = PURCH.PO_qty

//PURCH 10
PURCH = {
  trans_date: '09/10/2019', 
  warehouse: 'warehouse1',
  Suplier: 'Foxtrot Distributors',
  terms: '30 Days',
  items: ['ITM502', 'ITM503', 'ITM513'],
  quantity: ['60', '1000', '1000'],
  price: ['20', '23', '45'],
  EWT: null,
  EVAT: null,
  vat_setup: ['PUR VAT', 'PUR VAT', 'PUR VAT'],
  UM: ['CASE', 'BTL', 'BTL'],
  discounts: ['5', '5', '5'],
  disc_amount: ['0.38', '0.437', '0.855'],
  PO_qty: ['60', '1000', '1000'],
  PURCH_num: 'PUR-00010',
  copy_PO: 'PO-0007'
}

console.log(PURCH)
it = PURCH.items.length
pqty = PURCH.PO_qty

//PURCH 11 note : dual Copy PO
PURCH = {
  trans_date: '09/09/2019',
  warehouse: 'warehouse1',
  Suplier: 'Ballway Distributors',
  terms: '60 Days',
  items: [
    'ITM400',
    'ITM402',
    'ITM940',
    'ITM400',
    'ITM402',
    'ITM940',
    'ITM910',
    'ITM920',
    'ITM930',
    'ITM900'
  ],
  quantity: [
    '500',
    '500',
    '500',
    '350',
    '350',
    '2000',
    '2000',
    '2000',
    '2000',
    '2000'
  ],
  price: ['235', '362', '48', '1410', '2172', '48', '30', '41', '35', '35'],
  EWT: 'PUR GOODS',
  EVAT: null,
  vat_setup: [
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT'
  ],
  UM: ['BTL', 'BTL', 'BTL', 'CASE', 'CASE', 'BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
  disc_amount: [
    null,
    null,
    null,
    '25.38',
    '39.10',
    '0.86',
    null,
    null,
   '0.50',
   '0.50'
  ],
  PO_qty1: ['500', '500', '500'],
  PO_qty2: ['350', '350', '2000', '2000', '2000', '2000', '2000'],
  PURCH_num: 'PUR-00011',
  copy_PO: ['PO-0003', 'PO-0008']
}

console.log(PURCH)
it = PURCH.items.length
pqty = PURCH.PO_qty1
pqty1 = PURCH.PO_qty2

//PURCH 12 note : dual Copy PO
PURCH = {
  trans_date: '09/18/2019',
  warehouse: 'warehouse1',
  Suplier: 'Echo Distributors',
  terms: '30 Days',
  items: ['ITM700', 'ITM100', 'ITM200', 'ITM252', 'ITM253'],
  quantity: ['2000', '1200', '1200', '1000', '1000'],
  price: ['402', '15', '10', '16', '45'],
  EWT: 'PUR GOODS',
  EVAT: 'PUR GOODS',
  vat_setup: ['PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: ['5', '10', '10', '10', '10'],
  disc_amount: ['7.64', null, null, null, null],
  PO_qty1: ['2000'],
  PO_qty2: ['1200', '1200', '1000', '1000'],
  PURCH_num: 'PUR-00012',
  copy_PO: ['PO-0004', 'PO-0005']
}

console.log(PURCH)
it = PURCH.items.length
pqty = PURCH.PO_qty1
pqty1 = PURCH.PO_qty2

//PURCH 13 note : dual Copy PO
PURCH = {
  trans_date: '09/18/2019',
  warehouse: 'warehouse1',
  Suplier: 'Echo Distributors',
  terms: '90 Days',
  items: [
    'ITM503',
    'ITM513',
    'ITM302',
    'ITM304',
    'ITM310',
    'ITM312',
    'ITM314',
    'ITM316',
    'ITM320',
    'ITM322',
    'ITM325',
    'ITM332',
    'ITM500',
    'ITM501'
  ],
  quantity: [
    '1000',
    '1000',
    '3000',
    '3000',
    '250',
    '250',
    '250',
    '250',
    '250',
    '250',
    '5000',
    '5000',
    '2000',
    '2000'
  ],
  price: [
    '23',
    '45',
    '20',
    '20',
    '132',
    '132',
    '132',
    '132',
    '216',
    '216',
    '60',
    '60',
    '20',
    '20'
  ],
  EWT: 'PUR GOODS',
  EVAT: null,
  vat_setup: [
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT'
  ],
  UM: [
    'BTL',
    'BTL',
    'CAN',
    'CAN',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'BTL',
    'BTL',
    'BTL',
    'BTL'
  ],
  discounts: [
    '5',
    '5',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    null,
    null
  ],
  disc_amount: [
    '0.437',
    '0.855',
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
  ],
  PO_qty1: [null, '1000', '1000'],
  PO_qty2: [
    '3000',
    '3000',
    '250',
    '250',
    '250',
    '250',
    '250',
    '250',
    '5000',
    '5000',
    '2000',
    '2000'
  ],
  PURCH_num: 'PUR-00013',
  copy_PO: ['PO-0007', 'PO-0009']
}

console.log(PURCH)
pqty = PURCH.PO_qty1
pqty1 = PURCH.PO_qty2
it = PURCH.items.length

//PURCH 14
PURCH = {
  trans_date: '09/23/2019',
  warehouse: 'warehouse1',
  Suplier: 'ABC Marketing',
  terms: '90 Days',
  items: ['ITM310', 'ITM99'],
  quantity: ['300', '2000'],
  price: ['132', '88'],
  vat_setup: ['PUR VAT', 'PUR VAT'],
  UM: ['PACK', 'BTL'],
  discounts: [null, null],
  disc_amount: [null],
  PO_qty: ['300', '2000'],
  PURCH_num: 'PUR-00014',
  copy_PO: 'PO-0010',
  EWT: null,
  EVAT: null,

}

console.log(PURCH)
pqty = PURCH.PO_qty
it = PURCH.items.length

//PURCH 15
PURCH = {
  trans_date: '10/01/2019',
  warehouse: 'warehouse1',
  Suplier: 'Foxtrot Distributors',
  terms: '30 Days',
  items: ['ITM800'],
  quantity: ['100'],
  price: ['20'],
  vat_setup: ['PUR VAT'],
  UM: ['BTL'],
  discounts: [null, null],
  disc_amount:[ null],
  EWT: null,
  EVAT: null,

}

console.log(PURCH)
it = PURCH.items.length


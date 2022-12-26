//SAL01
SAL = {
    trans_date: '07/02/2019',
    warehouse: 'warehouse1',
    Customer: 'Champion Store',
    terms: '30 Days',
    items: ['ITM500', 'ITM501'],
    quantity: ['20', '20'],
    price: ['25', '25'],
    vat_setup: ['SAL VAT', 'SAL VAT'],
    UM: ['BTL', 'BTL'],
    discounts: [null],
    disc_amount: [null]
  }
  
  console.log(SAL)
  console.log(SAL.items.length)
  it = SAL.items.length
  
  //SAL02
  SAL = {
    trans_date: '07/02/2019',
    warehouse: 'warehouse1',
    Customer: 'walk-in',
    terms: 'COD',
    items: ['ITM500'],
    quantity: ['30'],
    price: ['25'],
    vat_setup: ['SAL VAT'],
    UM: ['BTL'],
    discounts: [null],
    disc_amount: [null]
  }
  
  console.log(SAL)
  console.log(SAL.items.length)
  it = SAL.items.length
  
  //SAL3
  SAL = {
    trans_date: '07/06/2019',
    warehouse: 'warehouse1',
    Customer: 'Acme Minimart',
    terms: '30 Days',
    items: ['ITM100', 'ITM400'],
    quantity: ['150', '50'],
    price: ['20', '35'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT', 'SAL VAT'],
    UM: ['CASE', 'BTL'],
    discounts: [null, '10'],
    disc_amount: [null],
    SO_qty: ['150', '50'],
    SAL_num: 'SAL-0003',
    copy_SO: 'SO-0001'
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  
  //SAL4
  SAL = {
    trans_date: '07/06/2019',
    warehouse: 'warehouse1',
    Customer: 'walk-in',
    terms: '30 Days',
    items: ['ITM100'],
    quantity: ['50'],
    price: ['200'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT'],
    UM: ['CASE'],
    discounts: [null],
    disc_amount: ['15'],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  
  //SAL5
  SAL = {
    trans_date: '07/13/2019',
    warehouse: 'warehouse1',
    Customer: 'walk-in',
    terms: '30 Days',
    items: ['water dispensers'],
    quantity: ['5'],
    price: ['1000'],
    EWT: null,
    EVAT: null,
    vat_setup: [null],
    UM: [null],
    discounts: [null],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL6
  SAL = {
    trans_date: '07/13/2019',
    warehouse: 'warehouse1',
    Customer: 'Charlie Enterprises',
    terms: '60 Days',
    items: ['ITM400', 'ITM400', 'ITM300'],
    quantity: ['50', '1', '3000'],
    price: ['50', '50', '17.64'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
    UM: ['BTL', 'BTL', 'CAN'],
    discounts: [null],
    disc_amount: [null, null, '0.32'],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  
  //SAL7
  SAL = {
    trans_date: '08/02/2019',
    warehouse: 'warehouse1',
    Customer: 'Charlie Enterprises',
    terms: '30 Days',
    items: ['ITM100'],
    quantity: ['500'],
    price: ['20'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT'],
    UM: ['BTL'],
    discounts: [null],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL8
  SAL = {
    trans_date: '08/03/2019',
    warehouse: 'warehouse1',
    Customer: 'Charlie Enterprises',
    terms: '30 Days',
    items: ['ITM200', 'ITM100', 'ITM310', 'ITM302'],
    quantity: ['30', '10', '2000', '2000'],
    price: ['200', '200', '25', '25'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
    UM: ['CASE', 'CASE', 'CAN', 'CAN'],
    discounts: [null],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL9
  SAL = {
    trans_date: '08/03/2019',
    warehouse: 'warehouse1',
    Customer: 'Acme',
    terms: '30 Days',
    items: ['ITM200'],
    quantity: ['50'],
    price: ['500'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT'],
    UM: ['CASE'],
    discounts: [null],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL10
  SAL = {
    trans_date: '08/06/2019',
    warehouse: 'warehouse1',
    Customer: 'Goldmart',
    terms: '30 Days',
    items: ['ITM200', 'ITM100', 'ITM310', 'ITM302', 'ITM503'],
    quantity: ['20', '20', '1000', '1000', '200'],
    price: ['200', '200', '25', '25', '25'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
    UM: ['CASE', 'CASE', 'CAN', 'BTL', 'BTL'],
    discounts: [null, null, '3', '3', '3'],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL11
  SAL = {
    trans_date: '08/06/2019',
    warehouse: 'warehouse1',
    Customer: 'Goldmart',
    terms: '30 Days',
    items: ['ITM200', 'ITM100', 'ITM300', 'ITM501'],
    quantity: ['20', '20', '1000', '200'],
    price: ['200', '200', '25', '25'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
    UM: ['BTL', 'BTL', 'CAN', 'BTL'],
    discounts: ['5', '5', '10', '10'],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL12
  SAL = {
    trans_date: '08/27/2019',
    warehouse: 'warehouse1',
    Customer: '888 Distributor',
    terms: '30 Days',
    items: ['ITM700'],
    quantity: ['100'],
    price: ['460'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT'],
    UM: ['BTL'],
    discounts: [null],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL13
  SAL = {
    trans_date: '08/27/2019',
    warehouse: 'warehouse1',
    Customer: '888 Distributor',
    terms: '30 Days',
    items: ['ITM400', 'ITM402', 'ITM700'],
    quantity: ['100', '100', '100'],
    price: ['277.5', '440', '540.7'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
    UM: ['BTL', 'BTL', 'BTL'],
    discounts: [null],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL14
  SAL = {
    trans_date: '09/04/2019',
    warehouse: 'warehouse1',
    Customer: 'Champion Store',
    terms: 'COD',
    items: ['ITM200', 'ITM100', 'ITM99', 'ITM252', 'ITM253'],
    quantity: ['100', '100', '80', '100', '100'],
    price: ['15', '22', '120', '25', '62'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
    UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
    discounts: ['5', '5', '5', '5', '5'],
    disc_amount: ['0.285', '0.418', '2.28', '0.475', '1.178'],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL15
  SAL = {
    trans_date: '09/06/2019',
    warehouse: 'warehouse1',
    Customer: 'Charlie Enterprise',
    terms: '30 Days ',
    items: ['ITM400', 'ITM402', 'ITM700'],
    quantity: ['80', '80', '80'],
    price: ['277.5', '440', '545'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
    UM: ['BTL', 'BTL', 'BTL'],
    discounts: ['10', '10', '10'],
    disc_amount: ['4.995', '7.92', '9.81'],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL16
  SAL = {
    trans_date: '09/06/2019',
    warehouse: 'warehouse1',
    Customer: 'Acme',
    terms: '30 Days ',
    items: ['ITM400', 'ITM400', 'ITM402', 'ITM700', 'ITM940'],
    quantity: ['25', '100', '100', '100', '100'],
    price: ['35', '277.5', '440', '545', '65'],
    EWT: null,
    EVAT: null,
    vat_setup: [
      'VAT Exempt',
      'VAT Exempt',
      'VAT Exempt',
      'VAT Exempt',
      'VAT Exempt'
    ],
    UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
    discounts: ['10', '5', '5', '5', '5'],
    disc_amount: [null, '5.2725', '8.36', '10.355', '1.235'],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL17
  SAL = {
    trans_date: '09/09/2019',
    warehouse: 'warehouse1',
    Customer: 'Blue Star Supermarket',
    terms: 'COD',
    items: ['water dispensers'],
    quantity: ['15'],
    price: ['1000'],
    EWT: null,
    EVAT: null,
    vat_setup: [null],
    UM: [null],
    discounts: [null],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
  //SAL18
  SAL = {
    trans_date: '09/09/2019',
    warehouse: 'warehouse1',
    Customer: 'Walk-in',
    terms: 'COD',
    items: ['ITM100'],
    quantity: ['300'],
    price: ['25'],
    EWT: null,
    EVAT: null,
    vat_setup: ['SAL VAT'],
    UM: ['BTL'],
    discounts: [null],
    disc_amount: [null],
    SO_qty: [null],
    SAL_num: null,
    copy_SO: null
  }
  
  console.log(SAL)
  pqty = SAL.SO_qty
  it = SAL.items.length
//SAL19
SAL = {
  trans_date: '09/09/2019',
  warehouse: 'warehouse1',
  Customer: '888 Distributors',
  terms: '60 Days',
  items: ['water dispensers'],
  quantity: ['10'],
  price: ['1000'],
  EWT: null,
  EVAT: null,
  vat_setup: [null],
  UM: ['PCS'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL20
SAL = {
  trans_date: '09/10/2019',
  warehouse: 'warehouse1',
  Customer: 'Champion Store',
  terms: 'COD',
  items: ['ITM252', 'ITM253'],
  quantity: ['150', '150'],
  price: ['25', '62'],
  EWT: null,
  EVAT: null,
  vat_setup: [null],
  UM: ['BTL', 'BTL'],
  discounts: ['5', '5'],
  disc_amount: ['0.475', '1.178'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL21
SAL = {
  trans_date: '09/10/2019',
  warehouse: 'warehouse1',
  Customer: 'Ricci A. Grocery',
  terms: 'CASH',
  items: ['ITM99'],
  quantity: ['500'],
  price: ['110'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT'],
  UM: ['BTL'],
  discounts: ['5'],
  disc_amount: ['0.29'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL22
SAL = {
  trans_date: '09/10/2019',
  warehouse: 'warehouse1',
  Customer: '888 Distributor',
  terms: 'COD',
  items: ['ITM200', 'ITM100', 'ITM99', 'ITM252', 'ITM253'],
  quantity: ['100', '100', '100', '100', '100'],
  price: ['15', '22', '120', '20', '56'],
  EWT: null,
  EVAT: null,
  vat_setup: [null],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: ['5', '5', '5', '5', '5'],
  disc_amount: ['0.285', '0.418', '2.28', '0.38', '1.064'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL23
SAL = {
  trans_date: '09/11/2019',
  warehouse: 'warehouse1',
  Customer: 'Holiday Supermart',
  terms: 'CASH',
  items: ['ITM300', 'ITM302', 'ITM304'],
  quantity: ['100', '100', '100'],
  price: ['25', '25', '25'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['CAN', 'CAN', 'CAN'],
  discounts: ['5', '5', '5'],
  disc_amount: [null, '0.475', '0.475'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL24
SAL = {
  trans_date: '09/11/2019',
  warehouse: 'warehouse1',
  Customer: 'Gold Mart',
  terms: 'CASH',
  items: ['ITM300', 'ITM302', 'ITM304', 'ITM500', 'ITM500'],
  quantity: ['150', '150', '150', '100', '100'],
  price: ['25', '25', '25', '25.5', '25.5'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: [null, '5', '5', '', ''],
  disc_amount: ['', '0.475', '0.475', '', ''],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL25
SAL = {
  trans_date: '09/11/2019',
  warehouse: 'warehouse1',
  Customer: '1678 Shopping Mall',
  terms: '30 Days',
  items: [
    'ITM100',
    'ITM300',
    'ITM302',
    'ITM304',
    'ITM500',
    'ITM501',
    'ITM502',
    'ITM503',
    'ITM513'
  ],
  quantity: ['100', '200', '200', '200', '100', '100', '100', '100', '100'],
  price: ['22', '25', '25', '25', '30', '30', '30', '32', '65'],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED'
  ],
  UM: ['BTL', 'CAN', 'CAN', 'CAN', 'BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: [null, null, '10', '10', '10', '10', '10', '10', '10'],
  disc_amount: ['1', '1', null, null, null, null, null, null, '0.5'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL26
SAL = {
  trans_date: '09/11/2019',
  warehouse: 'warehouse1',
  Customer: 'Ricci A. Grocery',
  terms: '30 Days',
  items: ['ITM400', 'ITM402', 'ITM700'],
  quantity: ['200', '200', '200'],
  price: ['277.5', '440', '540.7'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL'],
  discounts: ['10', '10', '10'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL27
SAL = {
  trans_date: '09/11/2019',
  warehouse: 'warehouse1',
  Customer: 'Ricci A. Grocery',
  terms: '30 Days',
  items: ['ITM400', 'ITM402', 'ITM700'],
  quantity: ['200', '200', '200'],
  price: ['277.5', '440', '540.7'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL'],
  discounts: ['10', '10', '10'],
  disc_amount: ['4.995', '7.92', '9.7326'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL28
SAL = {
  trans_date: '09/12/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: [
    'ITM100',
    'ITM300',
    'ITM302',
    'ITM304',
    'ITM500',
    'ITM501',
    'ITM502',
    'ITM503',
    'ITM513',
    'ITM900',
    'ITM910',
    'ITM920',
    'ITM930'
  ],
  quantity: [
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50'
    
  ],
  price: [
    '22',
    '25',
    '25',
    '25',
    '30',
    '30',
    '30',
    '35',
    '65',
    '65',
    '42',
    '58',
    '48'
  ],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED',
    'VAT 0 RATED'
  ],
  UM: [
    'BTL',
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
    'BTL'
  ],
  discounts: [
    null,
    null,
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
    '10'
    
  ],
  disc_amount: [
    '1',
    '1',
    null,
    null,
    null,
    null,
    null,
    null,
    '0.5',
    '1.235',
    '0.798',
    '1.102',
    '0.912',
    null
  ],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL29
SAL = {
  trans_date: '09/13/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: '30 Days',
  items: [
    'ITM200',
    'ITM100',
    'ITM99',
    'ITM253',
    'ITM252',
    'ITM300',
    'ITM302',
    'ITM304',
    'ITM500',
    'ITM501',
    'ITM502',
    'ITM503',
    'ITM513',
    'ITM400',
    'ITM402',
    'ITM700',
    'ITM940',
    'ITM900',
    'ITM910',
    'ITM920',
    'ITM930'
  ],
  quantity: [
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30',
    '30'
  ],
  price: [
    '15',
    '22',
    '110',
    '22',
    '60',
    '25',
    '25',
    '25',
    '30',
    '30',
    '30',
    '35',
    '65',
    '285',
    '490',
    '545',
    '65',
    '41',
    '58',
    '48',
    '48'
  ],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'VAT EXEMPT',
    'VAT EXEMPT',
    'VAT EXEMPT',
    'VAT EXEMPT',
    'VAT EXEMPT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT'
  ],
  UM: [
    'BTL',
    'BTL',
    'BTL',
    'BTL',
    'BTL',
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
    'BTL'
  ],
  discounts: [
    null,
    null,
    null,
    null,
    null,
    null,
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5'
  ],
  disc_amount: [
    '1',
    '1',
    null,
    '1',
    '1',
    '1',
    null,
    null,
    null,
    null,
    null,
    null,
    '0.5',
    '5.415',
    '9.31',
    '10.355',
    '1.235',
    '0.779',
    '1.102',
    '0.912',
    null
  ],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL30
SAL = {
  trans_date: '09/14/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: [
    'ITM300',
    'ITM302',
    'ITM304',
    'ITM500',
    'ITM501',
    'ITM502',
    'ITM503',
    'ITM513',
    'ITM400',
    'ITM402',
    'ITM900',
    'ITM910',
    'ITM920',
    'ITM930',
    'Delivery Charge'
  ],
  quantity: [
    '20',
    '20',
    '20',
    '20',
    '20',
    '20',
    '20',
    '20',
    '20',
    '20',
    '20',
    '20',
    '20',
    '20'
  ],
  price: [
    '25',
    '25',
    '25',
    '30',
    '30',
    '30',
    '35',
    '65',
    '285',
    '490',
    '41',
    '58',
    '48',
    '48',
    '500'
  ],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT'
  ],
  UM: [
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
    'BTL'
  ],
  discounts: [
    null,
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
    '10',
    '10',
    '10'
  ],
  disc_amount: [
    '1',
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
  ],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL31
SAL = {
  trans_date: '09/14/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'COD',
  items: [
    'ITM300',
    'ITM500',
    'ITM501',
    'ITM502',
    'ITM503',
    'ITM513',
    'ITM400',
    'ITM402',
    'ITM700',
    'Delivery Charge'
  ],
  quantity: ['25', '25', '25', '25', '25', '25', '20', '20', '20', '1'],
  price: ['25', '30', '30', '30', '35', '65', '285', '490', '545', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT'
  ],
  UM: ['CAN', 'BTL', 'BTL', 'BTL', 'BTL', 'BTL', 'BTL', 'BTL', 'BTL', 'PCS'],
  discounts: [null, '10', '10', '10', '10', '10', '10', '10', '5', null],
  disc_amount: ['1', null, null, null, null, null, null, null, null, null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL32
SAL = {
  trans_date: '09/16/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'COD',
  items: ['ITM500', 'Delivery Charge'],
  quantity: ['150','1'],
  price: ['30', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', null],
  UM: ['BTL'],
  discounts: ['20'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL33
SAL = {
  trans_date: '09/16/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM300', 'Delivery Charge'],
  quantity: ['250', '1'],
  price: ['50', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', null],
  UM: ['CAN'],
  discounts: ['20'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL34
SAL = {
  trans_date: '09/17/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'COD',
  items: ['ITM253', 'Delivery Charge'],
  quantity: ['120', '1'],
  price: ['60', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT'],
  UM: ['CAN', 'PCS'],
  discounts: ['20'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL35
SAL = {
  trans_date: '09/17/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'COD',
  items: ['ITM200', 'ITM100', 'ITM99', 'ITM253', 'ITM252', 'Delivery Charge'],
  quantity: ['50', '50', '50', '50', '50', '1'],
  price: ['15', '22', '110', '22', '60', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL', 'PCS'],
  discounts: ['10', '10', '10', '10', '10', null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL36
SAL = {
  trans_date: '09/17/2019',
  warehouse: 'warehouse1',
  Customer: 'Quick Entry',
  terms: 'COD',
  items: ['ITM400', 'ITM402', 'ITM700', 'ITM940'],
  quantity: ['50', '50', '50', '20'],
  price: ['285', '490', '545', '65'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL'],
  discounts: ['5', '5', '5', '5'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL37
SAL = {
  trans_date: '09/18/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'COD',
  items: [
    'ITM99',
    'ITM252',
    'ITM300',
    'ITM302',
    'ITM304',
    'ITM310',
    'ITM312',
    'ITM314',
    'ITM316',
    'ITM320',
    'ITM322',
    'ITM325',
    'ITM332'
  ],
  quantity: [
    '20',
    '20',
    '30',
    '30',
    '30',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '50',
    '50'
  ],
  price: [
    '110',
    '21',
    '25',
    '25',
    '25',
    '180',
    '180',
    '180',
    '180',
    '216',
    '216',
    '80',
    '80'
  ],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT'
  ],
  UM: [
    'BTL',
    'BTL',
    'CAN',
    'CAN',
    'CAN',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'PACK',
    'BTL',
    'BTL'
  ],
  discounts: [
    null,
    null,
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
    '10'
  ],
  disc_amount: [
    '10',
    '1',
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
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL38
SAL = {
  trans_date: '09/18/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM325', 'ITM332', 'ITM304', 'ITM900', 'ITM910', 'ITM920', 'ITM930'],
  quantity: ['60', '60', '50', '50', '50', '50', '50'],
  price: ['80', '80', '25', '41', '58', '48', '48'],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT'
  ],
  UM: ['BTL', 'BTL', 'BTL', 'BTL'],
  discounts: ['10', '10', '10', '5', '5', '5', '5'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL39
SAL = {
  trans_date: '09/18/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'COD',
  items: ['ITM503', 'ITM513'],
  quantity: ['200', '200'],
  price: ['34.3', '63.7'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL40
SAL = {
  trans_date: '09/18/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'COD',
  items: ['ITM300', 'ITM310', 'ITM320'],
  quantity: ['30', '50', '50'],
  price: ['25', '180', '216'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['CAN', 'PACK', 'PACK'],
  discounts: [null, '10', '10'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL41
SAL = {
  trans_date: '09/19/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM310', 'ITM312', 'ITM314', 'ITM325'],
  quantity: ['100', '50', '50', '75'],
  price: ['180', '180', '180', '80'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['PACK', 'PACK', 'PACK', 'BTL'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL42
SAL = {
  trans_date: '09/19/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM300', 'ITM302', 'ITM304'],
  quantity: ['50', '50', '50'],
  price: ['25', '25', '25'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['CAN', 'CAN', 'CAN'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL43
SAL = {
  trans_date: '09/19/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM502', 'ITM503', 'ITM513', 'ITM325', 'ITM332'],
  quantity: ['75', '75', '75', '50', '50'],
  price: ['30', '35', '65', '80', '80'],
  EWT: null,
  EVAT: null,
  vat_setup: [null, 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'PACK', 'PACK'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL44
SAL = {
  trans_date: '09/19/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM310', 'ITM312', 'ITM314'],
  quantity: ['60', '20', '20'],
  price: ['180', '180', '180'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['PACK', 'PACK', 'PACK'],
  discounts: ['10', '10', '10'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL45
SAL = {
  trans_date: '09/20/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM99'],
  quantity: ['100'],
  price: ['110'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT'],
  UM: ['BTL'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL46
SAL = {
  trans_date: '09/20/2019',
  warehouse: 'warehouse1',
  Customer: '888 Distributor',
  terms: 'COD',
  items: ['ITM200', 'ITM100', 'ITM99', 'ITM402', 'ITM700'],
  quantity: ['80', '80', '80', '50', '50'],
  price: ['13.5', '19.8', '108', '441', '490.5'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: ['5', '5', '5', '5', '5'],
  disc_amount: ['0.2565', '0.3762', '2.052', '8.379', '9.3195'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL47
SAL = {
  trans_date: '09/21/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM99'],
  quantity: ['500'],
  price: ['110'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT'],
  UM: ['BTL'],
  discounts: ['5'],
  disc_amount: ['2.09'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL48
SAL = {
  trans_date: '09/21/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM400', 'ITM402', 'ITM930', 'ITM940'],
  quantity: ['50', '50', '30', '20'],
  price: ['270.75', '465.5', '45.6', '61.75'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL49
SAL = {
  trans_date: '09/21/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM310', 'ITM502', 'ITM200'],
  quantity: ['25', '105', '200'],
  price: ['180', '30', '15'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['PACK', 'BTL', 'BTL'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL50
SAL = {
  trans_date: '09/21/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM500', 'ITM501', 'ITM502', 'Delivery Charge'],
  quantity: ['150', '150', '150', '1'],
  price: ['30', '30', '30', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['PACK', 'BTL', 'BTL'],
  discounts: ['5', '5', '5'],
  disc_amount: ['3.42', '0.57', '0.285'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL51
SAL = {
  trans_date: '09/23/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM300', 'ITM300', 'ITM320', 'Delivery Charge'],
  quantity: ['300', '30', '50'],
  price: ['25', '25', '216', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', null, 'SAL VAT'],
  UM: ['PACK', 'BTL', 'BTL'],
  discounts: ['5', '5', '5'],
  disc_amount: ['3.42', '0.57', '0.285'],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL52
SAL = {
  trans_date: '09/23/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM253', 'Delivery Charage'],
  quantity: ['200', '1'],
  price: ['60', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', null],
  UM: ['BTL', 'PCS'],
  discounts: ['10', '10'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: [null],
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL53
SAL = {
  trans_date: '09/24/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM200', 'ITM100', 'ITM99', 'ITM253', 'ITM252', 'Delivery Charage'],
  quantity: ['120', '120', '50', '120', '120', '1'],
  price: ['15', '20', '100', '21', '60', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL', 'PCS'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL54
SAL = {
  trans_date: '09/24/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM400', 'ITM700', 'ITM900', 'ITM940', 'Delivery Charage'],
  quantity: ['75', '75', '100', '75', '1'],
  price: ['325', '545', '41', '65', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'PCS'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL55
SAL = {
  trans_date: '09/25/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM400', 'ITM700', 'ITM900', 'ITM940', 'Delivery Charage'],
  quantity: ['75', '75', '100', '75', '1'],
  price: ['285', '545', '41', '65', '500'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL', 'BTL', 'BTL'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL56
SAL = {
  trans_date: '09/25/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM300', 'ITM302', 'ITM304'],
  quantity: ['180', '180', '180'],
  price: ['25', '25', '25'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['CAN', 'CAN', 'CAN'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length
//SAL57
SAL = {
  trans_date: '09/25/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: [
    'ITM99',
    'ITM252',
    'ITM253',
    'ITM512',
    'ITM503',
    'ITM325',
    'ITM332',
    'ITM930'
  ],
  quantity: ['10', '50', '50', '50', '50', '50', '50', '50'],
  price: ['110', '21', '57', '35', '65', '80', '80', '48'],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT'
  ],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL', 'PACK', 'PACK', 'BTL'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL58
SAL = {
  trans_date: '09/25/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM300', 'ITM304', 'ITM310', 'ITM320', 'ITM325'],
  quantity: ['130', '130', '30', '30', '50'],
  price: ['25', '25', '180', '216', '80'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['CAN', 'CAN', 'PACK', 'PACK', 'BTL'],
  discounts: [null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL59
SAL = {
  trans_date: '09/26/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM325', 'ITM332'],
  quantity: ['260', '260'],
  price: ['80', '80'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL'],
  discounts: ['5', '5'],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL60
SAL = {
  trans_date: '09/26/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM300', 'ITM302', 'ITM304'],
  quantity: ['150', '50', '50'],
  price: ['25', '25', '25'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['CAN', 'CAN', 'CAN'],
  discounts: [null, null],
  disc_amount: [null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL61
SAL = {
  trans_date: '09/26/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM99', 'ITM200', 'ITM325'],
  quantity: ['20', '100', '250'],
  price: ['110', '21', '80'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'PACK', 'PACK'],
  discounts: [null, null, '10'],
  disc_amount: [null, '1', null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL62
SAL = {
  trans_date: '09/27/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM310', 'ITM314', 'ITM316', 'ITM320', 'ITM322'],
  quantity: ['180', '180', '180', '216', '216'],
  price: ['50', '50', '50', '100', '100'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT', 'SAL VAT'],
  UM: ['PACK', 'PACK', 'PACK', 'PACK', 'PACK'],
  discounts: [null, null, '10'],
  disc_amount: [null, '1', null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL63
SAL = {
  trans_date: '09/28/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM310', 'ITM314'],
  quantity: ['60', '60'],
  price: ['180', '180'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT'],
  UM: ['PACK', 'PACK'],
  discounts: [null, null],
  disc_amount: [null, null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL64
SAL = {
  trans_date: '09/28/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM100', 'ITM200'],
  quantity: ['120', '100'],
  price: ['20', '15'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: [null, null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL65
SAL = {
  trans_date: '09/30/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM400', 'ITM700'],
  quantity: ['150', '150'],
  price: ['285', '545'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: [null, null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL66
SAL = {
  trans_date: '09/30/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM200', 'ITM100', 'ITM99', 'ITM253', 'ITM252'],
  quantity: ['150', '150', '50', '100', '100'],
  price: ['15', '20', '120', '22', '60'],
  EWT: null,
  EVAT: null,
  vat_setup: [null],
  UM: ['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: [null, null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL67
SAL = {
  trans_date: '09/30/2019',
  warehouse: 'warehouse1',
  Customer: 'Walk-in',
  terms: 'CASH',
  items: ['ITM920', 'ITM930'],
  quantity: ['300', '300'],
  price: ['48', '48'],
  EWT: null,
  EVAT: null,
  vat_setup: ['SAL VAT', 'SAL VAT'],
  UM: ['BTL', 'BTL'],
  discounts: [null, null],
  disc_amount: [null, null],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length

//SAL68
SAL = {
  trans_date: '09/30/2019',
  warehouse: 'warehouse1',
  Customer: 'Quick Entry',
  terms: 'COD',
  items: [
    'ITM200',
    'ITM100',
    'ITM99',
    'ITM252',
    'ITM253',
    'ITM300',
    'ITM310',
    'ITM302',
    'ITM304',
    'ITM503',
    'ITM500',
    'ITM501',
    'ITM502',
    'ITM513',
    'ITM400',
    'ITM402',
    'ITM700',
    'ITM940',
    'ITM900',
    'ITM910',
    'ITM920',
    'ITM930'
  ],
  quantity: [
    '80',
    '80',
    '30',
    '80',
    '80',
    '100',
    '50',
    '50',
    '50',
    '30',
    '30',
    '30',
    '30',
    '30',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50',
    '50'
  ],
  price: [
    '15',
    '22',
    '110',
    '22',
    '60',
    '25',
    '180',
    '25',
    '25',
    '30',
    '30',
    '30',
    '35',
    '65',
    '285',
    '490',
    '545',
    '65',
    '41',
    '58',
    '48',
    '48'
  ],
  EWT: null,
  EVAT: null,
  vat_setup: [
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT',
    'SAL VAT'
  ],
  UM: [
    'BTL',
    'BTL',
    'BTL',
    'BTL',
    'BTL',
    'CAN',
    'PACK',
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
    'BTL'
  ],
  discounts: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5'
  ],
  disc_amount: [
    '1',
    '1',
    '3',
    '1',
    '1',
    '1',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    '0.5',
    '5.415',
    '9.31',
    '10.355',
    '1.235',
    '0.779',
    '1.102',
    '0.912',
    '0.912'
  ],
  SO_qty: [null],
  SAL_num: null,
  copy_SO: null
}

console.log(SAL)
pqty = SAL.SO_qty
it = SAL.items.length



//Sales Return & Application to Receivables should be used:

var amount = document.querySelector('#total_amount').value;
var balance = document.querySelector('#total_balance').value;

sale_srt = [amount, balance ,null, null ]

//Print array list values with loop to div dynamically 

var amnt_aply = document.querySelectorAll("input.regex-numericwithcommaperiod");


for (var i = 0; i < sale_srt.length; i++) {

    amnt_aply[i].value = sale_srt[i];
};



sale_srt = ['1000','10000',null,null]

//Print array list values with loop to div dynamically 

var amnt_aply = document.querySelectorAll("input.regex-numericwithcommaperiod");


for (var i = 0; i < sale_srt.length; i++) {

    amnt_aply[i].value = sale_srt[i];
};


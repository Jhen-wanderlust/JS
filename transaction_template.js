class transaction{

    constructor( trans_date, warehouse,Suplier, terms, items, quantity, price,vat_setup, UM )
                          {
                        this.trans_date = trans_date;
                        this.warehouse = warehouse;
                        this.Suplier = Suplier;
                        this.terms = terms;
                        this.items = items;
                        this.quantity = quantity;
                        this.price = price;
                        this.vat_setup = vat_setup;
                        this.UM = UM;


                       
                          }
                 }


                 //Instantiate object

                 const PO_0001 = new transaction( '02/07/2019','warehouse1','ABC Marketing','CASH', ['ITM5000','ITM5100'], ['50','50'] ,['20','20'],['PUR VAT'],  ['BTL','CAN','CASE']);


                 console.log(PO_0001);



                 
/*PO2:  Per case 20 pcs x 500ml  	
        Per case 10 pcs x 1L  */
const PO2 = new transaction('07/02/2019',
'warehouse1',
'ABC Marketing',
'30 Days',
[   'ITM2000',
    'ITM1000',
    'ITM4000',
    'ITM5000',
    'ITM5010'
],
['100', '200', '200', '300', '300'],
['10', '15', '30', '20', '20'],
['PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT', 'PUR VAT'],
['CASE', 'CASE', 'BTL', 'BTL', 'BTL'],
[null, null]);



const PO3 = new transaction('22/08/2019',
'warehouse1',
'Ballway',
'COD',
[   'ITM3000',
    'ITM4000',
    'ITM4020',
    'ITM9400'],
['100', '200', '200', '300', '300'],
['10', '15', '30', '20', '20'],
[null],
['CAN', 'BTL', 'BTL', 'BTL'],
[null, '10', '10', '10']);

const PO4 = new transaction('22/08/2019',
'warehouse1',
'Echo Distributors',
'COD',
['ITM7000'],
['2000'],
['402'],
[null],
['BTL'],
[null]);

const PO5 = new transaction(
'02/09/2019',
'warehouse1',
'Echo Distributors',
'CASH',
['ITM990',
    'ITM1000',
    'ITM2000',
    'ITM2520',
    'ITM2530'
],
['2000', '2000', '2000', '2000', '2000'],
['88', '15', '10', '16', '45'],
[null],
['BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
['5', '5', '5', '5', '5']
['0.19',
'0.29',
'1.67',
'0.30',
'0.86'
],
);

const PO6 = new transaction(
'09/09/2019',
'warehouse1',
'Foxtrot Distributors',
'CASH',
['ITM5000',
    'ITM5010'],
['1000', '1000'],
['25.50', '25.50'],
[null],
['BTL', 'BTL'],
['5', '5']);
[   '0.04845',
'0.04845'];




const PO7 = new transaction(
'09/09/2019',
'warehouse1',
'Foxtrot Distributors',
'CASH',
['ITM5020',
    'ITM5030',
    'ITM5130'],
['60', '2000', '2000'],
['20', '23', '45'],
[null],
['CASE', 'BTL', 'BTL'],
['5', '5', '5'],
[
    '0.38',
    '0.437',
    '0.855'
]);

const PO8 = new transaction(
'09/09/2019',
'warehouse1',
'Ballway Distributors',
'60 Days',
[   'ITM5020',
    'ITM5030',
    'ITM5130 '],
['350', '350', '2000', '2000', '2000', '2000', '2000'],
['20', '23', '45'],
[null],
['CASE', 'CASE', 'BTL', 'BTL', 'BTL', 'BTL', 'BTL'],
['10', '10', '10', '10', '10', '10', '10'],
[    '4.23',
    '6.516',
    '0.864',
    null,
    '36.9',
    '0.5',
    '0.5',
],
);


const PO9 = new transaction(
'09/17/2019',
'warehouse1',
'Foxtrot Distributors',
'90 Days',
[   'ITM3020',
    'ITM3040',
    'ITM3100',
    'ITM3120',
    'ITM3140',
    'ITM3160',
    'ITM3200',
    'ITM3220',
    'ITM3250',
    'ITM3550',
    'ITM5000',
    'ITM5010'],

[   '30000',
    '30000',
    '2500',
    '2500',
    '2500',
    '2500',
    '2500',
    '2500',
    '50000',
    '50000',
    '50000',
    '50000'
],
[   '20',
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

[   'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    'PUR VAT',
    null,
    null
],

[   'CAN',
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
    'BTL',],


[   '10',
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

);


const PO10 = new transaction(
'09/21/2019',
'warehouse1',
'ABC Marketing',
'90 Days',
['ITM3100', 'ITM990'],
['500', '2000'],
['132', '88'],
['PUR VAT',
    'PUR VAT'],
[ 'PACK','BTL'],
[null, null],
[null, null],
);


                                                    

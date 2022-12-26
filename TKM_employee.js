

                 
  //👉️ generate the next wednesday , this is only for REST OT employee
  function getNextwednesday(date = new Date()) {
    const dateCopy = new Date(date.getTime());

    const nextwednesday = new Date(
      dateCopy.setDate(
        dateCopy.getDate() + ((7 - dateCopy.getDay() + 3) % 7 || 7),
      ),
    );

    return nextwednesday;
  }

  // 👇️ Get wednesday of Next Week and assign the next date to 
  var me = getNextwednesday(new Date()) 
  me.setDate(me.getDate()+1);
  var me2 = me.toLocaleDateString();
  var change = me2.replace('/','-'); 
  var change1 = change.replace('/','-'); 
  document.querySelector('#actdte').value= change1;



//compare two arrays
let bookedTime =[11,12],
allTime =[11,12,13];

let checker = (arr, target) => target.every(v => arr.includes(v));

let checktime = checker(bookedTime,allTime );

if (checktime == true){

 document.querySelectorAll('.select-time')[0].innerHTML = "No Available Time ";
}else {
false;
}


//
let employee_from = document.querySelector('#txt_empfrom');
let employee_to = document.querySelector('#txt_empto');
let dept = document.querySelector('#txt_dept');
let payroll_group = document.querySelector('#sel_paygrp');
let rdo_empname = document.querySelector('#rdo_empname');
let rdo_dept = document.querySelector('#rdo_dept');
let rdo_paygrp = document.querySelector('#rdo_paygrp');


rdo_empname.checked = true;
employee_from.value = "Butawan, Jhen L.";


//EMPLOYEE TKM

localStorage.setItem('data7', 0)
//separate


   var ids = [
                        null,
                 '#rdo_dept',
              '#rdo_empname',
               '#rdo_paygrp'

            ]

var counter = localStorage.getItem('data7')


setTimeout(() => {
    document.querySelector(ids[counter]).checked = true;
}, 4000);



setTimeout(() => {
    document.querySelector('#btn_hrfile_emp_srch').click();

}, 4000);

counter++
localStorage.setItem('data7', counter)




//clear local storage

if (localStorage.data7 =='3'){

    localStorage.clear();
}else{

    false;
}



localStorage.setItem('data8', 0)
//separate

var valid_data = [
                             null,
            'Dela Cruz, Gwenn G.',
               'Butawan, Jhen L.',
                 'Calma, Carl L.'


            
]

let counter1 = localStorage.getItem('data8')

setTimeout(() => {
        
    first_data = document.querySelectorAll('.oddemployee div')[3].innerHTML;

        if (first_data === valid_data[counter1]){
            alertify.confirm( first_data  + ' '+  'is matched');

        }else{

            alertify.confirm( first_data + ' '+ 'is not matched');
        }
        }, 4000);

counter1++
localStorage.setItem('data8', counter1)




var y = document.querySelectorAll('#div_databodyemployee div div option')
var sub_array1 = [];

for (var i=7; i< y.length; i += 8){
var nametext = y[i].innerText;  

    sub_array1.push(nametext);
    
};

var options = {
    Employee_Code: sub_array1,
  }
  
  var string = JSON.stringify(options);
  alertify.confirm(string);






var x = document.querySelectorAll(".evenemployeefile div")
var sub_array = [];

for (var i=0; i< x.length; i++){
var nametext = x[i].innerText;  

    sub_array.push(nametext);
   
};

var options = {
    sub_array:  sub_array,
    sub_array1: sub_array1,
  }
  
  var string = JSON.stringify(options);
  alertify.confirm(string);





var data = {};
var data1 = {};
for (const key of sub_array) {
      data[key] = null;
}

for (const key of sub_array1) {
    data1[key] = null;
}

var options = {
  data: data,
  data1: data1,
}

var string = JSON.stringify(options);


string;

var x = document.querySelector('#sel_shiftcde')
var sub_array = [];

for (var i=0; i< x.length; i++){
var nametext = x[i].innerText;  

    sub_array.push(nametext);
   
};

var options = {
    sub_array:  sub_array,
  
  }
  
  var string = JSON.stringify(options);
  alertify.confirm(string);











//shift file

//add shiftfile
Add_click();

//pause 10 mins

localStorage.clear();
//fired first
  localStorage.setItem('data7', 0)
  localStorage.setItem('data8', 0)
  localStorage.setItem('data9', 0)
  localStorage.setItem('data10', 0)
  //separate
  
     
  
     var ids = [ //select  restday checkbox
                          null,
                    '#chk_mon',
                    '#chk_tue',
                    '#chk_wed',
                    '#chk_thu',
                    '#chk_fri',
                    '#chk_sat',
                    '#chk_sun'
  
              ]

     var shiftcode = [ //shiftcode 
                          null,
                  'shiftmonday',
                'shifttuesday',
              'shiftwednesday',
               'shiftthursday',
                 'shiftfriday',
                 'shiftSatday',
                 'shiftSunday'
            ]

     var description = [  //shift description
                                                                    null,
                          'monday restday : all about Grace Period Mins',
                      'tuesday restday: all about Break require In Out ',
                                      'wed restday : all about Overtime',
                           'thursday restday :all about manual holidays',
                 'Friday restday :all about grants if worked on holiday',
  'saturday restday :all about expanded version flexitime, No night dif',
                         'Sunday restday :all about Break Time Duration'
                ]
  
  var counter = localStorage.getItem('data7')
  
  
  setTimeout(() => {
      document.querySelector("#chk_sun").checked = false;
      document.querySelector('#txt_add_shiftcode').value = shiftcode[counter];
      document.querySelector('#txt_add_shiftdsc').value = description[counter];
  }, 4000);
  setTimeout(() => {
      document.querySelector(ids[counter]).checked = true;
      if (counter === 3){

        document.querySelector('#chk_thu').checked = true;

      }
  }, 6000);
 
  
  counter++
  localStorage.setItem('data7', counter)
  
//call a function inside an object
//mon - lates


//pause 20 mins

var counter = localStorage.getItem('data8')


  const obj = {
        data:5,
        mon() {    
          //mon - lates
          //Grace Period (Mins)
          document.querySelector('#txt_lategraceperiod').value= this.data ;
          document.querySelector('#chk_incgp').checked = true;
           //First Log as "IN", Last log as "OUT"
          setTimeout(() => {
            document.querySelector('#chk_firstlast').checked = true;
            validate_filo();
           
            }, 4000);

        },

        tues() {//tuesday - Break require In / Out 
          document.querySelector('#chk_reqiobreak').checked = true;
        },

        wed() {
             //Overtime Validation Method:
                  //Authorize Early Log as OT between Start Time and Time In 
                  document.querySelector('#chk_earlylog').checked = true;
                  //Auto Authorized Holiday
                  document.querySelector('#chk_authhol').checked = true;
                  //Set OT as RST OT if the next day falls on Rest Day
                  document.querySelector('#chk_otasrst').checked = true;
   
                        setTimeout(() => {// Require In/Out on Overtime
                          document.querySelector('#chk_reqio_ot').checked = true;
                          change_schedule_form();
                        }, 4000);

                        setTimeout(() => {
                          document.querySelector('#txt_otin').value = "8:00 AM";
                          document.querySelector('#txt_otout').value = "8:00 PM";
                        }, 6000);
                        

                  
                  },

        thur() { //manual holidays
          document.querySelector('#rdo_manual').click();
        
        },

        fri() {
          document.querySelector('#rdo_auto').click();
              setTimeout(() => {
                //Grant Add'tl 100% if worked on holiday
                document.querySelector('#chk_grant').checked = true;
                // Deduct 100% if not worked in the day before or after
                document.querySelector('#chk_deduct').checked = true;
                //chk_1day before
                document.querySelector('#chk_1daybef').checked = true;
                //chk_1day after
                document.querySelector('#chk_1dayaft').checked = true;
              }, 4000);
        },
        sat() {

             // No Night Differential
             document.querySelector('#chk_nonightdiff').checked = true;
             // No ND OT
             document.querySelector('#chk_nondot').checked = true;
             
               // Non Punching
               document.querySelector('#chknonpunch').checked = true;
               // Ignore Absent
               document.querySelector('#chkignab').checked = true;
               //Ignore Late and Undertime
               document.querySelector('#chkignltut').checked = true;
          
              setTimeout(() => {
                

                    setTimeout(() => {
                      document.querySelector('#chk_opentime').click();
                      flexitime_click(); valid_flextime(); enable_dedbrktothrs();
                            
                    }, 8000);

              }, 4000);
        },



        sun() {

                    //Convert to Undertime when Late is above: 30 mins.
                    document.querySelector('#uselatepolicy').checked = true;
                    document.querySelector('#lblatepol').value = 30;
                    setTimeout(() => {
                      //Break Time Duration
                    document.querySelector('#chkbtd').checked = true;
                    valid_btd();
                    //txt_bduration1
                 
                    }, 4000);
                    setTimeout(() => {
                      document.querySelector('#txt_bduration1').value = 2;
                    }, 10000);
              
        },


  };

  var a = [];

  a.push(function(){  obj.mon() ; });
  a.push(function(){  obj.tues() ; });
  a.push(function(){  obj.wed(); });
  a.push(function(){  obj.thur() ; });
  a.push(function(){  obj.fri() ; });
  a.push(function(){  obj.sat() ; });
  a.push(function(){  obj.sun(); });
 
      //dont touch this line of code , this fired up the functions above
       a[counter]();

counter++
localStorage.setItem('data8', counter)



//pause 20 mins
Add_Shift_File();
//pause 15 mins



//search the shift description




var description = [  //shift description
                                          null,
'Sunday restday :all about Break Time Duration'
]


document.getElementsByName('searchshiftfile1')[0].value =description[1];




//start find button
setTimeout(() => {
  js_pagershiftfile1();
  }, 8000);
  

//validation
var ht = document.getElementsByName('searchshiftfile1')[0].value;
var dt = document.querySelectorAll('#div_pagerdatashiftfile1 div div')[7].innerHTML;

if (dt.value === ht.innerHTML){

   // displayed

   var y = document.querySelectorAll('#div_pagerdatashiftfile1 div div')
   var sub_array1 = [];

   for (var i=7; i< y.length; i += 2){
   var nametext = y[i].innerText;  

       sub_array1.push(nametext);
       
   };

   var options = {
       Employee_Code: sub_array1,
     }
     
     var string = JSON.stringify(options);
     alertify.confirm(string);

 }else  {
      false;
 }









// search shift code

  var shiftcode = [ //shiftcode 
  null,
  'shiftmonday',
  
  ]

  setTimeout(() => {

    document.getElementsByName('searchshiftfile1')[0].value = shiftcode[1];
    document.getElementsByName('SelFieldshiftfile1')[0].childNodes[0].innerHTML ='Shift Code';
    
    }, 4000);
    
    //start find button
    setTimeout(() => {
      js_pagershiftfile1();
      }, 6000);

//validation
       var ht = document.getElementsByName('searchshiftfile1')[0].value;
       var dt = document.querySelectorAll('#div_pagerdatashiftfile1 div div')[6].innerHTML;

     if (dt.value === ht.innerHTML){

          // displayed

          var y = document.querySelectorAll('#div_pagerdatashiftfile1 div div')
          var sub_array1 = [];

          for (var i=6; i< y.length; i += 2){
          var nametext = y[i].innerText;  

              sub_array1.push(nametext);
              
          };

          var options = {
              Employee_Code: sub_array1,
            }
            
            var string = JSON.stringify(options);
            alertify.confirm(string);

        }else  {
             false;
        }


       


//validate selected checkbox under edit and view if selected or not
// test consistency of checkboxes

var counter = localStorage.getItem('data9')


var shiftcode = [ //shiftcode 
                        null,
               'shiftmonday',
              'shifttuesday',
            'shiftwednesday',
             'shiftthursday',
               'shiftfriday',
               'shiftSatday',
               'shiftSunday'
]


setTimeout(() => {

  document.getElementsByName('searchshiftfile1')[0].value = shiftcode[counter];
  document.getElementsByName('SelFieldshiftfile1')[0].value = 'shiftcode';
  
  }, 4000);
  
  //start find button
  setTimeout(() => {
    js_pagershiftfile1();
    }, 6000);


    counter++
    localStorage.setItem('data9', counter)
    



// cilck edit button


document.querySelector('#btn_edit_0').click();








var counter = localStorage.getItem('data10')


  const obj1 = {
    
        data:5,
        mon() {    
          //mon - lates
          //Grace Period (Mins)

          let shift1 = document.querySelector('#txt_add_shiftcode').value;
          let data1 =  document.querySelector('#txt_lategraceperiod').value;
          let data2 =  document.querySelector('#chk_incgp').checked;
            //First Log as "IN", Last log as "OUT"
          let data3 =  document.querySelector('#chk_firstlast').checked;
            
            
          if (data1 == '5' || data2 && data3 == true)
          {
            alertify.confirm('The checkboxes for_'+ shift1 + '_are all selected!' );
          }else{
            false;
          }

        },

        tues() {
          let shift2 = document.querySelector('#txt_add_shiftcode').value;
          //tuesday - Break require In / Out 
          let dataset11 = document.querySelector('#chk_reqiobreak').checked;

          if ( dataset11 == true)
          {
            alertify.confirm('The checkboxes for_'+ shift2 + '_are all selected!' );
          }else{
            false;
          }
        },

        wed() {
                 let shift3 = document.querySelector('#txt_add_shiftcode').value;
                  //Overtime Validation Method:
                  //Authorize Early Log as OT between Start Time and Time In 
                 let dataset4 =  document.querySelector('#chk_earlylog').checked;
                  //Auto Authorized Holiday
                 let dataset5= document.querySelector('#chk_authhol').checked;
                  //Set OT as RST OT if the next day falls on Rest Day
                 let dataset6  =  document.querySelector('#chk_otasrst').checked;
   
                       // Require In/Out on Overtime
                 let dataset12 =  document.querySelector('#chk_reqio_ot').checked;
                      //Data for In/Out on Overtime
               
                 let data20 = document.querySelector('#txt_otin').value;
                 let data21 = document.querySelector('#txt_otout').value;
              
                 if (data20=="8:00 AM"&& data21== "8:00 PM"&& dataset4 && dataset5 && dataset6 && dataset12 == true)
                 {
                   alertify.confirm('The checkboxes for_'+ shift3 + '_are all selected!' );
                 }else{
                   false;
                 }
                  
              },

        thur() { //manual holidays
          let shift4 = document.querySelector('#txt_add_shiftcode').value;
          let dataset13 =  document.querySelector('#rdo_manual').checked;
             

          if (dataset13 == true)
          {
            alertify.confirm('The checkboxes for_'+ shift4 + '_are all selected!' );
          }else{
            false;
          }
           




        },

        fri() {
                let shift5 = document.querySelector('#txt_add_shiftcode').value;
                let dataset14 = document.querySelector('#rdo_auto').checked;
                //Grant Add'tl 100% if worked on holiday
                let dataset15 = document.querySelector('#chk_grant').checked;
                // Deduct 100% if not worked in the day before or after
                let dataset16 =  document.querySelector('#chk_deduct').checked;
                //chk_1day before
                let dataset17 =  document.querySelector('#chk_1daybef').checked;
                //chk_1day after
                let dataset18 = document.querySelector('#chk_1dayaft').checked;

     
          if (dataset14 && dataset15 && dataset16 && dataset17 && dataset18 == true)
          {
            alertify.confirm('The checkboxes for_'+ shift5 + '_are all selected!' );
          }else{
            false;
          }
            
        },
        sat() {
               let shift6 = document.querySelector('#txt_add_shiftcode').value;
               // No Night Differential
               let dataset19 =  document.querySelector('#chk_nonightdiff').checked;
               // No ND OT
               let dataset20 =  document.querySelector('#chk_nondot').checked;
             
               // Non Punching
               let dataset21 = document.querySelector('#chknonpunch').checked;
               // Ignore Absent
               let dataset22 =   document.querySelector('#chkignab').checked;
               //Ignore Late and Undertime
               let dataset23 = document.querySelector('#chkignltut').checked;
               let dataset24 = document.querySelector('#chk_opentime').checked;
                   
                
          if (dataset19 && dataset20 && dataset21 && dataset22 && dataset23  && dataset24 == true)
          {
            alertify.confirm('The checkboxes for_'+ shift6 + '_are all selected!' );
          }else{
            false;
          }
        },



        sun() {
                    let shift7 = document.querySelector('#txt_add_shiftcode').value;
                    //Convert to Undertime when Late is above: 30 mins.
                    let dataset25 =  document.querySelector('#uselatepolicy').checked;
                    let dataset26 = document.querySelector('#lblatepol').value;
                    
                      //Break Time Duration
                    let dataset27 =document.querySelector('#chkbtd').checked;
                    //txt_bduration1
                    let dataset28 = document.querySelector('#txt_bduration1').value;
                   
                    if (dataset26 == 30 && dataset28 == 2 && dataset25 && dataset27  == true)
                    {
                      alertify.confirm('The checkboxes for_'+ shift7 + '_are all selected!' );
                    }else{
                      false;
                    }
              
        },


  };

  var a = [];

            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.tues() ; });
            a.push(function(){  obj1.wed(); });
            a.push(function(){  obj1.thur() ; });
            a.push(function(){  obj1.fri() ; });
            a.push(function(){  obj1.sat() ; });
            a.push(function(){  obj1.sun(); });
 
            //dont touch this line of code , this fired up the functions above
            a[counter]();

counter++
localStorage.setItem('data10', counter)





document.querySelector('#txt_add_shiftcode')
document.querySelector('#txt_add_shiftdsc')
document.querySelector('#txt_earlytime')
document.querySelector('#txt_timein')
document.querySelector('#txt_startbreak1')
document.querySelector('#txt_endbreak1')
document.querySelector('#txt_timeout')


//generate shifts 

//shift Monday
var counter = localStorage.getItem('data11')


var timeIn = [ 
                 null,
               '08:20',
               '08:30'
              
]


setTimeout(() => {

  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data11', counter)
    


    var counter = localStorage.getItem('data12')


    var timeOut = [ 
                       null,
                    '18:20',
                    '19:00'
                 
    ]
    
    
    setTimeout(() => {
    
      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
      
      
      }, 4000);
      
     
    
        counter++
        localStorage.setItem('data12', counter)



localStorage.setItem('data13', 0)

var counter = localStorage.getItem('data13')


var InOUT = [ 
                 null,
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',
               'I',
               'O'
]


setTimeout(() => {

  document.querySelectorAll('#sel_inout')[0].value =  InOUT[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data13', counter)
    



//run the script every week only - jhen
localStorage.setItem('data20', 0) //run separately from the code below

var counter1 = localStorage.getItem('data20')


  const obj1 = {
    
        mon() {    
          
            //👉️ generate the next monday 
            function getNextMonday(date = new Date()) {
              const dateCopy = new Date(date.getTime());
            
              const nextMonday = new Date(
                dateCopy.setDate(
                  dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
                ),
              );
            
              return nextMonday;
            }
            
            // 👇️ Get Monday of Next Week
          var me = getNextMonday(new Date()) // 
            
            var me2 = me.toLocaleDateString();
            var change = me2.replace('/','-'); 
            var change1 = change.replace('/','-'); 
            document.querySelector('#actdte').value= change1;

        },

        tues() {
         
          //👉️ generate the next tuesday 
          function getNexttuesday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nexttuesday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 2) % 7 || 7),
              ),
            );

            return nexttuesday;
          }

          // 👇️ Get tuesday of Next Week
          var me = getNexttuesday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;

        },

        wed() {
                 
            //👉️ generate the next wednesday 
            function getNextwednesday(date = new Date()) {
              const dateCopy = new Date(date.getTime());

              const nextwednesday = new Date(
                dateCopy.setDate(
                  dateCopy.getDate() + ((7 - dateCopy.getDay() + 3) % 7 || 7),
                ),
              );

              return nextwednesday;
            }

            // 👇️ Get wednesday of Next Week
            var me = getNextwednesday(new Date()) // 

            var me2 = me.toLocaleDateString();
            var change = me2.replace('/','-'); 
            var change1 = change.replace('/','-'); 
            document.querySelector('#actdte').value= change1;
                  
              },

        thur() { //manual holidays
                  
          //👉️ generate the next thursday 
          function getNextthursday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextthursday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 4) % 7 || 7),
              ),
            );

            return nextthursday;
          }

          // 👇️ Get thursday of Next Week
          var me = getNextthursday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;


        },

        fri() {
                
                      
          //👉️ generate the next friday 
          function getNextfriday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextfriday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 5) % 7 || 7),
              ),
            );

            return nextfriday;
          }

          // 👇️ Get friday of Next Week
          var me = getNextfriday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;


        },
        sat() {
             
          //👉️ generate the next saturday 
          function getNextsaturday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextsaturday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 6) % 7 || 7),
              ),
            );

            return nextsaturday;
          }

          // 👇️ Get saturday of Next Week
          var me = getNextsaturday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;  
        },



        sun() {
           //👉️ generate the next sunday 
          function getNextsunday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextsunday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 7) % 7 || 7),
              ),
            );

            return nextsunday;
          }

          // 👇️ Get sunday of Next Week
          var me = getNextsunday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;         
              
        },


  };

  var a = [];

            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.tues() ; });
            a.push(function(){  obj1.tues() ; });
            a.push(function(){  obj1.wed(); });
            a.push(function(){  obj1.wed(); });
            a.push(function(){  obj1.thur() ; });
            a.push(function(){  obj1.thur() ; });
            a.push(function(){  obj1.fri() ; });
            a.push(function(){  obj1.fri() ; });
       
 
            //dont touch this line of code , this fired up the functions above
            a[counter1]();

counter1++
localStorage.setItem('data20', counter1)




//run the script every week only - jhen
localStorage.setItem('data21', 0) //run separately from the code below

var counter2 = localStorage.getItem('data21')


  const obj1 = {
    
        mon() {    
          
            //👉️ generate the next monday 
            function getNextMonday(date = new Date()) {
              const dateCopy = new Date(date.getTime());
            
              const nextMonday = new Date(
                dateCopy.setDate(
                  dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
                ),
              );
            
              return nextMonday;
            }
            
            // 👇️ Get Monday of Next Week
          var me = getNextMonday(new Date()) // 
            
            var me2 = me.toLocaleDateString();
            var change = me2.replace('/','-'); 
            var change1 = change.replace('/','-'); 
            document.querySelector('#txtdteto').value= change1;

        },

        tues() {
         
          //👉️ generate the next tuesday 
          function getNexttuesday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nexttuesday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 2) % 7 || 7),
              ),
            );

            return nexttuesday;
          }

          // 👇️ Get tuesday of Next Week
          var me = getNexttuesday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#txtdteto').value= change1;

        },

        wed() {
                 
            //👉️ generate the next wednesday 
            function getNextwednesday(date = new Date()) {
              const dateCopy = new Date(date.getTime());

              const nextwednesday = new Date(
                dateCopy.setDate(
                  dateCopy.getDate() + ((7 - dateCopy.getDay() + 3) % 7 || 7),
                ),
              );

              return nextwednesday;
            }

            // 👇️ Get wednesday of Next Week
            var me = getNextwednesday(new Date()) // 

            var me2 = me.toLocaleDateString();
            var change = me2.replace('/','-'); 
            var change1 = change.replace('/','-'); 
            document.querySelector('#txtdteto').value= change1;
                  
              },

        thur() { //manual holidays
                  
          //👉️ generate the next thursday 
          function getNextthursday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextthursday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 4) % 7 || 7),
              ),
            );

            return nextthursday;
          }

          // 👇️ Get thursday of Next Week
          var me = getNextthursday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#txtdteto').value= change1;


        },

        fri() {
                
                      
          //👉️ generate the next friday 
          function getNextfriday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextfriday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 5) % 7 || 7),
              ),
            );

            return nextfriday;
          }

          // 👇️ Get friday of Next Week
          var me = getNextfriday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#txtdteto').value= change1;


        },
        sat() {
             
          //👉️ generate the next saturday 
          function getNextsaturday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextsaturday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 6) % 7 || 7),
              ),
            );

            return nextsaturday;
          }

          // 👇️ Get saturday of Next Week
          var me = getNextsaturday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#txtdteto').value= change1;  
        },



        sun() {
           //👉️ generate the next sunday 
          function getNextsunday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextsunday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 7) % 7 || 7),
              ),
            );

            return nextsunday;
          }

          // 👇️ Get sunday of Next Week
          var me = getNextsunday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#txtdteto').value= change1;         
              
        },


  };

  var a = [];

            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.tues() ; });
            a.push(function(){  obj1.wed(); });
            a.push(function(){  obj1.thur() ; });
            a.push(function(){  obj1.fri() ; });
            a.push(function(){  obj1.sat() ; });
            a.push(function(){  obj1.sun(); });
 
            //dont touch this line of code , this fired up the functions above
            a[counter2]();

counter2++
localStorage.setItem('data21', counter2)




//FOR shiftTuesday 




//run the script every week only - jhen
localStorage.setItem('data20', 0) //run separately from the code below

var counter1 = localStorage.getItem('data20')


  const obj1 = {
    
        mon() {    
          
            //👉️ generate the next monday 
            function getNextMonday(date = new Date()) {
              const dateCopy = new Date(date.getTime());
            
              const nextMonday = new Date(
                dateCopy.setDate(
                  dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
                ),
              );
            
              return nextMonday;
            }
            
            // 👇️ Get Monday of Next Week
          var me = getNextMonday(new Date()) // 
            
            var me2 = me.toLocaleDateString();
            var change = me2.replace('/','-'); 
            var change1 = change.replace('/','-'); 
            document.querySelector('#actdte').value= change1;

        },

        tues() {
         
          //👉️ generate the next tuesday 
          function getNexttuesday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nexttuesday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 2) % 7 || 7),
              ),
            );

            return nexttuesday;
          }

          // 👇️ Get tuesday of Next Week
          var me = getNexttuesday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;

        },

        wed() {
                 
            //👉️ generate the next wednesday 
            function getNextwednesday(date = new Date()) {
              const dateCopy = new Date(date.getTime());

              const nextwednesday = new Date(
                dateCopy.setDate(
                  dateCopy.getDate() + ((7 - dateCopy.getDay() + 3) % 7 || 7),
                ),
              );

              return nextwednesday;
            }

            // 👇️ Get wednesday of Next Week
            var me = getNextwednesday(new Date()) // 

            var me2 = me.toLocaleDateString();
            var change = me2.replace('/','-'); 
            var change1 = change.replace('/','-'); 
            document.querySelector('#actdte').value= change1;
                  
              },

        thur() { //manual holidays
                  
          //👉️ generate the next thursday 
          function getNextthursday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextthursday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 4) % 7 || 7),
              ),
            );

            return nextthursday;
          }

          // 👇️ Get thursday of Next Week
          var me = getNextthursday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;


        },

        fri() {
                
                      
          //👉️ generate the next friday 
          function getNextfriday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextfriday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 5) % 7 || 7),
              ),
            );

            return nextfriday;
          }

          // 👇️ Get friday of Next Week
          var me = getNextfriday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;


        },
        sat() {
             
          //👉️ generate the next saturday 
          function getNextsaturday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextsaturday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 6) % 7 || 7),
              ),
            );

            return nextsaturday;
          }

          // 👇️ Get saturday of Next Week
          var me = getNextsaturday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;  
        },



        sun() {
           //👉️ generate the next sunday 
          function getNextsunday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextsunday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 7) % 7 || 7),
              ),
            );

            return nextsunday;
          }

          // 👇️ Get sunday of Next Week
          var me = getNextsunday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;         
              
        },


  };

  var a = [];

            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.mon() ; });
 
            //dont touch this line of code , this fired up the functions above
            a[counter1]();

counter1++
localStorage.setItem('data20', counter1)





















//shift Monday
//employee restday is monday only
var counter = localStorage.getItem('data11')


var timeIn = [ 
                 null,
               '08:20',//Grace Period (Mins): 5 so employee should be late about 20 mins - the system should not   count the 5 mins late. 
               '08:30',//check employee first log as IN and last log as out on DTR and    payroll system.
               '08:40',// note: this is second time login of an employee for this testcase.
]


setTimeout(() => {

  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data11', counter)
    


    var counter = localStorage.getItem('data12')


    var timeOut = [ 
                       null,
                    '18:20',//so employee should be late about 20 mins - the system should not   count the 5 mins late. 
                    '19:00',// note: this is first time log out of an employee for this testcase.
                    '19:10',// note: this is second time log out of an employee for this testcase.
                 
    ]
    
    
    setTimeout(() => {
    
      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
      
      
      }, 4000);
      
     
    
        counter++
        localStorage.setItem('data12', counter)

//shift Tuesday 

/* shifttuesday
-employee Restday is only tuesday
- employee should Require In/Out on Break  */

var counter = localStorage.getItem('data11')


var timeIn = [ 
                 null,
               '08:00',
               '13:00' //employee should Require In/Out on Break

              
]


setTimeout(() => {

  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data11', counter)
    


    var counter = localStorage.getItem('data12')


    var timeOut = [ 
                       null,
                    '12:00',//employee should Require In/Out on Break
                    '18:00' 
                 
    ]
    
    
    setTimeout(() => {
    
      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
      
      
      }, 4000);
      
     
    
        counter++
        localStorage.setItem('data12', counter)





  
//shift Webdnesday 
//REST OT SCENARIO
/* shiftwednesday
-employee Restday is only wednesday
- employee should Require In/Out on Break  */

var counter = localStorage.getItem('data11')


var timeIn = [ 
                 null,
               '06:00',
               '19:00',//the employee should in and out when the regular time has elapsed.
               '08:00'

              
]


setTimeout(() => {

  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data11', counter)
    


    var counter = localStorage.getItem('data12')


    var timeOut = [ 
                       null,
                    '18:00',
                    '20:00',//the employee should in and out when the regular time has elapsed.
                    '21:00'  //employee should have OT if the next day is on his rest day.
                 
    ]
    
    
    setTimeout(() => {
    
      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
      
      
      }, 4000);
      
     
    
        counter++
        localStorage.setItem('data12', counter)




//shiftthursday

/* 
Manual – Holiday Pay is No effect on Payroll System  */

// Validate if the employee got holiday pay during holiday.

// 👇️ employee should be present before the holiday
var tomorrow = new Date('12-25-2022');
tomorrow.setDate(tomorrow.getDate()-1);
me = tomorrow.toLocaleDateString();
change = me.replace('/','-'); 
change1 = change.replace('/','-');
document.querySelector('#actdte').value= change1;




var counter = localStorage.getItem('data11')


var timeIn = [ 
                 null,
               '08:00',
      

              
]


setTimeout(() => {

  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data11', counter)
    


    var counter = localStorage.getItem('data12')


    var timeOut = [ 
                       null,
                    '18:00' 
                 
    ]
    
    
    setTimeout(() => {
    
      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
      
      
      }, 4000);
      
     
    
        counter++
        localStorage.setItem('data12', counter)






//shiftFriday 
// Validate if the employee got holiday pay during holiday.
/* 
Automatic	
 1 Day Before  1 Day After
 Grant Add'tl 100% if worked on holiday
 Deduct 100% if not worked in the day before or after  */



// 👇️ Customer should be present before the holiday
var tomorrow = new Date('08-17-2022'); // given holiday date
tomorrow.setDate(tomorrow.getDate()-1);
me = tomorrow.toLocaleDateString();
change = me.replace('/','-'); 
change1 = change.replace('/','-');
document.querySelector('#actdte').value= change1;


// 👇️ Customer should be present after the holiday
var tomorrow = new Date('08-17-2022'); // given holiday date
tomorrow.setDate(tomorrow.getDate()+1);
me = tomorrow.toLocaleDateString();
change = me.replace('/','-'); 
change1 = change.replace('/','-');
document.querySelector('#actdte').value= change1;


// 👇️ Customer should be present on the holiday
var tomorrow = new Date('08-17-2022'); // given holiday date
tomorrow.setDate(tomorrow.getDate());
me = tomorrow.toLocaleDateString();
change = me.replace('/','-'); 
change1 = change.replace('/','-');
document.querySelector('#actdte').value= change1;



var counter = localStorage.getItem('data11')


var timeIn = [ 
                 null,
               '08:00',
               '08:00',
               '08:00'

              
]


setTimeout(() => {

  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data11', counter)
    


    var counter = localStorage.getItem('data12')


    var timeOut = [ 
                       null,
                    '18:00',
                    '18:00',
                    '18:00'  
                 
    ]
    
    
    setTimeout(() => {
    
      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
      
      
      }, 4000);
      
     
    
        counter++
        localStorage.setItem('data12', counter)







//shiftSaturday




var counter = localStorage.getItem('data11')


var timeIn = [ 
                 null,
               '09:00',  // employee can in and out anytime. 
               '13:30', //Open Break Time (Not applicable for split DTR)
               '08:00',
               '08:00',
               '09:00', // ignore late

              
]


setTimeout(() => {

  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data11', counter)
    


    var counter = localStorage.getItem('data12')


    var timeOut = [ 
                       null,
                    '17:00',  // employee can in and out anytime. 
                    '13:00',  //Open Break Time (Not applicable for split DTR)
                    '20:00',  //No Night Differential  
                    '23:00',  // NO ND OT
                    '16:00',// ignore undertime
    ]
    
    
    setTimeout(() => {
    
      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
      
      
      }, 4000);
      
     
    
        counter++
        localStorage.setItem('data12', counter)






//shiftSunday


var counter = localStorage.getItem('data11')


var timeIn = [ 
                 null,
               '08:00',
               '08:00',
               '16:00',// 1 hour late

              
]


setTimeout(() => {

  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data11', counter)
    


    var counter = localStorage.getItem('data12')


    var timeOut = [ 
                       null,
                    '18:00',
                    '13:00', // out 1 pm
                    '18:00'  
                 
    ]
    
    
    setTimeout(() => {
    
      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
      
      
      }, 4000);
      
     
    
        counter++
        localStorage.setItem('data12', counter)





//dynamic


localStorage.setItem('data23', 0) //run separately from the code below




var counter3 = localStorage.getItem('data23')


  const obj3 = {
    
        in() {    
          
          
            //shift Monday
            //employee restday is monday only
            var counter = localStorage.getItem('data11')


            var timeIn = [ 
                            null,
                          '08:20',//Grace Period (Mins): 5 so employee should be late about 20 mins - the system should not   count the 5 mins late. 
                          '08:30',//check employee first log as IN and last log as out on DTR and    payroll system.
                          '08:40',// note: this is second time login of an employee for this testcase.
            ]


            setTimeout(() => {

              document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
              
              
              }, 4000);
              
            

                counter++
                localStorage.setItem('data11', counter)

        },

        out() {
   

            var counter = localStorage.getItem('data12')


            var timeOut = [ 
                              null,
                            '18:20',//so employee should be late about 20 mins - the system should not   count the 5 mins late. 
                            '19:00',// note: this is first time log out of an employee for this testcase.
                            '19:10',// note: this is second time log out of an employee for this testcase.
                        
            ]
            
            
            setTimeout(() => {
            
              document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
              
              
              }, 4000);
              
            
            
                counter++
                localStorage.setItem('data12', counter)

                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
 
            //dont touch this line of code , this fired up the functions above
            a[counter3]();

counter3++
localStorage.setItem('data23', counter3)



//tuesday 





var counter3 = localStorage.getItem('data23')


  const obj3 = {
    
        in() {    
          
          
            ///shift Tuesday 

                /* shifttuesday
                -employee Restday is only tuesday
                - employee should Require In/Out on Break  */

                var counter = localStorage.getItem('data11')


                var timeIn = [ 
                                null,
                              '08:00',
                              '13:00' //employee should Require In/Out on Break

                              
                ]


                setTimeout(() => {

                  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
                  
                  
                  }, 4000);
                  
                

                    counter++
                    localStorage.setItem('data11', counter)
    
        },

        out() {
   
          var counter = localStorage.getItem('data12')


          var timeOut = [ 
                             null,
                          '12:00',//employee should Require In/Out on Break
                          '18:00' 
                       
          ]
          
          
          setTimeout(() => {
          
            document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
            
            
            }, 4000);
            
           
          
              counter++
              localStorage.setItem('data12', counter)
      
      

                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
 
            //dont touch this line of code , this fired up the functions above
            a[counter3]();

counter3++
localStorage.setItem('data23', counter3)





var counter3 = localStorage.getItem('data23')


  const obj3 = {
    
        in() {    
          
          
                      /* shiftwednesday
              -employee Restday is only wednesday
              - employee should Require In/Out on Break  */

                var counter = localStorage.getItem('data11')


                var timeIn = [ 
                                null,
                              '06:00',
                              '19:00',//the employee should in and out when the regular time has elapsed.
                              '08:00'

                              
                ]


                setTimeout(() => {

                  document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
                  
                  
                  }, 4000);
                  
                

                    counter++
                    localStorage.setItem('data11', counter)
                    

    
        },

        out() {
   
                              

                            var counter = localStorage.getItem('data12')


                            var timeOut = [ 
                                              null,
                                            '18:00',
                                            '20:00',//the employee should in and out when the regular time has elapsed.
                                            '21:00'  //employee should have OT if the next day is on his rest day.
                                        
                            ]
                            
                            
                            setTimeout(() => {
                            
                              document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
                              
                              
                              }, 4000);
                              
                            
                            
                                counter++
                                localStorage.setItem('data12', counter)


                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
 
            //dont touch this line of code , this fired up the functions above
            a[counter3]();

counter3++
localStorage.setItem('data23', counter3)




//thursday

var counter3 = localStorage.getItem('data23')


  const obj3 = {
    
        in() {    
          
          
              var counter = localStorage.getItem('data11')


              var timeIn = [ 
                              null,
                            '08:00',
                                  
              ]


              setTimeout(() => {

                document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
                
                
                }, 4000);

                  counter++
                  localStorage.setItem('data11', counter)
                          
    
        },

        out() {
   
                              

          var counter = localStorage.getItem('data12')


          var timeOut = [ 
                             null,
                          '18:00' 
                       
          ]
          
          
          setTimeout(() => {
          
            document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
            
            
            }, 4000);
            
           
          
              counter++
              localStorage.setItem('data12', counter)
      
      

                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
       
 
            //dont touch this line of code , this fired up the functions above
            a[counter3]();

counter3++
localStorage.setItem('data23', counter3)



// friday

var counter3 = localStorage.getItem('data23')


  const obj3 = {
    
        in() {    
          
                            

                  var counter = localStorage.getItem('data11')


                  var timeIn = [ 
                                  null,
                                '08:00',
                                '08:00',
                                '08:00'

                                
                  ]


                  setTimeout(() => {

                    document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
                    
                    
                    }, 4000);
                    
                  

                      counter++
                      localStorage.setItem('data11', counter)
    

    
        },

        out() {
   
               

                    var counter = localStorage.getItem('data12')


                    var timeOut = [ 
                                      null,
                                    '18:00',
                                    '18:00',
                                    '18:00'  
                                
                    ]
                    
                    
                    setTimeout(() => {
                    
                      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
                      
                      
                      }, 4000);
                      
                    
                    
                        counter++
                        localStorage.setItem('data12', counter)
  

                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
 
            //dont touch this line of code , this fired up the functions above
            a[counter3]();

counter3++
localStorage.setItem('data23', counter3)


    


//shiftFriday 
// Validate if the employee got holiday pay during holiday.
/* 
Automatic	
 1 Day Before  1 Day After
 Grant Add'tl 100% if worked on holiday
 Deduct 100% if not worked in the day before or after  */



// 👇️ Customer should be present before the holiday
var tomorrow = new Date('12-25-2022'); // given holiday date
tomorrow.setDate(tomorrow.getDate()-1);
me = tomorrow.toLocaleDateString();
change = me.replace('/','-'); 
change1 = change.replace('/','-');
document.querySelector('#actdte').value= change1;


// 👇️ Customer should be present after the holiday
var tomorrow = new Date('11-30-2022'); // given holiday date
tomorrow.setDate(tomorrow.getDate()+1);
me = tomorrow.toLocaleDateString();
change = me.replace('/','-'); 
change1 = change.replace('/','-');
document.querySelector('#actdte').value= change1;


// 👇️ Customer should be present on the holiday
var tomorrow = new Date('12-30-2022'); // given holiday date
tomorrow.setDate(tomorrow.getDate());
me = tomorrow.toLocaleDateString();
change = me.replace('/','-'); 
change1 = change.replace('/','-');
document.querySelector('#actdte').value= change1;






//run the script every week only - jhen
localStorage.setItem('data20', 0) //run separately from the code below




var counter1 = localStorage.getItem('data20')


  const obj1 = {
    
        holiday1() {    
          
          // 👇️ Customer should be present before the holiday
          var tomorrow = new Date('12-25-2022'); // given holiday date
          tomorrow.setDate(tomorrow.getDate()-1);
          me = tomorrow.toLocaleDateString();
          change = me.replace('/','-'); 
          change1 = change.replace('/','-');
          document.querySelector('#actdte').value= change1;
                

        },

        holiday2() {
         
         // 👇️ Customer should be present after the holiday
          var tomorrow = new Date('11-30-2022'); // given holiday date
          tomorrow.setDate(tomorrow.getDate()+1);
          me = tomorrow.toLocaleDateString();
          change = me.replace('/','-'); 
          change1 = change.replace('/','-');
          document.querySelector('#actdte').value= change1;


        },

       holiday3() {
                 
          
        // 👇️ Customer should be present on the holiday
        var tomorrow = new Date('12-30-2022'); // given holiday date
        tomorrow.setDate(tomorrow.getDate());
        me = tomorrow.toLocaleDateString();
        change = me.replace('/','-'); 
        change1 = change.replace('/','-');
        document.querySelector('#actdte').value= change1;

                  
              },

        


  };

  var a = [];

            a.push(function(){  obj1.holiday1() ; });
            a.push(function(){  obj1.holiday1() ; });
            a.push(function(){  obj1.holiday2() ; });
            a.push(function(){  obj1.holiday2() ; });
            a.push(function(){  obj1.holiday3(); });
            a.push(function(){  obj1.holiday3(); });
           
            //dont touch this line of code , this fired up the functions above
            a[counter1]();

counter1++
localStorage.setItem('data20', counter1)






//run the script every week only - jhen
localStorage.setItem('data21', 0) //run separately from the code below

var counter2 = localStorage.getItem('data21')


  const obj1 = {
    
        holiday1() {    
          
          // 👇️ Customer should be present before the holiday
          var tomorrow = new Date('12-25-2022'); // given holiday date
          tomorrow.setDate(tomorrow.getDate()-1);
          me = tomorrow.toLocaleDateString();
          change = me.replace('/','-'); 
          change1 = change.replace('/','-');
          document.querySelector('#txtdteto').value= change1;
                

        },

        holiday2() {
         
         // 👇️ Customer should be present after the holiday
          var tomorrow = new Date('11-30-2022'); // given holiday date
          tomorrow.setDate(tomorrow.getDate()+1);
          me = tomorrow.toLocaleDateString();
          change = me.replace('/','-'); 
          change1 = change.replace('/','-');
          document.querySelector('#txtdteto').value= change1;


        },

       holiday3() {
                 
          
        // 👇️ Customer should be present on the holiday
        var tomorrow = new Date('12-30-2022'); // given holiday date
        tomorrow.setDate(tomorrow.getDate());
        me = tomorrow.toLocaleDateString();
        change = me.replace('/','-'); 
        change1 = change.replace('/','-');
        document.querySelector('#txtdteto').value= change1;

                  
              },

  };

  var a = [];

            a.push(function(){  obj1.holiday1() ; });
            a.push(function(){  obj1.holiday2() ; });
            a.push(function(){  obj1.holiday3(); });
           
            //dont touch this line of code , this fired up the functions above
            a[counter2]();

counter2++
localStorage.setItem('data21', counter2)




//saturday

var counter3 = localStorage.getItem('data23')


  const obj3 = {
    
        in() {    
          
                    
          var counter = localStorage.getItem('data11')


          var timeIn = [ 
                          null,
                        '09:00',  // employee can in and out anytime. 
                        '13:30', //Open Break Time (Not applicable for split DTR)
                        '08:00',
                        '08:00',
                        '09:00', // ignore late

                        
          ]


          setTimeout(() => {

            document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
            
            
            }, 4000);
            
          

              counter++
              localStorage.setItem('data11', counter)
              
                              

              
                  },

                  out() {
            
                                        

                    var counter = localStorage.getItem('data12')


                    var timeOut = [ 
                                      null,
                                    '17:00',  // employee can in and out anytime. 
                                    '13:00',  //Open Break Time (Not applicable for split DTR)
                                    '20:00',  //No Night Differential  
                                    '23:00',  // NO ND OT
                                    '16:00',// ignore undertime
                    ]
                    
                    
                    setTimeout(() => {
                    
                      document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
                      
                      
                      }, 4000);
                      
                    
                    
                        counter++
                        localStorage.setItem('data12', counter)
                
                

                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
 
 
            //dont touch this line of code , this fired up the functions above
            a[counter3]();

counter3++
localStorage.setItem('data23', counter3)



//sunday
var counter3 = localStorage.getItem('data23')


  const obj3 = {
    
        in() {    
          
          

                    var counter = localStorage.getItem('data11')


                    var timeIn = [ 
                                    null,
                                  '08:00',
                                  '08:00',
                                  '16:00',// 1 hour late

                                  
                    ]


                    setTimeout(() => {

                      document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
                      
                      
                      }, 4000);
                      
                    

                        counter++
                        localStorage.setItem('data11', counter)
    


              
                  },

                  out() {
            
                  


                        var counter = localStorage.getItem('data12')


                        var timeOut = [ 
                                          null,
                                        '18:00',
                                        '13:00', // out 1 pm
                                        '18:00'  
                                    
                        ]
                        
                        
                        setTimeout(() => {
                        
                          document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
                          
                          
                          }, 4000);
                          
                        
                        
                            counter++
                            localStorage.setItem('data12', counter)





                

                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
           
 
 
            //dont touch this line of code , this fired up the functions above
            a[counter3]();

counter3++
localStorage.setItem('data23', counter3)





//run separately
localStorage.setItem('data23',0)


//compressed shift
var counter3 = localStorage.getItem('data23')


  const obj3 = {
    
        in() {    
                    var timeIn = [ 
                                  null,
                                '08:30 AM',
                                '09:30 AM',
                                '08:30 AM',
                                '08:30 AM',
                                '09:00 AM'

                                  
                    ]


                    setTimeout(() => {

                     
                      document.querySelector('#mon_timein').value = timeIn[1];
                      document.querySelector('#tue_timein').value = timeIn[2];
                      document.querySelector('#wed_timein').value = timeIn[3];
                      document.querySelector('#thu_timein').value = timeIn[4];
                      document.querySelector('#fri_timein').value = timeIn[5];
                                            
                      }, 4000);
                      
                    


                  },

                  out() {

                        var counter = localStorage.getItem('data12')


                        var timeOut = [ 
                                              null,
                                            '07:30 PM',
                                            '08:30 PM',
                                            '07:30 PM',
                                            '07:30 PM',
                                            '08:00 PM'
                                    
                        ]
                        
                        
                        setTimeout(() => {
                        
                          document.querySelector('#mon_timeout').value = timeOut[1];
                          document.querySelector('#tue_timeout').value = timeOut[2];
                          document.querySelector('#tue_timeout').value = timeOut[3];
                          document.querySelector('#thu_timeout').value = timeOut[4];
                          document.querySelector('#fri_timeout').value = timeOut[5];
                          
                          }, 4000);
                          
                        
                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            
            //dont touch this line of code , this fired up the functions above
            a[counter3]();

counter3++
localStorage.setItem('data23', counter3)




var shiftcode = [ //shiftcode 
null,
'shift_compressed',

]

var description = [  //shift description
                                          null,
'Sun and Sat restday : compressed Shift',

]

setTimeout(() => {
  document.querySelector('#sat_restday').checked = true;
document.querySelector("#sun_restday").checked = true;
document.querySelector('#txt_add_shiftcode').value = shiftcode[1];
document.querySelector('#txt_add_shiftdsc').value = description[1];
}, 4000);



localStorage.setItem('data24',0);

//compressed time in and out
var counter4 = localStorage.getItem('data24')


  const obj3 = {
    
        in() {    

                    var counter = localStorage.getItem('data11')

                    var timeIn = [ 
                                null,
                                '08:30',
                                '09:30',
                                '08:30',
                                '08:30',
                                '09:00'       
                    ]


                    setTimeout(() => {

                      document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
                      
                      
                      }, 4000);
                      
                    

                        counter++
                        localStorage.setItem('data11', counter)
    


              
                  },

                  out() {
            
                  


                        var counter = localStorage.getItem('data12')


                        var timeOut = [ 
                                      null,
                                      '17:30',
                                      '20:30',
                                      '19:30',
                                      '19:30',
                                      '20:00' 
                                    
                        ]
                        
                        
                        setTimeout(() => {
                        
                          document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
                          
                          
                          }, 4000);
                          
                        
                        
                            counter++
                            localStorage.setItem('data12', counter)


                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
           
 
 
            //dont touch this line of code , this fired up the functions above
            a[counter4]();

counter4++
localStorage.setItem('data24', counter4)

//shift  Policy

//shift policy - Absent  1
//shiftmonday - repeat 6 times - SM-004 -Butawan, Jhen L.
//shift policy-Absent
//time in - 09:00 SM-004
//time out - 18:00  SM-004

//time in - 08:00  SM-004
//time out - 17:00   SM-004

document.querySelector('#chk_lates').checked = true;
document.querySelector('#chk_undertime').checked = true;

document.querySelector('#txt_undertime').value = 1;
document.querySelector('#txt_lates').value = 1;

//Overtime  2

//shiftwednesday -repeat 6 times - M-010 - Dela Cruz, Gwenn G.

//shift policy-Overtime

//time in - 09:00  SM-004
//time out - 19:30   SM-004

//early OT
//time in - 05:00  SM-004
//time out - 18:00   SM-004

// Deduct Tardiness in Excess Hours
//Apply Late Policy before Excess Hours Deduction
document.querySelector('#chk_dedltot').checked = true;
validate_conflict(this); chk_dedltot_click();
// Round Off OT
document.querySelector('#chk_roundoff_ot').checked = true;
enable_roundoff_ot_click();

// Include Early OT [Note: It will take effect if the option Authorize Early Log as OT is checked]
 //By mins. interval
 //Round Off OT to lower 30 mins interval

document.querySelector('#chk_incroundearlyot').checked = true;
document.querySelector('#txt_roundotmin').value = 30;





//ND 
//shifttuesday - repeat 2 times - M-009 - Calma, Carl L.
//shift policy-night Differential
//time in - 22:00   M-009
//time out - 07:30    M-009
document.querySelector('#chk_roundoff_rst').checked = true;
enable_roundoff_rst_click();
document.querySelector('#txt_roundrstmin').value = 30 ;

//lates 3
//shiftthursday -  no repeat - SM-007 - Serrano, Duanne V.

//shift policy-Lates

//time in - 08:25    SM-007
//time break out - 12:25   SM-007
//time break in - 13:10   SM-007
//time out - 18:30   SM-007
document.querySelector('#chk_roundlates').click();
document.querySelector('#chk_offsetot').click();
//Round off Lates to the next 5 min. interval
document.querySelector('#txt_roundlt').value = 5; 


// Late Policy Bracketing 4

document.querySelector('#chkltbracket').click();
document.querySelector('#chkltbracket_exchol').checked = true;
document.querySelector('#chkltbracket_incbrk').checked = true;

setTimeout(() => {
  document.querySelector('#add_ltpol').click();
}, timeout);


//late from to , should have penalty 5

//shiftfriday - repeat 6 times - D-011 - Garcia, Kathlyn J.

//shift policy-Late Policy Bracketing

//time in - 08:15    D-011 
//time out - 18:00     D-011 

document.getElementById('0_ltminfrom').value = 3;
document.getElementById('0_ltminto').value = 10;
document.getElementById('0_ltminpen').value = 5;


//Undertime  6

//shiftfriday - repeat 6 times - D-011 - Garcia, Kathlyn J.

//shift policy-Late Policy Bracketing

//time in - 08:15   D-011 
//time out - 18:00    D-011 

document.querySelector('#chk_roundut').click();
document.querySelector('#txt_roundut').value = 30;

//Undertime Policy Bracketing  7

//ShiftSunday - repeat 6 times - SM-008 - Sunga, Earl J.
//shift policy- Undertime Policy Bracketing

//time in - 08:00    SM-008
//time out - 17:40    SM-008

document.querySelector('#chkutbracket').click();

setTimeout(() => {
  document.querySelector('#add_utpol').click();
}, 4000);

setTimeout(() => {
  document.getElementById('0_utminfrom').value = 3;
  document.getElementById('0_utminto').value = 10;
  document.getElementById('0_utminpen').value = 5;
}, 4000);


// break policy , Early Undertime  8

//shiftSaturday - repeat 10 times - D-003 - Martin, Hannah M.
//shift policy-Undertime,Break Policy,Early Undertime


//Early Undertime
//time in - 06:00    D-003 
//time out - 07:15   D-003 

//payable break
//time in - 08:00  D-003 
//time break out - 12:00   D-003 
//time break in - 13:00  D-003 
//time out - 18:00  D-003 

document.querySelector('#chk_breakpaid').checked = true;

document.querySelector('#chkearlyutpol').click(); 

setTimeout(() => {
  document.querySelector('#chkearlyutpolmin').value= 30;
}, 4000);


setTimeout(() => {
  
  document.querySelector('#txt_roundotupdown_minot').value = 1;
  document.querySelector('#txt_roundotupdown').value = 30;
}, 4000);


//overtime - by basis 9
//
//shift_compressed - Panzuelo, Phoebe M. - M-012

//- time in - 08:00  M-012
//time out - 19:30   M-012


//Overtime  2
// Deduct Tardiness in Excess Hours
//Apply Late Policy before Excess Hours Deduction
document.querySelector('#chk_dedltot').checked = true;
validate_conflict(this); chk_dedltot_click();
// Round Off OT
document.querySelector('#chk_roundoff_ot').checked = true;
enable_roundoff_ot_click();

setTimeout(() => {
  document.querySelector('#chk_roundotupdown').click();
}, 4000);







localStorage.setItem('data18', 0) 


var counter = localStorage.getItem('data18')


var shiftcode = [ //shiftcode 
                        null,
               'shiftmonday',
            'shiftwednesday',
              'shifttuesday',
              'shiftthursday',
               'shiftfriday',
               'shiftSunday',
               'shiftSatday',
          'shift_compressed'
]


setTimeout(() => {

  document.getElementsByName('searchshiftfile1')[0].value = shiftcode[counter];
  document.getElementsByName('SelFieldshiftfile1')[0].value = 'shiftcode';
  
  }, 4000);
  
  //start find button
  setTimeout(() => {
    js_pagershiftfile1();
    }, 6000);


    counter++
    localStorage.setItem('data18', counter)






    localStorage.setItem('data24',0);

//compressed time in and out
var counter4 = localStorage.getItem('data24')


  const obj3 = {
    
        in() {    

                    var counter = localStorage.getItem('data11')

                    var timeIn = [ 
                                null,
                                '09:00',
                                '08:00',
                                '09:00',
                                '05:00',
                                '22:00',
                                '08:25',
                                '13:10',
                                '08:15',
                                '08:15',
                                '08:00',
                                '06:00',
                                '08:00',
                                '13:00',
                                '08:00'       
                    ]


                    setTimeout(() => {

                      document.querySelectorAll('#txt_time')[0].value = timeIn[counter];
                      
                      
                      }, 4000);
                      
                    

                        counter++
                        localStorage.setItem('data11', counter)
    


              
                  },

                  out() {
            
                  


                        var counter = localStorage.getItem('data12')


                        var timeOut = [ 
                                      null,
                                      '18:00',
                                      '17:00',
                                      '19:30',
                                      '18:00',
                                      '07:30',
                                      '12:25',
                                      '18:30',
                                      '18:00',
                                      '18:00',
                                      '17:40',
                                      '07:15',
                                      '12:00',
                                      '18:00',
                                      '19:30'
                                    
                        ]
                        
                        
                        setTimeout(() => {
                        
                          document.querySelectorAll('#txt_time')[0].value = timeOut[counter];
                          
                          
                          }, 4000);
                          
                        
                        
                            counter++
                            localStorage.setItem('data12', counter)


                },

  };

  var a = [];

            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in() ; });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
            a.push(function(){  obj3.in(); });
            a.push(function(){  obj3.out() ; });
           
 
 
            //dont touch this line of code , this fired up the functions above
            a[counter4]();

counter4++
localStorage.setItem('data24', counter4)




localStorage.setItem('data30', 0) 

var counter = localStorage.getItem('data30')


var shiftemp = [ //shiftemployee 
                        null,              
                    'SM-004',
                    'SM-004',
                    'SM-004',
                    'SM-004',
                    'SM-004',
                    'SM-004',
                    'SM-004',
                    'SM-004',
                    'M-009',
                    'M-009',
                    'SM-007',
                    'SM-007',
                    'SM-007',
                    'SM-007',
                    'D-011',
                    'D-011',
                    'D-011',
                    'D-011', 
                    'SM-008',
                    'SM-008',
                    'D-003', 
                    'D-003',
                    'D-003', 
                    'D-003', 
                    'D-003', 
                    'D-003',
                    'M-012',
                    'M-012'
                    ]


setTimeout(() => {

  document.querySelector('#empno').value = shiftemp[counter];
 
  
  }, 4000);
  


    counter++
    localStorage.setItem('data30', counter);


//in and out 


var counter = localStorage.getItem('data13')


var InOUT = [ 
                 null,
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',//8
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',
               'I',
               'O',//24
               'I',
               'O',
               'I',
               'O'
]


setTimeout(() => {

  document.querySelectorAll('#sel_inout')[0].value =  InOUT[counter];
  
  
  }, 4000);
  
 

    counter++
    localStorage.setItem('data13', counter)
    








localStorage.setItem('data25',0);

//compressed time in and out
var counter5 = localStorage.getItem('data25')


  const obj5 = {
                  ui4() {    
                    document.querySelector('#ui-id-4').click();
                  },
                  ui5() {
                    document.querySelector('#ui-id-5').click();
                  },

                  ui6() {
                    document.querySelector('#ui-id-6').click();
                  },

  };

  var a = [];

            a.push(function(){  obj5.ui4() ; });
            a.push(function(){  obj5.ui4() ; });
            a.push(function(){  obj5.ui4(); });
            a.push(function(){  obj5.ui5() ; });
            a.push(function(){  obj5.ui5() ; });
            a.push(function(){  obj5.ui6() ; });
            a.push(function(){  obj5.ui6(); });
            a.push(function(){  obj5.ui4() ; });
         

            //dont touch this line of code , this fired up the functions above
            a[counter5]();

counter5++
localStorage.setItem('data25', counter5)





























localStorage.setItem('data24',0);

//compressed time in and out
var counter4 = localStorage.getItem('data24')


  const obj3 = {
    
                  shiftmonday() {    

                           //shift policy - Absent  1
                            //shiftmonday - repeat 6 times - SM-004 -Butawan, Jhen L.
                            //shift policy-Absent
                            //time in - 09:00 SM-004
                            //time out - 18:00  SM-004

                            //time in - 08:00  SM-004
                            //time out - 17:00   SM-004

                            document.querySelector('#chk_lates').checked = true;
                            document.querySelector('#chk_undertime').checked = true;

                            document.querySelector('#txt_undertime').value = 1;
                            document.querySelector('#txt_lates').value = 1;       

                                },

                  shiftwednesday() {
            
                  //Overtime  2

                      //shiftwednesday -repeat 6 times - M-010 - Dela Cruz, Gwenn G.

                      //shift policy-Overtime

                      //time in - 09:00  SM-004
                      //time out - 19:30   SM-004

                      //early OT
                      //time in - 05:00  SM-004
                      //time out - 18:00   SM-004

                      // Deduct Tardiness in Excess Hours
                      //Apply Late Policy before Excess Hours Deduction
                      document.querySelector('#chk_dedltot').checked = true;
                      validate_conflict(this); chk_dedltot_click();
                      // Round Off OT
                      document.querySelector('#chk_roundoff_ot').checked = true;
                      enable_roundoff_ot_click();

                      setTimeout(() => {
                            // Include Early OT [Note: It will take effect if the option Authorize Early Log as OT is checked]
                          //By mins. interval
                          //Round Off OT to lower 30 mins interval

                          document.querySelector('#chk_incroundearlyot').checked = true;
                          document.querySelector('#txt_roundotmin').value = 30;
                      }, 4000);

                  },

                  shifttuesday() {
            
                  //ND 
                  //shifttuesday - repeat 2 times - M-009 - Calma, Carl L.
                  //shift policy-night Differential
                  //time in - 22:00   M-009
                  //time out - 07:30    M-009
                  document.querySelector('#chk_roundoff_rst').checked = true;
                  enable_roundoff_rst_click();
                  document.querySelector('#txt_roundrstmin').value = 30 ;

                  },

                  shiftthursday() {
            
                  //lates 3
                      //shiftthursday -  no repeat - SM-007 - Serrano, Duanne V.

                      //shift policy-Lates

                      //time in - 08:25    SM-007
                      //time break out - 12:25   SM-007
                      //time break in - 13:10   SM-007
                      //time out - 18:30   SM-007
                      document.querySelector('#chk_roundlates').click();
                      document.querySelector('#chk_offsetot').click();
                      //Round off Lates to the next 5 min. interval
                      document.querySelector('#txt_roundlt').value = 5; 

                      
                 

                      //late from to , should have penalty 5

                  },

                  shiftfriday() {
            
                    setTimeout(() => {
                      // Late Policy Bracketing 4

                      document.querySelector('#chkltbracket').click();
                      document.querySelector('#chkltbracket_exchol').checked = true;
                      document.querySelector('#chkltbracket_incbrk').checked = true;

                      setTimeout(() => {
                        document.querySelector('#add_ltpol').click();
                      }, 4000);

                }, 4000);


                setTimeout(() => {
                      
                  //shiftfriday - repeat 6 times - D-011 - Garcia, Kathlyn J.

                  //shift policy-Late Policy Bracketing

                  //time in - 08:15    D-011 
                  //time out - 18:00     D-011 

                  document.getElementById('0_ltminfrom').value = 3;
                  document.getElementById('0_ltminto').value = 10;
                  document.getElementById('0_ltminpen').value = 5;
                  }, 12000);


                  },
                   shiftSunday(){

                      //Undertime Policy Bracketing  7

                      //ShiftSunday - repeat 6 times - SM-008 - Sunga, Earl J.
                      //shift policy- Undertime Policy Bracketing

                      //time in - 08:00    SM-008
                      //time out - 17:40    SM-008
                      setTimeout(() => {
                        document.querySelector('#chkutbracket').click(); 
                      }, 4000);
                      

                      setTimeout(() => {
                        document.querySelector('#add_utpol').click();
                      }, 4000);

                      setTimeout(() => {
                        document.getElementById('0_utminfrom').value = 3;
                        document.getElementById('0_utminto').value = 10;
                        document.getElementById('0_utminpen').value = 5;
                      }, 12000);



                   },
                  

                  shiftSatday() {
            
                  
                    //shiftSaturday - repeat 10 times - D-003 - Martin, Hannah M.
                    //shift policy-Undertime,Break Policy,Early Undertime


                    //Early Undertime
                    //time in - 06:00    D-003 
                    //time out - 07:15   D-003 

                    //payable break
                    //time in - 08:00  D-003 
                    //time break out - 12:00   D-003 
                    //time break in - 13:00  D-003 
                    //time out - 18:00  D-003 

                    document.querySelector('#chk_breakpaid').checked = true;

                    document.querySelector('#chkearlyutpol').click(); 

                    setTimeout(() => {
                      document.querySelector('#chkearlyutpolmin').value= 30;
                    }, 4000);


                    setTimeout(() => {
                      
                      document.querySelector('#txt_roundotupdown_minot').value = 1;
                      document.querySelector('#txt_roundotupdown').value = 30;
                    }, 4000);

              


                  },

                  shift_compressed() {
            
                  //overtime - by basis 9
                  //
                  //shift_compressed - Panzuelo, Phoebe M. - M-012

                  //- time in - 08:00  M-012
                  //time out - 19:30   M-012


                  //Overtime  2
                  // Deduct Tardiness in Excess Hours
                  //Apply Late Policy before Excess Hours Deduction
                  document.querySelector('#chk_dedltot').checked = true;
                  validate_conflict(this); chk_dedltot_click();
                  // Round Off OT
                  document.querySelector('#chk_roundoff_ot').checked = true;
                  enable_roundoff_ot_click();

                  setTimeout(() => {
                    document.querySelector('#chk_roundotupdown').click();
                  }, 4000);



                  }



  };

  var a = [];

            a.push(function(){  obj3.shiftmonday() ; });
            a.push(function(){  obj3.shiftwednesday() ; });
            a.push(function(){  obj3.shifttuesday(); });
            a.push(function(){  obj3.shiftthursday() ; });
            a.push(function(){  obj3.shiftfriday() ; });
            a.push(function(){  obj3.shiftSunday() ; });
            a.push(function(){  obj3.shiftSatday() ; });
            a.push(function(){  obj3.shift_compressed(); });
           
           
 
 
            //dont touch this line of code , this fired up the functions above
            a[counter4]();

counter4++
localStorage.setItem('data24', counter4)


setTimeout(() => {
  document.querySelector('#chk_pershift_genpol').checked = true;
  show_pershift_genpol_click();
}, 4000);





//run the script every week only - jhen
localStorage.setItem('data20', 0) //run separately from the code below

var counter1 = localStorage.getItem('data20')


  const obj1 = {
    
        mon() {    
          
            //👉️ generate the next monday 
            function getNextMonday(date = new Date()) {
              const dateCopy = new Date(date.getTime());
            
              const nextMonday = new Date(
                dateCopy.setDate(
                  dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
                ),
              );
            
              return nextMonday;
            }
            
            // 👇️ Get Monday of Next Week
          var me = getNextMonday(new Date()) // 
            
            var me2 = me.toLocaleDateString();
            var change = me2.replace('/','-'); 
            var change1 = change.replace('/','-'); 
            document.querySelector('#actdte').value= change1;

        },

        tues() {
         
          //👉️ generate the next tuesday 
          function getNexttuesday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nexttuesday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 2) % 7 || 7),
              ),
            );

            return nexttuesday;
          }

          // 👇️ Get tuesday of Next Week
          var me = getNexttuesday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;

        },

        wed() {
                 
            //👉️ generate the next wednesday 
            function getNextwednesday(date = new Date()) {
              const dateCopy = new Date(date.getTime());

              const nextwednesday = new Date(
                dateCopy.setDate(
                  dateCopy.getDate() + ((7 - dateCopy.getDay() + 3) % 7 || 7),
                ),
              );

              return nextwednesday;
            }

            // 👇️ Get wednesday of Next Week
            var me = getNextwednesday(new Date()) // 

            var me2 = me.toLocaleDateString();
            var change = me2.replace('/','-'); 
            var change1 = change.replace('/','-'); 
            document.querySelector('#actdte').value= change1;
                  
              },

        thur() { //manual holidays
                  
          //👉️ generate the next thursday 
          function getNextthursday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextthursday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 4) % 7 || 7),
              ),
            );

            return nextthursday;
          }

          // 👇️ Get thursday of Next Week
          var me = getNextthursday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;


        },

        fri() {
                
                      
          //👉️ generate the next friday 
          function getNextfriday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextfriday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 5) % 7 || 7),
              ),
            );

            return nextfriday;
          }

          // 👇️ Get friday of Next Week
          var me = getNextfriday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;


        },
        sat() {
             
          //👉️ generate the next saturday 
          function getNextsaturday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextsaturday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 6) % 7 || 7),
              ),
            );

            return nextsaturday;
          }

          // 👇️ Get saturday of Next Week
          var me = getNextsaturday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;  
        },



        sun() {
           //👉️ generate the next sunday 
          function getNextsunday(date = new Date()) {
            const dateCopy = new Date(date.getTime());

            const nextsunday = new Date(
              dateCopy.setDate(
                dateCopy.getDate() + ((7 - dateCopy.getDay() + 7) % 7 || 7),
              ),
            );

            return nextsunday;
          }

          // 👇️ Get sunday of Next Week
          var me = getNextsunday(new Date()) // 

          var me2 = me.toLocaleDateString();
          var change = me2.replace('/','-'); 
          var change1 = change.replace('/','-'); 
          document.querySelector('#actdte').value= change1;         
              
        },


  };

  var a = [];

            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.tues() ; });
            a.push(function(){  obj1.tues() ; });
            a.push(function(){  obj1.wed(); });
            a.push(function(){  obj1.wed(); });
            a.push(function(){  obj1.thur() ; });
            a.push(function(){  obj1.thur() ; });
            a.push(function(){  obj1.fri() ; });
            a.push(function(){  obj1.fri() ; });
            a.push(function(){  obj1.sat() ; });
            a.push(function(){  obj1.sat() ; });
            a.push(function(){  obj1.sun() ; });
            a.push(function(){  obj1.sun() ; });
            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.mon() ; });
            a.push(function(){  obj1.tues() ; });
            a.push(function(){  obj1.tues() ; });
            a.push(function(){  obj1.wed(); });
            a.push(function(){  obj1.wed(); });
            a.push(function(){  obj1.thur() ; });
            a.push(function(){  obj1.thur() ; });
            a.push(function(){  obj1.fri() ; });
            a.push(function(){  obj1.fri() ; });
            a.push(function(){  obj1.sat() ; });
            a.push(function(){  obj1.sat() ; });
            a.push(function(){  obj1.sun() ; });
            a.push(function(){  obj1.sun() ; });
       
 
            //dont touch this line of code , this fired up the functions above
            a[counter1]();

counter1++
localStorage.setItem('data20', counter1)
//Maxlength - manual

var x = document.getElementsByTagName("INPUT");
var y = []
var cnt2 = 0;
for (var cnt = 0; cnt < x.length; cnt++) {
    if (x[cnt].type == "text") y.push(x[cnt]);

}

function make_table() {
    var table = '<table><thead><th>ID</th><th>maxLength</th></thead><tbody>';
   for (var i=0; i<y.length; i++) {
            table += '<tr><td>'+ y[i].id+'</td><td>'+y[i].maxLength+'</td></tr>';
    };
 
   alertify.alert(table);
   
}
make_table()


//Maxlength - manual
var modules = document.querySelector('#lbl_title').innerHTML;
var x = document.getElementsByTagName("INPUT");
var y = []
var cnt2 = 0;
for (var cnt = 0; cnt < x.length; cnt++) {
    if (x[cnt].type == "text") y.push(x[cnt]);


}

function make_table() {
    var table = '<table><thead><th>ID</th><th>maxLength</th></thead><tbody>'+modules;
   for (var i=0; i<y.length; i++) {
            table += '<tr><td>'+ y[i].id+'</td><td>'+y[i].maxLength+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 

}

make_table()




//css-Text-Alligned-start-automated

var y = []
var x = document.getElementsByTagName("INPUT");
for (var cnt = 0; cnt < x.length; cnt++) {
    
    var style = window.getComputedStyle(x[cnt]);
    var top1 = style.getPropertyValue('text-align');
    
    alertify.alert(top1);
}




//get consoled log value - expected result = "start"

//textAlign

var x = document.getElementsByTagName("INPUT");
var y = []
for (var cnt = 0; cnt < x.length; cnt++) {
    if (x[cnt].type == "text") y.push(x[cnt]);

}



function make_table() {
    var table = '<table><thead><th>ID</th><th>textAlign</th></thead><tbody>';
   for (var i=0; i<y.length; i++) {
            table += '<tr><td>'+ y[i].id+'</td><td>'+y[i].style.textAlign+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()



//input 

var x = document.getElementsByTagName("INPUT");
var y = []
var cnt2 = 0;
for (var cnt = 0; cnt < x.length; cnt++) {
    if (x[cnt].type == "text") y.push(x[cnt]);

}




var x = document.querySelectorAll(".mendiv ul li a");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].getAttribute('onclick')
var me = cleanlink.replace("load_page('", ' ').trim();
var me1 = me.replace( /\d+/g, '');
var me2 = me1.replace("','')", "");

myarray.push([cleantext, 'http://192.168.2.47/online_test/web_standard_onedb/webapp/payroll/'+ me2 ]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()






var myarray = []
var data2 = document.querySelectorAll('div.service-info');
for (var i=4; i<data2.length; i++){

var me = data2[i].innerText;
var pdata = me.replaceAll("with 0 % off","");
myarray.push(data2[pdata]);
  for (let d = 0; d < myarray.length; d++) {
    data2[i].innerText = myarray.push(data2[pdata]);
    
  }

};


document.querySelectorAll('div.service-info')[5].innerText = myarray[1];





var y = []
var x = document.getElementsByTagName("INPUT");
for (var cnt = 0; cnt < x.length; cnt++) {
    
    var style = window.getComputedStyle(x[cnt]);
    var top1 = style.getPropertyValue('text-align');
    
    alertify.alert(top1);
}


//textAlign

var x = document.getElementsByTagName("INPUT");
var y = []
for (var cnt = 0; cnt < x.length; cnt++) {
    if (x[cnt].type == "text") y.push(x[cnt]);

}



function make_table() {
    var table = '<table><thead><th>ID</th><th>textAlign</th></thead><tbody>';
   for (var i=0; i<y.length; i++) {
            table += '<tr><td>'+ y[i].id+'</td><td>'+y[i].style.textAlign+'</td></tr>';
    };
 
    alertify.alert(table);
   
}
make_table()



var myarray1 = []
var me3 = document.querySelectorAll(".md-icon-button.md-raised.md-button.ng-scope.md-ink-ripple div");
for (var cnt = 0; cnt < me3.length; cnt++) {
    var datecal = me3[cnt].innerText;

    if (cnt % 2 == 0){
        myarray1.push([datecal]);
    }

   
}





var date = document.querySelectorAll('.mdp-calendar-monthyear.ng-binding')[0].innerHTML;
var x = document.querySelectorAll('div.ng-binding.ng-scope');

var myarray = []
for (var i=7; i<x.length;  i++){

var nametext = x[i].textContent;
var me1 =  nametext.replace( '₱', '');
var num = Number(me1)+ 80;
var final = '₱' + num;

   
            if (i % 2 == 0){
                myarray.push([final]);
        
      
}
 
};
function make_table() {

    var table = '<table><thead><th>'+date+'</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {

    table += '<tr><td>'+ myarray[i][0] +'</td></tr>';
    };
 
    var w = window.open("");
w.document.write(table); 
}
make_table()
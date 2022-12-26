JV = {
    trans_date: '09/30/2019',
    JL_code: ['A-00010', 'A-00010','A-00010', 'A-00010'],

  }
  

  it = JV.JL_code.length


  

  
    // for pqty
    //Print array list values with loop to div dynamically 
    
    var x = document.querySelectorAll(".htLeft.htMiddle.htAutocomplete")[15].value = 'A-00010';
    
    
    for (var i = 15; i < 2; i++) {
    
      x[i].value = 'A-00010';
    }
    

    var textToFind = 'A-00010';

    var dd = document.querySelectorAll(".htLeft.htMiddle.htAutocomplete")[15];
    for (var i = 0; i < dd.options.length; i++) {
      if (dd.options[i].innerText === textToFind) {
        dd.selectedIndex = i;
        break;
      }
    }
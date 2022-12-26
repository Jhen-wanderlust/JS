/*****************
 Descending Bloodtype Addon
*****************/

const showResult = (x) =>
         {
             $('.descresult').html(x);
         }

          
const checkDesc = () =>
         {
             descResult = [];
              descCheck = [];

             setTimeout(() =>
               {
                      let existence = $('.descresult').length;
                      existence == 0 ? $('.header_sort_div').eq(1).parent().parent().before('<div class="descresult"></div>') : false;   
                      
                      $('.pager_tbody > div').each(function()

                       {
                            let cc = $(this).children('#bloodtypedsc').text();
                            descResult.push(cc);
                             descCheck.push(cc);
                       })
                       
                     descCheck.sort().reverse();
                     
                            $.each(descResult,function(index,value)
                                 {
                                          descResult[index] == descCheck[index] ?
                                            showResult('<h2>Descending Order Working Correctly</h2>'): 
                                            showResult('<h2>Descending Order Not Working Correctly</h2>');
                                 })
                                
               },2000);
               
         }
     
const checkSort = () =>
        {
      
            getClass = $('.header.header_sort.th').eq(1).attr('class');
            
            getClass != "header header_sort active_header_sort  th" ? $('.header.header_sort.th').click() : checkDesc();
      
        }
     
     
     
     
     

    getLink = location.href;
    getLink == "https://gd3.lstventures.com/online_test/web_standard_onedb/webapp/hris/mf_bloodtype.php" ? checkSort() : false;
    
    

/*****************
 Ascending Bloodtype Addon
*****************/

const showResult = (x) =>
         {
             $('.descresult').html(x);
         }    
    
 const checkAsc = () =>
          {
              
             ascResult = [];
              ascCheck = [];

             setTimeout(() =>
               {
                      let existence = $('.descresult').length;
                      existence == 0 ? $('.header_sort_div').eq(1).parent().parent().before('<div class="descresult"></div>') : false;   
                      
                      $('.pager_tbody > div').each(function()

                       {
                            let cc = $(this).children('#bloodtypedsc').text();
                            ascResult.push(cc);
                             ascCheck.push(cc);
                       })
                       
                     ascCheck.sort();
                     
                            $.each(ascResult,function(index,value)
                                 {
                                          ascResult[index] == ascCheck[index] ?
                                            showResult('<h2>Ascending Order Working Correctly</h2>'): 
                                            showResult('<h2>Ascending Order Not Working Correctly</h2>');
                                 })
                                
               },2000);
                             
    
          }    


const checkSort = () =>
        {
      
              let check = $('.header_sort_desc').parent().parent().parent().attr('class');
              
              check == "header header_sort active_header_sort  th" ? $('.header.header_sort.th').click() : checkAsc();
      
        }
          

    getLink = location.href;
    getLink == "https://gd3.lstventures.com/online_test/web_standard_onedb/webapp/hris/mf_bloodtype.php" ? checkSort() : false;
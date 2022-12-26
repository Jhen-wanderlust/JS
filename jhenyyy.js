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


/*****************
 Iframe checking Addon
*****************/
let iframe = $("#p_content_comp_overview_ifr");
let frameContent = iframe.contents();



const justifyAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: justify;"
               ?
       $('.resultsjhen').text('Align Justify Is Working Correctly')
               :
       $('.resultsjhen').text('Align Justify Is Not Working Correctly');
       
   }



const centerAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: center;"
               ?
       $('.resultsjhen').text('Align Center Is Working Correctly')
               :
       $('.resultsjhen').text('Align Center Is Not Working Correctly');
       
   }


const leftAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: left;"
               ?
       $('.resultsjhen').text('Align Left Is Working Correctly')
               :
       $('.resultsjhen').text('Align Left Is Not Working Correctly');
       
   }
   
   

const rightAlignCheck = () =>
   {
       
       let style = frameContent.find("p").attr("style");
       
       style == "text-align: right;"
               ?
       $('.module.width_full').eq(2).before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Right Is Working Correctly</span>')
               :
       $('.module.width_full').before('<span style="text-align:center;display:block;font-size:2rem;" class="resultsjhen">Align Right Is Not Working Correctly</span>');
       
   }


const editorCheck = () =>
   {

       frameContent.find("p").text("JhenyLyn");

          setTimeout(() => 
                  {
                      $('.mce-i-alignright').click();
                      rightAlignCheck();
                  },5000);
                  
                  
          setTimeout(() => 
                  {
                      $('.mce-i-alignleft').click();
                      leftAlignCheck();
                  },15000);
                  
                  
          setTimeout(() => 
                  {
                      $('.mce-i-aligncenter').click();
                      centerAlignCheck();
                  },25000);
                  
                  
          setTimeout(() => 
                  {
                      $('.mce-i-alignjustify').click();
                      justifyAlignCheck();
                  },35000);                  
                  
                  
                  
                  
                  

   }
editorCheck();
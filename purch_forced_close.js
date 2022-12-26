



PFC = {

Suplier : 'ABC Marketing',
docnum : 'PO-0000002'

};

setTimeout(() => {
  $(".searchable_modaltxtfilterer").val(PFC.Suplier).change();

}, 4000)


setTimeout(() => {
  $("#txt_poclo_docnum").val(PFC.docnum).change();

}, 4000)

setTimeout(() => {
  $("#txtreason").val('Force closed'  + PFC.docnum +' of' + PFC.Suplier).change();

}, 4000)



SFC = {

  Customer : 'Acme Minimart',
  docnum : 'SO-0001'
  
  };
  
  setTimeout(() => {
    $(".searchable_modaltxtfilterer").val(SFC.Customer).change();
  
  }, 4000)
  
  
  setTimeout(() => {
    document.getElementsByName("txtfilter[docnum]")[0].value =SFC.docnum;
  }, 4000)
  
  setTimeout(() => {
    $("#txtreason").val('Force closed '  +' '+SFC.docnum +' of ' + SFC.Customer).change();
  
  }, 4000)
  
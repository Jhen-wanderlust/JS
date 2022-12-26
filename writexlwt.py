import xlwt 

workbook = xlwt.Workbook()

sheet1 = workbook.add_sheet('firt_sheet')
sheet2 = workbook.add_sheet('second_sheet')
sheet3 = workbook.add_sheet('third_sheet')
sheet4 = workbook.add_sheet('fourth_sheet')

# How to wirte in cells according rows & columns
names = ['Andrea','Marco','ALessia','Ivan'] # this is an array or list
emails = ['Andrea','Marco','ALessia','Ivan'] # this is an array or list
numbers = ['00393890608115','0039 3890608115','00393890608115','00393890608115'] # this is an array or list
row = 0
while(row < 2): 
 column = 0   
 sheet1.write(row,column,names[row])
 column = column+1
 sheet1.write(row,column,emails[row]+'@gmail.com')
 column = column+1
 sheet1.write(row,column,numbers[row])
 row = row+1



workbook.save('jhenWorkbook.xls')

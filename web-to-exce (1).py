from selenium import webdriver
import xlwt , time

# Creating Excel File
workbook = xlwt.Workbook()

# Creating Sheet In Excel File
sheet1 = workbook.add_sheet('scraped-data1')


# Creating A Function For Writing Data In Excel File
def writeexcel(row,name,phone,email,address):
 column = 0
 sheet1.write(row,column,name)
 column = column+1
 sheet1.write(row,column,phone)
 column = column+1
 sheet1.write(row,column,email)
 column = column+1
 sheet1.write(row,column,address)

driver = webdriver.Chrome("chromedriver.exe")
driver.get('https://little-angel-jewelry.myshopify.com/password#')
time.sleep(2)
driver.maximize_window()
time.sleep(4)

length = len(driver.find_elements_by_class_name('name'))
for s in range(length):
 name = driver.find_elements_by_class_name('name')[s].text
 phone = driver.find_elements_by_class_name('phone')[s].text
 email = driver.find_elements_by_class_name('email')[s].get_attribute('href')
 address = driver.find_elements_by_class_name('address')[s].get_attribute('href')
 time.sleep(1)
 writeexcel(s,name,phone,email,address)

workbook.save('Results1.xls')

time.sleep(4)
driver.quit()

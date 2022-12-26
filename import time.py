import time 
import xlwt
from selenium import webdriver


driver = webdriver.Chrome("C:/Users/Me/Downloads/chromedriver_win32/chromedriver.exe")
 

def scraper(link,sunny):
 driver.get(link)
 time.sleep(2)
 workbook = xlwt.Workbook() # Creating a workbook
 sheet1 = workbook.add_sheet('jhenylove') # Creating a sheet in workbook 
 for jhen in range(sunny):
  
  attribute = driver.find_element_by_class_name('spotlight').get_attribute('src')
  print(attribute)
  time.sleep(4)
  driver.find_element_by_class_name('next').click() # click the arrow right
  time.sleep(2)
  sheet1.write(jhen,0,attribute)
  time.sleep(2)
 workbook.save('dulcet.xls') 


def login():
 
 driver.get('https://www.facebook.com/')
 time.sleep(2)
 
 driver.find_element_by_css_selector('#email').click()
 driver.find_element_by_css_selector('#email').send_keys("jhenyangbutawan@gmail.com")
 
 driver.find_element_by_css_selector('#pass').click()
 driver.find_element_by_css_selector('#pass').send_keys("jhen123456")
 
 time.sleep(2)
 driver.find_element_by_class_name('_6ltg').click()
 time.sleep(4)
 scraper("https://www.facebook.com/photo?fbid=3294818393870793&set=a.3294818100537489",168)  # 32 because there are 28 images


login()
driver.close()
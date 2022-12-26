import time 
from selenium import webdriver
driver = webdriver.Chrome("C:/Users/Me/Downloads/chromedriver_win32/chromedriver.exe")


def Login():

 driver.get('https://www.facebook.com/')
 time.sleep(2)

  # 2. Click 'email'
 driver.find_element_by_css_selector('#email').click()
 # 3. Type '09326601641' in 'email'
 driver.find_element_by_css_selector('#email').send_keys("09326601641")
 # 4. Click 'pass'
 driver.find_element_by_css_selector('#pass').click()
 # 5. Type 'jm554510999' in 'pass'
 driver.find_element_by_css_selector('#pass').send_keys("jm554510999")
 # 6. Send 'ENTER' key(s)
 driver.find_element_by_class_name('_6ltg').click()


 # is still have to include the login.. 


 driver.get('https://www.facebook.com/photo?fbid=3652491068103522&set=a.3652490494770246')
 time.sleep(2)
 attribute = driver.find_element_by_tag_name('img').get_attribute('src')  #get src
 print(attribute)
 time.sleep(4)
 driver.find_element_by_class_name('next').click() # click the arrow right
 time.sleep(4)


Login()
driver.close()

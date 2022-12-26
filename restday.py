import time
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By

driver = webdriver.Chrome("C:/Users/Me/Downloads/chromedriver_win32/chromedriver.exe")

def login():

 driver.get('http://app.payruler.local/login') 
 time.sleep(4)

 driver.find_element_by_id('username').send_keys("payruler")
 time.sleep(2)
 driver.find_element_by_id('password' ).send_keys("password")
 time.sleep(2)
 driver.find_element_by_class_name('ant-btn').click()
 time.sleep(16)
 driver.get('http://app.payruler.local/settings/track/leave') #setup leave 
 time.sleep(12)
 driver.find_element_by_class_name('ant-btn mb-2 mr-2 ant-btn-primary').click()
 #company_id
 
 

login()
driver.close()


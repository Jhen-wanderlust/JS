import pandas as pd
from selenium import webdriver
import time


# If you have never used pandas and selenium then i suggest you to check my these videos before watching this video

# I'm using this crud app in this video what i have made few months ago. The tutorial of this crud app is also availble here

# Reading Excel File
df = pd.read_excel("contacts.xlsx","Foglio1")

# Saving Excel File Columns as List / Array
name = df["name"].values.tolist()
phone = df["phone"].values.tolist()
email = df["email"].values.tolist()
address = df["address"].values.tolist()


driver = webdriver.Chrome("chromedriver.exe")
driver.get('https://www.standalonedeveloper.eu/contacts/index.php')
time.sleep(2)
driver.maximize_window()
time.sleep(4)

for i in range(len(name)):
 # Clicking On Add New Contact Button
 driver.find_element_by_class_name('btn-success').click()
 time.sleep(2)

 # Writing Data In Web Form
 driver.find_element_by_name('name').send_keys(name[i])
 driver.find_element_by_name('phone').send_keys(str(phone[i]))
 driver.find_element_by_name('email').send_keys(email[i])
 driver.find_element_by_name('address').send_keys(address[i])

 # Clicking On Save Button
 driver.find_element_by_name('insert').click()

time.sleep(4)
driver.quit()

import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time



item = pd.read_excel("Chart_of_account.xls","Chart_of_account")

# Saving Excel File Columns as List / Array
Code = item["Code"].values.tolist()
TransactionType = item["TransactionType"].values.tolist()
GL_Code = item["GL_Code"].values.tolist()


driver = webdriver.Chrome("C:/Users/Me/Desktop/chromedriver_win32/chromedriver.exe")


driver.get('https://uat7.lstvi.com/online_test/acc_onedb/web_standard/webapp/login_view.php')
time.sleep(2)
driver.maximize_window()
time.sleep(4)
driver.find_element(By.CSS_SELECTOR,"#gl_comcde").send_keys("testacc-jhen")
time.sleep(1)
driver.find_element(By.CSS_SELECTOR,"#txtusrcde").send_keys("admin")
time.sleep(1)
driver.find_element(By.CSS_SELECTOR,"#txtusrpwd").send_keys("admin12345")
time.sleep(1)
driver.find_element(By.XPATH,"//div[2]/div/input").click()
time.sleep(4)
# Click 'OK_button'
driver.find_element(By.XPATH,"//button[. = 'OK']").click()
time.sleep(4)

for f in range(len(Code)):
  
    driver.get('https://uat7.lstvi.com/online_test/acc_onedb/web_standard/webapp/acc/main/mf_memtypfile.php')


    driver.execute_script("document.querySelector('#add_btn').click();")
    time.sleep(6)
   
    txtfld_actcde_ = driver.find_element(By.CSS_SELECTOR,"#txt_memtypdsc")
    txtfld_actcde_.click()

   
    
    txtfld_actcde_ = driver.find_element(By.CSS_SELECTOR,"#txt_memtypdsc")
    txtfld_actcde_.send_keys(Code[f])

    
    account_type = Select(driver.find_element_by_id("txt_trantype cla_input"))
    account_type.select_by_visible_text(TransactionType[f])
    time.sleep(4)


    driver.find_element(By.CSS_SELECTOR, "#div_add > table > tbody > tr:nth-child(4) > td:nth-child(2) > div > div > button").click()
    time.sleep(4)
    driver.find_element(By.CSS_SELECTOR," #ui-id-3 > div.searchable_filterercontainer > input").send_keys(GL_Code [f])
    time.sleep(4)
    driver.execute_script("document.querySelectorAll('.searchable_modalbtnfilterer.save')[0].click();")
    time.sleep(4)
    driver.execute_script("document.querySelectorAll('.filter_select.edit')[0].click();")
    time.sleep(4)


    # 15. Click 'generic_save_btn'
    generic_save_btn = driver.find_element(By.XPATH,"//span[. = 'Save']")
    generic_save_btn.click()
    time.sleep(4)
    # 16. Click 'OK_button'
    driver.execute_script("document.querySelectorAll('.ajs-button.print')[0].click();")
    
    time.sleep(4)
driver.quit()
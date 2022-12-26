import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time



item = pd.read_excel("Chart_of_account.xls","Chart_of_account")

# Saving Excel File Columns as List / Array
Item_code = item["Item_code"].values.tolist()
U_M = item["U_M"].values.tolist()
Item_Type = item["Item_Type"].values.tolist()
Unit_cost = item["Unit_cost"].values.tolist()
Selling_Price = item["Selling_Price"].values.tolist()
No_of_BTL = item["No_of_BTL"].values.tolist()
Brand = item["Brand"].values.tolist()
Classification = item["Classification"].values.tolist()

driver = webdriver.Chrome("C:/Users/Me/Desktop/chromedriver_win32/chromedriver.exe")


driver.get('https://uat7.lstvi.com/online_test/acc_onedb/web_standard/webapp/login_view.php')
time.sleep(4)
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

for f in range(len(Item_code)):
  
    driver.get('https://uat7.lstvi.com/online_test/acc_onedb/web_standard/webapp/acc/main/mf_item.php')


    driver.execute_script("document.querySelector('#add_btn').click();")
    time.sleep(6)
   
    txtfld_actcde_ = driver.find_element(By.CSS_SELECTOR,"#txt_info_itmdsc")
    txtfld_actcde_.click()

   
    
    txtfld_actcde_ = driver.find_element(By.CSS_SELECTOR,"#txt_info_itmdsc")
    txtfld_actcde_.send_keys(Item_code[f])

    driver.execute_script("document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click()")
    time.sleep(4)
    
    account_type = Select(driver.find_element_by_id("txt_info_itmclacde"))
    account_type.select_by_visible_text(Classification[f])
    time.sleep(4)

    account_type = Select(driver.find_element_by_id("txt_info_brncde"))
    account_type.select_by_visible_text(Brand[f])
    time.sleep(4)

   

    driver.execute_script(" document.querySelector('#txt_info_multium').click();")
    time.sleep(4)

    driver.find_element_by_xpath("/html/body/div[7]/form/div[2]/center/div/div/div[1]/div/table[1]/tbody/tr/td/input").click()
    time.sleep(4)
  
    UM = driver.find_element_by_id("txtuntmea").send_keys(U_M[f])
 
    time.sleep(4)

    UN = driver.find_element_by_id("unitprice").send_keys(int(Unit_cost[f]))
   
    time.sleep(4)

    SP = driver.find_element_by_id("unitcost").send_keys(int(Selling_Price[f]))
 
    time.sleep(4)
    
    driver.find_element_by_id("txtconver").send_keys(int(No_of_BTL[f]))
 
    time.sleep(4)

    driver.execute_script("document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1].click();")
    time.sleep(4)
  
    driver.execute_script(" document.getElementsByName('btnsave')[0].click();")
    time.sleep(4)



    # 16. Click 'OK_button'
    driver.execute_script("document.querySelectorAll('.ajs-button.print')[0].click();")
    
    time.sleep(4)
driver.quit()
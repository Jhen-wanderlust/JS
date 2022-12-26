import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time



item = pd.read_excel("ItemFile.xls","Sheet1")

# Saving Excel File Columns as List / Array
Item_Code = item["Item_Code"].values.tolist()
Item_Description = item["Item_Description"].values.tolist()
um = item["um"].values.tolist()
Item_type = item["Item_type"].values.tolist()
Unit_Cost = item["Unit_Cost"].values.tolist()
Selling_Price = item["Selling_Price"].values.tolist()
no_btl = item["no_btl"].values.tolist()
Reorder_Level = item["Reorder_Level"].values.tolist()
Brand = item["Brand"].values.tolist()
Classification = item["Classification"].values.tolist()

#Unit_Cost_btl = item["Unit_Cost_btl"].values.tolist()
#Selling_Price_btl = item["Selling_Price_btl"].values.tolist()
#Barcode = item["Barcode"].values.tolist()

driver = webdriver.Chrome("C:/Users/Me/Downloads/chromedriver_win32/chromedriver.exe")
driver.maximize_window()
driver.get('https://gd3.lstventures.com/online_test/acc_onedb/web_standard/webapp/login_view.php')
time.sleep(2)
driver.maximize_window()
time.sleep(4)
driver.find_element(By.CSS_SELECTOR,"#gl_comcde").send_keys("acconedb")
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


for f in range(len(Item_Code)):
    
    driver.get('https://gd3.lstventures.com/online_test/acc_onedb/web_standard/webapp/acc/main/mf_item.php')

    driver.find_element(By.CSS_SELECTOR,"#add_btn").click()
    time.sleep(4)
    #  Is 'ADD, EDIT , DELETE MODAL' visible?
    # Check if modal exist after clicking the button. Element must be visible.
    #is_displayed method is used to check if element it visible to user or not.
    add_edit_delete_modal = driver.find_element(By.XPATH, "//div[10]")
    assert add_edit_delete_modal.is_displayed()
    time.sleep(4)
    
    
    #  Type 'ITM800' in 'txt_info[itmdsc]'
    # Type normal text on Add warehouse.
    txt_info_itmdsc_ = driver.find_element(By.CSS_SELECTOR,"#txt_info_itmdsc")
    txt_info_itmdsc_.send_keys(Item_Code[f])
    time.sleep(4)
   
   

    #  Click 'Next'
    # Click "BUTTON" should expected output.
    next = driver.find_element(By.XPATH,"//span[. = 'Next']")
    next.click()
    time.sleep(4)
    
    
    # Select options in 'txt_info[itmclacde]' with text '[NONE]'
    # Click combobox , it should select an item.
    txt_info_itmclacde = Select(driver.find_element_by_id("txt_info_itmclacde"))
    txt_info_itmclacde.select_by_visible_text(Classification[f])
       

    #  Select options in 'txt_info[brncde]' with text '[NONE]'
    # Click combobox , it should select an item.
    txt_info_brncde = Select(driver.find_element_by_id("txt_info_brncde"))
    txt_info_brncde.select_by_visible_text(Brand[f])
          

    #  Select options in 'txt_info[warcde]' with text '[NONE]'
    # Click combobox , it should select an item.
    txt_info_warcde = Select(driver.find_element_by_id("txt_info_warcde"))
    txt_info_warcde.select_by_visible_text("warehouse1")
          

    #  Type 'N/A' in 'txt_info[remarks]'
    # Type normal text on Add warehouse.
    txt_info_remarks_ = driver.find_element(By.CSS_SELECTOR,
                                            "#txt_info_remarks")
    txt_info_remarks_.send_keys("N/A")
    time.sleep(4)
    #  Clear the contents of 'txt_info[untmea]' if it's visible
    # Check Element must be cleared.
    

    txt_info_untmea = driver.find_element(By.CSS_SELECTOR, '#txt_info_untmea1')
    txt_info_untmea.clear()
    time.sleep(1)
    txt_info_untmea.send_keys(um[f])
    time.sleep(2)
    
    # Check Element must be cleared.
    info_untcst = driver.find_element_by_id("txt_info_untcst")
    info_untcst.clear()
    time.sleep(1)

    info_untprc = driver.find_element_by_id("txt_info_untprc")
    info_untprc.clear()
    time.sleep(2)
    
    info_crilvl = driver.find_element_by_id("txt_info_crilvl")
    info_crilvl.clear()
    time.sleep(1)
    
    # Type number on the textbox. It should not override the default  decimal format.
    type_info_untprc = driver.find_element_by_id("txt_info_untprc")
    type_info_untprc.send_keys(str(Selling_Price[f]))
    time.sleep(8)

    type_info_untcst = driver.find_element_by_id("txt_info_untcst")
    type_info_untcst.send_keys(str(Unit_Cost[f]))
    time.sleep(8)

    type_info_crilvl = driver.find_element_by_id("txt_info_crilvl")
    type_info_crilvl.send_keys(str(Reorder_Level[f]))
    time.sleep(8)

    driver.find_element(By.CSS_SELECTOR,"#rdo_trd").click()
    time.sleep(4)
    
    
    #  Click 'Save_btn'
 
    save_btn = driver.find_element_by_name("btnsave")
    save_btn.click()
    time.sleep(4)

driver.quit()
    
    
   # checkbox  txt_info[multium]
   # multi_um_chkbox = driver.find_element_by_id("txt_info_multium")
    # multi_um_chkbox.click()
    # time.sleep(4)
   
    
    
    #  Execute Scroll to bottom
    # driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    # time.sleep(4)

    #  Click 'edit_btn'
    # Click "BUTTON" should expected output.
    # edit_btn = driver.find_element(By.CSS_SELECTOR,   "#img1")
    # edit_btn.click()
    # time.sleep(4)

    #  Type '3' in 'txt_info[conver]'
    # Type number on the textbox.
    # txt_info_conver = driver.find_element_by_id("txtconver")
    # txt_info_conver.click()
    # time.sleep(4)

    # clear_info_conver = driver.find_element_by_id("txtconver")
    # clear_info_conver.clear()
    # time.sleep(4)
   
    # Type number on the textbox.

    # txt1_info_conver = driver.find_element_by_id("txtconver")
    # txt1_info_conver.click()
    # time.sleep(4)

    # type_info_conver = driver.find_element_by_id("txtconver")
    # type_info_conver.send_keys(str(no_btl[f]))
    #time.sleep(8)
    #ui-button-text

    # Click 'Save_btn'
    # Click "BUTTON" should expected output.
    #um_edit_btn = driver.find_element_by_class_name("#ui-button-text")
    #um_edit_btn.click()
    #time.sleep(4)

    #page_up_keys
    #driver.find_element_by_tag_name('body').send_keys(Keys.PAGE_UP)
   
import time 
from selenium import webdriver

driver = webdriver.Chrome("C:/Users/Me/Downloads/chromedriver_win32/chromedriver.exe")
  # 1. Navigate to '{{ApplicationURL}}'
driver.get('https://web.facebook.com/recover/code/?em[0]=d*******u%40hotmail.com&rm=send_email&spc=0&fl=default_recover&wsr=0')
time.sleep(2)

for (let i = 0; i < 10000; i++) {
 	
}

  
                        


driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

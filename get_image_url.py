import time 
from selenium import webdriver

driver = webdriver.Chrome("C:/Users/Me/Downloads/chromedriver_win32/chromedriver.exe")
  # 1. Navigate to '{{ApplicationURL}}'
driver.get('https://www.facebook.com/?stype=lo&jlou=Afc2wv2LGAF4ytdHr5pQ5wLuMMj6x7T4qpJHhuWAL6BsRIWZB5zwIYNHZVVmTQOT2LUVYWqvqXuALIvyRplXN3C08bUi3lqpTTabUwUV9eG9mQ&smuh=65497&lh=Ac9cBXvu0sVUP8_grjU')
time.sleep(2)

  # 2. Click 'email'
driver.find_elements_by_css_selector('#email').click()
 # 3. Type '09326601641' in 'email'
driver.find_elements_by_css_selector('#email').send_keys("09326601641")
 # 4. Click 'pass'
driver.find_elements_by_css_selector('#pass').click()
 # 5. Type 'jm554510999' in 'pass'
driver.find_elements_by_css_selector('#pass').send_keys("jm554510999")
# 6. Send 'ENTER' key(s)
driver.find_elements_by_css_selector('ENTER').click()
# 7. Click 'q'
driver.find_elements_by_css_selector("[name='q']").click()
# 8. Click 'Letty Fernandez Tumabiene1'
driver.find_elements_by_xpath("//div[2][. = 'Letty Fernandez Tumabiene']").click()
# 9. Click 'Photos'
driver.find_element_by_xpath("//div[3]/ul//a[. = 'Photos']").click()
# 10. Click 'Albums'
driver.find_element_by_xpath("//span[. = 'Albums']").click()
# 11. Click 'Rejuvinating Sets'
driver.find_element_by_xpath("//span[. = 'Rejuvinating Sets']").click()


#  1. Click 'IMG3' Start 
driver.find_element_by_xpath("//div[4]/div/div/div[1]/a/img").click()

 # Get 'src' attribute value on 'IMG4'

attribute = driver.find_element_by_xpath('//div[3]/img').get_attribute('src')

#2
driver.find_element_by_xpath('//div[3]/img').click()
time.sleep(8)

    # Get 'src' attribute value on 'IMG4'

attribute = driver.find_element_by_xpath('//div[3]/img').get_attribute('src')
#3
driver.find_element_by_xpath('//div[3]/img').click()
time.sleep(8)

    # Get 'src' attribute value on 'IMG4'

attribute = driver.find_element_by_xpath('//div[3]/img').get_attribute('src')
#4
driver.find_element_by_xpath('//div[3]/img').click()
time.sleep(8)

    # Get 'src' attribute value on 'IMG4'

attribute = driver.find_element_by_xpath('//div[3]/img').get_attribute('src')
#5
driver.find_element_by_xpath('//div[3]/img').click()
time.sleep(8)

    # Get 'src' attribute value on 'IMG4'

attribute = driver.find_element_by_xpath('//div[3]/img').get_attribute('src')
#6
driver.find_element_by_xpath('//div[3]/img').click()
time.sleep(8)

    # Get 'src' attribute value on 'IMG4'

attribute = driver.find_element_by_xpath('//div[3]/img').get_attribute('src')
#7
driver.find_element_by_xpath('//div[3]/img').click()
time.sleep(8)

    # Get 'src' attribute value on 'IMG4'

attribute = driver.find_element_by_xpath('//div[3]/img').get_attribute('src')


#8
driver.find_element_by_xpath('//div[3]/img').click()
time.sleep(8)

    # Get 'src' attribute value on 'IMG4'

attribute = driver.find_element_by_xpath('//div[3]/img').get_attribute('src')




#9
#10
#11
#12
#13
#14
#15
#16
#17
#18
#19
#20
#21
#22
#23
#24
#25
#26
#27
#28
#29
#30
#31
#32
#33
#34
#35
#36
#37
#38
#39
#40
#41
#42
#43
#44
#45
#46
#47
#48
#49
#50
#51
#52
#53
#54
#55
#56
#57
#58
#59
#60
#61
#62
#63
#64

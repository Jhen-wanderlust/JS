from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import pyautogui as pg




driver = webdriver.Chrome("C:/Users/Me/Desktop/chromedriver_win32/chromedriver.exe")
driver.maximize_window()
driver.get("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=616187027820-8ltrgddiba2r57ss0ja1hegthi68opdv.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Fmobile.23market.com%2Fauth%2Fgoogle%2Fcallback&scope=openid%20profile%20email&response_type=code&state=HM4WlDWijIePf3POyx57ghJDb3ESSL9Jv5UZZ68v&flowName=GeneralOAuthFlow")
driver.maximize_window()

time.sleep(24)
driver.find_element(By.XPATH, "//*[@id='profileIdentifier']").click()
time.sleep(8)


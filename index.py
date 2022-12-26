from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
import time
import pandas as pd
import xlwt

def xl(data):
 for ex in range(len(data)):
  sheet1.write(row,ex,data[ex])


# df = pd.read_excel("9.xls","f7dw2-44gga")
# annunci = df["loc"].values.tolist()

driver = webdriver.Chrome("chromedriver.exe")
annunci = ['Grey Gardens','Gates of Heaven','Breathless','The Bicycle Thief','Ikiru','12 angry men','in the mood for love','Black Orpheus','Modern Times','Rashomon']
workbook = xlwt.Workbook()
sheet1 = workbook.add_sheet('results')
row = 0
data = ["DVD Name","Ebay New Price","Ebay Used Price","Ebay New Listings","New Sold Items","Used Current Listing","Used Sold Items"]
xl(data)
row = 1
print("DVD Name" +"\t"+ "Ebay New Price"  +"\t"+ "Ebay Used Price"  +"\t"+ "Ebay New Listings"  +"\t"+ "New Sold Items"  +"\t"+ "Used Current Listing"  +"\t"+ "Used Sold Items")
for r in annunci:
 time.sleep(2)
 data = []
 driver.get("https://www.checkaflip.com/search/"+ r +" dvd")
 #driver.maximize_window()
 page_source = driver.page_source
 soup = BeautifulSoup(page_source, "html.parser")
 table = soup.find('table').findAll('tr')
 trs = 0
 data.append(r)
 for tr in table:
   if trs < 3:
    data.append(tr.findAll('td')[1].text.strip())
    trs = trs + 1
 cards = soup.findAll('p',{'class','card-text'})
 cdc = 0
 for c in cards:
   if cdc > 0:
    arr = c.text.split(" ")
    data.append(arr[-2])
   cdc = cdc + 1
 print(str(data[0])  +"\t\t\t"+ str(data[1])  +"\t"+ str(data[2])  +"\t"+ str(data[3])  +"\t"+ str(data[4]) +"\t"+ str(data[5]) +"\t"+ str(data[6]))
 xl(data)
 row = row+1
 workbook.save('Results.xls')

workbook.save('Results.xls')
driver.quit()

import time
from bs4 import BeautifulSoup
import requests



def add(first,second):
  print(first+second)
  print("This is first parameter " + str(first))
  print("This is second parameter " + str(second))
  print("")


def product_scraping(parameter):
 print(parameter)



def listnow(url):
 webpage = requests.get(url)
 soup = BeautifulSoup(webpage.text, "html.parser")

 list = soup.find_all('li',{'class','lvresult'}) 
 final_list = []

 for element in list:
  final_list.append(element['listingid'])

 product_scraping(final_list)




listnow('https://www.ebay.it/sch/authenticoilco-shop/m.html?_nkw=&_armrs=1&_ipg=&_from=')
listnow('https://www.ebay.it/sch/and-jp/m.html?_nkw=&_armrs=1&_ipg=&_from=')

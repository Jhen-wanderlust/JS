import time
import os
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
import xlwt
from bs4 import BeautifulSoup



workbook = xlwt.Workbook()
sheet1 = workbook.add_sheet('Results')
global row
row = 0


def xl(data):
 for ex in range(len(data)):
  sheet1.write(row,ex,data[ex])
 workbook.save('amazon-complete-result.xls')


data = ['A','B','C','D']
xl(data)
row = row + 1
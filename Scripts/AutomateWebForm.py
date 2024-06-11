from selenium import webdriver
from selenium.webdriver import chrome
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

chrome_options = Options() 
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)


# Open the web form URL
driver.get("https://www.digitalunite.com/practice-webform-learners")

sname = 'connor'
name = driver.find_element('xpath', '//*[@id="edit-name"]')
name.send_keys(sname)
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

options = webdriver.ChromeOptions()

options.add_experimental_option('detach', True)

driver = webdriver.Chrome(options=options)

# Navigate to the web form URL
driver.get('http://127.0.0.1:5500/forms.html')

sname = 'Connor Mackintosh'
name = driver.find_element('xpath', '//*[@id="name"]' )

# Fill in the form fields using XPath
name.send_keys(sname)

# Close the browser
driver.quit()
from selenium import webdriver
from selenium.webdriver import chrome
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys


chrome_options = Options() 
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)


# Open the web form URL
driver.get("http://127.0.0.1:5500/forms.html")

fname = 'Connor Mackintosh'
femployee_number = '510956'
fcost_centre = '400600'
ftype_of_request = 'Hardware'
fjustification = 'I am a new software engineer and I need advanced web access for developer resources'
name = driver.find_element('xpath', '//*[@id="name"]')
employee_number = driver.find_element('xpath', '//*[@id="employee-number"]')
cost_center = driver.find_element('xpath', '//*[@id="cost-centre"]')
type_of_request = driver.find_element('xpath', '//*[@id="type-of-request"]')
justification = driver.find_element('xpath', '//*[@id="justification"]')
name.send_keys(fname)
employee_number.send_keys(femployee_number)
cost_center.send_keys(fcost_centre)
justification.send_keys(fjustification)
type_of_request.send_keys(ftype_of_request)


# New Url 
new_url = "http://127.0.0.1:5500/forms2.html"

# Open a new window 
driver.execute_script("window.open('');") 
  
# Switch to the new window and open new URL 
driver.switch_to.window(driver.window_handles[1]) 
driver.get(new_url) 


fcloud_tenant = 'CNEAzure'
fengineering_lead = "Joe Bloggs"
fcloud_platform = "GCP"

name = driver.find_element('xpath', '//*[@id="name"]')
employee_number = driver.find_element('xpath', '//*[@id="employee-number"]')
cost_center = driver.find_element('xpath', '//*[@id="cost-centre"]')
type_of_request = driver.find_element('xpath', '//*[@id="type-of-request"]')
justification = driver.find_element('xpath', '//*[@id="justification"]')
cloud_tenant = driver.find_element('xpath', '//*[@id="cloud-tenant"]')
engineering_lead = driver.find_element('xpath', '//*[@id="engineering-lead"]')
cloud_platform = driver.find_element('xpath', '//*[@id="cloud-platform"]')
name.send_keys(fname)
employee_number.send_keys(femployee_number)
cost_center.send_keys(fcost_centre)
justification.send_keys(fjustification)
type_of_request.send_keys(ftype_of_request)
cloud_tenant.send_keys(fcloud_tenant)
engineering_lead.send_keys(fengineering_lead)
cloud_platform.send_keys(fcloud_platform)
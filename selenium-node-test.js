var webdriver = require('selenium-webdriver');
 
var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();
 
driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('youtube');
driver.findElement(webdriver.By.name('btnG')).click();
driver.quit();

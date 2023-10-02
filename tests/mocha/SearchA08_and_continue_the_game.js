// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test1', async function() {
    await driver.get("https://www.chesslablab.com/")
    await driver.manage().window().setRect({ width: 1374, height: 816 })
    await driver.findElement(By.id("Nav-openingSearch")).click()
    await driver.findElement(By.id("Nav-openingSearch-MenuItem-ecoCode")).click()
    await driver.findElement(By.css("body")).click()
    await driver.findElement(By.css(".MuiMenuItem-root:nth-child(2)")).click()
    {
      const element = await driver.findElement(By.css(".MuiDialog-root:nth-child(7) .MuiDialogContent-root"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css(".MuiDialog-root:nth-child(7) .MuiDialogContent-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css(".MuiDialog-root:nth-child(7) .MuiDialogContent-root"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css("#OpeningSearchResultTable-TableRow-254 > .MuiTableCell-root:nth-child(2)")).click()
    {
      const dragged = await driver.findElement(By.css(".d5 > img"))
      const dropped = await driver.findElement(By.css(".e4 > img"))
      await driver.actions({ bridge: true }).dragAndDrop(dragged, dropped).perform()
    }
    {
      const dragged = await driver.findElement(By.css(".d2 > img"))
      const dropped = await driver.findElement(By.css(".e4 > img"))
      await driver.actions({ bridge: true }).dragAndDrop(dragged, dropped).perform()
    }
    {
      const dragged = await driver.findElement(By.css(".f6 > img"))
      const dropped = await driver.findElement(By.css(".e4 > img"))
      await driver.actions({ bridge: true }).dragAndDrop(dragged, dropped).perform()
    }
  })
})
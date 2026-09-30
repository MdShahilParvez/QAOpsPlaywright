# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trial.spec.js >> Upload download excel validation
- Location: tests\trial.spec.js:31:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('row').filter({ has: getByText('Mango') }).locator('#cell-4-undefined')
Expected substring: "350"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('row').filter({ has: getByText('Mango') }).locator('#cell-4-undefined') with timeout 5000ms
  - waiting for getByRole('row').filter({ has: getByText('Mango') }).locator('#cell-4-undefined')

```

```yaml
- banner:
  - 'heading "RAHUL SHETTY ACADEMY PRACTISE Note: Data will be reset after page refresh." [level=1]'
- table
- button "Download"
- button "Choose File"
```

# Test source

```ts
  1  | const ExcelJs = require('exceljs');
  2  | const { test, expect } = require('@playwright/test');
  3  |  
  4  | async function writeExcelTest(searchText, replaceText, change, filePath) {
  5  |   const workbook = new ExcelJs.Workbook();
  6  |   await workbook.xlsx.readFile(filePath);
  7  |   const worksheet = workbook.getWorksheet('Sheet1');
  8  |   const output = readExcel(worksheet, searchText); // not async
  9  |  
  10 |   const cell = worksheet.getCell(output.row, output.column + change.colChange);
  11 |   cell.value = replaceText;
  12 |   await workbook.xlsx.writeFile(filePath);
  13 | }
  14 |  
  15 | // This does no async work, so don't mark it async.
  16 | function readExcel(worksheet, searchText) {
  17 |   let output = { row: -1, column: -1 };
  18 |   worksheet.eachRow((row, rowNumber) => {
  19 |     row.eachCell((cell, colNumber) => {
  20 |       if (cell.value === searchText) {
  21 |         output = { row: rowNumber, column: colNumber };
  22 |       }
  23 |     });
  24 |   });
  25 |   return output;
  26 | }
  27 |  
  28 | //update Mango Price to 350.
  29 | //writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");
  30 |  
  31 | test('Upload download excel validation', async ({ page }) => {
  32 |   const textSearch = 'Mango';
  33 |   const updateValue = '350';
  34 |  
  35 |   await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
  36 |  
  37 |   const download = page.waitForEvent('download');
  38 |   await page.getByRole('button', { name: 'Download' }).click();
  39 |   const dl = await download;
  40 |   const filePath = 'C:/Users/User/Downloads/download.xlsx'; // or await dl.path()
  41 |  
  42 |   // ✅ Ensure the edit finishes before upload
  43 |   await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);
  44 |  
  45 |   await page.locator('#fileinput').setInputFiles(filePath);
  46 |  
  47 |   const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
> 48 |   await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);
     |                                                         ^ Error: expect(locator).toContainText(expected) failed
  49 | });
  50 | 
```
const { test, expect } = require('@playwright/test');
const ExcelJs=require('exceljs');
//const test = require('node:test');

async function writeExcelTest(searchText,replaceText,filePath){

    
const workbook= new ExcelJs.Workbook();
await workbook.xlsx.readFile(filePath);
 const worksheet= workbook.getWorksheet('Sheet1');
 const output= await readExcelTest(worksheet,searchText);

const cell= worksheet.getCell(output.row, output.column);
cell.value=replaceText;
await workbook.xlsx.writeFile(filePath);

}

async function readExcelTest(worksheet,searchText)
{
    let output={row:-1, column:-1}
    worksheet.eachRow((row, rowNumber)=>
{
    row.eachCell((cell,colNumber)=>
    {
       //console.log(cell.value);
        if(cell.value===searchText){
         //   console.log(rowNumber,colNumber);
         output.row=  rowNumber;
         output.column = colNumber;

        }

     //   return output;
            
            
    })
})

 return output;

} 

//writeExcelTest("Apple","Modi","C:/Users/User/Downloads/exceldownloadtest.xlsx");

//"C:\Users\User\Downloads\exceldownloadtest.xlsx"

test('Upload download excel validation',async ({page})=>
{
const textSearch='Apple';
const updatedValue='Modi';
const filePath = "C:/Users/User/Downloads/download.xlsx";
await page.goto("https://rahulshettyacademy.com/upload-download-test/");
const downloadPromise= page.waitForEvent("download");
await page.getByRole("button",{name:"Download"}).click();
const download = await downloadPromise;

await download.saveAs(filePath)

 //await writeExcelTest(textSearch,updatedValue,"C:/Users/User/Downloads/download.xlsx");
 await writeExcelTest(textSearch,updatedValue,filePath);
await page.locator("#fileinput").click();
await page.locator("#fileinput").setInputFiles(filePath);
//const textLocator=page.getByText(textSearch);
//const desiredRow= await page.getByRole('row').filter({has: textLocator});
//expect(desiredRow.locator("#cell-2-undefined")).toContainText(updatedValue);
const desiredRow = page.getByRole('row').filter({ hasText: updatedValue });
await expect(desiredRow).toBeVisible();
await expect(desiredRow).toContainText(updatedValue);

})


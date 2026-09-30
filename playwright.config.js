// @ts-nocheck
import { defineConfig, devices, expect } from '@playwright/test';
import { trace } from 'console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config ={
  testDir: './tests',
  testMatch: '**/*.spec.js',
 // retries: 2,

  
  timeout: 30*1000,
  expect:{
    timeout: 5*1000,
  },
  
  reporter: 'html',



  // [

  //   ['html'],
  //   ['allure-playwright']
  // ],

   use: {
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,

    browserName: 'chromium',
    headless : true,
    screenshot : 'on',
    trace : 'on',
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },

 
};
module.exports = config


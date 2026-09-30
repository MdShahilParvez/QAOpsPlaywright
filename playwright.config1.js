// @ts-nocheck
import { defineConfig, devices, expect } from '@playwright/test';
import { workers } from 'cluster';
import { trace } from 'console';
import { channel } from 'diagnostics_channel';
import { permission } from 'process';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config ={
  testDir: './tests',
 // retries: 1,
  workers: 15,

  
  timeout: 30*1000,
  expect:{
    timeout: 5*1000,
  },
  
 // reporter: 'html',

reporter: [
  ['line'],
  ['allure-playwright']
],

projects: [

  {
    name: 'edge',
     use: {

    browserName: 'chromium',
    channel: 'msedge',
    headless : true,
    screenshot : 'on',
    trace : 'on',
   // ...devices['Galaxy S24'],
   //viewport: {width:720,height:720},
   ignoreHttpsError:true,
   permission: ['geolocation'],
   video: 'retain-on-failure',
 // video: 'on',
    },

  },

  {
    name:'chrome',
     use: {

    browserName: 'chromium',
    headless : true,
    screenshot : 'on',
    trace : 'on',
    }

  }





]

  

 
};
module.exports = config


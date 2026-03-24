// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { channel } from 'diagnostics_channel';
import { report } from 'process';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  timeout:31000,
  expect:{
    timeout:10000
  },
  retries:1,
  reporter:'html',
projects:[
  {
    name:'chromium',
    use: {
    browserName:'chromium',
    headless:false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  }
  },
  {
    name:'firefox',
    use: {
    browserName:'firefox',
    headless:false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  }
  },
  {
    name:'safari',
    use: {
    browserName:'webkit',
    headless:false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  }
  },
  {
    name:'edge',
    use: {
    browserName:'chromium',
    channel:'msedge',
    headless:false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  }
  }
  


]
  ,

  /* Configure projects for major browsers */
  
});
module.exports=config;


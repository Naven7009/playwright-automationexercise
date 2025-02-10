import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  grep: /@regression/,
  testDir: './src/tests',
  fullyParallel: true,
  retries: 0,
  workers: 4,
  reporter: [
    ['list'], 
    ['allure-playwright']
  ],

  use: {
    trace: 'on',
    headless: true,
    viewport: null, // Ensures the browser starts with the default screen size
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--start-fullscreen'], // Opens browser in fullscreen mode
        },
        
      },
    },
  ],
});

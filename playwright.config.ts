import { PlaywrightTestConfig, devices } from '@playwright/experimental-ct-vue';

const config: PlaywrightTestConfig = {
  testDir: '.',
  testMatch: /.*\.comp\.ts/,
  forbidOnly: false,
  retries: 2,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        channel: 'chrome',
        ...devices['Desktop Chrome']
      },
    },
  ],
};

export default config;

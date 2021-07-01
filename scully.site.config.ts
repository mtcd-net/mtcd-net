import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  puppeteerLaunchOptions: { executablePath: 'chromium' },
  projectRoot: './apps/site/src',
  projectName: 'site',
  outDir: './dist/static',
  routes: {},
};

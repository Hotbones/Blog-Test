const { PlaywrightTestEnvironment } = require('jest-playwright-preset/lib/PlaywrightTestEnvironment');

module.exports = async () => {
  // Configura jest-axe para Playwright
    expect.extend(require('jest-axe/extend-expect'));
    const environment = new PlaywrightTestEnvironment();
    await environment.setup();
    await environment.teardown();
};

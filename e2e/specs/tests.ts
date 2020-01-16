import assert from 'assert';
import TestsPageObject from './tests.po';

describe('Main page e2e tests', () => {
  let page: TestsPageObject;

  beforeAll(async () => {
    page = new TestsPageObject();
    await page.navigateToHome();
  });

  it('should print alert box with correct last and first name', async () => {
    const paragraph: WebdriverIOAsync.Element = await $('header p');

    expect(await paragraph.getText()).toEqual('Edit src/App.tsx and save to reload.');

    const link: WebdriverIOAsync.Element = await $('a=Learn React');
    await expectAsync(link.isExisting()).toBeResolvedTo(true);

    assert.equal(1, 1);
  });

  it('shall navigate to ReactJS homepage on link click', async () => {
    const link = await $('a=Learn React');
    await link.click();

    await browser.waitUntil(() => browser.getUrl().then(url => url.includes('reactjs.org')));

    expect(await browser.getUrl()).toContain('reactjs.org');

    await page.navigateToHome();
  });
});

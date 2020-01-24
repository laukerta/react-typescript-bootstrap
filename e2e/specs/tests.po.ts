export default class TestsPageObject {
  async navigateToHome(): Promise<void> {
    await browser.navigateTo('http://localhost:3000');
  }
}

export default class TestsPageObject {
  async navigateToHome() {
    await browser.navigateTo('http://localhost:3000');
  }
}

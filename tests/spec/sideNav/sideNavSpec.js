describe("Expandable SideNav", function () {
  beforeEach(function() {
    loadFixtures('sideNav/sideNavFixture.html');
  });

  describe("Select", function () {
    var browserSelect, expDemoButton, sideNav;

    beforeEach(function() {
      browserSelect = $('select.normal');
    });

    it("should open sidenav and see icons", function (done) {
      expDemoButton = browserSelect.find('[id="expandable-sidenav-demo"]');
      sideNav = browserSelect.find('ul.slide-out-expandable');

      expect(sideNav).toBeHidden('Should be hidden before sidenav is expanded');

      expDemoButton.click();

      expect(sideNav).toBeVisible('Should be visible after sidenav is expanded');
    })
  });
}

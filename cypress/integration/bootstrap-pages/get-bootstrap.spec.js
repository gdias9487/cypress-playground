describe("Get Bootstrap Testing", function () {
  it("Accessing Get Bootstrap", function () {
    cy.log("Accessing home");
    cy.visit("https://getbootstrap.com");
  });

  it("Acessing the documentation", function () {
    cy.contains("Docs").click();
    cy.url().should("include", "/docs/");
  });

  it("Search Browsers and devices", function () {
    cy.get(".DocSearch").type("Browsers and devices");
    cy.get("#docsearch-item-0").click();
    cy.url().should("include", "/browsers-devices/");
  });

  it("Search Browsers and devices", function () {
    cy.get(".DocSearch").type("Browsers and devices");
    cy.get("#docsearch-item-0").click();
    cy.url().should("include", "/browsers-devices/");
  });

  it("Acessing the Examples", function () {
    cy.contains("Examples").click();
    cy.url().should("include", "/examples/");
  });

  it("Checking the Modals example", function () {
    cy.contains("Modals").click();
    cy.url().should("include", "/modals/");
    cy.go("back");
    cy.scrollTo("top");
  });

  it("Acessing the documentation", function () {
    cy.contains("Docs").click();
    cy.url().should("include", "/docs/");
  });

  it("Accessing Options documentation", function () {
    cy.contains("Options").click();
    cy.url().should("include", "/options/");
    cy.scrollTo("bottom");
    cy.scrollTo("top");
  });

  it("Navigating back to home", function () {
    cy.get(".my-1").click();
    cy.url().should("eq", "https://getbootstrap.com/");
  });

  it("Checking Bootstrap available versions", function () {
    cy.get("#bd-versions").click();
    cy.get("ul.dropdown-menu")
      .children()
      .each(($el, index, $list) => {
        if ($el.text().includes("All versions")) {
          cy.get($el).click();
        }
      });
  });
});

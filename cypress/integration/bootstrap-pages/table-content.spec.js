describe("Table content", function () {
  const tableLocator = ".table-options";
  before("Acessing Options documentation", function () {
    cy.visit("https://getbootstrap.com/docs/5.2/customize/options/");
  });

  it("Printing Options table per column", function () {
    cy.log("Variable");
    cy.get(".table-options")
      .get("td:nth-child(1)")
      .each(($el) => cy.log($el.text()));

    cy.log("Values");
    cy.get(".table-options")
      .get("td:nth-child(2)")
      .each(($el) => cy.log($el.text()));

    cy.log("Description");
    cy.get(".table-options")
      .get("td:nth-child(3)")
      .each(($el) => cy.log($el.text()));
  });
  
  it("Printing Option table per row", function () {
    cy.get(tableLocator)
      .get("tr")
      .each(($el) => {
        cy.log($el.text());
      });
  });
});

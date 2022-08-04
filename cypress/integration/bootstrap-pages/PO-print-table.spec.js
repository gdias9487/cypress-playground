import { Table } from "../../support/PO-show-table-content"


describe("Common Action PoC", function () {
  const table = new Table();
  before("Accessing the webpage", function () {
    cy.visit("https://getbootstrap.com/docs/5.2/layout/breakpoints/");
  });

  it("Printing table information", function () {
    table.showTableContent(".table-responsive");
  });
});

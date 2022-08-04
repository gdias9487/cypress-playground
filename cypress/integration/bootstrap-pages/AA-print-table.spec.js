import {
  showColumnsContent,
  showRowsContent,
} from "../../support/table-Utils/table-utils-commonActions";

describe('Printing a table content', () => {
  const tableLocator = ".table-responsive"
  before("Accessing Get Bootstrap", () => {
    cy.visit("https://getbootstrap.com/");
  });
  
  it("Teste", () => {
    cy.window().then((win) => {
      win.location.replace(
        "https://getbootstrap.com/docs/5.2/layout/breakpoints/"
      );
    });
    showRowsContent(tableLocator);
    showColumnsContent(tableLocator);
  });
})

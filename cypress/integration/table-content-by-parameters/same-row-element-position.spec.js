import { TableUtils } from "../../support/table-Utils/table-utils-commonActions";

const tableUtils = new TableUtils();

describe("Getting same row element position", () => {
  const tableLocator = "#AuthorsTable > .table-responsive";

  beforeEach("Acessing the table page", () => {
    cy.visit("https://chandanachaitanya.github.io/selenium-practice-site/");
  });

  it("Getting same row element position", () => {
    tableUtils.getRowContentBySpecificColumn(tableLocator, "Dan Brown", 3);
    tableUtils.getRowContentBySpecificColumn(tableLocator, "William", 1);
    tableUtils.getRowContentBySpecificColumn(tableLocator, "Harry Potter", 0);
  });
});

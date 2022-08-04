export class Table {
  showTableContent(table_info) {
    const table = cy.get(table_info);
    // Rows
    table.find("tr").each(($row, index, $list) => {
      cy.log($row.text());
    });
    //Columns
    table.find("td").each(($col, index, $list) => {
      cy.log($col.text());
    });
  }
}

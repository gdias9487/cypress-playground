export class TableUtils {
  iterateRowsContent(table_info) {
    const table = cy.get(table_info);
    return table.find("tr").each(($row) => {
      cy.log($row.text());
    });
  }

  iterateColumnsContent(table_info) {
    const table = cy.get(table_info);
    return table.find("td").each(($row) => {
      cy.log($row.text());
    });
  }

  getCellContentByDirectPosition(table_info, row, column) {
    const table = cy.get(table_info);
    if (row !== 0) {
      return table
        .find("tr")
        .eq(row)
        .find("td")
        .eq(column)
        .each(($value) => cy.log($value.text()));
    } else {
      return cy.log("Insert a row number greater than 0.");
    }
  }

  getRowContentBySpecificColumn(table_info, data, columnNumber) {
    const table = cy.get(table_info);
    return table.find("tr").each(($value, $index) => {
      if ($value.text().includes(data)) {
        this.getCellContentByDirectPosition(table_info, $index, columnNumber);
      }
    });
  }

  getCellContentBySpecificRowAndColumn(table_info, data, columnDataToGet) {
    return cy.get(table_info + " > thead >tr > th").each(($value, index) => {
      const valueText = $value.text();
      if (valueText.includes(columnDataToGet)) {
        this.getRowContentBySpecificColumn(table_info, data, index);
      }
    });
  }
}

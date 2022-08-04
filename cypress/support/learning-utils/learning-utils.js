export class LearningUtils {
  greaterThanZero(value) {
    if (value < 0) {
      return false;
    }
    return true;
  }

  checkElementContainVisibility(elementLocator, elementContain) {
    return cy.get(elementLocator).contains(elementContain).should("be.visible");
  }

  getElementContain(elementLocator, elementContain) {
    return cy.get(elementLocator).contains(elementContain);
  }

  urlShouldIncludes(content) {
    return cy.url().should("includes", content);
  }

  checkColumnValue(tableLocator, columnType) {
    return cy
      .get(tableLocator)
      .get(columnType)
      .each(($value) => {
        var convertedValue = parseFloat($value.text());
        if (
          convertedValue !== NaN &&
          this.greaterThanZero(convertedValue)
        ) {
          cy.log(`${$value.text()} is a valid value.`);
        } else {
          throw new Error(`${$value.text()} is not a valid value.`);
        }
      });
  }
}

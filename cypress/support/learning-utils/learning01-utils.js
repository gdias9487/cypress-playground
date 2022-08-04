import { LearningUtils } from "./learning-utils";

const learningUtils = new LearningUtils();

export class Learning01Utils {
  openHardwareMenu() {
    const drawerMenuLocator = '[data-testid="drawerButton"]';
    const iconCategoriesLocator = ".IconCategories";
    const itemCategoryLocator = ".itemCategoriaMenu";

    cy.get(drawerMenuLocator).click();
    cy.get(iconCategoriesLocator).should("be.visible").click();

    return learningUtils
      .checkElementContainVisibility(itemCategoryLocator, "Hardware")
      .click();
  }

  searchCategory(...args) {
    //This function receives n category name arguments.
    //Ex. If I want to navigate to AMD Processors, just need to call Learning01Utils.searchCategory('Processadores', 'Processador AMD').
    args.forEach(($category) => {
      cy.contains($category).click();
      cy.wait(500); //Wait 0.5 sec to the element
    });
  }

  sortBy(sort) {
    const sortByListLocator = ".kPOYhe";

    cy.get(sortByListLocator).select(sort);
  }

  selectTheNProduct(n) {
    const productCardLocator = ".imageCard";

    cy.get(`${productCardLocator}`).each(($value, index) => {
      var title = $value.attr("title");
      if (index === n) {
        cy.contains(title).should("be.visible").click();
      }
    });
  }

  addToCart() {
    return cy.contains("COMPRAR").click();
  }

  keepBuying() {
    return cy.contains("CONTINUAR COMPRANDO").click();
  }

  ramMemorySpecifications(frequency, memory, compatibility) {
    const filterOptionLocator = ".filterOption";

    cy.get(".filterExpand").click({ multiple: true });
    learningUtils.getElementContain(filterOptionLocator, frequency).click();
    learningUtils.getElementContain(filterOptionLocator, memory).click();
    learningUtils.getElementContain(filterOptionLocator, compatibility).click();
  }

  processorSpecifications(generation, line) {
    const filterOptionLocator = ".filterOption";
    const categoryListLocator = "#blocoCategoriasListagem";

    cy.get(".filterExpand").click({ multiple: true });
    learningUtils.getElementContain(filterOptionLocator, generation).click();
    learningUtils.getElementContain(categoryListLocator, line).click();
  }

  ssdSpecifications(speed) {
    const filterOptionLocator = ".filterOption";

    cy.get(".filterExpand").click({ multiple: true });
    learningUtils.getElementContain(filterOptionLocator, speed).click();
  }

  moboSpecifications(socket, chipset, size) {
    const filterOptionLocator = ".filterOption";

    cy.get(".filterExpand").click({ multiple: true });

    learningUtils.getElementContain(filterOptionLocator, socket).click();
    learningUtils.getElementContain(filterOptionLocator, chipset).click();
    learningUtils.getElementContain(filterOptionLocator, size).click();
  }

  openCart() {
    const iconCartLocator = ".IconHeaderCart";
    return cy.get(iconCartLocator).click();
  }

  checkIfCartIsEmpty() {
    return cy.contains("O seu carrinho está vazio.").should("not.exist");
  }
}
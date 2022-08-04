import { LearningUtils } from "../../../support/learning-utils/learning-utils";

const learningUtils = new LearningUtils();

describe('(learning02) Checking the functionality of "Portal da Transparência/Página Institucional" button', () => {
  const infoCardLocator = ".accordion-heading";
  const buttonLocator = ".btn.btn-default";
  const transparencyPortalButton = "Portal da Transparência";
  const institutionalPageButton = "Página Institucional";
  const senatorsName = "Dário Berger";
  const valueTableLocator = ".table.table-striped > .sr-only";
  const valuesColumn = "tr td.valor"
  const institutionalPageCards = [
    "Chapa",
    "Mandatos e Exercícios no Senado Federal",
    "Participação Atual em Comissões",
    "Missões",
    "Biografia",
    "Produção Bibliográfica",
  ];
  const transparencyPortalCards = [
    "Cotas para Exercício da Atividade Parlamentar",
    "Gastos não inclusos nas Cotas para Exercício da Atividade Parlamentar",
    "Benefícios",
    "Pessoal",
    "Subsídios e Aposentadoria",
  ];

  beforeEach("Accessing the Senado Federal website", () => {
    cy.visit("https://www12.senado.leg.br/hpsenado");
  });

  it("Navigate and check functionality", () => {
    cy.contains("Menu").click();
    cy.get(".sidebar.is-open").should("be.visible");
    cy.get(".sidebar-toggle").contains("Senadores").click();
    cy.get(".sidebar-leaf").contains("Senadores em Exercício").click();
    cy.url().should("includes", "/senadores/em-exercicio");

    cy.contains("Por nome").click();
    cy.contains(senatorsName).click();
    cy.url().should("includes", "/perfil/");

    cy.log("Checking Institutional Page information cards");
    institutionalPageCards.forEach(($value) =>
      learningUtils.checkElementContainVisibility(infoCardLocator, $value)
    );

    cy.get(buttonLocator).contains(transparencyPortalButton).click();
    learningUtils.checkElementContainVisibility(
      buttonLocator,
      institutionalPageButton
    );

    cy.log("Checking Transparency Portal information cards");
    transparencyPortalCards.forEach(($value) =>
      learningUtils.checkElementContainVisibility(infoCardLocator, $value)
    );

    learningUtils.checkColumnValue(valueTableLocator, valuesColumn)

    cy.get(buttonLocator).contains(institutionalPageButton).click();
    learningUtils.checkElementContainVisibility(
      buttonLocator,
      transparencyPortalButton
    );

    cy.log("Checking Institutional Page information cards");
    institutionalPageCards.forEach(($value) =>
      learningUtils.checkElementContainVisibility(infoCardLocator, $value)
    );

    cy.log("The button functionality and the values are the expected.");
  });
});

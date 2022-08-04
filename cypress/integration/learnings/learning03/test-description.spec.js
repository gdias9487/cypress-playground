import { LearningUtils } from "../../../support/learning-utils/learning-utils";

const learningUtils = new LearningUtils();

describe('Check the filter of public expenditure budget on "gov.br"', () => {

    beforeEach('Accessing gov.br website', () => {
        cy.visit('https://www.gov.br/economia/pt-br')
    })

    it('Navigating and testing the filter', () => {
        cy.get('.ico-navegacao').click()
        cy.get('[aria-label="Menu Principal"]').should('be.visible')

        learningUtils.getElementContain('.plain', 'Acesso à Informação').click()
        learningUtils.urlShouldIncludes('/acesso-a-informacao')

        learningUtils.getElementContain('.titulo', 'Receitas e Despesas').click()
        learningUtils.urlShouldIncludes('/receitas-e-despesas')

        learningUtils.getElementContain('.external-link', 'Orçamento da despesa pública').click()
        learningUtils.urlShouldIncludes('/despesas/')
    })
})

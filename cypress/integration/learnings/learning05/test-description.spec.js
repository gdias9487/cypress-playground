import { LearningUtils } from "../../../support/learning-utils/learning-utils";

const learningUtils = new LearningUtils();

describe('Check the exclusive news on valor.globo.com', () => {

     beforeEach('Visiting valor.globo.com', () => {
        cy.visit('valor.globo.com')
     })

     it('Checking if the exclusive and non-exclusive news are working properly', () => {
        cy.get('body')
     })
})
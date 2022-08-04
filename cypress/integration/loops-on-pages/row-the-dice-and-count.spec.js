import { LoopsUtils } from "../../support/loops-Utils/loops-utils";

const loopsUtils = new LoopsUtils()

describe('Row dice and count', () => {

    const countRolls = 10
    const pickedNumber = 3
    const countShow = 2
    
    beforeEach('Accessing the row dice web page', () => {
        cy.visit('https://www.random.org/dice/')
    })

    it('Row dice and count', () => {
        loopsUtils.rollDice(countRolls, pickedNumber, countShow)
        
    })
})
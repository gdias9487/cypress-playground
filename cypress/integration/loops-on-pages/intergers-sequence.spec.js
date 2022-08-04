import {LoopsUtils} from "../../support/loops-Utils/loops-utils"

const loopsUtils = new LoopsUtils()

describe("Intergers sequence", () => {

    const loopLimit = 10

    beforeEach("Accessing the page", () => {
        cy.visit("https://www.random.org/integers/")
    })

    it("Intergers sequence", () => {
        loopsUtils.intergersSequence(loopLimit)
        
    })
})
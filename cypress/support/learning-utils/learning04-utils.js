import { LearningUtils } from "./learning-utils";

const learningUtils = new LearningUtils();

export class Learning04Utils {
  fillSignUpFields(memberSignUpInfoObject) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const splitBirthDate = memberSignUpInfoObject["birthDate"].split("/");
    const birthDay = splitBirthDate[0],
      birthYear = splitBirthDate[2];
    const birthMonth = months[parseInt(splitBirthDate[1]) - 1];

    cy.get("body").then(() => {
      if (memberSignUpInfoObject["gender"] === "Mr") {
        cy.get("#id_gender1").click();
      } else {
        cy.get("#id_gender2").click();
      }
    });

    cy.get("#customer_firstname").type(memberSignUpInfoObject["firstName"]);
    cy.get("#customer_lastname").type(memberSignUpInfoObject["lastName"]);
    cy.get("#passwd").type(memberSignUpInfoObject["password"]);

    cy.get("#days").select(birthDay);
    cy.get("#months").select(birthMonth);
    cy.get("#years").select(birthYear);

    cy.get("#firstname").type(memberSignUpInfoObject["addressFirstName"]);
    cy.get("#lastname").type(memberSignUpInfoObject["addressLastName"]);
    cy.get("#company").type(memberSignUpInfoObject["company"]);
    cy.get("#address1").type(memberSignUpInfoObject["address"]);
    cy.get("#address2").type(memberSignUpInfoObject["addressLine2"]);
    cy.get("#city").type(memberSignUpInfoObject["city"]);
    cy.get("#id_state").select(memberSignUpInfoObject["state"]);
    cy.get("#postcode").type(memberSignUpInfoObject["postalCode"]);
    cy.get("#id_country").select(memberSignUpInfoObject["country"]);
    cy.get("#other").type(memberSignUpInfoObject["additionalInfo"]);
    cy.get("#phone").type(memberSignUpInfoObject["homePhone"]);
    cy.get("#phone_mobile").type(memberSignUpInfoObject["mobilePhone"]);
    cy.get("#alias").type(memberSignUpInfoObject["referenceAddress"]);

    return cy.get("#submitAccount").click();
  }

  fillSignInFields(memberSignUpInfoObject) {
    cy.get("#email").type(memberSignUpInfoObject["email"]);
    cy.get("#passwd").type(memberSignUpInfoObject["password"]);

    return cy.get("#SubmitLogin").click();
  }
}

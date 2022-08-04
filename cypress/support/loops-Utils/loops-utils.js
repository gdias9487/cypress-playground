export class LoopsUtils {
  sequenceFinder(intergerLocator, loop_limit) {
    var loop_limit = loop_limit;

    cy.get(intergerLocator).then(($value) => {
      var sequenceCount = 0;
      const raw_numbers = $value.text();
      const splitted_numbers = raw_numbers.split("\n");

      if (loop_limit !== 0) {
        if (
          this.sequenceBetweenTwoNumbers(
            splitted_numbers[0],
            splitted_numbers[1]
          )
        ) {
          loop_limit--;
          cy.log(`Counts remaining: ${loop_limit}`);
          sequenceCount++;
        } else {
          cy.contains("Again!").click();
          loop_limit--;
          cy.log(`Counts remaining: ${loop_limit}`);
          this.sequenceFinder(intergerLocator, loop_limit);
        }
      } else {
        cy.get("body").then(() => {
          if (sequenceCount > 0) {
            expect(true).to.eq(true);
          } else {
            throw new Error("No sequence was shown");
          }
        });
      }
    });
  }

  intergersSequence(loop_limit) {
    cy.get('input[name="num"]').clear().type("2");

    cy.get('input[name="max"]').clear().type("15");

    cy.get('input[name="col"]').clear().type("1");

    cy.contains("Get Numbers").click();

    this.sequenceFinder(".data", loop_limit);
  }

  sequenceBetweenTwoNumbers(a, b) {
    if (parseInt(a) + 1 === parseInt(b)) {
      return true;
    } else {
      return false;
    }
  }

  coinCheck(loop_limit, coins_num, coin_face) {
    var loop_limit = loop_limit;

    cy.get("body").then(() => {
      if (loop_limit > 0) {
        var coins_count = coins_num;

        cy.get('[type="submit"]').contains("Flip").click();
        cy.get(":nth-child(9)")
          .get("img")
          .each(($value) => {
            if ($value.attr("title") === coin_face) {
              coins_count--;
            }
          });

        cy.get("body").then(() => {
          if (coins_count === 0) {
            expect(coin_face).to.eq(coin_face);
            loop_limit = 0;
          } else {
            cy.log(`There's ${coins_count} ${coin_face} coin left`);
            loop_limit--;
            this.coinCheck(loop_limit, coins_num, coin_face);
          }
        });
      } else {
        throw new Error(
          "The coins face are not the requested. Please, try again."
        );
      }
    });
  }

  coinFlip(loop_limit, coins_num, currency, coin_face) {
    cy.get('[name="num"]').select(`${coins_num}`);
    cy.get('[name="cur"]').select(`${currency}`);
    this.coinCheck(loop_limit, coins_num, coin_face);

  }

  rollDiceCheck(countRolls, pickedNumber, countShow) {
    var countRolls = countRolls;

    cy.get('[type="submit"]').contains("Roll").click();
    cy.get("img").then(($value) => {
      var auxCountShow = countShow;

      if ($value.attr("alt") === pickedNumber.toString()) {
        cy.log($value.attr("alt"));
        auxCountShow--;
      }

      if (auxCountShow == 0) {
        expect(true).to.eq(true);
        cy.log(`The number ${pickedNumber} was shown how much was requested`);
      } else {
        countRolls--;
        cy.log(`Counts remaining: ${countRolls}`);
        if (countRolls > 0) {
          this.rollDiceCheck(countRolls, pickedNumber, auxCountShow);
        } else {
          cy.get("body").then(() => {
            if (auxCountShow !== 0) {
              throw new Error(
                "The number was not shown enough, please try again!"
              );
            }
          });
        }
      }
    });
  }

  rollDice(countRolls, pickedNumber, countShow) {
    if (countRolls < countShow) {
      throw new Error(
        "Wrong data! Rolls count should be greater than Show count."
      );
    } else {
      cy.get('[name="num"]').select("1");
      this.rollDiceCheck(countRolls, pickedNumber, countShow);
    }
  }
}

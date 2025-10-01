export function proceedToCheckout(firstName, lastName, postalCode) {
  // Clica no carrinho
  cy.get('.shopping_cart_link').click();

  // Clica em "Checkout"
  cy.get('[data-test="checkout"]').click();

  // Preenche os dados do comprador
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);

  // Clica em "Continue"
  cy.get('[data-test="continue"]').click();

  // Finaliza compra
  cy.get('[data-test="finish"]').click();
}

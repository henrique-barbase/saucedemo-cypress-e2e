import { loginAction } from './actions/login';
import { addProductToCart } from './actions/cart';
import { proceedToCheckout } from './actions/checkout';

Cypress.Commands.add('login', (userType) => {
  cy.fixture('login-data').then((data) => {
    const user = data[userType];
    loginAction(user.username, user.password);
  });
});

Cypress.Commands.add('addToCart', (productName) => {
  addProductToCart(productName);
});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
  proceedToCheckout(firstName, lastName, postalCode);
});
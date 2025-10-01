export function addProductToCart(productName) {
  // Seleciona o produto pelo nome e clica em "Add to cart"
  cy.contains('.inventory_item', productName)
    .find('button')
    .click();
}

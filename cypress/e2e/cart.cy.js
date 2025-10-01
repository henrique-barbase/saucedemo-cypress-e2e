describe('Carrinho no Sauce Demo', () => {

  beforeEach(() => {
    // Loga antes de cada teste
    cy.login('valid');
    cy.url().should('include', '/inventory.html');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    const productName = 'Sauce Labs Backpack';

    cy.addToCart(productName);

    // Verifica se o badge do carrinho está visível e com o número correto
    cy.get('.shopping_cart_badge').should('contain.text', '1');

    // Opcional: verifica se o produto aparece no carrinho
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('contain.text', productName);
  });

});

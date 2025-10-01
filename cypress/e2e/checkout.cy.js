describe('Checkout', () => {
  beforeEach(() => {
    // Faz login antes de cada teste
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('Deve adicionar um produto ao carrinho e finalizar a compra', () => {
    // Adicionar produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    // Ir para checkout
    cy.get('[data-test="checkout"]').click();

    // Preencher informações do checkout
    cy.get('[data-test="firstName"]').type('Henrique');
    cy.get('[data-test="lastName"]').type('Sousa');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Finalizar compra
    cy.get('[data-test="finish"]').click();

    // Verificar mensagem de confirmação de pedido de forma robusta
    cy.get('.complete-header')
      .should('be.visible')
      .and('contain.text', 'Thank you for your order'); // sem se preocupar com maiúsculas ou pontuação final
  });
});

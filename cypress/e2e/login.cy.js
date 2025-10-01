describe('Login no Sauce Demo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Deve logar com credenciais válidas', () => {
    cy.login('valid');
    cy.url().should('include', '/inventory.html');
  });

  it('Deve exibir erro com credenciais inválidas', () => {
    cy.login('invalid');

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

});

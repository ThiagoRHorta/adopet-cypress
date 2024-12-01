describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
    cy.cadastrar('Thiago Rodrigues Horta', 'thiagorhorta5@email.com', 'Senha123', 'Senha123')
    cy.get('[data-test="submit-button"]').click();
  })
})


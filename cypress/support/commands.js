Cypress.Commands.add('NomeDoMeuComandoCustomizado', () => {
    cy.get('input[name="firstName"][type="text"]').type('Dom ')
    cy.get('input[name="lastName"][type="text"]').type('Picone')
    cy.get('input[name="email"][type="email"]').type('dompicone@gmail.com.br')
    cy.get('textarea[name="open-text-area"]').type('Jessica Vagabunda Jessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica Vagabunda',{delay: 0})
    cy.get('button[type="submit"]').click()
    cy.get('span[class="success"]').should('be.visible') 
})
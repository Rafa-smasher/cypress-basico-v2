describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
        cy.visit('src/index.html')
  })
  it('Verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('Preenche os campos e envia o formulário', () => {
    cy.get('input[name="firstName"][type="text"]').type('Dom ')
    cy.get('input[name="lastName"][type="text"]').type('Picone')
    cy.get('input[name="email"][type="email"]').type('dompicone@gmail.com.br')
    cy.get('textarea[name="open-text-area"]').type('Jessica Vagabunda Jessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica Vagabunda', { delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get('span[class="success"]').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('input[name="firstName"][type="text"]').type('Dom ')
    cy.get('input[name="lastName"][type="text"]').type('Picone')
    cy.get('input[name="email"][type="email"]').type('dompicone2gmail.com.br')
    cy.get('textarea[name="open-text-area"]').type('Jessica Vagabunda Jessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica VagabundaJessica Vagabunda', { delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get('span[class="error"]').should('be.visible')
  })
  it('Validar que o telefone só aceita números', () => {
    cy.get('input[type="number"][name="phone"]').type('ABSLDKOPASKDPOAKSDPOKASOPKD').should('have.text', '')
  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('input[id="phone-checkbox"]').check()
    cy.get('button[type="submit"]').click()
    cy.get('span[class="error"]').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').click()
    cy.get('span[class="error"]').should('be.visible')
  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('input[name="firstName"][type="text"]').type('Dom').should('have.value', 'Dom').clear().should('have.value', '')
    cy.get('input[name="lastName"][type="text"]').type('Picone').should('have.value', 'Picone').clear().should('have.value', '')
    cy.get('input[name="email"][type="email"]').type('dompicone@gmail.com.br').should('have.value', 'dompicone@gmail.com.br').clear().should('have.value', '')
    cy.get('textarea[name="open-text-area"]').type('Jessica Vagabunda').should('have.value', 'Jessica Vagabunda').clear().should('have.value', '')
  })
  it('envia um formulario com sucesso usando um comando customizado', () => {
    cy.NomeDoMeuComandoCustomizado()
    cy.get('span[class="success"]').should('be.visible')
  })
  it('Usando o cy.contains', () => {
    cy.contains('button', 'Enviar').click()
    cy.get('span[class="error"]').should('be.visible')
  })
  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('select[id="product"]').select('YouTube').should('have.value', 'youtube')
  })
  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('select[id="product"]').select('mentoria').should('have.value', 'mentoria')
  })
  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('select[id="product"]').select(1).should('have.value', 'blog')
  })
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[value="feedback"]').check().should('have.value', 'feedback')
  })
  it('marca cada tipo de atendimento', () => {
    cy.get('input[value="ajuda"]').check().should('be.checked')
    cy.get('input[value="elogio"]').check().should('be.checked')
    cy.get('input[value="feedback"]').check().should('be.checked')
  })
  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]').should('have.length', 3)
      .each(function ($radio) {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
  })
  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]').check().should('be.checked')
    cy.get('input[type="checkbox"][name="phone"]').uncheck().should('not.be.checked')
  })
  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]').selectFile('./cypress/fixtures/Teste de Categorização de Ofertas + API.docx')
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('Teste de Categorização de Ofertas + API.docx')
      })
  })
  it('selecina um aquivo simulando um drag and drop', () => {
    cy.get('input[type="file"]').selectFile('./cypress/fixtures/Teste de Categorização de Ofertas + API.docx', { action: 'drag-drop' })
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('Teste de Categorização de Ofertas + API.docx')
      })
  })
  it('seleciona um aquivo utilizando uma fixture para qual foi dada um alias', () => {
    cy.fixture('Teste de Categorização de Ofertas + API.docx').as('arquivoupload')
    cy.get('input[type="file"]').selectFile('@arquivoupload')
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('Teste de Categorização de Ofertas + API.docx')
      })
  })
  it('verifica que a politica de privacidade abre em outra aba sem a necessidadede de um clique', () => {
    cy.get('a[target="_blank"]').should('have.attr', 'target', '_blank')
  })
  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('a[target="_blank"]').invoke('removeAttr', 'target')
    cy.get('a[href="privacy.html"]').click()
    cy.contains('Talking About Testing').should('be.visible')
  })
})
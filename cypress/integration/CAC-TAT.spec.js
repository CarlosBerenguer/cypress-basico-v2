/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
  
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        
        const longText = "Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test,Test"
        //inputs
        cy.get('#firstName').type('Carlos Henrique')
        cy.get('#lastName').type('Farneze Berenguer')
        cy.get('#email').type('carlos_berenguer@qat.com')
        cy.get('#phone').type('(34)988100491')        
        
        //Radio
        cy.get('input[value=ajuda]').click()
        
        //Checkboxes
        cy.get('#phone-checkbox').click()
        cy.get('#email-checkbox').click()
        
        //TextAreas
        cy.get('#open-text-area').type(longText, {delay:0})
        
        //Button
        cy.contains('button', 'Enviar').click()
        
        //Success Message
        cy.get('.success').should('be.visible')
        
    })

    it("exibe mensagem de erro ao submeter o formulário com um email com formatação", function() {
         //inputs
         cy.get('#firstName').type('Carlos Henrique')
         cy.get('#lastName').type('Farneze Berenguer')
         cy.get('#email').type('carlos_berenguerqat.com')
         cy.get('#phone').type('(34)988100491')  
         cy.get('#open-text-area').type("Text", {delay:0})

         //Button
        cy.contains('button', 'Enviar').click()
        
        //Error Message
        cy.get('.error').should('be.visible')
    })
    
    it("campo telefone continua vazio quando preenchido com valor não-numérico", function() {
        //inputs
        cy.get('#phone').type('aushdaiushdaisuhdai').should('have.value', '')

        //Button
       cy.contains('button', 'Enviar').click()
       
   })
   it("preenche e limpa dados cadastrais dos campos", function() {
    
        //inputs
        cy.get('#firstName').type('Carlos Henrique').should('have.value', 'Carlos Henrique').clear().should('have.value', '')
        cy.get('#lastName').type('Farneze Berenguer').should('have.value','Farneze Berenguer').clear().should('have.value','')
        cy.get('#email').type('carlos_berenguerqat.com').should('have.value','carlos_berenguerqat.com').clear().should('have.value','')
        cy.get('#phone').type('(34)988100491').should('have.value','34988100491').clear().should('have.value','')
        cy.get('#open-text-area').type("Text", {delay:0}).should('have.value','Text').clear().should('have.value','')

        //Button
        cy.contains('button', 'Enviar').click()
    })
    it("envia formulário com sucesso usand um comando customizado", function() {
    
        cy.fillMandatoryFieldsAndSubmit()
    })

    it("seleciona um produto (YouTube) por seu texto", function() {
    
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })

    it("seleciona um produto (Mentoria) por seu valor (value)", function() {
    
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })
    it("seleciona um produto (Blog) por seu índice", function() {
    
        cy.get('#product').select(1).should('have.value', 'blog')
    })
})


import testeElements from '../elements/teste.elements'

class TestePage {
    realizarLogin() {
        cy.viewport(1294, 636)
        cy.visit('https://wejump-automation-test.github.io/qa-test/')
        cy.wait(3000)
    }

    clicarBotoes() {
        cy.get(testeElements.btnOne()).click()
        cy.get(testeElements.btnTwo()).click()
        cy.get(testeElements.btnThree()).click()
    }

    verificarAusenciaBotoes() {
        cy.get(testeElements.btnOne()).should('not.exist')
        cy.get(testeElements.btnTwo()).should('not.exist')
        cy.get(testeElements.btnThree()).should('not.exist')
    }

    clicarBotoesPagIframe() {
        cy.get('div[class="col-sm-12"]').first('button[id="btn_one"]').click()
        cy.get('div[class="col-sm-12"]').first('button[id="btn_two"]').click()
        cy.get('div[class="col-sm-12"]').first('button[id="btn_three"]').click()
    }

    verificarAusenciaBotoesPagIframe(){
        cy.get('div[class="col-sm-12"]').first('button[id="btn_one"]').should('not.exist')
        cy.get('div[class="col-sm-12"]').first('button[id="btn_two"]').should('not.exist')
        cy.get('div[class="col-sm-12"]').first('button[id="btn_three"]').should('not.exist')
    }

    preencerCampo(){
        cy.get(testeElements.inputFirstName()).type('diovana')
    }

    clicarBotaoOne(){
        cy.get(testeElements.btnOne()).click()
    }

    checarOpcaoOptionThree(){
        cy.get(testeElements.checkbox()).check()
    }

    selecionarOpcaoExampleTwo(){
        cy.get(testeElements.selectBox()).click
        cy.get('option').contains('ExampleTwo').click()
    }

    verificarPresencaImagem(){
        cy.get('[alt="selenium"]').should('be.visible')
    }
}

export default TestePage;

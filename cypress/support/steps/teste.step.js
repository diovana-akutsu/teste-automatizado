/* global Given, Then, When */

import TestePage from '../pageobjects/teste.page'
const testePage = new TestePage

beforeEach(() => {
	cy.restoreLocalStorage();
});

Given(/^que eu acesso a página$/, () => {
	testePage.realizarLogin()
});

afterEach(() => {
	cy.saveLocalStorage()
});

When(/^clico nos botões "([^"]*)", "([^"]*)" e "([^"]*)"$/, (args1,args2,args3) => {
	testePage.clicarBotoes()
});

Then(/^me retornar a ausência dos mesmos$/, () => {
	testePage.verificarAusenciaBotoes()
});

When(/^clico nos botões "([^"]*)", "([^"]*)" e "([^"]*)" da página IFRAME BUTTONS$/, (args1,args2,args3) => {
	testePage.clicarBotoesPagIframe()
});

Then(/^me retornar a ausência dos mesmos$/, () => {
	testePage.verificarAusenciaBotoesPagIframe()
});

When(/^preencho o campo "([^"]*)"$/, (args1) => {
	testePage.preencerCampo()
});

When(/^clico no botão "([^"]*)"$/, (args1) => {
	testePage.clicarBotaoOne()
});

When(/^clico na opção "([^"]*)"$/, (args1) => {
	testePage.checarOpcaoOptionThree()
});

When(/^seleciono a opção "([^"]*)"$/, (args1) => {
	testePage.selecionarOpcaoExampleTwo()
});

When(/^verifico a presença da imagem da logo do Selenium Webdriver$/, () => {
	testePage.verificarPresencaImagem()
});
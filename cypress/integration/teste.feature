Feature: Funcionamento Botões

    Scenario: Verificar ausência botões
        Given que eu acesso a página
        When clico nos botões "One", "Two" e "Four"
        Then me retornar a ausência dos mesmos

    Scenario: Verificar ausência botões da página IFRAME BUTTONS
        When clico nos botões "One", "Two" e "Four" da página IFRAME BUTTONS
        Then me retornar a ausência dos mesmos

    Scenario: Verificar imagem
        When preencho o campo "YourFirstName"
        And clico no botão "One"
        And clico na opção "OptionThree"
        And seleciono a opção "ExampleTwo"
        And verifico a presença da imagem da logo do Selenium Webdriver
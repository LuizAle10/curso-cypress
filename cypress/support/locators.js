


const locators = {
   LOGIN: {
       USER: '[data-test=email]',
       PASSWORD: '[data-test=passwd]',
       BTN_LOGIN: '.btn'
   }, 
   MENU: {
       SETTINGS: '[data-test=menu-settings]',
       CONTAS: '[href="/contas"]',
       RESET: '[href="/reset"]' //Esse sistema precisa de resetar os dados para não dar erro

   },
   CONTAS: {
       NOME: '[data-test=nome]',
       BTN_SALVAR: '.btn',
       XPATH_BTN_ALTERAR: "//table//td[contains(., 'Conta inserida Robô')]/..//i[@class= 'far fa-edit']"
   },
   MESSAGE: '.toast-message'
}

export default locators;
window.addEventListener("load", function () {
  alert("Assine os nossos termos de uso");
});

//Esse evento é disparado quando o usuário tenta fechar, atualizar ou navegar para outra página.
window.addEventListener("beforeunload", function (e) {
  e.returnValue = "Você tem alterações não salvas. Deseja realmente sair?";
});

// Definir returnValue em beforeunload exibe uma mensagem de confirmação. Embora muitos navegadores ignorem o texto personalizado, essa linha ainda aciona a confirmação de saída, alertando o usuário sobre possíveis perdas de dados.
//`returnValue` aparece riscado porque é considerado obsoleto nas especificações mais recentes do JavaScript e do DOM. No entanto, ele ainda funciona na maioria dos navegadores modernos por questões de compatibilidade. Apesar de estar riscado, `returnValue` ainda (15/11/2024) é o único meio disponível para acionar a caixa de confirmação padrão em eventos beforeunload.
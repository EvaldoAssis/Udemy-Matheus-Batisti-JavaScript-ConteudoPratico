window.addEventListener("scroll", function (e) {

  if (window.pageYOffset < 50) {
    console.log("Ativou 1 (pageYOffset)");
  } else if (window.scrollY > 50) {
    console.log("Ativou 2 (scrollY)");
  }

});

// O pageYOffset aparece riscado porque, em versões mais recentes do JavaScript, ele é considerado um método obsoleto em algumas ferramentas de desenvolvimento e editores como o VS Code. No entanto, ele ainda funciona na maioria dos navegadores. Essa marcação indica que ele pode ser removido ou alterado em futuras atualizações, sendo recomendável o uso de alternativas.
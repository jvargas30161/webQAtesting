// cypress/integration/acceso_web_spec.js

describe('Acceso a toolsqa', () => {
  it('debería cargar la página de inicio', () => {
    // Visita la página de inicio
    cy.visit('https://www.toolsqa.com/software-testing/istqb/istqb-certification/');

    // Ajusta el ancho de la ventana a 1200 pixels y la altura a 800 pixels (o el valor que desees)
    cy.viewport(1600, 920);

    // Obtiene el título de la página y lo compara con el título esperado
    cy.title().should('eq', 'ISTQB Certification - Foundation Level Exam - Course Structure & Format');


  });
});

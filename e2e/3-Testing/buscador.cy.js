// cypress/integration/acceso_web_spec.js

const tiempoEspera = 5000; // Tiempo de espera en milisegundos (en este caso, 5 segundos)

describe('Acceso a toolsqa', () => {
  it('debería cargar la página de inicio', () => {
    // Visita la página de inicio
    cy.visit('https://www.toolsqa.com/software-testing/istqb/istqb-certification/');


    // Ajusta el ancho de la ventana a 1200 pixels y la altura a 800 pixels (o el valor que desees)
    cy.viewport(1600, 920);

    // Obtiene el título de la página y lo compara con el título esperado
    cy.title().should('eq', 'ISTQB Certification - Foundation Level Exam - Course Structure & Format',
      { timeout: tiempoEspera });

    // click en logo 
    cy.get('.tools-qa-header__logo', { timeout: tiempoEspera })
      .click();


    // Acepta cookies 
    cy.get('#accept-cookie-policy', { timeout: tiempoEspera })
      .click();

    // Access tutorials
    cy.get('.navbar__tutorial-menu--menu-bars > :nth-child(2)', { timeout: tiempoEspera })
      .click();

    // qa practices
    cy.get('.first-generation > :nth-child(1) > :nth-child(1)', { timeout: tiempoEspera })
      .click()

    // Istqb preperation
    cy.get('ul.active > :nth-child(2) > a', { timeout: tiempoEspera })
      .click()

    //Validations tittle
    cy.get('.article-content > :nth-child(1) > em > strong').should('have.text', 'ISTQB Certified Tester - ISTQB Foundation Level Syllabus');

    // 0.ISTQB Introduction
    cy.get('.article-content > :nth-child(2) > a > em > strong', { timeout: tiempoEspera })
      .click();

    // access 0.1 Foundation Exam Format And Structure
    cy.get('.article-content > :nth-child(3) > :nth-child(1) > a > em > strong').click();

    // Hace scroll hacia abajo gradualmente
    for (let i = 0; i < 10; i++) {
      cy.scrollTo(0, i * 500); // Cambia el valor de '100' según sea necesario para ajustar la velocidad
      cy.wait(tiempoEspera); // Espera un tiempo antes de hacer el siguiente desplazamiento
    }

    // Hace scroll hacia el inicio de la página
    cy.scrollTo(0, 0);

    // Next lesson
    cy.get('.col-auto > .icon-next')
    .click();
    


















  });
});

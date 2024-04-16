describe('User Registration', () => {
  it('should register a new user', () => {

    cy.visit('https://rahulshettyacademy.com/client');
    cy.get('.btn1').click();

    cy.get('#firstName').type('Andrew');
    cy.get('#lastName').type('Smith');
    cy.get('#userEmail').type('andrew@example.com');
    cy.get('#userMobile').type('9876543210');
    cy.get('.custom-select').select('Engineer');
    cy.get('[type="radio"]').first().check();
    cy.get('#userPassword').type('Hello@123');
    cy.get('#confirmPassword').type('Hello@123');
    cy.get('[type="checkbox"]').check();
    cy.get('#login').click().should()
  });
});
describe('User Login', () => {
  it('should login', () => {

    cy.visit('https://rahulshettyacademy.com/client');
    cy.get('#userEmail').type('andrew@example.com');
    cy.get('#userPassword').type('Hello@123');
    cy.get('#login').click();
    cy.url().should('be.equal','https://rahulshettyacademy.com/client/dashboard/dash'); 

  });

  it('should login and logout successfully', () => {

    cy.visit('https://rahulshettyacademy.com/client');
    cy.get('#userEmail').type('andrew@example.com');
    cy.get('#userPassword').type('Hello@123');
    cy.get('#login').click();
    cy.url().should('be.equal','https://rahulshettyacademy.com/client/dashboard/dash'); 
    cy.get('[class="fa fa-sign-out"]').click()
    cy.url().should('be.equal', 'https://rahulshettyacademy.com/client/auth/login')
  });

  it('should login and order', () => {
  
    cy.visit('https://rahulshettyacademy.com/client');
    cy.get('#userEmail').type('andrew@example.com');
    cy.get('#userPassword').type('Hello@123');
    cy.get('#login').click();
    cy.get(':nth-child(3) > .card > .card-body > .w-10').click()
    cy.wait(1000)
    cy.get('[routerlink="/dashboard/cart"').click()
    cy.get('.subtotal > ul > :nth-child(3) > .btn').click()
    cy.get(':nth-child(2) > :nth-child(2) > .input').type('123')
    cy.get(':nth-child(3) > .field > .input').type('Andrew Smith')
    cy.get('[placeholder="Select Country"]').type('ind')
    cy.get(':nth-child(3) > .ng-star-inserted').each(($e1, index, $list) => {
    if($e1.text()===" India")
  {
      cy.wrap($e1).click()
  }
  });
  cy.get('.btnn').click();
  cy.get('.hero-primary').should('contain.text', ' Thankyou for the order. ');
});
});

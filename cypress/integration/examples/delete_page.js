/// <reference types="Cypress" />

describe('AEM Page Creation', function() 
{
    before(function(){
        cy.fixture('login').then(function(data)
        {  
            this.data=data
        })
  
      })

    it('AEM Page Creation', function() {
        cy.visit("https://author-cq-test1.navitas.bpglobal.com/sites.html/content/bp-test/countries/en_gb/global")
        cy.get('#username').type(this.data.email)
        cy.get('#password').type(this.data.password, { log: false })
        cy.get('#submit-button').click()
        cy.title().should('eq', 'AEM Sites')
     //   cy.get(') 
     //      .wait(5000)
        cy.get('[data-foundation-collection-item-id="/content/bp-test/countries/en_gb/global/new-homepage"] > coral-columnview-item-thumbnail > .foundation-collection-item-thumbnail').click({force:true})
              
       }
    )

}
)
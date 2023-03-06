describe('Demoblaze app login scenario', () =>  {
    it('successfully login using correct username password', () => {
        cy.visit('http://www.demoblaze.com/index.html')
        cy.screenshot();

        // click link text login
        cy.get("[data-target='#logInModal']").click()
        cy.get("[onclick='logIn()']").should('be.visible')
        cy.wait(1000)
        cy.screenshot();

        // fill username password
        cy.get('#loginusername').type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get('#loginpassword').type('bullseye').should('have.value', 'bullseye')
        cy.screenshot();
        
        // click button login
        cy.get("[onclick='logIn()']").click()
        cy.screenshot();

        // assert homescreen
        cy.get('#nameofuser').should('contain', 'wibowo.bullseye') 
        cy.screenshot(); 

        // add mobile phone category orders
        cy.get('#tbodyid > div:nth-of-type(2) .hrefch').click()
        cy.screenshot();

        // add nokia item example
        cy.get('.btn-success').click()
        cy.wait(2000)
        cy.screenshot();
        
        // alert message order
        cy.on('window:confirm',(txt)=>{
        expect(txt).to.equal('Product added.');
        cy.screenshot();
        })

        // home page add to card
        cy.get("#cartur").click()
        cy.wait(1000)
        cy.screenshot();

        // click button logout
        cy.get("[onclick='logOut()']").click()
        cy.screenshot();

        // assert homescreen
        cy.get('#nameofuser').should('contain', '')
        cy.screenshot(); 
        })
})
describe('Demoblaze app login scenario', () =>  {
    it('Successfully login using correct username password', () => {
        cy.visit('http://www.demoblaze.com/index.html')
        // click link text login
        cy.get("[data-target='#logInModal']").click()
        cy.get("[onclick='logIn()']").should('be.visible')
        cy.wait(1000);
       
        // fill username password
        cy.get('#loginusername').type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get('#loginpassword').type('bullseye').should('have.value', 'bullseye');
       
        // click button login
        cy.get("[onclick='logIn()']").click();
        
        // assert homescreen
        cy.get('#nameofuser').should('contain', 'wibowo.bullseye') 
        })
       
        it('Tugas Add To Cart', () => {
        cy.visit('https://www.demoblaze.com/index.html')
    
        // click link text login
        cy.get(`[data-target='#logInModal']`).click()
        cy.get("[onclick='logIn()']").should('be.visible')
        cy.wait(2000)
        cy.screenshot(); 
    
        // fill username password
        cy.get("#loginusername").type('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get("#loginpassword").type('bullseye').should('have.value', 'bullseye')
        cy.screenshot(); 

        // click button login
        cy.get("[onclick='logIn()']").click()
        cy.screenshot(); 

        // add to cart
        cy.get(".nav-link[href='index.html']").click()
        cy.wait(2000)
        cy.get("#tbodyid > div:nth-of-type(1) .hrefch").click()
        cy.url().should("eq", "https://www.demoblaze.com/prod.html?idp_=1")
        cy.get(".btn-success").contains('Add to cart').click()
        cy.screenshot(); 

        // crossceck list
        cy.get("#cartur").click()
        cy.url().should("eq", "https://www.demoblaze.com/cart.html")
        cy.get("td:nth-of-type(2)").should('contain', 'Samsung galaxy s6')
        cy.screenshot(); 

        // alert message order
        cy.on('window:confirm',(txt)=>{
        expect(txt).to.equal('Product added.');
        cy.screenshot(); 
        })
    
        // assert homescreen
        cy.get('#nameofuser').should('contain', '')
        cy.screenshot(); 

        // click button logout
        cy.get("[onclick='logOut()']").click();
        cy.screenshot(); 
           
        })
        })
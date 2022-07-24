

describe('favorite add', () => {
        // favorite dipilih
        it('detail lesson successfully load', () => {
            cy.visit('http://localhost:3000/')
            cy.get('#login').click()
            cy.get('h2').should('have.text', 'Login Sebagai...')
            cy.get('#peserta').click()
            cy.get('#email')
                .type('admin')
            cy.get('#password')
                .type('password')
            cy.get('#login').click()
            cy.get('#greeting').should('have.text', 'Halo!')
            cy.get('.grid #card0').click()
            cy.get('#title').should('have.text', 'Amet Nam porro veli')
            cy.get('#accordion').should('have.text', 'Ina Aguilar')
            cy.get('#accordion').click()
            cy.get('#dropdown').should('have.text', 'Priscilla Lee')
            cy.get('#like').click()
            cy.wait(2000)
            cy.get('#accordion').should('have.text', 'Ina Aguilar')
            cy.get('#accordion').click()
            cy.get('#isLike').should('have.attr', 'fill')
        })  

        // favorite dinonaktifkan
        it('detail lesson successfully load', () => {
            cy.visit('http://localhost:3000/')
            cy.get('#login').click()
            cy.get('h2').should('have.text', 'Login Sebagai...')
            cy.get('#peserta').click()
            cy.get('#email')
                .type('admin')
            cy.get('#password')
                .type('password')
            cy.get('#login').click()
            cy.get('#greeting').should('have.text', 'Halo!')
            cy.get('.grid #card0').click()
            cy.get('#title').should('have.text', 'Amet Nam porro veli')
            cy.get('#accordion').should('have.text', 'Ina Aguilar')
            cy.get('#accordion').click()
            cy.get('#dropdown').should('have.text', 'Priscilla Lee')
            cy.get('#like').click()
            cy.wait(2000)
            cy.get('#accordion').should('have.text', 'Ina Aguilar')
            cy.get('#accordion').click()
            cy.get('#dislike')
        })  
})
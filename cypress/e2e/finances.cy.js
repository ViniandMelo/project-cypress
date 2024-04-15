
beforeEach(() => {
    cy.visit("https://dev-finance.netlify.app/")
});



describe('Transações', () => {
    it('Cadastrar uma entrada', () => {

        criarTransacao("Freela", 255)
        
        cy.get("tbody tr td.description")
        .should("have.text", 'Freela')
    });

    it('Cadastrar uma saída', () => {
    
        criarTransacao("Cinema", -75)

        cy.get("tbody tr td.description")
        .should("have.text", 'Cinema')
    });

    it('Transação de saída', () => {
        criarTransacao("Freela Domingo", 137)
        criarTransacao("Freela Sexta", 155)

        cy.contains('.description', "Freela Domingo")
        .parent()
        .find('img').click()
    });
});

function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
        cy.get("#description").type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2024-04-01")

        cy.contains('button', 'Salvar').click()
}


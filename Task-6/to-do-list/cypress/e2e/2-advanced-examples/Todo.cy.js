
describe("Todo Application", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("should display the Todo list header", () => {
        cy.get("h1").should("have.text", "Todo List");
    });

    it("should add a new task", () => {
        const taskText = "New Task";
        cy.get("input[type='text']").type(taskText);
        cy.get("button").click();
        cy.get(".todo_card").should("contain", taskText);
    });

    it("should not add a task with an empty input", () => {

        cy.get("button").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Please enter a task.");
        });
    });




});

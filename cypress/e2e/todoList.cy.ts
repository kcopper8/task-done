import PrepareStorage from "./util/prepare";

describe("todoList", function () {
  context("접근 시", function () {
    before(() => {
      cy.visit("/");
      PrepareStorage.todoList();
    });
    beforeEach(() => {
      cy.visit("/todo");
    });

    specify("현재 todo 목록이 보인다.", function () {
      cy.contains("Racing").should("exist");
    });
    it("newItem 을 누르면 todo 추가 화면으로 간다.", function () {
      cy.contains("newItem").should("exist").click();
      cy.url().should("contain", "add");
    });
  });
});

import PrepareStorage from "./util/prepare";

describe("currentTodoList", function () {
  describe("Done 버튼을 누르면", function () {
    it("누른 todo 가 currentTodoList 에서 제거된다.", function () {
      cy.visit("/");
      PrepareStorage.todoList();
      PrepareStorage.clearTodayDoneList();
      cy.visit("/");

      cy.contains("Los")
        .should("exist")
        .find("[data-test-id=CurrentTodoList_item_done]")
        .click();
      cy.contains("Los").should("not.exist");
    });
  });
});

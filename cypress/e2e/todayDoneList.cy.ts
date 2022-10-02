import { testId } from "./util";
import PrepareStorage from "./util/prepare";

describe("todayDoneList", function () {
  describe("아무것도 안했으면", function () {
    it("빈 목록이 보인다.", function () {
      cy.visit("/");
      PrepareStorage.clearTodayDoneList();

      cy.visit("/today");
      cy.get(testId("todayDoneList_item")).should("not.exist");
    });
  });

  describe("currentTodoList 에서 Done 을 하면", function () {
    it("todayDoneList 에 보인다.", function () {
      cy.visit("/");
      PrepareStorage.todoList();
      PrepareStorage.clearTodayDoneList();

      cy.visit("/");
      const selectToBeDoneTodo = () => cy.contains("Los");
      selectToBeDoneTodo().find(testId("CurrentTodoList_item_done")).click();
      cy.get(testId("today_menu_item")).click();
      selectToBeDoneTodo();
    });
  });
});

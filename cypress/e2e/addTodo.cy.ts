import { testId } from "./util";

describe("addTodo", function () {
  describe("hello 라는 타이틀을 입력하고 submit 하면", function () {
    it("목록에 hello 가 추가되어 있다", function () {
      cy.visit("/add");

      cy.get(testId("editTodo_title_input")).type("hello");
      cy.get(testId("editTodo_submit")).click();
      cy.contains("hello");
    });
  });
});

export {};

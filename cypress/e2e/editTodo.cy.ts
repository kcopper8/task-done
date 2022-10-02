import { testId } from "./util";
import PrepareStorage from "./util/prepare";

describe("editTodo", function () {
  before(() => {
    cy.visit("/");
    PrepareStorage.todoList();
  });

  it("접근 시", function () {
    cy.visit("/todo/1");

    // 타이틀 입력항목에 저게
    cy.get(testId("editTodo_title_input")).should(
      "have.value",
      "Racing car sprays burning fuel into crowd."
    );
  });

  context("수정 완료 하면", function () {
    before(() => {
      cy.visit("/todo/1");

      cy.get(testId("editTodo_title_input")).clear().type("hello");
      cy.get(testId("editTodo_submit")).click();
    });

    it("목록으로 이동해야 한다.", function () {
      cy.location("pathname").should("equal", "/todo");
    });

    it("목록에 업데이트한 타이틀이 있어야 한다.", () => {
      cy.contains("hello").should("exist");
    });
  });
});

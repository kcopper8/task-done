export const testId = (id: string) => `[data-test-id=${id}]`;

export const prepareStorage = (key: string, data: any) => {
  let promise: any = Cypress.Promise.resolve(data);
  if (typeof data === "string") {
    promise = cy.fixture(data);
  }

  return promise.then((data: unknown) => {
    return cy.window().then((window) => {
      // @ts-ignore
      return window.resetStorage(key, data);
    });
  });
};

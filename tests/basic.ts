/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../scripts/ts/app.ts" />

describe("test something to Application", () => {
	it("return 1", () => {
		var app = new Application();
		expect(app.returnOne()).toBe(1);
	});
});

describe("do something", () => {
	it("get 1", () => {
		expect(1).toBe(1);
	});
});

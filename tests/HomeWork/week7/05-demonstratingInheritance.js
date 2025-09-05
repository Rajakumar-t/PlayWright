"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestData = void 0;
// Exporting the class makes it importable from other files/modules (optional for this assignment)
var TestData = /** @class */ (function () {
    function TestData() {
    }
    // Method #1 in the superclass.
    // - Name: enterCredentials
    // - Parameter: block (string) → just a label so you can see where the call came from
    // - Return type: void → it doesn't return anything; it only logs text
    TestData.prototype.enterCredentials = function (block) {
        // Use template string to print a readable message + the label passed in
        console.log("enter the valid Credentials ======> ".concat(block));
    };
    // Method #2 in the superclass.
    // Same idea as above: logs a message showing the action + the label
    TestData.prototype.navigateToHomePage = function (block) {
        console.log("navigateToHomePage ======> ".concat(block));
    };
    return TestData;
}()); // ← End of superclass TestData
exports.TestData = TestData;
// Subclass declaration. "extends TestData" means LoginTestData inherits
// both methods from TestData: enterCredentials() and navigateToHomePage()
var LoginTestData = /** @class */ (function (_super) {
    __extends(LoginTestData, _super);
    function LoginTestData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Subclass-specific method #1 (only in LoginTestData)
    // Parameter uname: the username you want to "enter"
    LoginTestData.prototype.enterUsername = function (uname) {
        console.log("please enter your UserName ========> ".concat(uname));
    };
    // Subclass-specific method #2 (only in LoginTestData)
    // Parameter pass: the password you want to "enter"
    LoginTestData.prototype.enterPassword = function (pass) {
        // NOTE: Fixed the log label to say Password (your original said UserName)
        console.log("please enter your Password ========> ".concat(pass));
    };
    return LoginTestData;
}(TestData)); // ← End of subclass LoginTestData
// ---------- Demo / Usage section ----------
// Create an object (instance) of the superclass.
// "new" calls the constructor (default, since we didn't define one) and gives us a TestData object.
var t = new TestData();
// Call superclass method #1 on the TestData instance.
// We pass "TestData" as a label so the console shows where this call came from.
t.enterCredentials("TestData");
// Call superclass method #2 on the TestData instance.
t.navigateToHomePage("TestData");
// Create an object (instance) of the subclass.
// Because LoginTestData extends TestData, it can use BOTH its own methods and inherited ones.
var l = new LoginTestData();
// Call inherited method #1 (from TestData) on the subclass instance.
l.enterCredentials("LoginTestData");
// Call inherited method #2 (from TestData) on the subclass instance.
l.navigateToHomePage("LoginTestData");
// Call subclass-specific method #1 (only exists on LoginTestData).
l.enterUsername("jhfjsdhfj");
// Call subclass-specific method #2 (only exists on LoginTestData).
l.enterPassword("......");

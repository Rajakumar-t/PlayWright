// Exporting the class makes it importable from other files/modules (optional for this assignment)
export class TestData  { // ← Superclass (parent). Other classes can inherit its methods.

  // Method #1 in the superclass.
  // - Name: enterCredentials
  // - Parameter: block (string) → just a label so you can see where the call came from
  // - Return type: void → it doesn't return anything; it only logs text
  enterCredentials(block: string): void {
    // Use template string to print a readable message + the label passed in
    console.log(`enter the valid Credentials ======> ${block}`);
  }

  // Method #2 in the superclass.
  // Same idea as above: logs a message showing the action + the label
  navigateToHomePage(block: string): void {
    console.log(`navigateToHomePage ======> ${block}`);
  }
} // ← End of superclass TestData

// Subclass declaration. "extends TestData" means LoginTestData inherits
// both methods from TestData: enterCredentials() and navigateToHomePage()
class LoginTestData extends TestData {

  // Subclass-specific method #1 (only in LoginTestData)
  // Parameter uname: the username you want to "enter"
  enterUsername(uname: string): void {
    console.log(`please enter your UserName ========> ${uname}`);
  }

  // Subclass-specific method #2 (only in LoginTestData)
  // Parameter pass: the password you want to "enter"
  enterPassword(pass: string): void {
    // NOTE: Fixed the log label to say Password (your original said UserName)
    console.log(`please enter your Password ========> ${pass}`);
  }
} // ← End of subclass LoginTestData

// ---------- Demo / Usage section ----------

// Create an object (instance) of the superclass.
// "new" calls the constructor (default, since we didn't define one) and gives us a TestData object.
const t = new TestData();

// Call superclass method #1 on the TestData instance.
// We pass "TestData" as a label so the console shows where this call came from.
t.enterCredentials("TestData");

// Call superclass method #2 on the TestData instance.
t.navigateToHomePage("TestData");

// Create an object (instance) of the subclass.
// Because LoginTestData extends TestData, it can use BOTH its own methods and inherited ones.
const l = new LoginTestData();

// Call inherited method #1 (from TestData) on the subclass instance.
l.enterCredentials("LoginTestData");

// Call inherited method #2 (from TestData) on the subclass instance.
l.navigateToHomePage("LoginTestData");

// Call subclass-specific method #1 (only exists on LoginTestData).
l.enterUsername("jhfjsdhfj");

// Call subclass-specific method #2 (only exists on LoginTestData).
l.enterPassword("......");

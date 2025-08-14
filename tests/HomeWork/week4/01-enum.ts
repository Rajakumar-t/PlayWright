enum Environment {
  LOCAL = "LOCAL",
  DEVELOPMENT = "DEVELOPMENT",
  STAGING = "STAGING",
  PRODUCTION = "PRODUCTION",
}
function runTests(envi:Environment):void {
    console.log(`Running tests against the ${envi} environment...`);
    
}
runTests(Environment.LOCAL)
runTests(Environment.DEVELOPMENT)
runTests(Environment.PRODUCTION)
runTests(Environment.STAGING)

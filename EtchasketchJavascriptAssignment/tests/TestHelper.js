class TestHelper {
    static testCounter = 1;
    static printSuccess(testName) {
        let text = document.createTextNode(this.testCounter++ + ". Success: " + testName);
        let paragraph = document.createElement("p");
        let resultDiv = document.getElementById("test-results");
        paragraph.appendChild(text);
        resultDiv.appendChild(paragraph);
    }
    static printFailure(testName, expected, actual) {
        let text = document.createTextNode(this.testCounter++ + ". Failure: " + testName + " | Expected: " + expected + " | Actual: " + actual);
        let paragraph = document.createElement("p");
        let resultDiv = document.getElementById("test-results");
        paragraph.classList.add("failure");
        paragraph.appendChild(text);
        resultDiv.appendChild(paragraph);
    }
    static assertTrue(testName, testResult) {
        if (testResult) {
            this.printSuccess(testName);
        }
        else {
            this.printFailure(testName, true, testResult);
        }
    }
    static assertFalse(testName, testResult) {
        if (!testResult) {
            this.printSuccess(testResult);
        }
        else {
            this.printFailure(testName, false, testResult);
        }
    }
    static assertEquals(testName, expected, actual) {
        if (expected === actual) {
            this.printSuccess(testName);
        }
        else {
            this.printFailure(testName, expected, actual);
        }
    }
}
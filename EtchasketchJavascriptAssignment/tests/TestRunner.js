// window.onload(runAllTests());
window.onload = () => {
    runAllTests();
}

function runAllTests() {
    // Test variables
    let testName = "";
    let drawingBoard = new DrawingBoard();
    let stylus = new Stylus();

    // Check that testHelper is working
    testName = "True is true";
    TestHelper.assertTrue(testName, true);

    // Stylus tests
    testName = "Stylus x starts at minX";
    stylus = new Stylus();
    TestHelper.assertEquals(testName, stylus.getMinX(), stylus.getX());

    testName = "Stylus y starts at maxY";
    stylus = new Stylus();
    TestHelper.assertEquals(testName, stylus.getMaxY(), stylus.getY());

    testName = "Stylus is at x=1 after moving to the right";
    stylus = new Stylus();
    stylus.moveRight();
    TestHelper.assertEquals(testName, 1, stylus.getX());

    testName = "Stylus is still at y=0 after moving to the right";
    stylus = new Stylus();
    stylus.moveRight();
    TestHelper.assertEquals(testName, 0, stylus.getY());

    testName = "Stylus is still at x=maxX even after moving right 123456 times";
    stylus = new Stylus();
    for (let i = 0; i < 123456; i++) {
        stylus.moveRight();
    }
    TestHelper.assertEquals(testName, stylus.getMaxX(), stylus.getX());

    testName = "Stylus is still at x=0 even after attempting to move left from 0";
    stylus = new Stylus();
    stylus.moveLeft();
    TestHelper.assertEquals(testName, 0, stylus.getX());

    testName = "Stylus stays at current location after DrawingBoard is erased";
    drawingBoard = new DrawingBoard();
    drawingBoard.getStylus().moveRight();
    drawingBoard.eraseBoard();
    TestHelper.assertEquals(testName, 1, drawingBoard.getStylus().getX());
}
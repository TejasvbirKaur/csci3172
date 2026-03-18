const assert = require('assert');

function testRecipeFormat() {
    const recipe = { title: "Pasta" };
    assert.strictEqual(typeof recipe.title, "string");
}

try {
    testRecipeFormat();
    console.log("Test Passed");
} catch (err) {
    console.error("Test Failed");
}
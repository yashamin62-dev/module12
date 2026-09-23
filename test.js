const { getPage } = require("./app");

const result = getPage("v1", false);

if (
    result.includes("Version: v1") &&
    result.includes("New Feature: OFF")
) {
    console.log("TEST PASSED");
} else {
    console.error("TEST FAILED");
    process.exit(1);
}

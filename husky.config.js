const multiple = arr => arr.join(" && ");

module.exports = {
    "hooks": {
        "pre-commit": multiple(["npm run format", "git add ."]),
        "pre-push": "npm run test"
    }
}
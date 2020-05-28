const core = require('@actions/core');
const github = require('@actions/github');

try {
    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    const json = JSON.stringify(github, null, '\t');
    console.log('json :>> ', json);
} catch (error) {
    core.setFailed(error.message);
}
const core = require('@actions/core');
const github = require('@actions/github');

try {
    core.debug('Debug message');
    core.warning('warning message');
    core.error('error message');

    const name = core.getInput('who-to-greet');
    core.setSecret(name);
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.startGroup('Logging github object')
    const json = JSON.stringify(github, null, '\t');
    console.log('json :>> ', json);
    core.endGroup();
    core.exportVariable('HELLO', 'Hello')
} catch (error) {
    core.setFailed(error.message);
}
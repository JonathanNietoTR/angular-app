const core = require('@actions/core');
const github = require('@actions/github');

const run = async () => {
    try {
        const token = core.getInput('token');
        const title = core.getInput('title');
        const body = core.getInput('body');
        const assignees = core.getInput('assignees');

        const oktokit = new github.GitHub(token);
        const response = await oktokit.issues.create({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            // ...github.context.repo,
            title,
            body,
            assignees: assignees ? assignees.split('\n') : undefined
        });

        core.setOutput('issue', JSON.stringify(response.data));
    } catch (error) {
        core.setFailed(error.message)
    }
}

run();
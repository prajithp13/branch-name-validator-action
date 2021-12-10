const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const branchRef  = github.context.payload.ref
    const branchName = branchRef.replace("refs/heads/", "");
    const branches = core.getMultilineInput('branches')
    
    let isMatching = false
    branches.forEach( (name) => {
      if (name && branchName.match(name)) {
        isMatching = true
        return 
      }
    })

    if (isMatching == false) {
      core.setFailed(
        `The current branch name ${branchName} does not match with any of the branch specified`
      )
    }

  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
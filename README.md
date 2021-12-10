# Branch Name Validator

A Github action that verify the current branch name

## Usage

```yaml
name: Coverage Check
on:
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Validate branch name
        uses: prajithp13/branch-name-validator-action@master
        with:
          branches: |
            '^main$'
            '^master$'
```

### Inputs

| Name | Required | Description| Default |
|--|--|--|--|
| branches | false | Multi line Regex pattern | master, main, hotix/.* |


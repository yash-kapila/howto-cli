# How To CLI

With the fast paced world in technology, almost always when a person starts learning a new tool or a technology, they either forget syntax/commands of a previous learned tool or find it hard to remember them for the new one.

Linux based OS's provides a very efficient search operation named `man` which gives a very extensive description of the searched item. However, for someone new, it might be a bit intimidating.

There is also an alternative to simply go on the Internet and look for a command's syntax or its usage. However, that still is a very long process and wouldn't really work in situations where there network access is unavailable.

Thus, we have created this CLI which is a very slim version of `man` and lists all basic commands for tools and technologies like `Git`, `Unix` commands, `NPM` etc.

This CLI is written in NodeJS and hence would need the user to have **NodeJS(10.15.3 or above)** installed on the machine.

## Installation

The package is not available in NPM registry and hence can't be installed using `npm install`.

Hence, the way to use the CLI is to:
1. Clone the repo
2. Execute `npm link` inside the directory which creates a symbolic link to the global `node_modules` directory.

## Usage

The CLI can be used by simply executing

```
$ howto
```

This gives you a list of tools and technologies to choose from:

```
system:~ user$ howto
? selected: (Use arrow keys)
❯ Git
  Regex
  Unix
```

Select the option for which you wish to see the list of commands. This will output a list of all commands for the selected option.

```
-----------------------------------------------------------    ---------------------------------------------------------------------------------------
                          Command                                                                    Description                                      
-----------------------------------------------------------    ---------------------------------------------------------------------------------------
git checkout <branch-name>                                     Checkout an existing branch
git checkout <branch-name> -b                                  Create and checkout a new branch
git status                                                     Displays the state of the working directory and the staging area
git diff                                                       Shows difference between commits, commit and working tree etc
git branch                                                     List branches available locally
git branch -r                                                  List branches available on remote
git branch -a                                                  List all branches available locally and on remote
git branch -d <branch-name>                                    Delete specified branch from local Git repository
git push origin <branch-name>                                  Push all local commits in a branch to remote
git push origin <branch-name> -d                               Delete specified branch from remote Git repository
git rebase develop                                             Rebase current branch on top of develop
git rebase -i HEAD~2                                           Modifying multiple commits on the current branch
git log --oneline                                              Shows all commit logs in a sinle line description
git log --graph --decorate --pretty=oneline --abbrev-commit    Displays all commits in a graph format
git config --local -l                                          Lists all configurations setup for local repository
git config --global -l                                         Lists all configurations setup at a global level
git config user.name ""                                        Set a config property for local repository
git config --global <property> "<value>"                       Set a config property at a global level
git checkout develop -- test.txt                               Overwrite contents of test.txt in the current branch from develop
git diff develop..master                                       Display difference between develop and master branch
git reset --soft HEAD~2                                        Soft reset branch to 2 commits before HEAD
git reset --hard HEAD~2                                        Hard reset branch to 2 commits before HEAD. All unsaved changes could be lost this way.
```

### Grep

A nice feature of Unix based CLIs is the option to `grep` the search results. This CLI tries to provide a similar behavior which can be accessed by using the CLI as:

```
$ howto -g checkout
$ howto -g "git checkout"
$ howto --grep checkout
$ howto --grep "git checkout"
```
## Customize commands

Since the package is not installed from NPM registry, a person who wishes to use it need not depend on any version updates. Commands can be added, deleted or updated based on individual person. New sections can also be added in the dropdown for different tools and technologies.

**Example:**

To add a new section for NPM commands, create `NPM.json` inside `src/howto` directory. Make sure that the commands added are in a valid JSON format.
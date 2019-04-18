# How To CLI

With the fast paced world in technology, almost always when a person starts learning a new tool or a technology, they either forget syntax/commands of a previous learned tool or find it hard to remember them for the new one.

Linux based OS's provides a very efficient search operation named `man` which gives a very extensive description of the searched item. However, for someone new, it might be a bit intimidating.

There is also an alternative to simply go on the Internet and look for a command's syntax or its usage. However, that still is a very long process and wouldn't really work in situations where there network access is unavailable.

Thus, we have created this CLI which is a very slim version of `man` and lists all basic commands for tools and technologies like `Git`, `Unix` commands, `NPM` etc.

This CLI is written in NodeJS and hence would need the user to have **NodeJS(10.15.3 or above)** installed on the machine.

## Installation

Currently, the package is not published on the NPM registry and hence can't be installed using NPM. Hence, the way to use the CLI is to:
1. Clone the repo
2. Execute `npm link` from inside the directory which creates a symbolic link to the global `node_modules` directory.

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
  Unix
  NPM
```

Select the option for which you wish to see the list of commands.

### Grep

A nice feature of Unix based CLIs is the option to `grep` the search results. This CLI tries to provide a similar behavior which can be accessed by using the CLI as:

```
$ howto -g checkout
$ howto -g "git checkout"
$ howto --grep checkout
$ howto --grep "git checkout"
```

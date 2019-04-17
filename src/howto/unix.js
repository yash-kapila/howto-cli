const commands = [
  {
    command: 'man <command>',
    description: 'Get extensive manual of the command specified',
  },
  {
    command: 'whatis <command>',
    description: 'Get a short description of a command',
  },
  {
    command: 'whoami',
    description: 'Get the name of current logged-in user',
  },
  {
    command: 'cd <dirname>',
    description: 'Navigate to specified directory'
  },
  {
    command: 'cd ~',
    description: 'Navigate to home directory'
  },
  {
    command: 'rmdir <dirname>',
    description: 'Remove directory only if it is empty'
  },
  {
    command: 'rmdir -r <dirname>',
    description: 'Remove all files and sub directories recursively'
  },
  {
    command: 'rmdir -rf <dirname>',
    description: 'Force remove all files and sub directories recursively'
  },
  {
    command: 'cp <source-file-path> <target-file-path>',
    description: 'Copy source file to target file'
  },
  {
    command: 'cp <source-dir-path> <target-dir-path>',
    description: 'Recursively copy directories and sub-directories'
  },
  {
    command: 'cat <new-file> >> <old-file>',
    description: 'Append new file contents to an old file'
  },
];

module.exports = {
  commands,
};

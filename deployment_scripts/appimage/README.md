# Monkey Island AppImage

## About

This directory contains the necessary artifacts for building a prototype
monkey_island AppImage using appimage-builder.

## Building an AppImage

1. Create a clean VM or LXC (not docker!) based on Ubuntu 18.04.
1. Copy the `deployment_scripts/appimage` directory to `$HOME/` in the VM.
1. Run `sudo -v`.
1. On the VM, `cd $HOME/appimage`
1. Execute `./build_appimage.sh`. This will pull all necessary dependencies
   and build the AppImage.

NOTE: This script is intended to be run from a clean VM. You can also manually
remove build artifacts by removing the following files and directories.

- $HOME/.monkey_island (optional)
- $HOME/monkey-appdir
- $HOME/git/monkey
- $HOME/appimage/appimage-builder-cache
- $HOME/appimage/"Monkey\ Island-\*-x86-64.Appimage"

After removing the above files and directories, you can again execute `bash
build_appimage.sh`.

## Running the AppImage

The build script will produce an AppImage executible named something like
`Monkey Island-VERSION-x86-64.AppImage`. Simply execute this file and you're
off to the races.

A new directory, `$HOME/.monkey_island` will be created to store runtime
artifacts.

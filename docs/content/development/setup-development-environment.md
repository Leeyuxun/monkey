---
title: "Development setup"
date: 2020-06-08T19:53:00+03:00
draft: false
weight: 5
tags: ["contribute"]
---

## Deployment scripts

To set up a development environment using scripts, look at the readme under [`/deployment_scripts`](https://github.com/guardicore/monkey/blob/develop/deployment_scripts). If you want to set it up manually or run into problems, keep reading.

## Agent

The agent (which we sometimes refer to as the Infection Monkey) is a single Python project under the [`infection_monkey`](https://github.com/guardicore/monkey/blob/master/monkey/infection_monkey) folder. The Infection Monkey agent was built for Python 3.7. You can get it up and running by setting up a [virtual environment](https://docs.python-guide.org/dev/virtualenvs/) and installing the requirements listed in the [`requirements.txt`](https://github.com/guardicore/monkey/blob/master/monkey/infection_monkey/requirements.txt) inside it.

In order to compile the Infection Monkey for distribution by the Monkey Island, you'll need to run the instructions listed in the [`readme.txt`](https://github.com/guardicore/monkey/blob/master/monkey/infection_monkey/readme.txt) on each supported environment.

This means setting up an environment with Linux 32/64-bit with Python installed and a Windows 64-bit machine with developer tools, along with 32/64-bit Python versions.

## The Monkey Island

The Monkey Island is a Python backend React frontend project. Similar to the agent, the backend's requirements are listed in the matching [`requirements.txt`](https://github.com/guardicore/monkey/blob/master/monkey/monkey_island/requirements.txt).

To setup a working front environment, run the instructions listed in the [`readme.txt`](https://github.com/guardicore/monkey/blob/master/monkey/monkey_island/readme.txt)

# Difference Generator

### Hexlet tests and linter status:
[![Actions Status](https://github.com/bmwmtv/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/bmwmtv/frontend-project-46/actions)
[![Linter](https://github.com/bmwmtv/frontend-project-46/actions/workflows/linter.yml/badge.svg)](https://github.com/bmwmtv/frontend-project-46/actions/workflows/linter.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/cd605c9a768d6f850297/maintainability)](https://codeclimate.com/github/bmwmtv/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cd605c9a768d6f850297/test_coverage)](https://codeclimate.com/github/bmwmtv/frontend-project-46/test_coverage)

### Description

A difference generator is a program that determines the difference between two data structures. This is a popular task for which there are many online services. A similar mechanism is used in testing or tracking changes in configuration files.

Utility features:

- Support for different input formats: yaml, json
- Report generation in the form of plain text, stylish and json

### Requirements

- node.js

### Setup

    git clone git@github.com:bmwmtv/frontend-project-46.git
    cd frontend-project-46
    make install
    sudo npm link

### Run

    gendiff <file1> <file2> --format <format>

### Demo
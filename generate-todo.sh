#!/bin/bash

printf "## TODO ✅\n\n" > TODO.md

php todoGen.php

git add TODO.md

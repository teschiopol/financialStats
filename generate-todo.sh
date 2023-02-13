#!/bin/sh

grep -r TODO src > TODO.md
git add TODO.md

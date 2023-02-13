#!/bin/bash

printf "## TODO ✅\n\n" > TODO.md

names=$(grep -n -r "TODO" src)

while read n; do
  printf "%s $n \n\n" "- [ ]" >> TODO.md
done <<< "$names"

git add TODO.md

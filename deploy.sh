#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git remote add origin git@github.com:rg3915/rgpro.git
git checkout -b main
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:rg3915/rgpro.git main:gh-pages

cd -
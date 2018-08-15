#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


if [[ "$TRAVIS_OS_NAME" == "linux" && "$TRAVIS_PULL_REQUEST" = "false" && "$TRAVIS_BRANCH" == "master" ]]; then
  cp LICENSE kriry
  git clone https://github.com/davisp/ghp-import.git &&
  ./ghp-import/ghp_import.py -n -p -f -m "Documentation upload" -b master -r https://"$KRIRY_TOKEN"@github.com/krircc/krircc.github.io.git kriry &&
  echo "Uploaded documentation"
fi

#!/usr/bin/env bash

PKGS=("random" "date")
WEB=("thang-web" "thing-web")

mkdir -p .tmp
cd .tmp

for pkg in ${PKGS[@]}
do
  TARBALL=$(npm pack "../packages/${pkg}")
  for app in ${WEB[@]};
  do
    cp "${TARBALL}" "../${app}"
  done
done
cd ..
rm -rf .tmp




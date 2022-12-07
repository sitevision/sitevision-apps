#!/bin/bash
echo "Copying source files to build"
echo $(pwd)
mkdir build
cp -r src/public-api/* build
cp -r src/server build
cp -r src/common build
cp -r src/client build
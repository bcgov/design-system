#!/bin/bash

# Remove existing dist target directories
rm -rf dist/cjs*
rm -rf dist/css*
rm -rf dist/js*

# Copy the contents of build into dist
cp -R build/* dist

# Update the version in dist/package.json to match the root package.json version
ROOT_VERSION=$(jq -r '.version' package.json)
jq --arg version "$ROOT_VERSION" '.version = $version' dist/package.json > tmp.$$.json && mv tmp.$$.json dist/package.json

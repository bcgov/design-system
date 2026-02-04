#!/bin/bash

# Remove existing build target directories
rm -rf build/cjs*
rm -rf build/css*
rm -rf build/scss*
rm -rf build/js*

# Run the tokens transformation script
node build-output.js

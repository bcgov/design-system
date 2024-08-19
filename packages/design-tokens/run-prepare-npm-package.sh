# Remove existing dist target directories
rm -rf dist/cjs*
rm -rf dist/css*
rm -rf dist/js*

# Copy the contents of build into dist
cp -R build/* dist

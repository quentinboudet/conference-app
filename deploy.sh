#!/bin/bash
set -o errexit # Exit on error
npm run webpack-dev-server
json-server --watch db.json
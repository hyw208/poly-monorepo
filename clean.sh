#!/bin/bash
set -e

echo "Cleaning the monorepo..."

# Remove root node_modules and nx cache
echo "Removing root node_modules and .nx/cache..."
rm -rf node_modules
rm -rf .nx/cache

# Remove .gradle directory
echo "Removing .gradle directory..."
rm -rf .gradle

# Remove all build directories from Java projects
echo "Removing Java build directories..."
find ./apps/java ./libs/java -name "build" -type d -exec rm -rf {} +

# Remove all .venv, dist, and __pycache__ directories from Python projects
echo "Removing Python artifacts..."
find ./apps/python ./libs/python -name ".venv" -type d -exec rm -rf {} +
find ./apps/python ./libs/python -name "dist" -type d -exec rm -rf {} +
find ./apps/python ./libs/python -name "__pycache__" -type d -exec rm -rf {} +

echo "Clean up complete!"

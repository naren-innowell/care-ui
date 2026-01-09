# GitHub Actions Setup Guide

## How GitHub Actions Handles Authentication

GitHub Actions automatically provides a `GITHUB_TOKEN` secret that's available in all workflows. This token has permissions based on the workflow's `permissions` setting.

## Current Workflow Configuration

### CI Workflow (`.github/workflows/ci.yml`)
- **Purpose**: Runs tests, linting, and builds on push/PR
- **Token**: Uses `secrets.GITHUB_TOKEN` (automatically provided)
- **Permissions**: Default permissions (read access)

### Publish Workflow (`.github/workflows/publish.yml`)
- **Purpose**: Publishes package when a release is created
- **Token**: Uses `secrets.GITHUB_TOKEN` 
- **Permissions**: 
  - `contents: read` - Read repository contents
  - `packages: write` - Write/publish packages

## How It Works

1. **`actions/setup-node@v4`** automatically:
   - Creates an `.npmrc` file in the workflow
   - Sets up authentication using `NODE_AUTH_TOKEN` (from `secrets.GITHUB_TOKEN`)
   - Configures the registry for the specified scope

2. **Our custom `.npmrc`** uses `${GITHUB_TOKEN}`:
   - The workflow sets `GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}` as an environment variable
   - This allows our `.npmrc` to work correctly

## No Manual Token Setup Needed!

✅ **GitHub Actions automatically provides `secrets.GITHUB_TOKEN`**
- No need to create a Personal Access Token
- No need to add it as a secret
- It's automatically available in all workflows

## Token Permissions

The `GITHUB_TOKEN` in workflows has permissions based on:
- Repository settings
- Workflow `permissions` section

For publishing packages, ensure:
```yaml
permissions:
  contents: read
  packages: write
```

## Troubleshooting

### If publishing fails with "403 Forbidden":
- Check that `packages: write` permission is set in the workflow
- Verify the repository allows GitHub Packages
- Check that the package scope matches the repository owner

### If installation fails:
- Ensure `registry-url` and `scope` are set in `setup-node`
- Verify `GITHUB_TOKEN` is set as environment variable
- Check that the workflow has necessary permissions

# Publishing and Installation Guide

## Setting Up GITHUB_TOKEN for Publishing

### Step 1: Create a GitHub Personal Access Token

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token** → **Generate new token (classic)**
3. Give it a name (e.g., "npm-publish-token")
4. Select scopes:
   - ✅ `write:packages` (to publish packages)
   - ✅ `read:packages` (to read packages)
   - ✅ `repo` (if the repository is private)
5. Click **Generate token**
6. **Copy the token immediately** (you won't be able to see it again!)

### Step 2: Set the Environment Variable

**For local development/publishing:**

```bash
# Set it for current session
export GITHUB_TOKEN=your_github_token_here

# Or add to your shell profile for persistence (~/.zshrc or ~/.bashrc)
echo 'export GITHUB_TOKEN=your_github_token_here' >> ~/.zshrc
source ~/.zshrc
```

**Verify it's set:**
```bash
echo $GITHUB_TOKEN
```

### Step 3: Publish the Package

```bash
# Build the package (runs automatically via prepublishOnly)
yarn build

# Publish to GitHub Packages
npm publish
```

## Installing the Package in Other Projects

### Step 1: Configure .npmrc in the Consuming Project

Create or update `.npmrc` in the project where you want to install `@naren-innowell/care-ui`:

```bash
@naren-innowell:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Step 2: Set GITHUB_TOKEN in the Consuming Project

The consuming project also needs a GitHub token with `read:packages` permission:

```bash
export GITHUB_TOKEN=your_github_token_here
```

**Note:** This can be the same token or a different one, as long as it has `read:packages` permission.

### Step 3: Install the Package

```bash
npm install @naren-innowell/care-ui
# or
yarn add @naren-innowell/care-ui
```

### Step 4: Use the Package

```javascript
import { Button, Box, Heading } from '@naren-innowell/care-ui';

function MyComponent() {
  return (
    <Box padding="md">
      <Heading level={1}>Hello from Care UI</Heading>
      <Button variant="primary">Click Me</Button>
    </Box>
  );
}
```

## CI/CD Setup (GitHub Actions)

### For Publishing (in this repository)

The `.github/workflows/publish.yml` should be configured to automatically publish on releases.

### For Consuming Projects

Add to your consuming project's GitHub Actions workflow:

```yaml
- name: Install dependencies
  run: npm install
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Or create a custom secret with a Personal Access Token that has `read:packages` permission.

## Troubleshooting

### "401 Unauthorized" error
- Check that `GITHUB_TOKEN` is set: `echo $GITHUB_TOKEN`
- Verify the token has correct permissions
- Make sure the token hasn't expired

### "404 Not Found" when installing
- Ensure the package has been published
- Check that `.npmrc` is configured correctly in the consuming project
- Verify the token has `read:packages` permission

### Package not found
- Check the package name matches: `@naren-innowell/care-ui`
- Verify the registry URL is correct in `.npmrc`
- Ensure you have access to the `innowellteam` organization

## Security Best Practices

1. **Never commit tokens to git** - `.npmrc` is in `.gitignore`
2. **Use environment variables** - Don't hardcode tokens
3. **Use least privilege** - Only grant necessary permissions
4. **Rotate tokens regularly** - Update tokens periodically
5. **Use GitHub Actions secrets** - For CI/CD workflows

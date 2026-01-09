# Setting GitHub Secrets for Environment Variables

## Automatic Token (Recommended - Already Working!)

✅ **`secrets.GITHUB_TOKEN` is automatically provided by GitHub Actions**
- No setup required
- Automatically available in all workflows
- Has permissions based on workflow `permissions` section
- Your workflows are already configured to use it

## Setting Custom Secrets (If Needed)

If you want to use a **custom Personal Access Token** instead of the automatic one:

### Step 1: Generate a Personal Access Token

1. Go to GitHub → **Settings** → **Developer settings**
   - Direct link: https://github.com/settings/tokens
2. Click **Personal access tokens** → **Tokens (classic)**
3. Click **Generate new token** → **Generate new token (classic)**
4. Configure:
   - **Note**: `npm-publish-token` (or any descriptive name)
   - **Expiration**: Choose your preference
   - **Scopes** (check these):
     - ✅ `write:packages` (to publish packages)
     - ✅ `read:packages` (to read/install packages)
     - ✅ `repo` (if repository is private)
5. Click **Generate token**
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Add Secret to GitHub Repository

1. Go to your repository: `https://github.com/naren-innowell/care-ui`
2. Click **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Fill in:
   - **Name**: `NPM_PUBLISH_TOKEN` (or any name you prefer)
   - **Secret**: Paste the token you copied
6. Click **Add secret**

### Step 3: Update Workflow to Use Custom Secret

If you want to use a custom secret instead of `GITHUB_TOKEN`, update your workflows:

```yaml
env:
  GITHUB_TOKEN: ${{ secrets.NPM_PUBLISH_TOKEN }}
```

**But this is NOT necessary** - the automatic `secrets.GITHUB_TOKEN` works perfectly!

## Current Setup (No Changes Needed)

Your workflows are already correctly configured:

```yaml
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This uses the **automatic token** that GitHub provides, which:
- ✅ Works out of the box
- ✅ Has the right permissions (based on workflow `permissions`)
- ✅ Is automatically rotated for security
- ✅ No manual setup required

## When to Use Custom Secrets

Only use custom secrets if:
- You need a token with different permissions
- You're using a token from a different GitHub account
- You have specific security requirements

For most cases, **stick with the automatic `secrets.GITHUB_TOKEN`** - it's simpler and more secure!

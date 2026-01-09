# Publishing Options for Care UI

## Option 1: Publish to npmjs.com (Recommended for Public Packages)

**Benefits:**
- ✅ No authentication required for installation
- ✅ Can install with just: `npm install @naren-innowell/care-ui`
- ✅ Works like any other npm package
- ✅ No `.npmrc` configuration needed in consuming projects

**Setup:**

1. **Remove or comment out `publishConfig` in `package.json`:**
```json
// Remove this section:
// "publishConfig": {
//   "registry": "https://npm.pkg.github.com"
// }
```

2. **Login to npmjs.com:**
```bash
npm login
# Username: your-npm-username
# Password: your-npm-password
# Email: your-email
```

3. **Publish:**
```bash
npm publish
```

4. **Install in other projects (no token needed!):**
```bash
npm install @naren-innowell/care-ui
```

**Note:** You'll need to create an npm account at https://www.npmjs.com/signup if you don't have one.

---

## Option 2: Keep GitHub Packages (Current Setup)

**Benefits:**
- ✅ Integrated with GitHub
- ✅ Works with private packages
- ✅ Version tied to GitHub releases

**Drawbacks:**
- ❌ Requires authentication token for installation
- ❌ Consuming projects need `.npmrc` configuration
- ❌ More setup required

**Current Setup:**
- Publishing: Requires `GITHUB_TOKEN` with `write:packages`
- Installing: Requires `GITHUB_TOKEN` with `read:packages` + `.npmrc` config

---

## Recommendation

**For a public component library:** Use **npmjs.com** (Option 1)
- Easier for users to install
- No authentication required
- Standard npm workflow

**For private/internal packages:** Use **GitHub Packages** (Option 2)
- Better for organization-internal packages
- Integrated with GitHub
- Access control through GitHub

---

## Quick Switch Guide

### To Switch to npmjs.com:

1. Remove `publishConfig` from `package.json`
2. Remove `.npmrc` (or keep it but it won't be used)
3. `npm login` to npmjs.com
4. `npm publish`

### To Keep GitHub Packages:

Keep current setup - everything is already configured!

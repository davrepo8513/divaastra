/**
 * Commitlint configuration file
 *
 * ✅ Enforces conventional commit messages to maintain a clean commit history.
 * ✅ Valid examples:
 *   feat: add new feature
 *   fix: resolve bug
 *   chore: update configs
 */

module.exports = {
  // Use the conventional commits ruleset
  extends: ["@commitlint/config-conventional"],

  /**
   * Rules section (optional customization)
   * type-enum: defines allowed commit types
   * subject-case: ensures commit messages are in correct format
   */
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // ✅ New features
        "fix", // ✅ Bug fixes
        "chore", // ✅ Maintenance, configs, build tools
        "docs", // ✅ Documentation changes
        "style", // ✅ Formatting, missing semi-colons, etc.
        "refactor", // ✅ Code changes that are neither fixes nor features
        "test", // ✅ Adding or updating tests
        "perf", // ✅ Performance improvements
        "ci", // ✅ CI/CD related changes
      ],
    ],
    "subject-case": [2, "always", ["sentence-case", "lower-case"]],
  },
};

/**
 * 🚀 How to use:
 *
 * 1️⃣ Install commitlint:
 *    npm install --save-dev @commitlint/config-conventional @commitlint/cli
 *
 * 2️⃣ Create a commit-msg hook in .husky:
 *    #!/bin/sh
 *    . "$(dirname "$0")/_/husky.sh"
 *    npx commitlint --edit "$1"
 *
 * 3️⃣ Use commit messages like:
 *    feat: add user authentication
 *    fix: resolve login bug
 *    chore: update dependencies
 *
 * ❌ Wrong examples (will be rejected):
 *    "Added new feature"
 *    "bug fixes"
 */

# Git Credentials in VS Code

1. Set the credential helper to store:

```bash
git config --global credential.helper store
```
2. Then verify if you want:

```bash
git config --global credential.helper
```

3. A simple example when using Git Bash quoted from here (works for the current repository only, use --global for all repositories):

```bash
git config credential.helper store
```
```bash
git push http://example.com/repo.git
```

Username: < type your username >
Password: < type your password >

[several days later]

git push http://example.com/repo.git

[your credentials are used automatically]

# ESLint with Prettier

## Set up ESLint

[Guide](https://eslint.org/docs/latest/use/getting-started)

```
npm init @eslint/config
```

## Set up Prettier

[Guide](https://prettier.io/docs/en/install.html)

```
npm i -D prettier
echo {} > .prettierrc.json
```

## Combine the two

[Guide](https://github.com/prettier/eslint-config-prettier)

```
npm i -D eslint-config-prettier
```

.eslintrc:

```
{
  "extends": ["...", "prettier"]
}
```

## VSCode

[Guide](https://github.com/prettier/prettier-vscode)
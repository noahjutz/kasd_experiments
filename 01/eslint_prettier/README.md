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

## Troubleshooting

### !DOCTYPE is removed from hbs files

This is an unresolved [issue](https://github.com/prettier/prettier/issues/11223).

### VSCode tab width doesn't match prettier default

Workaround: cmd+shift+p -> indent using tabs

### import/no-unresolved

[Documentation](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unresolved.md)

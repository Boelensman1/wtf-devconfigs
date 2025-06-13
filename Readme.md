# Tsconfigs

tsconfig.json
```
{
  "extends": "@wtflegal/dev-configs/tsconfigs/tsconfig.json",
  "include": ["src", "vite.config.ts"]
}
```

tsconfig.node.json
```
{
  "extends": "@wtflegal/dev-configs/tsconfigs/tsconfig.node.json"
}
```

# Eslint
```
module.exports = {
  extends: [
    require.resolve('@wtflegal/dev-configs/eslints/vite-react.cjs')
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
}
```

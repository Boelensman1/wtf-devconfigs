# Tsconfigs

node
```
{
  "extends": "wtf-devconfigs/tsconfigs/node/tsconfig.json",
  "include": ["eslint.config.mjs", "src/**/*", "test/**/*"],
  "compilerOptions": {
    "noEmit": true
  }
}
```

vite+react
```

{
  "extends": "wtf-devconfigs/tsconfigs/vite/tsconfig.json",
  "include": ["lib", "vite.config.ts"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["lib/*"]
    }
  }
}
```

# Eslint
```
import sharedConfig from 'wtf-devconfigs/eslints/typescript.mjs'


export default [
  {
    ignores: ['build/**'],
  },
  // dev-configs currently does not have types yet
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...sharedConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
]
```

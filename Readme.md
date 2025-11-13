# Tsconfigs

node
```
{
  "extends": "wtf-devconfigs",
  "include": ["eslint.config.mjs", "src/**/*", "test/**/*"],
  "compilerOptions": {
    "noEmit": true
  }
}
```

vite+react
```

{
  "extends": "wtf-devconfigs",
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
import sharedConfig from 'wtf-devconfigs'

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

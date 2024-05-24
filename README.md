# React + TypeScript + Vite

## Installation

1. Run `npm init vite@latest` to start a new project with the latest versions.
2. Choose a project name, framework and variants.
3. Run `cd react-web-morthy && npm install` to install dependencies on new folder created.
4. Run `npm run dev` to start local server.

## Configurations (dev)

1. Run `git init` to create a git repo on local.
2. commit init changes on project and push repo.
3. Lets configure ESlint and prettier so they work togheter

- You can either remove ESlint or prettier and work with 1.
- `npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier`
- Add this config options to the .eslintrc.cjs

```json
{
	"extends": ["eslint:recommended", "prettier"],
	"plugins": ["prettier"],
	"rules": {
		"prettier/prettier": "error"
	}
}
```

4. Create Prettier Configuration (Optional) `.prettierrc`
5. Run Prettier to format code `npx prettier .`
6. If you change rules on prettier config is better to close and open code editor for changes to be reflected by ESlint. You can also reset cache of eslint.

## Download and install

1. Open terminal on desire folder to download project.
2. Run `git clone https://github.com/Defalt91/react-web-morthy.git`
3. Run `npm install` after download finish to install dependencies.

## To Do List

[ ] Create page design on Figma
[ ] Create main components and screens
[ ] Add custom hooks and api calls functionality
[ ]
[ ] Improve and detail web design
[ ] Apply unit testing
[ ] Add login and db login to app
[ ] Build app and deploy to cloud server

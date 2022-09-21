<h1 align="center">hnt-laptop</h1>

<div align="center">
A React based completely functional and expandable laptop for FiveM. Built with Lua & Typescript.
</div>



<div align="center">

[![License](https://img.shields.io/github/license/pedroscosta/hnt-laptop)](https://github.com/pedroscosta/hnt-laptop/blob/main/LICENSE)
</div>

## Getting Started

First clone the repository and place
it within your `resources` folder.

### Installation

*The laptop was made using `yarn` but is still compatible with
`npm`.*

Install dependencies by navigating to the `web` folder within
a terminal of your choice and type `yarn` or `npm i`.

### Adding new aps

To create a new app you must add the app to the `web/src/apps.tsx` file.

Following this model:

```typescript
{
    id: 'example-app', // App id (won't be displayed to the user, MUST BE UNIQUE)
    name: 'Example', // Display name
    icon: FaRegEye, // App icon name (remember to import it as well)
    color: '#74F2CE', // Background color of the app icon
    iconColor: 'white', // (OPTIONAL) Color of the icon itself
    app: <ExampleApp />, // React component of the app, no props will be passed to this, any data must be passed using React Context or any other method.
}
```

### Building

**Hot Builds In-Game**

When developing in-game, you can use the hot build system by
running the `start:game` script. This is essentially the start
script but it writes to disk. Meaning all that is required is a
resource restart to update the game script

**Usage**
```sh
# yarn
yarn start:game
# npm
npm run start:game
```

**Production Builds**

When you are done with development phase for your resource. You
must create a production build that is optimized and minimized.

You can do this by running the following:

```sh
yarn build 
npm run build
```





# OnlineStore

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Wishlist

1.  ~~Add event bindings to hide/show edit forms in the Admin dashboard.~~
2.  ~~Add CSS rules to alter the color of areas that behave like links when the cursor is hovered over them. This helps users better understand what is "clickable" and what isn't.~~
3.  Begin offering more than just Albums, and include different routes to display different types of inventory.
4.  Add a price property to each item you sell.
5.  Implement pipes to filter by price, type of object, or other properties.
6.  Allow users to add items to a cart (Hint: Services make great shopping carts!).
7.  Allow users to visit their cart, and "check out". They should receive a total cost for the order, and perhaps even a receipt.
8.  Add images, and styles throughout. Consider a design of your own invention, or emulate the general design of your favorite online store.

## Project Build
Download from [repo](https://github.com/GrapeSalad/online-store-test.git)
Run `ng -v` to ensure than your Angular is version 4.

| If Not Run One of these Commands |
| --- |
| For Windows |
|`npm install @angular/common@next @angular/compiler@next @angular/compiler-cli@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next @angular/animations@next --save` |
| For Linux/Mac |
|`npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@next --save` |

Run `npm install` to install all dependencies with Node Package Manager, then `bower install` to install the styling dependencies.

You will need a [Firebase API](https://firebase.google.com/) key to run this code.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#### SELF INSTRUCTION

**Project Creation**
`ng new online-store`

ENSURE `import './polyfills.ts';` is in the src/main.ts file

`npm init`
`bower init`

INSTALL BOWER DEPENDENCIES <br>
`bower install bootstrap --save` <br>
`bower install jquery --save`

Add bower to the .gitignore file

`ng serve`

`ng g component` component-name <br>
`ng g pipe` pipe-name <br>
`ng g class` class-name.model

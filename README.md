# Ecommerce

## Overview

One of the projects you will definitely have to work on is creating an e-commerce website. E-commerce websites are among the most common types of websites on the internet. Gaining experience in building e-commerce frontends provides practical, real-world development experience that is very valuable. Also, you will get to work with a CRUD application. You will get to test out at least two of the basic operations for managing data.

## Requirements

### Project Setup

Remember all the things you did in the movie project 🎬; you have to do them again by heart. No, no 😄, just kidding! The project is already set up for you. So, only focus on the project requirements 📋

The repo already includes the following:

1. Next.JS - This will be used as the main framework for the frontend.
2. TailwindCSS [Optional]- This comes as an option when setting up NextJS
3. Eslint - Also comes with Next.js. Enforces code quality.
4. Prettier - Enforces code format.
5. Husky - Used to run prettier + eslint before commiting the code. Saves time and ensures the code is formatted correctly and follows the correct coding standards.
6. Commitizen + Commitlint (Conventional Commits) - Used to follow the correct method of commiting your code
7. Lintstaged - Gives us the ability to run commands on staged files (ie: files that have not been commited yet)

### API

We will be using the API provided by this [API](https://fakestoreapi.com/) or this [API](https://fakeapi.platzi.com/) (Contains multiple **fake** images for the same product) You will focus mainly on the product API endpoint and you can check the website's documentation to find all the information you need to learn how to handle the pages.

#### API Example:

```js
https://fakestoreapi.com/products
```

### Core Functionality:

1. Fetch all the products. It will look something like this:

```
  [
    {"id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "description":"Your perfect pack for everyday use and walks in the forest....",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{"rate":3.9,"count":120},
    },
    {"id":2,
    "title":"Mens Casual Premium Slim Fit T-Shirts ",
    "price":22.3,
    "description":"Slim-fitting style, ....",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating":{"rate":4.1,"count":259}
    },
    // More products  here
  ]
```

2. Filter the products. by name, price, category , and rating.

3. Add items to the Shopping Cart, and Remove items from the Shopping Cart. Taking in consideration the quantity of items.

   ```
   const shoppingCart = [
   {
    id: 1,
    title: "Product 1",
    price: 29.99,
    image: "product1.jpg",
    quantity: 2, // You have to add this
    // Other item details you wish to show in Cart page
   },
   {
    id: 2,
    title: "Product 2",
    price: 49.99,
    quantity: 1, // You have to add this
    image: "product2.jpg",
    // Other item details you wish to show in Cart page
   },
   // More items can be added here
   ];
   ```

4. You need to keep the products you have in the Cart information so you can retrieve. Use [local storage](https://www.youtube.com/results?search_query=local+storage+react) to store or [Firestore](https://firebase.google.com/docs/firestore). We recommend using Firestore, you will get to practise Firebase as you will surely use it in the Capstone. [Context](https://react.dev/reference/react/useContext) might be helpful in moving the Cart information.

### Pages

You will need to create the following routes:

1. **All products** to show all products. This page should show all products and a filter that filters the products by name, price, category (you can get the list from the api),and rating.

2. **Product** page. Clicking on a product in **All products** page should show the selected product's information in this page. This page should have an add to cart button that will add this product to the cart. Use local storage to store the cart info (There are plenty of resources online on how to use it) or Firestore. You will also need to include quantity as well.

3. **Cart** page should show all the products in the cart (again you can get it from the local storage or Firestore if you used it). You will also need to have a button to remove a product from the cart. This page should also show the total payment.

### Code layout

All the code should be put inside the right places. Look at the following **example**:

```text
src/
├─ pages/
│  ├─ index.jsx           // Home page
│  ├─ products/
│     ├─ index.jsx        // Products page
│     ├─ [productId].jsx    // Single product page
├─ components/
│  ├─ Filter/
│     ├─ Filter.jsx
├─ util/
│  ├─ API.js // This is optional, but can help organize your API requests into functions that you import into the right place.
```

## Project Management **(VERY IMPORTANT)**

All the tasks in the project should be put inside the issues tab in Github. The project should also use the [Git WorkFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), so you have to utilize different branches/task. This way it will reduce the amount of conflicts that could be faced.

This project could be the best, but if it lacks any form of project management then you won't learn anything. So get over your fears, if there are any, and work on your Git work skills. It will help you immensely in the long run.

This will also help you out when you apply to jobs because potential employers will look at this project and be able to surmise what you have done and the fact that you understand Git workflow as well.

**On presentation day we will ask you to show us your Github**

## Git and commits

**Pull Requests**

- Go to the issues board and create a new issue with the task assigned to you.
- Assign the issue to yourself so others know who is working on this issue.
- Create a new pull request from that issue and also assign it to yourself, Github will automatically create a branch for you and give you instructions how to check it out.
- After finishing the work, push your code and assign the team leader on that pull request so they can review the code.

**Commit Message Format**

After you finish wrapping up the Setup of Commitizen inside the setup page, you will have to use `git cz` when you make a new commit to follow this convention.

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type** and a **subject**:

```
<type>: <subject>
<BLANK LINE>
<body>
```

The **header** is mandatory, while the **body** is optional but highly encouraged.

**Type**

Must be one of the following:

- **Build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **CI**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **Doc**: Documentation only changes
- **Feat**: A new feature
- **Fix**: A bug fix
- **Perf**: A code change that improves performance
- **Refactor**: A code change that neither fixes a bug nor adds a feature
- **Style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **Test**: Adding missing tests or correcting existing tests

**Subject**

The subject contains a succinct description of the change:

- use the imperative, present tense: “change” not “changed” nor “changes”
- don’t capitalize the first letter
- no dot (.) at the end

**Body**

Just as in the **subject**, use the imperative, present tense: “change” not “changed” nor “changes”. The body should include the motivation for the change and contrast this with previous behavior.

**All these things will already be handled for you using commitizen and commitlint**

**On presentation day we will ask you to show us your Github**

### Finalizing

After finishing the project, do the following:

1. Deploy the project on Netlify or Vercel so you can have a link to use it in your portfolio. Don't forget to add a link in your website that points to this project.
2. Remove everything from this README.md file and add the following content to it:
   1. A screenshot of the website.
   2. Your project's name.
   3. Description of the project.
   4. Tools used.
   5. Your names.

### Aesthetics

Styling everything on your from scratch will take a lot of time. However, there are some libraries that you can use to help you with styling.

#### Examples

1. [reactstrap](https://reactstrap.github.io/)
2. [Antd](https://ant.design/)
3. [chakra-ui](https://chakra-ui.com/)
4. [Material UI](https://mui.com/)
5. [tailwindcss](https://tailwindcss.com/)

There are a lot more than those, but these are the famous ones. Open them and check which ones seem easier for you and use them. Also, notice how I listed tailwindcss at the bottom. Thats because it doesn't come with ready components and you will need to develop things from scratch in some cases.

### Extra Bonus

If you haven't finished the above parts, you can skip this part.

You can work on all or one of the following:

- `[Easy]` You can add the Update quantity functionality.
- `[Intermediate]` If you went with the platzi api (The second mentioned api above), try to add a slider that shows all images of the product in the product page.
- `[Difficult]` Add a checkout page that can use an already made form for the users to add their credit card info and validate them. Note: there are some online libraries that give you the ability to do this.

### Key takeaways 🎉

If you finish this project you can be absolutely sure that you can work on any project in the future. Generally, you will be able to use the same tools and techniques you used here to build any website in the future.

#### Things you will practice while working on this project

- Enhance your web development skills:
  -Frontend Development: You'll gain expertise in building user interfaces, handling user interactions, and creating a seamless user experience.
  -Backend Development:
  -Full-Stack Development: E-commerce projects will an ideal opportunity to get a simple exposure to how we manage data.
- Be Ready for the Capstone:
  - The project will enhance your technical skills so you are ready for the capstone.
  - It will also help you upgrade your team work and communication so your life will be easier in the Capstone.
- You will get to add an awesome project to your portfolio.

#### Concerns to avoid -- no harm in repeat:

The following thoughts are traps; steer away from them:

- _`This project is huge! I don't think I'm going to be able to do it.`_ From your previous experiences, you know for a fact that everything starts big in the beginning but when you plan things and work on them they usually are not as big and scary as you thought.
- _`I don't know how to use [insert tool here] how am I going to deal with all of this?`_ Again, don't worry. You have dealt with so many unknown things and just like you learned how to use them, you will be able to learn how to use any tool you want as long as you check its documentation.
- _`[Right from the beginning] How am I going to fix the bonus topic?`_ DON'T GO THERE UNLESS YOU FINISH THE MAIN REQUIREMENTS FIRST!
- _`[After spending hours on an issue to fix it without reading the documentation or searching the issue on google] I will spend extra hours on this until I fix it`_ This is a trap. You should always read the documentation and search for the solution.
- _`I'm so tired now!!!😩 I've been trying to fix this bug for 3 hours!!!`_ In times like these, consider steping away from your computer and doing something else like playing with your pet, watching something funny, looking outside your window and enjoying cool air.

### Example of a working project

This website is a working example of a project that you can use to learn how to create an ecommerce website. Note that you won't to add everything in this website. So, you won't add reviews for example. https://github.com/iammelvink/react-complete-e-commerce

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

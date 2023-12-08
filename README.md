<br />

<p align="center">
  <img alt="logo" width="100" height="100" src="public%2Flogo.svg">
</p>

<br />

This is the first version of my personal website [https://www.datelle.net](https://www.datelle.net).
It's designed and built with Figma, Next.js and styled using CSS modules. I didn't use any CSS frameworks or libraries,
although I did keep the pre-bundled Tailwind CSS dependency that came with Next.js as part of the project.

This will be an ongoing project, and I'll be adding more features and content as time goes on. I'm also planning on
adding a blog section to the site at some point.

Feel free to use this for your own site if you'd like. Just make sure to change the content and images to your own and
give me attribution somewhere on your site. See below for more details on getting this running locally.

## Get the site running locally

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the dev version of the site.

`src/app/page.tsx` is the main page component. It's where all the sections are stored. The `src/components` directory contains
all the components and css used on the page. The `lib` directory contains all the data used to generate the content and the `mdx` directory
is where each job is stored in mdx format.

# recyclingWebsite

## Gatsby and React

[Gatsby](https://www.gatsbyjs.com/docs/) is just a tool that helps us develop our website without worrying about extraneous stuff. I think we shoul try to use to [React](https://reactjs.org/docs/getting-started.html), a library that uses Javascript to cleanly build a website/HTML elements. It's pretty straightforward and well-documented. There's probably a lot of 20-min youtube videos that explain the basics well.

Seems like Gatsby Cloud will also easily allow us to host our website online for final presentations.

## Setup

In the terminal/command prompt:

1. Install node.js then Gatsby (and git and an IDE if needed). Instructions on how to do that are [here](https://www.gatsbyjs.com/docs/tutorial/part-0/)

2. Clone this repo.

## How to run this site to test it

In the terminal/command prompt:

1. `cd` to the recyclingWebsite directory
2. `> gatsby develop`. 
    - If that doesn't work, you might have to do `npm install` and then try it again for it to work (that's what I had to do at least). Otherwise, check the [Gatsby documentation](https://www.gatsbyjs.com/docs/tutorial/part-1/#run-your-site-locally).
3. Go to the localhost link provided in the output, probably <http://localhost:8000>. The website should be up and running on this link, ready to be tested.

You should see saved changes instantly show up while running the development bundle. If they don't, try `Cmd/Ctrl + C` in the terminal to restart the development bundle.

## Website Features
1. Interactice (?) information session about what can and can't be recycled.
2. A quiz to test knowledge.
3. A tool that uses location data to direct users to their nearest recycling center.

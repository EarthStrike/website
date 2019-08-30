# Earth Strike Website (WIP)

## Preview/ live deployed demo

https://earthstrike-no-wp.netlify.com/


## What is this?

This is a partial static re-creation of our website. We're using this to help decide which CMS we want to switch to. Eventually, this will become our actual site, and this repository will be where all our work is done! hell yeah

## Steps for de-staticification

The stuff our CMS needs to be able to handle:

### General

- the head & header (styles, logo, & nav menu) should appear on every page and be fully customizable via HTML/CSS/JS/PHP. things like changing the title, modifying layout and making it responsive, etc
- the footer (scripts, social media links, & signup form) should likewise appear on every page and be fully customizable
- stylistic divs for section dividers and backgrounds should be dynamically added via PHP with a fancy algorithm. see divs with classes "div-top", "div-bottom", "corner-bg"
- in general, when there's an unordered list, the items in this list should be dynamically generated from an HTML template with content from a data table. specifics below

### Home

- the "Join Us!" form should be a separable component that can be added to other pages. changes made to it should be reflected everywhere
- the two sections with ids "plan" and "schedule" should likewise be a component that also appears on the About Us page. again, changes made to it should be reflected on both pages
- the FAQs should be records in a data table that is accessed by both this homepage and the FAQ page. any edits made to a question should be reflected on both pages, and when a new question is added to the FAQ page, there should be an option for whether it should be displayed on the homepage as well. ideally, our CMS will allow the HTML for each FAQ to be easily modified via the HTML itself, with template tags or something for where the content should be inserted
- the Contact Us section, like the "plan" and "schedule" sections, should be a component that also appears on the FAQ pages and stays updated between both pages. also, like the FAQ section, this section should take content for its "profile" list-items (of which there will eventually be more than one) from a data table, where image, name, position, and email are columns

### About Us

- the "blurb"s in the Principles section should be dynamically populated from a table with section, image, heading, subheading, and body as columns (hopefully self-explanatory)
- likewise with the Teams section - same column names

### Supporters

- you know the drill by now. these endorsements lists should be populated from a data table

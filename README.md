# AWESOMICONS
__*AwesomIcons*__ is a library that allows to use *SVG* icons with dynamic fill and stroke colors.

### HOW IT WORKS
__*AwesomIcons*__ does its job through two different steps:

1. by *NodeJS*, it reads *SVG* files within a folder specified by the user and stores their content in a *SASS* map using filenames as keys; next, the *SASS* map is written into a *SCSS* file choosen by the user;

2. by *SCSS*, it provides a mixin that allows the user to get an icon from the stored *SASS* map and to color it by passing to the mixin a list of colors.

### INSTALLATION
Move to the root of your project by terminal and run the following command to install __*AwesomIcons*__:

    npm install awesomicons [--save]

Then, add __./node_modules/awesomicons/lib/awesomicons.scss__ to your *SCSS* dependencies.

### PROJECT SETUP:
In order to use __*AwesomIcons*__:

1. save each icon in a separate *SVG* file and locate it in a dedicated folder (e.g. images/icons) which will contain only icon files;

2. for each *SVG* file, provide a replacement of fill/stroke attribute values with proper placeholders, according to the choise of using single-color or multi-color mode. In particular:

    - use *[fill | stroke]*="__{{\_\_AI-COLOR\_\_}}__" for single-color mode;

    - use *[fill | stroke]*="__{{\_\_AI-COLOR-*[#]*\_\_}}__", where *[#]* is the index of the color layer, for multi-color mode.

### USAGE:
Move to the root of your project by terminal and run the following command to init __*AwesomIcons*__:

    npm explore awesomicons -- npm run awesomicons [source] [destination] [--watch]

where:

- *[source]* is your project's icons folder path;

- *[destination]* is the filepath of SCSS file you want to use to store the SASS map in;

- *[--watch]* allows to listen for changes in icons folder, so the SASS map can be live updated when you add, remove or modify SVG files (optional).
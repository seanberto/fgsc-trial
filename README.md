
***
Website is build with SASS (use version 3.9.1) and Pug.

***
Pug-pages are in pug/ folder.
Pug-components are in pug/components/ .

***
Sass includes foundation, font awesome and custom components (sass/components/).
Also ther is custom file with SASS-variables - sass/_variables.sass.
Foundation settings file - sass/foundation-sites/settings/_settings.css
Custom variables is included into foundation settings.
Sass have some usefull mixins - sass/_mixins.sass.

***
GULP.JS is used for SASS, Pug compilcation, server, images optimizatoin etc.
To install it install Node.js and Gulp. Then in Command Line navigate to project folder and run npm install.
To run server use command "gulp".
To get production version - no soursemaps, optimized images, compressed css - run "gulp prod".
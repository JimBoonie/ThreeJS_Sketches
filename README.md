# Three.JS Sketches
This repository simply contains a collection of short projects that I wrote in order to explore the features of three.js and to showcase a little red pot I made in Maya.

# UBUNTU: SETUP
## Install HTTP server
```
sudo apt-get install nodejs npm
npm install http-server -g
```

# MAC: SETUP
## Install HTTP server
```
brew install node
npm install http-server -g
```

## start HTTP server
```
http-server /path/to/docroot
```
Then navigate to http://localhost:8080

#### Note:
If you receive an error "/usr/bin/env: node: No such file or directory" when trying to start the HTTP server, try creating a symbolic link to the correct folder:
```
ln -s /usr/bin/nodejs /usr/bin/node
```
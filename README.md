https://aqueous-reef-67752.herokuapp.com/

heroku create --buildpack https://github.com/mars/create-react-app-buildpack.git

heroku config:add NODE_ENV=production

npm start

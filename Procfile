web: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}

echo "RACK_ENV=development" >>.env
$ echo "PORT=3000" >> .env

echo ".env" >> .gitignore
$ git add .gitignore
$ git commit -m "add .env to .gitignore"

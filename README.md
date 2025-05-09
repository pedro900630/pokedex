<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run in Development

1. Clone the repository
2. Execute
```
npm install
```
3. Have Nest CLI installed
```
npm i -g @nestjs/cli
```

4. Start the database
```
docker-compose up -d
```

5. Rebuild the database with the seed
(POST) localhost:3000/api/v2/seed 


## Stack used
* MongoDB
* Nest


## Production Build
1.- Create the file `env.prod`.
2.- Create the new image `docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build`




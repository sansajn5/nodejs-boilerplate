# NodeJS Boilerplate 

#### Contains 
1. express <br />
2. Docker <br />
3. Knex <br />
4. Objection <br />
5. MySQL <br />
6. nodemon <br />
7. faker <br />

#### TODO 
1. security <br />
2. swagger <br />
3. mail <br />

#### How to use it 
##### Requiments 
```
1.node
2.docker
```

#### Steps
```
Build container:  docker-compose build
Run container: docker-compose up
Create database: 
    1. docker exec -it hermes-backend_db_1 /bin/sh
    2. mysql -u root -p
    3. create database hermes_transport
Run migration and seeder:
    1. docker exec  -it hermes-backend_api_1 /bin/sh
    2. yarn migrate
    3. yarn seed
```
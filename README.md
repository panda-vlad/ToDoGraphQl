# Before all 
```bash
install node 14.0.0
$ npm install pm2@latest -g
# or
$ yarn global add pm2
```

## RUN DEVELOPMENT VERSION
1. apt-get install mysql-server // (5.7.8 version)
2. run mysql-server: ```service mysql start```
3. create mysql schema 
    - create new db
    ```bash
    mysql -u $DB_USER_NAME -p$DB_PASSWORD -e 'DROP database IF EXISTS todo; CREATE DATABASE todo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;';
    ````
    - add password, db name and username in .env
4. npm install
5. npm run migration:dev
6. npm rn seed:dev
7. change .env file
8. npm run nodemon

## RUN PRODUCTION VERSION
1. apt-get install mysql-server // (5.7.8 version)
2. run mysql-server: 
```bash
service mysql start
```
3. create mysql schema 
    - create new db
    ```bash
    mysql -u $DB_USER_NAME -p$DB_PASSWORD -e 'DROP database IF EXISTS todo; CREATE DATABASE todo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;';
    ````
    - add password, db name and username in .env
4. npm install
5. npm run migration
6. change .env file
7. npm start

[API_DOC](./api/README.md)

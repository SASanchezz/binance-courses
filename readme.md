# To run docker containers with databases run the following command
```
docker-compose up -d --build
```

# To run 4 instances run the following command
```
npm run start-instances 
```
### You can change number of instances changing the number after -i
### Each of them logs their pid and last some added lastPrice to logs/process.txt


# To run redis checker run the following command
```
npm run check-redis
```
### It logs redis data every 1 second to logs/redis.txt
//Ve slozce s projektem pridana zaloha (=slozka dump)
//Nutne spustit z terminalu kontejneru proto:
docker exec -it mongodb bash

/usr/bin/mongodump --username admin --password admin > vystup.txt
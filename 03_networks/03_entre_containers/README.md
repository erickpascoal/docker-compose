#primeiro crie um network
docker network create minharede

#depois crie a imagem das duas apis em cada diretório
docker build -t api-python .
docker build -t api-node .

#depois crie os dois container utilizando as imagens na mesma rede (--network)
docker run -d --name c-api-python --network minharede api-python
docker run -d --name c-api-node --network minharede api-node
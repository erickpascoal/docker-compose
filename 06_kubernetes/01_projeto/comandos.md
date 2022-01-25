## DEPLOYMENT
### cria um deployment a partir de uma images (ja no docker hub)
kubectl create deployment flask-deployment --image=erickpascoal/flask-kub-projeto 

### verifica todos deployments ativos
kubectl get deployments

### detalha os deployments
kubectl describe deployments

## PODS
### verifica todos pods ativos
kubectl get pods

### detalha os pods
kubectl describe pods



## SERVICES
### comando para criar um service que expoe nosso pod (container)
kubectl expose deployment flask-deployment --type=LoadBalancer --port=5000

### Comando para visualizar services
kubectl get services

### Comando para deletar um service
kubectl delete service <NOME_SERVICE>


## MINIKUBE

## Comando para abrir dashboard
minikube dashboard --url 

### Visualiza configuração geral
kubectl config view

### Comando para servir um pod localmente
minikube service flask-deployment


##  SCALE
### Comando para replicar pods, para caso um servidor caia, ele tenha outros para suportar
### utilizar comando "kubectl get rs" parar verificar os pods replicados
kubectl scale deployment/flask-deployment --replicas=5

### Caso precise reduzir a quantidade de replicas dos pods, basta repetir o comando, passando um numero menor (3 por exemplo)
kubectl scale deployment/flask-deployment --replicas=3


## ATUALIZANDO IMAGEM DOS PODS
### Comando para atualizar imagem que está rodando nos pods
kubectl set image deployment/<NOME> <NOME_CONTAINER>=<NOVA_IMAGEM>

### Comando para verificar o status de atualização da imagem
#### Para melhor visualização, utilize um dashboard (minikube dashboard)
 kubectl rollout status deployment/flask-deployment

### Comando para dar rollback caso a atualização da imagem de errado
kubectl rollout undo deployment/flask-deployment 




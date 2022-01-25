## DEPLOYMENT
### cria um deployment a partir de uma images (ja no docker hub)
kubectl create deployment product-deployment --image=erickpascoal/product 

### verifica todos deployments ativos
kubectl get deployments

### Deleta deployment
kubectl delete deployment product-deployment

### detalha os deployments
kubectl describe deployments

## PODS
### verifica todos pods ativos
kubectl get pods

### detalha os pods
kubectl describe pods



## SERVICES
### comando para criar um service que expoe nosso pod (container)
kubectl expose deployment product-deployment --type=LoadBalancer --port=3000

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
minikube service product-deployment


##  SCALE
### Comando para replicar pods, para caso um servidor caia, ele tenha outros para suportar
### utilizar comando "kubectl get rs" parar verificar os pods replicados
kubectl scale deployment/product-deployment --replicas=5

### Caso precise reduzir a quantidade de replicas dos pods, basta repetir o comando, passando um numero menor (3 por exemplo)
kubectl scale deployment/product-deployment --replicas=3


## ATUALIZANDO IMAGEM DOS PODS
### Comando para atualizar imagem que está rodando nos pods
kubectl set image deployment/<NOME> <NOME_CONTAINER>=<NOVA_IMAGEM>

### Comando para verificar o status de atualização da imagem
#### Para melhor visualização, utilize um dashboard (minikube dashboard)
 kubectl rollout status deployment/product-deployment

### Comando para dar rollback caso a atualização da imagem de errado
kubectl rollout undo deployment/product-deployment 




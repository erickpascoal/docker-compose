## DEPLOYMENT
### cria um deployment a partir de uma images (ja no docker hub)
kubectl create deployment flask-deployment --image=erickpascoal/flask-kub-projeto 

### verifica todos deployments ativos
kubectl get deployment

### detalha os deployments
kubectl describe deployments

## PODS
### verifica todos pods ativos
kubectl get pods

### detalha os pods
kubectl describe pods
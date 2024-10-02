# API Gestion de Recettes

Cette API, développée avec **Express.js** et utilisant **MySQL** comme base de données, permet de gérer les recettes avec des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer). Elle permet une gestion flexible et efficace des recettes.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/) (v16 ou supérieure)
- [MySQL](https://www.mysql.com/)
- [Postman](https://www.postman.com/) (facultatif, pour tester l'API)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. Clonez le repository :

```bash
    git clone https://github.com/OUMARNDIAYE49/recette_api.git
```

2. Accédez au dossier du projet :

```bash
    cd recette_api
```

3. Installez les dépendances :

```bash
    npm install
```

4. Configurer la base de données :

- Assurez-vous que Mysql est en cours d'exécution sur votre machine locale.
- Mettez les paramètres de connexion dans db.js.
- Créez un fichier .env avec la configuration de votre base de données :

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=mots_de_passe
  DB_NAME=nom_de_la_base_de_donnée
  port=port_spécifier

MYSQL_ROOT_PASSWORD=mots de passe
MYSQL_DATABASE=nom_de_la_base_de_donnée

```
- Si vous connecte avec image docker

```bash
  DB_HOST=db
  DB_USER=root
  DB_PASSWORD=mots_de_passe
  DB_NAME=nom_de_la_base_de_donnée
  port=port_spécifier

MYSQL_ROOT_PASSWORD=mots de passe
MYSQL_DATABASE=nom_de_la_base_de_donnée

```

## Utilisation

Exécutez la commande suivante pour démarrer l'application, :

```bash
    npm start
```

## Routes disponibles

### 1. Récupérer toutes les recettes

- **URL** : `/recipes`
- **Méthode HTTP** : `GET`
- **Description** : Récupère toutes les recettes de la base de données.
- **Exemple** : http://localhost:4000/api/recipes/
- **Reponse** :
  ```bash
  [
   {
        "id": 1,
        "titre": "Tarte aux pommes",
        "ingredient": "Pommes, Pte feuillete, Sucre, Beurre, Cannelle",
        "type": "Dessert"
    },
    {
        "id": 2,
        "titre": "Spaghetti Carbonara",
        "ingredient": "Spaghetti, Lardons, ufs, Parmesan, Crme frache",
        "type": "Plat principal"
    },
    {
        "id": 3,
        "titre": "Salade Csar",
        "ingredient": "Salade romaine, Poulet, Crotons, Parmesan, Sauce Csar",
        "type": "Entre"
    },
    {
        "id": 4,
        "titre": "Soupe  loignon",
        "ingredient": "Oignons, Bouillon de buf, Pain, Fromage rp",
        "type": "Entre"
    },
    {
        "id": 5,
        "titre": "Brownie au chocolat",
        "ingredient": "Chocolat, Beurre, Sucre, ufs, Farine",
        "type": "Dessert"
    }
  ]
  ```

### 2. Récupérer une recette par son ID

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `GET`
- **Description** : Récupère une recette spécifique à partir de son ID.
- **Exemple URL** : http://localhost:4000/api/recipe/1
- **Reponse** :

  ```bash
  {
    "id": 1,
    "titre": "Tarte aux pommes",
    "ingredient": "Pommes, Pte feuillete, Sucre, Beurre, Cannelle",
    "type": "Dessert"
  }
  ```

### 3. Créer une nouvelle recette

- **URL** : `/recipes`
- **Méthode HTTP** : `POST`
- **Description** : Crée une nouvelle recette.
- **Exemple URL** : http://localhost:4000/api/recipes/
- **Corps de la requête** (JSON) :

```bash
{
   "titre": "Tarte aux pommes",
   "ingredient": "Pommes, Pâte feuilletée, Sucre, Beurre, Cannelle",
   "type": "dessert"
},

```

- **Reponse** :

```bash
{
    "message": "Recette ajoutée avec succès"
}
```

### 4. Mettre à jour une recette

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `PUT`
- **Description** : Met à jour les informations d'une recette existante en fonction de son ID.
- **Exemple URL** : http://localhost:4000/api/recipe/4

- **Corps de la requête** (JSON) :

  ```bash
  {
    "titre": "Salade Fruit",
    "ingredient": "Pommes, Pâte feuilletée, Sucre, Beurre, Cannelle",
    "type": "dessert"
  }
  ```

- **Reponse** :

```bash
{
    "message": "Mise à jour réussie avec succès"
}
```

### 5. Supprimer une recette

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `DELETE`
- **Description** : Supprime une recette existante en fonction de son ID.
- **Exemple URL** : http://localhost:4000/api/recipe/5
- **Reponse** :

```bash
{
    "message": "Suppression réussie avec succès"
}
```

## Collection de tests Postman

### Importer la collection Postman

Nous avons préparé une collection de requêtes Postman pour faciliter les tests de l'API. Vous pouvez l'importer dans Postman pour tester tous les endpoints CRUD (GET, POST, PUT, DELETE).

#### Étapes pour importer la collection :

1. Télécharger la collection Postman exportée en cliquant [ici](./src/collection.json).
2. Ouvrez Postman.
3. Cliquez sur **Importer** en haut à gauche.
4. Sélectionnez le fichier `.json` exporté et cliquez sur **Importer**.
5. Vous verrez la collection `recette_api` dans votre interface Postman.

## Comment exécuter les tests unitaires

Assurez-vous que votre base de données est configurée correctement avant d'exécuter les tests. Jasmine affichera un rapport des tests exécutés, ainsi que les résultats (succès ou échecs).

```bash
npm test
```

### Exemple de sortie lors de l'exécution des tests :

```bash
Jasmine started
CONNECTED

  Recette Model
    √ should create a recette
    √ should get all recettes
    √ should get a recette by ID
    √ should update a recette
    √ should delete a recette

Executed 5 of 5 specs SUCCESS in 0.13 sec.
```

- Cette commande lancera tous les tests définis dans les fichiers de test, notamment dans le répertoire `spec`.
- Le fichier principal de tests pour les opérations sur les recettes est `spec/recetteModel.spec.js`.

## Comment formater le code

```bash
npm run format
```

## Étapes pour construire et lancer le conteneur Docker

- Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine, ensuite :

1. Créer le fichier Dockerfile : Si ce n'est pas déjà fait, créez un fichier Dockerfile à la racine de votre projet avec les instructions nécessaires pour construire l'image de votre application.

2. Créer le fichier docker-compose.yml : Si vous utilisez Docker Compose, assurez-vous d'avoir un fichier docker-compose.yml configuré.

3. Construire l'image Docker : À la racine de votre projet, exécutez la commande suivante pour construire l'image Docker :

- Pour construire l'image Docker de l'API, utilisez la commande suivante :

```bash
docker build -t recette_api .
```

- Tester l'Image Localement : Après avoir construit l'image, vous pouvez la tester localement en exécutant la commande suivante :

```bash
docker run -p 4000:4000 recette_api
```

- Lancer le Conteneur avec Docker Compose : Pour lancer le conteneur en utilisant docker-compose, exécutez cette commande :

```bash
docker-compose up --build
```

- Déploye l’image sur DockerHub : Connexion à DockerHub
  si vous n'etes pas connecté, pour vous connecter à votre compte DockerHub, utilisez la commande suivante :

```bash
docker login
```

- Taguer et Pousser l'Image vers DockerHub : Taguez l'image Docker pour la préparer à être poussée sur DockerHub :

```bash
docker tag recette_api your-dockerhub-username/recette_app_api
```

- Enfin, poussez l'image taguée vers DockerHub :

```bash
docker push your-dockerhub-username/recette_app_api
```

Remplacer 'your-dockerhub-username' par votre nom d'utilisateur docker

## Lien de l'Image sur DockerHub.

https://hub.docker.com/r/oumarndiaye/recette_api/

## Auteur

[Oumar Ndiaye](https://github.com/OUMARNDIAYE49/OumarNDIAYE)

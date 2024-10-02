# API Gestion de Recettes

Cette API, développée avec **Express.js** et utilisant **MySQL** comme base de données, permet de gérer les recettes avec des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer). Elle permet une gestion flexible et efficace des recettes.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/) (v16 ou supérieure)
- [MySQL](https://www.mysql.com/)
- [Postman](https://www.postman.com/) (facultatif, pour tester l'API)
- [Docker](https://www.docker.com/)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. Clonez le repository :

```bash
    git clone https://github.com/Mohamed11abdallah/recette_api.git
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
- Ouvrez le terminal dans le dossier courant ensuite copiez la commande ci-dessous pour importez la base de donnée, en remplaçant user_name par votre nom d'utilisateur

```bash
    mysql -u user_name -p recette_db < recette_db.sql
```

- Mettez les paramètres de connexion dans db.js.
- Créez un fichier .env et un autre fichier .env.test :
- **.env** : Ce fichier sera utilisé par mysql en local
- **.env.test** : Ce fichier sera utilisé par image mysql
- Exemple : pour lancer en local

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=mots_de_passe
  DB_NAME=nom_de_la_base_de_donnée
  port=port_spécifier

MYSQL_ROOT_PASSWORD=mots de passe
MYSQL_DATABASE=nom_de_la_base_de_donnée
```

- Exemple : pour lancer par image mysql

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
      "titre": "Spaguettue",
      "ingredient": "Spagurttue viande Oignons pouvre_noir",
      "type": "plat"
    },
    {
      "id": 2,
      "titre": "Couscous",
      "ingredient": "Viande OIgnons sel couscous",
      "type": "plat"
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
    "titre": "Spaguettue",
    "ingredient": "Spagurttue viande Oignons pouvre_noir",
    "type": "plat"
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
  "titre": "Spaguettue",
  "ingredient": "Spagurttue viande Oignons pouvre_noir",
  "type": "plat"
},
{
  "titre": "Couscous",
  "ingredient": "Viande OIgnons sel couscous",
  "type": "plat"
}
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
- **Exemple URL** : http://localhost:4000/api/recipe/2

- **Corps de la requête** (JSON) :

  ```bash
  {
    "titre": "Couscous",
    "ingredient": "Viande Oignons sel couscous",
    "type": "plat"
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
- **Exemple URL** : http://localhost:4000/api/recipe/34
- **Reponse** :

```bash
{
    "message": "Suppression réussie avec succès"
}
```

## Collection de tests Postman

Nous avons préparé une collection de requêtes Postman pour faciliter les tests de l'API. Vous pouvez l'importer dans Postman pour tester tous les endpoints CRUD (GET, POST, PUT, DELETE).

#### Étapes pour importer la collection :

1. Télécharger la collection Postman exportée en cliquant [ici](./chemin/vers/votre/recette_db.postman_collection.json).
2. Ouvrez Postman.
3. Cliquez sur **Importer** en haut à gauche.
4. Sélectionnez le fichier `.json` exporté et cliquez sur **Importer**.
5. Vous verrez la collection `recette_db` dans votre interface Postman.

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
    √ should delete a recette
    √ should throw an error when creating a recette with invalid type
    √ should throw an error when creating a recette with invalid ingredients
    √ should get a recette by ID
    √ should get all recettes
    √ should throw an error when creating a recette with invalid title
    √ should create a recette
    √ should throw an error when updating a recette with invalid title
    √ should update a recette

Executed 9 of 9 specs SUCCESS in 0.171 sec.
Randomized with seed 38515.
```

- Cette commande lancera tous les tests définis dans les fichiers de test, notamment dans le répertoire `spec`.
- Le fichier principal de tests pour les opérations sur les recettes est `spec/recetteModel.spec.js`.

## Comment formater et Analyser le code

cette commande ci-dessous vous permet de formatter

```bash
npm run format
```

cette commande ci-dessous vous permet d'analyser si ya des incohérent et le corriger

```bash
npm run lint
```

## Containerisation Docker

- Lien de l'Image sur DockerHub :

https://hub.docker.com/r/mohamedabdallahi/api_recette/tags

- Lancer les conteneurs Docker :

```bash
docker-compose up -d
```

## Auteur

[Mohamed Abdallahi M'khaitir](https://github.com/Mohamed11abdallah)

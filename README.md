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
    git clone https://github.com/Mohamed11abdallah/recette_api.git
    cd recette_api
    npm install
```

## Utilisation

```bash
    npm start
```

## Routes disponibles

### 1. Récupérer toutes les recettes

- **URL** : `/recipes`
- **Méthode HTTP** : `GET`
- **Description** : Récupère toutes les recettes de la base de données.
- **Réponse** :
  ```json
  [
    {
      "id": 1,
      "title": "Recette A",
      "description": "Description de la recette A",
      "ingredients": "Ingrédients de la recette A",
      "instructions": "Instructions de la recette A"
    },
    {
      "id": 2,
      "title": "Recette B",
      "description": "Description de la recette B",
      "ingredients": "Ingrédients de la recette B",
      "instructions": "Instructions de la recette B"
    }
  ]
  ```

### 2. Récupérer une recette par son ID

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `GET`
- **Description** : Récupère une recette spécifique à partir de son ID.
- **Paramètres URL** :
  - `:id` : L'ID de la recette à récupérer.
- **Réponse en cas de succès** :
  ```json
  {
    "id": 1,
    "title": "Recette A",
    "description": "Description de la recette A",
    "ingredients": "Ingrédients de la recette A",
    "instructions": "Instructions de la recette A"
  }
  ```

### 3. Créer une nouvelle recette

- **URL** : `/recipes`
- **Méthode HTTP** : `POST`
- **Description** : Crée une nouvelle recette en ajoutant un titre, une description, des ingrédients et des instructions.
- **Corps de la requête** (JSON) :
  ```json
  {
    "title": "Nom de la recette",
    "description": "Description de la recette",
    "ingredients": "Liste des ingrédients",
    "instructions": "Instructions de préparation"
  }
  ```

### 4. Mettre à jour une recette

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `PUT`
- **Description** : Met à jour les informations d'une recette existante en fonction de son ID.

- **Paramètres de l'URL** :

  - `id` (entier) : L'ID de la recette à mettre à jour.

- **Corps de la requête** (JSON) :
  ```json
  {
    "title": "Nouveau titre de la recette",
    "description": "Nouvelle description de la recette",
    "ingredients": "Nouveaux ingrédients",
    "instructions": "Nouvelles instructions"
  }
  ```

### 5. Supprimer une recette

- **URL** : `/recipes/:id`
- **Méthode HTTP** : `DELETE`
- **Description** : Supprime une recette existante en fonction de son ID.

- **Paramètres de l'URL** :
  - `id` (entier) : L'ID de la recette à supprimer.

## Auteur

[Mohamed Abdallahi M'khaitir](https://github.com/Mohamed11abdallah) [Oumar Ndiaye](https://github.com/OUMARNDIAYE49/OumarNDIAYE)

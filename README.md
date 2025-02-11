# Micro Frontend Workshop - Romain Martinez

## 🎯 Objectif

Ce projet est une démonstration simple d'une architecture Micro Frontend utilisant Module Federation. Il comprend :

- Une application "shell" (container)
- Un micro frontend "header"

## 🏗️ Structure du Projet

Les applications seront accessibles aux URLs suivantes :

- Header MFE : http://localhost:3001
- Shell (Application hôte) : http://localhost:3000

## 🔄 Architecture

- Le shell agit comme un container qui charge dynamiquement le header-mfe
- Le header-mfe expose un composant Header via Module Federation
- Les deux applications partagent les mêmes versions de React et React-DOM grâce à la configuration des shared dependencies

## 👨‍💻 Développement

- Le shell est configuré pour charger le header-mfe depuis le port 3001
- Hot Module Replacement (HMR) est activé pour le développement
- TypeScript est configuré pour la vérification des types
- Les composants React sont chargés de manière lazy avec Suspense

Les applications seront automatiquement ouvertes dans votre navigateur par défaut aux URLs suivantes :

- Header MFE : http://localhost:3001
- Shell : http://localhost:3000

### Scripts disponibles

Dans chaque projet (shell et header-mfe) :

- `npm start` : Démarre l'application en mode développement
- `npm run build` : Crée une version de production

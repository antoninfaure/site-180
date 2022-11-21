# Site 180°C

Site web de 180°C, disponible à l'adresse
[antoninfaure.github.io/site-180](https://antoninfaure.github.io/site-180/).

## Introduction

Ce répertoire Git contient les fichiers _sources_ et _statiques_ du site de 180°C.

Ce site est un site dit _statique_, c'est à dire qu'une fois publié, aucun contenu
dynamique n'est généré par le serveur (mais cela n'empêche pas de modifier le site
en le publiant à nouveau, ce qui se fait en quelques secondes!).

Le générateur utilisé est [Hugo](https://gohugo.io), un des plus populaires et
des plus rapides à l'heure actuelle.

Une fois le site généré, celui-ci est publié à l'aide de 
[GitHub Pages](https://pages.github.com), qui a l'avantage d'être gratuit.

## Structure du projet

#### Partie "rédaction"

* `content/` : Contient le contenu des différentes pages. C'est dans ce dossier
que sont présents tous les textes du site (ou presque, voir ci-dessous).
* `assets/images`: Dossier où sont stockés les différentes photos utilisées sur
les pages du site

Les pages du dossier `content/` sont formatées en Markdown, un guide complet est
disponible [ici](https://www.markdownguide.org/basic-syntax/), mais sinon voici
un aperçu rapide de la syntaxe (rien de bien compliqué!) :
* Titre : `# Titre` va donner un grand titre, `## Titre` va donner un grand titre
mais un peu moins grand, jusqu'à `###### Titre` pour le plus petit titre. Cependant
il est recommandé de garder une structure linéaire (sans "sauter" de taille de titre).
* Texte en gras : `**texte**` va donner **texte**
* Lien : `[EPFL](https://epfl.ch)` va créer un lien vers https://epfl.ch:
[EPFL](https://epfl.ch)

Également certains textes présents sur toutes les pages du site sont situés dans
le fichier `config.json` à la racine du site.

#### Partie "technique"

* `layouts/` : Contient les templates html des différentes pages.

Voir la [documentation de Hugo](https://gohugo.io/getting-started/directory-structure/). 


## Prévisualisation du site en local

Le site peut être généré et consulté sur un ordinateur local disposant de
[Hugo](https://gohugo.io).

#### Installation d'Hugo

La première étape est d'installer [Hugo](https://gohugo.io), les étapes sont
indiquées [dans la documentation d'Hugo](https://gohugo.io/getting-started/installing/).

#### Prévisualisation

Une fois les prér-requis installés, le site peut être lancé en local avec la
commande suivante :
```
hugo -D server
```

(le -D permets de build les pages avec `draft: true`)


## Déploiement sur GitHub Pages

#### Build

Dans un premier temps il faut build les fichiers statiques :
```
hugo -D
```
Ces derniers sont créés dans le dossier `docs/`

#### Push

Il suffit maintenant de push les modifications sur le git :
```
git add .
git commit -m "nom du commit"
git push
```

#### Configuration de Github Pages

Pour la configuration de Github Pages il faut aller dans les Settings du git, puis Pages, et enfin bien s'assurer que la racine du déploiement est le dossier `/docs` de la branch `main`.
Le redéploiement s'effectue quelques minutes après un commit.


## Ajout d'une page sur Le Crieur

#### Structure du dossier

Dans un premier temps il faut créer 2 dossiers au nom du restaurant/bar :
* `assets/images/crieur/nom-du-restaurant/` : dossier où seront placées les images pour ce restaurant
* `content/crieur/nom-du-restaurant/index.md` : fichier qui décrit le contenu de la page

#### Modifier le contenu de la page


Exemple de `index.md`
```
title: Nom du restaurant
layout: single # Ne pas modifier
banner: images/crieur/nom-du-restaurant/nom-image.jpeg
adresse: Adresse du restaurant
types: # Lister les types correspondants à l'établissement
- restaurant
- bar
- cafe
style: Style du restaurant
takeaway: true # Pas obligatoire
vege: true # Pas obligatoire
vegan: true # Pas obligatoire
tips: Texte pour donner des conseils
price: ~25 CHF
front: images/crieur/nom-du-restaurant/image2.jpg # Pas obligatoire
map: url de la carte embeded de google
horaires:
- id: lundi # Ne pas modifier
  name: Lundi # Ne pas modifier
  start: 19:00
  end: 22:30
- id: mardi # Ne pas modifier
  name: Mardi # Ne pas modifier
  start: 19:00
  end: 22:30
- id: mercredi # Ne pas modifier
  name: Mercredi # Ne pas modifier
  start: 19:00
  end: 22:30
- id: jeudi # Ne pas modifier
  name: Jeudi # Ne pas modifier
  start: 19:00
  end: 22:30
- id: vendredi # Ne pas modifier
  name: Vendredi # Ne pas modifier
  start: 19:00
  end: 22:30
- id: samedi # Ne pas modifier
  name: Samedi # Ne pas modifier
  start: 19:00
  end: 23:00
- id: dimanche # Ne pas modifier
  name: Dimanche # Ne pas modifier
  start: 19:00
  end: 23:00
links: # Retirer les social sans informations
- social: site
  url: url du site de l'établissement
  icon: <i class="fas fa-globe"></i> # Ne pas modifier
- social: instagram
  url: url instagram de l'établissement
  icon: <i class="fab fa-instagram-square"></i> # Ne pas modifier
- social: tripadvisor
  url: url tripadvisor de l'établissement
  icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tripadvisor" width="30" height="30" viewBox="0 5 24 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="6.5" cy="13.5" r="1.5" /> <circle cx="17.5" cy="13.5" r="1.5" /> <path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5z" /> <path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5z" /> <path d="M10.5 15.5l1.5 2l1.5 -2" /> <path d="M9 6.75c2 -.667 4 -.667 6 0" /> </svg> # Ne pas modifier
- social: facebook
  url: url facebook de l'établissement
  icon: <i class="fab fa-facebook-square"></i> # Ne pas modifier
- social: twitter
  url: url twitter de l'établissement
  icon: <i class="fab fa-twitter-square"></i> # Ne pas modifier
tops: # Retirer si absent
- name: Nom du plat
  photo: images/crieur/nom-du-restaurant/image-du-plat.jpg
  description: description du plat (peut être vide)
  price: prix du plat
- name: Nom du plat 2
  photo: images/crieur/nom-du-restaurant/image-du-plat2.jpg
  description: description du plat 2 (peut être vide)
  price: prix du plat 2
---

Paragraphe de description de l'établissement

```
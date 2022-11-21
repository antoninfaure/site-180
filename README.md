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

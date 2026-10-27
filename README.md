# itamago.com

Site personnel de Pacôme Danhiez, publié depuis la racine de la branche `master` de ce dépôt sur GitHub Pages. Le domaine personnalisé est défini dans `CNAME`.

## Aperçu local

Sans installation de dépendances :

```powershell
node .\mockup\preview.mjs
```

Ouvrir <http://127.0.0.1:4173/> pour le site public, ou <http://127.0.0.1:4173/mockup/> pour la maquette de travail. Arrêter le serveur avec `Ctrl+C`.

## Organisation

- `index.html` : accueil public généré à partir de la maquette validée.
- `mockup/index.html`, `mockup/styles.css`, `mockup/app.js`, `mockup/logo.svg` : présentation et interactions.
- `mockup/content.js` : articles et références aux cours PDF, extraits des pages HTML existantes.
- `post/`, `mathematiques/`, `kung-fu/`, `politique/` : pages historiques conservées à leurs adresses d’origine.
- `images/`, `assets/`, `index.xml` : médias, documents et flux RSS existants.

## Mettre à jour le site

Après modification des pages historiques servant de sources aux articles ou aux cours :

```powershell
node .\mockup\build-content.mjs
```

Après modification de la structure ou des textes de l’accueil dans `mockup/index.html` :

```powershell
node .\mockup\prepare-site.mjs
```

Les styles et scripts sont partagés entre l’accueil public et la maquette. Vérifier l’aperçu local, puis commiter et pousser les fichiers sur `master` pour publier.

Le circuit de rédaction en Markdown reste à mettre en place ; les articles proviennent actuellement des pages HTML du site d’origine.

# itamago — proposition de refonte

Version de travail de l’accueil public. Le site à la racine reprend cette maquette validée.

## Ouvrir la maquette

Pour un aperçu local, depuis la racine du dépôt :

```powershell
node .\mockup\preview.mjs
```

Puis ouvrir <http://127.0.0.1:4173/mockup/> pour la maquette ou <http://127.0.0.1:4173/> pour l’accueil public. Arrêter avec `Ctrl+C`.

## Direction visuelle

- Un site personnel à la rédaction sobre et descriptive : papier crème, vert profond, détails vert sauge.
- Une typographie ample, un accent en italique et un symbole d’œuf dessiné en SVG.
- Les photos existantes, une illustration de grille hexagonale et une mise en page éditoriale.
- Une présentation adaptée aux écrans de bureau, tablettes et mobiles.

## Parcours disponibles

- Accueil avec sélection de cinq articles existants ; la sélection est éditoriale, les dates sont conservées.
- Filtres thématiques et archives complètes des 20 articles.
- Recherche des articles par titre, thème, mot-clé et extrait.
- Lecture des textes d’origine dans la nouvelle mise en page, avec liens directs dans l’URL.
- Vidéos YouTube chargées à la demande.
- Bibliothèque des résumés de maths, recherche et accès aux PDF ou au ZIP existant.
- Présentation de Pacôme, contact par email et lien vers le flux RSS existant.

Les textes de présentation et les libellés de navigation sont des propositions éditoriales. Les articles, leurs dates, les photos et les cours proviennent du site existant. Les liens externes et les vidéos nécessitent une connexion. Les anciennes formules LaTeX de l’article sur les groupes restent en notation source ; un lien vers le PDF permet de consulter le cours mis en page.

## Fichiers

`index.html`, `styles.css` et `app.js` composent la maquette. `content.js` contient les contenus extraits du site ; les images et PDF sont lus dans les dossiers existants, un niveau plus haut. Conserver cette structure pour copier la maquette.

Après modification d’un article dans le site d’origine, régénérer les contenus avec :

```powershell
node .\mockup\build-content.mjs
```

Après modification de `mockup/index.html`, mettre à jour l’accueil public avec :

```powershell
node .\mockup\prepare-site.mjs
```

Aucune dépendance ni compilation nécessaire. Les fichiers committés à la racine sont publiés par GitHub Pages après leur envoi sur `master`.

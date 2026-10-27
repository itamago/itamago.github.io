// Generated from the existing site by build-content.mjs.
window.ITAMAGO_CONTENT = {
  "posts": [
    {
      "id": "2020-04-27-bodycombat-covid-2",
      "title": "BodyCombat & COVID - Bis Repetita",
      "date": "2020-04-27",
      "tags": [
        "covid"
      ],
      "category": "Sport",
      "excerpt": "Oh yeah ! ça revient tranquillement et je recommence à me faire plaisir sans souffrir !",
      "content": "<p>Oh yeah ! ça revient tranquillement et je recommence à me faire plaisir sans souffrir !</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/05ioPvBLO2E\" frameborder=\"0\" allowfullscreen> </iframe>",
      "image": "../images/banner_home_training.jpg",
      "minutes": 1
    },
    {
      "id": "2020-04-17-bodycombat-covid-1",
      "title": "BodyCombat & COVID",
      "date": "2020-04-17",
      "tags": [
        "covid"
      ],
      "category": "Sport",
      "excerpt": "Je me remets progressivement du COVID, mais je ne tiens toujours pas un entrainement complet sans être épuisé avant la fin…",
      "content": "<p>Je me remets progressivement du COVID, mais je ne tiens toujours pas un entrainement complet sans être épuisé avant la fin&hellip;</p>\n<p>Ça va revenir, faut être patient et tenace !</p>\n<p>Courage à ceux qui récupèrent de ce virus !!</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SnedThjmZfE\" frameborder=\"0\" allowfullscreen> </iframe>",
      "image": "../images/banner_home_training.jpg",
      "minutes": 1
    },
    {
      "id": "2020-04-05-python3-pour-macos",
      "title": "Python3 pour macOS",
      "date": "2020-04-05",
      "tags": [
        "code"
      ],
      "category": "Informatique",
      "excerpt": "Les différentes manières d’installer Python3 sur macOS : The right and wrong way to set Python 3 as default on a Mac",
      "content": "<p>Les différentes manières d&rsquo;installer Python3 sur macOS : <a href=\"https://opensource.com/article/19/5/python-3-default-mac\">The right and wrong way to set Python 3 as default on a Mac</a></p>\n<p>En résumé, voici ce qu&rsquo;il faut faire.</p>\n<pre><code>$ brew install pyenv\n$ pyenv install 3.7.7\n$ pyenv global 3.7.7\n$ pyenv version\n$ echo -e 'if command -v pyenv 1&gt;/dev/null 2&gt;&amp;1; then\\n  eval &quot;$(pyenv init -)&quot;\\nfi' &gt;&gt; ~/.zshrc\n</code></pre>",
      "image": "../images/banner_xcode.jpg",
      "minutes": 1
    },
    {
      "id": "2020-04-05-sublime-convert-tabs-to-spaces",
      "title": "SublimeText : convertion automatique tabs-to-spaces",
      "date": "2020-04-05",
      "tags": [
        "code"
      ],
      "category": "Informatique",
      "excerpt": "Un truc qui me gène depuis un moment, ce sont les fichiers avec des tabs plutôt que des espaces.",
      "content": "<p>Un truc qui me gène depuis un moment, ce sont les fichiers avec des tabs plutôt que des espaces.</p>\n<p>SublimeText permet d&rsquo;effectuer une conversion manuelle, fichier par fichier, via le petit menu en bas à droite. Mais rien n&rsquo;est proposé pour effectuer ça de manière automatique.</p>\n<p>J&rsquo;ai trouvé un petit script autorisant de faire ça. Il faut créer un fichier <code>ExpandTabsOnSave.py</code> dans le repertoire Packages/user de SublimeText, contenant le code suivant :</p>\n<pre><code>import sublime, sublime_plugin, os\n\nclass ExpandTabsOnSave(sublime_plugin.EventListener):\n  # Run ST's 'expand_tabs' command when saving a file\n  def on_pre_save(self, view):\n    if view.settings().get('expand_tabs_on_save') == 1:\n      view.window().run_command('expand_tabs')\n</code></pre><p>Ensuite, on peut utiliser cette option dans un <code>Project</code> SublimeText :</p>\n<pre><code>&quot;settings&quot;: {\n    &quot;expand_tabs_on_save&quot;: true\n}\n</code></pre><p>ou bien au global dans le fichier de <code>Settings</code> :</p>\n<pre><code>&quot;expand_tabs_on_save&quot;: true\n</code></pre><p>And voilà !</p>",
      "image": "../images/banner_xcode.jpg",
      "minutes": 1
    },
    {
      "id": "2020-03-31-covid-confinement-week-3",
      "title": "Confinement COVID - Semaine 3",
      "date": "2020-03-31",
      "tags": [
        "covid"
      ],
      "category": "Sport",
      "excerpt": "Avec le confinement qui se prolonge en France, pas d’autre choix que de resister au COVID en s’entrainant à la maison !",
      "content": "<p>Avec le confinement qui se prolonge en France, pas d&rsquo;autre choix que de resister au COVID en s&rsquo;entrainant à la maison !</p>\n<p>Je reconnais avoir énormément de chance de pouvoir m&rsquo;entrainer chez moi.. mais ça ne remplacera jamais les entrainements collectifs qui sont 1000 fois plus motivants !</p>\n<p>Sinon, je recommence à lire d&rsquo;anciennes BD pour m'évader un peu aussi</p>\n\n\n<figure class=\"half\">\n\t<a href=\"../images/maison/home_training_1.jpeg\"><img src=\"../images/maison/home_training_1.jpeg\" alt=\"\"></a>\n\t<a href=\"../images/maison/home_training_2.jpeg\"><img src=\"../images/maison/home_training_2.jpeg\" alt=\"\"></a>\n</figure>",
      "image": "../images/banner_home_training.jpg",
      "minutes": 1
    },
    {
      "id": "2018-01-14-black-eyed-peas-back-copy",
      "title": "Black Eyed Peas sont de retour",
      "date": "2018-01-14",
      "tags": [
        "code"
      ],
      "category": "Culture",
      "excerpt": "Les BEP sont de retour avec un titre old school.",
      "content": "<p>Les BEP sont de retour avec un titre old school.</p>\n<p>Sans aucune hésitation, c&rsquo;est le meilleur son en ce début d&rsquo;année 2018.</p>\n\n\n<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/1EC8lBwroOc\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
      "image": "../images/banner_bleack_eyed_peas.jpg",
      "minutes": 1
    },
    {
      "id": "2018-01-02-macos-vulnerability-0day-copy",
      "title": "Faille macOS 0-day",
      "date": "2018-01-02",
      "tags": [
        "code"
      ],
      "category": "Informatique",
      "excerpt": "Une faille macOS active sur toutes les version depuis 2002.",
      "content": "<p>Une faille macOS active sur toutes les version depuis 2002.</p>\n<p>Le codeur est très pédagogue, il y va progressivement, et même un novice en sécurité pourra comprendre comment il s&rsquo;y est pris.</p>\n<p>Une lecture à ne pas manquer : <a href=\"https://siguza.github.io/IOHIDeous/\">IOHIDeous</a></p>",
      "image": "../images/banner_code_hack.jpg",
      "minutes": 1
    },
    {
      "id": "2017-12-09-hexagonal-grids-resources",
      "title": "Hexagonal Grids",
      "date": "2017-12-09",
      "tags": [
        "code"
      ],
      "category": "Informatique",
      "excerpt": "Nouveau projet perso en cours : jeu de stratégie héxagonal.",
      "content": "<p>Nouveau projet perso en cours : jeu de stratégie héxagonal.</p>\n<p>Un site fantastique présentant la partie technique héxagonale : <a href=\"https://www.redblobgames.com/grids/hexagons/\">RedBlobGames</a></p>\n<p>Quelques captures d'écran dans pas longtemps.</p>",
      "image": "../images/banner_hexgrids.jpg",
      "minutes": 1
    },
    {
      "id": "2017-06-17-serre-permaculture",
      "title": "Serre à permaculture",
      "date": "2017-06-17",
      "tags": [
        "jardin"
      ],
      "category": "Jardinage",
      "excerpt": "En cherchant des aménagements pour mon jardin, j’ai découvert le site d’une association qui tente de développer des techniques open-source pour le recyclage ou la culture.",
      "content": "<p>En cherchant des aménagements pour mon jardin, j&rsquo;ai découvert le site d&rsquo;une association qui tente de développer des techniques open-source pour le recyclage ou la culture.</p>\n<p>Le site de l&rsquo;association : <a href=\"https://myfood.eu/\">MyFood</a></p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fi728-dgViU\" frameborder=\"0\" allowfullscreen> </iframe>\n\n<p>Certains concepts sont complexes à mettre en oeuvre pour un particuliers, mais il y a pas mal de tips pour créer une serre à moindre coût et ainsi produire des fruits / légumes toute l&rsquo;année. C&rsquo;est quand même plus fun qu&rsquo;avoir un simple potager qui dure 4 mois dans l&rsquo;année !</p>\n<p>Voici un exemple de toute petite serre:</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/WeUh74s2m30\" frameborder=\"0\" allowfullscreen> </iframe>",
      "image": "../images/banner_permaculture.jpg",
      "minutes": 1
    },
    {
      "id": "2017-03-06-maths-groupes",
      "title": "Maths - Groupes",
      "date": "2017-03-06",
      "tags": [
        "maths"
      ],
      "category": "Mathématiques",
      "excerpt": "Un résumé de cours consacré aux groupes et à leurs propriétés.",
      "content": "<hr>\n<h1 id=\"i-rappels\">I) Rappels</h1>\n<h2 id=\"1-groupes\">1) Groupes</h2>\n<h3 id=\"a-définition\">a/ Définition</h3>\n<p>$$ \\left(G,\\ast\\right);est;un;groupe;\\Leftrightarrow\\ $$</p>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted -->G<!-- raw HTML omitted --><!-- raw HTML omitted -->,<!-- raw HTML omitted --><!-- raw HTML omitted --><em><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted -->s<!-- raw HTML omitted --><!-- raw HTML omitted -->t<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->u<!-- raw HTML omitted --><!-- raw HTML omitted -->n<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->g<!-- raw HTML omitted --><!-- raw HTML omitted -->r<!-- raw HTML omitted --><!-- raw HTML omitted -->o<!-- raw HTML omitted --><!-- raw HTML omitted -->u<!-- raw HTML omitted --><!-- raw HTML omitted -->p<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->⇔<!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted -->G<!-- raw HTML omitted --><!-- raw HTML omitted -->≠<!-- raw HTML omitted --><!-- raw HTML omitted -->∅<!-- raw HTML omitted --><!-- raw HTML omitted -->,<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->a<!-- raw HTML omitted --><!-- raw HTML omitted -->v<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted -->c<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted --></em><!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->l<!-- raw HTML omitted --><!-- raw HTML omitted -->o<!-- raw HTML omitted --><!-- raw HTML omitted -->i<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->d<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->c<!-- raw HTML omitted --><!-- raw HTML omitted -->o<!-- raw HTML omitted --><!-- raw HTML omitted -->m<!-- raw HTML omitted --><!-- raw HTML omitted -->p<!-- raw HTML omitted --><!-- raw HTML omitted -->o<!-- raw HTML omitted --><!-- raw HTML omitted -->s<!-- raw HTML omitted --><!-- raw HTML omitted -->i<!-- raw HTML omitted --><!-- raw HTML omitted -->t<!-- raw HTML omitted --><!-- raw HTML omitted -->i<!-- raw HTML omitted --><!-- raw HTML omitted -->o<!-- raw HTML omitted --><!-- raw HTML omitted -->n<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->i<!-- raw HTML omitted --><!-- raw HTML omitted -->n<!-- raw HTML omitted --><!-- raw HTML omitted -->t<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted -->r<!-- raw HTML omitted --><!-- raw HTML omitted -->n<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><em><!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->a<!-- raw HTML omitted --><!-- raw HTML omitted -->s<!-- raw HTML omitted --><!-- raw HTML omitted -->s<!-- raw HTML omitted --><!-- raw HTML omitted -->o<!-- raw HTML omitted --><!-- raw HTML omitted -->c<!-- raw HTML omitted --><!-- raw HTML omitted -->i<!-- raw HTML omitted --><!-- raw HTML omitted -->a<!-- raw HTML omitted --><!-- raw HTML omitted -->t<!-- raw HTML omitted --><!-- raw HTML omitted -->i<!-- raw HTML omitted --><!-- raw HTML omitted -->v<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --></em><!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->a<!-- raw HTML omitted --><!-- raw HTML omitted -->d<!-- raw HTML omitted --><!-- raw HTML omitted -->m<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted -->t<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->u<!-- raw HTML omitted --><!-- raw HTML omitted -->n<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->é<!-- raw HTML omitted --><!-- raw HTML omitted -->l<!-- raw HTML omitted --><!-- raw HTML omitted -->é<!-- raw HTML omitted --><!-- raw HTML omitted -->m<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted -->n<!-- raw HTML omitted --><!-- raw HTML omitted -->t<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->n<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted -->u<!-- raw HTML omitted --><!-- raw HTML omitted -->t<!-- raw HTML omitted --><!-- raw HTML omitted -->r<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted -->∀<!-- raw HTML omitted --><!-- raw HTML omitted -->x<!-- raw HTML omitted --><!-- raw HTML omitted -->,<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->∃<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->u<!-- raw HTML omitted --><!-- raw HTML omitted -->n<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted -->s<!-- raw HTML omitted --><!-- raw HTML omitted -->y<!-- raw HTML omitted --><!-- raw HTML omitted -->m<!-- raw HTML omitted --><!-- raw HTML omitted -->é<!-- raw HTML omitted --><!-- raw HTML omitted -->t<!-- raw HTML omitted --><!-- raw HTML omitted -->r<!-- raw HTML omitted --><!-- raw HTML omitted -->i<!-- raw HTML omitted --><!-- raw HTML omitted -->q<!-- raw HTML omitted --><!-- raw HTML omitted -->u<!-- raw HTML omitted --><!-- raw HTML omitted -->e<!-- raw HTML omitted --><!-- raw HTML omitted --> <!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted -->x<!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted -->-<!-- raw HTML omitted --><!-- raw HTML omitted -->1<!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2 id=\"2-sous-groupes\">2) Sous-groupes</h2>\n<h2 id=\"3-morphisme-de-groupes\">3) Morphisme de groupes</h2>\n<h2 id=\"4-sous-groupe-monogène-sous-groupe-cyclique\">4) Sous-groupe monogène, sous-groupe cyclique</h2>\n<h2 id=\"5-produit-de-deux-groupes\">5) Produit de deux groupes</h2>\n<hr>\n<h1 id=\"ii-sous-groupe-engendré-par-une-partie\">II) Sous-groupe engendré par une partie</h1>\n<pre><code>$$ z = r \\cdot (\\sin{\\phi} + \\cos{\\phi} \\cdot i) $$\n</code></pre>\n<p>donne:\n$$ z = r \\cdot (\\sin{\\phi} + \\cos{\\phi} \\cdot i) $$</p>\n<p>On peut aussi écrire en &ldquo;inline&rdquo; :  $a^n + b^2 = c^2$.</p>\n<p><strong>Ex</strong>: Si $a \\ne 0$, alors il y a deux solutions à \\(ax^2 + bx + c = 0\\) et elles sont:</p>\n<p>$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$</p>\n<h2 id=\"ce-qui-a-guidé-mon-choix\">Ce qui a guidé mon choix</h2>\n<p>J&rsquo;ai choisi un système de <em>blog statique</em> :</p>\n<ul>\n<li>pas de base de données,</li>\n<li>écriture des textes en markdown,</li>\n<li>facile à maintenir,</li>\n<li>génération des pages en ligne de commande</li>\n</ul>\n<p>Simple et rapide :)</p>\n<blockquote>\n<p>“La simplicité est la sophistication suprême.” - Leonardo Da Vinci</p>\n</blockquote>\n<hr>\n<h2 id=\"laffichage-de-code-source\">L&rsquo;affichage de code source</h2>\n<p>Ce genre de blog est véritablement pratique pour écrire du <code>code</code>.<br>\nC&rsquo;est mon premier critère de choix.<br>\nPar exemple les <strong>snipets</strong> peuvent s'écrire très facilement et le code reste lisible :</p>\n<!-- raw HTML omitted -->\n<!-- raw HTML omitted -->\n<p>Plusieurs langages sont supportés.</p>\n<hr>\n<h2 id=\"les-ressources-graphiques\">Les ressources graphiques</h2>\n<p>Il est aussi très simple d&rsquo;inclure des images ou des vidéos dans ce blog.<br>\nQuelques lignes suffisent.</p>\n<!-- raw HTML omitted -->\n<p>Et une vidéo :</p>\n<!-- raw HTML omitted -->\n<hr>\n<h2 id=\"affichage-de-tables\">Affichage de tables</h2>\n<table>\n<thead>\n<tr>\n<th align=\"left\">Header1</th>\n<th align=\"center\">Header2</th>\n<th align=\"right\">Header3</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"left\">cell1</td>\n<td align=\"center\">cell2</td>\n<td align=\"right\">cell3</td>\n</tr>\n<tr>\n<td align=\"left\">cell4</td>\n<td align=\"center\">cell5</td>\n<td align=\"right\">cell6</td>\n</tr>\n<tr>\n<td align=\"left\">cell1</td>\n<td align=\"center\">cell2</td>\n<td align=\"right\">cell3</td>\n</tr>\n<tr>\n<td align=\"left\">cell4</td>\n<td align=\"center\">cell5</td>\n<td align=\"right\">cell6</td>\n</tr>\n<tr>\n<td align=\"left\">Foot1</td>\n<td align=\"center\">Foot2</td>\n<td align=\"right\">Foot3</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2 id=\"des-boutons\">Des boutons</h2>\n<!-- raw HTML omitted -->\n<p>Aussi une boite à remarques :</p>\n<!-- raw HTML omitted -->\n<hr>\n<h2 id=\"support-de-mathjax\">Support de MathJax</h2>\n<pre><code>$$ z = r \\cdot (\\sin{\\phi} + \\cos{\\phi} \\cdot i) $$\n</code></pre>\n<p>donne:\n$$ z = r \\cdot (\\sin{\\phi} + \\cos{\\phi} \\cdot i) $$</p>\n<p>On peut aussi écrire en &ldquo;inline&rdquo; :  $a^n + b^2 = c^2$.</p>\n<p><strong>Ex</strong>: Si $a \\ne 0$, alors il y a deux solutions à \\(ax^2 + bx + c = 0\\) et elles sont:</p>\n<p>$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$</p>",
      "image": "../images/mathematiques.jpg",
      "minutes": 3
    },
    {
      "id": "2016-06-18-maths-et-kungfu",
      "title": "Maths et KungFu",
      "date": "2016-06-18",
      "tags": [
        "kungfu"
      ],
      "category": "Sport",
      "excerpt": "J’ai enfin pris le temps de remplir deux pages concernant les mathématiques et le KungFu:",
      "content": "<p>J&rsquo;ai enfin pris le temps de remplir deux pages concernant les mathématiques et le KungFu:</p>\n<ul>\n<li><a href=\"../mathematiques/\">Page des Mathématiques</a></li>\n<li><a href=\"../kung-fu/\">Page du KungFu</a></li>\n</ul>\n<p>Vous y trouverez des cours de maths, ainsi qu&rsquo;une petite video d&rsquo;entrainement de KungFu.\nJe vais alimenter ces pages régulièrement (et quand j&rsquo;ai le temps!)</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/TefZOdxFSFY\" frameborder=\"0\" allowfullscreen> </iframe>",
      "image": "../images/banner_kungfu.jpg",
      "minutes": 1
    },
    {
      "id": "2016-01-31-unravel",
      "title": "Le ravissant Unravel",
      "date": "2016-01-31",
      "tags": [
        "jeux"
      ],
      "category": "Culture",
      "excerpt": "Un jeu qui me donne envie de sortir des billets du portefeuille.",
      "content": "<p>Un jeu qui me donne envie de sortir des billets du portefeuille.</p>\n<p>Ce jeu est <strong>beau</strong> et <strong>doux</strong>. Techniquement, on a beaucoup de choses à dire aussi. Mais c&rsquo;est la direction artistique qui est fabuleuse, car le jeu semble homogène de bout en bout.</p>\n<p>J&rsquo;ai hâte de le tester !</p>\n<p><a href=\"http://www.unravelgame.com\">Site officiel</a></p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QpnY1G3vt_0\" frameborder=\"0\" allowfullscreen> </iframe>",
      "image": "../images/banner_unravel.jpg",
      "minutes": 1
    },
    {
      "id": "2016-01-24-kim-jung-gi",
      "title": "Découverte : Kim Jung Gi",
      "date": "2016-01-24",
      "tags": [
        "dessin"
      ],
      "category": "Culture",
      "excerpt": "Rien à voir avec la Corée du Nord !",
      "content": "<p>Rien à voir avec la Corée du Nord !</p>\n<p>Il s&rsquo;agit d&rsquo;un dessinateur <strong>extrêmement talentueux</strong> que j&rsquo;ai tardivement découvert.</p>\n<h2 id=\"quelques-dessins-pour-donner-une-idée\">Quelques dessins pour donner une idée</h2>\n<p>Ces images sont gracieusement empruntées sur le web (Google image) pour vous donner un aperçu de son talent.</p>\n\n\n<figure class=\"half\">\n\t<a href=\"../images/kim-jung-gi/kim-jung-gi-2.jpg\"><img src=\"../images/kim-jung-gi/kim-jung-gi-2.jpg\" alt=\"\"></a>\n\t<a href=\"../images/kim-jung-gi/kim-jung-gi-3.jpg\"><img src=\"../images/kim-jung-gi/kim-jung-gi-3.jpg\" alt=\"\"></a>\n</figure>\n\n<figure class=\"half\">\n\t<a href=\"../images/kim-jung-gi/kim-jung-gi-1.jpg\"><img src=\"../images/kim-jung-gi/kim-jung-gi-1.jpg\" alt=\"\"></a>\n\t<a href=\"../images/kim-jung-gi/kim-jung-gi-4.jpg\"><img src=\"../images/kim-jung-gi/kim-jung-gi-4.jpg\" alt=\"\"></a>\n</figure>\n\n<p>C&rsquo;est magnifique. Les détails sont incroyablement subtils : regardez comme il trace un visage expressif avec quelques lignes seulement, sans rajouter de détails ou d&rsquo;ombres. Un coup de pinceau et l&rsquo;image devient vivante. C&rsquo;est très rare de voir autant de talent chez un dessinateur, et c&rsquo;est surtout bluffant de voir sa vitesse de travail (vidéo ci-dessous).</p>\n<h2 id=\"un-dessin-en-live\">Un dessin en live</h2>\n<p>Impressionnant par sa vitesse d&rsquo;execution. Sans aucune erreur.</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uNtmdB6N5Qo\" frameborder=\"0\"> </iframe>\n\n<h2 id=\"quelques-liens\">Quelques liens</h2>\n<p>Voici quelques liens pour les intéressés:</p>\n<ul>\n<li><a href=\"http://www.superani.com\">SUPERANI, site professionnel de l&rsquo;auteur</a></li>\n<li><a href=\"http://www.kimjunggi.net\">Site officiel Européen</a></li>\n</ul>",
      "image": "../images/banner_kim-jung-gi.jpg",
      "minutes": 1
    },
    {
      "id": "2016-01-17-ImGUI-investigations",
      "title": "Une GUI simple et efficace",
      "date": "2016-01-17",
      "tags": [
        "code"
      ],
      "category": "Informatique",
      "excerpt": "Après de longues investigations le mois dernier, j’ai enfin porté mon choix sur une API de GUI simple et efficace : ImGUI .",
      "content": "<p>Après de longues investigations le mois dernier, j&rsquo;ai enfin porté mon choix sur une API de GUI simple et efficace : <a href=\"https://github.com/ocornut/imgui\">ImGUI</a>.</p>\n<h2 id=\"ce-qui-a-guidé-mon-choix\">Ce qui a guidé mon choix</h2>\n<p>J&rsquo;ai décidé de conserver <strong>Cocoa</strong> pour l'éditeur, car il est déjà développé et requiert peu d&rsquo;entretien (sauf quand Apple casse la compatibilité, mais c&rsquo;est marginal). Pas de raison particulière de recoder l'éditeur, il fonctionne très bien comme ça.</p>\n<p>Mais comme mon éditeur n&rsquo;est accessible que sur OSX (pas sur iOS), il me fallait une solution de debug efficace sur les devices mobiles.</p>\n<h2 id=\"première-option--libnuihttplibnuigithubionui3\">Première option : <a href=\"http://libnui.github.io/nui3/\">LibNUI</a></h2>\n<p>J&rsquo;ai d&rsquo;abord pensé à utiliser <a href=\"http://libnui.github.io/nui3/\">LibNUI</a>, une belle librairie graphique créée par mon pote Sébastien Métrot.</p>\n\n\n<figure class=\"half\">\n\t<a href=\"../images/gui/libnui-bleepsynth.jpg\"><img src=\"../images/gui/libnui-bleepsynth.jpg\" alt=\"\"></a>\n\t<a href=\"../images/gui/libnui-card.jpg\"><img src=\"../images/gui/libnui-card.jpg\" alt=\"\"></a>\n</figure>\n\n<p>Sa librairie est complête et embarque plein de tools intéressants. Elle permet de réaliser n&rsquo;importe quelle application 2D, aussi complexe soit elle. L&rsquo;intégralité du rendu est effectué en 3D. Elle est totalement cross-platform.</p>\n<p>Mais elle est plutôt adaptée à des applications complexes et puissantes. Dans mon cas, je veux juste pouvoir debugger efficacement sur iOS, pas besoin de fioriture.</p>\n<h2 id=\"seconde-option--nanoguihttpsgithubcomwjakobnanogui\">Seconde option : <a href=\"https://github.com/wjakob/nanogui\">NanoGUI</a></h2>\n<p>Puis, j&rsquo;ai testé <a href=\"https://github.com/wjakob/nanogui\">NanoGUI</a> basé sur <a href=\"https://github.com/memononen/nanovg\">NanoVG</a>.</p>\n<p>Un rendu vraiment très sexy !</p>\n\n\n<figure>\n\t<a href=\"../images/gui/nanogui-screenshot.jpg\"><img src=\"../images/gui/nanogui-screenshot.jpg\" alt=\"\"></a>\n</figure>\n\n<p>Cette librairie est compacte (peu de fichiers à embarquer) et moins complexe à intégrer dans un moteur existant que LibNUI. Ça se rapprochait déjà plus de ce que je recherche.</p>\n<p>J&rsquo;ai commencé l&rsquo;intégration de NanoGUI dans mon moteur, et j&rsquo;ai déprimé sur le couplage avec OpenGL&hellip; Le coût de portage de librairie sur METAL n&rsquo;est pas négligeable si on veut faire ça bien. Et je n&rsquo;ai malheureusement pas de temps à consacrer à ça pour le moment.</p>\n<p>Autre point négatif, c&rsquo;est son emprunte CPU et GPU. Pour une librairie que j&rsquo;utiliserai en debug, c&rsquo;est cher payé.</p>\n<p>Donc je la garde dans un coin de ma tête, pour plus tard.</p>\n<h2 id=\"troisième-option--imguihttpsgithubcomocornutimgui\">Troisième option : <a href=\"https://github.com/ocornut/imgui\">ImGUI</a></h2>\n<p>Finalement, j&rsquo;ai découvert <a href=\"https://github.com/ocornut/imgui\">ImGUI</a>.</p>\n<p>Je vais être très franc et peser mes mots :</p>\n<ul>\n<li>le rendu est vraiment <strong>spartiate</strong> (certains diront <em>moche</em>),</li>\n</ul>\n<p>Mais cette lib est :</p>\n<ul>\n<li>tellement <strong>simple à utiliser</strong>,</li>\n<li>tellement <strong>facile à intégrer</strong> dans un moteur existant,</li>\n<li>tellement <strong>compacte</strong> dans son design et dans son implémentation,</li>\n<li>tellement <strong>légère</strong> en CPU et GPU,</li>\n<li>tellement <strong>lisible</strong> et <strong>modifiable</strong></li>\n</ul>\n<p>Qu&rsquo;il est <strong>impossible</strong> d&rsquo;y rester insensible !</p>\n<p>Ça m&rsquo;a pris une heure de l&rsquo;intégrer dans mon moteur en METAL :</p>\n<ul>\n<li>quelques buffers GPU à créer,</li>\n<li>une seule texture,</li>\n<li>un seul shader,</li>\n<li>et une redirection d&rsquo;input iOS/OSX.</li>\n</ul>\n<p><strong>Hop</strong> le tour est joué.<br>\nEt le rendu est parfaitement <strong>identique</strong> sur OSX et iOS.<br>\nJouissif.</p>\n<p>Voici quelques captures d'écran sur OSX avec un layout 3D d&rsquo;iPhone 5. On y voit mes scènes de benchmark, la fenêtre de démo d&rsquo;ImGUI, et une petite fenêtre de profiling créée en quelques minutes.</p>\n\n\n<figure class=\"half\">\n\t<a href=\"../images/gui/imgui-with-EaseFX-0.jpg\"><img src=\"../images/gui/imgui-with-EaseFX-0.jpg\" alt=\"\"></a>\n\t<a href=\"../images/gui/imgui-with-EaseFX-1.jpg\"><img src=\"../images/gui/imgui-with-EaseFX-1.jpg\" alt=\"\"></a>\n</figure>\n\n<p>Et voici le shader ImGUI, vraiment gratos.<br>\nÀ gauche la version classique, et à droite la version préprocessée.</p>\n\n\n<figure>\n\t<a href=\"../images/gui/imgui-with-EaseFX-2.jpg\"><img src=\"../images/gui/imgui-with-EaseFX-2.jpg\" alt=\"\"></a>\n</figure>\n\n<p>Enfantin.</p>\n<p>Comme je le disais, certain peuvent rester bloquer sur l&rsquo;aspect spartiate de la GUI. Mais n&rsquo;oublions pas les objectifs initiaux : <strong>le debug</strong> et <strong>la perf</strong>.</p>\n<p>Et qu&rsquo;on se rassure, une nouvelle version poindra probablement bientôt le bout de son nez avec un design plus <em>moderne</em>. Espérons qu&rsquo;elle conservera sa faible emprunte et restera aussi simple à utiliser.</p>",
      "image": "../images/banner_imgui-investigations.jpg",
      "minutes": 3
    },
    {
      "id": "2015-12-24-noel-bd",
      "title": "Qui dit Noël, dit BD !",
      "date": "2015-12-24",
      "tags": [
        "bd"
      ],
      "category": "Culture",
      "excerpt": "Comme tous les ans, c’est le moment de lire des bandes-dessinées pendant les fêtes de fin d’année.",
      "content": "<p>Comme tous les ans, c&rsquo;est le moment de lire des bandes-dessinées pendant les fêtes de fin d&rsquo;année.</p>\n<p>J&rsquo;avais délaissé ma boutique favorite depuis un moment, donc la moisson fut excellente !</p>\n<h2 id=\"le-tueur-_tomes-11-12-13_\">Le Tueur <em>(tomes 11, 12, 13)</em></h2>\n<p>L’indétrônable thriller des fêtes. Toujours aussi bon à lire, une histoire palpitante avec des dessins magnifiques.<br>\nLes auteurs ne cessent de m'étonner car ils conservent un niveau d&rsquo;excellence malgré les années qui passent.</p>\n\n\n<figure class=\"third\">\n\t<a href=\"../images/bd/le-tueur-11.jpg\"><img src=\"../images/bd/le-tueur-11.jpg\" alt=\"\"></a>\n\t<a href=\"../images/bd/le-tueur-12.jpg\"><img src=\"../images/bd/le-tueur-12.jpg\" alt=\"\"></a>\n\t<a href=\"../images/bd/le-tueur-13.jpg\"><img src=\"../images/bd/le-tueur-13.jpg\" alt=\"\"></a>\n</figure>\n\n<h2 id=\"le-grand-mort-_tome-6_\">Le Grand Mort <em>(tome 6)</em></h2>\n<p>Je l&rsquo;attendais depuis un an !</p>\n<p>Pour Noël 2014, j&rsquo;avais offert les cinq premiers tomes à mon père, et je me suis délecté de leur lecture pendant deux après-midi.</p>\n<p>Loisel parvient à nous transporter dans un monde parallèle pendant plusieurs heures.<br>\nJ&rsquo;ai hâte de lire ce dernier tome !</p>\n\n\n<figure>\n\t<a href=\"../images/bd/le-grand-mort-tome-6.jpg\"><img src=\"../images/bd/le-grand-mort-tome-6.jpg\" alt=\"\"></a>\n</figure>\n\n<p><strong>Petite anecdote</strong> : Loisel a habité Enghien-les-bains <strong>pendant plus de 15 ans</strong>, et je l&rsquo;ai su hier seulement ! Je comprends mieux pourquoi la librairie <em>Impressions</em> avait toujours ses albums en avant-première ;)</p>\n<h2 id=\"le-cycle-de-cyann-_tome-6_\">Le Cycle de Cyann <em>(tome 6)</em></h2>\n<p>Une série dont les épisodes sortent au compte-goutte.<br>\nCe n&rsquo;est pas une BD mainstream, clairement pour Adultes car Bourgeon en est le créateur, avec des dessins très colorés. J&rsquo;adore toujours autant.</p>\n\n\n<figure>\n\t<a href=\"../images/bd/le-cycle-de-cyann-tome-6.jpg\"><img src=\"../images/bd/le-cycle-de-cyann-tome-6.jpg\" alt=\"\"></a>\n</figure>",
      "image": "../images/banner_bandes-dessinees.jpg",
      "minutes": 1
    },
    {
      "id": "2015-12-20-psycho-pass",
      "title": "Nouvel anime : Psycho-Pass",
      "date": "2015-12-20",
      "tags": [
        "manga"
      ],
      "category": "Culture",
      "excerpt": "En fait, il n’est pas nouveau du tout ! Mais il l’est pour moi :)",
      "content": "<p>En fait, il n&rsquo;est pas nouveau du tout ! Mais il l&rsquo;est pour moi :)</p>\n<h2 id=\"critiques-du-web\">Critiques du web</h2>\n<p>Les critiques sont variées, mais cet anime est célèbre et je n&rsquo;ai rien à me mettre sous la dent en ce moment.<br>\nDisponible en 720p, il va combler quelques soirées de Noël, pendant que les enfants dorment !</p>\n<h2 id=\"aperçu\">Aperçu</h2>\n<p>Un petit aperçu sur Youtube. Mais mieux vaut regarder les épisodes en 720p chez soi.</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/hfp3WYNxJxo\" frameborder=\"0\"> </iframe>",
      "image": "../images/banner_psycho-pass.jpg",
      "minutes": 1
    },
    {
      "id": "2015-12-05-gui-cpp",
      "title": "Regressions de GUI sur OSX",
      "date": "2015-12-05",
      "tags": [
        "code"
      ],
      "category": "Informatique",
      "excerpt": "Plus j’avance sur le développement de EaseSDK, plus je coince sur des limitations et des bugs de GUI sur OSX. Les concepts des GUI native d’OSX sont véritablement étranges. On s’y ",
      "content": "<p>Plus j&rsquo;avance sur le développement de EaseSDK, plus je coince sur des limitations et des bugs de GUI sur OSX.<br>\nLes concepts des GUI native d&rsquo;OSX sont véritablement étranges. On s&rsquo;y fait, surtout au bout de plusieurs années. Mais ça reste vraiment propre à l&rsquo;univers Apple et pas très bien testé..</p>\n<h2 id=\"régression-de-gui\">Régression de GUI</h2>\n<p>Depuis 3 jours je bloque sur une regression des NSScrollView.<br>\nAprès avoir épluché les forums officiels d&rsquo;Apple, stackoverflow, et les forums de developpeurs OSX, je me résigne : la régression est bel est bien présente et impossible de la contourner.</p>\n<p>Sans entrer dans le détail, le problème est simple : je veux juste faire mon rendu custom dans une NSView et pouvoir la scroller !<br>\nTout fonctionnait parfaitement avec <strong>xcode 6</strong>, et depuis <strong>xcode 7</strong> ça déconne totalement.</p>\n<h2 id=\"gui-qui-fonctionne\">GUI qui fonctionne</h2>\n<p>Voici un rendu qui fonctionne : l'éditeur de TimeLines.<br>\nLes scrollbars fonctionnent, je peux me déplacer à ma guise.</p>\n\n\n<figure>\n\t<a href=\"../images/easesdk/Capture_Editor_TimeLines.jpg\"><img src=\"../images/easesdk/Capture_Editor_TimeLines.jpg\" alt=\"\"></a>\n</figure>\n\n<h2 id=\"gui-qui-déconne\">GUI qui déconne</h2>\n<p>Et voici un rendu qui ne fonctionne plus du tout : l'éditeur de passes&hellip;<br>\nImpossible de faire fonctionner ces foutues scrollbars : elles n&rsquo;apparaissent pas.<br>\nPourtant tout fonctionnait avec <strong>xcode 6</strong> !</p>\n\n\n<figure>\n\t<a href=\"../images/easesdk/Capture_Editor_Chart.jpg\"><img src=\"../images/easesdk/Capture_Editor_Chart.jpg\" alt=\"\"></a>\n</figure>\n\n<p>C&rsquo;est quand même incroyable de devoir me taper le debug des produits Apple.<br>\nC&rsquo;est la société la plus riche au monde et elle n&rsquo;est pas capable de s&rsquo;offrir des tests de non-régression digne de ce nom&hellip;</p>\n<h2 id=\"utiliser-un-système-de-gui-alternatif-\">Utiliser un système de GUI alternatif ?</h2>\n<p>Donc ce soir j&rsquo;ai passé un peu de temps à examiner les GUI alternatives.</p>\n<p>D&rsquo;abord, j&rsquo;ai été séduit par les GUI de <a href=\"http://www.blender.org/\">Blender</a>. C&rsquo;est très joli, codé en C++, mais impossible de séparer le code de l'éditeur.</p>\n<p>Ensuite, j&rsquo;ai trouvé d&rsquo;autres GUI cross-platform qui semblent mûres aujourd&rsquo;hui :</p>\n<ul>\n<li><a href=\"http://www.qt.io/\">Qt</a><br>\nCette librairie vieille de 20 ans s&rsquo;est transformée à plusieurs reprises et a vraiment bien évolué. Elle est flexible, puissante, et elle tourne sur toutes les plateformes !<br>\nMais c&rsquo;est une telle usine à gaz que les samples-codes m&rsquo;ont vite fait fuir. Pas le temps d&rsquo;apprendre à me servir d&rsquo;un engine complet pour faire des GUIs.</li>\n<li><a href=\"https://github.com/wjakob/nanogui\">NanoGUI</a><br>\nCette lib se désigne comme <strong><em>Minimalistic GUI library for OpenGL</em></strong>. C&rsquo;est clairement prometeur, et certaines features me plaisent beaucoup telles que le support du C++11, l&rsquo;utilisation de lambdas, et des widgets de tracé de graphes.<br>\nJe vais la tester ce soir.</li>\n<li><a href=\"https://github.com/sp4cerat/Game-GUI\">Game-GUI</a><br>\n<strong>Mon coup de coeur</strong>. Très simple, et réalise la performance d'être codé en 2000 lignes de C++.  Elle propose les features classique (skinning, widgets standards, etc), et cela fait d&rsquo;elle un excellente candidate pour intégrer mon moteur en tant que module de GUI pour METAL. Cerise sur le gateau : elle est en licence MIT.</li>\n</ul>\n<h2 id=\"et-finalement\">Et finalement&hellip;</h2>\n<p>Je vais poursuivre encore un peu avec Cocoa. Je laisse une chance à Apple de se rattrapper avec le mise à jour de xcode qui ne saura tarder.<br>\nEt en attendant, je vais tester NanoGUI et Game-GUI.<br>\nJ&rsquo;ai une longue nuit qui s&rsquo;annonce !</p>",
      "image": "../images/banner_xcode.jpg",
      "minutes": 3
    },
    {
      "id": "2015-11-28-envie-de-dessin",
      "title": "Envie de dessin",
      "date": "2015-11-28",
      "tags": [
        "dessin"
      ],
      "category": "Culture",
      "excerpt": "Cela fait des mois que j’ai envie de me remettre à dessiner.",
      "content": "<p>Cela fait des mois que j&rsquo;ai envie de me remettre à dessiner.</p>\n<p>À chaque fois que je vois ma fille prendre des crayons de couleur et s&rsquo;appliquer à colorier, ça me donne envie.<br>\nJ&rsquo;ai la tête plein d&rsquo;idées, de bandes dessinées, d&rsquo;histoire amusantes, de logos, et j&rsquo;ai toujours cette frustration de ne pas avoir assez de temps pour crayonner.</p>\n<p>Et puis, l&rsquo;iPad Pro est sorti.</p>\n<p>Evidemment, je l&rsquo;ai examiné comme un nouvel objet <em>geek</em>, <em>énorme ipad</em> impossible à trimballer avec soi, et vendu avec un <em>stylo en plastique</em> qui me semblait de médiocre facture. Et puis les reviews ont commencé à se diffuser sur le net. Un coup marketing d&rsquo;Apple, sans aucun doute. Mais la quantité de reviews positives commencent à me faire douter.</p>\n<p>C&rsquo;est peut-être un outil sympa pour dessiner sans la contrainte du papier ?</p>\n<p>On trouve des apps pas cher et vraiment efficaces:</p>\n<ul>\n<li><a href=\"http://astropad.com/ipad/\">Astropad</a></li>\n<li><a href=\"http://procreate.si\">ProCreate</a></li>\n</ul>",
      "image": "../images/banner_astropad_ipad.jpg",
      "minutes": 1
    },
    {
      "id": "2015-11-28-video-dbz",
      "title": "Court métrage : DBZ Fall of Men",
      "date": "2015-11-28",
      "tags": [
        "manga"
      ],
      "category": "Culture",
      "excerpt": "Pour un court métrage effectué avec des moyens réduits, c’est vraiment réussi !",
      "content": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/HM20wwzl4Ds\" frameborder=\"0\"> </iframe>\n\n<p>Pour un court métrage effectué avec des moyens réduits, c&rsquo;est vraiment réussi !</p>\n<p>Je n&rsquo;aime pas trop le visage du perso principal qui n&rsquo;a strictement rien à voir avec Trunk, mais il faut être indulgent..</p>",
      "image": "../images/pexels-photo1.jpg",
      "minutes": 1
    },
    {
      "id": "2015-11-27-first-post",
      "title": "Le blog est né !",
      "date": "2015-11-27",
      "tags": [
        "blog"
      ],
      "category": "Divers",
      "excerpt": "Aujourd’hui le blog est né !",
      "content": "<p>Aujourd&rsquo;hui le blog est né !</p>\n<h2 id=\"ce-qui-a-guidé-mon-choix\">Ce qui a guidé mon choix</h2>\n<p>J&rsquo;ai choisi un système de <em>blog statique</em> :</p>\n<ul>\n<li>pas de base de données,</li>\n<li>écriture des textes en markdown,</li>\n<li>facile à maintenir,</li>\n<li>génération des pages en ligne de commande</li>\n</ul>\n<p>Simple et rapide :)</p>\n<blockquote>\n<p>“La simplicité est la sophistication suprême.” - Leonardo Da Vinci</p>\n</blockquote>\n<hr>\n<h2 id=\"laffichage-de-code-source\">L&rsquo;affichage de code source</h2>\n<p>Ce genre de blog est véritablement pratique pour écrire du <code>code</code>.<br>\nC&rsquo;est mon premier critère de choix.<br>\nPar exemple les <strong>snipets</strong> peuvent s'écrire très facilement et le code reste lisible :</p>\n<pre><code>class ALIGN8 Vec2\n{\n    public:\n        // Data\n        union\n        {\n            float   vals[2];\n            struct  { float  x,y; };\n            struct  { float  width,height; };\n            simd2f  v64;\n        };\n\n        // Constructors\n        inline          Vec2        ();\n        inline          Vec2        (const Vec2 &amp;a);\n        inline          Vec2        (const float nx, const float ny);\n\n        // Methods\n                float   Length      ();\n                float   SqLength    ();\n                Vec2 &amp;  Normalize   ();\n        inline  Vec2 &amp;  Multiply    (const Vec2 &amp;);\n};\n</code></pre><p>Plusieurs langages sont supportés.</p>\n<hr>\n<h2 id=\"les-ressources-graphiques\">Les ressources graphiques</h2>\n<p>Il est aussi très simple d&rsquo;inclure des images ou des vidéos dans ce blog.<br>\nQuelques lignes suffisent.</p>\n\n\n<figure class=\"half\">\n    <a href=\"http://placehold.it/1200x600.jpg\"><img src=\"http://placehold.it/600x300.jpg\" alt=\"\"></a>\n    <a href=\"http://placehold.it/1200x600.jpg\"><img src=\"http://placehold.it/600x300.jpg\" alt=\"\"></a>\n</figure>\n\n<p>Et une vidéo :</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SU3kYxJmWuQ\" frameborder=\"0\"> </iframe>\n\n<hr>\n<h2 id=\"affichage-de-tables\">Affichage de tables</h2>\n<table>\n<thead>\n<tr>\n<th align=\"left\">Header1</th>\n<th align=\"center\">Header2</th>\n<th align=\"right\">Header3</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"left\">cell1</td>\n<td align=\"center\">cell2</td>\n<td align=\"right\">cell3</td>\n</tr>\n<tr>\n<td align=\"left\">cell4</td>\n<td align=\"center\">cell5</td>\n<td align=\"right\">cell6</td>\n</tr>\n<tr>\n<td align=\"left\">cell1</td>\n<td align=\"center\">cell2</td>\n<td align=\"right\">cell3</td>\n</tr>\n<tr>\n<td align=\"left\">cell4</td>\n<td align=\"center\">cell5</td>\n<td align=\"right\">cell6</td>\n</tr>\n<tr>\n<td align=\"left\">Foot1</td>\n<td align=\"center\">Foot2</td>\n<td align=\"right\">Foot3</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2 id=\"des-boutons\">Des boutons</h2>\n\n\n<div markdown=\"0\" style=\"text-align: center\"><a href=\"\" class=\"btn btn-success\">Un bouton</a>    <a href=\"\" class=\"btn btn-info\">Un second bouton</a></div>\n\n<p>Aussi des remarques :</p>\n<div class=\"notice\">\nBoite à remarques !\n</div>\n<hr>\n<h2 id=\"support-de-mathjax\">Support de MathJax</h2>\n<pre><code>$$ z = r \\cdot (\\sin{\\phi} + \\cos{\\phi} \\cdot i) $$\n</code></pre>\n<p>donne:\n$$ z = r \\cdot (\\sin{\\phi} + \\cos{\\phi} \\cdot i) $$</p>\n<p>On peut aussi écrire en &ldquo;inline&rdquo; :  $a^n + b^2 = c^2$.</p>\n<p><strong>Ex</strong>: Si $a \\ne 0$, alors il y a deux solutions à \\(ax^2 + bx + c = 0\\) et elles sont:</p>\n<p>$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$</p>",
      "image": "../images/banner_cigogne.jpg",
      "minutes": 2
    }
  ],
  "resources": [
    {
      "url": "../assets/cours_math/Groupes.pdf",
      "title": "Groupes"
    },
    {
      "url": "../assets/cours_math/Anneaux.pdf",
      "title": "Anneaux"
    },
    {
      "url": "../assets/cours_math/CalculMatriciel.pdf",
      "title": "Calcul Matriciel"
    },
    {
      "url": "../assets/cours_math/Compacite.pdf",
      "title": "Compacité"
    },
    {
      "url": "../assets/cours_math/Completude.pdf",
      "title": "Complétude"
    },
    {
      "url": "../assets/cours_math/Dualite.pdf",
      "title": "Dualité"
    },
    {
      "url": "../assets/cours_math/ConnexiteParArcs.pdf",
      "title": "Connexité Par Arcs"
    },
    {
      "url": "../assets/cours_math/EndomEuclidienHermitien.pdf",
      "title": "Endomorphisme Euclidien et Hermitien"
    },
    {
      "url": "../assets/cours_math/EspacesPrehilbertiensComplexes.pdf",
      "title": "Espaces Préhilbertiens Complexes"
    },
    {
      "url": "../assets/cours_math/EspacesPrehilbertiensReels.pdf",
      "title": "Espaces Préhilbertiens Réels"
    },
    {
      "url": "../assets/cours_math/EspacesVectoriels.pdf",
      "title": "Espaces Vectoriels"
    },
    {
      "url": "../assets/cours_math/Evn.pdf",
      "title": "Espaces Vectoriels Normés"
    },
    {
      "url": "../assets/cours_math/Topologie_evn.pdf",
      "title": "Topologie - Espace Vectoriel Normé"
    },
    {
      "url": "../assets/cours_math/formesQuadratiques.pdf",
      "title": "Formes Quadratiques"
    },
    {
      "url": "../assets/cours_math/ReducEndom.pdf",
      "title": "Reduction d’Endomorphisme"
    },
    {
      "url": "../assets/cours_math/ReducEndomAutoadjoint.pdf",
      "title": "Reduction d’Endomorphisme Autoadjoint"
    },
    {
      "url": "../assets/cours_math/ReducEndomDimensionFinie.pdf",
      "title": "Reduction d’Endomorphisme en Dimension Finie"
    },
    {
      "url": "../assets/cours_math/Sobolev.pdf",
      "title": "Espace de Sobolev en Dimension 1"
    },
    {
      "url": "../assets/cours_math/ContinuiteLimite.pdf",
      "title": "Continuité et Limite"
    },
    {
      "url": "../assets/cours_math/ConvergenceUniforme.pdf",
      "title": "Convergence Uniforme"
    },
    {
      "url": "../assets/cours_math/FonctionReelleVarReelle.pdf",
      "title": "Fonction Réelle de Variable Réelle"
    },
    {
      "url": "../assets/cours_math/FonctionsIntegrales.pdf",
      "title": "Fonctions Intégrales"
    },
    {
      "url": "../assets/cours_math/fonctionsPlusieursVariables.pdf",
      "title": "Fonctions de Plusieurs Variables"
    },
    {
      "url": "../assets/cours_math/FonctionVectorielleVarReelle.pdf",
      "title": "Fonction Vectorielle à Variable Réelle"
    },
    {
      "url": "../assets/cours_math/IntegralesSurIntervalle.pdf",
      "title": "Intégrales Sur un Intervalle"
    },
    {
      "url": "../assets/cours_math/Lebesgue.pdf",
      "title": "Espaces de Lebesgue"
    },
    {
      "url": "../assets/cours_math/Probas.pdf",
      "title": "Probabilités"
    },
    {
      "url": "../assets/cours_math/SuitesReelles.pdf",
      "title": "Suites Réelles"
    },
    {
      "url": "../assets/cours_math/SeriesGeneralites.pdf",
      "title": "Séries - Généralites"
    },
    {
      "url": "../assets/cours_math/SeriesEntieres.pdf",
      "title": "Séries Entières"
    },
    {
      "url": "../assets/cours_math/SeriesFonctions.pdf",
      "title": "Séries de Fonctions"
    },
    {
      "url": "../assets/cours_math/SeriesFourier.pdf",
      "title": "Séries de Fourier"
    },
    {
      "url": "../assets/cours_math/SeriesTermesPositifs.pdf",
      "title": "Séries à Termes Positifs"
    },
    {
      "url": "../assets/cours_math/SeriesTermesBanach.pdf",
      "title": "Séries à Termes dans un Espace de Banach"
    },
    {
      "url": "../assets/cours_math/SolutionVariationnelle.pdf",
      "title": "Solution Variationnelle des Problèmes aux Limites Elliptiques"
    },
    {
      "url": "../assets/cours_math/SuitesFonctions_IntegralesAvecParametre.pdf",
      "title": "Intégrales et Suites de Fonctions - Intégrales Avec Parametre"
    },
    {
      "url": "../assets/cours_math/TheorieMesure.pdf",
      "title": "Theorie de la Mesure"
    }
  ],
  "pages": {
    "kung-fu": {
      "title": "Kung-Fu",
      "content": "<blockquote>\n<p>Vous mangez chaque jour.<br>\nVous brossez vos dents chaque jour.<br>\nIl faut s&rsquo;entrainer chaque jour.</p>\n</blockquote>\n<hr>\n<h2 id=\"echauffement-basique\">Echauffement basique</h2>\n<p>Voici une vidéo de 5 minutes qui exhibe quelques mouvements à effectuer à chaque entrainements.</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/TefZOdxFSFY\" frameborder=\"0\" allowfullscreen> </iframe>\n\n<div class=\"notice\">\nRemerciements : je remercie le groupe EnergieForme pour m'avoir laisser filmer dans leur salle.\n</div>"
    },
    "politique": {
      "title": "Politique",
      "content": "<p>Vous trouverez ici des textes ou vidéos liés à la polique.<br>\nJe vous donne juste des pistes à explorer, sans les commenter.</p>\n<hr>\n<h2 id=\"guerre-en-syrie--témoignage-dun-directeur-de-la-dgse\">Guerre en Syrie : témoignage d&rsquo;un Directeur de la DGSE</h2>\n<p><a href=\"https://fr.wikipedia.org/wiki/Alain_Juillet\">Alain Juillet</a> a dirigé de la <a href=\"https://fr.wikipedia.org/wiki/Direction_g%C3%A9n%C3%A9rale_de_la_S%C3%A9curit%C3%A9_ext%C3%A9rieure\">DGSE</a> et il a mis en place l&rsquo;intelligence économique au sein du <a href=\"https://fr.wikipedia.org/wiki/Secr%C3%A9tariat_g%C3%A9n%C3%A9ral_de_la_D%C3%A9fense_et_de_la_S%C3%A9curit%C3%A9_nationale\">SGDN</a>. Son avis sur l&rsquo;origine de la guerre en Syrie vaut la pein d'être écouté.</p>\n\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/5siyELxCMNU\" frameborder=\"0\" allowfullscreen> </iframe>"
    }
  }
};

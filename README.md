# Sumy Livres 3.0 — refonte illustrée

Remplacer les fichiers à la racine du dépôt par :
- `index.html`
- `manifest.webmanifest`
- `sw.js`

Conserver les icônes PNG déjà présentes dans le dépôt (`apple-touch-icon.png`, `icon-192.png`, `icon-512.png`) : le manifeste les réutilise.

La bibliothèque, les filtres, les fiches de livres, les étagères, les défis, les statistiques, l'import et l'export JSON restent intégrés. Les données restent enregistrées localement dans le navigateur ; la synchronisation multi-appareils nécessitera une base de données et des comptes, qui constituent une étape ultérieure.

Après le commit GitHub, recharger le site. Si l'ancien affichage reste en cache, fermer puis rouvrir le site ou vider les données du site pour que le nouveau service worker s'installe.

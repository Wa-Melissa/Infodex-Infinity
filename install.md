# Installation de Infodex Infinity sous Linux (amd64)

### Nous recommandons fortement l'installation par le package .deb

## Installation sur les distributions Debian-like (Debian, Mint, Ubuntu...)

1. Téléchargez la dernière version `.deb` de **Infodex Infinity** depuis la page [release](/t3-les-autres-ind-cis/the-email-game/-/releases).
   
2. Ouvrez un terminal et naviguez vers le dossier où le fichier a été téléchargé.

3. Exécutez la commande suivante pour installer le jeu :

   ```bash
   sudo apt install ./infodex-infinity.deb
   ```
4. Lancez le jeu depuis le menu de votre environnement graphique.

## Execution "Portable" sur d'autres distributions Linux

1. Téléchargez le fichier auto-extractible `.run` pour **Infodex Infinity** depuis la page [release](/t3-les-autres-ind-cis/the-email-game/-/releases).

### Avec un Terminal:
2. Ouvrez un terminal et naviguez vers le dossier où le fichier a été téléchargé.

3. Ajoutez les droits d'exécution au fichier :

   ```bash
   chmod +x infodex-infinity.run
   ```

4. Exécutez le fichier auto-extractible :

   ```bash
   ./infodex-infinity.run
   ```

### Avec votre environnement graphique:
2. Ajoutez les droits d'exécution au fichier : Accedez aux propriétés du fichier puis Activer l'option "Executer comme un programme" ou similaire.

3. Exécutez le fichier auto-extractible comme un programme (Souvent click-droit -> "Executer comme un programme")


## Installation non-portable "tarball-like" sur d'autres distributions Linux

1. Téléchargez le fichier auto-extractible `.run` pour **Infodex Infinity** depuis la page [release](/t3-les-autres-ind-cis/the-email-game/-/releases).

1. Exécutez le fichier avec les options suivantes :

   ```bash
   ./infodex-infinity.run --target ./infodex-infinity/ --noexec
   ```

2. Accédez au dossier `infodex-infinity/` :

   ```bash
   cd infodex-infinity/
   ```

3. Exécutez l'exécutable **Infodex Infinity** :

   ```bash
   ./infodex-infinity
   ```

# Installation de Infodex Infinity sous Système d'exploitation (Windows, MacOS...) ou architecture non supporté (arm64, aarch64...)

**⚠️ Attention : ces instructions sont fournies à titre purement indicatif et sont volontairement imprécises. Nous ne recommandons pas ce type d'installation. Aucune assistance ne sera fournie pour les installations non officiellement prises en charge.**

1. Assurez d'avoir installé Node.JS 22 et NPM.
2. Clonez ce repository: `git clone https://git.unistra.fr/t3-les-autres-ind-cis/the-email-game/`
3. Sautez à la dernière release (tag): `git checkout tags/vX.X.X`
4. Installez les dépendances locales: `npm install --include=dev`
5. Si nécessaire, configurez electron-forge en modifiant le fichier ./forge.config.js
6. Lancez la génération: `npm run make`
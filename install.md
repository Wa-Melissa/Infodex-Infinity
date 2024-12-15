# Avant-propos
L'équipe de developpement supporte l'installation d'Infodex Infinity sous **Linux** sur architecture **amd64**.
Les autres installation ne sont pas officiellement supporté bien que peuvent fonctionner si vous avez les capcité d'adadpter sensiblement le processus de compilation et de packaging a votre plateforme, nous ne fournirons aucune assitance.

Nous recommandons l'[installation via un package](#installation-sur-les-distributions-debian-like-debian-mint-ubuntu) .deb si disponible pour votre plateforme, sinon, utilisez une [execution portable](#execution-portable) ou l'[extraction](#installation-non-portable-tarball-like) des fichiers.
Pour les utilisateurs avancés, la [compilation depuis les sources](#compilation-depuis-les-sources) reste une option.

# Installation de Infodex Infinity sous Linux (amd64)

> L'application sera installé par apt/dpkg comme un programme standard. Une icone de bureau sera autmatiquement crée pour vous permettre dans lancer le jeu depuis le menu de votre environnement graphique. Cette methode d'installation requiert les droits administrateur/root. SI ne vous les avez pas, utilisez une [execution portable](#execution-portable) ou par [extraction](#installation-non-portable-tarball-like)

## Installation sur les distributions Debian-like (Debian, Mint, Ubuntu...)

1. Téléchargez la dernière version `.deb` de **Infodex Infinity** depuis la page [release](https://git.unistra.fr/t3-les-autres-ind-cis/the-email-game/-/releases).
   
2. Ouvrez un terminal et naviguez vers le dossier où le fichier a été téléchargé (ou ouvrez graphiquement le terminal directement dans le dossier).

3. Exécutez la commande suivante pour installer le jeu :

   ```bash
   sudo apt install ./infodex-infinity.deb
   ```
4. Lancez le jeu depuis le menu de votre environnement graphique.

## Execution "Portable"

> L'execution portable permet de d'extraire et de lancer le jeu dans un dossier temporaire qui sera automatiquement supprimé dès le jeu fermé. Il n'y a aucune installation et le lancement peut se faire sans les droits administrateur/root.

1. Téléchargez le fichier auto-extractible `.run` pour **Infodex Infinity** depuis la page [release](https://git.unistra.fr/t3-les-autres-ind-cis/the-email-game/-/releases).

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


## Installation non-portable "tarball-like"

1. Téléchargez le fichier auto-extractible `.run` pour **Infodex Infinity** depuis la page [release](https://git.unistra.fr/t3-les-autres-ind-cis/the-email-game/-/releases).

2. Ouvrez un terminal et naviguez vers le dossier où le fichier a été téléchargé.

3. Ajoutez les droits d'exécution au fichier :

   ```bash
   chmod +x infodex-infinity.run
   ```

4. Exécutez le fichier avec les options suivantes :

   ```bash
   ./infodex-infinity.run --target ./infodex-infinity/ --noexec
   ```

5. Accédez au dossier `infodex-infinity/` :

   ```bash
   cd infodex-infinity/
   ```

6. Exécutez l'exécutable **Infodex Infinity** :

   ```bash
   ./infodex-infinity
   ```

# Compilation depuis les sources

**⚠️ Attention : ces instructions sont fournies à titre purement indicatif et sont volontairement imprécises. Nous ne recommandons pas ce type d'installation. Aucune assistance ne sera fournie pour les installations non officiellement prises en charge.**

1. Assurez d'avoir installé Node.JS 22 et NPM.
2. Clonez ce repository: `git clone https://git.unistra.fr/t3-les-autres-ind-cis/the-email-game/`
3. Sautez à la dernière release (tag): `git checkout tags/vX.X.X`
4. Installez les dépendances locales: `npm install --include=dev`
5. Si nécessaire, configurez electron-forge en modifiant le fichier ./forge.config.js
6. Lancez la génération: `npm run make`
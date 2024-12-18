# Avant-propos
L'équipe de developpement supporte l'installation d'Infodex Infinity sous **Windows** et **Linux** sur architecture **amd64**.
Les autres installation ne sont pas officiellement supporté bien que peuvent fonctionner si vous avez les capcité d'adapter sensiblement le processus de compilation et de packaging à votre plateforme, nous ne fournirons aucune assistance.

Sous linux, nous recommandons l'[installation via un package](#installation-sur-les-distributions-debian-like-debian-mint-ubuntu) .deb si disponible pour votre plateforme, sinon, utilisez une [exécution portable](#execution-portable) ou l'[extraction](#installation-non-portable-tarball-like) des fichiers.
Pour les utilisateurs avancés, la [compilation depuis les sources](#compilation-depuis-les-sources) reste une option.

# 🪟 Installation de Infodex Infinity sous Windows (x64)

> Sous Windows, seul le déploiement via un installateur 'Squirrel' est supporté officiellement. Une icône sur le bureau est créée automatiquement. L'application sera également disponible dans la liste des applications.

1. Téléchargez la dernière version `.exe` de **Infodex Infinity** depuis la page [release](https://git.unistra.fr/t3-les-autres-ind-cis/the-email-game/-/releases).
2. Exécutez cet installateur et attendez la fin de l'installation.
3. Une fois l'application installée, elle se lance automatiquement.

# 🐧 Installation de Infodex Infinity sous Linux (amd64)

> L'application sera installée par apt/dpkg comme un programme standard. Une icône de bureau sera automatiquement créée pour vous permettre de lancer le jeu depuis le menu de votre environnement graphique. Cette méthode d'installation requiert les droits administrateur/root. Si ne vous les avez pas, utilisez une [exécution portable](#execution-portable) ou par [extraction](#installation-non-portable-tarball-like)

## Installation sur les distributions Debian-like (Debian, Mint, Ubuntu...)

1. Téléchargez la dernière version `.deb` de **Infodex Infinity** depuis la page [release](https://git.unistra.fr/t3-les-autres-ind-cis/the-email-game/-/releases).
   
2. Ouvrez un terminal et naviguez vers le dossier où le fichier a été téléchargé (ou ouvrez graphiquement le terminal directement dans le dossier).

3. Exécutez la commande suivante pour installer le jeu :

   ```bash
   sudo apt install ./infodex-infinity.deb
   ```
4. Lancez le jeu depuis le menu de votre environnement graphique.

## Execution "Portable"

> L'exécution portable permet d'extraire le jeu dans un dossier temporaire qui sera automatiquement supprimé dès sa fermeture. Aucune installation n'est nécessaire et le lancement peut se faire sans les droits administrateur/root.

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

> Les fichiers nécessaires au lancement du jeu seront extraits dans un dossier afin que vous puissiez le lancer directement depuis ce dossier, sans droits administrateur/root. Aucune modification de votre système ne sera effectuée, à l'exception de la création d'un nouveau dossier à l'endroit où la commande sera exécutée.

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
2. Clonez ce repository: `git clone https://git.unistra.fr/t3-les-autres-ind-cis/the-email-game/ ./infodex-infinity`
3. Allez dans le dossier: `cd ./infodex-infinity`
4. Sautez à la dernière release (tag): `git checkout tags/vX.X.X`
5. Installez les dépendances locales: `npm install --include=dev`
6. Si nécessaire, configurez electron-forge en modifiant le fichier ./forge.config.js
7. Lancez la génération: `npm run make`
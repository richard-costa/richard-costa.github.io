---
title: 'installing quarto on arch linux'
date: 12-04-2025
date-modified: last-modified
language: 
  title-block-modified: "UPDATED"
categories: 
  - linux
  - how-to
  - quarto
image: images/quarto-logo.png
---

This website uses quarto as its publishing and writing platform. It seems the package for installing quarto on arch-linux is not maintained at this time. We are left then with downloading the tarball file and installing it. After downloading the file from https://quarto.org/docs/get-started/ we should extract the contents of it and in my case I needed to create a symlink to be able to use it in the terminal, so basically for the `1.8.26` version:

```bash
cd ~/Downloads
tar -xvzf quarto-1.8.26-linux-amd64.tar.gz
sudo mv quarto-1.8.26 /opt/quarto
sudo ln -sf /opt/quarto/bin/quarto /usr/local/bin/quarto
```

That's it. However, since I didn't install it via a package manager I created a script in `/usr/local/bin/update-quarto` to update it:

```bash
#!/usr/bin/env bash
set -e

INSTALL_DIR="/opt/quarto"
BIN_LINK="/usr/local/bin/quarto"

echo "removing old quarto installation..."
sudo rm -rf "$INSTALL_DIR"

echo "downloading latest quarto release..."
cd /tmp
LATEST_URL=$(curl -s https://api.github.com/repos/quarto-dev/quarto-cli/releases/latest \
  | grep browser_download_url \
  | grep linux-amd64.tar.gz \
  | cut -d '"' -f 4)

curl -sSL "$LATEST_URL" -o quarto.tar.gz

echo "extracting..."
tar -xzf quarto.tar.gz
EXTRACTED_DIR=$(tar -tf quarto.tar.gz | head -1 | cut -f1 -d"/")

echo "installing to $INSTALL_DIR..."
sudo mv "$EXTRACTED_DIR" "$INSTALL_DIR"
sudo ln -sf "$INSTALL_DIR/bin/quarto" "$BIN_LINK"

echo "cleaning up..."
rm -f quarto.tar.gz

echo "done. installed $(/usr/local/bin/quarto --version)"
```

And then in the terminal just run `update-quarto`. It seems to be working but double check it if you want to run it yourself.


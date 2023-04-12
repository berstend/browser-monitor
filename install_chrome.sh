#!/usr/bin/env bash

if [[ "${USER}" != "runner" ]]; then
  echo "This is meant to be run in a github action, sorry."
  exit 1
fi

if [ -z "${BROWSER_PREFIX}" ]; then
  echo "BROWSER_PREFIX is missing"
  exit 1
fi

if [ -z "${BROWSER_VERSION}" ]; then
  echo "BROWSER_VERSION is missing"
  exit 1
fi

# Disable all variations, see https://support.google.com/chrome/a/answer/9805991
# mkdir -p /etc/opt/chrome/policies/managed
# echo '{"ChromeVariations": 2}' > /etc/opt/chrome/policies/managed/disable-variations.json

sudo apt-get remove google-chrome-stable; echo ""
sudo apt-get remove google-chrome-unstable; echo ""
wget -nv -O /tmp/chrome.deb "https://dl.google.com/linux/chrome/deb/pool/main/g/google-${BROWSER_PREFIX}/google-${BROWSER_PREFIX}_${BROWSER_VERSION}-1_amd64.deb"
sudo apt-get install -y /tmp/chrome.deb --no-install-recommends --allow-downgrades
rm /tmp/chrome.deb
google-chrome --version

# Pakki-Pakki Gaming

Static bilingual website for Pakki-Pakki Gaming and HockeyGM.

## Local preview

Serve the parent directory so the preview uses the same subpath as GitHub Pages:

```sh
cd /Users/juhorautio
python3 -m http.server 8080
```

Then open `http://localhost:8080/pakki-pakki-gaming/`.

## Publishing

GitHub Pages publishes from the `main` branch and repository root. In the GitHub repository, open **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

The production URL is <https://spjass.github.io/pakki-pakki-gaming/>.

## Content

English and Finnish copy lives in `site.js`. English HTML remains available when JavaScript is disabled. The site has no analytics, cookies, forms, authentication, or external runtime dependencies.

Copyright © Pakki-Pakki Gaming. All rights reserved.

# google-play-api

Turns [google-play-scraper](https://github.com/facundoolano/google-play-scraper/) into a RESTful API.

To run locally:

```
npm install
npm start
```
## How To Deploy Watch Video After 4:20

<p align="center">
  
  [![How To make own api](https://img.youtube.com/vi/Wr7kazLamJw/0.jpg)](http://www.youtube.com/watch?v=Wr7kazLamJw)

</p>


Site [Techno Stone](https://technostone.xyz):


## Play With Docker

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FTechnoStone-dev%2FGoogle-play-api&referralCode=Stone)

## Example requests

The parameters for each endpoint are taken directly from google-play-scraper. For a full reference check its [documentation](https://github.com/facundoolano/google-play-scraper/#usage).

Get the top free apps (default list)
```http
GET /api/apps/
```

Get the top free apps with full detail

```http
GET /api/apps/?fullDetail=true
```

Get the top selling action games in russia

```http
GET /api/apps/?collection=topselling_paid&category=GAME_ACTION&country=ru
```

Get an app detail

```http
GET /api/apps/com.dxco.pandavszombies/
```

Get an app detail in spanish

```http
GET /api/apps/com.dxco.pandavszombies/?lang=es
```

Get app required permissions with full descriptions

```http
GET /api/apps/com.dxco.pandavszombies/permissions/
```

Get app required permissions (short list)

```http
GET /api/apps/com.dxco.pandavszombies/permissions/?short=true
```

Get similar apps

```http
GET /api/apps/com.dxco.pandavszombies/similar/
```

Get an app's reviews

```http
GET /api/apps/com.dxco.pandavszombies/reviews/
```

Search apps

```http
GET /api/apps/?q=facebook
```

Get search suggestions for a partial term

```http
GET /api/apps/?suggest=face
```

Get apps by developer

```http
GET /api/developers/DxCo%20Games/
```

Get categories
```http
GET /api/categories/
```

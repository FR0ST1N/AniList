# [AniList](https://fr0st1n.github.io/AniList/)
[MyAnimeList.net](https://myanimelist.net/) User Anime List with [Angular](https://angular.io/).

## API

It uses the [Jikan API](https://jikan.me/) to get the user's anime list from MAL.

## Packages Used

* [Angular Material](https://material.angular.io/)
* [Flex Layout](https://github.com/angular/flex-layout)

## Usage

### Changing User

Just Change the Value of `user` in [AppComponent](https://github.com/FR0ST1N/AniList/blob/master/src/app/app.component.ts) Class to Change the User.

### Building for GitHub Pages
```

ng build --prod --base-href https://username.github.io/RepositoryName/
```

### Deploying to Github Pages

Use [angular-cli-ghpages](https://github.com/angular-buch/angular-cli-ghpages) to Deploy.

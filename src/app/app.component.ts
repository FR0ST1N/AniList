import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { Manga } from './manga';
import { AnimeService } from './anime.service';
import { MangaService } from './manga.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = 'Frostin';
  title = this.user + '\'s AniList';
  allanime: Anime[];
  allmanga: Manga[];
  loadState = 0;
  cards = 14;
  onScroll() {
    if (this.cards < this.allanime.length) {
      this.cards += 14;
    }
  }
  constructor(private animeService: AnimeService, private mangaService: MangaService) { }
  ngOnInit(): void {
    this.animeService.getAnime(this.user).then((animedata) => {
      this.allanime = animedata;
      this.loadState++;
    });
    this.mangaService.getManga(this.user).then((mangadata) => {
      this.allmanga = mangadata;
      this.loadState++;
    });
  }
}


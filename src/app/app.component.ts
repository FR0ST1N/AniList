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
  user = 'xiliaw';
  title = this.user + '\'s AniList';
  allanime: Anime[];
  allmanga: Manga[];
  loadState = 0;
  constructor(private animeService: AnimeService, private mangaService: MangaService) { }
  ngOnInit(): void {
   this.animeService.getAnime(this.user).then((animedata) => {
      this.loadState++;
      this.allanime = animedata;
   });
    this.mangaService.getManga(this.user).then((mangadata) => {
      this.loadState++;
      this.allmanga = mangadata;
   });
  }
}


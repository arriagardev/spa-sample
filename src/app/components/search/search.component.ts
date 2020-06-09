import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params.termino);
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
    });
  }

  verHeroe( idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}

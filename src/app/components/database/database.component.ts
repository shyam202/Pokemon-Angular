import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
})
export class DatabaseComponent implements OnInit {
  dataList: any[] = [];
  page = 1;
  totalData!: number;
  searchKey: string = '';
  public searchTerm: string = '';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemonData();
    this.api.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  getPokemonData() {
    this.api.getData(12, this.page + 0).subscribe((res: any) => {
      this.totalData = res.count;
      res.results.forEach((result: any) => {
        this.api.getMoreData(result.name).subscribe((specResp: any) => {
          this.dataList.push(specResp);
          console.log(specResp);
        });
      });
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.api.search.next(this.searchTerm);
  }

  openDetails(name: string): void {
    this.router.navigate(['inter-details', name]);
  }
}

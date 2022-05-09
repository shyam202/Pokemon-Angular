import { List } from '../../data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-inter-details',
  templateUrl: './inter-details.component.html',
  styleUrls: ['./inter-details.component.scss'],
})
export class InterDetailsComponent implements OnInit {
  listId!: string;
  list!: List;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['id'];
      this.getMoreData(this.listId);
    });
  }

  getMoreData(id: string): void {
    this.api.getMoreData(id).subscribe((listResp: List) => {
      this.list = listResp;
    });
  }
}

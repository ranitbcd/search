import { Component } from '@angular/core';
import {ServerService} from './server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  filterTerm: string;

  displayedColumns: string[] = ['uname','city','contact_no','trade','sem'];
  // dataSource = ELEMENT_DATA;
  public dataSource:any;
  constructor(private api:ServerService){}
  ngOnInit(){
    //this.dataSource=this.api.getuser().subscribe()
    this.api.getuser().subscribe(data=>this.dataSource=data)
  }
}

import { Component, OnInit } from '@angular/core';

// new
import { DataService } from 'src/app/services/data.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Discograph } from 'src/app/models/discograph';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  
  // works
  house: Discograph;
  artists: Array<Artist>;

  ngOnInit() {
    this.house = new Discograph();
    this.artists = [];
    const _id = this.route.snapshot.params["id"];
    this.getDetails(_id);
  }

  getDetails(id: string){
    this.dataService.getDiscographyDetail(id)
    .subscribe(data => {
      // console.log(data.casa.nombre);
      this.house.nombre = data.casa.nombre;
      this.house.foto = data.casa.foto;
      
      for(var i=0; i<data.casa.artistas.length; i++){
        // console.log(data.casa.artistas[i].nombre);
        var buffer_obj:Artist = new Artist();

        buffer_obj.nombre =data.casa.artistas[i].nombre;
        buffer_obj.foto = data.casa.artistas[i].foto;
        buffer_obj._id = data.casa.artistas[i]._id;

        this.artists.push(buffer_obj);
      }

    });
  }

}

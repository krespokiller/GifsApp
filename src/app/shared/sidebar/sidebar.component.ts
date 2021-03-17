import { Component} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent{

  get histori(){
    return this.gifsService.historial;
  }
  constructor(private gifsService:GifsService) { }

  buscar(ams:string){
    this.gifsService.buscargifs(ams);
  }

}

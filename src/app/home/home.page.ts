import { Component, HostListener } from '@angular/core';
import { Constants } from '../shared/constants';
import { Photo } from '../shared/models/photo';
import { CommonFunctions } from '../shared/utils/commonFunctions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public photoList: Array<Photo> = [];
  public showList: Array<Photo> = [];
  public segmentGridIndex: number = Constants.DISPLAY_TYPE.GRID;
  public photoListInfiniteScroll: any[] = [];
  public infinityScrollDisabled:boolean = false;
  public Constants = Constants;

  constructor(private commonFunctions: CommonFunctions) {
    this.getPhotos();
  }
  
  // Creación de array de maxPhotos elementos 
  getPhotos() {
    for(let i = 0; i < Constants.maxPhotos; i++) {
      
      this.photoList.push(
        {
          id: i,
          photo: Constants.PICSUM_SERVICE(i),
          text: this.commonFunctions.generateLorem(Math.floor(Math.random() * Constants.longRandTextTo) + Constants.longRandTextFrom)
        }
      );
    }
    this.showList = [...this.photoList]; // Copiar valores a lista filtrable

    // Primera carga de datos de datos
    this.loadMoreData(null);
  }
  
  // Filtra el array según el texto del buscador
  onChangeSearchBar(event: any) { 
    const inputText = event.target.value;
    this.showList = this.photoList.filter(photo => photo.text.toLowerCase().indexOf(inputText.toLowerCase()) > -1 || photo.id == Number(inputText));
    this.loadMoreData(null);
  }

  // Carga datos al desplazarse hacia abajo en la página
  loadMoreData(event: any) {
    // Si no existe evento, se resetea array para no concatenar con lo anteriormente contenido en él
    if (!event) { 
      this.photoListInfiniteScroll= []; 
      this.infinityScrollDisabled = false;
    }

    // Selecciona los MAX_ELEMENT_SCROLL primeros elementos
    let maxElement = this.showList.length >= Constants.MAX_ELEMENT_SCROLL ? Constants.MAX_ELEMENT_SCROLL : this.showList.length;
    this.photoListInfiniteScroll.push(...this.showList.splice(0, maxElement))

    if (!this.showList.length) this.infinityScrollDisabled = true;
    if (event) event.target.complete();
  }

  // Captura el error al intentar cargar una imagen e incrusta una por defecto
  onErrorImage(element: any) {
    element.target.src = Constants.DEFAULT_PHOTO;
  }
}

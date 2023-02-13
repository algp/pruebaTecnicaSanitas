import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Constants } from '../shared/constants';
import { CommonFunctions } from '../shared/utils/commonFunctions';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  let checkObject: number = 500;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [CommonFunctions]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Crea array de objetos de tipo "photo" con 4000 elementos.', () => {
    expect(component.photoList.length).toEqual(Constants.maxPhotos);
  });

  it('Comprueba que el objeto de la posición checkObject del array corresponda al objeto con ID checkObject.', () => {
    console.log(component.photoList[checkObject].id);
    expect(component.photoList[checkObject].id).toEqual(checkObject);
    expect(component.photoList[checkObject].photo).toEqual(Constants.PICSUM_SERVICE(checkObject));
  });

  it('Comprueba que se ha generado correctamente id y foto de los objetos 100 al 150.', () => {
    component.getPhotos();
    for (let i = 100; i <= 150; i++) {
      let photo = component.photoList[i];
      expect(photo.id).toEqual(i);
      expect(photo.photo).toEqual(Constants.PICSUM_SERVICE(i));
    }
  });

  it('Comprueba que se obtienen resultados correctos al buscar el ID "checkObject".', () => {
    const event = { target: { value: String(checkObject) } };
    component.onChangeSearchBar(event);
    expect(component.photoListInfiniteScroll.length).toEqual(1);
    expect(component.photoList[checkObject].id).toEqual(checkObject);
    expect(component.photoList[checkObject].photo).toEqual(Constants.PICSUM_SERVICE(checkObject));
  });
  
  it('Comprueba que no se obtienen resultados al buscar el texto "SIN RESULTADOS".', () => {
    const event = { target: { value: 'SIN RESULTADOS' } };
    component.onChangeSearchBar(event);
    expect(component.photoListInfiniteScroll.length).toEqual(0);
  });

  it('Comprueba que se asigna por defecto una imagen cuando no se encuentra.', () => {
    const element = { target: { src: '' } };
    component.onErrorImage(element);
    expect(element.target.src).toEqual(Constants.DEFAULT_PHOTO);
  });

  it('Comprueba que da por completado el evento de scroll infinito.', () => {
    const event = { target: { complete: jasmine.createSpy() } };
    component.loadMoreData(event);
    expect(event.target.complete).toHaveBeenCalled();
  });

});

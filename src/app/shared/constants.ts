import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

/*
  Definición de constantes.
*/

@Injectable()
export class Constants
{
  public static readonly ID =  "id";

  // Total de imágenes a obtener
  public static readonly maxPhotos:number = 4000;
  
  // Tamaño texto aleatorio
  public static readonly longRandTextFrom = 5;
  public static readonly longRandTextTo = 12;

  // Tamaño imagen
  public static readonly WIDTH =  "500";
  public static readonly HEIGHT =  "500";
  
  // Texto lorem ipsum
  public static readonly lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ante euismod, bibendum odio a, malesuada sem. Integer vel ante vel ligula volutpat hendrerit id id sapien. Aliquam erat volutpat. Nam malesuada nunc et malesuada commodo. Maecenas vel velit vel nibh congue ullamcorper. Sed vel congue magna. Suspendisse potenti. Sed auctor, mauris in suscipit gravida, lectus est tristique nulla, eu sollicitudin metus est a tellus. Duis vitae libero libero. Aliquam erat volutpat. Integer non auctor est. Nulla varius massa vel est placerat, id bibendum nisl aliquam. Nulla facilisi.';
 
  // Máximo elementos en el SCROLL
  public static readonly MAX_ELEMENT_SCROLL =  20;
  
  // Imagen por defecto
  public static readonly DEFAULT_PHOTO = 'assets/images/image-not-found.jpg'

  // Tipo visualización
  public static readonly DISPLAY_TYPE = 
  {
    GRID: 0,
    LIST: 1
  };

  // Definición de endpoints.
  public static readonly PICSUM_SERVICE = (ID_FOTO_INCREMENTAL: number) => `${environment.apiUrl}/${Constants.ID}/${ID_FOTO_INCREMENTAL}/${Constants.WIDTH}/${Constants.HEIGHT}`; //https://picsum.photos/id/{ID_FOTO_INCREMENTAL}/500/500

}
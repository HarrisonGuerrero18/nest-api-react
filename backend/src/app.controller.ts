import { Controller,
        Get,
        Post,
        Patch,
        Put,
        Delete   } from '@nestjs/common';

@Controller()
export class AppController {

  //endpoint: Es un metodo de una clase que recibe una request y puede devolver una 
  //response
  @Get()
  getMensaje(): string {
    return "aqui se van a LEER los datos";
  }

  @Post()
  //despues de dos puntos va el tipo de dato de retorno
  //: lo que va a devolver la funcion con el return 
  crear(): string {
    return "aqui se van a REGISTRAR datos";
  }

  @Patch()
  actualizar(): string {
    return "aqui se van a ACTULIAZAR los datos";
  }

  @Put()
  remplazar(): string{
    return "aqui se van a REMPLAZAR los datos";
  }

  @Delete()
  borrar(): string {
    return "aqui se van a ELIMINAR los datos";
  }

  
}

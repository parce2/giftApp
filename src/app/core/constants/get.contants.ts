import { HttpParams } from '@angular/common/http'
import { environment } from '../../../environments/environment';
const valor=10;
 
export const params = new HttpParams()
.set('api_key',environment.API)
.set('limite', valor.toString());
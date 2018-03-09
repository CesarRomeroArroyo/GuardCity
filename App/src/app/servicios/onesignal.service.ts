import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OnesignalService {

  constructor(private http: HttpClient) { }

  enviarPush(mensaje) {
    const data = {'app_id': 'a6918465-7012-4c72-9c57-edf785e6ced8',
                  'included_segments': ['All'],
                  'contents': {'en': mensaje}
                };
    this.http.post('https://onesignal.com/api/v1/notifications', data).subscribe(
      result => {
        console.log(result);
      }
    );
  }
}

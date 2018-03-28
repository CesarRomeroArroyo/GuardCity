import { Injectable } from '@angular/core';

@Injectable()
export class  AppSettings {
    public endPointCore = 'http://localhost:56929/api/';
    public endPointTitan = 'http://localhost:56929/api/';
    public distancia;

    guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    getCurrentDay() {
        const today = new Date();
        let dd = today.getDate().toString();
        let mm = (today.getMonth() + 1).toString();
        const  yyyy = today.getFullYear().toString();
        if (parseInt(dd, 0) < 10) {
            dd = `0${dd}`;
        }

        if (parseInt(mm, 0) < 10) {
            mm = `0${mm}`;
        }
        return `${dd}/${mm}/${yyyy}`;
    }

    getCurrentHour() {
      const d = new Date();
      return `${this.addZero(d.getHours())}:${this.addZero(d.getMinutes())}:${this.addZero(d.getSeconds())}`;
    }

    addZero(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }

    getIconosMapas(result) {
        result.forEach(data => {
            switch (data.tipo) {
              case 'Homicidio':
                  data['icon'] = {
                      url: 'assets/img/iconRojo.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Robo':
                  data['icon'] = {
                      url: 'assets/img/iconRosado.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Consumo Venta de Drogas':
                  data['icon'] = {
                      url: 'assets/img/iconVerde.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Falta de Alumbrado':
                  data['icon'] = {
                      url: 'assets/img/iconRosadoFuerte.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Fuga de Agua':
                  data['icon'] = {
                      url: 'assets/img/iconAzulRey.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Fuga de Gas':
                  data['icon'] = {
                      url: 'assets/img/iconGris.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Objetos Perdidos':
                  data['icon'] = {
                      url: 'assets/img/iconNaranaja.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Otros':
                  data['icon'] = {
                      url: 'assets/img/iconAmarillo.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Vandalismo':
                  data['icon'] = {
                      url: 'assets/img/iconNaranajaOscuro.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Vehiculo Mal Parqueado':
                  data['icon'] = {
                      url: 'assets/img/iconVerdeClaro.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Violacion':
                  data['icon'] = {
                      url: 'assets/img/iconAzulCeleste.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Violencia Intrafamiliar':
                  data['icon'] = {
                      url: 'assets/img/iconNormal.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Zona Sospechosa':
                  data['icon'] = {
                      url: 'assets/img/iconMorado.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
            }
          });
          return result;
    }

    getIconosMapasIndividual(data) {
            switch (data[0].tipo) {
              case 'Homicidio':
                  data[0]['icon'] = {
                      url: 'assets/img/iconRojo.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Robo':
                  data[0]['icon'] = {
                      url: 'assets/img/iconRosado.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Consumo Venta de Drogas':
                  data[0]['icon'] = {
                      url: 'assets/img/iconVerde.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Falta de Alumbrado':
                  data[0]['icon'] = {
                      url: 'assets/img/iconRosadoFuerte.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Fuga de Agua':
                  data[0]['icon'] = {
                      url: 'assets/img/iconAzulRey.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Fuga de Gas':
                  data[0]['icon'] = {
                      url: 'assets/img/iconGris.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Objetos Perdidos':
                  data[0]['icon'] = {
                      url: 'assets/img/iconNaranaja.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Otros':
                  data[0]['icon'] = {
                      url: 'assets/img/iconNegro.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Vandalismo':
                  data[0]['icon'] = {
                      url: 'assets/img/iconNaranajaOscuro.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Vehiculo Mal Parqueado':
                  data[0]['icon'] = {
                      url: 'assets/img/iconVerdeClaro.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Violacion':
                  data[0]['icon'] = {
                      url: 'assets/img/iconAzulCeleste.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Violencia Intrafamiliar':
                  data[0]['icon'] = {
                      url: 'assets/img/iconNormal.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
                case 'Zona Sospechosa':
                  data[0]['icon'] = {
                      url: 'assets/img/iconMorado.png',
                      scaledSize: {
                        height: 45,
                        width: 45
                      }
                    };
                  break;
            }
          return data[0];
    }

    private rad (x) {
      return x * Math.PI / 180;
    }

    obtenerDistancia(lon1, lat1, lon2, lat2, tipo= 'M') {
      const R = 6378.137; // Radio de la tierra en km
      lon1 = parseFloat(lon1);
      lon2 = parseFloat(lon2);
      lat1 = parseFloat(lat1);
      lat2 = parseFloat(lat2);

      const dLat = this.rad (lat2 - lat1);
      const dLong = this.rad(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2))
                * Math.sin(dLong / 2) * Math.sin(dLong / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
      switch (tipo) {
        case 'M':
          return d * 1000;
        case 'K':
          return d;
      }
    }
}

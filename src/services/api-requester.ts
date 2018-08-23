import {HttpClient, json} from 'aurelia-fetch-client'

export class apiRequester extends HttpClient {
    client: HttpClient;

    constructor() {
        super();
        this.client = new HttpClient();
        this.client.configure(config => {
            config.withInterceptor({
                request(request) {
                    // if (sesion.Token) {
                    //     if (request.headers.has('s-token')) {
                    //         request.headers.delete('s-token');
                    //     }
                    //     request.headers.append('s-token', sesion.Token);
                    // }

                    // if (sesion.Pais_Id) {
                    //     if (request.headers.has('s-paisid')) {
                    //         request.headers.delete('s-paisid');
                    //     }
                    //     request.headers.append('s-paisid', sesion.Pais_Id.toString());
                    // }
                    return request;
                },
                response(response) {
                    return response;
                }
            });
        });
    }

    public get(url): Promise<any> {
        return this.client.fetch(url)
            .then(
                response => {
                    if(response.statusText === 'OK') {
                        return response.json();
                    }
                    return response;
                }
            )
            .then(
                result => {
                    return result;
                }
            )
            .catch(error => {
                return error;
            });
    }

    public post(url, objeto): Promise<any> {
        return this.client.fetch(url, {
            method: 'post',
            body: json(objeto)
        })
            .then(response => {
                if(response.statusText === 'OK') {
                    return response.json();
                }
                return response;
            })
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            });
        // return new Promise<any>(resultado => {
        //     this.client = new HttpClient();
        //     this.client.fetch(url, {
        //         method: 'post',
        //         body: json(objeto)
        //     })
        //     .then(
        //         respuesta =>  {
        //             respuesta.json();
        //             console.log(respuesta);
        //         })
        //     .then(s => {
        //         resultado(s);
        //         console.log(s);
        //     })
        //     .catch(
        //         error => {
        //             console.log(error);
        //             // var respuesta = { Respuesta: null, Codigo: 404, Mensaje: "No se pudo conectar con: " + url }
        //             // error = resultado(respuesta);
        //         }
        //      );
        // });
    }
    
}
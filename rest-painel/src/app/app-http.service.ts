import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';

import {environment} from '../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AppHttpService {

    protected header: Headers;
    protected url: string;

    constructor(protected http: Http,
                private router: Router) {
        this.setAccessToken();
    }

    request() {
        return this.http;
    }

    setAccessToken() {
        let token = this.getCookie('token');
        this.header = new Headers({
            'Authorization': 'Bearer ' + token, 'Accept': 'application/json'
        });
    }

    builder(resource: string) {
        this.url = environment.server_url + '/api/v1/' + resource;
        return this;
    }

    list(options: any = {}) {

        let url = this.url;

        if (options.filters != undefined) {
            let filters = options.filters;
            filters.forEach((item, index) => {
                let field = Object.keys(item)[0];
                let value = item[field];
                url = url + '?where[' + field + ']=' + value;
            })

        }

        let observable = this.http.get(url, {headers: this.header});
        return this.toPromise(observable);
    }

    view(id: number) {
        let observable = this.http.get(this.url + '/' + id, {headers: this.header});
        return this.toPromise(observable);
    }

    update(id: number, data: Object) {
        let observable = this.http.put(this.url + '/' + id, data, {headers: this.header});
        return this.toPromise(observable);
    }

    insert(data: Object) {
        let observable = this.http.post(this.url, data, {headers: this.header});
        return this.toPromise(observable);
    }

    remove(id: number) {
        let observable = this.http.delete(this.url + '/' + id, {headers: this.header})
        return this.toPromise(observable);
    }

    protected toPromise(request) {
        return request.toPromise()
            .then((res) => {
                return res.json() || {};
            })
            .catch((error) => {
                let message = 'Algo deu errado ' + error.status;

                if (error.status === 401) {
                    message = 'Você não tem permissão';
                    this.router.navigate(['/login']);
                }

                if (error.status === 422) {
                    message = 'Falha de validação';
                }

                if (error.status === 404) {
                    message = 'Impossível se conectar ao servidor';
                }

                window.Materialize.toast(message, 3000, 'red');
            });
    }

    private getCookie(name: string) {

        let cookies = document.cookie;
        if(!cookies) {
            return null;
        }

        let cookiesCollection : string[] = cookies.split(';');
        for(let i = 0; i < cookiesCollection.length; i++) {
            let cookieCurrent = cookiesCollection[i].split('=');
            if(cookieCurrent[0].trim() == name) {
                return cookieCurrent[1];
            }
        }
        return null;
    }
}
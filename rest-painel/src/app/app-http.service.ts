import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AppHttpService {

    protected header: Headers;
    protected url: string;

    constructor(protected http: Http) {
        this.setAccessToken();
    }

    request() {
        return this.http;
    }

    getUser() {
        return this.builder('auth/me')
            .list();
    }

    setAccessToken() {
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExYjNjMjdiNmE3MWNmOWYyMzk5MDNlZDk4ZDM3OTI1Nzk4YjY2MzY4ZWU3Yjg5ODYwODkzZTdjYmE2ZDViNThkODY3ZTVjOWI0ZDYyNDdkIn0.eyJhdWQiOiIzIiwianRpIjoiMTFiM2MyN2I2YTcxY2Y5ZjIzOTkwM2VkOThkMzc5MjU3OThiNjYzNjhlZTdiODk4NjA4OTNlN2NiYTZkNWI1OGQ4NjdlNWM5YjRkNjI0N2QiLCJpYXQiOjE1MDc5NDUyNTksIm5iZiI6MTUwNzk0NTI1OSwiZXhwIjoxNTM5NDgxMjU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.WD96yF6_-xYlmrWFxktVENrwsEnrIL5YBsyQ6CutPQpcKzcKhMW8GQpNC9kDSKOEunOI5u4cePS04m7JvGtv7PRKWqZLj_ggNTQOlR5Am4vMaeHXzvblmb3ii1mqo0cCWioIKNFLO_0Lv_ww60peMrEs5td2j8PTe8dBo6MUbDrJ_T8HBGYErQgozfs_9V8z8LYeLCc7ucTzMTv6UoYYfWhQS6wL1WinOqfsCK9xZ0wgSITYk3-ODisIMk8_ZenU5T9AOCyglLI4g5WUuNbsUygExUaOYgtxQz_AMA8n_LlumruSJfEZywNV5mLWjGYILKkMT_RKSGU3PlGazC3rX3gT-xVhTfKi8DO7R43e4y7wOV0xsscqgIcJ2pA0hv9rtehkTtXIQztFu3ea0O7LjwVkVKAz899yAKDbjQR3IyhAOCO8Y8CXci6O8P2xx3-RwrMM2dfMxmJCE7F7M3-AsAsaCsXjZLOFE2x4DDByKT35TKcrSh9CmDNEOxviSFIQTX2DEy05m24Iseh-Zm25iClkX-PKJqMsssAyShrJMLVsiL60A66G0eflAT7a0QAU0u3wZBZuoKmDUjjREJmC4eDap0ZQCbrVbQWK9eiZypazY3EFRCxTH06lIXzR5GHTS1qwDbnwd2mLBQc8UfydLXqCajH9YsN-3bEDgdtRbNA';
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

        if(options.filters != undefined) {
            let filters = options.filters;
            filters.forEach((item, index) => {
                let field = Object.keys(item)[0];
                let value = item[field];
                url = url + '?where['+field+']=' + value;
            })

        }

        return this.http.get(url,  {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    view(id: number) {
        return this.http.get(this.url + '/' + id, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    update(id: number, data: Object) {
        return this.http.put(this.url + '/' + id, data, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    insert(data: Object) {
        return this.http.post(this.url, data, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    remove (id:number) {
        return this.http.delete(this.url + '/' + id, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }



}
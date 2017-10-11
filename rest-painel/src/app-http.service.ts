import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class AppHttpService {
    protected header: Headers;

    setAccessToken() {
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRkYTY5ZWU2YzQ5YzI4NTQ1Yjk3Yzc1ZDE2NTA0ZDAxNjRiZmRlODRkNjk4Y2Q0ZjRhZjM4MmQ5YWI4YTg3MGJlNmJhODg2ZDcwZjg4OWM2In0.eyJhdWQiOiIzIiwianRpIjoiNGRhNjllZTZjNDljMjg1NDViOTdjNzVkMTY1MDRkMDE2NGJmZGU4NGQ2OThjZDRmNGFmMzgyZDlhYjhhODcwYmU2YmE4ODZkNzBmODg5YzYiLCJpYXQiOjE1MDc2OTcwMDUsIm5iZiI6MTUwNzY5NzAwNSwiZXhwIjoxNTM5MjMzMDA1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.QPxDR5zmICkyNinp6YdSi_hAT9wVpHHIjBcqxCLfoEzn6ULpDsy0IxRnt5yvpv3qfVkJ2PV8Sn9Qs86mLoa9OlQzNA6w1A7jpEqfwgE0iWif8RB_155MTHRIVzz6rWswYpBiALCm9Mtle7yan0jm7pUxTXB78nJyHyoJGyv87KNIa16CSwmYbEQc4g7Gt8wWMOIGjMqNeblG-okYwuikWhIOi7oMPFAXvJMm4bo5JCI8H7jupYicmNkrd3l7A6ASD085jh62u0sgdcCBZ2eUPx8-9XALq2f3O0jkQQQnMN5BmvTY96COimMrYRfkd7ogQ211QDwp_AhDhpjMMz4u7XaU3WUCeJB0R3Nv4BZ0suRz6359lPGOR-MBhRqzs7tvw-Pa4GqMh_l1mM7QntGuO91oee8kv1_pUvQZv6GhqgIdfSx4F8yKE5Fkn3eGcVR7RUDVfkFTcLJQX_-4JV07ksz69gwpjZQ9Ck2KJntQQJvdYXxjL9ukMS4FGB5l3sVzdpf9xkr-0Qtnc67JdZlEwMDJSYmFZzIUPsbnF47claXAC0xzJHE5oTcQP5GmDbma0mvkkuX-Nf6eSY8vdLm80qIx5l6Z2UEWwOaZGG_NwPKTKAokIgDExiSLLWLdG6A9OgNi7l1SFOBNgdGhTCjWb-Ly1xFMFQHUuQ6bIpOZVWs';
        this.header = new Headers({
            'Authorization' : 'Bearer' + token
        });
    }
}
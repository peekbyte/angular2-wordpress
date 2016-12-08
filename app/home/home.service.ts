import { Injectable }    from '@angular/core';
import {Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../app.Settings';

@Injectable()
export class HomeService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private postsUrl = AppSettings.APP_ENDPOINT() + 'wp-json/wp/v2/posts';
    private tagsUrl = AppSettings.APP_ENDPOINT() + 'wp-json/wp/v2/tags';

    constructor(private http: Http) { }

    getPosts(page: number, per_page: number){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.get(this.postsUrl + '?page=' + page + '&per_page=' + per_page)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getPost(id: number){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.get(this.postsUrl + '/' + id)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }


    getTags(){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.get(this.tagsUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
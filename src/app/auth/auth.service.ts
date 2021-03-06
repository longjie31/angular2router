import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;
    // 存储url，以便登录后重定向
    redirectUrl: string;

    // 登录
    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        );
    }

    // 登出
    logout(): void {
        this.isLoggedIn = false;
    }
}

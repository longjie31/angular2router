import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('路由守卫已启用');
        const url: string = state.url;
        return this.checkLogin(url);
    }

    // 检查是否登录
    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // 存储尝试重定向的URL
        this.authService.redirectUrl = url;
        // 使用附加功能导航到登录页面
        this.router.navigate(['/login']);
        return false;
    }
}

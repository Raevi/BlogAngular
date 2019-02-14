import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {AuthenticationService} from '../service/AuthService'

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthenticationService, private router: Router){
        
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        if(this.authService.isAuth){
            return true;
        } else {
            this.router.navigate(['/auth']);
        }
    }
}

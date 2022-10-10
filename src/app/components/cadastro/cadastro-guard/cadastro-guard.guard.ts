import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CadastroComponent } from '../cadastro.component';

@Injectable({
  providedIn: 'root',
})
export class CadastroGuard implements CanDeactivate<CadastroComponent> {
  canDeactivate(
    component: CadastroComponent
  ): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.addSenha()) {
      return false;
    } else {
      return true;
    }
  }
}


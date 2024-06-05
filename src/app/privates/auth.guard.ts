import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const dataLocal:any = localStorage.getItem('user')
  const user = JSON.parse(dataLocal)
  if(user.user.id==1){
    return true
  }else{
    alert('Bạn không có quyền truy cập')
    router.navigate(['/login'])
    return false
  }

};

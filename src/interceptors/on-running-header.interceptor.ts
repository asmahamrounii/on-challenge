import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Response } from 'express';
import { Observable } from 'rxjs';
  
  @Injectable()
  export class OnRunningHeaderInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
      const response: Response = context.switchToHttp().getResponse();
  
      response.setHeader('on-running', 'always');
  
      return next.handle();
    }
}

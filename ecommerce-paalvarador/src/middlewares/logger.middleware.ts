import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const now = new Date();

    const dateString = now.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour12: false,
    });

    const timeString = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    console.log(
      `Estas ejecutando el método ${req.method} en la ruta ${req.url} el ${dateString} a las ${timeString} horas`,
    );
    next();
  }
}

export function logger(req: Request, res: Response, next: NextFunction) {
  const now = new Date();

  const dateString = now.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: false,
  });

  const timeString = now.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  console.log(
    `Estas ejecutando el método ${req.method} en la ruta ${req.url} el ${dateString} a las ${timeString} horas`,
  );
  next();
}

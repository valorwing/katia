import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class LinkpreviewMiddleware implements NestMiddleware {
  private readonly botUserAgents = [
    'WhatsApp',
    'TelegramBot',
    'Twitterbot',
    'Slackbot',
    'facebookexternalhit',
    'Discordbot',
  ];

  use(req: Request, res: Response, next: NextFunction) {
    const userAgent = req.headers['user-agent'] || '';

    if (this.botUserAgents.some((bot) => userAgent.includes(bot))) {
      return res.send(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <!-- Open Graph (OG) теги -->
            <meta property="og:image:width" content="1200">
            <meta property="og:image:height" content="630">
            <meta property="og:title" content="Katya">
            <meta property="og:description" content="WhatsApp">
            <meta property="og:image" content="https://katia-n98c.onrender.com/katia.jpg">
            <meta property="og:url" content="https://katia-n98c.onrender.com">
            <meta property="og:type" content="website">
        </head>
        <body>
            <h1>Me on WhatsApp</h1>
        </body>
        </html>
      `);
    }

    next();
  }
}

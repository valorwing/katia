import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/whatsApp')
  @Redirect('https://api.whatsapp.com/send?phone=393662536166', 301)
  redirect() {
    return;
  }
  @Get()
  main() {
    const indexPage: string = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Katia</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
        }
        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
        }
        h1 {
            margin: 5px 0;
        }
        .contact-button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #25D366;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <img src="https://katia-n98c.onrender.com/katia.jpg" alt="Katia">
    <h1>Katia</h1>
    <a href="https://katia-n98c.onrender.com/whatsApp" class="contact-button">Contact me on WhatsApp</a>
</body>
</html>
`;
    return indexPage;
  }

  @Get('/v1')
  resp() {
    return 'OK';
  }
}

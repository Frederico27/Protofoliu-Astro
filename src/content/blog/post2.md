---
title: "Maneira Installa Laravel"
description: "Laravel hanesan framework ida ne'ebe popular iha Komunidade Programmer Web sira, Tamba Laravel hanesan framework monolith..."
pubDate: "Sep 3 2024"
heroImage: "https://cdn.hdwebsoft.com/wp-content/uploads/2021/11/Thiet-ke-chua-co-ten-4.jpg.webp"
tags: ["Web Dev", Ariko]
---
<div style="text-align: justify">
Laravel hanesan framework ida ne'ebe popular iha Komunidade Programmer Web sira, Tamba Laravel hanesan framework monolith ne'ebe mai ho nia ekosistema ne'ebe suporta tebes Programmer sira hodi bele fasil no enjoy hodi kria aplikasaun ruma. 

Framework ne'ebe kria husi <b>Taylor Otwell</b> iha 2011 ne'e fasil tebes atu ita integra ho library no frontend framework sira seluk tamba komunidade ne'ebe sempre suporta no kria package sira ne'ebe fasilita tebes ba Programador sira.

## Rekezitu:
- **PHP**: Version >= 8.0
- **Composer**: Dependensia ka Package Manager ba PHP
- **Database**: MySQL, PostgreSQL, SQLite, no sira seluk

## Passus ba Instalasaun:

1. **Instalasaun Composer**<br>
Hodi installa Laravel ita presija iha Composer hodi sai hanesan package manager ida ba PHP hodi bele installa Laravel no library PHP sira seluk.

    1. Karik seidauk iha Composer ita bele vizita link refere hodi deskarga ka download `https://getcomposer.org/`
    2. Deskarga ona ita bele installa no cek composer iha ita nia enviromentu terminal ho maneira: `composer --version`.

2. **Instalasaun Laravel**<br>

    Depoizde ita installa ona Composer ita bele komesa installa Laravel ho komandu tuirmai:
    ```bash
    composer create-project --prefer-dist laravel/laravel project_name
    ```
    Karik susessu ona installa Laravel ita bele tama ba iha folder project ne'ebe ita foin kria.
    ```bash
    cd project_name
    ```
    Karik tama ona iha folder projetu nia laran ita bele haree estrutura file sira maka hanesan tuirmai:
    ```bash
        .
    ├── app/
    │   ├── Console/
    │   ├── Exceptions/
    │   ├── Http/
    │   │   ├── Controllers/
    │   │   ├── Middleware/
    │   ├── Models/
    │   ├── Providers/
    ├── bootstrap/
    │   └── cache/
    ├── config/
    ├── database/
    │   ├── factories/
    │   ├── migrations/
    │   └── seeders/
    ├── public/
    │   ├── css/
    │   ├── js/
    │   └── index.php
    ├── resources/
    │   ├── js/
    │   ├── lang/
    │   ├── sass/
    │   └── views/
    ├── routes/
    │   ├── api.php
    │   ├── channels.php
    │   ├── console.php
    │   └── web.php
    ├── storage/
    │   ├── app/
    │   ├── framework/
    │   └── logs/
    ├── tests/
    │   ├── Feature/
    │   └── Unit/
    ├── vendor/
    ├── .env
    ├── artisan
    ├── composer.json
    ├── package.json
    ├── phpunit.xml
    └── webpack.mix.js

    ```

3. **Konfigura Database iha Laravel**<br>
    Komesa iha Laravel versaun 11, default Database ne'ebe uza maka SQLite maibe ita bele konfigura database refere ho database ne'ebe ita uza iha file `.env` , ezemplu ita uza MySQL hanesan iha okos:
    ```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=root
    DB_PASSWORD=password
    ```

4. **Run ita nia aplikasaun Laravel**<br>
    Depoizde ita konfigura ona ita bele koko hodi run ita nia aplikasaun Laravel ho komandu tuirmai:
    ```bash
    php artisan serve
    ```
    Karik installa ona ita bele haree Aplikasaun Laravel ne'ebe lao iha URL `127.0.0.1:8000/`
    ![Run Laravel](https://laravelnews.s3.amazonaws.com/images/8jF662ByKr0ej83fvcptR890q7040zfqbubRv6x6.png "Laravel News")

    Maka ne’e deit tutorial refere, Obrigado Barak ba lee ona 😊!
</div>

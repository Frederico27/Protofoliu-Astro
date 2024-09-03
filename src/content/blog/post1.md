---
title: "Maneira Installa Django"
description: "Maneira Installa Django"
pubDate: "August 28 2024"
heroImage: "https://media.licdn.com/dms/image/D4E12AQFa53s5Cndm2w/article-cover_image-shrink_720_1280/0/1677652756314?e=2147483647&v=beta&t=K3tzT6LmZ8u4jKR0jRwlm_q6o8WeUd3-av8OFaRu6Ew"
tags: ["Web Dev"]
---

<div style="text-align: justify">
Django hanesan Framework ida ne'ebe popular iha Programador Web sira, framework ida ne'e hanesan framework ida husi framework lubuk sira seluk ne'ebe utiliza lian programasaun Python hanesan sira nia core base.

Django hanesan framework ida ne'ebe robust, simple no fasil atu implementa ba ita nia projetu website. Django mos <i>pre-build</i> ka mai kedas ho nian authentifikasaun no Admin template ne'ebe simples no kapaas.

Tamba ne'e karik ita interesante hodi kria ita nia website ho Django, mai ita aprende maneira installasaun ba Django hanesan tuirmai:
## Rekerimentu
- Python 3.x
- pip

## Installasaun

1. **Kria virtual enviromentu ba projetu nian**
   ```bash
    python -m venv env_site
   ```

2. **Ativa virtual enviromentu ne'ebe kria ona**
    - Ba Windows
    ```bash
    .\env_site\Scripts\activate.bat
    ```
     - Ba Linux
    ```bash
    source env_site/bin/activate
    ```

3. **Installa Django ho komandu tuirmai**
   ```bash
    pip install django
   ```
   ![Prosesu Installa Django](https://media.geeksforgeeks.org/wp-content/uploads/20240403164608/3.png "GeeksForGeeks")

4. **Cek Library sira ne'ebe installa ona**
    ```bash
    pip list
    ```    
    karik kompletu maka ita nia lista library sira sei sai kompletu hanesan iha okos:
    ```bash
    Package              Version
    -------------------- -----------
    Django               5.0.4
    asgiref              3.7.2
    pip                  24.0
    setuptools           63.2.0
    sqlparse             0.4.4
    tzdata               2024.1
    ```   
## Set Up Django
1. **Kria aplikasaun ka folder husi ita nia aplikasaun Django**
   ```bash
    django-admin startproject naran_projetu
   ```
   Karik kria ona aplikasaun django maka ita nia estrutura husi listing directory maka hanesan iha okos:
    ```
    .
    ├── naran_projetu/
    │   ├── manage.py
    │   ├── naran_projetu/
    │   │   ├── __init__.py
    │   │   ├── asgi.py
    │   │   ├── settings.py
    │   │   ├── urls.py
    │   │   └── wsgi.py
    │   ├── naran_aplikasaun/
    │   │   ├── migrations/
    │   │   │   └── __init__.py
    │   │   ├── admin.py
    │   │   ├── apps.py
    │   │   ├── models.py
    │   │   ├── tests.py
    │   │   └── views.py
    │   ├── static/
    │   │   └── css/
    │   │       └── style.css
    │   ├── templates/
    │   │   └── base.html
    │   └── db.sqlite3

    ```
2. **Karik install hotu ona ita koko up tok aplikasaun django refere**
    ```bash
    python manage.py runserver
    ```
    Karik susessu ona ita bele haree mosu imajen hanesan iha okos:

    ![Run Django](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-67.png "GeeksForGeeks")
    Karik Kolega sira hakarak kria aplikasaun foun iha ita nia projetu nia laran ita bele halo ho komandu tuirmai:
    ```bash
    python manage.py startapp naran_app
    ```
    Django baziku kedas nia mai ho Database SQLlite maibe karik kolega sira hakarak uza MySQL karik bele konfigura iha <b>settings.py</b> hanesan tuirmai:
    ```bash
        DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'db_lp',
            'USER': 'root',
            'PASSWORD': '',
            'HOST': '127.0.0.1',
            'PORT': '3306',
            }
        }
    ```
    Maka ne'e deit tutorial refere, Obrigado Barak ba lee ona 😊!

 </div>
  

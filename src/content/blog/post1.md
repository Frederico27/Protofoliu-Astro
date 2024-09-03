---
title: "Maneira Installa Django"
description: "Django hanesan Framework ida ne'ebe popular iha Programador Web sira, framework ida ne'e hanesan framework ida husi framework..."
pubDate: "August 28 2024"
heroImage: "https://media.licdn.com/dms/image/D4E12AQFa53s5Cndm2w/article-cover_image-shrink_720_1280/0/1677652756314?e=2147483647&v=beta&t=K3tzT6LmZ8u4jKR0jRwlm_q6o8WeUd3-av8OFaRu6Ew"
tags: ["Web Dev", "Ariko"]
---

<div style="text-align: justify">
Django hanesan Framework ida ne'ebe popular iha Programador Web sira, framework ida ne'e hanesan framework ida husi framework lubuk sira seluk ne'ebe utiliza lian programasaun Python hanesan sira nia core base.

Django hanesan framework ida ne'ebe robust, simple no fasil atu implementa ba ita nia projetu website. Django mos <i>pre-build</i> ka mai kedas ho nian authentifikasaun no Admin template ne'ebe simples no kapaas.

Tamba ne'e karik ita interesante hodi kria ita nia website ho Django, mai ita aprende maneira installasaun ba Django hanesan tuirmai:
## Rekezitu
- Python 3.x
- pip

## Installasaun

1. **Kria virtual enviromentu ba projetu nian**<br>
    Funsaun husi kria enviromentu ne'e hodi sai hanesan kaixa virtual ida hodi ita install pakote ka libary ne'ebe nesessaria deit ba ita nia aplikasaun Django no la perturba ba enviromentu global husi ita nia python.
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
2. **Karik install hotu ona ita koko run aplikasaun django refere**
    ```bash
    python manage.py runserver
    ```
    Karik susessu ona ita bele haree mosu imajen hanesan iha okos:

    ![Run Django](https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-67.png "GeeksForGeeks")
    Karik Kolega sira hakarak kria aplikasaun foun iha ita nia projetu nia laran ita bele halo ho komandu tuirmai:
    ```bash
    python manage.py startapp naran_app
    ```
3. **Konfigura Database iha Django**<br>
    Django teknikamente mai kedas ho Database SQlite maibe karik kolega sira hakarak uza MySQL ita bele konfigura iha file <b>settings.py</b> hanesan tuirmai:
    ```bash
        DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'NARAN_DATABASE',
            'USER': 'NARAN_USERNAME',
            'PASSWORD': 'PASSWORD_DATABASE',
            'HOST': 'HOST_DATABASE',
            'PORT': 'PORT_DATABASE',
            }
        }
    ```
    Maibe molok atu uza MySQL karik, tenki konfirma library mysql-client installa ona, karik seidauk bele hakerek komandu refere:
    ```bash
    pip install mysql-client
    ```
4. **Run Migrasaun**<br>
    Iha framework Django baibain ita foin installa sempre mosu notifikasaun mean iha terminal bainhira run aplikasaun, hodi halakon notifikasaun ne'e ita presija halao migrasaun ba model default husi Django ne'ebe mai ho tabela hanesan user no auth ne'ebe ita sei uza hodi tama ba iha panela admin Django nian, atu halo migrasaun ne'e ita bele hakerek komandu tuirmai:
    ```bash
    python manage.py migrate
    ```
5. **Setting SuperUser husi Admin Django**<br>
    Hanesan hau sita ona iha leten, Django mai ho nia panela admin ne'ebe installa mai kedas bainhira ita kria projetu django ida, path ka route (URL) hodi asessu panela admin ne'e baibain lokaliza iha ita-nia `IP_Address/admin` ka ezemplu `127.0.0.1:8000/admin` iha localhost 
    ![Admin Django](https://www.w3schools.com/django/screenshot_django_admin_login.png "W3Schools")
    Maibe iha ne'e ita seidauk hatene username ho password atu input. Tamba ne'e ita tenki kria konta ida hodi sai hanesan SuperUser hodi maneja buat hotu iha panela, ho komandu tuirmai:
    ```bash
    python manage.py createsuperuser
    ```
    Depoisde ita hakerek komandu refere ita, bele setting ita nia kredensial hanesan username, password no email.
    ![SuperUser Django](https://media.geeksforgeeks.org/wp-content/uploads/20200804173614/2020080410.png "GeeksForGeeks")
    No ita bele koko tama ho kredensial superadmin sira ne'ebe ita kria ona
    ![SuperUser Django](https://media.geeksforgeeks.org/wp-content/uploads/20200804230348/2020080411.png "GeeksForGeeks")
    Karik ita tama ka login ho susessu ita sei haree panela Admin Django hanesan tuirmai:
    ![Panel Admin Django](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site/admin_home.png "Mozilla")
    Maka ne'e deit tutorial refere, Obrigado Barak ba lee ona 😊!

 </div>
  

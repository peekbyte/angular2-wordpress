# Web-app

## Install

## Deploy
npm start
scp -r app username@192.168.7.110:/var/www/html

### Apache
/etc/httpd/conf/httpd.conf 

<Directory "/var/www">
    AllowOverride All
    # Allow open access:
    Require all granted
</Directory>

apachectl restart

root of app
 create file .htaccess
 RewriteEngine On
  # If an existing asset or directory is requested go to it as it is
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
  RewriteRule ^ - [L]

  # If the requested resource doesn't exist, use index.html
  RewriteRule ^ /index.html




#test


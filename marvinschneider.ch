server {
    server_name marvinschneider.ch www.marvinschneider.ch;
    root /var/www/marvinschneider.ch;
    index index.html index.php;

    # Dateiendungen entfernen
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # .html Direktzugriffe redirecten
    if ($request_uri ~ ^/(.*)\.html$) {
        return 301 /$1;
    }

    # Custom 404
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    # Logs
    access_log /var/log/nginx/marvinschneider.ch_access.log;
    error_log  /var/log/nginx/marvinschneider.ch_error.log;

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/marvinschneider.ch/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/marvinschneider.ch/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.marvinschneider.ch) {
        return 301 https://$host$request_uri;
    }
    if ($host = marvinschneider.ch) {
        return 301 https://$host$request_uri;
    }
    listen 80;
    listen [::]:80;
    server_name marvinschneider.ch www.marvinschneider.ch;
    return 404;
}
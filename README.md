# Websocket O'Reilly Book

Source: [bradleybossard/websocketsbook](https://github.com/bradleybossard/websocketsbook/commit/4d4a3090768189433c2418e3784236039d0d6ed5)

## Forwarding websockets through nginx proxy

Necessary if you'rve enabled ssl on your server

Add the following nginx map parameter

    map $http_upgrade $connection_upgrade {
      default upgrade;
      '' close;
    }

Add an upstream that points to your websocket server

    upstream websocketsserver {
      server 0.0.0.0:8181; # server_ip:ws_port
    }

Then add a location entry to your server {} block

    location /websockets_route {
      proxy_pass http://websocketsserver;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection $connection_upgrade;
    }

and of course, restart the nginx server

Then, in the browser-side Javascript, open a socket as follows

    var ws = new WebSocket("wss://bradleybossard.com/websocketsbook/ch1ws");
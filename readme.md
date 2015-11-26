Wrote an app that tests an api in increments to count the amount of entries in it.

here's my server starting:
```bash
[nodemon] starting `node server.js`
Express server listening on port 3000 in development mode
GET / 200 7.662 ms - 905
GET /script.js 200 2.668 ms - 356
```

and here's where it gets weird:
I click buttons to run and stop my script that sends my requests. it returns the desired results accurately, but I get 304s instead of 200. and seemingly at random.


I clicked the button to start.
browser console logs this:
```js
running (index):20
```

terminal logs this:
```bash
GET /118/1 304 389.693 ms - -
GET /118/2 304 168.412 ms - -
GET /118/3 304 169.172 ms - -
GET /118/4 304 196.438 ms - -
GET /118/5 304 146.195 ms - -
GET /118/6 304 143.497 ms - -
GET /118/7 304 160.488 ms - -
GET /118/8 304 153.577 ms - -
```
I clicked the button to stop.
browser console logs this:
```js
stopped (index):27
```
terminal logs nothing. just hangs.

I clicked the button to start. again. this time i switched to 119.

browser console logs this:
```js
running (index):20
```
terminal logs this:
```bash
GET /119/1 200 132.544 ms - 16
GET /119/2 200 175.267 ms - 16
GET /119/3 200 129.395 ms - 16
GET /119/4 200 146.440 ms - 16
GET /119/5 200 141.799 ms - 16
GET /119/6 200 174.851 ms - 16
GET /119/7 200 143.974 ms - 16
GET /119/8 200 163.724 ms - 16
GET /119/9 200 135.836 ms - 17
GET /119/10 200 133.848 ms - 17
GET /119/11 200 132.428 ms - 17
GET /119/12 200 143.921 ms - 17
GET /119/13 200 146.557 ms - 17
GET /119/14 200 152.358 ms - 17
GET /119/15 200 141.301 ms - 17
```

200s! Again I stop and start. and change id number back to 118. Again it logs fine in browser. but look at bash.

```bash
GET /118/1 304 148.688 ms - -
GET /118/2 304 174.726 ms - -
GET /118/3 304 185.040 ms - -
GET /118/4 304 171.173 ms - -
GET /118/5 304 178.775 ms - -
GET /118/6 304 164.895 ms - -
GET /118/7 304 174.703 ms - -
GET /118/8 304 178.954 ms - -
GET /118/9 304 244.087 ms - -
GET /118/10 304 152.537 ms - -
GET /118/11 304 192.713 ms - -
GET /118/12 304 152.938 ms - -
GET /118/13 304 126.342 ms - -
GET /118/14 304 149.316 ms - -
GET /118/15 304 171.446 ms - -
```

304s again. maybe it's a problem on 118? Hmm.. so I change back to 119 and try again.

```bash
GET /119/1 304 156.255 ms - -
GET /119/2 304 132.024 ms - -
GET /119/3 304 163.440 ms - -
GET /119/4 304 139.228 ms - -
GET /119/5 304 159.860 ms - -
GET /119/6 304 164.661 ms - -
GET /119/7 304 138.306 ms - -
GET /119/8 304 149.784 ms - -
GET /119/9 304 127.625 ms - -
GET /119/10 304 144.996 ms - -
GET /119/11 304 122.967 ms - -
GET /119/12 304 139.038 ms - -
GET /119/13 304 154.472 ms - -
GET /119/14 304 154.269 ms - -
GET /119/15 304 125.181 ms - -
GET /119/16 200 140.394 ms - 17
```

what. the. frack.

why how what why does it switch between 304 and 200 seemingly at random?

hmmmmmmmmmm

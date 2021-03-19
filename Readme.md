# Manage Cookies

Este proyecto sirve para manejar las cookies del navegador.

## Install


```sh
npm i manage-cookies
```

## Use

``` sh
import ManageCookies from 'manage-cookies';
const cookies = new ManageCookies([cookie name]);
```

## Methods

- getCookie:
 Este metodo sirve para retornar el valor de la cookie y si no existe retornara null.
``` sh
cookies.getCookie();
```
- setCOOKIE:
 Este metodo sirve para asignarle el nuevo valor a la cookie
``` sh
cookies.setCOOKIE([valor]);
```

- clearCOOKIE:
 Este metodo sirve para limpiar el valor de la cookie
``` sh
cookies.clearCOOKIE();
```

- validatorCOOKIE:
 Este metodo sirve para retornar true si la cookie existe y tiene algun valor; retornar false si no existe o si la cookie esta vacia
``` sh
cookies.validatorCOOKIE();
```

## Github

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

## License

MIT
class COOKIES {

    /**
     * @constructor
     */
    constructor(cookie = '') {

        this.COOKIE = this.getCookie(cookie);
        this.NAME_COKKIE = cookie;

    }


    /**
     * Nos regresa el valor del COOKIE
     * @function getCookie
     * @exports COOKIEValue
     */
    getCookie(name = this.COOKIE) {
        let cookie,
            prefix,
            begin,
            end;

        cookie = document.cookie;
        prefix = name + "=";
        begin = cookie.indexOf("; " + prefix);
        end = cookie.length;

        if (begin !== -1) {

            begin += 2;
            
        } else {

            begin = cookie.indexOf(prefix);

            if (begin === -1 || begin !== 0) return null;
        }

        if (cookie.indexOf(";", begin) !== -1) {
            end = cookie.indexOf(";", begin);
        }

        const result = decodeURI(cookie.substring(begin + prefix.length, end)).replace(/"/g, '');

        return result ? result : null
    }

    /**
     * Se le agrega un nuevo COOKIE
     * @function setCOOKIE
     * @param {String} COOKIE 
     */
    setCOOKIE(cookie) {
        this.COOKIE = cookie;

        document.cookie = `${this.NAME_COKKIE} = ${cookie};`
    }

    /**
     * Se limpia el COOKIE
     * @function clearCOOKIE
     */
    clearCOOKIE() {
        this.COOKIE = '';
        document.cookie = `${this.NAME_COKKIE} = ;`
    }

    /**
     * Valida si existe un token
     * @function validatorCOOKIE
     */
    validatorCOOKIE() {
        if (this.COOKIE) {
            return true
        } else {
            return false
        }
    }
}

module.exports = COOKIES;
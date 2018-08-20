export function sendRequest(request, host, method, url, body, user, pass) {
    return new Promise(function (resolve, reject) {
        // Request a user's comment from our fake blog.
        request.open(method, 'http://' + host + url)

        request.setRequestHeader('Authorization', 'Basic ' + btoa(user + ':' + pass))

        // Set function to call when resource is loaded.
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response)
            } else if (request.status === 401) {
                reject('Сбой авторизации!')
            }
            else {
                reject('Неправильный запрос')
            }
        };

        // Set function to call when loading fails.
        request.onerror = function () {
            reject('Нет ответа от устройства')
        }

        request.send(body)
    });
}

export function int2ip(ipInt) {
    return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
}

export function ip2int(ip) {
    return ip.split('.').reduce(function (ipInt, octet) { return (ipInt << 8) + parseInt(octet, 10) }, 0) >>> 0;
}

export function zfill(num, len) { return (Array(len).join("0") + num).slice(-len); }
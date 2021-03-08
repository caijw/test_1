
function createString(len) {
    let res = "";
    for (let i = 0; i < len; ++i) {
        res = `${res}a`
    }
    return res;
}

function createArraybuffer(len) {
    const buffer = new ArrayBuffer(len);
    const view   = new Uint8Array(buffer);
    for (let i = 0; i < view.length; ++i) {
        view[i] = 1;
    }
    return buffer;
}

function createSharedArrayBuffer(len) {
    const buffer = new SharedArrayBuffer(len);
    const view   = new Uint8Array(buffer);
    for (let i = 0; i < view.length; ++i) {
        view[i] = 1;
    }
    return buffer;
}

module.exports = {
    createString,
    createArraybuffer,
    createSharedArrayBuffer,
}

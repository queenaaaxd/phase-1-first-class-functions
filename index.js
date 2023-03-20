function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function nameFunction() {}
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}
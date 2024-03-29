function slow(x) {
    // CPU 집약적인 작업이 여기에 올 수 있습니다.
    alert(`slow(${x})을/를 호출함`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {    // cache에 해당 키가 있으면
            return cache.get(x); // 대응하는 값을 cache에서 읽어옵니다.
        }

        let result = func(x);  // 그렇지 않은 경우엔 func를 호출하고,

        cache.set(x, result);  // 그 결과를 캐싱(저장)합니다.
        return result;
    };
}

slow = cachingDecorator(slow);

alert(slow(1)); // slow(1)이 저장되었습니다.
alert("다시 호출: " + slow(1)); // 동일한 결과

alert(slow(2)); // slow(2)가 저장되었습니다.
alert("다시 호출: " + slow(2)); // 윗줄과 동일한 결과


// worker.slow에 캐싱 기능을 추가해봅시다.
let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        // CPU 집약적인 작업이라 가정
        alert(`slow(${x})을/를 호출함`);
        return x * this.someMethod(); // (*)
    }
};
// 이전과 동일한 코드
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x); // (**)
        cache.set(x, result);
        return result;
    };
}
alert(worker.slow(1)); // 기존 메서드는 잘 동작합니다.
worker.slow = cachingDecorator(worker.slow); // 캐싱 데코레이터 적용
alert(worker.slow(2)); // 에러 발생!, Error: Cannot read property 'someMethod' of undefined
    function deepcopy_(k, v, dest) {
        if(v instanceof Array){
            dest[k] = [];
            for (let iter in v) {
                deepcopy_(iter, v[iter], dest[k]);
            }
            return;
        }
        if (v instanceof Object) {
            dest[k] = {};
            for (let iter in v) {
                deepcopy_(iter, v[iter], dest[k]);
            }
            return;
        }
        dest[k] = v;
    }

    function deepcopy(obj) {
        var result = {};
        for (let iter in obj) {
            deepcopy_(iter, obj[iter], result);
        }
        return result;
    }
    var a = { text: "abc", ob: { number: { value: {a:"1",b:"b"}, id: [1,2,3] } } };
    var b = deepcopy(a);
    console.log(b);

var ArrayExtensions;
(function (ArrayExtensions) {
    function from(arrayLike, mapFn, thisArg) {
        var array = [];
        var push;
        if (!mapFn)
            push = function (item, index) {
                return array.push(item);
            };
        else if (thisArg === undefined)
            push = function (item, index) {
                return array.push(mapFn(item, index));
            };
        else
            push = function (item, index) {
                return array.push(mapFn.call(thisArg, item, index));
            };
        for (var i = 0; i < arrayLike.length; i++)
            push(arrayLike[i], i);
        return array;
    }
    ArrayExtensions.from = from;
})(ArrayExtensions || (ArrayExtensions = {}));
//# sourceMappingURL=from.js.map

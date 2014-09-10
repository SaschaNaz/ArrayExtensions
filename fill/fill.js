if (!Array.prototype.fill)
    Array.prototype.fill = function (value, start, end) {
        if (typeof start === "undefined") { start = 0; }
        if (typeof end === "undefined") { end = this.length; }
        for (var i = start; i < end; i++)
            this[i] = value;
    };
//# sourceMappingURL=fill.js.map

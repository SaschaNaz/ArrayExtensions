interface Array<T> {
    fill(value: T, start?: number, end?: number): T[];
}
if (!Array.prototype.fill)
    Array.prototype.fill = function (value: any, start = 0, end = this.length) {
        for (var i = start; i < end; i++)
            this[i] = value;
        return this;
    }

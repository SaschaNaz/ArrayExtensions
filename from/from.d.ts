declare module ArrayExtensions {
    interface ArrayLike<T> {
        length: number;
        [i: number]: T;
    }
    function from<T>(arrayLike: ArrayLike<T>): T[];
    function from<T>(arrayLike: ArrayLike<any>, mapFn?: (item: any, index: number) => T, thisArg?: any): T[];
}

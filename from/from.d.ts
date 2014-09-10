declare module ArrayExtensions {
    interface ArrayLike<T> {
        length: number;
        [i: number]: T;
    }
    function from<T>(arrayLike: ArrayLike<T>, mapFn?: (item: any, index: number) => any, thisArg?: any): T[];
}

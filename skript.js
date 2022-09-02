
class MyArray {

    constructor() {
        this.length = 0;
    }

    static isMyArray(obj) {
        return obj instanceof MyArray;
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    }

    pop(value) {
        let lastItem = this[this.leength - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    }

    forEach(fn) {
        for (let i = 0; i < arguments.length; i++) {
            fn(this[i]);
        }
    }

    map(fn) {
        const newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(fn(this[i], i, this));
        }
        return newArray;
    }

    [Symbol.iterator]() {
        let i = 0;
        return {

            next: () => {
                return {
                    done: i > this.length - 1,
                    value: this[i++]
                }
            }
        }
    }

    flat(depth) {
        const newArray = new MyArray();

        for (let i = 0; i < this.length; i++) {
            if (MyArray.isMyArray(this[i]) && depth > 0) {
                const result = this[i].flat(depth - 1);
                for (let j = 0; j < result.length; j++) {
                    newArray.push(result[j])
                }
            } else {
                newArray.push(this[i])
            }
        }
        return newArray;
    }

}

const myarr =  new MyArray();
myarr.push (1,2,3,4)

const myarr2 =  new MyArray();
myarr2.push (1,12,23,44);

const myarr3 =  new MyArray();
myarr3.push (2,3,4,5,6);
myarr2.push (myarr3);

const myarr4 =  new MyArray();
myarr4.push (24,35,44,54,62);
myarr3.push (myarr4);
console.log (myarr2.flat(1));
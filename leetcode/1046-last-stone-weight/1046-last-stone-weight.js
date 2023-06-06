/**
 * @param {number[]} stones
 * @return {number}
 */

class Heap {
    constructor(type) {
        this.type = type;
        this.data = [];
        this.data[0] = undefined;
    }

    print() {
        for (let i = 1; i < this.data.length; i++) {
            console.log(this.data[i])
        }
    }

    getSize() {
        return this.data.length - 1;
    }

    insert(value) {
        this.data.push(value);
        if (this.data.length == 2) {
            return;
        }
        let lastIndex = this.data.length - 1;
        while (this.data[Math.floor(lastIndex / 2)] !== undefined && this.compare(this.data[lastIndex], this.data[Math.floor(lastIndex / 2)]) > 0) {
            let temp = this.data[Math.floor(lastIndex / 2)];
            this.data[Math.floor(lastIndex / 2)] = this.data[lastIndex];
            this.data[lastIndex] = temp;
            lastIndex = Math.floor(lastIndex / 2);
        }
    }

    compare(a, b) {
        if (this.type === "min") {
            return b - a;
        } else {
            return a - b;
        }
    }

    removeTop() {
        let max = this.data[1];
        if (this.getSize() > 1) {
            this.data[1] = this.data.pop();
            this.heapify(1);
        } else {
            this.data.pop();
        }
        return max;
    }

    getTop() {
        let max = null;
        if (this.getSize() >= 1) {
            max = this.data[1];
        }
        return max;
    }

    heapify(pos) {
        if (pos * 2 > this.data.length - 1) {
            return;
        }
        if (
            (this.data[pos * 2] !== undefined && this.compare(this.data[pos * 2], this.data[pos]) > 0)
            || (this.data[pos * 2 + 1] !== undefined && this.compare(this.data[pos * 2 + 1], this.data[pos]) > 0)
        ) {
            if (this.data[pos * 2 + 1] === undefined || this.compare(this.data[pos * 2 + 1], this.data[pos * 2]) <= 0) {
                let temp = this.data[pos * 2];
                this.data[pos * 2] = this.data[pos];
                this.data[pos] = temp;
                this.heapify(pos * 2);
            } else {
                let temp = this.data[pos * 2 + 1];
                this.data[pos * 2 + 1] = this.data[pos];
                this.data[pos] = temp;
                this.heapify(pos * 2 + 1);
            }
        }
    }
}

var lastStoneWeight = function (stones) {
    let maxHeap = new Heap('max');
    for (let i = 0; i < stones.length; i++) {
        maxHeap.insert(stones[i]);
    }
    while (maxHeap.getSize() >= 2) {
        let y = maxHeap.removeTop();
        let x = maxHeap.removeTop();
        if (y > x) {
            y -= x;
            maxHeap.insert(y);
        }
    }
    let ans = 0;
    if (maxHeap.getSize() > 0) {
        ans = maxHeap.removeTop();
    }
    return ans;
};
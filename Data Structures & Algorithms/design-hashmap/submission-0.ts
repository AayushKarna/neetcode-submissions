class MyHashMap {
    private buckets: number[][][];
    private size: number;

    constructor(size = 100) {
        this.size = size;

        this.buckets = Array.from({ length: this.size }, () => []);
    }

    private hash(key: number): number {
        return key % this.size;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const bucket = this.buckets[this.hash(key)];

        const keyPosition = bucket.findIndex((el) => el[0] === key);

        if (keyPosition === -1) {
            bucket.push([key, value]);
        } else {
            bucket[keyPosition][1] = value;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const bucket = this.buckets[this.hash(key)];
        const keyPosition = bucket.findIndex((el) => el[0] === key);

        if (keyPosition === -1) {
            return -1;
        }

        return bucket[keyPosition][1];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        const bucket = this.buckets[this.hash(key)];
        const keyPosition = bucket.findIndex((el) => el[0] === key);

        if (keyPosition !== -1) {
            bucket.splice(keyPosition, 1);
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

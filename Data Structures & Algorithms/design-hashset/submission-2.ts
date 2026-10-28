class MyHashSet {
    private buckets: number[][];
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
     * @return {void}
     */
    add(key: number): void {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        const keyPosition = bucket.indexOf(key);

        if (keyPosition !== -1) {
            bucket.splice(keyPosition, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        return bucket.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

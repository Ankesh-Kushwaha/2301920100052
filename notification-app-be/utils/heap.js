export default class MinHeap {

    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] =
            [this.heap[j], this.heap[i]];
    }

    insert(node) {

        this.heap.push(node);

        let i = this.heap.length - 1;

        while (
            i > 0 &&
            this.heap[this.parent(i)].priority >
                this.heap[i].priority
        ) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    heapify(i) {

        let smallest = i;

        let l = this.left(i);
        let r = this.right(i);

        if (
            l < this.heap.length &&
            this.heap[l].priority <
                this.heap[smallest].priority
        )
            smallest = l;

        if (
            r < this.heap.length &&
            this.heap[r].priority <
                this.heap[smallest].priority
        )
            smallest = r;

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapify(smallest);
        }
    }

    remove() {

        if (this.heap.length === 0)
            return null;

        if (this.heap.length === 1)
            return this.heap.pop();

        const root = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapify(0);

        return root;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    toArray() {
        return [...this.heap];
    }
}
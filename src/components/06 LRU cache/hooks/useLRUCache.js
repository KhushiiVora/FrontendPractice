import { useRef } from "react";

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }

  get(key) {
    const node = this.cache[key];

    if (node) {
      this.moveToFirst(key);
      return node.value;
    }
    return null;
  }

  put(key, value) {
    if (this.cache[key]) {
      this.cache[key].value = value;
      this.moveToFirst(key);
    } else {
      if (Object.keys(this.cache).length === this.capacity) {
        this.removeLast();
      }
      this.addToFirst(key, value);
    }
  }

  moveToFirst(key) {
    const current = this.cache[key];
    if (!current) return;
    if (current === this.head) return;

    current.previous.next = current.next;
    if (current !== this.tail) current.next.previous = current.previous;
    else this.tail = current.previous;

    current.next = this.head;
    this.head.previous = current;
    current.previous = null;
    this.head = current;
  }

  addToFirst(key, value) {
    const newNode = {
      key,
      value,
      previous: null,
      next: null,
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.cache[key] = newNode;
  }

  removeLast() {
    if (!this.head) return;
    const key = this.tail.key;
    delete this.cache[key];

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
    }
  }
}

const useLRUCache = (capacity) => {
  const cacheRef = useRef(new LRUCache(capacity));

  return {
    get: (key) => cacheRef.current.get(key),
    put: (key, value) => cacheRef.current.put(key, value),
  };
};

export default useLRUCache;

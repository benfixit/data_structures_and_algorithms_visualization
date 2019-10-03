/* eslint-disable no-console */
function append(element) {
  this.dataStore[this.listSize] = element;
  this.listSize += 1;
}

function find(element) {
  return this.dataStore.indexOf(element);
}

function remove(element) {
  const foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    this.listSize -= 1;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  let str = '';
  for (let i = 0; i < this.dataStore.length; i += 1) {
    str += `${this.dataStore[i]} `;
  }
  return str;
}

function insert(element, after) {
  const foundAt = this.find(after);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt + 1, 0, element);
    this.listSize += 1;
    return true;
  }
  return false;
}

function clear() {
  this.dataStore = [];
  this.listSize = 0;
  this.pos = 0;
}

function contains(element) {
  return this.find(element);
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    this.pos -= 1;
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    this.pos += 1;
  }
}

function moveTo(position) {
  this.pos = position;
}

function currPos() {
  return this.pos;
}

function getElement() {
  return this.dataStore[this.pos];
}

function List() {
  this.dataStore = [];
  this.listSize = 0;
  this.pos = 0;
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.getElement = getElement;
  this.currPos = currPos;
  this.length = length;
  this.contains = contains;
  this.moveTo = moveTo;
}

const names = new List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');
console.log(names.toString());
names.remove('Raymond');
console.log(names.toString());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.setUser = void 0;
// creating a state in server to store session id and user data
const sessionIdToUserMap = new Map();
function setUser(id, user) {
    return sessionIdToUserMap.set(id, user);
}
exports.setUser = setUser;
function getUser(id) {
    return sessionIdToUserMap.get(id);
}
exports.getUser = getUser;

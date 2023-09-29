import { v4 as uuidv4 } from "uuid";

interface UserInterface {
	name: string;
	email: string;
	password: string;
}

// creating a state in server to store session id and user data
const sessionIdToUserMap = new Map();

function setUser(id: string, user: UserInterface) {
	return sessionIdToUserMap.set(id, user);
}

function getUser(id: string) {
	return sessionIdToUserMap.get(id);
}

export { setUser, getUser };

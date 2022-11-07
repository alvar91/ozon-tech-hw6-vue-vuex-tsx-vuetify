import { PERSISTED_STORAGE_NAME } from "@/constants";

export class PersistStorage {
  static initiateStorage() {
    localStorage.setItem(PERSISTED_STORAGE_NAME, JSON.stringify({}));
  }

  static getStorage() {
    let storage = localStorage.getItem(PERSISTED_STORAGE_NAME);

    if (!storage) {
      this.initiateStorage();
      storage = localStorage.getItem(PERSISTED_STORAGE_NAME);
    }

    return JSON.parse(storage as string);
  }

  static setStorage(path) {
    const storage = this.getStorage();

    if (!storage[path]) storage[path] = [];

    storage[path].push({ path, date: new Date() });

    localStorage.setItem(PERSISTED_STORAGE_NAME, JSON.stringify(storage));
  }
}

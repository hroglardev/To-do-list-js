export class StorageManager {
  static saveItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  static loadItem(key) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  static removeItem(key) {
    localStorage.removeItem(key)
  }

  static clearStorage() {
    localStorage.clear()
  }
}

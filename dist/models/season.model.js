import { firestore } from "../config/firebase.js";
export default class Season {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.number = data.number;
    this.position = data.position;
    this.dob = data.dob;
    this.height = data.height;
    this.info = data.info;
    this.img = data.img; // this.dateCreated = new Date().toUTCString();
  }

  static async getAll() {
    const response = await firestore.collection("season").get();
    return response.docs.map(doc => doc.data());
  }

  static async get(id) {
    const response = await firestore.collection("season").doc(id).get();
    return response.data();
  }

  async save() {
    // this.dateModified = new Date().toUTCString();
    const season = { ...this
    };
    const response = await firestore.collection("season").doc(season.id).set(season);
  }

  static async destroy(id) {
    const response = await firestore.collection("season").doc(id).delete();
  }

}
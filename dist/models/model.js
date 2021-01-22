// import { v4 as uuid } from "uuid";
import { firestore } from "../config/firebase.js";
export default class Player {
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
    const response = await firestore.collection("players").get();
    return response.docs.map(doc => doc.data());
  }

  static async get(id) {
    const response = await firestore.collection("players").doc(id).get();
    return response.data();
  }

  async save() {
    // this.dateModified = new Date().toUTCString();
    const player = { ...this
    };
    const response = await firestore.collection("players").doc(player.id).set(player);
  }

  static async destroy(id) {
    const response = await firestore.collection("players").doc(id).delete();
  }

}
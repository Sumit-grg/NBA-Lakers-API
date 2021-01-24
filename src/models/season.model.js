import { firestore } from "../config/firebase.js";

export default class Season {
  constructor (data) {
    this.year = data.year;
    this.win = data.win;
    this.loss = data.loss;
    this.playoffs = data.playoffs;
  }

  static async getAll(){
    const response = await firestore.collection("season").get();
    return response.docs.map(doc => doc.data());
  }

  static async get(id){
    const response = await firestore.collection("season").doc(id).get();
    return response.data();
  }

  async save(){
    // this.dateModified = new Date().toUTCString();
    const season = {...this};
    const response = await firestore.collection("season").doc(season.year).set(season);
  }

  static async destroy(id){
    const response = await firestore.collection("season").doc(id).delete();
  }
}
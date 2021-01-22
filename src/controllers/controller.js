import Player from "../models/model.js";

const getAll = async (req, res) => {
  const player = await Player.getAll();
  res.status(200).send({ player })
};

const get = async (req, res) => {
  const player = await Player.get(req.params.id);
  res.status(200).send({ player })
};

const post = (req, res) => { 
  const player = new Player(req.body); 
  player.save();                     
  res.status(201).send({ message: "posted sucessfully", player })
};

const destroy = (req, res) => {
  Player.destroy(req.params.id);
  res.status(204).send({ message: `id: ${req.params.id} deleted` })
};


export {getAll, get, post, destroy};

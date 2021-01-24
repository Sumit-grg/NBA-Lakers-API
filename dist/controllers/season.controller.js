import Season from "../models/season.model.js";

const getAll = async (req, res) => {
  const season = await Season.getAll();
  res.status(200).send({
    season
  });
};

const get = async (req, res) => {
  const season = await Season.get(req.params.id);
  !season ? res.status(404).send({
    message: `Id of '${req.params.id}' does not exist. Please select an Id between 1 - 18`
  }) : res.status(200).send({
    season
  });
};

const post = (req, res) => {
  const season = new Season(req.body);
  season.save();
  res.status(201).send({
    message: "posted sucessfully",
    season
  });
};

const destroy = (req, res) => {
  Season.destroy(req.params.id);
  res.status(204).send({
    message: `id: ${req.params.id} deleted`
  });
};

export { getAll, get, post, destroy };
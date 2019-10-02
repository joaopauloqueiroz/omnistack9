const Booking = require("../models/Booking");
//listagem, Listar unica sessão , criar, atualizar  , destruir-deletar
//index,    show,               store,   update,    destroy
module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();
    return res.json(booking);
  }
};

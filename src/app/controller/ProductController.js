import * as Yup from 'yup';

class ProductController {
  async update(req, res) {
    const schema = await Yup.object().shape({
      descricao: Yup.string(),
      preco: Yup.number(),
      disponivel: Yup.number(),
      destaque: Yup.number(),
      fkdepartamento: Yup.number(),
    });

    const { descricao, preco, disponivel, destaque, fkdepartamento } =
      await product.update(req.body);
    return res.json({
      descricao,
      disponivel,
      destaque,
      fkdepartamento,
    });
  }
}

export default new ProductController();

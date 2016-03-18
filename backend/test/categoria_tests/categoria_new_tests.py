# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
from base import GAETestCase
from datetime import datetime, date
from decimal import Decimal
from categoria_app.categoria_model import Categoria
from routes.categorias.new import index, save
from tekton.gae.middleware.redirect import RedirectResponse


class IndexTests(GAETestCase):
    def test_success(self):
        template_response = index()
        self.assert_can_render(template_response)


class SaveTests(GAETestCase):
    def test_success(self):
        self.assertIsNone(Categoria.query().get())
        redirect_response = save(codigo='1', nome='nome_string')
        self.assertIsInstance(redirect_response, RedirectResponse)
        saved_categoria = Categoria.query().get()
        self.assertIsNotNone(saved_categoria)
        self.assertEquals(1, saved_categoria.codigo)
        self.assertEquals('nome_string', saved_categoria.nome)

    def test_error(self):
        template_response = save()
        errors = template_response.context['errors']
        self.assertSetEqual(set(['codigo', 'nome']), set(errors.keys()))
        self.assert_can_render(template_response)

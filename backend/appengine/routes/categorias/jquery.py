# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from config.template_middleware import TemplateResponse
from gaecookie.decorator import no_csrf


@no_csrf
def index(_resp):
    return TemplateResponse(template_path='categorias/categoria_jquery.html')

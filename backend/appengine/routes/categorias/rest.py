# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
from gaebusiness.business import CommandExecutionException
from gaecookie.decorator import no_csrf
from gaepermission.decorator import login_not_required
from tekton.gae.middleware.json_middleware import JsonUnsecureResponse, JsonUnsecureResponse
from categoria_app import categoria_facade
@login_not_required
@no_csrf
def index():
    cmd = categoria_facade.list_categorias_cmd()
    categoria_list = cmd()
    categoria_form = categoria_facade.categoria_form()
    categoria_dcts = [categoria_form.fill_with_model(m) for m in categoria_list]
    return JsonUnsecureResponse(categoria_dcts)

@login_not_required
@no_csrf
def new(_resp, **categoria_properties):
    cmd = categoria_facade.save_categoria_cmd(**categoria_properties)
    return _save_or_update_json_response(cmd, _resp)

@login_not_required
@no_csrf
def edit(_resp, id, **categoria_properties):
    cmd = categoria_facade.update_categoria_cmd(id, **categoria_properties)
    return _save_or_update_json_response(cmd, _resp)

@login_not_required
@no_csrf
def delete(_resp, id):
    cmd = categoria_facade.delete_categoria_cmd(id)
    try:
        cmd()
    except CommandExecutionException:
        _resp.status_code = 500
        return JsonUnsecureResponse(cmd.errors)


def _save_or_update_json_response(cmd, _resp):
    try:
        categoria = cmd()
    except CommandExecutionException:
        _resp.status_code = 500
        return JsonUnsecureResponse(cmd.errors)
    categoria_form = categoria_facade.categoria_form()
    return JsonUnsecureResponse(categoria_form.fill_with_model(categoria))


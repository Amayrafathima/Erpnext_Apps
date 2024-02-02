# Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and Contributors
# License: MIT. See LICENSE
import json

import frappe
from frappe import _

from payments.payment_gateways.doctype.paytm_settings.paytm_settings import (
	get_paytm_config,
	get_paytm_params,
)


def get_context(context):
	context.no_cache = 1
	paytm_config = get_paytm_config()

	try:
		doc = frappe.get_doc("Integration Request", frappe.form_dict["order_id"])

		context.payment_details = get_paytm_params(json.loads(doc.data), doc.name, paytm_config)

		context.url = paytm_config.url

	except Exception:
		frappe.log_error()
		frappe.redirect_to_message(
			_("Invalid Token"),
			_("Seems token you are using is invalid!"),
			http_status_code=400,
			indicator_color="red",
		)

		frappe.local.flags.redirect_location = frappe.local.response.location
		raise frappe.Redirect

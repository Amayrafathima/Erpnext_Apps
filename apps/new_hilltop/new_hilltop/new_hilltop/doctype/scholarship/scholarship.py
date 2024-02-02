# Copyright (c) 2024, jaya and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Scholarship(Document):
	def validate(self):
		# student_detail = self.student_name
		# frappe.msgprint(f"Hello {student_detail}!!!")
		for row in self.get('marks_details'):
		    frappe.msgprint("{0}) Subject is {1} & Status is {2}".format(row.idx,row.course_name,row.status))









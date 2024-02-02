(() => {
  // frappe-html:/home/amreen/erp/frappe-bench/apps/hrms/hrms/public/js/templates/employees_with_unmarked_attendance.html
  frappe.templates["employees_with_unmarked_attendance"] = `{% if data.length %}

<div class="form-message yellow">
	<div>
		{{
			__(
				"Attendance is pending for these employees between the selected payroll dates. Mark attendance to proceed. Refer {0} for details.",
				["<a href='/app/query-report/Monthly%20Attendance%20Sheet'>Monthly Attendance Sheet</a>"]
			)
		}}
	</div>
</div>

<table class="table table-bordered small">
	<thead>
		<tr>
			<th style="width: 14%" class="text-left">{{ __("Employee") }}</th>
			<th style="width: 16%" class="text-left">{{ __("Employee Name") }}</th>
			<th style="width: 12%" class="text-left">{{ __("Unmarked Days") }}</th>
		</tr>
	</thead>
	<tbody>
		{% for item in data %}
			<tr>
				<td class="text-left"> {{ item.employee }} </td>
				<td class="text-left"> {{ item.employee_name }} </td>
				<td class="text-left"> {{ item.unmarked_days }} </td>
			</tr>
		{% } %}
	</tbody>
</table>

{% } else { %}

<div class="form-message green">
	<div>{{ __("Attendance has been marked for all the employees between the selected payroll dates.") }}</div>
</div>

{% } %}`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/hrms/hrms/public/js/templates/feedback_summary.html
  frappe.templates["feedback_summary"] = `<div class="feedback-summary-section my-4 d-flex">
	<!-- Ratings Summary -->
	<div class="rating-summary-numbers col-3">
		<div class="feedback-count mt-1 mb-2 text-secondary">
			{{ __("Average Rating") }}
		</div>
		<h2 class="average-rating mb-2">{{ average_rating }}</h2>

		{%=
			frappe.render_template("rating",
				{number_of_stars: 5, average_rating: average_rating, for_summary: true}
			)
		%}

		<div class="feedback-count text-secondary mt-2">
			{{ __("based on") }} {{ cstr(feedback_count) }} {{ feedback_count > 1 ? __("reviews") : __("review") }}
		</div>
	</div>

	<!-- Rating Progress Bars -->
	<div class="rating-progress-bar-section pb-0 col-4">
		{% for(let i=5; i>0; i--) { %}
		<div class="row {{ i!=1 && 'mb-3' }}">
			<div class="col-sm-3 text-nowrap flex align-items-center">
				<svg class="icon icon-sm mr-2">
					<use href="#icon-star" class="like-icon"></use>
				</svg>
				<span>{{ i }}</span>
			</div>
			<div class="col-md-7">
				<div
					class="progress rating-progress-bar"
					title="{{ reviews_per_rating[i-1] }} % of reviews are {{ i }} star"
				>
					<div
						class="progress-bar progress-bar-cosmetic"
						role="progressbar"
						aria-valuenow="{{ reviews_per_rating[i-1] }}"
						aria-valuemin="0"
						aria-valuemax="100"
						style="width: {{ reviews_per_rating[i-1] }}%;"
					></div>
				</div>
			</div>
			<div class="col-sm-1 small">{{ reviews_per_rating[i-1] }}%</div>
		</div>
		{% } %}
	</div>
</div>
`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/hrms/hrms/public/js/templates/feedback_history.html
  frappe.templates["feedback_history"] = `<div class="feedback-history mb-3">
	{% if (feedback_history.length) { %}
		{% for (let i=0, l=feedback_history.length; i<l; i++) { %}
			<div class="feedback-content p-3 d-flex flex-row mt-3" data-name="{{ feedback_history[i].name }}">
				<!-- Reviewer Info -->
				<div class="reviewer-info mb-2 col-xs-3">
					<div class="row">
						<div class="col-xs-2">
							{{ frappe.avatar(feedback_history[i].user, "avatar-medium") }}
						</div>
						<div class="col-xs-10">
							<div class="ml-2">
								<div class="title font-weight-bold">
									{{ strip_html(feedback_history[i].reviewer_name || feedback_history[i].user) }}
								</div>
								{% if (feedback_history[i].reviewer_designation) { %}
									<div class="small text-muted">
										{{ strip_html(feedback_history[i].reviewer_designation) }}
									</div>
								{% } %}
							</div>
						</div>
					</div>
				</div>

				<!-- Feedback -->
				<div class="reviewer-feedback col-xs-6">
					<div class="rating">
						{%= frappe.render_template("rating",
								{number_of_stars: 5, average_rating: feedback_history[i].total_score, for_summary: false}
							)
						%}
					</div>
					<div class="feedback my-3">
						{{ feedback_history[i].feedback }}
					</div>
				</div>

				<!-- Feedback Date & Link -->
				<div class="feedback-info col-xs-3 d-flex flex-row justify-content-end align-items-baseline">
					<div class="time small text-muted mr-2">
						{{ frappe.datetime.comment_when(feedback_history[i].added_on) }}
					</div>
					<a href="{{ frappe.utils.get_form_link(feedback_doctype, feedback_history[i].name) }}" title="{{ __("Open Feedback") }}">
						<svg class="icon icon-sm">
							<use href="#icon-link-url"></use>
						</svg>
					</a>
				</div>
			</div>
		{% } %}

	{% } else { %}
		<div class="no-feedback d-flex flex-col justify-content-center align-items-center text-muted">
			<span>{{ __("No feedback has been received yet") }}</span>
		</div>
	{% } %}
</div>`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/hrms/hrms/public/js/templates/rating.html
  frappe.templates["rating"] = `<div class="d-flex flex-col">
	<div class="rating {{ for_summary ? 'ratings-pill' : ''}}">
		{% for (let i = 1; i <= number_of_stars; i++) { %}
			{% if (i <= average_rating) { %}
				{% right_class = 'star-click'; %}
			{% } else { %}
				{% right_class = ''; %}
			{% } %}

			{% if ((i <= average_rating) || ((i - 0.5) == average_rating)) { %}
				{% left_class = 'star-click'; %}
			{% } else { %}
				{% left_class = ''; %}
			{% } %}

			<svg class="icon icon-md" data-rating={{i}} viewBox="0 0 24 24" fill="none">
				<path class="right-half {{ right_class }}" d="M11.9987 3.00011C12.177 3.00011 12.3554 3.09303 12.4471 3.27888L14.8213 8.09112C14.8941 8.23872 15.0349 8.34102 15.1978 8.3647L20.5069 9.13641C20.917 9.19602 21.0807 9.69992 20.7841 9.9892L16.9421 13.7354C16.8243 13.8503 16.7706 14.0157 16.7984 14.1779L17.7053 19.4674C17.7753 19.8759 17.3466 20.1874 16.9798 19.9945L12.2314 17.4973C12.1586 17.459 12.0786 17.4398 11.9987 17.4398V3.00011Z" fill="var(--star-fill)" stroke="var(--star-fill)"/>
				<path class="left-half {{ left_class }}" d="M11.9987 3.00011C11.8207 3.00011 11.6428 3.09261 11.5509 3.27762L9.15562 8.09836C9.08253 8.24546 8.94185 8.34728 8.77927 8.37075L3.42887 9.14298C3.01771 9.20233 2.85405 9.70811 3.1525 9.99707L7.01978 13.7414C7.13858 13.8564 7.19283 14.0228 7.16469 14.1857L6.25116 19.4762C6.18071 19.8842 6.6083 20.1961 6.97531 20.0045L11.7672 17.5022C11.8397 17.4643 11.9192 17.4454 11.9987 17.4454V3.00011Z" fill="var(--star-fill)" stroke="var(--star-fill)"/>
			</svg>
		{% } %}
	</div>
	{% if (!for_summary) { %}
		<p class="ml-3" style="line-height: 2;">
			({{ flt(average_rating, 2) }})
		</p>
	{% } %}
</div>
`;

  // ../hrms/hrms/public/js/utils.js
  frappe.provide("hrms");
  frappe.provide("hrms.utils");
  $.extend(hrms, {
    proceed_save_with_reminders_frequency_change: () => {
      frappe.ui.hide_open_dialog();
      frappe.call({
        method: "hrms.hr.doctype.hr_settings.hr_settings.set_proceed_with_frequency_change",
        callback: () => {
          cur_frm.save();
        }
      });
    },
    set_payroll_frequency_to_null: (frm) => {
      if (cint(frm.doc.salary_slip_based_on_timesheet)) {
        frm.set_value("payroll_frequency", "");
      }
    },
    get_current_employee: async (frm) => {
      var _a, _b;
      const employee = (_b = (_a = await frappe.db.get_value("Employee", { "user_id": frappe.session.user }, "name")) == null ? void 0 : _a.message) == null ? void 0 : _b.name;
      return employee;
    }
  });
})();
//# sourceMappingURL=hrms.bundle.FEIZVU5E.js.map

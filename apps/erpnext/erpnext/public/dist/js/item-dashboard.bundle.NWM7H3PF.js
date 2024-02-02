(() => {
  // frappe-html:/home/amreen/erp/frappe-bench/apps/erpnext/erpnext/stock/dashboard/item_dashboard.html
  frappe.templates["item_dashboard"] = `<div class="stock-levels">
	<div class="result">
	</div>
	<div class="more hidden" style="padding: 15px;">
		<a class="btn btn-default btn-xs btn-more">More</a>
	</div>
</div>
`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/erpnext/erpnext/stock/dashboard/item_dashboard_list.html
  frappe.templates["item_dashboard_list"] = `{% for d in data %}
	<div class="dashboard-list-item">
		<div class="row">
			<div class="col-sm-3" style="margin-top: 8px;">
				<a data-type="warehouse" data-name="{{ d.warehouse }}">{{ d.warehouse }}</a>
			</div>
			<div class="col-sm-3" style="margin-top: 8px;">
				{% if show_item %}
					<a data-type="item"
						data-name="{{ d.item_code }}">{{ d.item_code }}
						{% if d.item_name != d.item_code %}({{ d.item_name }}){% endif %}
					</a>
				{% endif %}
			</div>
			<div class="col-sm-1" style="margin-top: 8px;" title="{{ __("Reserved Stock") }}">
				<a data-name="{{ d.reserved_stock }}">{{ d.reserved_stock }}</a>
			</div>
			<div class="col-sm-3">
				<span class="inline-graph">
					<span class="inline-graph-half" title="{{ __("Reserved Qty") }}">
						<span class="inline-graph-count">{{ d.total_reserved }}</span>
						<span class="inline-graph-bar">
							<span class="inline-graph-bar-inner"
								style="width: {{ cint(Math.abs(d.total_reserved)/max_count * 100) || 5 }}%">
							</span>
						</span>
					</span>
					<span class="inline-graph-half" title="{{ __("Actual Qty {0} / Waiting Qty {1}", [d.actual_qty, d.pending_qty]) }}">
						<span class="inline-graph-count">
							{{ d.actual_qty }} {{ (d.pending_qty > 0) ? ("(" + d.pending_qty+ ")") : "" }}
						</span>
						<span class="inline-graph-bar">
							<span class="inline-graph-bar-inner dark"
								style="width: {{ cint(d.actual_qty/max_count * 100) }}%">
							</span>
							{% if d.pending_qty > 0 %}
							<span class="inline-graph-bar-inner" title="{{ __("Projected Qty") }}"
								style="width: {{ cint(d.pending_qty/max_count * 100) }}%">
							</span>
							{% endif %}
						</span>
					</span>
				</span>
			</div>
			{% if can_write %}
			<div class="col-sm-2 text-right" style="margin: var(--margin-sm) 0;">
				{% if d.actual_qty %}
				<button class="btn btn-default btn-xs btn-move"
					data-disable_quick_entry="{{ d.disable_quick_entry }}"
					data-warehouse="{{ d.warehouse }}"
					data-actual_qty="{{ d.actual_qty }}"
					data-item="{{ escape(d.item_code) }}">{{ __("Move") }}</a>
				{% endif %}
				<button style="margin-left: 7px;" class="btn btn-default btn-xs btn-add"
					data-disable_quick_entry="{{ d.disable_quick_entry }}"
					data-warehouse="{{ d.warehouse }}"
					data-actual_qty="{{ d.actual_qty }}"
					data-item="{{ escape(d.item_code) }}"
					data-rate="{{ d.valuation_rate }}">{{ __("Add") }}</a>
			</div>
			{% endif %}
		</div>
	</div>
{% endfor %}
`;

  // ../erpnext/erpnext/stock/dashboard/item_dashboard.js
  frappe.provide("erpnext.stock");
  erpnext.stock.ItemDashboard = class ItemDashboard {
    constructor(opts) {
      $.extend(this, opts);
      this.make();
    }
    make() {
      var me = this;
      this.start = 0;
      if (!this.sort_by) {
        this.sort_by = "projected_qty";
        this.sort_order = "asc";
      }
      this.content = $(frappe.render_template("item_dashboard")).appendTo(this.parent);
      this.result = this.content.find(".result");
      this.content.on("click", ".btn-move", function() {
        handle_move_add($(this), "Move");
      });
      this.content.on("click", ".btn-add", function() {
        handle_move_add($(this), "Add");
      });
      this.content.on("click", ".btn-edit", function() {
        let item = unescape($(this).attr("data-item"));
        let warehouse = unescape($(this).attr("data-warehouse"));
        let company = unescape($(this).attr("data-company"));
        frappe.db.get_value("Putaway Rule", {
          "item_code": item,
          "warehouse": warehouse,
          "company": company
        }, "name", (r) => {
          frappe.set_route("Form", "Putaway Rule", r.name);
        });
      });
      function handle_move_add(element, action) {
        let item = unescape(element.attr("data-item"));
        let warehouse = unescape(element.attr("data-warehouse"));
        let actual_qty = unescape(element.attr("data-actual_qty"));
        let disable_quick_entry = Number(unescape(element.attr("data-disable_quick_entry")));
        let entry_type = action === "Move" ? "Material Transfer" : "Material Receipt";
        if (disable_quick_entry) {
          open_stock_entry(item, warehouse, entry_type);
        } else {
          if (action === "Add") {
            let rate = unescape($(this).attr("data-rate"));
            erpnext.stock.move_item(item, null, warehouse, actual_qty, rate, function() {
              me.refresh();
            });
          } else {
            erpnext.stock.move_item(item, warehouse, null, actual_qty, null, function() {
              me.refresh();
            });
          }
        }
      }
      function open_stock_entry(item, warehouse, entry_type) {
        frappe.model.with_doctype("Stock Entry", function() {
          var doc = frappe.model.get_new_doc("Stock Entry");
          if (entry_type) {
            doc.stock_entry_type = entry_type;
          }
          var row = frappe.model.add_child(doc, "items");
          row.item_code = item;
          if (entry_type === "Material Transfer") {
            row.s_warehouse = warehouse;
          } else {
            row.t_warehouse = warehouse;
          }
          frappe.set_route("Form", doc.doctype, doc.name);
        });
      }
      this.content.find(".btn-more").on("click", function() {
        me.start += me.page_length;
        me.refresh();
      });
    }
    refresh() {
      if (this.before_refresh) {
        this.before_refresh();
      }
      let args = {
        item_code: this.item_code,
        warehouse: this.warehouse,
        parent_warehouse: this.parent_warehouse,
        item_group: this.item_group,
        company: this.company,
        start: this.start,
        sort_by: this.sort_by,
        sort_order: this.sort_order
      };
      var me = this;
      frappe.call({
        method: this.method,
        args,
        callback: function(r) {
          me.render(r.message);
          if (me.after_refresh) {
            me.after_refresh();
          }
        }
      });
    }
    render(data) {
      if (this.start === 0) {
        this.max_count = 0;
        this.result.empty();
      }
      let context = "";
      if (this.page_name === "warehouse-capacity-summary") {
        context = this.get_capacity_dashboard_data(data);
      } else {
        context = this.get_item_dashboard_data(data, this.max_count, true);
      }
      if (data && data.length === this.page_length + 1) {
        this.content.find(".more").removeClass("hidden");
        data.splice(-1);
      } else {
        this.content.find(".more").addClass("hidden");
      }
      if (context.data.length > 0) {
        this.content.find(".result").css("text-align", "unset");
        $(frappe.render_template(this.template, context)).appendTo(this.result);
      } else {
        var message = __("No Stock Available Currently");
        this.content.find(".result").css("text-align", "center");
        $(`<div class='text-muted' style='margin: 20px 5px;'>
				${message} </div>`).appendTo(this.result);
      }
    }
    get_item_dashboard_data(data, max_count, show_item) {
      if (!max_count)
        max_count = 0;
      if (!data)
        data = [];
      data.forEach(function(d) {
        d.actual_or_pending = d.projected_qty + d.reserved_qty + d.reserved_qty_for_production + d.reserved_qty_for_sub_contract;
        d.pending_qty = 0;
        d.total_reserved = d.reserved_qty + d.reserved_qty_for_production + d.reserved_qty_for_sub_contract;
        if (d.actual_or_pending > d.actual_qty) {
          d.pending_qty = d.actual_or_pending - d.actual_qty;
        }
        max_count = Math.max(
          d.actual_or_pending,
          d.actual_qty,
          d.total_reserved,
          max_count
        );
      });
      let can_write = 0;
      if (frappe.boot.user.can_write.indexOf("Stock Entry") >= 0) {
        can_write = 1;
      }
      return {
        data,
        max_count,
        can_write,
        show_item: show_item || false
      };
    }
    get_capacity_dashboard_data(data) {
      if (!data)
        data = [];
      data.forEach(function(d) {
        d.color = d.percent_occupied >= 80 ? "#f8814f" : "#2490ef";
      });
      let can_write = 0;
      if (frappe.boot.user.can_write.indexOf("Putaway Rule") >= 0) {
        can_write = 1;
      }
      return {
        data,
        can_write
      };
    }
  };
  erpnext.stock.move_item = function(item, source, target, actual_qty, rate, callback) {
    var dialog = new frappe.ui.Dialog({
      title: target ? __("Add Item") : __("Move Item"),
      fields: [
        {
          fieldname: "item_code",
          label: __("Item"),
          fieldtype: "Link",
          options: "Item",
          read_only: 1
        },
        {
          fieldname: "source",
          label: __("Source Warehouse"),
          fieldtype: "Link",
          options: "Warehouse",
          read_only: 1
        },
        {
          fieldname: "target",
          label: __("Target Warehouse"),
          fieldtype: "Link",
          options: "Warehouse",
          reqd: 1,
          get_query() {
            return {
              filters: {
                is_group: 0
              }
            };
          }
        },
        {
          fieldname: "qty",
          label: __("Quantity"),
          reqd: 1,
          fieldtype: "Float",
          description: __("Available {0}", [actual_qty])
        },
        {
          fieldname: "rate",
          label: __("Rate"),
          fieldtype: "Currency",
          hidden: 1
        }
      ]
    });
    dialog.show();
    dialog.get_field("item_code").set_input(item);
    if (source) {
      dialog.get_field("source").set_input(source);
    } else {
      dialog.get_field("source").df.hidden = 1;
      dialog.get_field("source").refresh();
    }
    if (rate) {
      dialog.get_field("rate").set_value(rate);
      dialog.get_field("rate").df.hidden = 0;
      dialog.get_field("rate").refresh();
    }
    if (target) {
      dialog.get_field("target").df.read_only = 1;
      dialog.get_field("target").value = target;
      dialog.get_field("target").refresh();
    }
    dialog.set_primary_action(__("Create Stock Entry"), function() {
      if (source && (dialog.get_value("qty") == 0 || dialog.get_value("qty") > actual_qty)) {
        frappe.msgprint(__("Quantity must be greater than zero, and less or equal to {0}", [actual_qty]));
        return;
      }
      if (dialog.get_value("source") === dialog.get_value("target")) {
        frappe.msgprint(__("Source and target warehouse must be different"));
        return;
      }
      frappe.model.with_doctype("Stock Entry", function() {
        let doc = frappe.model.get_new_doc("Stock Entry");
        doc.from_warehouse = dialog.get_value("source");
        doc.to_warehouse = dialog.get_value("target");
        doc.stock_entry_type = doc.from_warehouse ? "Material Transfer" : "Material Receipt";
        let row = frappe.model.add_child(doc, "items");
        row.item_code = dialog.get_value("item_code");
        row.s_warehouse = dialog.get_value("source");
        row.t_warehouse = dialog.get_value("target");
        row.qty = dialog.get_value("qty");
        row.conversion_factor = 1;
        row.transfer_qty = dialog.get_value("qty");
        row.basic_rate = dialog.get_value("rate");
        frappe.set_route("Form", doc.doctype, doc.name);
      });
    });
  };

  // frappe-html:/home/amreen/erp/frappe-bench/apps/erpnext/erpnext/stock/page/warehouse_capacity_summary/warehouse_capacity_summary.html
  frappe.templates["warehouse_capacity_summary"] = `{% for d in data %}
	<div class="dashboard-list-item" style="padding: 7px 15px;">
		<div class="row">
			<div class="col-sm-2" style="margin-top: 8px;">
				<a data-type="warehouse" data-name="{{ d.warehouse }}">{{ d.warehouse }}</a>
			</div>
			<div class="col-sm-2" style="margin-top: 8px; ">
				<a data-type="item" data-name="{{ d.item_code }}">{{ d.item_code }}</a>
			</div>
			<div class="col-sm-1" style="margin-top: 8px; ">
				{{ d.stock_capacity }}
			</div>
			<div class="col-sm-2" style="margin-top: 8px; ">
				{{ d.actual_qty }}
			</div>
			<div class="col-sm-2">
				<div class="progress" title="Occupied Qty: {{ d.actual_qty }}" style="margin-bottom: 4px; height: 7px; margin-top: 14px;">
					<div class="progress-bar" role="progressbar"
						aria-valuenow="{{ d.percent_occupied }}"
						aria-valuemin="0" aria-valuemax="100"
						style="width:{{ d.percent_occupied }}%;
						background-color: {{ d.color }}">
					</div>
				</div>
			</div>
			<div class="col-sm-1" style="margin-top: 8px;">
				{{ d.percent_occupied }}%
			</div>
			{% if can_write %}
			<div class="col-sm-2 text-right" style="margin-top: 2px;">
				<button
					class="btn btn-default btn-xs btn-edit"
					style="margin: 4px 0; float: left;"
					data-warehouse="{{ d.warehouse }}"
					data-item="{{ escape(d.item_code) }}"
					data-company="{{ escape(d.company) }}">
					{{ __("Edit Capacity") }}
				</button>
			</div>
			{% endif %}
		</div>
	</div>
{% endfor %}
`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/erpnext/erpnext/stock/page/warehouse_capacity_summary/warehouse_capacity_summary_header.html
  frappe.templates["warehouse_capacity_summary_header"] = `<div class="dashboard-list-item" style="padding: 12px 15px;">
	<div class="row">
		<div class="col-sm-2 text-muted" style="margin-top: 8px;">
			Warehouse
		</div>
		<div class="col-sm-2 text-muted" style="margin-top: 8px;">
			Item
		</div>
		<div class="col-sm-1 text-muted" style="margin-top: 8px;">
			Stock Capacity
		</div>
		<div class="col-sm-2 text-muted" style="margin-top: 8px;">
			Balance Stock Qty
		</div>
		<div class="col-sm-2 text-muted" style="margin-top: 8px;">
			% Occupied
		</div>
	</div>
</div>
`;
})();
//# sourceMappingURL=item-dashboard.bundle.NWM7H3PF.js.map

(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // ../india_compliance/india_compliance/public/js/purchase_reconciliation_tool/data_table_manager.js
  frappe.provide("india_compliance");
  india_compliance.DataTableManager = class DataTableManager {
    constructor(options) {
      Object.assign(this, options);
      this.data = this.data || [];
      this.make();
    }
    make() {
      this.format_data(this.data);
      this.make_no_data();
      this.render_datatable();
      this.columns_dict = {};
      for (const column of this.datatable.getColumns()) {
        const fieldname = column.field || column.id;
        this.columns_dict[fieldname] = column;
        this.columns_dict[fieldname].$filter_input = $(
          `.dt-row-filter .dt-cell--col-${column.colIndex} .dt-filter`,
          this.$datatable
        )[0];
      }
    }
    refresh(data, columns) {
      this.data = data;
      this.datatable.refresh(data, columns);
    }
    get_column(fieldname) {
      return this.columns_dict[fieldname];
    }
    get_filter_input(fieldname) {
      return this.get_column(fieldname).$filter_input;
    }
    make_no_data() {
      this.$no_data = this.$no_data || $('<div class="text-muted text-center">No Matching Data Found!</div>');
      this.$wrapper.parent().append(this.$no_data);
      this.$no_data.hide();
    }
    get_dt_columns() {
      if (!this.columns)
        return [];
      return this.columns.map(this.get_dt_column);
    }
    get_dt_column(column) {
      const docfield = {
        options: column.options || column.doctype,
        fieldname: column.fieldname,
        fieldtype: column.fieldtype,
        link_onclick: column.link_onclick,
        precision: column.precision
      };
      column.width = column.width || 100;
      let compareFn = null;
      if (docfield.fieldtype === "Date") {
        compareFn = (cell, keyword) => {
          if (!cell.content)
            return null;
          if (keyword.length !== "YYYY-MM-DD".length)
            return null;
          const keywordValue = frappe.datetime.user_to_obj(keyword);
          const cellValue = frappe.datetime.str_to_obj(cell.content);
          return [+cellValue, +keywordValue];
        };
      }
      let format = function(value, row, column2, data) {
        if (column2._value) {
          value = column2._value(value, column2, data);
        }
        return frappe.form.get_formatter(column2.docfield.fieldtype)(
          value,
          column2.docfield,
          { always_show_decimals: true },
          data
        );
      };
      return __spreadValues({
        id: column.fieldname,
        field: column.fieldname,
        name: column.label,
        content: column.label,
        editable: false,
        format,
        docfield
      }, column);
    }
    format_data() {
      if (!Array.isArray(this.data)) {
        this.data = Object.values(this.data);
      }
      if (!this.format_row)
        return;
      this.data = this.data.map(this.format_row);
    }
    get_checked_items() {
      const indices = this.datatable.rowmanager.getCheckedRows();
      return indices.map((index) => this.data[index]);
    }
    clear_checked_items() {
      const { rowmanager } = this.datatable;
      rowmanager.getCheckedRows().map((rowIndex) => rowmanager.checkRow(rowIndex, false));
    }
    render_datatable() {
      const datatable_options = __spreadProps(__spreadValues({
        dynamicRowHeight: true,
        checkboxColumn: true,
        inlineFilters: true,
        noDataMessage: "No Matching Data Found!",
        events: {
          onCheckRow: () => {
            const checked_items = this.get_checked_items();
          }
        },
        cellHeight: 34
      }, this.options), {
        columns: this.get_dt_columns(),
        data: this.data
      });
      this.datatable = new frappe.DataTable(this.$wrapper.get(0), datatable_options);
      this.$datatable = $(`.${this.datatable.style.scopeClass}`);
    }
  };

  // ../india_compliance/india_compliance/public/js/purchase_reconciliation_tool/filter_group.js
  frappe.provide("india_compliance");
  india_compliance.FILTER_OPERATORS = {
    "=": (expected_value, value) => value == expected_value,
    "!=": (expected_value, value) => value != expected_value,
    ">": (expected_value, value) => value > expected_value,
    "<": (expected_value, value) => value < expected_value,
    ">=": (expected_value, value) => value >= expected_value,
    "<=": (expected_value, value) => value <= expected_value,
    like: (expected_value, value) => _like(expected_value, value),
    "not like": (expected_value, value) => !_like(expected_value, value),
    in: (expected_values, value) => expected_values.includes(value),
    "not in": (expected_values, value) => !expected_values.includes(value),
    is: (expected_value, value) => {
      if (expected_value === "set") {
        return !!value;
      } else {
        return !value;
      }
    }
  };
  FILTER_GROUP_BUTTON = $(
    `
    <div class="custom-button-group">
        <div class="filter-selector">
            <div class="btn-group">
                <button class="btn btn-default btn-sm filter-button">
                    <span class="filter-icon">
                        ${frappe.utils.icon("filter")}
                    </span>
                    <span class="button-label hidden-xs">
                        ${__("Filter")}
                    <span>
                </button>
                <button class="btn btn-default btn-sm filter-x-button" title="${__("Clear all filters")}">
                    <span class="filter-icon">
                        ${frappe.utils.icon("filter-x")}
                    </span>
                </button>
            </div>
        </div>
    </div>
    `
  );
  var _Filter = class extends frappe.ui.Filter {
    set_conditions_from_config() {
      let filter_options = this.filter_list.filter_options;
      if (filter_options) {
        filter_options = __spreadValues({}, filter_options);
        if (this.fieldname && this.fieldname !== "name")
          delete filter_options.fieldname;
        Object.assign(this, filter_options);
      }
      this.conditions = this.conditions.filter(
        (condition) => india_compliance.FILTER_OPERATORS[condition && condition[0]]
      );
    }
  };
  india_compliance.FilterGroup = class FilterGroup extends frappe.ui.FilterGroup {
    constructor(opts) {
      if (!opts.parent)
        frappe.throw(__("india_compliance.FilterGroup: Parent element not found"));
      FILTER_GROUP_BUTTON.appendTo(opts.parent);
      Object.assign(opts, {
        filter_button: FILTER_GROUP_BUTTON.find(".filter-button"),
        filter_x_button: FILTER_GROUP_BUTTON.find(".filter-x-button")
      });
      super(opts);
    }
    _push_new_filter(...args) {
      const Filter = frappe.ui.Filter;
      try {
        frappe.ui.Filter = _Filter;
        return super._push_new_filter(...args);
      } finally {
        frappe.ui.Filter = Filter;
      }
    }
    set_clear_all_filters_event() {
      if (!this.filter_x_button)
        return;
      super.set_clear_all_filters_event();
      this.filter_x_button.on("click", () => {
        this.on_change();
      });
    }
  };
  function _like(expected_value, value) {
    expected_value = expected_value.toLowerCase();
    value = value.toLowerCase();
    if (!expected_value.endsWith("%"))
      return value.endsWith(expected_value.slice(1));
    if (!expected_value.startsWith("%"))
      return value.startsWith(expected_value.slice(0, -1));
    return value.includes(expected_value.slice(1, -1));
  }

  // ../india_compliance/india_compliance/public/js/purchase_reconciliation_tool/number_card.js
  frappe.provide("india_compliance");
  india_compliance.NumberCardManager = class NumberCardManager {
    constructor(opts) {
      Object.assign(this, opts);
      this.make_cards();
      this.show_summary();
    }
    make_cards() {
      this.$wrapper.empty();
      this.$cards = [];
      this.$summary = $(`<div class="report-summary"></div>`).hide().appendTo(this.$wrapper);
      this.cards.forEach((summary) => {
        let number_card = frappe.utils.build_summary_item(summary);
        this.$cards.push(number_card);
        number_card.appendTo(this.$summary);
      });
      this.$summary.css({
        "border-bottom": "0px",
        "margin-left": "0px",
        "margin-right": "0px"
      });
    }
    show_summary() {
      if (this.cards.length)
        this.$summary.show();
    }
  };
})();
//# sourceMappingURL=purchase_reconciliation_tool.bundle.GNDN7332.js.map

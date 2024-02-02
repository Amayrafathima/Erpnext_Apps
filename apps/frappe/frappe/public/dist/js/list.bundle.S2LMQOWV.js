(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
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
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // frappe/public/js/frappe/views/treeview.js
  var require_treeview = __commonJS({
    "frappe/public/js/frappe/views/treeview.js"(exports, module) {
      frappe.provide("frappe.treeview_settings");
      frappe.provide("frappe.views.trees");
      window.cur_tree = null;
      frappe.views.TreeFactory = class TreeFactory extends frappe.views.Factory {
        make(route) {
          frappe.model.with_doctype(route[1], function() {
            var options = {
              doctype: route[1],
              meta: frappe.get_meta(route[1])
            };
            if (!frappe.treeview_settings[route[1]] && !frappe.meta.get_docfield(route[1], "is_group")) {
              frappe.msgprint(__("Tree view is not available for {0}", [route[1]]));
              return false;
            }
            $.extend(options, frappe.treeview_settings[route[1]] || {});
            frappe.views.trees[options.doctype] = new frappe.views.TreeView(options);
          });
        }
        on_show() {
          let route = frappe.get_route();
          let treeview = frappe.views.trees[route[1]];
          treeview && treeview.make_tree();
        }
        get view_name() {
          return "Tree";
        }
      };
      frappe.views.TreeView = class TreeView {
        constructor(opts) {
          var me2 = this;
          this.opts = {};
          this.opts.get_tree_root = true;
          this.opts.show_expand_all = true;
          $.extend(this.opts, opts);
          this.doctype = opts.doctype;
          this.args = { doctype: me2.doctype };
          this.page_name = frappe.get_route_str();
          this.get_tree_nodes = me2.opts.get_tree_nodes || "frappe.desk.treeview.get_children";
          this.get_permissions();
          this.make_page();
          this.make_filters();
          this.root_value = null;
          if (me2.opts.get_tree_root) {
            this.get_root();
          }
          this.onload();
          if (!this.opts.do_not_setup_menu) {
            this.set_menu_item();
          }
          this.set_primary_action();
        }
        get_permissions() {
          this.can_read = frappe.model.can_read(this.doctype);
          this.can_create = frappe.boot.user.can_create.indexOf(this.doctype) !== -1 || frappe.boot.user.in_create.indexOf(this.doctype) !== -1;
          this.can_write = frappe.model.can_write(this.doctype);
          this.can_delete = frappe.model.can_delete(this.doctype);
        }
        make_page() {
          var me2 = this;
          if (!this.opts || !this.opts.do_not_make_page) {
            this.parent = frappe.container.add_page(this.page_name);
            frappe.ui.make_app_page({ parent: this.parent, single_column: true });
            this.page = this.parent.page;
            frappe.container.change_to(this.page_name);
            frappe.breadcrumbs.add(
              me2.opts.breadcrumb || locals.DocType[me2.doctype].module,
              me2.doctype
            );
            this.set_title();
            this.page.main.css({
              "min-height": "300px"
            });
            this.page.main.addClass("frappe-card");
          } else {
            this.page = this.opts.page;
            $(this.page[0]).addClass("frappe-card");
          }
          if (this.opts.show_expand_all) {
            this.page.add_inner_button(__("Collapse All"), function() {
              me2.tree.load_children(me2.tree.root_node, false);
            });
            this.page.add_inner_button(__("Expand All"), function() {
              me2.tree.load_children(me2.tree.root_node, true);
            });
          }
          if (this.opts.view_template) {
            var row = $('<div class="row"><div>').appendTo(this.page.main);
            this.body = $('<div class="col-sm-6 col-xs-12"></div>').appendTo(row);
            this.node_view = $('<div class="col-sm-6 hidden-xs"></div>').appendTo(row);
          } else {
            this.body = this.page.main;
          }
        }
        set_title() {
          this.page.set_title(this.opts.title || __("{0} Tree", [__(this.doctype)]));
        }
        onload() {
          var me2 = this;
          this.opts.onload && this.opts.onload(me2);
        }
        make_filters() {
          var me2 = this;
          frappe.treeview_settings.filters = [];
          $.each(this.opts.filters || [], function(i2, filter) {
            if (frappe.route_options && frappe.route_options[filter.fieldname]) {
              filter.default = frappe.route_options[filter.fieldname];
            }
            if (!filter.disable_onchange) {
              filter.change = function() {
                filter.onchange && filter.onchange();
                var val = this.get_value();
                me2.args[filter.fieldname] = val;
                if (val) {
                  me2.root_label = val;
                } else {
                  me2.root_label = me2.opts.root_label;
                }
                me2.set_title();
                me2.make_tree();
              };
            }
            me2.page.add_field(filter);
            if (filter.default) {
              $("[data-fieldname='" + filter.fieldname + "']").trigger("change");
            }
          });
        }
        get_root() {
          var me2 = this;
          frappe.call({
            method: me2.get_tree_nodes,
            args: me2.args,
            callback: function(r) {
              if (r.message) {
                if (r.message.length > 1) {
                  me2.root_label = me2.doctype;
                  me2.root_value = "";
                } else {
                  me2.root_label = r.message[0]["value"];
                  me2.root_value = me2.root_label;
                }
                me2.make_tree();
              }
            }
          });
        }
        make_tree() {
          $(this.parent).find(".tree").remove();
          var use_label = this.args[this.opts.root_label] || this.root_label || this.opts.root_label;
          var use_value = this.root_value;
          if (use_value == null) {
            use_value = use_label;
          }
          this.tree = new frappe.ui.Tree({
            parent: this.body,
            label: use_label,
            root_value: use_value,
            expandable: true,
            args: this.args,
            method: this.get_tree_nodes,
            toolbar: this.get_toolbar(),
            get_label: this.opts.get_label,
            on_render: this.opts.onrender,
            on_get_node: this.opts.on_get_node,
            on_click: (node) => {
              this.select_node(node);
            }
          });
          cur_tree = this.tree;
          cur_tree.view_name = "Tree";
          this.post_render();
        }
        rebuild_tree() {
          let me2 = this;
          frappe.call({
            method: "frappe.utils.nestedset.rebuild_tree",
            args: {
              doctype: me2.doctype
            },
            callback: function(r) {
              if (!r.exc) {
                me2.make_tree();
              }
            }
          });
        }
        post_render() {
          var me2 = this;
          me2.opts.post_render && me2.opts.post_render(me2);
        }
        select_node(node) {
          var me2 = this;
          if (this.opts.click) {
            this.opts.click(node);
          }
          if (this.opts.view_template) {
            this.node_view.empty();
            $(
              frappe.render_template(me2.opts.view_template, {
                data: node.data,
                doctype: me2.doctype
              })
            ).appendTo(this.node_view);
          }
        }
        get_toolbar() {
          var me2 = this;
          var toolbar = [
            {
              label: __(me2.can_write ? "Edit" : "Details"),
              condition: function(node) {
                return !node.is_root && me2.can_read;
              },
              click: function(node) {
                frappe.set_route("Form", me2.doctype, node.label);
              }
            },
            {
              label: __("Add Child"),
              condition: function(node) {
                return me2.can_create && node.expandable && !node.hide_add;
              },
              click: function(node) {
                me2.new_node();
              },
              btnClass: "hidden-xs"
            },
            {
              label: __("Rename"),
              condition: function(node) {
                let allow_rename = true;
                if (me2.doctype && frappe.get_meta(me2.doctype)) {
                  if (!frappe.get_meta(me2.doctype).allow_rename)
                    allow_rename = false;
                }
                return !node.is_root && me2.can_write && allow_rename;
              },
              click: function(node) {
                frappe.model.rename_doc(me2.doctype, node.label, function(new_name) {
                  node.$tree_link.find("a").text(new_name);
                  node.label = new_name;
                  me2.tree.refresh();
                });
              },
              btnClass: "hidden-xs"
            },
            {
              label: __("Delete"),
              condition: function(node) {
                return !node.is_root && me2.can_delete;
              },
              click: function(node) {
                frappe.model.delete_doc(me2.doctype, node.label, function() {
                  node.parent.remove();
                });
              },
              btnClass: "hidden-xs"
            }
          ];
          if (this.opts.toolbar && this.opts.extend_toolbar) {
            toolbar = toolbar.filter((btn) => {
              return !me2.opts.toolbar.find((d) => d["label"] == btn["label"]);
            });
            return toolbar.concat(this.opts.toolbar);
          } else if (this.opts.toolbar && !this.opts.extend_toolbar) {
            return this.opts.toolbar;
          } else {
            return toolbar;
          }
        }
        new_node() {
          var me2 = this;
          var node = me2.tree.get_selected_node();
          if (!(node && node.expandable)) {
            frappe.msgprint(__("Select a group node first."));
            return;
          }
          this.prepare_fields();
          var d = new frappe.ui.Dialog({
            title: __("New {0}", [__(me2.doctype)]),
            fields: me2.fields
          });
          var args = $.extend({}, me2.args);
          args["parent_" + me2.doctype.toLowerCase().replace(/ /g, "_")] = me2.args["parent"];
          d.set_value("is_group", 0);
          d.set_values(args);
          d.set_primary_action(__("Create New"), function() {
            var btn = this;
            var v = d.get_values();
            if (!v)
              return;
            v.parent = node.label;
            v.doctype = me2.doctype;
            if (node.is_root) {
              v["is_root"] = node.is_root;
            } else {
              v["is_root"] = false;
            }
            d.hide();
            frappe.dom.freeze(__("Creating {0}", [me2.doctype]));
            $.extend(args, v);
            return frappe.call({
              method: me2.opts.add_tree_node || "frappe.desk.treeview.add_node",
              args,
              callback: function(r) {
                if (!r.exc) {
                  me2.tree.load_children(node);
                }
              },
              always: function() {
                frappe.dom.unfreeze();
              }
            });
          });
          d.show();
        }
        prepare_fields() {
          var me2 = this;
          this.fields = [
            {
              fieldtype: "Check",
              fieldname: "is_group",
              label: __("Group Node"),
              description: __("Further nodes can be only created under 'Group' type nodes")
            }
          ];
          if (this.opts.fields) {
            this.fields = this.opts.fields;
          }
          this.ignore_fields = this.opts.ignore_fields || [];
          var mandatory_fields = $.map(me2.opts.meta.fields, function(d) {
            return d.reqd || d.bold && !d.read_only && !!d.is_virtual ? d : null;
          });
          var opts_field_names = this.fields.map(function(d) {
            return d.fieldname;
          });
          mandatory_fields.map(function(d) {
            if ($.inArray(d.fieldname, me2.ignore_fields) === -1 && $.inArray(d.fieldname, opts_field_names) === -1) {
              me2.fields.push(d);
            }
          });
        }
        print_tree() {
          if (!frappe.model.can_print(this.doctype)) {
            frappe.msgprint(__("You are not allowed to print this report"));
            return false;
          }
          var tree = $(".tree:visible").html();
          var me2 = this;
          frappe.ui.get_print_settings(false, function(print_settings) {
            var title = __(me2.docname || me2.doctype);
            frappe.render_tree({ title, tree, print_settings });
            frappe.call({
              method: "frappe.core.doctype.access_log.access_log.make_access_log",
              args: {
                doctype: me2.doctype,
                report_name: me2.page_name,
                page: tree,
                method: "Print"
              }
            });
          });
        }
        set_primary_action() {
          var me2 = this;
          if (!this.opts.disable_add_node && this.can_create) {
            me2.page.set_primary_action(
              __("New"),
              function() {
                me2.new_node();
              },
              "add"
            );
          }
        }
        set_menu_item() {
          var me = this;
          this.menu_items = [
            {
              label: __("View List"),
              action: function() {
                frappe.set_route("List", me.doctype);
              }
            },
            {
              label: __("Print"),
              action: function() {
                me.print_tree();
              }
            },
            {
              label: __("Refresh"),
              action: function() {
                me.make_tree();
              }
            }
          ];
          if (frappe.user.has_role("System Manager") && frappe.meta.has_field(me.doctype, "lft") && frappe.meta.has_field(me.doctype, "rgt")) {
            this.menu_items.push({
              label: __("Rebuild Tree"),
              action: function() {
                me.rebuild_tree();
              }
            });
          }
          if (me.opts.menu_items) {
            me.menu_items.push.apply(me.menu_items, me.opts.menu_items);
          }
          $.each(me.menu_items, function(i, menu_item) {
            var has_perm = true;
            if (menu_item["condition"]) {
              has_perm = eval(menu_item["condition"]);
            }
            if (has_perm) {
              me.page.add_menu_item(menu_item["label"], menu_item["action"]);
            }
          });
        }
      };
    }
  });

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/ui/listing.html
  frappe.templates["listing"] = `<div class="frappe-list">
	<div class="list-filters" style="display: none;">
	</div>

	<div style="margin-bottom:9px" class="list-toolbar-wrapper hide">
		<div class="list-toolbar btn-group" style="display:inline-block; margin-right: 10px;">
		</div>
	</div>
    <div style="clear:both"></div>
	<div class="no-result text-center" style="display: none;">
		{%= no_result_message %}
	</div>
	<div class="result">
		<div class="list-headers"></div>
        <div class="list-loading text-center">
        	{%= frappe.messages.get_waiting_message(__("Loading") + "..." ) %}
        </div>
		<div class="result-list"></div>
	</div>
	<div class="list-paging-area">
		<div class="row">
			<div class="col-xs-6">
				<div class="btn-group btn-group-paging">
					<button type="button" class="btn btn-default btn-sm btn-info" data-value="20">20</button>
					<button type="button" class="btn btn-default btn-sm" data-value="100">100</button>
					<button type="button" class="btn btn-default btn-sm" data-value="500">500</button>
				</div>
			</div>
			<div class="col-xs-6 text-right">
				<button class="btn btn-default btn-more btn-sm">{%= _more %}...</button>
			</div>
		</div>
	</div>
</div>
`;

  // frappe/public/js/frappe/model/indicator.js
  frappe.has_indicator = function(doctype) {
    if (frappe.model.is_submittable(doctype)) {
      return true;
    } else if ((frappe.listview_settings[doctype] || {}).get_indicator || frappe.workflow.get_state_fieldname(doctype)) {
      return true;
    } else if (frappe.meta.has_field(doctype, "enabled") || frappe.meta.has_field(doctype, "disabled")) {
      return true;
    } else if (frappe.meta.has_field(doctype, "status") && frappe.get_meta(doctype).states.length) {
      return true;
    }
    return false;
  };
  frappe.get_indicator = function(doc, doctype, show_workflow_state) {
    if (doc.__unsaved) {
      return [__("Not Saved"), "orange"];
    }
    if (!doctype)
      doctype = doc.doctype;
    let meta = frappe.get_meta(doctype);
    var workflow = frappe.workflow.workflows[doctype];
    var without_workflow = workflow ? workflow["override_status"] : true;
    var settings = frappe.listview_settings[doctype] || {};
    var is_submittable = frappe.model.is_submittable(doctype);
    let workflow_fieldname = frappe.workflow.get_state_fieldname(doctype);
    let avoid_status_override = (frappe.workflow.avoid_status_override[doctype] || []).includes(
      doc[workflow_fieldname]
    );
    if (workflow_fieldname && (!without_workflow || show_workflow_state) && !avoid_status_override) {
      var value = doc[workflow_fieldname];
      if (value) {
        let colour = "";
        if (locals["Workflow State"][value] && locals["Workflow State"][value].style) {
          colour = {
            Success: "green",
            Warning: "orange",
            Danger: "red",
            Primary: "blue",
            Inverse: "black",
            Info: "light-blue"
          }[locals["Workflow State"][value].style];
        }
        if (!colour)
          colour = "gray";
        return [__(value), colour, workflow_fieldname + ",=," + value];
      }
    }
    if (is_submittable && doc.docstatus == 0 && !settings.has_indicator_for_draft) {
      return [__("Draft"), "red", "docstatus,=,0"];
    }
    if (is_submittable && doc.docstatus == 2 && !settings.has_indicator_for_cancelled) {
      return [__("Cancelled"), "red", "docstatus,=,2"];
    }
    if (doc.status && meta && meta.states && meta.states.find((d) => d.title === doc.status)) {
      let state = meta.states.find((d) => d.title === doc.status);
      let color_class = frappe.scrub(state.color, "-");
      return [__(doc.status), color_class, "status,=," + doc.status];
    }
    if (settings.get_indicator) {
      var indicator = settings.get_indicator(doc);
      if (indicator)
        return indicator;
    }
    if (is_submittable && doc.docstatus == 1) {
      return [__("Submitted"), "blue", "docstatus,=,1"];
    }
    if (doc.status) {
      return [__(doc.status), frappe.utils.guess_colour(doc.status)];
    }
    if (frappe.meta.has_field(doctype, "enabled")) {
      if (doc.enabled) {
        return [__("Enabled"), "blue", "enabled,=,1"];
      } else {
        return [__("Disabled"), "grey", "enabled,=,0"];
      }
    }
    if (frappe.meta.has_field(doctype, "disabled")) {
      if (doc.disabled) {
        return [__("Disabled"), "grey", "disabled,=,1"];
      } else {
        return [__("Enabled"), "blue", "disabled,=,0"];
      }
    }
  };

  // frappe/public/js/frappe/ui/filters/filter.js
  frappe.ui.Filter = class {
    constructor(opts) {
      $.extend(this, opts);
      if (this.value === null || this.value === void 0) {
        this.value = "";
      }
      this.utils = frappe.ui.filter_utils;
      this.set_conditions();
      this.set_conditions_from_config();
      this.make();
    }
    set_conditions() {
      this.conditions = [
        ["=", __("Equals")],
        ["!=", __("Not Equals")],
        ["like", __("Like")],
        ["not like", __("Not Like")],
        ["in", __("In")],
        ["not in", __("Not In")],
        ["is", __("Is")],
        [">", ">"],
        ["<", "<"],
        [">=", ">="],
        ["<=", "<="],
        ["Between", __("Between")],
        ["Timespan", __("Timespan")]
      ];
      this.nested_set_conditions = [
        ["descendants of", __("Descendants Of")],
        ["descendants of (inclusive)", __("Descendants Of (inclusive)")],
        ["not descendants of", __("Not Descendants Of")],
        ["ancestors of", __("Ancestors Of")],
        ["not ancestors of", __("Not Ancestors Of")]
      ];
      this.conditions.push(...this.nested_set_conditions);
      this.invalid_condition_map = {
        Date: ["like", "not like"],
        Datetime: ["like", "not like", "in", "not in", "=", "!="],
        Data: ["Between", "Timespan"],
        Select: ["like", "not like", "Between", "Timespan"],
        Link: ["Between", "Timespan", ">", "<", ">=", "<="],
        Currency: ["Between", "Timespan"],
        Color: ["Between", "Timespan"],
        Check: this.conditions.map((c) => c[0]).filter((c) => c !== "="),
        Code: ["Between", "Timespan", ">", "<", ">=", "<=", "in", "not in"],
        "HTML Editor": ["Between", "Timespan", ">", "<", ">=", "<=", "in", "not in"],
        "Markdown Editor": ["Between", "Timespan", ">", "<", ">=", "<=", "in", "not in"],
        Password: ["Between", "Timespan", ">", "<", ">=", "<=", "in", "not in"],
        Rating: ["like", "not like", "Between", "in", "not in", "Timespan"],
        Float: ["like", "not like", "Between", "in", "not in", "Timespan"]
      };
    }
    set_conditions_from_config() {
      if (frappe.boot.additional_filters_config) {
        this.filters_config = frappe.boot.additional_filters_config;
        for (let key of Object.keys(this.filters_config)) {
          const filter = this.filters_config[key];
          this.conditions.push([key, __(filter.label)]);
          for (let fieldtype of Object.keys(this.invalid_condition_map)) {
            if (!filter.valid_for_fieldtypes.includes(fieldtype)) {
              this.invalid_condition_map[fieldtype].push(key);
            }
          }
        }
      }
    }
    make() {
      this.filter_edit_area = $(
        frappe.render_template("edit_filter", {
          conditions: this.conditions
        })
      );
      this.parent && this.filter_edit_area.appendTo(this.parent.find(".filter-edit-area"));
      this.make_select();
      this.set_events();
      this.setup();
    }
    make_select() {
      this.fieldselect = new frappe.ui.FieldSelect({
        parent: this.filter_edit_area.find(".fieldname-select-area"),
        doctype: this.parent_doctype,
        parent_doctype: this._parent_doctype,
        filter_fields: this.filter_fields,
        input_class: "input-xs",
        select: (doctype, fieldname) => {
          this.set_field(doctype, fieldname);
        }
      });
      if (this.fieldname) {
        this.fieldselect.set_value(this.doctype, this.fieldname);
      }
    }
    set_events() {
      this.filter_edit_area.find(".remove-filter").on("click", () => {
        this.remove();
        this.on_change();
      });
      this.filter_edit_area.find(".condition").change(() => {
        if (!this.field)
          return;
        let condition = this.get_condition();
        let fieldtype = null;
        if (["in", "like", "not in", "not like"].includes(condition)) {
          fieldtype = "Data";
          this.add_condition_help(condition);
        } else {
          this.filter_edit_area.find(".filter-description").empty();
        }
        if (["Select", "MultiSelect"].includes(this.field.df.fieldtype) && ["in", "not in"].includes(condition)) {
          fieldtype = "MultiSelect";
        }
        this.set_field(this.field.df.parent, this.field.df.fieldname, fieldtype, condition);
      });
    }
    setup() {
      const fieldname = this.fieldname || "name";
      return this.set_values(this.doctype, fieldname, this.condition, this.value);
    }
    setup_state(is_new) {
      let promise = Promise.resolve();
      if (is_new) {
        this.filter_edit_area.addClass("new-filter");
      } else {
        promise = this.update_filter_tag();
      }
      if (this.hidden) {
        promise.then(() => this.$filter_tag.hide());
      }
    }
    freeze() {
      this.update_filter_tag();
    }
    update_filter_tag() {
      if (this._filter_value_set) {
        return this._filter_value_set.then(() => {
          !this.$filter_tag ? this.make_tag() : this.set_filter_button_text();
          this.filter_edit_area.hide();
        });
      } else {
        return Promise.resolve();
      }
    }
    remove() {
      this.filter_edit_area.remove();
      this.field = null;
    }
    set_values(doctype, fieldname, condition, value) {
      if (this.set_field(doctype, fieldname) === false) {
        return;
      }
      if (this.field.df.original_type === "Check") {
        value = value == 1 ? "Yes" : "No";
      }
      if (condition)
        this.set_condition(condition, true);
      this._filter_value_set = Promise.resolve();
      if (["in", "not in"].includes(condition) && Array.isArray(value)) {
        value = value.join(",");
      }
      if (Array.isArray(value)) {
        this._filter_value_set = this.field.set_value(value);
      } else if (value !== void 0 || value !== null) {
        this._filter_value_set = this.field.set_value((value + "").trim());
      }
      return this._filter_value_set;
    }
    set_field(doctype, fieldname, fieldtype, condition) {
      let cur = {};
      if (this.field)
        for (let k in this.field.df)
          cur[k] = this.field.df[k];
      let original_docfield = (this.fieldselect.fields_by_name[doctype] || {})[fieldname];
      if (!original_docfield) {
        console.warn(`Field ${fieldname} is not selectable.`);
        this.remove();
        return false;
      }
      let df = copy_dict(original_docfield);
      df.read_only = 0;
      df.hidden = 0;
      df.is_filter = true;
      delete df.hidden_due_to_dependency;
      let c = condition ? condition : this.utils.get_default_condition(df);
      this.set_condition(c);
      this.utils.set_fieldtype(df, fieldtype, this.get_condition());
      if (this.field && cur.fieldname == fieldname && df.fieldtype == cur.fieldtype && df.parent == cur.parent && df.options == cur.options) {
        return;
      }
      this.fieldselect.selected_doctype = doctype;
      this.fieldselect.selected_fieldname = fieldname;
      if (this.filters_config && this.filters_config[condition] && this.filters_config[condition].valid_for_fieldtypes.includes(df.fieldtype)) {
        let args = {};
        if (this.filters_config[condition].depends_on) {
          const field_name = this.filters_config[condition].depends_on;
          const filter_value = this.filter_list.get_filter_value(fieldname);
          args[field_name] = filter_value;
        }
        let setup_field = (field) => {
          df.fieldtype = field.fieldtype;
          df.options = field.options;
          df.fieldname = fieldname;
          this.make_field(df, cur.fieldtype);
        };
        if (this.filters_config[condition].data) {
          let field = this.filters_config[condition].data;
          setup_field(field);
        } else {
          frappe.xcall(this.filters_config[condition].get_field, args).then((field) => {
            this.filters_config[condition].data = field;
            setup_field(field);
          });
        }
      } else {
        this.make_field(df, cur.fieldtype);
      }
    }
    make_field(df, old_fieldtype) {
      let old_text = this.field ? this.field.get_value() : null;
      this.hide_invalid_conditions(df.fieldtype, df.original_type);
      this.toggle_nested_set_conditions(df);
      let field_area = this.filter_edit_area.find(".filter-field").empty().get(0);
      df.input_class = "input-xs";
      let f = frappe.ui.form.make_control({
        df,
        parent: field_area,
        only_input: true
      });
      f.refresh();
      this.field = f;
      if (old_text && f.fieldtype === old_fieldtype) {
        this.field.set_value(old_text);
      }
      this.bind_filter_field_events();
    }
    bind_filter_field_events() {
      this.field.$input.on("focusout", () => this.on_change());
      $(this.field.wrapper).find(":input").keydown((e) => {
        if (e.which == 13 && this.field.df.fieldtype !== "MultiSelect") {
          this.on_change();
        }
      });
    }
    get_value() {
      return [
        this.fieldselect.selected_doctype,
        this.field.df.fieldname,
        this.get_condition(),
        this.get_selected_value(),
        this.hidden
      ];
    }
    get_selected_value() {
      return this.utils.get_selected_value(this.field, this.get_condition());
    }
    get_selected_label() {
      return this.utils.get_selected_label(this.field);
    }
    get_condition() {
      return this.filter_edit_area.find(".condition").val();
    }
    set_condition(condition, trigger_change = false) {
      let $condition_field = this.filter_edit_area.find(".condition");
      $condition_field.val(condition);
      if (trigger_change)
        $condition_field.change();
    }
    add_condition_help(condition) {
      const description = ["in", "not in"].includes(condition) ? __("values separated by commas") : __("use % as wildcard");
      this.filter_edit_area.find(".filter-description").html(description);
    }
    make_tag() {
      if (!this.field)
        return;
      this.$filter_tag = this.get_filter_tag_element().insertAfter(
        this.parent.find(".active-tag-filters .clear-filters")
      );
      this.set_filter_button_text();
      this.bind_tag();
    }
    bind_tag() {
      this.$filter_tag.find(".remove-filter").on("click", this.remove.bind(this));
      let filter_button = this.$filter_tag.find(".toggle-filter");
      filter_button.on("click", () => {
        filter_button.closest(".tag-filters-area").find(".filter-edit-area").show();
        this.filter_edit_area.toggle();
      });
    }
    set_filter_button_text() {
      this.$filter_tag.find(".toggle-filter").html(this.get_filter_button_text());
    }
    get_filter_button_text() {
      let value = this.utils.get_formatted_value(
        this.field,
        this.get_selected_label() || this.get_selected_value()
      );
      return `${__(this.field.df.label)} ${__(this.get_condition())} ${__(value)}`;
    }
    get_filter_tag_element() {
      return $(`<div class="filter-tag btn-group">
			<button class="btn btn-default btn-xs toggle-filter"
				title="${__("Edit Filter")}">
			</button>
			<button class="btn btn-default btn-xs remove-filter"
				title="${__("Remove Filter")}">
				${frappe.utils.icon("close")}
			</button>
		</div>`);
    }
    hide_invalid_conditions(fieldtype, original_type) {
      let invalid_conditions = this.invalid_condition_map[original_type] || this.invalid_condition_map[fieldtype] || [];
      for (let condition of this.conditions) {
        this.filter_edit_area.find(`.condition option[value="${condition[0]}"]`).toggle(!invalid_conditions.includes(condition[0]));
      }
    }
    toggle_nested_set_conditions(df) {
      let show_condition = df.fieldtype === "Link" && frappe.boot.nested_set_doctypes.includes(df.options);
      this.nested_set_conditions.forEach((condition) => {
        this.filter_edit_area.find(`.condition option[value="${condition[0]}"]`).toggle(show_condition);
      });
    }
  };
  frappe.ui.filter_utils = {
    get_formatted_value(field, value) {
      if (field.df.fieldname === "docstatus") {
        value = { 0: "Draft", 1: "Submitted", 2: "Cancelled" }[value] || value;
      } else if (field.df.original_type === "Check") {
        value = { 0: "No", 1: "Yes" }[cint(value)];
      }
      return frappe.format(value, field.df, { only_value: 1 });
    },
    get_selected_value(field, condition) {
      if (!field)
        return;
      let val = field.get_value() || field.value;
      if (typeof val === "string") {
        val = strip(val);
      }
      if (condition == "is" && !val) {
        val = field.df.options[0].value;
      }
      if (field.df.original_type == "Check") {
        val = val == "Yes" ? 1 : 0;
      }
      if (["like", "not like"].includes(condition)) {
        if (val && !(val.startsWith("%") || val.endsWith("%"))) {
          val = "%" + val + "%";
        }
      } else if (["in", "not in"].includes(condition)) {
        if (val) {
          val = val.split(",").map((v) => strip(v));
        }
      } else if (frappe.boot.additional_filters_config[condition]) {
        val = field.value || val;
      }
      if (val === "%") {
        val = "";
      }
      return val;
    },
    get_selected_label(field) {
      if (["Link", "Dynamic Link"].includes(field.df.fieldtype)) {
        return field.get_label_value();
      }
    },
    get_default_condition(df) {
      if (df.fieldtype == "Data") {
        return "like";
      } else if (df.fieldtype == "Date" || df.fieldtype == "Datetime") {
        return "Between";
      } else {
        return "=";
      }
    },
    set_fieldtype(df, fieldtype, condition) {
      if (df.original_type)
        df.fieldtype = df.original_type;
      else
        df.original_type = df.fieldtype;
      df.description = "";
      df.reqd = 0;
      df.ignore_link_validation = true;
      if (fieldtype) {
        df.fieldtype = fieldtype;
        return;
      }
      if (df.fieldname == "docstatus") {
        df.fieldtype = "Select";
        df.options = [
          { value: 0, label: __("Draft") },
          { value: 1, label: __("Submitted") },
          { value: 2, label: __("Cancelled") }
        ];
      } else if (df.fieldtype == "Check") {
        df.fieldtype = "Select";
        df.options = [
          { label: __("Yes", null, "Checkbox is checked"), value: "Yes" },
          { label: __("No", null, "Checkbox is not checked"), value: "No" }
        ];
      } else if ([
        "Text",
        "Small Text",
        "Text Editor",
        "Code",
        "Attach",
        "Attach Image",
        "Markdown Editor",
        "HTML Editor",
        "Tag",
        "Phone",
        "JSON",
        "Comments",
        "Barcode",
        "Dynamic Link",
        "Read Only",
        "Assign",
        "Color"
      ].indexOf(df.fieldtype) != -1) {
        df.fieldtype = "Data";
      } else if (df.fieldtype == "Link" && [
        "=",
        "!=",
        "descendants of",
        "descendants of (inclusive)",
        "ancestors of",
        "not descendants of",
        "not ancestors of"
      ].indexOf(condition) == -1) {
        df.fieldtype = "Data";
      }
      if (df.fieldtype === "Data" && (df.options || "").toLowerCase() === "email") {
        df.options = null;
      }
      if (condition == "Between" && (df.fieldtype == "Date" || df.fieldtype == "Datetime")) {
        df.fieldtype = "DateRange";
      }
      if (condition == "Timespan" && ["Date", "Datetime", "DateRange", "Select"].includes(df.fieldtype)) {
        df.fieldtype = "Select";
        df.options = this.get_timespan_options([
          "Last",
          "Yesterday",
          "Today",
          "Tomorrow",
          "This",
          "Next"
        ]);
      }
      if (condition === "is") {
        df.fieldtype = "Select";
        df.options = [
          { label: __("Set", null, "Field value is set"), value: "set" },
          { label: __("Not Set", null, "Field value is not set"), value: "not set" }
        ];
      }
      return;
    },
    get_timespan_options(periods) {
      const period_map = {
        Last: ["Week", "Month", "Quarter", "6 months", "Year"],
        This: ["Week", "Month", "Quarter", "Year"],
        Next: ["Week", "Month", "Quarter", "6 months", "Year"]
      };
      let options = [];
      periods.forEach((period) => {
        if (period_map[period]) {
          period_map[period].forEach((p) => {
            options.push({
              label: `${period} ${p}`,
              value: `${period.toLowerCase()} ${p.toLowerCase()}`
            });
          });
        } else {
          options.push({
            label: __(period),
            value: `${period.toLowerCase()}`
          });
        }
      });
      return options;
    }
  };

  // frappe/public/js/frappe/ui/filters/filter_list.js
  frappe.ui.FilterGroup = class {
    constructor(opts) {
      $.extend(this, opts);
      this.filters = [];
      window.fltr = this;
      if (!this.filter_button) {
        this.wrapper = this.parent;
        this.wrapper.append(this.get_filter_area_template());
        this.set_filter_events();
      } else {
        this.make_popover();
      }
    }
    make_popover() {
      this.init_filter_popover();
      this.set_clear_all_filters_event();
      this.set_popover_events();
    }
    set_clear_all_filters_event() {
      if (!this.filter_x_button)
        return;
      this.filter_x_button.on("click", () => {
        this.toggle_empty_filters(true);
        if (typeof this.base_list !== "undefined") {
          this.base_list.filter_area.clear();
        } else {
          this.clear_filters();
        }
        this.update_filter_button();
      });
    }
    hide_popover() {
      var _a;
      (_a = this.filter_button) == null ? void 0 : _a.popover("hide");
    }
    init_filter_popover() {
      this.filter_button.popover({
        content: this.get_filter_area_template(),
        template: `
				<div class="filter-popover popover">
					<div class="arrow"></div>
					<div class="popover-body popover-content">
					</div>
				</div>
			`,
        html: true,
        trigger: "manual",
        container: "body",
        placement: "bottom",
        offset: "-100px, 0"
      });
    }
    toggle_empty_filters(show) {
      this.wrapper && this.wrapper.find(".empty-filters").toggle(show);
    }
    set_popover_events() {
      $(document.body).on("click", (e) => {
        if (this.wrapper && this.wrapper.is(":visible")) {
          const in_datepicker = $(e.target).is(".datepicker--cell") || $(e.target).closest(".datepicker--nav-title").length !== 0 || $(e.target).parents(".datepicker--nav-action").length !== 0;
          if ($(e.target).parents(".filter-popover").length === 0 && $(e.target).parents(".filter-box").length === 0 && this.filter_button.find($(e.target)).length === 0 && !$(e.target).is(this.filter_button) && !in_datepicker) {
            this.wrapper && this.hide_popover();
          }
        }
      });
      this.filter_button.on("click", () => {
        this.filter_button.popover("toggle");
      });
      this.filter_button.on("shown.bs.popover", () => {
        let hide_empty_filters = this.filters && this.filters.length > 0;
        if (!this.wrapper) {
          this.wrapper = $(".filter-popover");
          if (hide_empty_filters) {
            this.toggle_empty_filters(false);
            this.add_filters_to_popover(this.filters);
          }
          this.set_filter_events();
        }
        this.toggle_empty_filters(false);
        !hide_empty_filters && this.add_filter(this.doctype, "name");
      });
      this.filter_button.on("hidden.bs.popover", () => {
        this.apply();
      });
      frappe.router.on("change", () => {
        if (this.wrapper && this.wrapper.is(":visible")) {
          this.hide_popover();
        }
      });
    }
    add_filters_to_popover(filters) {
      filters.forEach((filter) => {
        filter.parent = this.wrapper;
        filter.field = null;
        filter.make();
      });
    }
    apply() {
      this.update_filters();
      this.on_change();
    }
    update_filter_button() {
      const filters_applied = this.filters.length > 0;
      const button_label = filters_applied ? __("Filters <span class='filter-label'>{0}</span>", [this.filters.length]) : __("Filter");
      this.filter_button.toggleClass("btn-default", !filters_applied).toggleClass("btn-primary-light", filters_applied);
      this.filter_button.find(".filter-icon").toggleClass("active", filters_applied);
      this.filter_button.find(".button-label").html(button_label);
      this.filter_button.attr(
        "title",
        `${this.filters.length} Filter${this.filters.length > 1 ? "s" : ""} Applied`
      );
    }
    set_filter_events() {
      this.wrapper.find(".add-filter").on("click", () => {
        this.toggle_empty_filters(false);
        this.add_filter(this.doctype, "name");
      });
      this.wrapper.find(".clear-filters").on("click", () => {
        this.toggle_empty_filters(true);
        this.clear_filters();
        this.on_change();
        this.hide_popover();
      });
      this.wrapper.find(".apply-filters").on("click", () => this.hide_popover());
    }
    add_filters(filters) {
      let promises = [];
      for (const filter of filters) {
        promises.push(() => this.add_filter(...filter));
      }
      return frappe.run_serially(promises).then(() => this.update_filters());
    }
    add_filter(doctype, fieldname, condition, value, hidden) {
      if (!fieldname)
        return Promise.resolve();
      if (!this.validate_args(doctype, fieldname))
        return false;
      const is_new_filter = arguments.length < 2;
      if (is_new_filter && this.wrapper.find(".new-filter:visible").length) {
        return Promise.resolve();
      } else {
        let args = [doctype, fieldname, condition, value, hidden];
        const promise = this.push_new_filter(args, is_new_filter);
        return promise && promise.then ? promise : Promise.resolve();
      }
    }
    validate_args(doctype, fieldname) {
      if (doctype && fieldname && !frappe.meta.has_field(doctype, fieldname) && frappe.model.is_non_std_field(fieldname)) {
        frappe.msgprint({
          message: __("Invalid filter: {0}", [fieldname.bold()]),
          indicator: "red"
        });
        return false;
      }
      return true;
    }
    push_new_filter(args) {
      if (this.filter_exists(args))
        return;
      let filter = this._push_new_filter(...args);
      if (filter && filter.value) {
        return filter._filter_value_set;
      }
    }
    _push_new_filter(doctype, fieldname, condition, value, hidden = false) {
      let args = {
        parent: this.wrapper,
        parent_doctype: this.doctype,
        doctype,
        _parent_doctype: this.parent_doctype,
        fieldname,
        condition,
        value,
        hidden,
        index: this.filters.length + 1,
        on_change: (update) => {
          if (update)
            this.update_filters();
          this.on_change();
        },
        filter_items: (doctype2, fieldname2) => {
          return !this.filter_exists([doctype2, fieldname2]);
        },
        filter_list: this.base_list || this
      };
      let filter = new frappe.ui.Filter(args);
      this.filters.push(filter);
      return filter;
    }
    get_filter_value(fieldname) {
      let filter_obj = this.filters.find((f) => f.fieldname == fieldname) || {};
      return filter_obj.value;
    }
    filter_exists(filter_value) {
      return this.filters.filter((f) => f.field).some((f) => {
        let f_value = f.get_value();
        if (filter_value.length === 2) {
          return filter_value[0] === f_value[0] && filter_value[1] === f_value[1];
        }
        return frappe.utils.arrays_equal(f_value.slice(0, 4), filter_value.slice(0, 4));
      });
    }
    get_filters() {
      return this.filters.filter((f) => f.field).map((f) => {
        return f.get_value();
      });
    }
    update_filters() {
      const filter_exists = (f) => ![void 0, null].includes(f.get_selected_value());
      this.filters.map((f) => !filter_exists(f) && f.remove());
      this.filters = this.filters.filter((f) => filter_exists(f) && f.field);
      this.update_filter_button();
      this.filters.length === 0 && this.toggle_empty_filters(true);
    }
    clear_filters() {
      this.filters.map((f) => f.remove(true));
      this.filters = [];
    }
    get_filter(fieldname) {
      return this.filters.filter((f) => {
        return f.field && f.field.df.fieldname == fieldname;
      })[0];
    }
    get_filter_area_template() {
      return $(`
			<div class="filter-area">
				<div class="filter-edit-area">
					<div class="text-muted empty-filters text-center">
						${__("No filters selected")}
					</div>
				</div>
				<hr class="divider"></hr>
				<div class="filter-action-buttons mt-2">
					<button class="text-muted add-filter btn btn-xs">
						+ ${__("Add a Filter")}
					</button>
					<div>
						<button class="btn btn-secondary btn-xs clear-filters">
							${__("Clear Filters")}
						</button>
						${this.filter_button ? `<button class="btn btn-primary btn-xs apply-filters">
								${__("Apply Filters")}
							</button>` : ""}
					</div>
				</div>
			</div>`);
    }
    get_filters_as_object() {
      return this.get_filters().reduce((acc, filter) => {
        return Object.assign(acc, {
          [filter[1]]: [filter[2], filter[3]]
        });
      }, {});
    }
    add_filters_to_filter_group(filters) {
      if (filters && filters.length) {
        this.toggle_empty_filters(false);
        filters.forEach((filter) => {
          this.add_filter(filter[0], filter[1], filter[2], filter[3]);
        });
      }
    }
    add(filters, refresh = true) {
      if (!filters || Array.isArray(filters) && filters.length === 0)
        return Promise.resolve();
      if (typeof filters[0] === "string") {
        const filter = Array.from(arguments);
        filters = [filter];
      }
      filters = filters.filter((f) => {
        return !this.exists(f);
      });
      const { non_standard_filters, promise } = this.set_standard_filter(filters);
      return promise.then(() => {
        return non_standard_filters.length > 0 && this.filter_list.add_filters(non_standard_filters);
      }).then(() => {
        refresh && this.list_view.refresh();
      });
    }
  };

  // frappe/public/js/frappe/ui/filters/field_select.js
  frappe.ui.FieldSelect = class FieldSelect {
    constructor(opts) {
      var me2 = this;
      $.extend(this, opts);
      this.fields_by_name = {};
      this.options = [];
      this.$input = $('<input class="form-control">').appendTo(this.parent).on("click", function() {
        $(this).select();
      });
      this.input_class && this.$input.addClass(this.input_class);
      this.select_input = this.$input.get(0);
      this.awesomplete = new Awesomplete(this.select_input, {
        minChars: 0,
        maxItems: 99,
        autoFirst: true,
        list: me2.options,
        item(item) {
          return $(repl('<li class="filter-field-select"><p>%(label)s</p></li>', item)).data("item.autocomplete", item).get(0);
        }
      });
      this.$input.on("awesomplete-select", function(e) {
        var o = e.originalEvent;
        var value = o.text.value;
        var item = me2.awesomplete.get_item(value);
        me2.selected_doctype = item.doctype;
        me2.selected_fieldname = item.fieldname;
        if (me2.select)
          me2.select(item.doctype, item.fieldname);
      });
      this.$input.on("awesomplete-selectcomplete", function(e) {
        var o = e.originalEvent;
        var value = o.text.value;
        var item = me2.awesomplete.get_item(value);
        me2.$input.val(item.label);
      });
      if (this.filter_fields) {
        for (var i2 in this.filter_fields)
          this.add_field_option(this.filter_fields[i2]);
      } else {
        this.build_options();
      }
      this.set_value(this.doctype, "name");
    }
    get_value() {
      return this.selected_doctype ? this.selected_doctype + "." + this.selected_fieldname : null;
    }
    val(value) {
      if (value === void 0) {
        return this.get_value();
      } else {
        this.set_value(value);
      }
    }
    clear() {
      this.selected_doctype = null;
      this.selected_fieldname = null;
      this.$input.val("");
    }
    set_value(doctype, fieldname) {
      var me2 = this;
      this.clear();
      if (!doctype)
        return;
      if (doctype.indexOf(".") !== -1) {
        var parts = doctype.split(".");
        doctype = parts[0];
        fieldname = parts[1];
      }
      $.each(this.options, function(i2, v) {
        if (v.doctype === doctype && v.fieldname === fieldname) {
          me2.selected_doctype = doctype;
          me2.selected_fieldname = fieldname;
          me2.$input.val(v.label);
          return false;
        }
      });
    }
    build_options() {
      var me2 = this;
      me2.table_fields = [];
      var std_filters = $.map(frappe.model.std_fields, function(d) {
        var opts = { parent: me2.doctype };
        if (d.fieldname == "name")
          opts.options = me2.doctype;
        return $.extend(copy_dict(d), opts);
      });
      var doctype_obj = locals["DocType"][me2.doctype];
      if (doctype_obj && cint(doctype_obj.istable)) {
        std_filters = std_filters.concat([
          {
            fieldname: "parent",
            fieldtype: "Data",
            label: "Parent",
            parent: me2.doctype
          }
        ]);
      }
      if (this.with_blank) {
        this.options.push({
          label: "",
          value: ""
        });
      }
      var main_table_fields = std_filters.concat(frappe.meta.docfield_list[me2.doctype]);
      $.each(frappe.utils.sort(main_table_fields, "label", "string"), function(i2, df) {
        let doctype = frappe.get_meta(me2.doctype).istable && me2.parent_doctype ? me2.parent_doctype : me2.doctype;
        if (frappe.perm.has_perm(doctype, df.permlevel, "read"))
          me2.add_field_option(df);
      });
      $.each(me2.table_fields, function(i2, table_df) {
        if (table_df.options) {
          let child_table_fields = [].concat(frappe.meta.docfield_list[table_df.options]);
          if (table_df.fieldtype === "Table MultiSelect") {
            const link_field = frappe.meta.get_docfields(table_df.options).find((df) => df.fieldtype === "Link");
            child_table_fields = link_field ? [link_field] : [];
          }
          $.each(frappe.utils.sort(child_table_fields, "label", "string"), function(i3, df) {
            let doctype = frappe.get_meta(me2.doctype).istable && me2.parent_doctype ? me2.parent_doctype : me2.doctype;
            if (frappe.perm.has_perm(doctype, df.permlevel, "read"))
              me2.add_field_option(df);
          });
        }
      });
    }
    add_field_option(df) {
      let me2 = this;
      if (df.fieldname == "docstatus" && !frappe.model.is_submittable(me2.doctype))
        return;
      if (frappe.model.table_fields.includes(df.fieldtype)) {
        me2.table_fields.push(df);
        return;
      }
      let label = null;
      let table = null;
      if (me2.doctype && df.parent == me2.doctype) {
        label = __(df.label);
        table = me2.doctype;
      } else {
        label = __(df.label) + " (" + __(df.parent) + ")";
        table = df.parent;
      }
      if (frappe.model.no_value_type.indexOf(df.fieldtype) == -1 && !(me2.fields_by_name[df.parent] && me2.fields_by_name[df.parent][df.fieldname])) {
        this.options.push({
          label,
          value: table + "." + df.fieldname,
          fieldname: df.fieldname,
          doctype: df.parent
        });
        if (!me2.fields_by_name[df.parent])
          me2.fields_by_name[df.parent] = {};
        me2.fields_by_name[df.parent][df.fieldname] = df;
      }
    }
  };

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/ui/filters/edit_filter.html
  frappe.templates["edit_filter"] = `<div class="filter-box">
	<div class="visible-xs flex justify-flex-end">
		<span class="remove-filter">
			{{ __("Remove") }}
		</span>
	</div>
	<div class="list_filter row">
		<div class="fieldname-select-area col-sm-4 ui-front form-group"></div>
		<div class="col-sm-3 form-group">
			<select class="condition form-control input-xs">
				{% for condition in conditions %}
				<option value="{{condition[0]}}">{{ condition[1] }}</option>
				{% endfor %}
			</select>
		</div>
		<div class="col-sm-4 form-group">
			<div class="filter-field"></div>
			<div class="text-muted small filter-description"></div>
		</div>
		<div class="remove-filter col-sm-1 text-center hidden-xs">
			<svg class="icon icon-sm">
				<use href="#icon-close" class="close"></use>
			</svg>
		</div>
	</div>
</div>
`;

  // frappe/public/js/frappe/ui/tags.js
  frappe.ui.Tags = class {
    constructor({ parent, placeholder, tagsList, onTagAdd, onTagRemove, onTagClick, onChange }) {
      this.tagsList = tagsList || [];
      this.onTagAdd = onTagAdd;
      this.onTagRemove = onTagRemove;
      this.onTagClick = onTagClick;
      this.onChange = onChange;
      this.setup(parent, placeholder);
    }
    setup(parent, placeholder) {
      this.$ul = parent;
      this.$input = $(`<input class="tags-input form-control"></input>`);
      this.$inputWrapper = this.get_list_element(this.$input);
      this.$placeholder = $(`<button class="add-tags-btn text-muted btn btn-link icon-btn" id="add_tags">
				${__(placeholder)}
			</button>`);
      this.$placeholder.appendTo(this.$ul.find(".form-sidebar-items"));
      this.$inputWrapper.appendTo(this.$ul);
      this.deactivate();
      this.bind();
      this.boot();
    }
    bind() {
      const me2 = this;
      const select_tag = function() {
        const tagValue = frappe.utils.xss_sanitise(me2.$input.val());
        me2.addTag(tagValue);
        me2.$input.val("");
      };
      this.$input.keypress((e) => {
        if (e.which == 13 || e.keyCode == 13)
          select_tag();
      });
      this.$input.focusout(select_tag);
      this.$input.on("blur", () => {
        this.deactivate();
      });
      this.$placeholder.on("click", () => {
        this.activate();
        this.$input.focus();
      });
    }
    boot() {
      this.addTags(this.tagsList);
    }
    activate() {
      this.$placeholder.hide();
      this.$inputWrapper.show();
    }
    deactivate() {
      this.$inputWrapper.hide();
      this.$placeholder.show();
    }
    addTag(label) {
      if (label && label !== "" && !this.tagsList.includes(label)) {
        let $tag = this.get_tag(label);
        let row = this.get_list_element($tag, "form-tag-row");
        row.insertAfter(this.$inputWrapper);
        this.tagsList.push(label);
        this.onTagAdd && this.onTagAdd(label);
      }
    }
    removeTag(label) {
      label = frappe.utils.xss_sanitise(label);
      if (this.tagsList.includes(label)) {
        this.tagsList.splice(this.tagsList.indexOf(label), 1);
        this.onTagRemove && this.onTagRemove(label);
      }
    }
    addTags(labels) {
      labels.map(this.addTag.bind(this));
    }
    clearTags() {
      this.$ul.find(".form-tag-row").remove();
      this.tagsList = [];
    }
    get_list_element($element, class_name = "") {
      let $li = $(`<li class="${class_name}"></li>`);
      $element.appendTo($li);
      return $li;
    }
    get_tag(label) {
      let $tag = frappe.get_data_pill(label, label, (target, pill_wrapper) => {
        this.removeTag(target);
        pill_wrapper.closest(".form-tag-row").remove();
      });
      if (this.onTagClick) {
        $tag.on("click", ".pill-label", () => {
          this.onTagClick(label);
        });
      }
      return $tag;
    }
  };

  // frappe/public/js/frappe/ui/tag_editor.js
  frappe.ui.TagEditor = class TagEditor {
    constructor(opts) {
      $.extend(this, opts);
      this.setup_tags();
      if (!this.user_tags) {
        this.user_tags = "";
      }
      this.initialized = true;
      this.refresh(this.user_tags);
    }
    setup_tags() {
      var me2 = this;
      if (!this.parent) {
        return;
      }
      this.wrapper = this.parent;
      if (!this.wrapper.length)
        return;
      this.tags = new frappe.ui.Tags({
        parent: this.wrapper,
        placeholder: '<svg class="es-icon icon-sm"><use href="#es-line-add"></use></svg>',
        onTagAdd: (tag) => {
          if (me2.initialized && !me2.refreshing) {
            return frappe.call({
              method: "frappe.desk.doctype.tag.tag.add_tag",
              args: me2.get_args(tag),
              callback: function(r) {
                var user_tags = me2.user_tags ? me2.user_tags.split(",") : [];
                user_tags.push(tag);
                me2.user_tags = user_tags.join(",");
                me2.on_change && me2.on_change(me2.user_tags);
                frappe.tags.utils.fetch_tags();
              }
            });
          }
        },
        onTagRemove: (tag) => {
          if (!me2.refreshing) {
            return frappe.call({
              method: "frappe.desk.doctype.tag.tag.remove_tag",
              args: me2.get_args(tag),
              callback: function(r) {
                var user_tags = me2.user_tags.split(",");
                user_tags.splice(user_tags.indexOf(tag), 1);
                me2.user_tags = user_tags.join(",");
                me2.on_change && me2.on_change(me2.user_tags);
                frappe.tags.utils.fetch_tags();
              }
            });
          }
        }
      });
      this.setup_awesomplete();
      this.setup_complete = true;
    }
    setup_awesomplete() {
      var me2 = this;
      var $input = this.wrapper.find("input.tags-input");
      var input = $input.get(0);
      this.awesomplete = new Awesomplete(input, {
        minChars: 0,
        maxItems: 99,
        list: []
      });
      $input.on("awesomplete-open", function(e) {
        $input.attr("state", "open");
      });
      $input.on("awesomplete-close", function(e) {
        $input.attr("state", "closed");
      });
      $input.on("input", function(e) {
        var value = e.target.value;
        frappe.call({
          method: "frappe.desk.doctype.tag.tag.get_tags",
          args: {
            doctype: me2.frm.doctype,
            txt: value.toLowerCase()
          },
          callback: function(r) {
            me2.awesomplete.list = r.message;
          }
        });
      });
      $input.on("focus", function(e) {
        if ($input.attr("state") != "open") {
          $input.trigger("input");
        }
      });
    }
    get_args(tag) {
      return {
        tag,
        dt: this.frm.doctype,
        dn: this.frm.docname
      };
    }
    refresh(user_tags) {
      var me2 = this;
      if (!this.initialized || !this.setup_complete || this.refreshing)
        return;
      me2.refreshing = true;
      try {
        me2.tags.clearTags();
        if (user_tags) {
          me2.user_tags = user_tags;
          me2.tags.addTags(user_tags.split(","));
        }
      } catch (e) {
        me2.refreshing = false;
        setTimeout(function() {
          me2.refresh();
        }, 100);
      }
      me2.refreshing = false;
    }
  };

  // frappe/public/js/frappe/ui/like.js
  frappe.ui.is_liked = function(doc) {
    var liked = frappe.ui.get_liked_by(doc);
    return liked.indexOf(frappe.session.user) === -1 ? false : true;
  };
  frappe.ui.get_liked_by = function(doc) {
    var liked = doc._liked_by;
    if (liked) {
      liked = JSON.parse(liked);
    }
    return liked || [];
  };
  frappe.ui.toggle_like = function($btn, doctype, name, callback) {
    var add = $btn.hasClass("not-liked") ? "Yes" : "No";
    $btn.css("pointer-events", "none");
    frappe.call({
      method: "frappe.desk.like.toggle_like",
      quiet: true,
      args: {
        doctype,
        name,
        add
      },
      callback: function(r) {
        $btn.css("pointer-events", "auto");
        if (!r.exc) {
          for (const like of document.querySelectorAll(".like-action")) {
            if (like.dataset.name === name && like.dataset.doctype === doctype) {
              like.classList.toggle("not-liked", add === "No");
              like.classList.toggle("liked", add === "Yes");
            }
          }
          var doc = locals[doctype] && locals[doctype][name];
          if (doc) {
            var liked_by = JSON.parse(doc._liked_by || "[]"), idx = liked_by.indexOf(frappe.session.user);
            if (add === "Yes") {
              if (idx === -1)
                liked_by.push(frappe.session.user);
            } else {
              if (idx !== -1) {
                liked_by = liked_by.slice(0, idx).concat(liked_by.slice(idx + 1));
              }
            }
            doc._liked_by = JSON.stringify(liked_by);
          }
          if (callback) {
            callback();
          }
        }
      }
    });
  };
  frappe.ui.click_toggle_like = function() {
    var $btn = $(this);
    var $count = $btn.siblings(".likes-count");
    var not_liked = $btn.hasClass("not-liked");
    var doctype = $btn.attr("data-doctype");
    var name = $btn.attr("data-name");
    frappe.ui.toggle_like($btn, doctype, name, function() {
      if (not_liked) {
        $count.text(cint($count.text()) + 1);
      } else {
        $count.text(cint($count.text()) - 1);
      }
    });
    return false;
  };
  frappe.ui.setup_like_popover = ($parent, selector) => {
    if (frappe.dom.is_touchscreen()) {
      return;
    }
    $parent.on("mouseover", selector, function() {
      const target_element = $(this);
      target_element.popover({
        animation: true,
        placement: "bottom",
        trigger: "manual",
        template: `<div class="liked-by-popover popover">
				<div class="arrow"></div>
				<div class="popover-body popover-content"></div>
			</div>`,
        content: () => {
          let liked_by = target_element.parents(".liked-by").attr("data-liked-by");
          liked_by = liked_by ? decodeURI(liked_by) : "[]";
          liked_by = JSON.parse(liked_by);
          if (!liked_by.length) {
            return "";
          }
          let liked_by_list = $(`<ul class="list-unstyled"></ul>`);
          let link_base = "/app/user-profile/";
          liked_by.forEach((user) => {
            liked_by_list.append(`
						<li data-user=${user}>${frappe.avatar(user, "avatar-xs")}
							<span>${frappe.user.full_name(user)}</span>
						</li>
					`);
          });
          liked_by_list.children("li").click((ev) => {
            let user = ev.currentTarget.dataset.user;
            target_element.popover("hide");
            frappe.set_route(link_base + user);
          });
          return liked_by_list;
        },
        html: true,
        container: "body"
      });
      target_element.popover("show");
      $(".popover").on("mouseleave", () => {
        target_element.popover("hide");
      });
      target_element.on("mouseout", () => {
        setTimeout(() => {
          if (!$(".popover:hover").length) {
            target_element.popover("hide");
          }
        }, 100);
      });
    });
  };

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/html/print_template.html
  frappe.templates["print_template"] = `<!DOCTYPE html>
<html lang="{{ lang }}" dir="{{ layout_direction }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>{{ title }}</title>
	<link href="{{ base_url }}{{ frappe.assets.bundled_asset('print.bundle.css', frappe.utils.is_rtl(lang)) }}" rel="stylesheet">
	<style>
		{{ print_css }}
	</style>
</head>
<body>
	<div class="print-format-gutter">
		{% if print_settings.repeat_header_footer %}
			<div id="footer-html" class="visible-pdf">
				{% if print_settings.letter_head && print_settings.letter_head.footer %}
					<div class="letter-head-footer">
						{{ print_settings.letter_head.footer }}
					</div>
				{% endif %}
				<p class="text-center small page-number visible-pdf">
					{{ __("Page {0} of {1}", [\`<span class="page"></span>\`, \`<span class="topage"></span>\`]) }}
				</p>
			</div>
		{% endif %}

		<div class="print-format {% if landscape %}landscape{% endif %}"
				{% if columns.length > 20 %}
					{% if can_use_smaller_font %}
						style="font-size: 4.0pt"
					{% endif %}
				{% endif %}
			>
			{% if print_settings.letter_head %}
			<div {% if print_settings.repeat_header_footer %} id="header-html" class="hidden-pdf" {% endif %}>
				<div class="letter-head">{{ print_settings.letter_head.header }}</div>
			</div>
			{% endif %}
			{{ content }}
		</div>
	</div>
</body>
</html>
`;

  // frappe/public/js/frappe/list/base_list.js
  frappe.provide("frappe.views");
  frappe.views.BaseList = class BaseList {
    constructor(opts) {
      Object.assign(this, opts);
    }
    show() {
      return frappe.run_serially([
        () => this.show_skeleton(),
        () => this.fetch_meta(),
        () => this.hide_skeleton(),
        () => this.check_permissions(),
        () => this.init(),
        () => this.before_refresh(),
        () => this.refresh()
      ]);
    }
    init() {
      if (this.init_promise)
        return this.init_promise;
      let tasks = [
        this.setup_defaults,
        this.set_stats,
        this.setup_fields,
        this.setup_page,
        this.setup_side_bar,
        this.setup_main_section,
        this.setup_view,
        this.setup_view_menu
      ].map((fn) => fn.bind(this));
      this.init_promise = frappe.run_serially(tasks);
      return this.init_promise;
    }
    setup_defaults() {
      this.page_name = frappe.get_route_str();
      this.page_title = this.page_title || frappe.router.doctype_layout || __(this.doctype);
      this.meta = frappe.get_meta(this.doctype);
      this.settings = frappe.listview_settings[this.doctype] || {};
      this.user_settings = frappe.get_user_settings(this.doctype);
      this.start = 0;
      this.page_length = frappe.is_large_screen() ? 100 : 20;
      this.data = [];
      this.method = "frappe.desk.reportview.get";
      this.can_create = frappe.model.can_create(this.doctype);
      this.can_write = frappe.model.can_write(this.doctype);
      this.fields = [];
      this.filters = [];
      this.sort_by = this.meta.sort_field || "modified";
      this.sort_order = this.meta.sort_order || "desc";
      this.primary_action = null;
      this.secondary_action = null;
      this.menu_items = [
        {
          label: __("Refresh"),
          action: () => this.refresh(),
          class: "visible-xs"
        }
      ];
    }
    get_list_view_settings() {
      return frappe.call("frappe.desk.listview.get_list_settings", {
        doctype: this.doctype
      }).then((doc) => this.list_view_settings = doc.message || {});
    }
    async setup_fields() {
      await this.set_fields();
      this.build_fields();
    }
    async set_fields() {
      let fields = [].concat(frappe.model.std_fields_list, this.meta.title_field);
      fields.forEach((f) => this._add_field(f));
    }
    get_fields_in_list_view() {
      return this.meta.fields.filter((df) => {
        return frappe.model.is_value_type(df.fieldtype) && df.in_list_view && frappe.perm.has_perm(this.doctype, df.permlevel, "read") || df.fieldtype === "Currency" && df.options && !df.options.includes(":") || df.fieldname === "status";
      });
    }
    build_fields() {
      this.fields = this.fields.map((f) => {
        if (typeof f === "string") {
          f = [f, this.doctype];
        }
        return f;
      });
      this.fields = this.fields.filter(Boolean);
      this.fields = this.fields.uniqBy((f) => f[0] + f[1]);
    }
    _add_field(fieldname, doctype) {
      if (!fieldname)
        return;
      if (!doctype)
        doctype = this.doctype;
      if (typeof fieldname === "object") {
        const df = fieldname;
        fieldname = df.fieldname;
        doctype = df.parent || doctype;
      }
      if (!this.fields)
        this.fields = [];
      const is_valid_field = frappe.model.std_fields_list.includes(fieldname) || frappe.meta.has_field(doctype, fieldname) || fieldname === "_seen";
      if (!is_valid_field) {
        return;
      }
      this.fields.push([fieldname, doctype]);
    }
    set_stats() {
      this.stats = ["_user_tags"];
      this.workflow_state_fieldname = frappe.workflow.get_state_fieldname(this.doctype);
      if (this.workflow_state_fieldname) {
        if (!frappe.workflow.workflows[this.doctype]["override_status"]) {
          this._add_field(this.workflow_state_fieldname);
        }
        this.stats.push(this.workflow_state_fieldname);
      }
    }
    fetch_meta() {
      return frappe.model.with_doctype(this.doctype);
    }
    show_skeleton() {
    }
    hide_skeleton() {
    }
    check_permissions() {
      return true;
    }
    setup_page() {
      this.page = this.parent.page;
      this.$page = $(this.parent);
      !this.hide_card_layout && this.page.main.addClass("frappe-card");
      this.page.page_form.removeClass("row").addClass("flex");
      this.hide_page_form && this.page.page_form.hide();
      this.hide_sidebar && this.$page.addClass("no-list-sidebar");
      this.setup_page_head();
    }
    setup_page_head() {
      this.set_title();
      this.set_menu_items();
      this.set_breadcrumbs();
    }
    set_title() {
      this.page.set_title(this.page_title);
    }
    setup_view_menu() {
      const icon_map = {
        Image: "image-view",
        List: "list",
        Report: "small-file",
        Calendar: "calendar",
        Gantt: "gantt",
        Kanban: "kanban",
        Dashboard: "dashboard",
        Map: "map"
      };
      if (frappe.boot.desk_settings.view_switcher && !this.meta.force_re_route_to_default_view) {
        this.views_menu = this.page.add_custom_button_group(
          __("{0} View", [this.view_name]),
          icon_map[this.view_name] || "list"
        );
        this.views_list = new frappe.views.ListViewSelect({
          doctype: this.doctype,
          parent: this.views_menu,
          page: this.page,
          list_view: this,
          sidebar: this.list_sidebar,
          icon_map
        });
      }
    }
    set_default_secondary_action() {
      if (this.secondary_action) {
        const $secondary_action = this.page.set_secondary_action(
          this.secondary_action.label,
          this.secondary_action.action,
          this.secondary_action.icon
        );
        if (!this.secondary_action.icon) {
          $secondary_action.addClass("hidden-xs");
        } else if (!this.secondary_action.label) {
          $secondary_action.addClass("visible-xs");
        }
      } else {
        this.refresh_button = this.page.add_action_icon(
          "es-line-reload",
          () => {
            this.refresh();
          },
          "",
          __("Reload List")
        );
      }
    }
    set_menu_items() {
      this.set_default_secondary_action();
      this.menu_items && this.menu_items.map((item) => {
        if (item.condition && item.condition() === false) {
          return;
        }
        const $item = this.page.add_menu_item(
          item.label,
          item.action,
          item.standard,
          item.shortcut
        );
        if (item.class) {
          $item && $item.addClass(item.class);
        }
      });
    }
    set_breadcrumbs() {
      frappe.breadcrumbs.add(this.meta.module, this.doctype);
    }
    setup_side_bar() {
      if (this.hide_sidebar || !frappe.boot.desk_settings.list_sidebar)
        return;
      this.list_sidebar = new frappe.views.ListSidebar({
        doctype: this.doctype,
        stats: this.stats,
        parent: this.$page.find(".layout-side-section"),
        page: this.page,
        list_view: this
      });
    }
    toggle_side_bar(show) {
      let show_sidebar = show || JSON.parse(localStorage.show_sidebar || "true");
      show_sidebar = !show_sidebar;
      localStorage.show_sidebar = show_sidebar;
      this.show_or_hide_sidebar();
      $(document.body).trigger("toggleListSidebar");
    }
    show_or_hide_sidebar() {
      let show_sidebar = JSON.parse(localStorage.show_sidebar || "true");
      $(document.body).toggleClass("no-list-sidebar", !show_sidebar);
    }
    setup_main_section() {
      return frappe.run_serially(
        [
          this.setup_list_wrapper,
          this.show_or_hide_sidebar,
          this.setup_filter_area,
          this.setup_sort_selector,
          this.setup_result_area,
          this.setup_no_result_area,
          this.setup_freeze_area,
          this.setup_paging_area
        ].map((fn) => fn.bind(this))
      );
    }
    setup_list_wrapper() {
      this.$frappe_list = $('<div class="frappe-list">').appendTo(this.page.main);
    }
    setup_filter_area() {
      if (this.hide_filters)
        return;
      this.filter_area = new FilterArea(this);
      if (this.filters && this.filters.length > 0) {
        return this.filter_area.set(this.filters).catch(() => {
          this.filter_area.clear(false);
        });
      }
    }
    setup_sort_selector() {
      if (this.hide_sort_selector)
        return;
      this.sort_selector = new frappe.ui.SortSelector({
        parent: this.$filter_section,
        doctype: this.doctype,
        args: {
          sort_by: this.sort_by,
          sort_order: this.sort_order
        },
        onchange: this.on_sort_change.bind(this)
      });
    }
    on_sort_change() {
      this.refresh();
    }
    setup_result_area() {
      this.$result = $(`<div class="result">`);
      this.$frappe_list.append(this.$result);
    }
    setup_no_result_area() {
      this.$no_result = $(`
			<div class="no-result text-muted flex justify-center align-center">
				${this.get_no_result_message()}
			</div>
		`).hide();
      this.$frappe_list.append(this.$no_result);
    }
    setup_freeze_area() {
      this.$freeze = $('<div class="freeze"></div>').hide();
      this.$frappe_list.append(this.$freeze);
    }
    get_no_result_message() {
      return __("Nothing to show");
    }
    setup_paging_area() {
      const paging_values = [20, 100, 500];
      this.$paging_area = $(
        `<div class="list-paging-area level">
				<div class="level-left">
					<div class="btn-group">
						${paging_values.map(
          (value) => `
							<button type="button" class="btn btn-default btn-sm btn-paging"
								data-value="${value}">
								${value}
							</button>
						`
        ).join("")}
					</div>
				</div>
				<div class="level-right">
					<button class="btn btn-default btn-more btn-sm">
						${__("Load More")}
					</button>
				</div>
			</div>`
      ).hide();
      this.$frappe_list.append(this.$paging_area);
      this.$paging_area.find(`.btn-paging[data-value="${this.page_length}"]`).addClass("btn-info");
      this.$paging_area.on("click", ".btn-paging, .btn-more", (e) => {
        const $this = $(e.currentTarget);
        if ($this.is(".btn-paging")) {
          this.$paging_area.find(".btn-paging").removeClass("btn-info");
          $this.addClass("btn-info");
          this.start = 0;
          this.page_length = this.selected_page_count = $this.data().value;
        } else if ($this.is(".btn-more")) {
          this.start = this.start + this.page_length;
          this.page_length = this.selected_page_count || 20;
        }
        this.refresh();
      });
    }
    get_fields() {
      return this.fields.map((f) => frappe.model.get_full_column_name(f[0], f[1]));
    }
    get_group_by() {
      let name_field = this.fields && this.fields.find((f) => f[0] == "name");
      if (name_field) {
        return frappe.model.get_full_column_name(name_field[0], name_field[1]);
      }
      return null;
    }
    setup_view() {
    }
    get_filter_value(fieldname) {
      var _a;
      const filter = this.get_filters_for_args().filter((f) => f[1] == fieldname)[0];
      if (!filter)
        return;
      return {
        like: (_a = filter[3]) == null ? void 0 : _a.replace(/^%?|%$/g, ""),
        "not set": null
      }[filter[2]] || filter[3];
    }
    get_filters_for_args() {
      return this.filter_area ? this.filter_area.get().map((filter) => filter.slice(0, 4)) : [];
    }
    get_args() {
      return {
        doctype: this.doctype,
        fields: this.get_fields(),
        filters: this.get_filters_for_args(),
        order_by: this.sort_selector && this.sort_selector.get_sql_string(),
        start: this.start,
        page_length: this.page_length,
        view: this.view,
        group_by: this.get_group_by()
      };
    }
    get_call_args() {
      const args = this.get_args();
      return {
        method: this.method,
        args,
        freeze: this.freeze_on_refresh || false,
        freeze_message: this.freeze_message || __("Loading") + "..."
      };
    }
    before_refresh() {
    }
    refresh() {
      let args = this.get_call_args();
      if (this.no_change(args)) {
        return Promise.resolve();
      }
      this.freeze(true);
      return frappe.call(args).then((r) => {
        this.prepare_data(r);
        this.toggle_result_area();
        this.before_render();
        this.render();
        this.after_render();
        this.freeze(false);
        this.reset_defaults();
        if (this.settings.refresh) {
          this.settings.refresh(this);
        }
      });
    }
    no_change(args) {
      if (this.last_args && JSON.stringify(args) === this.last_args) {
        return true;
      }
      this.last_args = JSON.stringify(args);
      setTimeout(() => {
        this.last_args = null;
      }, 3e3);
      return false;
    }
    prepare_data(r) {
      let data = r.message || {};
      Object.assign(frappe.boot.user_info, data.user_info);
      delete data.user_info;
      data = !Array.isArray(data) ? frappe.utils.dict(data.keys, data.values) : data;
      if (this.start === 0) {
        this.data = data;
      } else {
        this.data = this.data.concat(data);
      }
      this.data = this.data.uniqBy((d) => d.name);
    }
    reset_defaults() {
      this.page_length = this.page_length + this.start;
      this.start = 0;
    }
    freeze() {
    }
    before_render() {
    }
    after_render() {
    }
    render() {
    }
    on_filter_change() {
    }
    toggle_result_area() {
      this.$result.toggle(this.data.length > 0);
      this.$paging_area.toggle(this.data.length > 0);
      this.$no_result.toggle(this.data.length == 0);
      const show_more = this.start + this.page_length <= this.data.length;
      this.$paging_area.find(".btn-more").toggle(show_more);
    }
    call_for_selected_items(method, args = {}) {
      args.names = this.get_checked_items(true);
      frappe.call({
        method,
        args,
        freeze: true,
        callback: (r) => {
          if (!r.exc) {
            this.refresh();
          }
        }
      });
    }
  };
  var FilterArea = class {
    constructor(list_view) {
      this.list_view = list_view;
      this.list_view.page.page_form.append(`<div class="standard-filter-section flex"></div>`);
      const filter_area = this.list_view.hide_page_form ? this.list_view.page.custom_actions : this.list_view.page.page_form;
      this.list_view.$filter_section = $('<div class="filter-section flex">').appendTo(
        filter_area
      );
      this.$filter_list_wrapper = this.list_view.$filter_section;
      this.trigger_refresh = true;
      this.setup();
    }
    setup() {
      if (!this.list_view.hide_page_form)
        this.make_standard_filters();
      this.make_filter_list();
    }
    get() {
      let filters = this.filter_list.get_filters();
      let standard_filters = this.get_standard_filters();
      return filters.concat(standard_filters).uniqBy(JSON.stringify);
    }
    set(filters) {
      this.trigger_refresh = false;
      return this.add(filters, false).then(() => {
        this.trigger_refresh = true;
        this.filter_list.update_filter_button();
      });
    }
    add(filters, refresh = true) {
      if (!filters || Array.isArray(filters) && filters.length === 0)
        return Promise.resolve();
      if (typeof filters[0] === "string") {
        const filter = Array.from(arguments);
        filters = [filter];
      }
      filters = filters.filter((f) => !this.exists(f));
      const { non_standard_filters, promise } = this.set_standard_filter(filters);
      return promise.then(() => {
        return non_standard_filters.length > 0 && this.filter_list.add_filters(non_standard_filters);
      }).then(() => {
        refresh && this.list_view.refresh();
      });
    }
    refresh_list_view() {
      if (this.trigger_refresh) {
        this.list_view.start = 0;
        this.list_view.refresh();
        this.list_view.on_filter_change();
      }
    }
    exists(f) {
      let exists = false;
      const fields_dict = this.list_view.page.fields_dict;
      if (f[2] === "=" && f[1] in fields_dict) {
        const value = fields_dict[f[1]].get_value();
        if (value) {
          exists = true;
        }
      }
      if (!exists) {
        exists = this.filter_list.filter_exists(f);
      }
      return exists;
    }
    set_standard_filter(filters) {
      if (filters.length === 0) {
        return {
          non_standard_filters: [],
          promise: Promise.resolve()
        };
      }
      const fields_dict = this.list_view.page.fields_dict;
      return filters.reduce((out, filter) => {
        var _a, _b, _c, _d;
        const [dt, fieldname, condition, value] = filter;
        out.promise = out.promise || Promise.resolve();
        out.non_standard_filters = out.non_standard_filters || [];
        if (fields_dict[fieldname] && (condition === "=" || condition === "like" && ((_b = (_a = fields_dict[fieldname]) == null ? void 0 : _a.df) == null ? void 0 : _b.fieldtype) != "Link" || condition === "descendants of (inclusive)" && ((_d = (_c = fields_dict[fieldname]) == null ? void 0 : _c.df) == null ? void 0 : _d.fieldtype) == "Link")) {
          out.promise = out.promise.then(() => fields_dict[fieldname].set_value(value));
        } else {
          out.non_standard_filters.push(filter);
        }
        return out;
      }, {});
    }
    remove_filters(filters) {
      filters.map((f) => {
        this.remove(f[1]);
      });
    }
    remove(fieldname) {
      const fields_dict = this.list_view.page.fields_dict;
      if (fieldname in fields_dict) {
        fields_dict[fieldname].set_value("");
      }
      let filter = this.filter_list.get_filter(fieldname);
      if (filter)
        filter.remove();
      this.filter_list.apply();
      return Promise.resolve();
    }
    clear(refresh = true) {
      if (!refresh) {
        this.trigger_refresh = false;
      }
      this.filter_list.clear_filters();
      const promises = [];
      const fields_dict = this.list_view.page.fields_dict;
      for (let key in fields_dict) {
        const field = this.list_view.page.fields_dict[key];
        promises.push(() => field.set_value(""));
      }
      return frappe.run_serially(promises).then(() => {
        this.trigger_refresh = true;
      });
    }
    make_standard_filters() {
      this.standard_filters_wrapper = this.list_view.page.page_form.find(
        ".standard-filter-section"
      );
      let fields = [];
      if (!this.list_view.settings.hide_name_filter) {
        fields.push({
          fieldtype: "Data",
          label: "ID",
          condition: "like",
          fieldname: "name",
          onchange: () => this.refresh_list_view()
        });
      }
      if (this.list_view.custom_filter_configs) {
        this.list_view.custom_filter_configs.forEach((config) => {
          config.onchange = () => this.refresh_list_view();
        });
        fields = fields.concat(this.list_view.custom_filter_configs);
      }
      const doctype_fields = this.list_view.meta.fields;
      const title_field = this.list_view.meta.title_field;
      fields = fields.concat(
        doctype_fields.filter(
          (df) => df.fieldname === title_field || df.in_standard_filter && frappe.model.is_value_type(df.fieldtype)
        ).map((df) => {
          let options = df.options;
          let condition = "=";
          let fieldtype = df.fieldtype;
          if ([
            "Text",
            "Small Text",
            "Text Editor",
            "HTML Editor",
            "Data",
            "Code",
            "Phone",
            "JSON",
            "Read Only"
          ].includes(fieldtype)) {
            fieldtype = "Data";
            condition = "like";
          }
          if (df.fieldtype == "Select" && df.options) {
            options = df.options.split("\n");
            if (options.length > 0 && options[0] != "") {
              options.unshift("");
              options = options.join("\n");
            }
          }
          if (df.fieldtype == "Link" && df.options && frappe.boot.treeviews.includes(df.options)) {
            condition = "descendants of (inclusive)";
          }
          return {
            fieldtype,
            label: __(df.label),
            options,
            fieldname: df.fieldname,
            condition,
            onchange: () => this.refresh_list_view(),
            ignore_link_validation: fieldtype === "Dynamic Link",
            is_filter: 1
          };
        })
      );
      fields.map((df) => {
        this.list_view.page.add_field(df, this.standard_filters_wrapper);
      });
    }
    get_standard_filters() {
      const filters = [];
      const fields_dict = this.list_view.page.fields_dict;
      for (let key in fields_dict) {
        let field = fields_dict[key];
        let value = field.get_value();
        if (value) {
          if (field.df.condition === "like" && !value.includes("%")) {
            value = "%" + value + "%";
          }
          filters.push([
            field.df.doctype || this.list_view.doctype,
            field.df.fieldname,
            field.df.condition || "=",
            value
          ]);
        }
      }
      return filters;
    }
    make_filter_list() {
      $(`<div class="filter-selector">
			<div class="btn-group">
				<button class="btn btn-default btn-sm filter-button">
					<span class="filter-icon">
						${frappe.utils.icon("es-line-filter")}
					</span>
					<span class="button-label hidden-xs">
					${__("Filter")}
					<span>
				</button>
				<button class="btn btn-default btn-sm filter-x-button" title="${__("Clear all filters")}">
					<span class="filter-icon">
						${frappe.utils.icon("es-small-close")}
					</span>
				</button>
			</div>
		</div>`).appendTo(this.$filter_list_wrapper);
      this.filter_button = this.$filter_list_wrapper.find(".filter-button");
      this.filter_x_button = this.$filter_list_wrapper.find(".filter-x-button");
      this.filter_list = new frappe.ui.FilterGroup({
        base_list: this.list_view,
        parent: this.$filter_list_wrapper,
        doctype: this.list_view.doctype,
        filter_button: this.filter_button,
        filter_x_button: this.filter_x_button,
        default_filters: [],
        on_change: () => this.refresh_list_view()
      });
    }
    is_being_edited() {
      return this.filter_list && this.filter_list.wrapper && this.filter_list.wrapper.find(".filter-box:visible").length > 0;
    }
  };
  frappe.views.view_modes = [
    "List",
    "Report",
    "Dashboard",
    "Gantt",
    "Kanban",
    "Calendar",
    "Image",
    "Inbox",
    "Tree",
    "Map"
  ];
  frappe.views.is_valid = (view_mode) => frappe.views.view_modes.includes(view_mode);

  // frappe/public/js/frappe/list/bulk_operations.js
  var BulkOperations = class {
    constructor({ doctype }) {
      if (!doctype)
        frappe.throw(__("Doctype required"));
      this.doctype = doctype;
    }
    print(docs) {
      const print_settings = frappe.model.get_doc(":Print Settings", "Print Settings");
      const allow_print_for_draft = cint(print_settings.allow_print_for_draft);
      const is_submittable = frappe.model.is_submittable(this.doctype);
      const allow_print_for_cancelled = cint(print_settings.allow_print_for_cancelled);
      const letterheads = this.get_letterhead_options();
      const valid_docs = docs.filter((doc) => {
        return !is_submittable || doc.docstatus === 1 || allow_print_for_cancelled && doc.docstatus == 2 || allow_print_for_draft && doc.docstatus == 0 || frappe.user.has_role("Administrator");
      }).map((doc) => doc.name);
      const invalid_docs = docs.filter((doc) => !valid_docs.includes(doc.name));
      if (invalid_docs.length > 0) {
        frappe.msgprint(__("You selected Draft or Cancelled documents"));
        return;
      }
      if (valid_docs.length === 0) {
        frappe.msgprint(__("Select atleast 1 record for printing"));
        return;
      }
      const dialog = new frappe.ui.Dialog({
        title: __("Print Documents"),
        fields: [
          {
            fieldtype: "Select",
            label: __("Letter Head"),
            fieldname: "letter_sel",
            options: letterheads,
            default: letterheads[0]
          },
          {
            fieldtype: "Select",
            label: __("Print Format"),
            fieldname: "print_sel",
            options: frappe.meta.get_print_formats(this.doctype),
            default: frappe.get_meta(this.doctype).default_print_format
          },
          {
            fieldtype: "Select",
            label: __("Page Size"),
            fieldname: "page_size",
            options: frappe.meta.get_print_sizes(),
            default: print_settings.pdf_page_size
          },
          {
            fieldtype: "Float",
            label: __("Page Height (in mm)"),
            fieldname: "page_height",
            depends_on: 'eval:doc.page_size == "Custom"',
            default: print_settings.pdf_page_height
          },
          {
            fieldtype: "Float",
            label: __("Page Width (in mm)"),
            fieldname: "page_width",
            depends_on: 'eval:doc.page_size == "Custom"',
            default: print_settings.pdf_page_width
          }
        ]
      });
      dialog.set_primary_action(__("Print"), (args) => {
        if (!args)
          return;
        const default_print_format = frappe.get_meta(this.doctype).default_print_format;
        const with_letterhead = args.letter_sel == __("No Letterhead") ? 0 : 1;
        const print_format = args.print_sel ? args.print_sel : default_print_format;
        const json_string = JSON.stringify(valid_docs);
        const letterhead = args.letter_sel;
        let pdf_options;
        if (args.page_size === "Custom") {
          if (args.page_height === 0 || args.page_width === 0) {
            frappe.throw(__("Page height and width cannot be zero"));
          }
          pdf_options = JSON.stringify({
            "page-height": args.page_height,
            "page-width": args.page_width
          });
        } else {
          pdf_options = JSON.stringify({ "page-size": args.page_size });
        }
        const w = window.open(
          "/api/method/frappe.utils.print_format.download_multi_pdf?doctype=" + encodeURIComponent(this.doctype) + "&name=" + encodeURIComponent(json_string) + "&format=" + encodeURIComponent(print_format) + "&no_letterhead=" + (with_letterhead ? "0" : "1") + "&letterhead=" + encodeURIComponent(letterhead) + "&options=" + encodeURIComponent(pdf_options)
        );
        if (!w) {
          frappe.msgprint(__("Please enable pop-ups"));
          return;
        }
      });
      dialog.show();
    }
    get_letterhead_options() {
      const letterhead_options = [__("No Letterhead")];
      frappe.call({
        method: "frappe.client.get_list",
        args: {
          doctype: "Letter Head",
          fields: ["name", "is_default"],
          filters: { disabled: 0 },
          limit_page_length: 0
        },
        async: false,
        callback(r) {
          if (r.message) {
            r.message.forEach((letterhead) => {
              if (letterhead.is_default) {
                letterhead_options.unshift(letterhead.name);
              } else {
                letterhead_options.push(letterhead.name);
              }
            });
          }
        }
      });
      return letterhead_options;
    }
    delete(docnames, done = null) {
      frappe.call({
        method: "frappe.desk.reportview.delete_items",
        freeze: true,
        freeze_message: docnames.length <= 10 ? __("Deleting {0} records...", [docnames.length]) : null,
        args: {
          items: docnames,
          doctype: this.doctype
        }
      }).then((r) => {
        let failed = r.message;
        if (!failed)
          failed = [];
        if (failed.length && !r._server_messages) {
          frappe.throw(
            __("Cannot delete {0}", [failed.map((f) => f.bold()).join(", ")])
          );
        }
        if (failed.length < docnames.length) {
          frappe.utils.play_sound("delete");
          if (done)
            done();
        }
      });
    }
    assign(docnames, done) {
      if (docnames.length > 0) {
        const assign_to = new frappe.ui.form.AssignToDialog({
          obj: this,
          method: "frappe.desk.form.assign_to.add_multiple",
          doctype: this.doctype,
          docname: docnames,
          bulk_assign: true,
          re_assign: true,
          callback: done
        });
        assign_to.dialog.clear();
        assign_to.dialog.show();
      } else {
        frappe.msgprint(__("Select records for assignment"));
      }
    }
    apply_assignment_rule(docnames, done) {
      if (docnames.length > 0) {
        frappe.call("frappe.automation.doctype.assignment_rule.assignment_rule.bulk_apply", {
          doctype: this.doctype,
          docnames
        }).then(() => done());
      }
    }
    submit_or_cancel(docnames, action = "submit", done = null) {
      action = action.toLowerCase();
      frappe.call({
        method: "frappe.desk.doctype.bulk_update.bulk_update.submit_cancel_or_update_docs",
        args: {
          doctype: this.doctype,
          action,
          docnames
        }
      }).then((r) => {
        let failed = r.message;
        if (!failed)
          failed = [];
        if (failed.length && !r._server_messages) {
          frappe.throw(
            __("Cannot {0} {1}", [action, failed.map((f) => f.bold()).join(", ")])
          );
        }
        if (failed.length < docnames.length) {
          frappe.utils.play_sound(action);
          if (done)
            done();
        }
      });
    }
    edit(docnames, field_mappings, done) {
      let field_options = Object.keys(field_mappings).sort(function(a, b) {
        return __(cstr(field_mappings[a].label)).localeCompare(
          cstr(__(field_mappings[b].label))
        );
      });
      const status_regex = /status/i;
      const default_field = field_options.find((value) => status_regex.test(value));
      const dialog = new frappe.ui.Dialog({
        title: __("Bulk Edit"),
        fields: [
          {
            fieldtype: "Select",
            options: field_options,
            default: default_field,
            label: __("Field"),
            fieldname: "field",
            reqd: 1,
            onchange: () => {
              set_value_field(dialog);
            }
          },
          {
            fieldtype: "Data",
            label: __("Value"),
            fieldname: "value",
            onchange() {
              show_help_text();
            }
          }
        ],
        primary_action: ({ value }) => {
          const fieldname = field_mappings[dialog.get_value("field")].fieldname;
          dialog.disable_primary_action();
          frappe.call({
            method: "frappe.desk.doctype.bulk_update.bulk_update.submit_cancel_or_update_docs",
            args: {
              doctype: this.doctype,
              freeze: true,
              docnames,
              action: "update",
              data: {
                [fieldname]: value || null
              }
            }
          }).then((r) => {
            let failed = r.message || [];
            if (failed.length && !r._server_messages) {
              dialog.enable_primary_action();
              frappe.throw(
                __("Cannot update {0}", [
                  failed.map((f) => f.bold ? f.bold() : f).join(", ")
                ])
              );
            }
            done();
            dialog.hide();
            frappe.show_alert(__("Updated successfully"));
          });
        },
        primary_action_label: __("Update {0} records", [docnames.length])
      });
      if (default_field)
        set_value_field(dialog);
      show_help_text();
      function set_value_field(dialogObj) {
        const new_df = Object.assign({}, field_mappings[dialogObj.get_value("field")]);
        if (new_df.label.match(status_regex) && new_df.fieldtype === "Select" && !new_df.default) {
          let options = [];
          if (typeof new_df.options === "string") {
            options = new_df.options.split("\n");
          }
          new_df.default = options[0] || options[1];
        }
        new_df.label = __("Value");
        new_df.onchange = show_help_text;
        delete new_df.depends_on;
        dialogObj.replace_field("value", new_df);
        show_help_text();
      }
      function show_help_text() {
        let value = dialog.get_value("value");
        if (value == null || value === "") {
          dialog.set_df_property(
            "value",
            "description",
            __("You have not entered a value. The field will be set to empty.")
          );
        } else {
          dialog.set_df_property("value", "description", "");
        }
      }
      dialog.refresh();
      dialog.show();
    }
    add_tags(docnames, done) {
      const dialog = new frappe.ui.Dialog({
        title: __("Add Tags"),
        fields: [
          {
            fieldtype: "MultiSelectPills",
            fieldname: "tags",
            label: __("Tags"),
            reqd: true,
            get_data: function(txt) {
              return frappe.db.get_link_options("Tag", txt);
            }
          }
        ],
        primary_action_label: __("Add"),
        primary_action: () => {
          let args = dialog.get_values();
          if (args && args.tags) {
            dialog.set_message("Adding Tags...");
            frappe.call({
              method: "frappe.desk.doctype.tag.tag.add_tags",
              args: {
                tags: args.tags,
                dt: this.doctype,
                docs: docnames
              },
              callback: () => {
                dialog.hide();
                done();
              }
            });
          }
        }
      });
      dialog.show();
    }
    export(doctype, docnames) {
      frappe.require("data_import_tools.bundle.js", () => {
        const data_exporter = new frappe.data_import.DataExporter(
          doctype,
          "Insert New Records"
        );
        data_exporter.dialog.set_value("export_records", "by_filter");
        data_exporter.filter_group.add_filters_to_filter_group([
          [doctype, "name", "in", docnames, false]
        ]);
      });
    }
  };

  // frappe/public/js/frappe/list/list_settings.js
  var ListSettings = class {
    constructor({ listview, doctype, meta, settings }) {
      if (!doctype) {
        frappe.throw("DocType required");
      }
      this.listview = listview;
      this.doctype = doctype;
      this.meta = meta;
      this.settings = settings;
      this.dialog = null;
      this.fields = this.settings && this.settings.fields ? JSON.parse(this.settings.fields) : [];
      this.subject_field = null;
      frappe.model.with_doctype("List View Settings", () => {
        this.make();
        this.get_listview_fields(meta);
        this.setup_fields();
        this.setup_remove_fields();
        this.add_new_fields();
        this.show_dialog();
      });
    }
    make() {
      let me2 = this;
      let list_view_settings = frappe.get_meta("List View Settings");
      me2.dialog = new frappe.ui.Dialog({
        title: __("{0} Settings", [__(me2.doctype)]),
        fields: list_view_settings.fields
      });
      me2.dialog.set_values(me2.settings);
      me2.dialog.set_primary_action(__("Save"), () => {
        let values = me2.dialog.get_values();
        frappe.show_alert({
          message: __("Saving"),
          indicator: "green"
        });
        frappe.call({
          method: "frappe.desk.doctype.list_view_settings.list_view_settings.save_listview_settings",
          args: {
            doctype: me2.doctype,
            listview_settings: values,
            removed_listview_fields: me2.removed_fields || []
          },
          callback: function(r) {
            me2.listview.refresh_columns(r.message.meta, r.message.listview_settings);
            me2.dialog.hide();
          }
        });
      });
      me2.dialog.fields_dict["total_fields"].df.onchange = () => me2.refresh();
    }
    refresh() {
      let me2 = this;
      me2.setup_fields();
      me2.add_new_fields();
      me2.setup_remove_fields();
    }
    show_dialog() {
      let me2 = this;
      if (!this.settings.fields) {
        me2.update_fields();
      }
      if (!me2.dialog.get_value("total_fields")) {
        let field_count = me2.fields.length;
        if (field_count < 4) {
          field_count = 4;
        } else if (field_count > 10) {
          field_count = 10;
        }
        me2.dialog.set_value("total_fields", field_count);
      }
      me2.dialog.show();
    }
    setup_fields() {
      function is_status_field(field) {
        return field.fieldname === "status_field";
      }
      let me2 = this;
      let fields_html = me2.dialog.get_field("fields_html");
      let wrapper = fields_html.$wrapper[0];
      let fields = ``;
      let total_fields = me2.dialog.get_values().total_fields || me2.settings.total_fields;
      for (let idx in me2.fields) {
        if (idx == parseInt(total_fields)) {
          break;
        }
        let is_sortable = idx == 0 ? `` : `sortable`;
        let show_sortable_handle = idx == 0 ? `hide` : ``;
        let can_remove = idx == 0 || is_status_field(me2.fields[idx]) ? `hide` : ``;
        fields += `
				<div class="control-input flex align-center form-control fields_order ${is_sortable}"
					style="display: block; margin-bottom: 5px;" data-fieldname="${me2.fields[idx].fieldname}"
					data-label="${me2.fields[idx].label}" data-type="${me2.fields[idx].type}">

					<div class="row">
						<div class="col-1">
							${frappe.utils.icon("drag", "xs", "", "", "sortable-handle " + show_sortable_handle)}
						</div>
						<div class="col-10" style="padding-left:0px;">
							${me2.fields[idx].label}
						</div>
						<div class="col-1 ${can_remove}">
							<a class="text-muted remove-field" data-fieldname="${me2.fields[idx].fieldname}">
								${frappe.utils.icon("delete", "xs")}
							</a>
						</div>
					</div>
				</div>`;
      }
      fields_html.html(`
			<div class="form-group">
				<div class="clearfix">
					<label class="control-label" style="padding-right: 0px;">Fields</label>
				</div>
				<div class="control-input-wrapper">
				${fields}
				</div>
				<p class="help-box small text-muted">
					<a class="add-new-fields text-muted">
						+ Add / Remove Fields
					</a>
				</p>
			</div>
		`);
      new Sortable(wrapper.getElementsByClassName("control-input-wrapper")[0], {
        handle: ".sortable-handle",
        draggable: ".sortable",
        onUpdate: () => {
          me2.update_fields();
          me2.refresh();
        }
      });
    }
    add_new_fields() {
      let me2 = this;
      let fields_html = me2.dialog.get_field("fields_html");
      let add_new_fields = fields_html.$wrapper[0].getElementsByClassName("add-new-fields")[0];
      add_new_fields.onclick = () => me2.column_selector();
    }
    setup_remove_fields() {
      let me2 = this;
      let fields_html = me2.dialog.get_field("fields_html");
      let remove_fields = fields_html.$wrapper[0].getElementsByClassName("remove-field");
      for (let idx = 0; idx < remove_fields.length; idx++) {
        remove_fields.item(idx).onclick = () => me2.remove_fields(remove_fields.item(idx).getAttribute("data-fieldname"));
      }
    }
    remove_fields(fieldname) {
      let me2 = this;
      let existing_fields = me2.fields.map((f) => f.fieldname);
      for (let idx in me2.fields) {
        let field = me2.fields[idx];
        if (field.fieldname == fieldname) {
          me2.fields.splice(idx, 1);
          break;
        }
      }
      me2.set_removed_fields(
        me2.get_removed_listview_fields(
          me2.fields.map((f) => f.fieldname),
          existing_fields
        )
      );
      me2.refresh();
      me2.update_fields();
    }
    update_fields() {
      let me2 = this;
      let fields_html = me2.dialog.get_field("fields_html");
      let wrapper = fields_html.$wrapper[0];
      let fields_order = wrapper.getElementsByClassName("fields_order");
      me2.fields = [];
      for (let idx = 0; idx < fields_order.length; idx++) {
        me2.fields.push({
          fieldname: fields_order.item(idx).getAttribute("data-fieldname"),
          label: fields_order.item(idx).getAttribute("data-label")
        });
      }
      me2.dialog.set_value("fields", JSON.stringify(me2.fields));
      me2.dialog.get_value("fields");
    }
    column_selector() {
      let me2 = this;
      let d = new frappe.ui.Dialog({
        title: __("{0} Fields", [__(me2.doctype)]),
        fields: [
          {
            label: __("Reset Fields"),
            fieldtype: "Button",
            fieldname: "reset_fields",
            click: () => me2.reset_listview_fields(d)
          },
          {
            label: __("Select Fields"),
            fieldtype: "MultiCheck",
            fieldname: "fields",
            options: me2.get_doctype_fields(
              me2.meta,
              me2.fields.map((f) => f.fieldname)
            ),
            columns: 2
          }
        ]
      });
      d.set_primary_action(__("Save"), () => {
        let values = d.get_values().fields;
        me2.set_removed_fields(
          me2.get_removed_listview_fields(
            values,
            me2.fields.map((f) => f.fieldname)
          )
        );
        me2.fields = [];
        me2.set_subject_field(me2.meta);
        me2.set_status_field();
        for (let idx in values) {
          let value = values[idx];
          if (me2.fields.length === parseInt(me2.dialog.get_values().total_fields)) {
            break;
          } else if (value != me2.subject_field.fieldname) {
            let field = frappe.meta.get_docfield(me2.doctype, value);
            if (field) {
              me2.fields.push({
                label: field.label,
                fieldname: field.fieldname
              });
            }
          }
        }
        me2.refresh();
        me2.dialog.set_value("fields", JSON.stringify(me2.fields));
        d.hide();
      });
      d.show();
    }
    reset_listview_fields(dialog) {
      let me2 = this;
      frappe.xcall(
        "frappe.desk.doctype.list_view_settings.list_view_settings.get_default_listview_fields",
        {
          doctype: me2.doctype
        }
      ).then((fields) => {
        let field = dialog.get_field("fields");
        field.df.options = me2.get_doctype_fields(me2.meta, fields);
        dialog.refresh();
      });
    }
    get_listview_fields(meta) {
      let me2 = this;
      if (!me2.settings.fields) {
        me2.set_list_view_fields(meta);
      } else {
        me2.fields = JSON.parse(this.settings.fields);
      }
      me2.fields.uniqBy((f) => f.fieldname);
    }
    set_list_view_fields(meta) {
      let me2 = this;
      me2.set_subject_field(meta);
      me2.set_status_field();
      meta.fields.forEach((field) => {
        if (field.in_list_view && !frappe.model.no_value_type.includes(field.fieldtype) && me2.subject_field.fieldname != field.fieldname) {
          me2.fields.push({
            label: field.label,
            fieldname: field.fieldname
          });
        }
      });
    }
    set_subject_field(meta) {
      let me2 = this;
      me2.subject_field = {
        label: "ID",
        fieldname: "name"
      };
      if (meta.title_field) {
        let field = frappe.meta.get_docfield(me2.doctype, meta.title_field.trim());
        me2.subject_field = {
          label: field.label,
          fieldname: field.fieldname
        };
      }
      me2.fields.push(me2.subject_field);
    }
    set_status_field() {
      let me2 = this;
      if (frappe.has_indicator(me2.doctype)) {
        me2.fields.push({
          type: "Status",
          label: "Status",
          fieldname: "status_field"
        });
      }
    }
    get_doctype_fields(meta, fields) {
      let multiselect_fields = [];
      meta.fields.forEach((field) => {
        if (!frappe.model.no_value_type.includes(field.fieldtype)) {
          multiselect_fields.push({
            label: field.label,
            value: field.fieldname,
            checked: fields.includes(field.fieldname)
          });
        }
      });
      return multiselect_fields;
    }
    get_removed_listview_fields(new_fields, existing_fields) {
      let me2 = this;
      let removed_fields = [];
      if (frappe.has_indicator(me2.doctype)) {
        new_fields.push("status_field");
      }
      existing_fields.forEach((column) => {
        if (!new_fields.includes(column)) {
          removed_fields.push(column);
        }
      });
      return removed_fields;
    }
    set_removed_fields(fields) {
      let me2 = this;
      if (me2.removed_fields) {
        me2.removed_fields = me2.removed_fields.concat(fields);
      } else {
        me2.removed_fields = fields;
      }
    }
  };

  // frappe/public/js/frappe/list/list_view.js
  frappe.provide("frappe.views");
  frappe.views.ListView = class ListView extends frappe.views.BaseList {
    static load_last_view() {
      const route = frappe.get_route();
      const doctype = route[1];
      if (route.length === 2) {
        const user_settings = frappe.get_user_settings(doctype);
        const last_view = user_settings.last_view;
        frappe.set_route(
          "list",
          frappe.router.doctype_layout || doctype,
          frappe.views.is_valid(last_view) ? last_view.toLowerCase() : "list"
        );
        return true;
      }
      return false;
    }
    constructor(opts) {
      super(opts);
      this.show();
      this.debounced_refresh = frappe.utils.debounce(
        this.process_document_refreshes.bind(this),
        2e3
      );
    }
    has_permissions() {
      return frappe.perm.has_perm(this.doctype, 0, "read");
    }
    show() {
      this.parent.disable_scroll_to_top = true;
      super.show();
    }
    check_permissions() {
      if (!this.has_permissions()) {
        frappe.set_route("");
        frappe.throw(__("Not permitted to view {0}", [this.doctype]));
      }
    }
    show_skeleton() {
      this.$list_skeleton = this.parent.page.container.find(".list-skeleton");
      if (!this.$list_skeleton.length) {
        this.$list_skeleton = $(`
				<div class="row list-skeleton">
					<div class="col-lg-2">
						<div class="list-skeleton-box"></div>
					</div>
					<div class="col">
						<div class="list-skeleton-box"></div>
					</div>
				</div>
			`);
        this.parent.page.container.find(".page-content").append(this.$list_skeleton);
      }
      this.parent.page.container.find(".layout-main").hide();
      this.$list_skeleton.show();
    }
    hide_skeleton() {
      this.$list_skeleton && this.$list_skeleton.hide();
      this.parent.page.container.find(".layout-main").show();
    }
    get view_name() {
      return "List";
    }
    get view_user_settings() {
      return this.user_settings[this.view_name] || {};
    }
    setup_defaults() {
      super.setup_defaults();
      this.view = "List";
      this.sort_by = this.view_user_settings.sort_by || this.sort_by || "modified";
      this.sort_order = this.view_user_settings.sort_order || this.sort_order || "desc";
      this.menu_items = this.menu_items.concat(this.get_menu_items());
      if (Array.isArray(this.view_user_settings.filters)) {
        const saved_filters = this.view_user_settings.filters;
        this.filters = this.validate_filters(saved_filters);
      } else {
        this.filters = (this.settings.filters || []).map((f) => {
          if (f.length === 3) {
            f = [this.doctype, f[0], f[1], f[2]];
          }
          return f;
        });
      }
      if (this.view_name == "List")
        this.toggle_paging = true;
      this.patch_refresh_and_load_lib();
      return this.get_list_view_settings();
    }
    on_sort_change(sort_by, sort_order) {
      this.sort_by = sort_by;
      this.sort_order = sort_order;
      super.on_sort_change();
    }
    validate_filters(filters) {
      let valid_fields = this.meta.fields.map((df) => df.fieldname);
      valid_fields = valid_fields.concat(frappe.model.std_fields_list);
      return filters.filter((f) => valid_fields.includes(f[1])).uniqBy((f) => f[1]);
    }
    setup_page() {
      this.parent.list_view = this;
      super.setup_page();
    }
    setup_page_head() {
      super.setup_page_head();
      this.set_primary_action();
      this.set_actions_menu_items();
    }
    set_actions_menu_items() {
      this.actions_menu_items = this.get_actions_menu_items();
      this.workflow_action_menu_items = this.get_workflow_action_menu_items();
      this.workflow_action_items = {};
      const actions = this.actions_menu_items.concat(this.workflow_action_menu_items);
      actions.forEach((item) => {
        const $item = this.page.add_actions_menu_item(item.label, item.action, item.standard);
        if (item.class) {
          $item.addClass(item.class);
        }
        if (item.is_workflow_action && $item) {
          this.workflow_action_items[item.name] = $item;
        }
      });
    }
    show_restricted_list_indicator_if_applicable() {
      const match_rules_list = frappe.perm.get_match_rules(this.doctype);
      if (match_rules_list.length) {
        this.restricted_list = $(
          `<button class="btn btn-xs restricted-button flex align-center">
					${frappe.utils.icon("restriction", "xs")}
				</button>`
        ).click(() => this.show_restrictions(match_rules_list)).appendTo(this.page.page_form);
      }
    }
    show_restrictions(match_rules_list = []) {
      frappe.msgprint(
        frappe.render_template("list_view_permission_restrictions", {
          condition_list: match_rules_list
        }),
        __("Restrictions", null, "Title of message showing restrictions in list view")
      );
    }
    get_fields() {
      return super.get_fields().concat(
        Object.entries(this.link_field_title_fields || {}).map(
          (entry) => entry.join(".") + " as " + entry.join("_")
        )
      );
    }
    async set_fields() {
      this.link_field_title_fields = {};
      let fields = [].concat(
        frappe.model.std_fields_list,
        this.get_fields_in_list_view(),
        [this.meta.title_field, this.meta.image_field],
        this.settings.add_fields || [],
        this.meta.track_seen ? "_seen" : null,
        this.sort_by,
        "enabled",
        "disabled",
        "color"
      );
      await Promise.all(
        fields.map((f) => {
          return new Promise((resolve) => {
            const df = typeof f === "string" ? frappe.meta.get_docfield(this.doctype, f) : f;
            if (df && df.fieldtype == "Link" && frappe.boot.link_title_doctypes.includes(df.options)) {
              frappe.model.with_doctype(df.options, () => {
                const meta = frappe.get_meta(df.options);
                if (meta.show_title_field_in_link) {
                  this.link_field_title_fields[typeof f === "string" ? f : f.fieldname] = meta.title_field;
                }
                this._add_field(f);
                resolve();
              });
            } else {
              this._add_field(f);
              resolve();
            }
          });
        })
      );
      this.fields.forEach((f) => {
        const df = frappe.meta.get_docfield(f[1], f[0]);
        if (df && df.fieldtype === "Currency" && df.options && !df.options.includes(":")) {
          this._add_field(df.options);
        }
      });
    }
    patch_refresh_and_load_lib() {
      this.refresh = this.refresh.bind(this);
      this.refresh = frappe.utils.throttle(this.refresh, 1e3);
      this.load_lib = new Promise((resolve) => {
        if (this.required_libs) {
          frappe.require(this.required_libs, resolve);
        } else {
          resolve();
        }
      });
      const interval = 5 * 60 * 1e3;
      setInterval(() => {
        if (frappe.get_route_str() === this.page_name) {
          this.refresh();
        }
      }, interval);
    }
    set_primary_action() {
      if (this.can_create && !frappe.boot.read_only) {
        const doctype_name = __(frappe.router.doctype_layout) || __(this.doctype);
        const label = `${__("Add", null, "Primary action in list view")} ${doctype_name}`;
        this.page.set_primary_action(
          label,
          () => {
            if (this.settings.primary_action) {
              this.settings.primary_action();
            } else {
              this.make_new_doc();
            }
          },
          "add"
        );
      } else {
        this.page.clear_primary_action();
      }
    }
    make_new_doc() {
      const doctype = this.doctype;
      const options = {};
      this.filter_area.get().forEach((f) => {
        if (f[2] === "=" && frappe.model.is_non_std_field(f[1])) {
          options[f[1]] = f[3];
        }
      });
      frappe.new_doc(doctype, options);
    }
    setup_view() {
      this.setup_columns();
      this.render_header();
      this.render_skeleton();
      this.setup_events();
      this.settings.onload && this.settings.onload(this);
      this.show_restricted_list_indicator_if_applicable();
    }
    refresh_columns(meta, list_view_settings) {
      this.meta = meta;
      this.list_view_settings = list_view_settings;
      this.setup_columns();
      this.refresh(true);
    }
    refresh(refresh_header = false) {
      return super.refresh().then(() => {
        this.render_header(refresh_header);
        this.update_checkbox();
        this.update_url_with_filters();
        this.setup_realtime_updates();
      });
    }
    update_checkbox(target) {
      if (!this.$checkbox_actions)
        return;
      let $check_all_checkbox = this.$checkbox_actions.find(".list-check-all");
      if ($check_all_checkbox.prop("checked") && target && !target.prop("checked")) {
        $check_all_checkbox.prop("checked", false);
      }
      $check_all_checkbox.prop("checked", this.$checks.length === this.data.length);
    }
    setup_freeze_area() {
      this.$freeze = $(
        `<div class="freeze flex justify-center align-center text-muted">
				${__("Loading")}...
			</div>`
      ).hide();
      this.$result.append(this.$freeze);
    }
    setup_columns() {
      this.columns = [];
      const get_df = frappe.meta.get_docfield.bind(null, this.doctype);
      if (this.meta.title_field) {
        this.columns.push({
          type: "Subject",
          df: get_df(this.meta.title_field)
        });
      } else {
        this.columns.push({
          type: "Subject",
          df: {
            label: __("ID"),
            fieldname: "name"
          }
        });
      }
      this.columns.push({
        type: "Tag"
      });
      if (frappe.has_indicator(this.doctype)) {
        this.columns.push({
          type: "Status"
        });
      }
      const fields_in_list_view = this.get_fields_in_list_view();
      this.columns = this.columns.concat(
        fields_in_list_view.filter((df) => {
          if (frappe.has_indicator(this.doctype) && df.fieldname === "status") {
            return false;
          }
          if (!df.in_list_view) {
            return false;
          }
          return df.fieldname !== this.meta.title_field;
        }).map((df) => ({
          type: "Field",
          df
        }))
      );
      if (this.list_view_settings.fields) {
        this.columns = this.reorder_listview_fields();
      }
      let total_fields = 6;
      if (window.innerWidth <= 1366) {
        total_fields = 4;
      } else if (window.innerWidth >= 1920) {
        total_fields = 10;
      }
      this.columns = this.columns.slice(0, this.list_view_settings.total_fields || total_fields);
      if (!this.settings.hide_name_column && this.meta.title_field && this.meta.title_field !== "name") {
        this.columns.push({
          type: "Field",
          df: {
            label: __("ID"),
            fieldname: "name"
          }
        });
      }
    }
    reorder_listview_fields() {
      let fields_order = [];
      let fields = JSON.parse(this.list_view_settings.fields);
      fields_order.push(this.columns[0]);
      fields_order.push(this.columns[1]);
      this.columns.splice(0, 2);
      for (let fld in fields) {
        for (let col in this.columns) {
          let field = fields[fld];
          let column = this.columns[col];
          if (column.type == "Status" && field.fieldname == "status_field") {
            fields_order.push(column);
            break;
          } else if (column.type == "Field" && field.fieldname === column.df.fieldname) {
            fields_order.push(column);
            break;
          }
        }
      }
      return fields_order;
    }
    get_documentation_link() {
      if (this.meta.documentation) {
        return `<a href="${this.meta.documentation}" target="blank" class="meta-description small text-muted">Need Help?</a>`;
      }
      return "";
    }
    get_no_result_message() {
      let help_link = this.get_documentation_link();
      let filters = this.filter_area && this.filter_area.get();
      let has_filters_set = filters && filters.length;
      let no_result_message = has_filters_set ? __("No {0} found with matching filters. Clear filters to see all {0}.", [
        __(this.doctype)
      ]) : this.meta.description ? __(this.meta.description) : __("You haven't created a {0} yet", [__(this.doctype)]);
      let new_button_label = has_filters_set ? __("Create a new {0}", [__(this.doctype)], "Create a new document from list view") : __(
        "Create your first {0}",
        [__(this.doctype)],
        "Create a new document from list view"
      );
      let empty_state_image = this.settings.empty_state_image || "/assets/frappe/images/ui-states/list-empty-state.svg";
      const new_button = this.can_create ? `<p><button class="btn btn-default btn-sm btn-new-doc hidden-xs">
				${new_button_label}
			</button> <button class="btn btn-primary btn-new-doc visible-xs">
				${__("Create New", null, "Create a new document from list view")}
			</button></p>` : "";
      return `<div class="msg-box no-border">
			<div>
				<img src="${empty_state_image}" alt="Generic Empty State" class="null-state">
			</div>
			<p>${no_result_message}</p>
			${new_button}
			${help_link}
		</div>`;
    }
    freeze() {
      if (this.list_view_settings && !this.list_view_settings.disable_count) {
        this.$result.find(".list-count").html(`<span>${__("Refreshing", null, "Document count in list view")}...</span>`);
      }
    }
    get_args() {
      const args = super.get_args();
      if (this.list_view_settings && !this.list_view_settings.disable_comment_count) {
        args.with_comment_count = 1;
      } else {
        args.with_comment_count = 0;
      }
      return args;
    }
    before_refresh() {
      if (frappe.route_options && this.filter_area) {
        this.filters = this.parse_filters_from_route_options();
        frappe.route_options = null;
        if (this.filters.length > 0) {
          return this.filter_area.clear(false).then(() => this.filter_area.set(this.filters));
        }
      }
      return Promise.resolve();
    }
    parse_filters_from_settings() {
      return (this.settings.filters || []).map((f) => {
        if (f.length === 3) {
          f = [this.doctype, f[0], f[1], f[2]];
        }
        return f;
      });
    }
    toggle_result_area() {
      super.toggle_result_area();
      this.toggle_actions_menu_button(this.$result.find(".list-row-check:checked").length > 0);
    }
    toggle_actions_menu_button(toggle) {
      if (toggle) {
        this.page.show_actions_menu();
        this.page.clear_primary_action();
      } else {
        this.page.hide_actions_menu();
        this.set_primary_action();
      }
    }
    render_header(refresh_header = false) {
      if (refresh_header) {
        this.$result.find(".list-row-head").remove();
      }
      if (this.$result.find(".list-row-head").length === 0) {
        this.$result.prepend(this.get_header_html());
      }
    }
    render_skeleton() {
      const $row = this.get_list_row_html_skeleton(
        '<div><input type="checkbox" class="render-list-checkbox"/></div>'
      );
      this.$result.append($row);
    }
    before_render() {
      this.settings.before_render && this.settings.before_render();
      frappe.model.user_settings.save(this.doctype, "last_view", this.view_name);
      this.save_view_user_settings({
        filters: this.filter_area && this.filter_area.get(),
        sort_by: this.sort_selector && this.sort_selector.sort_by,
        sort_order: this.sort_selector && this.sort_selector.sort_order
      });
      this.toggle_paging && this.$paging_area.toggle(false);
    }
    after_render() {
      this.$no_result.html(`
			<div class="no-result text-muted flex justify-center align-center">
				${this.get_no_result_message()}
			</div>
		`);
      this.setup_new_doc_event();
      this.toggle_paging && this.$paging_area.toggle(true);
    }
    render() {
      this.render_list();
      this.set_rows_as_checked();
      this.render_count();
    }
    render_list() {
      this.$result.find(".list-row-container").remove();
      if (this.data.length > 0) {
        this.$result.append(
          this.data.map((doc, i2) => {
            doc._idx = i2;
            return this.get_list_row_html(doc);
          }).join("")
        );
      }
    }
    render_count() {
      if (!this.list_view_settings.disable_count) {
        this.get_count_str().then((str) => {
          this.$result.find(".list-count").html(`<span>${str}</span>`);
        });
      }
    }
    get_header_html() {
      if (!this.columns) {
        return;
      }
      const subject_field = this.columns[0].df;
      let subject_html = `
			<input class="level-item list-check-all" type="checkbox"
				title="${__("Select All")}">
			<span class="level-item" data-sort-by="${subject_field.fieldname}"
				title="${__("Click to sort by {0}", [subject_field.label])}">
				${__(subject_field.label)}
			</span>
		`;
      const $columns = this.columns.map((col) => {
        var _a, _b, _c;
        let classes = [
          "list-row-col ellipsis",
          col.type == "Subject" ? "list-subject level" : "hidden-xs",
          col.type == "Tag" ? "tag-col hide" : "",
          frappe.model.is_numeric_field(col.df) ? "text-right" : ""
        ].join(" ");
        let html = "";
        if (col.type === "Subject") {
          html = subject_html;
        } else {
          const fieldname = (_a = col.df) == null ? void 0 : _a.fieldname;
          const attrs = fieldname ? ` data-sort-by="${fieldname}"
							title="${__("Click to sort by {0}", [(_b = col.df) == null ? void 0 : _b.label])}"` : "";
          html = `<span ${attrs}>
						${__(((_c = col.df) == null ? void 0 : _c.label) || col.type)}
					</span>`;
        }
        return `<div class="${classes}">${html}</div>
			`;
      }).join("");
      const right_html = `
			<span class="list-count"></span>
			<span class="level-item list-liked-by-me hidden-xs">
				<span title="${__("Liked by me")}">
					${frappe.utils.icon("es-solid-heart", "sm", "like-icon")}
				</span>
			</span>
		`;
      return this.get_header_html_skeleton($columns, right_html);
    }
    get_header_html_skeleton(left = "", right = "") {
      return `
			<header class="level list-row-head text-muted">
				<div class="level-left list-header-subject">
					${left}
				</div>
				<div class="level-left checkbox-actions">
					<div class="level list-subject">
						<input class="level-item list-check-all" type="checkbox"
							title="${__("Select All")}">
						<span class="level-item list-header-meta"></span>
					</div>
				</div>
				<div class="level-right">
					${right}
				</div>
			</header>
		`;
    }
    get_left_html(doc) {
      return this.columns.map((col) => this.get_column_html(col, doc)).join("");
    }
    get_right_html(doc) {
      return this.get_meta_html(doc);
    }
    get_list_row_html(doc) {
      return this.get_list_row_html_skeleton(this.get_left_html(doc), this.get_right_html(doc));
    }
    get_list_row_html_skeleton(left = "", right = "") {
      return `
			<div class="list-row-container" tabindex="1">
				<div class="level list-row">
					<div class="level-left ellipsis">
						${left}
					</div>
					<div class="level-right text-muted ellipsis">
						${right}
					</div>
				</div>
			</div>
		`;
    }
    get_column_html(col, doc) {
      var _a, _b, _c;
      if (col.type === "Status" || ((_a = col.df) == null ? void 0 : _a.options) == "Workflow State") {
        let show_workflow_state = ((_b = col.df) == null ? void 0 : _b.options) == "Workflow State";
        return `
				<div class="list-row-col hidden-xs ellipsis">
					${this.get_indicator_html(doc, show_workflow_state)}
				</div>
			`;
      }
      if (col.type === "Tag") {
        const tags_display_class = !this.tags_shown ? "hide" : "";
        let tags_html = doc._user_tags ? this.get_tags_html(doc._user_tags, 2) : '<div class="tags-empty">-</div>';
        return `
				<div class="list-row-col tag-col ${tags_display_class} hidden-xs ellipsis">
					${tags_html}
				</div>
			`;
      }
      const df = col.df || {};
      const label = df.label;
      const fieldname = df.fieldname;
      const link_title_fieldname = this.link_field_title_fields[fieldname];
      const value = doc[fieldname] || "";
      let value_display = link_title_fieldname ? doc[fieldname + "_" + link_title_fieldname] || value : value;
      let translated_doctypes = ((_c = frappe.boot) == null ? void 0 : _c.translated_doctypes) || [];
      if (translated_doctypes.includes(df.options)) {
        value_display = __(value_display);
      }
      const format = () => {
        if (df.fieldtype === "Code") {
          return value;
        } else if (df.fieldtype === "Percent") {
          return `<div class="progress" style="margin: 0px;">
						<div class="progress-bar progress-bar-success" role="progressbar"
							aria-valuenow="${value}"
							aria-valuemin="0" aria-valuemax="100" style="width: ${Math.round(value)}%;">
						</div>
					</div>`;
        } else {
          return frappe.format(value, df, null, doc);
        }
      };
      const field_html = () => {
        let html;
        let _value;
        let strip_html_required = df.fieldtype == "Text Editor" || df.fetch_from && ["Text", "Small Text"].includes(df.fieldtype);
        if (strip_html_required) {
          _value = strip_html(value_display);
        } else {
          _value = typeof value_display === "string" ? frappe.utils.escape_html(value_display) : value_display;
        }
        if (df.fieldtype === "Rating") {
          let out_of_ratings = df.options || 5;
          _value = _value * out_of_ratings;
        }
        if (df.fieldtype === "Image") {
          html = df.options ? `<img src="${doc[df.options]}"
					style="max-height: 30px; max-width: 100%;">` : `<div class="missing-image small">
						${frappe.utils.icon("restriction")}
					</div>`;
        } else if (df.fieldtype === "Select") {
          html = `<span class="filterable indicator-pill ${frappe.utils.guess_colour(
            _value
          )} ellipsis"
					data-filter="${fieldname},=,${value}">
					<span class="ellipsis"> ${__(_value)} </span>
				</span>`;
        } else if (df.fieldtype === "Link") {
          html = `<a class="filterable ellipsis"
					data-filter="${fieldname},=,${value}">
					${_value}
				</a>`;
        } else if (["Text Editor", "Text", "Small Text", "HTML Editor", "Markdown Editor"].includes(
          df.fieldtype
        )) {
          html = `<span class="ellipsis">
					${_value}
				</span>`;
        } else {
          html = `<a class="filterable ellipsis"
					data-filter="${fieldname},=,${frappe.utils.escape_html(value)}">
					${format()}
				</a>`;
        }
        return `<span class="ellipsis"
				title="${__(label)}: ${frappe.utils.escape_html(_value)}">
				${html}
			</span>`;
      };
      const class_map = {
        Subject: "list-subject level",
        Field: "hidden-xs"
      };
      const css_class = [
        "list-row-col ellipsis",
        class_map[col.type],
        frappe.model.is_numeric_field(df) ? "text-right" : ""
      ].join(" ");
      let column_html;
      if (this.settings.formatters && this.settings.formatters[fieldname] && col.type !== "Subject") {
        column_html = this.settings.formatters[fieldname](value, df, doc);
      } else {
        column_html = {
          Subject: this.get_subject_html(doc),
          Field: field_html()
        }[col.type];
      }
      return `
			<div class="${css_class}">
				${column_html}
			</div>
		`;
    }
    get_tags_html(user_tags, limit, colored = false) {
      let get_tag_html = (tag) => {
        let color = "", style = "";
        if (tag) {
          if (colored) {
            color = frappe.get_palette(tag);
            style = `background-color: var(${color[0]}); color: var(${color[1]})`;
          }
          return `<div class="tag-pill ellipsis" title="${tag}" style="${style}">${tag}</div>`;
        }
      };
      return user_tags.split(",").slice(1, limit + 1).map(get_tag_html).join("");
    }
    get_meta_html(doc) {
      let html = "";
      let settings_button = null;
      if (this.settings.button && this.settings.button.show(doc)) {
        settings_button = `
				<span class="list-actions">
					<button class="btn btn-action btn-default btn-xs"
						data-name="${doc.name}" data-idx="${doc._idx}"
						title="${this.settings.button.get_description(doc)}">
						${this.settings.button.get_label(doc)}
					</button>
				</span>
			`;
      }
      const modified = comment_when(doc.modified, true);
      let assigned_to = ``;
      let assigned_users = JSON.parse(doc._assign || "[]");
      if (assigned_users.length) {
        assigned_to = `<div class="list-assignments d-flex align-items-center">
					${frappe.avatar_group(assigned_users, 3, { filterable: true })[0].outerHTML}
				</div>`;
      }
      let comment_count = null;
      if (this.list_view_settings && !this.list_view_settings.disable_comment_count) {
        comment_count = $(`<span class="comment-count d-flex align-items-center"></span>`);
        $(comment_count).append(`
				${frappe.utils.icon("es-line-chat-alt")}
				${doc._comment_count > 99 ? "99+" : doc._comment_count || 0}`);
      }
      html += `
			<div class="level-item list-row-activity hidden-xs">
				<div class="hidden-md hidden-xs">
					${settings_button || assigned_to}
				</div>
				<span class="modified">${modified}</span>
				${comment_count ? $(comment_count).prop("outerHTML") : ""}
				${comment_count ? '<span class="mx-2">\xB7</span>' : ""}
				<span class="list-row-like hidden-xs style="margin-bottom: 1px;">
					${this.get_like_html(doc)}
				</span>
			</div>
			<div class="level-item visible-xs text-right">
				${this.get_indicator_html(doc)}
			</div>
		`;
      return html;
    }
    get_count_str() {
      let current_count = this.data.length;
      let count_without_children = this.data.uniqBy((d) => d.name).length;
      return frappe.db.count(this.doctype, {
        filters: this.get_filters_for_args()
      }).then((total_count) => {
        this.total_count = total_count || current_count;
        this.count_without_children = count_without_children !== current_count ? count_without_children : void 0;
        let str = __("{0} of {1}", [current_count, this.total_count]);
        if (this.count_without_children) {
          str = __("{0} of {1} ({2} rows with children)", [
            count_without_children,
            this.total_count,
            current_count
          ]);
        }
        return str;
      });
    }
    get_form_link(doc) {
      if (this.settings.get_form_link) {
        return this.settings.get_form_link(doc);
      }
      return `/app/${encodeURIComponent(
        frappe.router.slug(frappe.router.doctype_layout || this.doctype)
      )}/${encodeURIComponent(cstr(doc.name))}`;
    }
    get_seen_class(doc) {
      return JSON.parse(doc._seen || "[]").includes(frappe.session.user) ? "" : "bold";
    }
    get_like_html(doc) {
      const liked_by = JSON.parse(doc._liked_by || "[]");
      const heart_class = liked_by.includes(frappe.session.user) ? "liked-by liked" : "not-liked";
      const title = liked_by.map((u) => frappe.user_info(u).fullname).join(", ");
      const div = document.createElement("div");
      div.innerHTML = `
			<span class="like-action ${heart_class}">
				${frappe.utils.icon("es-solid-heart", "sm", "like-icon")}
			</span>
			<span class="likes-count">
				${liked_by.length > 99 ? __("99") + "+" : __(liked_by.length || "")}
			</span>
		`;
      const like = div.querySelector(".like-action");
      like.setAttribute("data-liked-by", doc._liked_by || "[]");
      like.setAttribute("data-doctype", this.doctype);
      like.setAttribute("data-name", doc.name);
      like.setAttribute("title", title);
      return div.innerHTML;
    }
    get_subject_html(doc) {
      let subject_field = this.columns[0].df;
      let value = doc[subject_field.fieldname];
      if (this.settings.formatters && this.settings.formatters[subject_field.fieldname]) {
        let formatter = this.settings.formatters[subject_field.fieldname];
        value = formatter(value, subject_field, doc);
      }
      if (!value) {
        value = doc.name;
      }
      const seen = this.get_seen_class(doc);
      const div = document.createElement("div");
      div.innerHTML = `
			<span class="level-item select-like">
				<input class="list-row-checkbox" type="checkbox">
			</span>
			<span class="level-item ${seen} ellipsis">
				<a class="ellipsis"></a>
			</span>
		`;
      const checkbox = div.querySelector(".list-row-checkbox");
      checkbox.dataset.doctype = this.doctype;
      checkbox.dataset.name = doc.name;
      const link = div.querySelector(".level-item a");
      link.dataset.doctype = this.doctype;
      link.dataset.name = doc.name;
      link.href = this.get_form_link(doc);
      let textValue = frappe.utils.html2text(value);
      link.title = textValue;
      link.textContent = textValue;
      return div.innerHTML;
    }
    get_indicator_html(doc, show_workflow_state) {
      const indicator = frappe.get_indicator(doc, this.doctype, show_workflow_state);
      const docstatus_description = [
        __("Document is in draft state"),
        __("Document has been submitted"),
        __("Document has been cancelled")
      ];
      const title = docstatus_description[doc.docstatus || 0];
      if (indicator) {
        return `<span class="indicator-pill ${indicator[1]} filterable no-indicator-dot ellipsis"
				data-filter='${indicator[2]}' title='${title}'>
				<span class="ellipsis"> ${__(indicator[0])}</span>
			</span>`;
      }
      return "";
    }
    get_indicator_dot(doc) {
      const indicator = frappe.get_indicator(doc, this.doctype);
      if (!indicator)
        return "";
      return `<span class='indicator ${indicator[1]}' title='${__(indicator[0])}'></span>`;
    }
    get_image_url(doc) {
      let url = doc.image ? doc.image : doc[this.meta.image_field];
      if (window.cordova && !frappe.utils.is_url(url)) {
        url = frappe.base_url + url;
      }
      return url || null;
    }
    setup_events() {
      this.setup_filterable();
      this.setup_sort_by();
      this.setup_list_click();
      this.setup_drag_click();
      this.setup_tag_event();
      this.setup_new_doc_event();
      this.setup_check_events();
      this.setup_like();
      this.setup_realtime_updates();
      this.setup_action_handler();
      this.setup_keyboard_navigation();
    }
    setup_keyboard_navigation() {
      let focus_first_row = () => {
        this.$result.find(".list-row-container:first").focus();
      };
      let focus_next = () => {
        $(document.activeElement).next().focus();
      };
      let focus_prev = () => {
        $(document.activeElement).prev().focus();
      };
      let list_row_focused = () => {
        return $(document.activeElement).is(".list-row-container");
      };
      let check_row = ($row) => {
        let $input = $row.find("input[type=checkbox]");
        $input.click();
      };
      let get_list_row_if_focused = () => list_row_focused() ? $(document.activeElement) : null;
      let is_current_page = () => this.page.wrapper.is(":visible");
      let is_input_focused = () => $(document.activeElement).is("input");
      let handle_navigation = (direction) => {
        if (!is_current_page() || is_input_focused())
          return false;
        let $list_row = get_list_row_if_focused();
        if ($list_row) {
          direction === "down" ? focus_next() : focus_prev();
        } else {
          focus_first_row();
        }
      };
      frappe.ui.keys.add_shortcut({
        shortcut: "down",
        action: () => handle_navigation("down"),
        description: __("Navigate list down", null, "Description of a list view shortcut"),
        page: this.page
      });
      frappe.ui.keys.add_shortcut({
        shortcut: "up",
        action: () => handle_navigation("up"),
        description: __("Navigate list up", null, "Description of a list view shortcut"),
        page: this.page
      });
      frappe.ui.keys.add_shortcut({
        shortcut: "shift+down",
        action: () => {
          if (!is_current_page() || is_input_focused())
            return false;
          let $list_row = get_list_row_if_focused();
          check_row($list_row);
          focus_next();
        },
        description: __(
          "Select multiple list items",
          null,
          "Description of a list view shortcut"
        ),
        page: this.page
      });
      frappe.ui.keys.add_shortcut({
        shortcut: "shift+up",
        action: () => {
          if (!is_current_page() || is_input_focused())
            return false;
          let $list_row = get_list_row_if_focused();
          check_row($list_row);
          focus_prev();
        },
        description: __(
          "Select multiple list items",
          null,
          "Description of a list view shortcut"
        ),
        page: this.page
      });
      frappe.ui.keys.add_shortcut({
        shortcut: "enter",
        action: () => {
          let $list_row = get_list_row_if_focused();
          if ($list_row) {
            $list_row.find("a[data-name]")[0].click();
            return true;
          }
          return false;
        },
        description: __("Open list item", null, "Description of a list view shortcut"),
        page: this.page
      });
      frappe.ui.keys.add_shortcut({
        shortcut: "space",
        action: () => {
          let $list_row = get_list_row_if_focused();
          if ($list_row) {
            check_row($list_row);
            return true;
          }
          return false;
        },
        description: __("Select list item", null, "Description of a list view shortcut"),
        page: this.page
      });
    }
    setup_filterable() {
      this.$result.on("click", ".filterable", (e) => {
        if (e.metaKey || e.ctrlKey)
          return;
        e.stopPropagation();
        const $this = $(e.currentTarget);
        const filters = $this.attr("data-filter").split("|");
        const filters_to_apply = filters.map((f) => {
          f = f.split(",");
          if (f[2] === "Today") {
            f[2] = frappe.datetime.get_today();
          } else if (f[2] == "User") {
            f[2] = frappe.session.user;
          }
          this.filter_area.remove(f[0]);
          return [this.doctype, f[0], f[1], f.slice(2).join(",")];
        });
        this.filter_area.add(filters_to_apply);
      });
    }
    setup_sort_by() {
      this.$result.on("click", "[data-sort-by]", (e) => {
        const sort_by = e.currentTarget.getAttribute("data-sort-by");
        if (!sort_by)
          return;
        let sort_order = "asc";
        if (this.sort_by === sort_by) {
          sort_order = this.sort_order === "asc" ? "desc" : "asc";
        }
        this.sort_selector.set_value(sort_by, sort_order);
        this.on_sort_change(sort_by, sort_order);
      });
    }
    setup_list_click() {
      this.$result.on("click", ".list-row, .image-view-header, .file-header", (e) => {
        const $target = $(e.target);
        if ((e.ctrlKey || e.metaKey) && !$target.is("a")) {
          const $list_row = $(e.currentTarget);
          const $check = $list_row.find(".list-row-checkbox");
          $check.prop("checked", !$check.prop("checked"));
          e.preventDefault();
          this.on_row_checked();
          return;
        }
        if ($target.hasClass("filterable") || $target.hasClass("select-like") || $target.hasClass("file-select") || $target.hasClass("list-row-like") || $target.is(":checkbox")) {
          e.stopPropagation();
          return;
        }
        if ($target.is("a"))
          return;
        const $row = $(e.currentTarget);
        const link = $row.find(".list-subject a").get(0);
        if (link) {
          frappe.set_route(link.pathname);
          return false;
        }
      });
    }
    setup_drag_click() {
      this.dragClick = false;
      this.$result.on("mousedown", ".list-row-checkbox", (e) => {
        this.dragClick = true;
        this.check = !e.target.checked;
      });
      $(document).on("mouseup", () => {
        this.dragClick = false;
      });
      this.$result.on("mousemove", ".level.list-row", (e) => {
        if (this.dragClick) {
          this.check_row_on_drag(e, this.check);
        }
      });
    }
    check_row_on_drag(event, check = true) {
      $(event.target).find(".list-row-checkbox").prop("checked", check);
      this.on_row_checked();
    }
    setup_action_handler() {
      this.$result.on("click", ".btn-action", (e) => {
        const $button = $(e.currentTarget);
        const doc = this.data[$button.attr("data-idx")];
        this.settings.button.action(doc);
        e.stopPropagation();
        return false;
      });
    }
    setup_check_events() {
      this.$result.on("change", "input[type=checkbox]", (e) => {
        const $target = $(e.currentTarget);
        if ($target.is(".list-header-subject .list-check-all")) {
          const $check = this.$result.find(".checkbox-actions .list-check-all");
          $check.prop("checked", $target.prop("checked"));
          $check.trigger("change");
        } else if ($target.is(".checkbox-actions .list-check-all")) {
          const $check = this.$result.find(".list-header-subject .list-check-all");
          $check.prop("checked", $target.prop("checked"));
          this.$result.find(".list-row-checkbox").prop("checked", $target.prop("checked"));
        } else if ($target.attr("data-parent")) {
          this.$result.find(`.${$target.attr("data-parent")}`).find(".list-row-checkbox").prop("checked", $target.prop("checked"));
        }
        this.on_row_checked();
      });
      this.$result.on("click", ".list-row-checkbox", (e) => {
        const $target = $(e.currentTarget);
        if (e.shiftKey && this.$checkbox_cursor && !$target.is(this.$checkbox_cursor)) {
          const name_1 = decodeURIComponent(this.$checkbox_cursor.data().name);
          const name_2 = decodeURIComponent($target.data().name);
          const index_1 = this.data.findIndex((d) => d.name === name_1);
          const index_2 = this.data.findIndex((d) => d.name === name_2);
          let [min_index, max_index] = [index_1, index_2];
          if (min_index > max_index) {
            [min_index, max_index] = [max_index, min_index];
          }
          let docnames = this.data.slice(min_index + 1, max_index).map((d) => d.name);
          const selector = docnames.map((name) => `.list-row-checkbox[data-name="${encodeURIComponent(name)}"]`).join(",");
          this.$result.find(selector).prop("checked", true);
        }
        this.$checkbox_cursor = $target;
        this.update_checkbox($target);
      });
      let me2 = this;
      this.page.actions_btn_group.on("show.bs.dropdown", () => {
        me2.toggle_workflow_actions();
      });
    }
    setup_like() {
      this.$result.on("click", ".like-action", frappe.ui.click_toggle_like);
      this.$result.on("click", ".list-liked-by-me", (e) => {
        const $this = $(e.currentTarget);
        $this.toggleClass("active");
        if ($this.hasClass("active")) {
          this.filter_area.add(
            this.doctype,
            "_liked_by",
            "like",
            "%" + frappe.session.user + "%"
          );
        } else {
          this.filter_area.remove("_liked_by");
        }
      });
    }
    setup_new_doc_event() {
      this.$no_result.find(".btn-new-doc").click(() => {
        if (this.settings.primary_action) {
          this.settings.primary_action();
        } else {
          this.make_new_doc();
        }
      });
    }
    setup_tag_event() {
      this.tags_shown = false;
      this.list_sidebar && this.list_sidebar.parent.on("click", ".list-tag-preview", () => {
        this.tags_shown = !this.tags_shown;
        this.toggle_tags();
      });
    }
    setup_realtime_updates() {
      var _a;
      this.pending_document_refreshes = [];
      if (((_a = this.list_view_settings) == null ? void 0 : _a.disable_auto_refresh) || this.realtime_events_setup) {
        return;
      }
      frappe.realtime.doctype_subscribe(this.doctype);
      frappe.realtime.off("list_update");
      frappe.realtime.on("list_update", (data) => {
        if ((data == null ? void 0 : data.doctype) !== this.doctype) {
          return;
        }
        if (this.$checks && this.$checks.length) {
          return;
        }
        if (this.avoid_realtime_update()) {
          return;
        }
        this.pending_document_refreshes.push(data);
        this.debounced_refresh();
      });
      this.realtime_events_setup = true;
    }
    disable_realtime_updates() {
      frappe.realtime.doctype_unsubscribe(this.doctype);
      this.realtime_events_setup = false;
    }
    process_document_refreshes() {
      if (!this.pending_document_refreshes.length)
        return;
      const route = frappe.get_route() || [];
      if (!cur_list || route[0] != "List" || cur_list.doctype != route[1]) {
        this.pending_document_refreshes = [];
        this.disable_realtime_updates();
        return;
      }
      const names = this.pending_document_refreshes.map((d) => d.name);
      this.pending_document_refreshes = this.pending_document_refreshes.filter(
        (d) => names.indexOf(d.name) === -1
      );
      if (!names.length)
        return;
      const call_args = this.get_call_args();
      call_args.args.filters.push([this.doctype, "name", "in", names]);
      call_args.args.start = 0;
      frappe.call(call_args).then(({ message }) => {
        if (!message)
          return;
        const data = frappe.utils.dict(message.keys, message.values);
        if (!(data && data.length)) {
          this.data = this.data.filter((d) => names.indexOf(d.name) === -1);
          this.render_list();
          return;
        }
        data.forEach((datum) => {
          const index = this.data.findIndex((doc) => doc.name === datum.name);
          if (index === -1) {
            this.data.push(datum);
          } else {
            this.data[index] = datum;
          }
        });
        this.data.sort((a, b) => {
          const a_value = a[this.sort_by] || "";
          const b_value = b[this.sort_by] || "";
          let return_value = 0;
          if (a_value > b_value) {
            return_value = 1;
          }
          if (b_value > a_value) {
            return_value = -1;
          }
          if (this.sort_order === "desc") {
            return_value = -return_value;
          }
          return return_value;
        });
        if (this.$checks && this.$checks.length) {
          this.set_rows_as_checked();
        }
        this.toggle_result_area();
        this.render_list();
      });
    }
    avoid_realtime_update() {
      if (this.filter_area.is_being_edited()) {
        return true;
      }
      if (this.disable_list_update) {
        return true;
      }
      return false;
    }
    set_rows_as_checked() {
      $.each(this.$checks, (i2, el) => {
        let docname = $(el).attr("data-name");
        this.$result.find(`.list-row-checkbox[data-name='${docname}']`).prop("checked", true);
      });
      this.on_row_checked();
    }
    on_row_checked() {
      this.$list_head_subject = this.$list_head_subject || this.$result.find("header .list-header-subject");
      this.$checkbox_actions = this.$checkbox_actions || this.$result.find("header .checkbox-actions");
      this.$checks = this.$result.find(".list-row-checkbox:checked");
      this.$list_head_subject.toggle(this.$checks.length === 0);
      this.$checkbox_actions.toggle(this.$checks.length > 0);
      if (this.$checks.length === 0) {
        this.$list_head_subject.find(".list-check-all").prop("checked", false);
      } else {
        this.$checkbox_actions.find(".list-header-meta").html(__("{0} items selected", [this.$checks.length]));
        this.$checkbox_actions.show();
        this.$list_head_subject.hide();
      }
      this.update_checkbox();
      this.toggle_actions_menu_button(this.$checks.length > 0);
    }
    toggle_tags() {
      this.$result.find(".tag-col").toggleClass("hide");
      const preview_label = this.tags_shown ? __("Hide Tags") : __("Show Tags");
      this.list_sidebar.parent.find(".list-tag-preview").text(preview_label);
    }
    get_checked_items(only_docnames) {
      const docnames = Array.from(this.$checks || []).map(
        (check) => cstr(unescape($(check).data().name))
      );
      if (only_docnames)
        return docnames;
      return this.data.filter((d) => docnames.includes(d.name));
    }
    clear_checked_items() {
      this.$checks && this.$checks.prop("checked", false);
      this.on_row_checked();
    }
    save_view_user_settings(obj) {
      return frappe.model.user_settings.save(this.doctype, this.view_name, obj);
    }
    on_update() {
    }
    update_url_with_filters() {
      if (frappe.get_route_str() == this.page_name && !this.report_name) {
        window.history.replaceState(null, null, this.get_url_with_filters());
      }
    }
    get_url_with_filters() {
      let search_params = this.get_search_params();
      let full_url = window.location.href.replace(window.location.search, "");
      if (search_params.size) {
        full_url += "?" + search_params.toString();
      }
      return full_url;
    }
    get_search_params() {
      let search_params = new URLSearchParams();
      this.get_filters_for_args().forEach((filter) => {
        if (filter[2] === "=") {
          search_params.append(filter[1], filter[3]);
        } else {
          search_params.append(filter[1], JSON.stringify([filter[2], filter[3]]));
        }
      });
      return search_params;
    }
    get_menu_items() {
      const doctype = this.doctype;
      const items = [];
      if (frappe.model.can_import(doctype, null, this.meta)) {
        items.push({
          label: __("Import", null, "Button in list view menu"),
          action: () => frappe.set_route("list", "data-import", {
            reference_doctype: doctype
          }),
          standard: true
        });
      }
      if (frappe.user_roles.includes("System Manager")) {
        items.push({
          label: __("User Permissions", null, "Button in list view menu"),
          action: () => frappe.set_route("list", "user-permission", {
            allow: doctype
          }),
          standard: true
        });
      }
      if (frappe.user_roles.includes("System Manager")) {
        items.push({
          label: __("Role Permissions Manager", null, "Button in list view menu"),
          action: () => frappe.set_route("permission-manager", {
            doctype
          }),
          standard: true
        });
      }
      if (frappe.model.can_create("Custom Field") && frappe.model.can_create("Property Setter")) {
        items.push({
          label: __("Customize", null, "Button in list view menu"),
          action: () => {
            if (!this.meta)
              return;
            if (this.meta.custom) {
              frappe.set_route("form", "doctype", doctype);
            } else if (!this.meta.custom) {
              frappe.set_route("form", "customize-form", {
                doc_type: doctype
              });
            }
          },
          standard: true,
          shortcut: "Ctrl+J"
        });
      }
      items.push({
        label: __("Toggle Sidebar", null, "Button in list view menu"),
        action: () => this.toggle_side_bar(),
        condition: () => !this.hide_sidebar,
        standard: true,
        shortcut: "Ctrl+K"
      });
      if (frappe.user.has_role("System Manager") && frappe.boot.developer_mode === 1) {
        items.push({
          label: __("Edit DocType", null, "Button in list view menu"),
          action: () => frappe.set_route("form", "doctype", doctype),
          standard: true
        });
      }
      if (frappe.user.has_role("System Manager")) {
        if (this.get_view_settings) {
          items.push(this.get_view_settings());
        }
      }
      return items;
    }
    get_view_settings() {
      return {
        label: __("List Settings", null, "Button in list view menu"),
        action: () => this.show_list_settings(),
        standard: true
      };
    }
    show_list_settings() {
      frappe.model.with_doctype(this.doctype, () => {
        new ListSettings({
          listview: this,
          doctype: this.doctype,
          settings: this.list_view_settings,
          meta: frappe.get_meta(this.doctype)
        });
      });
    }
    get_workflow_action_menu_items() {
      const workflow_actions = [];
      const me2 = this;
      if (frappe.model.has_workflow(this.doctype)) {
        const actions = frappe.workflow.get_all_transition_actions(this.doctype);
        actions.forEach((action) => {
          workflow_actions.push({
            label: __(action),
            name: action,
            action: () => {
              me2.disable_list_update = true;
              frappe.xcall("frappe.model.workflow.bulk_workflow_approval", {
                docnames: this.get_checked_items(true),
                doctype: this.doctype,
                action
              }).finally(() => {
                me2.disable_list_update = false;
              });
            },
            is_workflow_action: true
          });
        });
      }
      return workflow_actions;
    }
    toggle_workflow_actions() {
      if (!frappe.model.has_workflow(this.doctype))
        return;
      Object.keys(this.workflow_action_items).forEach((key) => {
        this.workflow_action_items[key].addClass("disabled");
      });
      const checked_items = this.get_checked_items();
      frappe.xcall("frappe.model.workflow.get_common_transition_actions", {
        docs: checked_items,
        doctype: this.doctype
      }).then((actions) => {
        Object.keys(this.workflow_action_items).forEach((key) => {
          this.workflow_action_items[key].removeClass("disabled");
          this.workflow_action_items[key].toggle(actions.includes(key));
        });
      });
    }
    get_actions_menu_items() {
      const doctype = this.doctype;
      const actions_menu_items = [];
      const bulk_operations = new BulkOperations({ doctype: this.doctype });
      const is_field_editable = (field_doc) => {
        return field_doc.fieldname && frappe.model.is_value_type(field_doc) && field_doc.fieldtype !== "Read Only" && !field_doc.hidden && !field_doc.read_only && !field_doc.is_virtual;
      };
      const has_editable_fields = (doctype2) => {
        return frappe.meta.get_docfields(doctype2).some((field_doc) => is_field_editable(field_doc));
      };
      const has_submit_permission = (doctype2) => {
        return frappe.perm.has_perm(doctype2, 0, "submit");
      };
      const bulk_assignment = () => {
        return {
          label: __("Assign To", null, "Button in list view actions menu"),
          action: () => {
            this.disable_list_update = true;
            bulk_operations.assign(this.get_checked_items(true), () => {
              this.disable_list_update = false;
              this.clear_checked_items();
              this.refresh();
            });
          },
          standard: true
        };
      };
      const bulk_assignment_rule = () => {
        return {
          label: __("Apply Assignment Rule", null, "Button in list view actions menu"),
          action: () => {
            this.disable_list_update = true;
            bulk_operations.apply_assignment_rule(this.get_checked_items(true), () => {
              this.disable_list_update = false;
              this.clear_checked_items();
              this.refresh();
            });
          },
          standard: true
        };
      };
      const bulk_add_tags = () => {
        return {
          label: __("Add Tags", null, "Button in list view actions menu"),
          action: () => {
            this.disable_list_update = true;
            bulk_operations.add_tags(this.get_checked_items(true), () => {
              this.disable_list_update = false;
              this.clear_checked_items();
              this.refresh();
            });
          },
          standard: true
        };
      };
      const bulk_printing = () => {
        return {
          label: __("Print", null, "Button in list view actions menu"),
          action: () => bulk_operations.print(this.get_checked_items()),
          standard: true
        };
      };
      const bulk_delete = () => {
        return {
          label: __("Delete", null, "Button in list view actions menu"),
          action: () => {
            const docnames = this.get_checked_items(true).map(
              (docname) => docname.toString()
            );
            let message = __(
              "Delete {0} item permanently?",
              [docnames.length],
              "Title of confirmation dialog"
            );
            if (docnames.length > 1) {
              message = __(
                "Delete {0} items permanently?",
                [docnames.length],
                "Title of confirmation dialog"
              );
            }
            frappe.confirm(message, () => {
              this.disable_list_update = true;
              bulk_operations.delete(docnames, () => {
                this.disable_list_update = false;
                this.clear_checked_items();
                this.refresh();
              });
            });
          },
          standard: true
        };
      };
      const bulk_cancel = () => {
        return {
          label: __("Cancel", null, "Button in list view actions menu"),
          action: () => {
            const docnames = this.get_checked_items(true);
            if (docnames.length > 0) {
              frappe.confirm(
                __(
                  "Cancel {0} documents?",
                  [docnames.length],
                  "Title of confirmation dialog"
                ),
                () => {
                  this.disable_list_update = true;
                  bulk_operations.submit_or_cancel(docnames, "cancel", () => {
                    this.disable_list_update = false;
                    this.clear_checked_items();
                    this.refresh();
                  });
                }
              );
            }
          },
          standard: true
        };
      };
      const bulk_submit = () => {
        return {
          label: __("Submit", null, "Button in list view actions menu"),
          action: () => {
            const docnames = this.get_checked_items(true);
            if (docnames.length > 0) {
              frappe.confirm(
                __(
                  "Submit {0} documents?",
                  [docnames.length],
                  "Title of confirmation dialog"
                ),
                () => {
                  this.disable_list_update = true;
                  bulk_operations.submit_or_cancel(docnames, "submit", () => {
                    this.disable_list_update = false;
                    this.clear_checked_items();
                    this.refresh();
                  });
                }
              );
            }
          },
          standard: true
        };
      };
      const bulk_edit = () => {
        return {
          label: __("Edit", null, "Button in list view actions menu"),
          action: () => {
            let field_mappings = {};
            frappe.meta.get_docfields(doctype).forEach((field_doc) => {
              if (is_field_editable(field_doc)) {
                field_mappings[field_doc.label] = Object.assign({}, field_doc);
              }
            });
            this.disable_list_update = true;
            bulk_operations.edit(this.get_checked_items(true), field_mappings, () => {
              this.disable_list_update = false;
              this.refresh();
            });
          },
          standard: true
        };
      };
      const bulk_export = () => {
        return {
          label: __("Export", null, "Button in list view actions menu"),
          action: () => {
            const docnames = this.get_checked_items(true);
            bulk_operations.export(doctype, docnames);
          },
          standard: true
        };
      };
      if (has_editable_fields(doctype)) {
        actions_menu_items.push(bulk_edit());
      }
      actions_menu_items.push(bulk_export());
      actions_menu_items.push(bulk_assignment());
      actions_menu_items.push(bulk_assignment_rule());
      actions_menu_items.push(bulk_add_tags());
      if (frappe.model.can_print(doctype)) {
        actions_menu_items.push(bulk_printing());
      }
      if (frappe.model.is_submittable(doctype) && has_submit_permission(doctype) && !frappe.model.has_workflow(doctype)) {
        actions_menu_items.push(bulk_submit());
      }
      if (frappe.model.can_cancel(doctype) && !frappe.model.has_workflow(doctype)) {
        actions_menu_items.push(bulk_cancel());
      }
      if (frappe.model.can_delete(doctype)) {
        actions_menu_items.push(bulk_delete());
      }
      return actions_menu_items;
    }
    parse_filters_from_route_options() {
      const filters = [];
      for (let field in frappe.route_options) {
        let doctype = null;
        let value = frappe.route_options[field];
        let value_array;
        if ($.isArray(value) && value[0].startsWith("[") && value[0].endsWith("]")) {
          value_array = [];
          for (var i2 = 0; i2 < value.length; i2++) {
            value_array.push(JSON.parse(value[i2]));
          }
        } else if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
          value = JSON.parse(value);
        }
        if (field.includes(".")) {
          doctype = field.split(".")[0];
          field = field.split(".")[1];
        }
        if (!doctype) {
          doctype = frappe.meta.get_doctype_for_field(this.doctype, field);
        }
        if (doctype) {
          if (value_array) {
            for (var j = 0; j < value_array.length; j++) {
              if ($.isArray(value_array[j])) {
                filters.push([doctype, field, value_array[j][0], value_array[j][1]]);
              } else {
                filters.push([doctype, field, "=", value_array[j]]);
              }
            }
          } else if ($.isArray(value)) {
            filters.push([doctype, field, value[0], value[1]]);
          } else {
            filters.push([doctype, field, "=", value]);
          }
        }
      }
      return filters;
    }
  };
  frappe.get_list_view = (doctype) => {
    let route = `List/${doctype}/List`;
    return frappe.views.list_view[route];
  };

  // frappe/public/js/frappe/list/list_factory.js
  frappe.provide("frappe.views.list_view");
  window.cur_list = null;
  frappe.views.ListFactory = class ListFactory extends frappe.views.Factory {
    make(route) {
      const me2 = this;
      const doctype = route[1];
      let view_name = frappe.utils.to_title_case(route[2] || "List");
      if (doctype == "File" && !["Report", "Dashboard"].includes(view_name)) {
        view_name = "File";
      }
      let view_class = frappe.views[view_name + "View"];
      if (!view_class)
        view_class = frappe.views.ListView;
      if (view_class && view_class.load_last_view && view_class.load_last_view()) {
        return;
      }
      frappe.provide("frappe.views.list_view." + doctype);
      frappe.views.list_view[me2.page_name] = new view_class({
        doctype,
        parent: me2.make_page(true, me2.page_name)
      });
      me2.set_cur_list();
    }
    before_show() {
      if (this.re_route_to_view()) {
        return false;
      }
      this.set_module_breadcrumb();
    }
    on_show() {
      this.set_cur_list();
      if (cur_list)
        cur_list.show();
    }
    re_route_to_view() {
      const doctype = this.route[1];
      const last_route = frappe.route_history.slice(-2)[0];
      if (this.route[0] === "List" && this.route.length === 2 && frappe.views.list_view[doctype] && last_route && last_route[0] === "List" && last_route[1] === doctype) {
        window.history.go(-1);
        return true;
      }
    }
    set_module_breadcrumb() {
      if (frappe.route_history.length > 1) {
        const prev_route = frappe.route_history[frappe.route_history.length - 2];
        if (prev_route[0] === "modules") {
          const doctype = this.route[1], module2 = prev_route[1];
          if (frappe.module_links[module2] && frappe.module_links[module2].includes(doctype)) {
            frappe.breadcrumbs.set_doctype_module(doctype, module2);
          }
        }
      }
    }
    set_cur_list() {
      cur_list = frappe.views.list_view[this.page_name];
      if (cur_list && cur_list.doctype !== this.route[1]) {
        window.cur_list = null;
      }
    }
  };

  // frappe/public/js/frappe/list/list_view_select.js
  frappe.provide("frappe.views");
  frappe.views.ListViewSelect = class ListViewSelect {
    constructor(opts) {
      $.extend(this, opts);
      this.set_current_view();
      this.setup_views();
    }
    add_view_to_menu(view, action) {
      if (this.doctype == "File" && view == "List") {
        view = "File";
      }
      let $el = this.page.add_custom_menu_item(
        this.parent,
        __(view),
        action,
        true,
        null,
        this.icon_map[view] || "list"
      );
      $el.parent().attr("data-view", view);
    }
    set_current_view() {
      this.current_view = "List";
      const route = frappe.get_route();
      const view_name = frappe.utils.to_title_case(route[2] || "");
      if (route.length > 2 && frappe.views.view_modes.includes(view_name)) {
        this.current_view = view_name;
        if (this.current_view === "Kanban") {
          this.kanban_board = route[3];
        } else if (this.current_view === "Inbox") {
          this.email_account = route[3];
        }
      }
    }
    set_route(view, calendar_name) {
      const route = [this.slug(), "view", view];
      if (calendar_name)
        route.push(calendar_name);
      let search_params = cur_list == null ? void 0 : cur_list.get_search_params();
      if (search_params) {
        frappe.route_options = Object.fromEntries(search_params);
      }
      frappe.set_route(route);
    }
    setup_views() {
      const views = {
        List: {
          condition: true,
          action: () => this.set_route("list")
        },
        Report: {
          condition: true,
          action: () => this.set_route("report"),
          current_view_handler: () => {
            const reports = this.get_reports();
            let default_action = {};
            if (frappe.get_route().length > 3) {
              default_action = {
                label: __("Report Builder"),
                action: () => this.set_route("report")
              };
            }
            this.setup_dropdown_in_sidebar("Report", reports, default_action);
          }
        },
        Dashboard: {
          condition: true,
          action: () => this.set_route("dashboard")
        },
        Calendar: {
          condition: frappe.views.calendar[this.doctype],
          action: () => this.set_route("calendar", "default"),
          current_view_handler: () => {
            this.get_calendars().then((calendars) => {
              this.setup_dropdown_in_sidebar("Calendar", calendars);
            });
          }
        },
        Gantt: {
          condition: frappe.views.calendar[this.doctype],
          action: () => this.set_route("gantt")
        },
        Inbox: {
          condition: this.doctype === "Communication" && frappe.boot.email_accounts.length,
          action: () => this.set_route("inbox"),
          current_view_handler: () => {
            const accounts = this.get_email_accounts();
            let default_action;
            if (has_common(frappe.user_roles, ["System Manager", "Administrator"])) {
              default_action = {
                label: __("New Email Account"),
                action: () => frappe.new_doc("Email Account")
              };
            }
            this.setup_dropdown_in_sidebar("Inbox", accounts, default_action);
          }
        },
        Image: {
          condition: this.list_view.meta.image_field,
          action: () => this.set_route("image")
        },
        Tree: {
          condition: frappe.treeview_settings[this.doctype] || frappe.get_meta(this.doctype).is_tree,
          action: () => this.set_route("tree")
        },
        Kanban: {
          condition: this.doctype != "File",
          action: () => this.setup_kanban_boards(),
          current_view_handler: () => {
            frappe.views.KanbanView.get_kanbans(this.doctype).then(
              (kanbans) => this.setup_kanban_switcher(kanbans)
            );
          }
        },
        Map: {
          condition: this.list_view.settings.get_coords_method || this.list_view.meta.fields.find((i2) => i2.fieldname === "latitude") && this.list_view.meta.fields.find((i2) => i2.fieldname === "longitude") || this.list_view.meta.fields.find(
            (i2) => i2.fieldname === "location" && i2.fieldtype == "Geolocation"
          ),
          action: () => this.set_route("map")
        }
      };
      frappe.views.view_modes.forEach((view) => {
        if (this.current_view !== view && views[view].condition) {
          this.add_view_to_menu(view, views[view].action);
        }
        if (this.current_view == view) {
          views[view].current_view_handler && views[view].current_view_handler();
        }
      });
    }
    setup_dropdown_in_sidebar(view, items, default_action) {
      if (!this.sidebar)
        return;
      const views_wrapper = this.sidebar.sidebar.find(".views-section");
      views_wrapper.find(".sidebar-label").html(__(view));
      const $dropdown = views_wrapper.find(".views-dropdown");
      let placeholder = __("Select {0}", [__(view)]);
      let html = ``;
      if (!items || !items.length) {
        html = `<div class="empty-state">
						${__("No {0} Found", [__(view)])}
				</div>`;
      } else {
        const page_name = this.get_page_name();
        items.map((item) => {
          if (item.name.toLowerCase() == page_name.toLowerCase()) {
            placeholder = item.name;
          } else {
            html += `<li><a class="dropdown-item" href="${item.route}">${item.name}</a></li>`;
          }
        });
      }
      views_wrapper.find(".selected-view").html(placeholder);
      if (default_action) {
        views_wrapper.find(".sidebar-action a").html(default_action.label);
        views_wrapper.find(".sidebar-action a").click(() => default_action.action());
      }
      $dropdown.html(html);
      views_wrapper.removeClass("hide");
    }
    setup_kanban_switcher(kanbans) {
      const kanban_switcher = this.page.add_custom_button_group(
        __("Select Kanban"),
        null,
        this.list_view.$filter_section
      );
      kanbans.map((k) => {
        this.page.add_custom_menu_item(
          kanban_switcher,
          k.name,
          () => this.set_route("kanban", k.name),
          false
        );
      });
      let perms = this.list_view.board_perms;
      let can_create = perms ? perms.create : true;
      if (can_create) {
        this.page.add_custom_menu_item(
          kanban_switcher,
          __("Create New Kanban Board"),
          () => frappe.views.KanbanView.show_kanban_dialog(this.doctype),
          true
        );
      }
    }
    get_page_name() {
      return frappe.utils.to_title_case(frappe.get_route().slice(-1)[0] || "");
    }
    get_reports() {
      let added = [];
      let reports_to_add = [];
      let add_reports = (reports2) => {
        reports2.map((r) => {
          if (!r.ref_doctype || r.ref_doctype == this.doctype) {
            const report_type = r.report_type === "Report Builder" ? `/app/list/${r.ref_doctype}/report` : "/app/query-report";
            const route = r.route || report_type + "/" + (r.title || r.name);
            if (added.indexOf(route) === -1) {
              added.push(route);
              reports_to_add.push({
                name: __(r.title || r.name),
                route
              });
            }
          }
        });
      };
      if (this.list_view.settings.reports) {
        add_reports(this.list_view.settings.reports);
      }
      var reports = Object.values(frappe.boot.user.all_reports).sort(
        (a, b) => a.title.localeCompare(b.title)
      ) || [];
      add_reports(reports);
      return reports_to_add;
    }
    setup_kanban_boards() {
      var _a;
      function fetch_kanban_board(doctype) {
        frappe.db.get_value(
          "Kanban Board",
          { reference_doctype: doctype },
          "name",
          (board) => {
            if (!$.isEmptyObject(board)) {
              frappe.set_route("list", doctype, "kanban", board.name);
            } else {
              frappe.views.KanbanView.show_kanban_dialog(doctype);
            }
          }
        );
      }
      const last_opened_kanban = (_a = frappe.model.user_settings[this.doctype]["Kanban"]) == null ? void 0 : _a.last_kanban_board;
      if (!last_opened_kanban) {
        fetch_kanban_board(this.doctype);
      } else {
        frappe.db.exists("Kanban Board", last_opened_kanban).then((exists) => {
          if (exists) {
            frappe.set_route("list", this.doctype, "kanban", last_opened_kanban);
          } else {
            fetch_kanban_board(this.doctype);
          }
        });
      }
    }
    get_calendars() {
      const doctype = this.doctype;
      let calendars = [];
      return frappe.db.get_list("Calendar View", {
        filters: {
          reference_doctype: doctype
        }
      }).then((result) => {
        if (!(result && Array.isArray(result) && result.length))
          return;
        if (frappe.views.calendar[this.doctype]) {
          calendars.push({
            name: "Default",
            route: `/app/${this.slug()}/view/calendar/default`
          });
        }
        result.map((calendar) => {
          calendars.push({
            name: calendar.name,
            route: `/app/${this.slug()}/view/calendar/${calendar.name}`
          });
        });
        return calendars;
      });
    }
    get_email_accounts() {
      let accounts_to_add = [];
      let accounts = frappe.boot.email_accounts;
      accounts.forEach((account) => {
        let email_account = account.email_id == "All Accounts" ? "All Accounts" : account.email_account;
        let route = `/app/communication/view/inbox/${email_account}`;
        let display_name = ["All Accounts", "Sent Mail", "Spam", "Trash"].includes(
          account.email_id
        ) ? __(account.email_id) : account.email_account;
        accounts_to_add.push({
          name: display_name,
          route
        });
      });
      return accounts_to_add;
    }
    slug() {
      return frappe.router.slug(frappe.router.doctype_layout || this.doctype);
    }
  };

  // frappe/public/js/frappe/list/list_filter.js
  frappe.provide("frappe.ui");
  var ListFilter = class {
    constructor({ wrapper, doctype }) {
      Object.assign(this, arguments[0]);
      this.can_add_global = frappe.user.has_role(["System Manager", "Administrator"]);
      this.filters = [];
      this.make();
      this.bind();
      this.refresh();
    }
    make() {
      this.wrapper.html(`
			<li class="input-area"></li>
			<li class="sidebar-action">
				<a class="saved-filters-preview">${__("Show Saved")}</a>
			</li>
			<div class="saved-filters"></div>
		`);
      this.$input_area = this.wrapper.find(".input-area");
      this.$list_filters = this.wrapper.find(".list-filters");
      this.$saved_filters = this.wrapper.find(".saved-filters").hide();
      this.$saved_filters_preview = this.wrapper.find(".saved-filters-preview");
      this.saved_filters_hidden = true;
      this.toggle_saved_filters(true);
      this.filter_input = frappe.ui.form.make_control({
        df: {
          fieldtype: "Data",
          placeholder: __("Filter Name"),
          input_class: "input-xs"
        },
        parent: this.$input_area,
        render_input: 1
      });
      this.is_global_input = frappe.ui.form.make_control({
        df: {
          fieldtype: "Check",
          label: __("Is Global")
        },
        parent: this.$input_area,
        render_input: 1
      });
    }
    bind() {
      this.bind_save_filter();
      this.bind_toggle_saved_filters();
      this.bind_click_filter();
      this.bind_remove_filter();
    }
    refresh() {
      this.get_list_filters().then(() => {
        this.filters.length ? this.$saved_filters_preview.show() : this.$saved_filters_preview.hide();
        const html = this.filters.map((filter) => this.filter_template(filter));
        this.wrapper.find(".filter-pill").remove();
        this.$saved_filters.append(html);
      });
      this.is_global_input.toggle(false);
      this.filter_input.set_description("");
    }
    filter_template(filter) {
      return `<div class="list-link filter-pill list-sidebar-button btn btn-default" data-name="${filter.name}">
			<a class="ellipsis filter-name">${filter.filter_name}</a>
			<a class="remove">${frappe.utils.icon("close")}</a>
		</div>`;
    }
    bind_toggle_saved_filters() {
      this.wrapper.find(".saved-filters-preview").click(() => {
        this.toggle_saved_filters(this.saved_filters_hidden);
      });
    }
    toggle_saved_filters(show) {
      this.$saved_filters.toggle(show);
      const label = show ? __("Hide Saved") : __("Show Saved");
      this.wrapper.find(".saved-filters-preview").text(label);
      this.saved_filters_hidden = !this.saved_filters_hidden;
    }
    bind_click_filter() {
      this.wrapper.on("click", ".filter-pill .filter-name", (e) => {
        let $filter = $(e.currentTarget).parent(".filter-pill");
        this.set_applied_filter($filter);
        const name = $filter.attr("data-name");
        this.list_view.filter_area.clear().then(() => {
          this.list_view.filter_area.add(this.get_filters_values(name));
        });
      });
    }
    bind_remove_filter() {
      this.wrapper.on("click", ".filter-pill .remove", (e) => {
        const $li = $(e.currentTarget).closest(".filter-pill");
        const filter_label = $li.text().trim();
        frappe.confirm(
          __("Are you sure you want to remove the {0} filter?", [filter_label.bold()]),
          () => {
            const name = $li.attr("data-name");
            const applied_filters = this.get_filters_values(name);
            $li.remove();
            this.remove_filter(name).then(() => this.refresh());
            this.list_view.filter_area.remove_filters(applied_filters);
          }
        );
      });
    }
    bind_save_filter() {
      this.filter_input.$input.keydown(
        frappe.utils.debounce((e) => {
          const value = this.filter_input.get_value();
          const has_value = Boolean(value);
          if (e.which === frappe.ui.keyCode["ENTER"]) {
            if (!has_value || this.filter_name_exists(value))
              return;
            this.filter_input.set_value("");
            this.save_filter(value).then(() => this.refresh());
            this.toggle_saved_filters(true);
          } else {
            let help_text = __("Press Enter to save");
            if (this.filter_name_exists(value)) {
              help_text = __("Duplicate Filter Name");
            }
            this.filter_input.set_description(has_value ? help_text : "");
            if (this.can_add_global) {
              this.is_global_input.toggle(has_value);
            }
          }
        }, 300)
      );
    }
    save_filter(filter_name) {
      return frappe.db.insert({
        doctype: "List Filter",
        reference_doctype: this.list_view.doctype,
        filter_name,
        for_user: this.is_global_input.get_value() ? "" : frappe.session.user,
        filters: JSON.stringify(this.get_current_filters())
      });
    }
    remove_filter(name) {
      if (!name)
        return;
      return frappe.db.delete_doc("List Filter", name);
    }
    get_filters_values(name) {
      const filter = this.filters.find((filter2) => filter2.name === name);
      return JSON.parse(filter.filters || "[]");
    }
    get_current_filters() {
      return this.list_view.filter_area.get();
    }
    filter_name_exists(filter_name) {
      return (this.filters || []).find((f) => f.filter_name === filter_name);
    }
    get_list_filters() {
      if (frappe.session.user === "Guest")
        return Promise.resolve();
      return frappe.db.get_list("List Filter", {
        fields: ["name", "filter_name", "for_user", "filters"],
        filters: { reference_doctype: this.list_view.doctype },
        or_filters: [
          ["for_user", "=", frappe.session.user],
          ["for_user", "=", ""]
        ]
      }).then((filters) => {
        this.filters = filters || [];
      });
    }
    set_applied_filter($filter) {
      this.$saved_filters.find(".btn-primary-light").toggleClass("btn-primary-light btn-default");
      $filter.toggleClass("btn-default btn-primary-light");
    }
  };

  // frappe/public/js/frappe/list/list_sidebar.js
  frappe.provide("frappe.views");
  frappe.views.ListSidebar = class ListSidebar {
    constructor(opts) {
      $.extend(this, opts);
      this.make();
    }
    make() {
      var sidebar_content = frappe.render_template("list_sidebar", { doctype: this.doctype });
      this.sidebar = $('<div class="list-sidebar overlay-sidebar hidden-xs hidden-sm"></div>').html(sidebar_content).appendTo(this.page.sidebar.empty());
      this.setup_list_filter();
      this.setup_list_group_by();
      $(document).trigger("list_sidebar_setup");
      if (this.list_view.list_view_settings && this.list_view.list_view_settings.disable_sidebar_stats) {
        this.sidebar.find(".list-tags").remove();
      } else {
        this.sidebar.find(".list-stats").on("show.bs.dropdown", (e) => {
          this.reload_stats();
        });
      }
      this.add_insights_banner();
    }
    setup_views() {
      var show_list_link = false;
      if (frappe.views.calendar[this.doctype]) {
        this.sidebar.find('.list-link[data-view="Calendar"]').removeClass("hide");
        this.sidebar.find('.list-link[data-view="Gantt"]').removeClass("hide");
        show_list_link = true;
      }
      this.sidebar.find('.list-link[data-view="Kanban"]').removeClass("hide");
      if (this.doctype === "Communication" && frappe.boot.email_accounts.length) {
        this.sidebar.find('.list-link[data-view="Inbox"]').removeClass("hide");
        show_list_link = true;
      }
      if (frappe.treeview_settings[this.doctype] || frappe.get_meta(this.doctype).is_tree) {
        this.sidebar.find(".tree-link").removeClass("hide");
      }
      this.current_view = "List";
      var route = frappe.get_route();
      if (route.length > 2 && frappe.views.view_modes.includes(route[2])) {
        this.current_view = route[2];
        if (this.current_view === "Kanban") {
          this.kanban_board = route[3];
        } else if (this.current_view === "Inbox") {
          this.email_account = route[3];
        }
      }
      this.sidebar.find('.list-link[data-view="' + this.current_view + '"] a').attr("disabled", "disabled").addClass("disabled");
      this.sidebar.find('.list-link[data-view="Kanban"] a, .list-link[data-view="Inbox"] a').attr("disabled", null).removeClass("disabled");
      if (this.list_view.meta.image_field) {
        this.sidebar.find('.list-link[data-view="Image"]').removeClass("hide");
        show_list_link = true;
      }
      if (this.list_view.settings.get_coords_method || this.list_view.meta.fields.find((i2) => i2.fieldname === "latitude") && this.list_view.meta.fields.find((i2) => i2.fieldname === "longitude") || this.list_view.meta.fields.find(
        (i2) => i2.fieldname === "location" && i2.fieldtype == "Geolocation"
      )) {
        this.sidebar.find('.list-link[data-view="Map"]').removeClass("hide");
        show_list_link = true;
      }
      if (show_list_link) {
        this.sidebar.find('.list-link[data-view="List"]').removeClass("hide");
      }
    }
    setup_reports() {
      var me2 = this;
      var added = [];
      var dropdown = this.page.sidebar.find(".reports-dropdown");
      var divider = false;
      var add_reports = function(reports2) {
        $.each(reports2, function(name, r) {
          if (!r.ref_doctype || r.ref_doctype == me2.doctype) {
            var report_type = r.report_type === "Report Builder" ? `List/${r.ref_doctype}/Report` : "query-report";
            var route = r.route || report_type + "/" + (r.title || r.name);
            if (added.indexOf(route) === -1) {
              added.push(route);
              if (!divider) {
                me2.get_divider().appendTo(dropdown);
                divider = true;
              }
              $(
                '<li><a href="#' + route + '">' + __(r.title || r.name) + "</a></li>"
              ).appendTo(dropdown);
            }
          }
        });
      };
      if (this.list_view.settings.reports) {
        add_reports(this.list_view.settings.reports);
      }
      var reports = Object.values(frappe.boot.user.all_reports).sort(
        (a, b) => a.title.localeCompare(b.title)
      ) || [];
      add_reports(reports);
    }
    setup_list_filter() {
      this.list_filter = new ListFilter({
        wrapper: this.page.sidebar.find(".list-filters"),
        doctype: this.doctype,
        list_view: this.list_view
      });
    }
    setup_kanban_boards() {
      const $dropdown = this.page.sidebar.find(".kanban-dropdown");
      frappe.views.KanbanView.setup_dropdown_in_sidebar(this.doctype, $dropdown);
    }
    setup_keyboard_shortcuts() {
      this.sidebar.find(".list-link > a, .list-link > .btn-group > a").each((i2, el) => {
        frappe.ui.keys.get_shortcut_group(this.page).add($(el));
      });
    }
    setup_list_group_by() {
      this.list_group_by = new frappe.views.ListGroupBy({
        doctype: this.doctype,
        sidebar: this,
        list_view: this.list_view,
        page: this.page
      });
    }
    get_stats() {
      var me2 = this;
      let dropdown_options = me2.sidebar.find(".list-stats-dropdown .stat-result");
      this.set_loading_state(dropdown_options);
      frappe.call({
        method: "frappe.desk.reportview.get_sidebar_stats",
        type: "GET",
        args: {
          stats: me2.stats,
          doctype: me2.doctype,
          filters: (me2.list_view.filter_area ? me2.list_view.get_filters_for_args() : me2.default_filters) || []
        },
        callback: function(r) {
          let stats = (r.message.stats || {})["_user_tags"] || [];
          me2.render_stat(stats);
          let stats_dropdown = me2.sidebar.find(".list-stats-dropdown");
          frappe.utils.setup_search(stats_dropdown, ".stat-link", ".stat-label");
        }
      });
    }
    set_loading_state(dropdown) {
      dropdown.html(`<li>
			<div class="empty-state">
				${__("Loading...")}
			</div>
		</li>`);
    }
    render_stat(stats) {
      let args = {
        stats,
        label: __("Tags")
      };
      let tag_list = $(frappe.render_template("list_sidebar_stat", args)).on(
        "click",
        ".stat-link",
        (e) => {
          let fieldname = $(e.currentTarget).attr("data-field");
          let label = $(e.currentTarget).attr("data-label");
          let condition = "like";
          let existing = this.list_view.filter_area.filter_list.get_filter(fieldname);
          if (existing) {
            existing.remove();
          }
          if (label == "No Tags") {
            label = "%,%";
            condition = "not like";
          }
          this.list_view.filter_area.add(this.doctype, fieldname, condition, label);
        }
      );
      this.sidebar.find(".list-stats-dropdown .stat-result").html(tag_list);
    }
    reload_stats() {
      this.sidebar.find(".stat-link").remove();
      this.sidebar.find(".stat-no-records").remove();
      this.get_stats();
    }
    add_insights_banner() {
      try {
        if (this.list_view.view != "Report") {
          return;
        }
        if (localStorage.getItem("show_insights_banner") == "false") {
          return;
        }
        if (this.insights_banner) {
          this.insights_banner.remove();
        }
        const message = "Get more insights with";
        const link = "https://frappe.io/s/insights";
        const cta = "Frappe Insights";
        this.insights_banner = $(`
				<div style="position: relative;">
					<div class="pr-3">
						${message} <a href="${link}" target="_blank" style="color: var(--text-color)">${cta} &rarr; </a>
					</div>
					<div style="position: absolute; top: -1px; right: -4px; cursor: pointer;" title="Dismiss"
						onclick="localStorage.setItem('show_insights_banner', 'false') || this.parentElement.remove()">
						<svg class="icon  icon-sm" style="">
							<use class="" href="#icon-close"></use>
						</svg>
					</div>
				</div>
			`).appendTo(this.sidebar);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/list/list_sidebar.html
  frappe.templates["list_sidebar"] = `<ul class="list-unstyled sidebar-menu user-actions hide">
	<li class="divider"></li>
</ul>
<ul class="list-unstyled sidebar-menu">
	<div class="sidebar-section views-section hide">
		<li class="sidebar-label">
		</li>
		<div class="current-view">
			<li class="list-link">
				<a class="btn btn-default btn-sm list-sidebar-button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					href="#"
				>
					<span class="selected-view ellipsis">
					</span>
					<span>
						<svg class="icon icon-xs">
							<use href="#icon-select"></use>
						</svg>
					</span>
				</a>
				<ul class="dropdown-menu views-dropdown" role="menu">
				</ul>
			</li>
			<li class="sidebar-action">
				<a class="view-action"></a>
			</li>
		</div>
	</div>

	<div class="sidebar-section filter-section">
		<li class="sidebar-label">
			{{ __("Filter By") }}
		</li>

		<div class="list-group-by">
		</div>

		<div class="list-tags">
			<li class="list-stats list-link">
				<a
					class="btn btn-default btn-sm list-sidebar-button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					href="#"
				>
					<span>{{ __("Tags") }}</span>
					<span>
						<svg class="icon icon-xs">
							<use href="#icon-select"></use>
						</svg>
					</span>
				</a>
				<ul class="dropdown-menu list-stats-dropdown" role="menu">
					<div class="dropdown-search">
						<input type="text" placeholder={{__("Search") }} data-element="search" class="form-control input-xs">
					</div>
					<div class="stat-result">
					</div>
				</ul>
			</li>
			<li class="sidebar-action show-tags">
				<a class="list-tag-preview">{{ __("Show Tags") }}</a>
			</li>
		</div>
	</div>

	<div class="sidebar-section save-filter-section">
		<li class="sidebar-label">
			{{ __("Save Filter") }}
		</li>
		<li class="list-filters list-link"></li>
</ul>
`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/list/list_sidebar_stat.html
  frappe.templates["list_sidebar_stat"] = `
{% if (!stats.length) { %}
<li class="stat-no-records text-muted">{{ __("No records tagged.") }}</li>
{% } else {
	for (var i=0, l=stats.length; i < l; i++) {
		var stat_label = stats[i][0];
		var stat_count = stats[i][1];
%}
<li>
	<a class="stat-link dropdown-item" data-label="{{ stat_label %}" data-field="_user_tags" href="#" onclick="return false;">
		<span class="stat-label">{{ __(stat_label) }}</span>
		<span>{{ stat_count }}</span>
	</a>
</li>
	{% }
} %}
`;

  // frappe/public/js/frappe/list/list_sidebar_group_by.js
  frappe.provide("frappe.views");
  frappe.views.ListGroupBy = class ListGroupBy {
    constructor(opts) {
      $.extend(this, opts);
      this.make_wrapper();
      this.user_settings = frappe.get_user_settings(this.doctype);
      this.group_by_fields = ["assigned_to", "owner"];
      if (this.user_settings.group_by_fields) {
        this.group_by_fields = this.group_by_fields.concat(this.user_settings.group_by_fields);
      }
      this.render_group_by_items();
      this.make_group_by_fields_modal();
      this.setup_dropdown();
      this.setup_filter_by();
    }
    make_group_by_fields_modal() {
      let d = new frappe.ui.Dialog({
        title: __("Select Filters"),
        fields: this.get_group_by_dropdown_fields()
      });
      d.set_primary_action(__("Save"), ({ group_by_fields }) => {
        frappe.model.user_settings.save(
          this.doctype,
          "group_by_fields",
          group_by_fields || null
        );
        this.group_by_fields = group_by_fields ? ["assigned_to", "owner", ...group_by_fields] : ["assigned_to", "owner"];
        this.render_group_by_items();
        this.setup_dropdown();
        d.hide();
      });
      d.$body.prepend(`
			<div class="filters-search">
				<input type="text"
					placeholder="${__("Search")}"
					data-element="search" class="form-control input-xs">
			</div>
		`);
      this.page.sidebar.find(".add-list-group-by a").on("click", () => {
        frappe.utils.setup_search(d.$body, ".unit-checkbox", ".label-area");
        d.show();
      });
    }
    make_wrapper() {
      this.$wrapper = this.sidebar.sidebar.find(".list-group-by");
      let html = `
			<div class="list-group-by-fields">
			</div>
			<li class="add-list-group-by sidebar-action">
				<a class="add-group-by">
					${__("Edit Filters")}
				</a>
			</li>
		`;
      this.$wrapper.html(html);
    }
    render_group_by_items() {
      let get_item_html = (fieldname) => {
        let label, fieldtype;
        if (fieldname === "assigned_to") {
          label = __("Assigned To");
        } else if (fieldname === "owner") {
          label = __("Created By");
        } else {
          label = frappe.meta.get_label(this.doctype, fieldname);
          let docfield = frappe.meta.get_docfield(this.doctype, fieldname);
          if (!docfield) {
            return;
          }
          fieldtype = docfield.fieldtype;
        }
        return `<li class="group-by-field list-link">
					<a class="btn btn-default btn-sm list-sidebar-button" data-toggle="dropdown"
					aria-haspopup="true" aria-expanded="false"
					data-label="${label}" data-fieldname="${fieldname}" data-fieldtype="${fieldtype}"
					href="#" onclick="return false;">
						<span class="ellipsis">${__(label)}</span>
						<span>${frappe.utils.icon("select", "xs")}</span>
					</a>
					<ul class="dropdown-menu group-by-dropdown" role="menu">
					</ul>
			</li>`;
      };
      let html = this.group_by_fields.map(get_item_html).join("");
      this.$wrapper.find(".list-group-by-fields").html(html);
    }
    setup_dropdown() {
      this.$wrapper.find(".group-by-field").on("show.bs.dropdown", (e) => {
        let $dropdown = $(e.currentTarget).find(".group-by-dropdown");
        this.set_loading_state($dropdown);
        let fieldname = $(e.currentTarget).find("a").attr("data-fieldname");
        let fieldtype = $(e.currentTarget).find("a").attr("data-fieldtype");
        this.get_group_by_count(fieldname).then((field_count_list) => {
          if (field_count_list.length) {
            let applied_filter = this.list_view.get_filter_value(
              fieldname == "assigned_to" ? "_assign" : fieldname
            );
            this.render_dropdown_items(
              field_count_list,
              fieldtype,
              $dropdown,
              applied_filter
            );
            this.setup_search($dropdown);
          } else {
            this.set_empty_state($dropdown);
          }
        });
      });
    }
    set_loading_state($dropdown) {
      $dropdown.html(`<li>
			<div class="empty-state group-by-loading">
				${__("Loading...")}
			</div>
		</li>`);
    }
    set_empty_state($dropdown) {
      $dropdown.html(
        `<div class="empty-state group-by-empty">
				${__("No filters found")}
			</div>`
      );
    }
    setup_search($dropdown) {
      frappe.utils.setup_search($dropdown, ".group-by-item", ".group-by-value", "data-name");
    }
    get_group_by_dropdown_fields() {
      let group_by_fields = [];
      let fields = this.list_view.meta.fields.filter(
        (f) => ["Select", "Link", "Data", "Int", "Check"].includes(f.fieldtype)
      );
      group_by_fields.push({
        label: __(this.doctype),
        fieldname: "group_by_fields",
        fieldtype: "MultiCheck",
        columns: 2,
        options: fields.map((df) => ({
          label: __(df.label),
          value: df.fieldname,
          checked: this.group_by_fields.includes(df.fieldname)
        }))
      });
      return group_by_fields;
    }
    get_group_by_count(field) {
      let current_filters = this.list_view.get_filters_for_args();
      current_filters = current_filters.filter(
        (f_arr) => !f_arr.includes(field === "assigned_to" ? "_assign" : field)
      );
      let args = {
        doctype: this.doctype,
        current_filters,
        field
      };
      return frappe.call("frappe.desk.listview.get_group_by_count", args).then((r) => {
        let field_counts = r.message || [];
        field_counts = field_counts.filter((f) => f.count !== 0);
        let current_user = field_counts.find((f) => f.name === frappe.session.user);
        field_counts = field_counts.filter(
          (f) => !["Guest", "Administrator", frappe.session.user].includes(f.name)
        );
        if (current_user)
          field_counts.unshift(current_user);
        return field_counts;
      });
    }
    render_dropdown_items(fields, fieldtype, $dropdown, applied_filter) {
      let standard_html = `
			<div class="dropdown-search">
				<input type="text"
					placeholder="${__("Search")}"
					data-element="search"
					class="dropdown-search-input form-control input-xs"
				>
			</div>
		`;
      let applied_filter_html = "";
      let dropdown_items_html = "";
      fields.map((field) => {
        if (field.name === applied_filter) {
          applied_filter_html = this.get_dropdown_html(field, fieldtype, true);
        } else {
          dropdown_items_html += this.get_dropdown_html(field, fieldtype);
        }
      });
      let dropdown_html = standard_html + applied_filter_html + dropdown_items_html;
      $dropdown.toggleClass("has-selected", Boolean(applied_filter_html));
      $dropdown.html(dropdown_html);
    }
    get_dropdown_html(field, fieldtype, applied = false) {
      let label;
      if (field.name == null) {
        label = __("Not Set");
      } else if (field.name === frappe.session.user) {
        label = __("Me");
      } else if (fieldtype && fieldtype == "Check") {
        label = field.name == "0" ? __("No") : __("Yes");
      } else {
        label = __(field.name);
      }
      let value = field.name == null ? "" : encodeURIComponent(field.name);
      let applied_html = applied ? `<span class="applied"> ${frappe.utils.icon("tick", "xs")} </span>` : "";
      return `<li class="group-by-item ${applied ? "selected" : ""}" data-value="${value}">
			<a class="dropdown-item" href="#" onclick="return false;">
				${applied_html}
				<span class="group-by-value ellipsis" data-name="${field.name}">${label}</span>
				<span class="group-by-count">${field.count}</span>
			</a>
		</li>`;
    }
    setup_filter_by() {
      this.$wrapper.on("click", ".group-by-item", (e) => {
        let $target = $(e.currentTarget);
        let is_selected = $target.hasClass("selected");
        let fieldname = $target.parents(".group-by-field").find("a").data("fieldname");
        let value = typeof $target.data("value") === "string" ? decodeURIComponent($target.data("value").trim()) : $target.data("value");
        fieldname = fieldname === "assigned_to" ? "_assign" : fieldname;
        return this.list_view.filter_area.remove(fieldname).then(() => {
          if (is_selected)
            return;
          return this.apply_filter(fieldname, value);
        });
      });
    }
    apply_filter(fieldname, value) {
      let operator = "=";
      if (value === "") {
        operator = "is";
        value = "not set";
      }
      if (fieldname === "_assign") {
        operator = "like";
        value = `%${value}%`;
      }
      return this.list_view.filter_area.add(this.doctype, fieldname, operator, value);
    }
  };

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/list/list_view_permission_restrictions.html
  frappe.templates["list_view_permission_restrictions"] = `<table class="table table-bordered" style="margin: 0;">
	<thead>
		<th>{{ __("Field") }}</th>
		<th>{{ __("Value") }}</th>
	</thead>
	<tbody>
		{% for (let condition of condition_list ) { %}
			{% for (let key in condition) { %}
			<tr>
				<td>{{ __(key) }}</td>
				<td>{{ frappe.utils.comma_or(condition[key]) }}</td>
			</tr>
			{% } %}
		{% } %}
	</tbody>
</table>
`;

  // frappe/public/js/frappe/views/gantt/gantt_view.js
  frappe.provide("frappe.views");
  frappe.views.GanttView = class GanttView extends frappe.views.ListView {
    get view_name() {
      return "Gantt";
    }
    setup_defaults() {
      return super.setup_defaults().then(() => {
        this.page_title = this.page_title + " " + __("Gantt");
        this.calendar_settings = frappe.views.calendar[this.doctype] || {};
        if (typeof this.calendar_settings.gantt == "object") {
          Object.assign(this.calendar_settings, this.calendar_settings.gantt);
        }
        if (this.calendar_settings.order_by) {
          this.sort_by = this.calendar_settings.order_by;
          this.sort_order = "asc";
        } else {
          this.sort_by = this.view_user_settings.sort_by || this.calendar_settings.field_map.start;
          this.sort_order = this.view_user_settings.sort_order || "asc";
        }
      });
    }
    setup_view() {
    }
    prepare_data(data) {
      super.prepare_data(data);
      this.prepare_tasks();
    }
    prepare_tasks() {
      var me2 = this;
      var meta = this.meta;
      var field_map = this.calendar_settings.field_map;
      this.tasks = this.data.map(function(item) {
        var progress = 0;
        if (field_map.progress && $.isFunction(field_map.progress)) {
          progress = field_map.progress(item);
        } else if (field_map.progress) {
          progress = item[field_map.progress];
        }
        var label;
        if (meta.title_field) {
          label = item.progress ? __("{0} ({1}) - {2}%", [item[meta.title_field], item.name, item.progress]) : __("{0} ({1})", [item[meta.title_field], item.name]);
        } else {
          label = item[field_map.title];
        }
        var r = {
          start: item[field_map.start],
          end: item[field_map.end],
          name: label,
          id: item[field_map.id || "name"],
          doctype: me2.doctype,
          progress,
          dependencies: item.depends_on_tasks || ""
        };
        if (item.color && frappe.ui.color.validate_hex(item.color)) {
          r["custom_class"] = "color-" + item.color.substr(1);
        }
        if (item.is_milestone) {
          r["custom_class"] = "bar-milestone";
        }
        return r;
      });
    }
    render() {
      this.load_lib.then(() => {
        this.render_gantt();
      });
    }
    render_header() {
    }
    render_gantt() {
      const me2 = this;
      const gantt_view_mode = this.view_user_settings.gantt_view_mode || "Day";
      const field_map = this.calendar_settings.field_map;
      const date_format = "YYYY-MM-DD";
      this.$result.empty();
      this.$result.addClass("gantt-modern");
      this.gantt = new Gantt(this.$result[0], this.tasks, {
        bar_height: 35,
        bar_corner_radius: 4,
        resize_handle_width: 8,
        resize_handle_height: 28,
        resize_handle_corner_radius: 3,
        resize_handle_offset: 4,
        view_mode: gantt_view_mode,
        date_format: "YYYY-MM-DD",
        on_click: (task) => {
          frappe.set_route("Form", task.doctype, task.id);
        },
        on_date_change: (task, start, end) => {
          if (!me2.can_write)
            return;
          frappe.db.set_value(task.doctype, task.id, {
            [field_map.start]: moment(start).format(date_format),
            [field_map.end]: moment(end).format(date_format)
          });
        },
        on_progress_change: (task, progress) => {
          if (!me2.can_write)
            return;
          var progress_fieldname = "progress";
          if ($.isFunction(field_map.progress)) {
            progress_fieldname = null;
          } else if (field_map.progress) {
            progress_fieldname = field_map.progress;
          }
          if (progress_fieldname) {
            frappe.db.set_value(task.doctype, task.id, {
              [progress_fieldname]: parseInt(progress)
            });
          }
        },
        on_view_change: (mode) => {
          me2.save_view_user_settings({
            gantt_view_mode: mode
          });
        },
        custom_popup_html: (task) => {
          var item = me2.get_item(task.id);
          var html = `<div class="title">${task.name}</div>
					<div class="subtitle">${moment(task._start).format("MMM D")} - ${moment(task._end).format(
            "MMM D"
          )}</div>`;
          var custom = me2.settings.gantt_custom_popup_html;
          if (custom && $.isFunction(custom)) {
            var ganttobj = task;
            html = custom(ganttobj, item);
          }
          return '<div class="details-container">' + html + "</div>";
        }
      });
      this.setup_view_mode_buttons();
      this.set_colors();
    }
    setup_view_mode_buttons() {
      let $btn_group = this.$paging_area.find(".gantt-view-mode");
      if ($btn_group.length > 0)
        return;
      const view_modes = this.gantt.options.view_modes || [];
      const active_class = (view_mode) => this.gantt.view_is(view_mode) ? "btn-info" : "";
      const html = `<div class="btn-group gantt-view-mode">
				${view_modes.map(
        (value) => `<button type="button"
						class="btn btn-default btn-sm btn-view-mode ${active_class(value)}"
						data-value="${value}">
						${__(value)}
					</button>`
      ).join("")}
			</div>`;
      this.$paging_area.find(".level-left").append(html);
      const change_view_mode = (value) => setTimeout(() => this.gantt.change_view_mode(value), 0);
      this.$paging_area.on("click", ".btn-view-mode", (e) => {
        const $btn = $(e.currentTarget);
        this.$paging_area.find(".btn-view-mode").removeClass("btn-info");
        $btn.addClass("btn-info");
        const value = $btn.data().value;
        change_view_mode(value);
      });
    }
    set_colors() {
      const classes = this.tasks.map((t) => t.custom_class).filter((c) => c && c.startsWith("color-"));
      let style = classes.map((c) => {
        const class_name = c.replace("#", "");
        const bar_color = "#" + c.substr(6);
        const progress_color = frappe.ui.color.get_contrast_color(bar_color);
        return `
				.gantt .bar-wrapper.${class_name} .bar {
					fill: ${bar_color};
				}
				.gantt .bar-wrapper.${class_name} .bar-progress {
					fill: ${progress_color};
				}
			`;
      }).join("");
      style = `<style>${style}</style>`;
      this.$result.prepend(style);
    }
    get_item(name) {
      return this.data.find((item) => item.name === name);
    }
    get required_libs() {
      return [
        "assets/frappe/node_modules/frappe-gantt/dist/frappe-gantt.css",
        "assets/frappe/node_modules/frappe-gantt/dist/frappe-gantt.min.js"
      ];
    }
  };

  // frappe/public/js/frappe/views/calendar/calendar.js
  frappe.provide("frappe.views.calendar");
  frappe.provide("frappe.views.calendars");
  frappe.views.CalendarView = class CalendarView extends frappe.views.ListView {
    static load_last_view() {
      const route = frappe.get_route();
      if (route.length === 3) {
        const doctype = route[1];
        const user_settings = frappe.get_user_settings(doctype)["Calendar"] || {};
        route.push(user_settings.last_calendar || "default");
        frappe.set_route(route);
        return true;
      } else {
        return false;
      }
    }
    toggle_result_area() {
    }
    get view_name() {
      return "Calendar";
    }
    setup_defaults() {
      return super.setup_defaults().then(() => {
        this.page_title = __("{0} Calendar", [this.page_title]);
        this.calendar_settings = frappe.views.calendar[this.doctype] || {};
        this.calendar_name = frappe.get_route()[3];
      });
    }
    setup_page() {
      this.hide_page_form = true;
      super.setup_page();
    }
    setup_view() {
    }
    before_render() {
      super.before_render();
      this.save_view_user_settings({
        last_calendar: this.calendar_name
      });
    }
    render() {
      if (this.calendar) {
        this.calendar.refresh();
        return;
      }
      this.load_lib.then(() => this.get_calendar_preferences()).then((options) => {
        this.calendar = new frappe.views.Calendar(options);
      });
    }
    get_calendar_preferences() {
      const options = {
        doctype: this.doctype,
        parent: this.$result,
        page: this.page,
        list_view: this
      };
      const calendar_name = this.calendar_name;
      return new Promise((resolve) => {
        if (calendar_name === "default") {
          Object.assign(options, frappe.views.calendar[this.doctype]);
          resolve(options);
        } else {
          frappe.model.with_doc("Calendar View", calendar_name, () => {
            const doc = frappe.get_doc("Calendar View", calendar_name);
            if (!doc) {
              frappe.show_alert(
                __("{0} is not a valid Calendar. Redirecting to default Calendar.", [
                  calendar_name.bold()
                ])
              );
              frappe.set_route("List", this.doctype, "Calendar", "default");
              return;
            }
            Object.assign(options, {
              field_map: {
                id: "name",
                start: doc.start_date_field,
                end: doc.end_date_field,
                title: doc.subject_field,
                allDay: doc.all_day ? 1 : 0
              }
            });
            resolve(options);
          });
        }
      });
    }
    get required_libs() {
      let assets = [
        "assets/frappe/js/lib/fullcalendar/fullcalendar.min.css",
        "assets/frappe/js/lib/fullcalendar/fullcalendar.min.js"
      ];
      let user_language = frappe.boot.lang;
      if (user_language && user_language !== "en") {
        assets.push("assets/frappe/js/lib/fullcalendar/locale-all.js");
      }
      return assets;
    }
  };
  frappe.views.Calendar = class Calendar {
    constructor(options) {
      $.extend(this, options);
      this.field_map = this.field_map || {
        id: "name",
        start: "start",
        end: "end",
        allDay: "all_day",
        convertToUserTz: "convert_to_user_tz"
      };
      this.color_map = {
        danger: "red",
        success: "green",
        warning: "orange",
        default: "blue"
      };
      this.get_default_options();
    }
    get_default_options() {
      return new Promise((resolve) => {
        let defaultView = localStorage.getItem("cal_defaultView");
        let weekends = localStorage.getItem("cal_weekends");
        let defaults = {
          defaultView: defaultView ? defaultView : "month",
          weekends: weekends ? weekends : true
        };
        resolve(defaults);
      }).then((defaults) => {
        this.make_page();
        this.setup_options(defaults);
        this.make();
        this.setup_view_mode_button(defaults);
        this.bind();
      });
    }
    make_page() {
      var me2 = this;
      me2.page.clear_user_actions();
      $.each(frappe.boot.calendars, function(i2, doctype) {
        if (frappe.model.can_read(doctype)) {
          me2.page.add_menu_item(__(doctype), function() {
            frappe.set_route("List", doctype, "Calendar");
          });
        }
      });
      $(this.parent).on("show", function() {
        me2.$cal.fullCalendar("refetchEvents");
      });
    }
    make() {
      this.$wrapper = this.parent;
      this.$cal = $("<div>").appendTo(this.$wrapper);
      this.footnote_area = frappe.utils.set_footnote(
        this.footnote_area,
        this.$wrapper,
        __("Select or drag across time slots to create a new event.")
      );
      this.footnote_area.css({ "border-top": "0px" });
      this.$cal.fullCalendar(this.cal_options);
      this.set_css();
    }
    setup_view_mode_button(defaults) {
      var me2 = this;
      $(me2.footnote_area).find(".btn-weekend").detach();
      let btnTitle = defaults.weekends ? __("Hide Weekends") : __("Show Weekends");
      const btn = `<button class="btn btn-default btn-xs btn-weekend">${btnTitle}</button>`;
      me2.footnote_area.append(btn);
    }
    set_localStorage_option(option, value) {
      localStorage.removeItem(option);
      localStorage.setItem(option, value);
    }
    bind() {
      const me2 = this;
      let btn_group = me2.$wrapper.find(".fc-button-group");
      btn_group.on("click", ".btn", function() {
        let value = $(this).hasClass("fc-agendaWeek-button") ? "agendaWeek" : $(this).hasClass("fc-agendaDay-button") ? "agendaDay" : "month";
        me2.set_localStorage_option("cal_defaultView", value);
      });
      me2.$wrapper.on("click", ".btn-weekend", function() {
        me2.cal_options.weekends = !me2.cal_options.weekends;
        me2.$cal.fullCalendar("option", "weekends", me2.cal_options.weekends);
        me2.set_localStorage_option("cal_weekends", me2.cal_options.weekends);
        me2.set_css();
        me2.setup_view_mode_button(me2.cal_options);
      });
    }
    set_css() {
      this.$wrapper.find("button.fc-state-default").removeClass("fc-state-default").addClass("btn btn-default");
      this.$wrapper.find(".fc-month-button, .fc-agendaWeek-button, .fc-agendaDay-button").wrapAll('<div class="btn-group" />');
      this.$wrapper.find(".fc-prev-button span").attr("class", "").html(frappe.utils.icon("left"));
      this.$wrapper.find(".fc-next-button span").attr("class", "").html(frappe.utils.icon("right"));
      this.$wrapper.find(".fc-today-button").prepend(frappe.utils.icon("today"));
      this.$wrapper.find(".fc-day-number").wrap('<div class="fc-day"></div>');
      var btn_group = this.$wrapper.find(".fc-button-group");
      btn_group.find(".fc-state-active").addClass("active");
      btn_group.find(".btn").on("click", function() {
        btn_group.find(".btn").removeClass("active");
        $(this).addClass("active");
      });
    }
    get_system_datetime(date) {
      date._offset = moment(date).tz(frappe.sys_defaults.time_zone)._offset;
      return frappe.datetime.convert_to_system_tz(date);
    }
    setup_options(defaults) {
      var me2 = this;
      defaults.meridiem = "false";
      this.cal_options = {
        locale: frappe.boot.lang,
        header: {
          left: "prev, title, next",
          right: "today, month, agendaWeek, agendaDay"
        },
        editable: true,
        selectable: true,
        selectHelper: true,
        forceEventDuration: true,
        displayEventTime: true,
        defaultView: defaults.defaultView,
        weekends: defaults.weekends,
        nowIndicator: true,
        buttonText: {
          today: __("Today"),
          month: __("Month"),
          week: __("Week"),
          day: __("Day")
        },
        events: function(start, end, timezone, callback) {
          return frappe.call({
            method: me2.get_events_method || "frappe.desk.calendar.get_events",
            type: "GET",
            args: me2.get_args(start, end),
            callback: function(r) {
              var events = r.message || [];
              events = me2.prepare_events(events);
              callback(events);
            }
          });
        },
        displayEventEnd: true,
        eventRender: function(event, element) {
          element.attr("title", event.tooltip);
        },
        eventClick: function(event) {
          var doctype = event.doctype || me2.doctype;
          if (frappe.model.can_read(doctype)) {
            frappe.set_route("Form", doctype, event.name);
          }
        },
        eventDrop: function(event, delta, revertFunc) {
          me2.update_event(event, revertFunc);
        },
        eventResize: function(event, delta, revertFunc) {
          me2.update_event(event, revertFunc);
        },
        select: function(startDate, endDate, jsEvent, view) {
          if (view.name === "month" && endDate - startDate === 864e5) {
            return;
          }
          var event = frappe.model.get_new_doc(me2.doctype);
          event[me2.field_map.start] = me2.get_system_datetime(startDate);
          if (me2.field_map.end)
            event[me2.field_map.end] = me2.get_system_datetime(endDate);
          if (me2.field_map.allDay) {
            var all_day = startDate._ambigTime && endDate._ambigTime ? 1 : 0;
            event[me2.field_map.allDay] = all_day;
            if (all_day)
              event[me2.field_map.end] = me2.get_system_datetime(
                moment(endDate).subtract(1, "s")
              );
          }
          frappe.set_route("Form", me2.doctype, event.name);
        },
        dayClick: function(date, jsEvent, view) {
          if (view.name === "month") {
            const $date_cell = $("td[data-date=" + date.format("YYYY-MM-DD") + "]");
            if ($date_cell.hasClass("date-clicked")) {
              me2.$cal.fullCalendar("changeView", "agendaDay");
              me2.$cal.fullCalendar("gotoDate", date);
              me2.$wrapper.find(".date-clicked").removeClass("date-clicked");
              me2.$wrapper.find(".fc-month-button").removeClass("active");
              me2.$wrapper.find(".fc-agendaDay-button").addClass("active");
            }
            me2.$wrapper.find(".date-clicked").removeClass("date-clicked");
            $date_cell.addClass("date-clicked");
          }
          return false;
        }
      };
      if (this.options) {
        $.extend(this.cal_options, this.options);
      }
    }
    get_args(start, end) {
      var args = {
        doctype: this.doctype,
        start: this.get_system_datetime(start),
        end: this.get_system_datetime(end),
        fields: this.fields,
        filters: this.list_view.filter_area.get(),
        field_map: this.field_map
      };
      return args;
    }
    refresh() {
      this.$cal.fullCalendar("refetchEvents");
    }
    prepare_events(events) {
      var me2 = this;
      return (events || []).map((d) => {
        d.id = d.name;
        d.editable = frappe.model.can_write(d.doctype || me2.doctype);
        if (d.docstatus && d.docstatus > 0) {
          d.editable = false;
        }
        $.each(me2.field_map, function(target, source) {
          d[target] = d[source];
        });
        if (typeof d.allDay === "undefined") {
          d.allDay = me2.field_map.allDay;
        }
        if (!me2.field_map.convertToUserTz)
          d.convertToUserTz = 1;
        if (d.convertToUserTz) {
          d.start = frappe.datetime.convert_to_user_tz(d.start);
          d.end = frappe.datetime.convert_to_user_tz(d.end);
        }
        if (!frappe.datetime.validate(d.start) && d.end) {
          d.start = frappe.datetime.add_days(d.end, -1);
        }
        if (d.start && !frappe.datetime.validate(d.end)) {
          d.end = frappe.datetime.add_days(d.start, 1);
        }
        me2.fix_end_date_for_event_render(d);
        me2.prepare_colors(d);
        d.title = frappe.utils.html2text(d.title);
        return d;
      });
    }
    prepare_colors(d) {
      let color, color_name;
      if (this.get_css_class) {
        color_name = this.color_map[this.get_css_class(d)] || "blue";
        if (color_name.startsWith("#")) {
          color_name = frappe.ui.color.validate_hex(color_name) ? color_name : "blue";
        }
        d.backgroundColor = frappe.ui.color.get(color_name, "extra-light");
        d.textColor = frappe.ui.color.get(color_name, "dark");
      } else {
        color = d.color;
        if (!frappe.ui.color.validate_hex(color) || !color) {
          color = frappe.ui.color.get("blue", "extra-light");
        }
        d.backgroundColor = color;
        d.textColor = frappe.ui.color.get_contrast_color(color);
      }
      return d;
    }
    update_event(event, revertFunc) {
      var me2 = this;
      frappe.model.remove_from_locals(me2.doctype, event.name);
      return frappe.call({
        method: me2.update_event_method || "frappe.desk.calendar.update_event",
        args: me2.get_update_args(event),
        callback: function(r) {
          if (r.exc) {
            frappe.show_alert(__("Unable to update event"));
            revertFunc();
          }
        },
        error: function() {
          revertFunc();
        }
      });
    }
    get_update_args(event) {
      var me2 = this;
      var args = {
        name: event[this.field_map.id]
      };
      args[this.field_map.start] = me2.get_system_datetime(event.start);
      if (this.field_map.allDay)
        args[this.field_map.allDay] = event.start._ambigTime && event.end._ambigTime ? 1 : 0;
      if (this.field_map.end) {
        if (!event.end) {
          event.end = event.start.add(1, "hour");
        }
        args[this.field_map.end] = me2.get_system_datetime(event.end);
        if (args[this.field_map.allDay]) {
          args[this.field_map.end] = me2.get_system_datetime(
            moment(event.end).subtract(1, "s")
          );
        }
      }
      args.doctype = event.doctype || this.doctype;
      return { args, field_map: this.field_map };
    }
    fix_end_date_for_event_render(event) {
      if (event.allDay) {
        event.start = event.start ? $.fullCalendar.moment(event.start).stripTime() : null;
        event.end = event.end ? $.fullCalendar.moment(event.end).add(1, "day").stripTime() : null;
      }
    }
  };

  // frappe/public/js/frappe/views/dashboard/dashboard_view.js
  frappe.provide("frappe.views");
  frappe.views.DashboardView = class DashboardView extends frappe.views.ListView {
    get view_name() {
      return "Dashboard";
    }
    setup_defaults() {
      return super.setup_defaults().then(() => {
        this.page_title = __("{0} Dashboard", [__(this.doctype)]);
        this.dashboard_settings = frappe.get_user_settings(this.doctype)["dashboard_settings"] || null;
      });
    }
    render() {
    }
    setup_page() {
      this.hide_sidebar = true;
      this.hide_page_form = true;
      this.hide_filters = true;
      this.hide_sort_selector = true;
      super.setup_page();
    }
    setup_view() {
      if (this.chart_group || this.number_card_group) {
        return;
      }
      this.setup_dashboard_page();
      this.setup_dashboard_customization();
      this.make_dashboard();
    }
    setup_dashboard_customization() {
      this.page.add_menu_item(__("Customize Dashboard"), () => this.customize());
      this.page.add_menu_item(
        __("Reset Dashboard Customizations"),
        () => this.reset_dashboard_customization()
      );
      this.add_customization_buttons();
    }
    setup_dashboard_page() {
      const chart_wrapper_html = `<div class="dashboard-view"></div>`;
      this.$frappe_list.html(chart_wrapper_html);
      this.page.clear_secondary_action();
      this.$dashboard_page = this.$page.find(".layout-main-section-wrapper").addClass("dashboard-page");
      this.page.main.removeClass("frappe-card");
      this.$dashboard_wrapper = this.$page.find(".dashboard-view");
      this.$chart_header = this.$page.find(".dashboard-header");
      frappe.utils.bind_actions_with_object(this.$dashboard_page, this);
    }
    add_customization_buttons() {
      this.save_customizations_button = this.page.add_button(
        __("Save Customizations"),
        () => {
          this.save_dashboard_customization();
          this.page.standard_actions.show();
        },
        { btn_class: "btn-primary" }
      );
      this.discard_customizations_button = this.page.add_button(__("Discard"), () => {
        this.discard_dashboard_customization();
        this.page.standard_actions.show();
      });
      this.toggle_customization_buttons(false);
    }
    set_primary_action() {
    }
    toggle_customization_buttons(show) {
      this.save_customizations_button.toggle(show);
      this.discard_customizations_button.toggle(show);
    }
    make_dashboard() {
      if (this.dashboard_settings) {
        this.charts = this.dashboard_settings.charts;
        this.number_cards = this.dashboard_settings.number_cards;
        this.render_dashboard();
      } else {
        frappe.run_serially([
          () => this.fetch_dashboard_items(
            "Dashboard Chart",
            {
              chart_type: ["in", ["Count", "Sum", "Group By"]],
              document_type: this.doctype,
              is_public: 1
            },
            "charts"
          ),
          () => this.fetch_dashboard_items(
            "Number Card",
            {
              document_type: this.doctype,
              is_public: 1
            },
            "number_cards"
          ),
          () => this.render_dashboard()
        ]);
      }
    }
    render_dashboard() {
      this.$dashboard_wrapper.empty();
      frappe.dashboard_utils.get_dashboard_settings().then((settings) => {
        this.dashboard_chart_settings = settings.chart_config ? JSON.parse(settings.chart_config) : {};
        this.charts.map((chart) => {
          chart.label = chart.chart_name;
          chart.chart_settings = this.dashboard_chart_settings[chart.chart_name] || {};
        });
        this.render_dashboard_charts();
      });
      this.render_number_cards();
      if (!this.charts.length && !this.number_cards.length) {
        this.render_empty_state();
      }
    }
    fetch_dashboard_items(doctype, filters, obj_name) {
      return frappe.db.get_list(doctype, {
        filters,
        fields: ["*"]
      }).then((items) => {
        this[obj_name] = items;
      });
    }
    render_number_cards() {
      this.number_card_group = new frappe.widget.WidgetGroup({
        container: this.$dashboard_wrapper,
        type: "number_card",
        columns: 3,
        options: {
          allow_sorting: true,
          allow_create: true,
          allow_delete: true,
          allow_hiding: true
        },
        default_values: { doctype: this.doctype },
        widgets: this.number_cards || [],
        in_customize_mode: this.in_customize_mode || false
      });
      this.in_customize_mode && this.number_card_group.customize();
    }
    render_dashboard_charts() {
      this.chart_group = new frappe.widget.WidgetGroup({
        container: this.$dashboard_wrapper,
        type: "chart",
        columns: 2,
        height: 240,
        options: {
          allow_sorting: true,
          allow_create: true,
          allow_delete: true,
          allow_hiding: true,
          allow_resize: true
        },
        custom_dialog: () => this.show_add_chart_dialog(),
        widgets: this.charts,
        in_customize_mode: this.in_customize_mode || false
      });
      this.in_customize_mode && this.chart_group.customize();
      this.chart_group.container.find(".widget-group-head").hide();
    }
    render_empty_state() {
      const no_result_message_html = `<p>${__(
        "You haven't added any Dashboard Charts or Number Cards yet."
      )}
			<br>${__("Click On Customize to add your first widget")}</p>`;
      const customize_button = `<p><button class="btn btn-primary btn-sm" data-action="customize">
				${__("Customize")}
			</button></p>`;
      const empty_state_image = "/assets/frappe/images/ui-states/list-empty-state.svg";
      const empty_state_html = `<div class="msg-box no-border empty-dashboard">
			<div>
				<img src="${empty_state_image}" alt="Generic Empty State" class="null-state">
			</div>
			${no_result_message_html}
			${customize_button}
		</div>`;
      this.$dashboard_wrapper.append(empty_state_html);
      this.$empty_state = this.$dashboard_wrapper.find(".empty-dashboard");
    }
    customize() {
      if (this.in_customize_mode) {
        return;
      }
      this.page.standard_actions.hide();
      if (this.$empty_state) {
        this.$empty_state.remove();
      }
      this.toggle_customize(true);
      this.in_customize_mode = true;
      this.chart_group.customize();
      this.number_card_group.customize();
    }
    get_widgets_to_save(widget_group) {
      const config = widget_group.get_widget_config();
      let widgets = [];
      config.order.map((widget_name) => {
        widgets.push(config.widgets[widget_name]);
      });
      return this.remove_duplicates(widgets);
    }
    save_dashboard_customization() {
      this.toggle_customize(false);
      const charts = this.get_widgets_to_save(this.chart_group);
      const number_cards = this.get_widgets_to_save(this.number_card_group);
      this.dashboard_settings = {
        charts,
        number_cards
      };
      frappe.model.user_settings.save(
        this.doctype,
        "dashboard_settings",
        this.dashboard_settings
      );
      this.make_dashboard();
    }
    discard_dashboard_customization() {
      this.dashboard_settings = frappe.get_user_settings(this.doctype)["dashboard_settings"] || null;
      this.toggle_customize(false);
      this.render_dashboard();
    }
    reset_dashboard_customization() {
      frappe.confirm(__("Are you sure you want to reset all customizations?"), () => {
        this.dashboard_settings = null;
        frappe.model.user_settings.save(this.doctype, "dashboard_settings", this.dashboard_settings).then(() => this.make_dashboard());
        this.toggle_customize(false);
      });
    }
    toggle_customize(show) {
      this.toggle_customization_buttons(show);
      this.in_customize_mode = show;
    }
    show_add_chart_dialog() {
      let fields = this.get_field_options();
      const dialog = new frappe.ui.Dialog({
        title: __("Add a {0} Chart", [__(this.doctype)]),
        fields: [
          {
            fieldname: "new_or_existing",
            fieldtype: "Select",
            label: "Choose an existing chart or create a new chart",
            options: ["New Chart", "Existing Chart"],
            reqd: 1
          },
          {
            label: "Chart",
            fieldname: "chart",
            fieldtype: "Link",
            get_query: () => {
              return {
                query: "frappe.desk.doctype.dashboard_chart.dashboard_chart.get_charts_for_user",
                filters: {
                  document_type: this.doctype
                }
              };
            },
            options: "Dashboard Chart",
            depends_on: 'eval: doc.new_or_existing == "Existing Chart"'
          },
          {
            fieldname: "sb_2",
            fieldtype: "Section Break",
            depends_on: 'eval: doc.new_or_existing == "New Chart"'
          },
          {
            label: "Chart Label",
            fieldname: "label",
            fieldtype: "Data",
            mandatory_depends_on: 'eval: doc.new_or_existing == "New Chart"'
          },
          {
            fieldname: "cb_1",
            fieldtype: "Column Break"
          },
          {
            label: "Chart Type",
            fieldname: "chart_type",
            fieldtype: "Select",
            options: ["Time Series", "Group By"],
            mandatory_depends_on: 'eval: doc.new_or_existing == "New Chart"'
          },
          {
            fieldname: "sb_2",
            fieldtype: "Section Break",
            label: "Chart Config",
            depends_on: 'eval: doc.chart_type == "Time Series" && doc.new_or_existing == "New Chart"'
          },
          {
            label: "Function",
            fieldname: "chart_function",
            fieldtype: "Select",
            options: ["Count", "Sum", "Average"],
            default: "Count"
          },
          {
            label: "Timespan",
            fieldtype: "Select",
            fieldname: "timespan",
            depends_on: 'eval: doc.chart_type == "Time Series"',
            options: ["Last Year", "Last Quarter", "Last Month", "Last Week"],
            default: "Last Year"
          },
          {
            fieldname: "cb_2",
            fieldtype: "Column Break"
          },
          {
            label: "Value Based On",
            fieldtype: "Select",
            fieldname: "based_on",
            options: fields.value_fields,
            depends_on: 'eval: doc.chart_function=="Sum"'
          },
          {
            label: "Time Series Based On",
            fieldtype: "Select",
            fieldname: "based_on",
            options: fields.date_fields,
            mandatory_depends_on: 'eval: doc.chart_type == "Time Series"'
          },
          {
            label: "Time Interval",
            fieldname: "time_interval",
            fieldtype: "Select",
            depends_on: 'eval: doc.chart_type == "Time Series"',
            options: ["Yearly", "Quarterly", "Monthly", "Weekly", "Daily"],
            default: "Monthly"
          },
          {
            fieldname: "sb_2",
            fieldtype: "Section Break",
            label: "Chart Config",
            depends_on: 'eval: doc.chart_type == "Group By" && doc.new_or_existing == "New Chart"'
          },
          {
            label: "Group By Type",
            fieldname: "group_by_type",
            fieldtype: "Select",
            options: ["Count", "Sum", "Average"],
            default: "Count"
          },
          {
            label: "Aggregate Function Based On",
            fieldtype: "Select",
            fieldname: "aggregate_function_based_on",
            options: fields.aggregate_function_fields,
            depends_on: 'eval: ["Sum", "Average"].includes(doc.group_by_type)'
          },
          {
            fieldname: "cb_2",
            fieldtype: "Column Break"
          },
          {
            label: "Group By Based On",
            fieldtype: "Select",
            fieldname: "group_by_based_on",
            options: fields.group_by_fields,
            default: "Last Year"
          },
          {
            label: "Number of Groups",
            fieldtype: "Int",
            fieldname: "number_of_groups",
            default: 0
          },
          {
            fieldname: "sb_3",
            fieldtype: "Section Break",
            depends_on: 'eval: doc.new_or_existing == "New Chart"'
          },
          {
            label: "Chart Type",
            fieldname: "type",
            fieldtype: "Select",
            options: ["Line", "Bar", "Percentage", "Pie"],
            depends_on: 'eval: doc.new_or_existing == "New Chart"'
          },
          {
            fieldname: "cb_1",
            fieldtype: "Column Break"
          },
          {
            label: "Chart Color",
            fieldname: "color",
            fieldtype: "Color",
            depends_on: 'eval: doc.new_or_existing == "New Chart"'
          }
        ],
        primary_action_label: __("Add"),
        primary_action: (values) => {
          let chart = values;
          if (chart.new_or_existing == "New Chart") {
            chart.chart_name = chart.label;
            chart.chart_type = chart.chart_type == "Time Series" ? chart.chart_function : chart.chart_type;
            chart.document_type = this.doctype;
            chart.filters_json = "[]";
            frappe.xcall(
              "frappe.desk.doctype.dashboard_chart.dashboard_chart.create_dashboard_chart",
              { args: chart }
            ).then((doc) => {
              this.chart_group.new_widget.on_create({
                chart_name: doc.chart_name,
                name: doc.chart_name,
                label: chart.label
              });
            });
          } else {
            this.chart_group.new_widget.on_create({
              chart_name: chart.chart,
              label: chart.chart,
              name: chart.chart
            });
          }
          dialog.hide();
        }
      });
      dialog.show();
    }
    get_field_options() {
      let date_fields = [
        { label: __("Created On"), value: "creation" },
        { label: __("Last Modified On"), value: "modified" }
      ];
      let value_fields = [];
      let group_by_fields = [];
      let aggregate_function_fields = [];
      frappe.get_meta(this.doctype).fields.map((df) => {
        if (["Date", "Datetime"].includes(df.fieldtype)) {
          date_fields.push({ label: df.label, value: df.fieldname });
        }
        if (frappe.model.numeric_fieldtypes.includes(df.fieldtype)) {
          if (df.fieldtype == "Currency") {
            if (!df.options || df.options !== "Company:company:default_currency") {
              return;
            }
          }
          value_fields.push({ label: df.label, value: df.fieldname });
          aggregate_function_fields.push({ label: df.label, value: df.fieldname });
        }
        if (["Link", "Select"].includes(df.fieldtype)) {
          group_by_fields.push({ label: df.label, value: df.fieldname });
        }
      });
      return {
        date_fields,
        value_fields,
        group_by_fields,
        aggregate_function_fields
      };
    }
    remove_duplicates(items) {
      return items.filter((item, index) => items.indexOf(item) === index);
    }
  };

  // frappe/public/js/frappe/views/image/image_view.js
  frappe.provide("frappe.views");
  frappe.views.ImageView = class ImageView extends frappe.views.ListView {
    get view_name() {
      return "Image";
    }
    setup_defaults() {
      return super.setup_defaults().then(() => {
        this.page_title = this.page_title + " " + __("Images");
      });
    }
    setup_view() {
      this.setup_columns();
      this.setup_check_events();
      this.setup_like();
    }
    set_fields() {
      this.fields = [
        "name",
        ...this.get_fields_in_list_view().map((el) => el.fieldname),
        this.meta.title_field,
        this.meta.image_field,
        "_liked_by"
      ];
    }
    prepare_data(data) {
      super.prepare_data(data);
      this.items = this.data.map((d) => {
        d._image_url = this.get_image_url(d);
        return d;
      });
    }
    render() {
      this.get_attached_images().then(() => {
        this.render_image_view();
        if (!this.gallery) {
          this.setup_gallery();
        } else {
          this.gallery.prepare_pswp_items(this.items, this.images_map);
        }
      });
    }
    render_image_view() {
      var html = this.items.map(this.item_html.bind(this)).join("");
      this.$page.find(".layout-main-section-wrapper").addClass("image-view");
      this.$result.html(`
			<div class="image-view-container">
				${html}
			</div>
		`);
      this.render_count();
    }
    item_details_html(item) {
      let info_fields = this.get_fields_in_list_view().map((el) => el.fieldname) || [];
      const title_field = this.meta.title_field || "name";
      info_fields = info_fields.filter((field) => field !== title_field);
      let info_html = `<div><ul class="list-unstyled image-view-info">`;
      let set = false;
      info_fields.forEach((field, index) => {
        if (item[field] && !set) {
          if (index == 0)
            info_html += `<li>${__(item[field])}</li>`;
          else
            info_html += `<li class="text-muted">${__(item[field])}</li>`;
          set = true;
        }
      });
      info_html += `</ul></div>`;
      return info_html;
    }
    item_html(item) {
      item._name = encodeURI(item.name);
      const encoded_name = item._name;
      const title = strip_html(item[this.meta.title_field || "name"]);
      const escaped_title = frappe.utils.escape_html(title);
      const _class = !item._image_url ? "no-image" : "";
      const _html = item._image_url ? `<img data-name="${encoded_name}" src="${item._image_url}" alt="${title}">` : `<span class="placeholder-text">
				${frappe.get_abbr(title)}
			</span>`;
      let details = this.item_details_html(item);
      const expand_button_html = item._image_url ? `<div class="zoom-view" data-name="${encoded_name}">
				${frappe.utils.icon("expand", "xs")}
			</div>` : "";
      return `
			<div class="image-view-item ellipsis">
				<div class="image-view-header">
					<div>
						<input class="level-item list-row-checkbox hidden-xs"
							type="checkbox" data-name="${escape(item.name)}">
						${this.get_like_html(item)}
					</div>
				</span>
				</div>
				<div class="image-view-body ${_class}">
					<a data-name="${encoded_name}"
						title="${encoded_name}"
						href="${this.get_form_link(item)}"
					>
						<div class="image-field"
							data-name="${encoded_name}"
						>
							${_html}
						</div>
					</a>
					${expand_button_html}
				</div>
				<div class="image-view-footer">
					<div class="image-title">
						<span class="ellipsis" title="${escaped_title}">
							<a class="ellipsis" href="${this.get_form_link(item)}"
								title="${escaped_title}" data-doctype="${this.doctype}" data-name="${item.name}">
								${title}
							</a>
						</span>
					</div>
					${details}
				</div>
			</div>
		`;
    }
    get_attached_images() {
      return frappe.call({
        method: "frappe.core.api.file.get_attached_images",
        args: {
          doctype: this.doctype,
          names: this.items.map((i2) => i2.name)
        }
      }).then((r) => {
        this.images_map = Object.assign(this.images_map || {}, r.message);
      });
    }
    get_header_html() {
    }
    setup_gallery() {
      var me2 = this;
      this.gallery = new frappe.views.GalleryView({
        doctype: this.doctype,
        items: this.items,
        wrapper: this.$result,
        images_map: this.images_map
      });
      this.$result.on("click", ".zoom-view", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var name = $(this).data().name;
        name = decodeURIComponent(name);
        me2.gallery.show(name);
        return false;
      });
    }
  };
  frappe.views.GalleryView = class GalleryView {
    constructor(opts) {
      $.extend(this, opts);
      var me2 = this;
      this.lib_ready = this.load_lib();
      this.lib_ready.then(function() {
        me2.prepare();
      });
    }
    prepare() {
      this.pswp_root = $("body > .pswp");
      if (this.pswp_root.length === 0) {
        var pswp = frappe.render_template("photoswipe_dom");
        this.pswp_root = $(pswp).appendTo("body");
      }
    }
    prepare_pswp_items(_items, _images_map) {
      var me2 = this;
      if (_items) {
        this.items = this.items.concat(_items);
        this.images_map = _images_map;
      }
      return new Promise((resolve) => {
        const items = this.items.map(function(i2) {
          const query = 'img[data-name="' + i2._name + '"]';
          let el = me2.wrapper.find(query).get(0);
          let width, height;
          if (el) {
            width = el.naturalWidth;
            height = el.naturalHeight;
          }
          if (!el) {
            el = me2.wrapper.find('.image-field[data-name="' + i2._name + '"]').get(0);
            width = el.getBoundingClientRect().width;
            height = el.getBoundingClientRect().height;
          }
          return {
            src: i2._image_url,
            msrc: i2._image_url,
            name: i2.name,
            w: width,
            h: height,
            el
          };
        });
        this.pswp_items = items;
        resolve();
      });
    }
    show(docname) {
      this.lib_ready.then(() => this.prepare_pswp_items()).then(() => this._show(docname));
    }
    _show(docname) {
      const me2 = this;
      const items = this.pswp_items;
      const item_index = items.findIndex((item) => item.name === docname);
      var options = {
        index: item_index,
        getThumbBoundsFn: function(index) {
          const query = 'img[data-name="' + items[index]._name + '"]';
          let thumbnail = me2.wrapper.find(query).get(0);
          if (!thumbnail) {
            return;
          }
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop, rect = thumbnail.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        },
        history: false,
        shareEl: false,
        showHideOpacity: true
      };
      this.pswp = new PhotoSwipe(this.pswp_root.get(0), PhotoSwipeUI_Default, items, options);
      this.browse_images();
      this.pswp.init();
    }
    browse_images() {
      const $more_items = this.pswp_root.find(".pswp__more-items");
      const images_map = this.images_map;
      let last_hide_timeout = null;
      this.pswp.listen("afterChange", function() {
        const images = images_map[this.currItem.name];
        if (!images || images.length === 1) {
          $more_items.html("");
          return;
        }
        hide_more_items_after_2s();
        const html = images.map(img_html).join("");
        $more_items.html(html);
      });
      this.pswp.listen("beforeChange", hide_more_items);
      this.pswp.listen("initialZoomOut", hide_more_items);
      this.pswp.listen("destroy", () => {
        $(document).off("mousemove", hide_more_items_after_2s);
      });
      $more_items.on("click", ".pswp__more-item", (e) => {
        const img_el = e.target;
        const index = this.pswp.items.findIndex((i2) => i2.name === this.pswp.currItem.name);
        this.pswp.goTo(index);
        this.pswp.items.splice(index, 1, {
          src: img_el.src,
          w: img_el.naturalWidth,
          h: img_el.naturalHeight,
          name: this.pswp.currItem.name
        });
        this.pswp.invalidateCurrItems();
        this.pswp.updateSize(true);
      });
      $(document).on("mousemove", hide_more_items_after_2s);
      function hide_more_items_after_2s() {
        clearTimeout(last_hide_timeout);
        show_more_items();
        last_hide_timeout = setTimeout(hide_more_items, 2e3);
      }
      function show_more_items() {
        $more_items.show();
      }
      function hide_more_items() {
        $more_items.hide();
      }
      function img_html(src) {
        return `<div class="pswp__more-item">
				<img src="${src}">
			</div>`;
      }
    }
    load_lib() {
      return new Promise((resolve) => {
        var asset_dir = "assets/frappe/js/lib/photoswipe/";
        frappe.require(
          [
            asset_dir + "photoswipe.css",
            asset_dir + "default-skin.css",
            asset_dir + "photoswipe.js",
            asset_dir + "photoswipe-ui-default.js"
          ],
          resolve
        );
      });
    }
  };

  // frappe/public/js/frappe/views/map/map_view.js
  frappe.provide("frappe.utils");
  frappe.provide("frappe.views");
  frappe.views.MapView = class MapView extends frappe.views.ListView {
    get view_name() {
      return "Map";
    }
    setup_defaults() {
      super.setup_defaults();
      this.page_title = __("{0} Map", [this.page_title]);
    }
    setup_view() {
    }
    on_filter_change() {
      this.get_coords();
    }
    render() {
      this.get_coords().then(() => {
        this.render_map_view();
      });
      this.$paging_area.find(".level-left").append("<div></div>");
    }
    render_map_view() {
      this.map_id = frappe.dom.get_unique_id();
      this.$result.html(`<div id="${this.map_id}" class="map-view-container"></div>`);
      L.Icon.Default.imagePath = frappe.utils.map_defaults.image_path;
      this.map = L.map(this.map_id).setView(
        frappe.utils.map_defaults.center,
        frappe.utils.map_defaults.zoom
      );
      L.tileLayer(frappe.utils.map_defaults.tiles, frappe.utils.map_defaults.options).addTo(
        this.map
      );
      L.control.scale().addTo(this.map);
      if (this.coords.features && this.coords.features.length) {
        this.coords.features.forEach(
          (coords) => L.geoJSON(coords).bindPopup(coords.properties.name).addTo(this.map)
        );
        let lastCoords = this.coords.features[0].geometry.coordinates.reverse();
        this.map.panTo(lastCoords, 8);
      }
    }
    get_coords() {
      let get_coords_method = this.settings && this.settings.get_coords_method || "frappe.geo.utils.get_coords";
      if (cur_list.meta.fields.find(
        (i2) => i2.fieldname === "location" && i2.fieldtype === "Geolocation"
      )) {
        this.type = "location_field";
      } else if (cur_list.meta.fields.find((i2) => i2.fieldname === "latitude") && cur_list.meta.fields.find((i2) => i2.fieldname === "longitude")) {
        this.type = "coordinates";
      }
      return frappe.call({
        method: get_coords_method,
        args: {
          doctype: this.doctype,
          filters: cur_list.filter_area.get(),
          type: this.type
        }
      }).then((r) => {
        this.coords = r.message;
      });
    }
    get required_libs() {
      return [
        "assets/frappe/js/lib/leaflet/leaflet.css",
        "assets/frappe/js/lib/leaflet/leaflet.js"
      ];
    }
  };

  // frappe/public/js/frappe/views/kanban/kanban_settings.js
  var KanbanSettings = class {
    constructor({ kanbanview, doctype, meta, settings }) {
      if (!doctype) {
        frappe.throw(__("DocType required"));
      }
      this.kanbanview = kanbanview;
      this.doctype = doctype;
      this.meta = meta;
      this.settings = settings;
      this.dialog = null;
      this.fields = this.settings && this.settings.fields;
      frappe.model.with_doctype("List View Settings", () => {
        this.make();
        this.get_fields();
        this.setup_fields();
        this.setup_remove_fields();
        this.add_new_fields();
        this.show_dialog();
      });
    }
    make() {
      this.dialog = new frappe.ui.Dialog({
        title: __("{0} Settings", [__(this.doctype)]),
        fields: [
          {
            fieldname: "show_labels",
            label: __("Show Labels"),
            fieldtype: "Check"
          },
          {
            fieldname: "fields_html",
            fieldtype: "HTML"
          },
          {
            fieldname: "fields",
            fieldtype: "Code",
            hidden: 1
          }
        ]
      });
      this.dialog.set_values(this.settings);
      this.dialog.set_primary_action(__("Save"), () => {
        frappe.show_alert({
          message: __("Saving"),
          indicator: "green"
        });
        frappe.call({
          method: "frappe.desk.doctype.kanban_board.kanban_board.save_settings",
          args: {
            board_name: this.settings.name,
            settings: this.dialog.get_values()
          },
          callback: (r) => {
            this.kanbanview.board = r.message;
            this.kanbanview.render();
            this.dialog.hide();
          }
        });
      });
    }
    refresh() {
      this.setup_fields();
      this.add_new_fields();
      this.setup_remove_fields();
    }
    show_dialog() {
      if (!this.settings.fields) {
        this.update_fields();
      }
      this.dialog.show();
    }
    setup_fields() {
      const fields_html = this.dialog.get_field("fields_html");
      const wrapper = fields_html.$wrapper[0];
      let fields = "";
      for (let fieldname of this.fields) {
        let field = this.get_docfield(fieldname);
        fields += `
				<div class="control-input flex align-center form-control fields_order sortable"
					style="display: block; margin-bottom: 5px;"
					data-fieldname="${field.fieldname}"
					data-label="${field.label}"
					data-type="${field.type}">

					<div class="row">
						<div class="col-md-1">
							${frappe.utils.icon("drag", "xs", "", "", "sortable-handle")}
						</div>
						<div class="col-md-10" style="padding-left:0px;">
							${__(field.label)}
						</div>
						<div class="col-md-1">
							<a class="text-muted remove-field" data-fieldname="${field.fieldname}">
								${frappe.utils.icon("delete", "xs")}
							</a>
						</div>
					</div>
				</div>`;
      }
      fields_html.html(`
			<div class="form-group">
				<div class="clearfix">
					<label class="control-label" style="padding-right: 0px;">${__("Fields")}</label>
				</div>
				<div class="control-input-wrapper">
				${fields}
				</div>
				<p class="help-box small text-muted">
					<a class="add-new-fields text-muted">
						${__("+ Add / Remove Fields")}
					</a>
				</p>
			</div>
		`);
      new Sortable(wrapper.getElementsByClassName("control-input-wrapper")[0], {
        handle: ".sortable-handle",
        draggable: ".sortable",
        onUpdate: (params) => {
          this.fields.splice(params.newIndex, 0, this.fields.splice(params.oldIndex, 1)[0]);
          this.dialog.set_value("fields", JSON.stringify(this.fields));
          this.refresh();
        }
      });
    }
    add_new_fields() {
      let add_new_fields = this.get_dialog_fields_wrapper().getElementsByClassName("add-new-fields")[0];
      add_new_fields.onclick = () => this.show_column_selector();
    }
    setup_remove_fields() {
      let remove_fields = this.get_dialog_fields_wrapper().getElementsByClassName("remove-field");
      for (let idx = 0; idx < remove_fields.length; idx++) {
        remove_fields.item(idx).onclick = () => this.remove_fields(remove_fields.item(idx).getAttribute("data-fieldname"));
      }
    }
    get_dialog_fields_wrapper() {
      return this.dialog.get_field("fields_html").$wrapper[0];
    }
    remove_fields(fieldname) {
      this.fields = this.fields.filter((field) => field !== fieldname);
      this.dialog.set_value("fields", JSON.stringify(this.fields));
      this.refresh();
    }
    update_fields() {
      const wrapper = this.dialog.get_field("fields_html").$wrapper[0];
      let fields_order = wrapper.getElementsByClassName("fields_order");
      this.fields = [];
      for (let idx = 0; idx < fields_order.length; idx++) {
        this.fields.push(fields_order.item(idx).getAttribute("data-fieldname"));
      }
      this.dialog.set_value("fields", JSON.stringify(this.fields));
    }
    show_column_selector() {
      let dialog = new frappe.ui.Dialog({
        title: __("{0} Fields", [__(this.doctype)]),
        fields: [
          {
            label: __("Select Fields"),
            fieldtype: "MultiCheck",
            fieldname: "fields",
            options: this.get_multiselect_fields(),
            columns: 2
          }
        ]
      });
      dialog.set_primary_action(__("Save"), () => {
        this.fields = dialog.get_values().fields || [];
        this.dialog.set_value("fields", JSON.stringify(this.fields));
        this.refresh();
        dialog.hide();
      });
      dialog.show();
    }
    get_fields() {
      this.fields = this.settings.fields;
      this.fields.uniqBy((f) => f.fieldname);
    }
    get_docfield(field_name) {
      return frappe.meta.get_docfield(this.doctype, field_name) || frappe.model.get_std_field(field_name);
    }
    get_multiselect_fields() {
      const ignore_fields = [
        "idx",
        "lft",
        "rgt",
        "old_parent",
        "_user_tags",
        "_liked_by",
        "_comments",
        "_assign",
        this.meta.title_field || "name"
      ];
      const ignore_fieldtypes = [
        "Attach Image",
        "Text Editor",
        "HTML Editor",
        "Code",
        "Color",
        ...frappe.model.no_value_type
      ];
      return frappe.model.std_fields.concat(this.kanbanview.get_fields_in_list_view()).filter(
        (field) => !ignore_fields.includes(field.fieldname) && !ignore_fieldtypes.includes(field.fieldtype)
      ).map((field) => {
        return {
          label: __(field.label),
          value: field.fieldname,
          checked: this.fields.includes(field.fieldname)
        };
      });
    }
  };

  // frappe/public/js/frappe/views/kanban/kanban_view.js
  frappe.provide("frappe.views");
  frappe.views.KanbanView = class KanbanView extends frappe.views.ListView {
    static load_last_view() {
      const route = frappe.get_route();
      if (route.length === 3) {
        const doctype = route[1];
        const user_settings = frappe.get_user_settings(doctype)["Kanban"] || {};
        if (!user_settings.last_kanban_board) {
          return new frappe.views.KanbanView({ doctype });
        }
        route.push(user_settings.last_kanban_board);
        frappe.set_route(route);
        return true;
      }
      return false;
    }
    get view_name() {
      return "Kanban";
    }
    show() {
      frappe.views.KanbanView.get_kanbans(this.doctype).then((kanbans) => {
        if (!kanbans.length) {
          return frappe.views.KanbanView.show_kanban_dialog(this.doctype, true);
        } else if (kanbans.length && frappe.get_route().length !== 4) {
          return frappe.views.KanbanView.show_kanban_dialog(this.doctype, true);
        } else {
          this.kanbans = kanbans;
          return frappe.run_serially([
            () => this.show_skeleton(),
            () => this.fetch_meta(),
            () => this.hide_skeleton(),
            () => this.check_permissions(),
            () => this.init(),
            () => this.before_refresh(),
            () => this.refresh()
          ]);
        }
      });
    }
    init() {
      return super.init().then(() => {
        let menu_length = this.page.menu.find(".dropdown-item").length;
        if (menu_length === 1) {
          this.page.hide_menu();
        }
      });
    }
    setup_defaults() {
      return super.setup_defaults().then(() => {
        let get_board_name = () => {
          return this.kanbans.length && this.kanbans[0].name;
        };
        this.board_name = frappe.get_route()[3] || get_board_name() || null;
        this.page_title = __(this.board_name);
        this.card_meta = this.get_card_meta();
        this.page_length = 0;
        return frappe.run_serially([
          () => this.set_board_perms_and_push_menu_items(),
          () => this.get_board()
        ]);
      });
    }
    set_board_perms_and_push_menu_items() {
      return frappe.call({
        method: "frappe.client.get_doc_permissions",
        args: {
          doctype: "Kanban Board",
          docname: this.board_name
        },
        callback: (result) => {
          this.board_perms = result.message.permissions || {};
          this.push_menu_items();
        }
      });
    }
    push_menu_items() {
      if (this.board_perms.write) {
        this.menu_items.push({
          label: __("Save filters"),
          action: () => {
            this.save_kanban_board_filters();
          }
        });
      }
      if (this.board_perms.delete) {
        this.menu_items.push({
          label: __("Delete Kanban Board"),
          action: () => {
            frappe.confirm(__("Are you sure you want to proceed?"), () => {
              frappe.db.delete_doc("Kanban Board", this.board_name).then(() => {
                frappe.show_alert(`Kanban Board ${this.board_name} deleted.`);
                frappe.set_route("List", this.doctype, "List");
              });
            });
          }
        });
      }
    }
    setup_paging_area() {
    }
    toggle_result_area() {
      this.$result.toggle(this.data.length > 0);
    }
    get_board() {
      return frappe.db.get_doc("Kanban Board", this.board_name).then((board) => {
        this.board = board;
        this.board.filters_array = JSON.parse(this.board.filters || "[]");
        this.board.fields = JSON.parse(this.board.fields || "[]");
        this.filters = this.board.filters_array;
      });
    }
    setup_page() {
      this.hide_sidebar = true;
      this.hide_page_form = true;
      this.hide_card_layout = true;
      this.hide_sort_selector = true;
      super.setup_page();
    }
    setup_view() {
      if (this.board.columns.length > 5) {
        this.page.container.addClass("full-width");
      }
      this.setup_realtime_updates();
      this.setup_like();
    }
    set_fields() {
      super.set_fields();
      this._add_field(this.card_meta.title_field);
    }
    before_render() {
      frappe.model.user_settings.save(this.doctype, "last_view", this.view_name);
      this.save_view_user_settings({
        last_kanban_board: this.board_name
      });
    }
    render_list() {
    }
    on_filter_change() {
      if (!this.board_perms.write)
        return;
      if (JSON.stringify(this.board.filters_array) !== JSON.stringify(this.filter_area.get())) {
        this.page.set_indicator(__("Not Saved"), "orange");
      } else {
        this.page.clear_indicator();
      }
    }
    save_kanban_board_filters() {
      const filters = this.filter_area.get();
      frappe.db.set_value("Kanban Board", this.board_name, "filters", filters).then((r) => {
        if (r.exc) {
          frappe.show_alert({
            indicator: "red",
            message: __("There was an error saving filters")
          });
          return;
        }
        frappe.show_alert({
          indicator: "green",
          message: __("Filters saved")
        });
        this.board.filters_array = filters;
        this.on_filter_change();
      });
    }
    get_fields() {
      this.fields.push([this.board.field_name, this.board.reference_doctype]);
      return super.get_fields();
    }
    render() {
      const board_name = this.board_name;
      if (!this.kanban) {
        this.kanban = new frappe.views.KanbanBoard({
          doctype: this.doctype,
          board: this.board,
          board_name,
          cards: this.data,
          card_meta: this.card_meta,
          wrapper: this.$result,
          cur_list: this,
          user_settings: this.view_user_settings
        });
      } else if (board_name === this.kanban.board_name) {
        this.kanban.update(this.data);
      }
    }
    get_card_meta() {
      var meta = frappe.get_meta(this.doctype);
      let route_options = __spreadValues({}, frappe.route_options);
      var doc = frappe.model.get_new_doc(this.doctype);
      frappe.route_options = route_options;
      var title_field = null;
      var quick_entry = false;
      if (this.meta.title_field) {
        title_field = frappe.meta.get_field(this.doctype, this.meta.title_field);
      }
      this.meta.fields.forEach((df) => {
        const is_valid_field = ["Data", "Text", "Small Text", "Text Editor"].includes(df.fieldtype) && !df.hidden;
        if (is_valid_field && !title_field) {
          title_field = df;
        }
      });
      var mandatory = meta.fields.filter((df) => df.reqd && !doc[df.fieldname]);
      if (mandatory.some((df) => frappe.model.table_fields.includes(df.fieldtype)) || mandatory.length > 1) {
        quick_entry = true;
      }
      if (!title_field) {
        title_field = frappe.meta.get_field(this.doctype, "name");
      }
      return {
        quick_entry,
        title_field
      };
    }
    get_view_settings() {
      return {
        label: __("Kanban Settings", null, "Button in kanban view menu"),
        action: () => this.show_kanban_settings(),
        standard: true
      };
    }
    show_kanban_settings() {
      frappe.model.with_doctype(this.doctype, () => {
        new KanbanSettings({
          kanbanview: this,
          doctype: this.doctype,
          settings: this.board,
          meta: frappe.get_meta(this.doctype)
        });
      });
    }
    get required_libs() {
      return "kanban_board.bundle.js";
    }
  };
  frappe.views.KanbanView.get_kanbans = function(doctype) {
    let kanbans = [];
    return get_kanban_boards().then((kanban_boards) => {
      if (kanban_boards) {
        kanban_boards.forEach((board) => {
          let route = `/app/${frappe.router.slug(board.reference_doctype)}/view/kanban/${board.name}`;
          kanbans.push({ name: board.name, route });
        });
      }
      return kanbans;
    });
    function get_kanban_boards() {
      return frappe.call("frappe.desk.doctype.kanban_board.kanban_board.get_kanban_boards", { doctype }).then((r) => r.message);
    }
  };
  frappe.views.KanbanView.show_kanban_dialog = function(doctype) {
    let dialog = new_kanban_dialog();
    dialog.show();
    function make_kanban_board(board_name, field_name, project) {
      return frappe.call({
        method: "frappe.desk.doctype.kanban_board.kanban_board.quick_kanban_board",
        args: {
          doctype,
          board_name,
          field_name,
          project
        },
        callback: function(r) {
          var kb = r.message;
          if (kb.filters) {
            frappe.provide("frappe.kanban_filters");
            frappe.kanban_filters[kb.kanban_board_name] = kb.filters;
          }
          frappe.set_route("List", doctype, "Kanban", kb.kanban_board_name);
        }
      });
    }
    function new_kanban_dialog() {
      const select_fields = frappe.get_meta(doctype).fields.filter((df) => {
        return df.fieldtype === "Select" && df.fieldname !== "kanban_column";
      });
      const dialog_fields = get_fields_for_dialog(select_fields);
      const to_save = select_fields.length > 0;
      const primary_action_label = to_save ? __("Save") : __("Customize Form");
      const dialog_title = to_save ? __("New Kanban Board") : __("No Select Field Found");
      let primary_action = () => {
        if (to_save) {
          const values = dialog.get_values();
          make_kanban_board(values.board_name, values.field_name, values.project).then(
            () => dialog.hide(),
            (err) => frappe.msgprint(err)
          );
        } else {
          frappe.set_route("Form", "Customize Form", { doc_type: doctype });
        }
      };
      return new frappe.ui.Dialog({
        title: dialog_title,
        fields: dialog_fields,
        primary_action_label,
        primary_action
      });
    }
    function get_fields_for_dialog(select_fields) {
      if (!select_fields.length) {
        return [
          {
            fieldtype: "HTML",
            options: `
					<div>
						<p class="text-medium">
						${__(
              'No fields found that can be used as a Kanban Column. Use the Customize Form to add a Custom Field of type "Select".'
            )}
						</p>
					</div>
				`
          }
        ];
      }
      let fields = [
        {
          fieldtype: "Data",
          fieldname: "board_name",
          label: __("Kanban Board Name"),
          reqd: 1,
          description: ["Note", "ToDo"].includes(doctype) ? __("This Kanban Board will be private") : ""
        },
        {
          fieldtype: "Select",
          fieldname: "field_name",
          label: __("Columns based on"),
          options: select_fields.map((df) => ({ label: df.label, value: df.fieldname })),
          default: select_fields[0],
          reqd: 1
        }
      ];
      if (doctype === "Task") {
        fields.push({
          fieldtype: "Link",
          fieldname: "project",
          label: __("Project"),
          options: "Project"
        });
      }
      return fields;
    }
  };

  // frappe/public/js/frappe/views/inbox/inbox_view.js
  frappe.provide("frappe.views");
  frappe.views.InboxView = class InboxView extends frappe.views.ListView {
    static load_last_view() {
      const route = frappe.get_route();
      if (!route[3] && frappe.boot.email_accounts.length) {
        let email_account;
        if (frappe.boot.email_accounts[0].email_id == "All Accounts") {
          email_account = "All Accounts";
        } else {
          email_account = frappe.boot.email_accounts[0].email_account;
        }
        frappe.set_route("List", "Communication", "Inbox", email_account);
        return true;
      } else if (!route[3] || route[3] !== "All Accounts" && !is_valid(route[3])) {
        frappe.throw(
          __(
            "No email account associated with the User. Please add an account under User > Email Inbox."
          )
        );
      }
      return false;
      function is_valid(email_account) {
        return frappe.boot.email_accounts.find((d) => d.email_account === email_account);
      }
    }
    get view_name() {
      return "Inbox";
    }
    show() {
      super.show();
      this.save_view_user_settings({
        last_email_account: this.current_email_account
      });
    }
    setup_defaults() {
      super.setup_defaults();
      this.sort_by = this.view_user_settings.sort_by || "communication_date";
      this.sort_order = this.view_user_settings.sort_order || "desc";
      this.email_account = frappe.get_route()[3];
      this.page_title = this.email_account;
      this.filters = this.get_inbox_filters();
    }
    setup_columns() {
      this.columns = [];
      this.columns.push({
        type: "Subject",
        df: {
          label: __("Subject"),
          fieldname: "subject"
        }
      });
      this.columns.push({
        type: "Field",
        df: {
          label: this.is_sent_emails ? __("To") : __("From"),
          fieldname: this.is_sent_emails ? "recipients" : "sender"
        }
      });
    }
    get_seen_class(doc) {
      return Boolean(doc.seen) || JSON.parse(doc._seen || "[]").includes(frappe.session.user) ? "" : "bold";
    }
    get is_sent_emails() {
      const f = this.filter_area.get().find((filter) => filter[1] === "sent_or_received");
      return f && f[3] === "Sent";
    }
    render_header() {
      this.$result.find(".list-row-head").remove();
      this.$result.prepend(this.get_header_html());
    }
    render() {
      this.setup_columns();
      this.render_header();
      this.render_list();
      this.on_row_checked();
      this.render_count();
    }
    get_meta_html(email) {
      const attachment = email.has_attachment ? `<span class="fa fa-paperclip fa-large" title="${__("Has Attachments")}"></span>` : "";
      let link = "";
      if (email.reference_doctype && email.reference_doctype !== this.doctype) {
        link = `<a class="text-muted grey"
				href="${frappe.utils.get_form_link(email.reference_doctype, email.reference_name)}"
				title="${__("Linked with {0}", [email.reference_doctype])}">
				<i class="fa fa-link fa-large"></i>
			</a>`;
      }
      const communication_date = comment_when(email.communication_date, true);
      const status = email.status == "Closed" ? `<span class="fa fa-check fa-large" title="${__(email.status)}"></span>` : email.status == "Replied" ? `<span class="fa fa-mail-reply fa-large" title="${__(email.status)}"></span>` : "";
      return `
			<div class="level-item list-row-activity">
				${link}
				${attachment}
				${status}
				${communication_date}
			</div>
		`;
    }
    get_inbox_filters() {
      var email_account = this.email_account;
      var default_filters = [
        ["Communication", "communication_type", "=", "Communication", true],
        ["Communication", "communication_medium", "=", "Email", true]
      ];
      var filters = [];
      if (email_account === "Sent") {
        filters = default_filters.concat([
          ["Communication", "sent_or_received", "=", "Sent", true],
          ["Communication", "email_status", "not in", "Spam,Trash", true]
        ]);
      } else if (["Spam", "Trash"].includes(email_account)) {
        filters = default_filters.concat([
          ["Communication", "email_status", "=", email_account, true],
          ["Communication", "email_account", "in", frappe.boot.all_accounts, true]
        ]);
      } else {
        var op = "=";
        if (email_account == "All Accounts") {
          op = "in";
          email_account = frappe.boot.all_accounts;
        }
        filters = default_filters.concat([
          ["Communication", "sent_or_received", "=", "Received", true],
          ["Communication", "status", "=", "Open", true],
          ["Communication", "email_account", op, email_account, true],
          ["Communication", "email_status", "not in", "Spam,Trash", true]
        ]);
      }
      return filters;
    }
    get_no_result_message() {
      var email_account = this.email_account;
      var args;
      if (["Spam", "Trash"].includes(email_account)) {
        return __("No {0} mail", [email_account]);
      } else if (!email_account && !frappe.boot.email_accounts.length) {
        args = {
          doctype: "Email Account",
          msg: __("No Email Account"),
          label: __("New Email Account")
        };
      } else {
        args = {
          doctype: "Communication",
          msg: __("No Emails"),
          label: __("Compose Email")
        };
      }
      const html = frappe.model.can_create(args.doctype) ? `<p>${args.msg}</p>
			<p>
				<button class="btn btn-primary btn-sm btn-new-doc">
					${args.label}
				</button>
			</p>
			` : `<p>${__("No Email Accounts Assigned")}</p>`;
      return `
			<div class="msg-box no-border">
				${html}
			</div>
		`;
    }
    make_new_doc() {
      if (!this.email_account && !frappe.boot.email_accounts.length) {
        frappe.route_options = {
          email_id: frappe.session.user_email
        };
        frappe.new_doc("Email Account");
      } else {
        new frappe.views.CommunicationComposer();
      }
    }
  };

  // frappe/public/js/frappe/views/file/file_view.js
  frappe.provide("frappe.views");
  frappe.views.FileView = class FileView extends frappe.views.ListView {
    static load_last_view() {
      const route = frappe.get_route();
      if (route.length === 2) {
        const view_user_settings = frappe.get_user_settings("File", "File");
        frappe.set_route(
          "List",
          "File",
          view_user_settings.last_folder || frappe.boot.home_folder
        );
        return true;
      }
      return redirect_to_home_if_invalid_route();
    }
    get view_name() {
      return "File";
    }
    show() {
      if (!redirect_to_home_if_invalid_route()) {
        super.show();
      }
    }
    setup_view() {
      this.render_header();
      this.setup_events();
      this.$page.find(".layout-main-section-wrapper").addClass("file-view");
      this.add_file_action_buttons();
      this.page.add_button(__("Toggle Grid View"), () => {
        frappe.views.FileView.grid_view = !frappe.views.FileView.grid_view;
        this.refresh();
      });
    }
    setup_no_result_area() {
      this.$no_result = $(`<div class="no-result">
			<div class="breadcrumbs">${this.get_breadcrumbs_html()}</div>
			<div class="text-muted flex justify-center align-center">
				${this.get_no_result_message()}
			</div>
		</div>`).hide();
      this.$frappe_list.append(this.$no_result);
    }
    get_args() {
      let args = super.get_args();
      if (frappe.views.FileView.grid_view) {
        Object.assign(args, {
          order_by: `is_folder desc, ${this.sort_by} ${this.sort_order}`
        });
      }
      return args;
    }
    set_breadcrumbs() {
      const route = frappe.get_route();
      route.splice(-1);
      const last_folder = route[route.length - 1];
      if (last_folder === "File")
        return;
      frappe.breadcrumbs.add({
        type: "Custom",
        label: __("Home"),
        route: "/app/List/File/Home"
      });
    }
    setup_defaults() {
      return super.setup_defaults().then(() => {
        this.page_title = __("File Manager");
        const route = frappe.get_route();
        this.current_folder = route.slice(2).join("/") || "Home";
        this.filters = [["File", "folder", "=", this.current_folder, true]];
        this.order_by = this.view_user_settings.order_by || "file_name asc";
        this.menu_items = this.menu_items.concat(this.file_menu_items());
      });
    }
    file_menu_items() {
      return [
        {
          label: __("Home"),
          action: () => {
            frappe.set_route("List", "File", "Home");
          }
        },
        {
          label: __("New Folder"),
          action: () => {
            frappe.prompt(
              __("Name"),
              (values) => {
                if (values.value.indexOf("/") > -1) {
                  frappe.throw(__("Folder name should not include '/' (slash)"));
                }
                const data = {
                  file_name: values.value,
                  folder: this.current_folder
                };
                frappe.call({
                  method: "frappe.core.api.file.create_new_folder",
                  args: data
                });
              },
              __("Enter folder name"),
              __("Create")
            );
          }
        },
        {
          label: __("Import Zip"),
          action: () => {
            new frappe.ui.FileUploader({
              folder: this.current_folder,
              restrictions: {
                allowed_file_types: [".zip"]
              },
              on_success: (file) => {
                frappe.show_alert(__("Unzipping files..."));
                frappe.call("frappe.core.api.file.unzip_file", {
                  name: file.name
                }).then((r) => {
                  if (r.message) {
                    frappe.show_alert(__("Unzipped {0} files", [r.message]));
                  }
                });
              }
            });
          }
        }
      ];
    }
    add_file_action_buttons() {
      this.$cut_button = this.page.add_button(__("Cut"), () => {
        frappe.file_manager.cut(this.get_checked_items(), this.current_folder);
        this.$checks.parents(".file-wrapper").addClass("cut");
      }).hide();
      this.$paste_btn = this.page.add_button(__("Paste"), () => frappe.file_manager.paste(this.current_folder)).hide();
      this.page.add_actions_menu_item(__("Export as zip"), () => {
        let docnames = this.get_checked_items(true);
        if (docnames.length) {
          open_url_post("/api/method/frappe.core.api.file.zip_files", {
            files: JSON.stringify(docnames)
          });
        }
      });
    }
    set_fields() {
      this.fields = this.meta.fields.filter((df) => frappe.model.is_value_type(df.fieldtype) && !df.hidden).map((df) => df.fieldname).concat(["name", "modified", "creation"]);
    }
    prepare_data(data) {
      super.prepare_data(data);
      this.data = this.data.map((d) => this.prepare_datum(d));
      const { sort_by } = this.sort_selector;
      if (sort_by === "file_name") {
        this.data.sort((a, b) => {
          if (a.is_folder && !b.is_folder) {
            return -1;
          }
          if (!a.is_folder && b.is_folder) {
            return 1;
          }
          return 0;
        });
      }
    }
    prepare_datum(d) {
      let icon_class = "";
      let type = "";
      if (d.is_folder) {
        icon_class = "folder-normal";
        type = "folder";
      } else if (frappe.utils.is_image_file(d.file_name)) {
        icon_class = "image";
        type = "image";
      } else {
        icon_class = "file";
        type = "file";
      }
      let title = d.file_name || d.file_url;
      title = title.slice(0, 60);
      d._title = title;
      d.icon_class = icon_class;
      d._type = type;
      d.subject_html = `
			${frappe.utils.icon(icon_class)}
			<span>${title}</span>
			${d.is_private ? '<i class="fa fa-lock fa-fw text-warning"></i>' : ""}
		`;
      return d;
    }
    before_render() {
      super.before_render();
      frappe.model.user_settings.save("File", "grid_view", frappe.views.FileView.grid_view);
      this.save_view_user_settings({
        last_folder: this.current_folder
      });
    }
    render() {
      this.$result.empty().removeClass("file-grid-view");
      if (frappe.views.FileView.grid_view) {
        this.render_grid_view();
      } else {
        super.render();
        this.render_header();
      }
    }
    after_render() {
    }
    render_list() {
      if (frappe.views.FileView.grid_view) {
        this.render_grid_view();
      } else {
        super.render_list();
      }
    }
    render_grid_view() {
      let html = this.data.map((d) => {
        const icon_class = d.icon_class + "-large";
        let file_body_html = d._type == "image" ? `<div class="file-image"><img src="${d.file_url}" alt="${d.file_name}"></div>` : frappe.utils.icon(icon_class, {
          width: "40px",
          height: "45px"
        });
        const name = escape(d.name);
        const draggable = d.type == "Folder" ? false : true;
        return `
				<a href="${this.get_route_url(d)}"
					draggable="${draggable}" class="file-wrapper ellipsis" data-name="${name}">
					<div class="file-header">
						<input class="level-item list-row-checkbox hidden-xs" type="checkbox" data-name="${name}">
					</div>
					<div class="file-body">
						${file_body_html}
					</div>
					<div class="file-footer">
						<div class="file-title ellipsis">${d._title}</div>
						<div class="file-creation">${this.get_creation_date(d)}</div>
					</div>
				</a>
			`;
      }).join("");
      this.$result.addClass("file-grid-view");
      this.$result.empty().html(
        `<div class="file-grid">
				${html}
			</div>`
      );
    }
    get_breadcrumbs_html() {
      const route = frappe.get_route();
      const folders = route.slice(2);
      return folders.map((folder, i2) => {
        if (i2 === folders.length - 1) {
          return `<span>${folder}</span>`;
        }
        const route2 = folders.reduce((acc, curr, j) => {
          if (j <= i2) {
            acc += "/" + curr;
          }
          return acc;
        }, "/app/file/view");
        return `<a href="${route2}">${folder}</a>`;
      }).join("&nbsp;/&nbsp;");
    }
    get_header_html() {
      const breadcrumbs_html = this.get_breadcrumbs_html();
      let header_selector_html = !frappe.views.FileView.grid_view ? `<input class="level-item list-check-all hidden-xs" type="checkbox" title="${__(
        "Select All"
      )}">` : "";
      let header_columns_html = !frappe.views.FileView.grid_view ? `<div class="list-row-col ellipsis hidden-xs">
					<span>${__("Size")}</span>
				</div>
				<div class="list-row-col ellipsis hidden-xs">
					<span>${__("Type")}</span>
				</div>
				<div class="list-row-col ellipsis hidden-xs">
					<span>${__("Created")}</span>
				</div>` : "";
      let subject_html = `
			<div class="list-row-col list-subject level">
				${header_selector_html}
				<span class="level-item">${breadcrumbs_html}</span>
			</div>
			${header_columns_html}
		`;
      return this.get_header_html_skeleton(subject_html, '<span class="list-count"></span>');
    }
    get_route_url(file) {
      return file.is_folder ? "/app/List/File/" + file.name : this.get_form_link(file);
    }
    get_creation_date(file) {
      const [date] = file.creation.split(" ");
      let created_on;
      if (date === frappe.datetime.now_date()) {
        created_on = comment_when(file.creation);
      } else {
        created_on = frappe.datetime.str_to_user(date);
      }
      return created_on;
    }
    get_left_html(file) {
      file = this.prepare_datum(file);
      const file_size = file.file_size ? frappe.form.formatters.FileSize(file.file_size) : "";
      const route_url = this.get_route_url(file);
      return `
			<div class="list-row-col ellipsis list-subject level">
				<span class="level-item file-select">
					<input class="list-row-checkbox"
						type="checkbox" data-name="${file.name}">
				</span>
				<span class="level-item  ellipsis" title="${frappe.utils.escape_html(file.file_name)}">
					<a class="ellipsis" href="${route_url}" title="${frappe.utils.escape_html(file.file_name)}">
						${file.subject_html}
					</a>
				</span>
			</div>
			<div class="list-row-col ellipsis hidden-xs text-muted">
				<span>${file_size}</span>
			</div>
			<div class="list-row-col ellipsis hidden-xs text-muted">
				<span>${file.file_type || ""}</span>
			</div>
			<div class="list-row-col ellipsis hidden-xs text-muted">
				<span>${this.get_creation_date(file)}</span>
			</div>
		`;
    }
    get_right_html(file) {
      return `
			<div class="level-item list-row-activity">
				${comment_when(file.modified)}
			</div>
		`;
    }
    setup_events() {
      super.setup_events();
      this.setup_drag_events();
    }
    setup_drag_events() {
      this.$result.on("dragstart", ".files .file-wrapper", (e) => {
        e.stopPropagation();
        e.originalEvent.dataTransfer.setData("Text", $(e.currentTarget).attr("data-name"));
        e.target.style.opacity = "0.4";
        frappe.file_manager.cut(
          [{ name: $(e.currentTarget).attr("data-name") }],
          this.current_folder
        );
      });
      this.$result.on(
        "dragover",
        (e) => {
          e.preventDefault();
        },
        false
      );
      this.$result.on("dragend", ".files .file-wrapper", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.style.opacity = "1";
      });
      this.$result.on("drop", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const $el = $(e.target).parents(".file-wrapper");
        let dataTransfer = e.originalEvent.dataTransfer;
        if (!dataTransfer)
          return;
        if (dataTransfer.files && dataTransfer.files.length > 0) {
          new frappe.ui.FileUploader({
            files: dataTransfer.files,
            folder: this.current_folder
          });
        } else if (dataTransfer.getData("Text")) {
          if ($el.parents(".folders").length !== 0) {
            const file_name = dataTransfer.getData("Text");
            const folder_name = decodeURIComponent($el.attr("data-name"));
            frappe.file_manager.paste(folder_name);
            frappe.show_alert(`File ${file_name} moved to ${folder_name}`);
          }
        }
      });
    }
    toggle_result_area() {
      super.toggle_result_area();
      this.toggle_cut_paste_buttons();
    }
    on_row_checked() {
      super.on_row_checked();
      this.toggle_cut_paste_buttons();
    }
    toggle_cut_paste_buttons() {
      const hide_paste_btn = !frappe.file_manager.can_paste || frappe.file_manager.old_folder === this.current_folder;
      const hide_cut_btn = !(this.$checks && this.$checks.length > 0);
      this.$paste_btn.toggle(!hide_paste_btn);
      this.$cut_button.toggle(!hide_cut_btn);
    }
  };
  frappe.views.FileView.grid_view = frappe.get_user_settings("File").grid_view || false;
  function redirect_to_home_if_invalid_route() {
    const route = frappe.get_route();
    if (route[2] === "List") {
      frappe.set_route("List", "File", "Home");
      return true;
    }
    return false;
  }

  // frappe/public/js/list.bundle.js
  var import_treeview = __toESM(require_treeview());

  // frappe/public/js/frappe/views/interaction.js
  frappe.provide("frappe.views");
  frappe.provide("frappe.interaction_settings");
  frappe.views.InteractionComposer = class InteractionComposer {
    constructor(opts) {
      $.extend(this, opts);
      this.make();
    }
    make() {
      let me2 = this;
      me2.dialog = new frappe.ui.Dialog({
        title: me2.title || me2.subject || __("New Activity"),
        no_submit_on_enter: true,
        fields: me2.get_fields(),
        primary_action_label: __("Create"),
        primary_action: function() {
          me2.create_action();
        }
      });
      $(document).on("upload_complete", function(event, attachment) {
        if (me2.dialog.display) {
          let wrapper = $(me2.dialog.fields_dict.select_attachments.wrapper);
          let checked_items = wrapper.find("[data-file-name]:checked").map(function() {
            return $(this).attr("data-file-name");
          });
          me2.render_attach();
          checked_items.push(attachment.name);
          $.each(checked_items, function(i2, filename) {
            wrapper.find('[data-file-name="' + filename + '"]').prop("checked", true);
          });
        }
      });
      me2.prepare();
      me2.dialog.show();
    }
    get_fields() {
      let me2 = this;
      let interaction_docs = Object.keys(get_doc_mappings());
      return [
        {
          label: __("Reference"),
          fieldtype: "Select",
          fieldname: "interaction_type",
          options: interaction_docs,
          reqd: 1,
          onchange: () => {
            let values = me2.get_values();
            me2.get_fields().forEach((field) => {
              if (field.fieldname != "interaction_type") {
                me2.dialog.set_df_property(field.fieldname, "reqd", 0);
                me2.dialog.set_df_property(field.fieldname, "hidden", 0);
              }
            });
            me2.set_reqd_hidden_fields(values);
            me2.get_event_categories();
          }
        },
        {
          label: __("Category"),
          fieldtype: "Select",
          fieldname: "category",
          options: "",
          hidden: 1
        },
        { label: __("Public"), fieldtype: "Check", fieldname: "public", default: "0" },
        { fieldtype: "Column Break" },
        { label: __("Date"), fieldtype: "Datetime", fieldname: "due_date" },
        {
          label: __("Assigned To"),
          fieldtype: "Link",
          fieldname: "assigned_to",
          options: "User"
        },
        { fieldtype: "Section Break" },
        { label: __("Summary"), fieldtype: "Data", fieldname: "summary" },
        { fieldtype: "Section Break" },
        { fieldtype: "Text Editor", fieldname: "description" },
        { fieldtype: "Section Break" },
        {
          label: __("Select Attachments"),
          fieldtype: "HTML",
          fieldname: "select_attachments"
        }
      ];
    }
    get_event_categories() {
      let me2 = this;
      frappe.model.with_doctype("Event", () => {
        let categories = frappe.meta.get_docfield("Event", "event_category").options.split("\n");
        me2.dialog.get_input("category").empty().add_options(categories);
      });
    }
    prepare() {
      this.setup_attach();
    }
    set_reqd_hidden_fields(values) {
      let me2 = this;
      if (values && "interaction_type" in values) {
        let doc_mapping = get_doc_mappings();
        doc_mapping[values.interaction_type]["reqd_fields"].forEach((value) => {
          me2.dialog.set_df_property(value, "reqd", 1);
        });
        doc_mapping[values.interaction_type]["hidden_fields"].forEach((value) => {
          me2.dialog.set_df_property(value, "hidden", 1);
        });
      }
    }
    setup_attach() {
      var fields = this.dialog.fields_dict;
      var attach = $(fields.select_attachments.wrapper);
      if (!this.attachments) {
        this.attachments = [];
      }
      let args = {
        folder: "Home/Attachments",
        on_success: (attachment) => this.attachments.push(attachment)
      };
      if (this.frm) {
        args = {
          doctype: this.frm.doctype,
          docname: this.frm.docname,
          folder: "Home/Attachments",
          on_success: (attachment) => {
            this.frm.attachments.attachment_uploaded(attachment);
            this.render_attach();
          }
        };
      }
      $(
        "<h6 class='text-muted add-attachment' style='margin-top: 12px; cursor:pointer;'>" + __("Select Attachments") + "</h6><div class='attach-list'></div>			<p class='add-more-attachments'>			<a class='text-muted small'><i class='octicon octicon-plus' style='font-size: 12px'></i> " + __("Add Attachment") + "</a></p>"
      ).appendTo(attach.empty());
      attach.find(".add-more-attachments a").on("click", () => new frappe.ui.FileUploader(args));
      this.render_attach();
    }
    render_attach() {
      let fields = this.dialog.fields_dict;
      let attach = $(fields.select_attachments.wrapper).find(".attach-list").empty();
      let files = [];
      if (this.attachments && this.attachments.length) {
        files = files.concat(this.attachments);
      }
      if (cur_frm) {
        files = files.concat(cur_frm.get_files());
      }
      if (files.length) {
        $.each(files, function(i2, f) {
          if (!f.file_name)
            return;
          f.file_url = frappe.urllib.get_full_url(f.file_url);
          $(
            repl(
              '<p class="checkbox"><label><span><input type="checkbox" data-file-name="%(name)s"></input></span><span class="small">%(file_name)s</span> <a href="%(file_url)s" target="_blank" class="text-muted small"><i class="fa fa-share" style="vertical-align: middle; margin-left: 3px;"></i></label></p>',
              f
            )
          ).appendTo(attach);
        });
      }
    }
    create_action() {
      let me2 = this;
      let btn = me2.dialog.get_primary_btn();
      let form_values = this.get_values();
      if (!form_values)
        return;
      let selected_attachments = $.map(
        $(me2.dialog.wrapper).find("[data-file-name]:checked"),
        function(element) {
          return $(element).attr("data-file-name");
        }
      );
      me2.create_interaction(btn, form_values, selected_attachments);
    }
    get_values() {
      let me2 = this;
      let values = this.dialog.get_values(true);
      if (values) {
        values["reference_doctype"] = me2.frm.doc.doctype;
        values["reference_document"] = me2.frm.doc.name;
      }
      return values;
    }
    create_interaction(btn, form_values, selected_attachments) {
      let me2 = this;
      me2.dialog.hide();
      let field_map = get_doc_mappings();
      let interaction_values = {};
      Object.keys(form_values).forEach((value) => {
        interaction_values[field_map[form_values.interaction_type]["field_map"][value]] = form_values[value];
      });
      if ("event_type" in interaction_values) {
        interaction_values["event_type"] = form_values.public == 1 ? "Public" : "Private";
      }
      if (interaction_values["doctype"] == "Event") {
        interaction_values["event_participants"] = [
          {
            reference_doctype: form_values.reference_doctype,
            reference_docname: form_values.reference_document
          }
        ];
      }
      if (!("owner" in interaction_values)) {
        interaction_values["owner"] = frappe.session.user;
      }
      if (!("assigned_by" in interaction_values) && interaction_values["doctype"] == "ToDo") {
        interaction_values["assigned_by"] = frappe.session.user;
      }
      return frappe.call({
        method: "frappe.client.insert",
        args: { doc: interaction_values },
        btn,
        callback: function(r) {
          if (!r.exc) {
            frappe.show_alert({
              message: __("{0} created successfully", [form_values.interaction_type]),
              indicator: "green"
            });
            if ("assigned_to" in form_values) {
              me2.assign_document(r.message, form_values["assigned_to"]);
            }
            if (selected_attachments) {
              me2.add_attachments(r.message, selected_attachments);
            }
            if (cur_frm) {
              cur_frm.reload_doc();
            }
          } else {
            frappe.msgprint(
              __("There were errors while creating the document. Please try again.")
            );
          }
        }
      });
    }
    assign_document(doc, assignee) {
      if (doc.doctype != "ToDo") {
        frappe.call({
          method: "frappe.desk.form.assign_to.add",
          args: {
            doctype: doc.doctype,
            name: doc.name,
            assign_to: JSON.stringify([assignee])
          },
          callback: function(r) {
            if (!r.exc) {
              frappe.show_alert({
                message: __("The document has been assigned to {0}", [assignee]),
                indicator: "green"
              });
              return;
            } else {
              frappe.show_alert({
                message: __("The document could not be correctly assigned"),
                indicator: "orange"
              });
              return;
            }
          }
        });
      }
    }
    add_attachments(doc, attachments) {
      frappe.call({
        method: "frappe.utils.file_manager.add_attachments",
        args: {
          doctype: doc.doctype,
          name: doc.name,
          attachments: JSON.stringify(attachments)
        },
        callback: function(r) {
          if (!r.exc) {
            return;
          } else {
            frappe.show_alert({
              message: __(
                "The attachments could not be correctly linked to the new document"
              ),
              indicator: "orange"
            });
            return;
          }
        }
      });
    }
  };
  function get_doc_mappings() {
    return {
      Event: {
        field_map: {
          interaction_type: "doctype",
          summary: "subject",
          description: "description",
          category: "event_category",
          due_date: "starts_on",
          public: "event_type"
        },
        reqd_fields: ["summary", "due_date"],
        hidden_fields: []
      },
      ToDo: {
        field_map: {
          interaction_type: "doctype",
          description: "description",
          due_date: "date",
          reference_doctype: "reference_type",
          reference_document: "reference_name",
          assigned_to: "allocated_to"
        },
        reqd_fields: ["description"],
        hidden_fields: ["public", "category"]
      }
    };
  }

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/views/image/image_view_item_row.html
  frappe.templates["image_view_item_row"] = `<div class="image-view-item has-checkbox ellipsis">
	<div class="image-view-header doclist-row">
		<div class="list-value">
		{{ subject }}
		</div>
	</div>
	<!-- Image -->
	<div class="image-view-body">
		<a  data-name="{{ data.name }}"
			title="{{ data.name }}"
			href="/app/Form/{{ data.doctype }}/{{ data.name }}"
		>
			<div class="image-field"
				data-name="{{ data.name }}"
				style="
				{% if (!data._image_url) { %}
					background-color: {{ color }};
				{% } %}
				border: 0px;"
			>
				{% if (!data._image_url) { %}
				<span class="placeholder-text">
					{%= frappe.get_abbr(data._title) %}
				</span>
				{% } %}
				{% if (data._image_url) { %}
				<img data-name="{{ data.name }}" src="{{ data._image_url }}" alt="{{data.title}}">
				{% } %}
				<button class="btn btn-default zoom-view" data-name="{{data.name}}">
					<i class="fa fa-search-plus"></i>
				</button>
			</div>
		</a>
	</div>
</div>
`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/views/image/photoswipe_dom.html
  frappe.templates["photoswipe_dom"] = `

<!-- http://photoswipe.com/documentation/getting-started.html -->
<!-- Root element of PhotoSwipe. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

	<!-- Background of PhotoSwipe.
		 It's a separate element as animating opacity is faster than rgba(). -->
	<div class="pswp__bg"></div>

	<!-- Slides wrapper with overflow:hidden. -->
	<div class="pswp__scroll-wrap">

		<!-- Container that holds slides.
			PhotoSwipe keeps only 3 of them in the DOM to save memory.
			Don't modify these 3 pswp__item elements, data is added later on. -->
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>

		<div class="pswp__more-items">

		</div>

		<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
		<div class="pswp__ui pswp__ui--hidden">

			<div class="pswp__top-bar">

				<!--  Controls are self-explanatory. Order can be changed. -->

				<div class="pswp__counter"></div>

				<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

				<button class="pswp__button pswp__button--share" title="Share"></button>

				<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

				<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

				<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
				<!-- element will get class pswp__preloader--active when preloader is running -->
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
					  <div class="pswp__preloader__cut">
						<div class="pswp__preloader__donut"></div>
					  </div>
					</div>
				</div>
			</div>

			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div>
			</div>

			<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
			</button>

			<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
			</button>

			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>

		</div>

	</div>

</div>`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/views/kanban/kanban_board.html
  frappe.templates["kanban_board"] = `<div class="kanban">
	<div class="kanban-column add-new-column">
		<div class="kanban-column-title compose-column">
			<a> + {{ __("Add Column") }}</a>
		</div>
		<form class="compose-column-form kanban-column-title">
			<input class="new-column-title" name="title" type="text" autocomplete="off">
		</form>
	</div>
	<div class="kanban-empty-state text-muted text-center" style="display: none;">
		{{ __("Loading...") }}
	</div>
</div>`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/views/kanban/kanban_column.html
  frappe.templates["kanban_column"] = `<div class="kanban-column" data-column-value="{{title}}">
	<div class="kanban-column-header">
		<span class="kanban-column-title">
			<span class="indicator-pill {{indicator}}"></span>
			<span class="kanban-title ellipsis" title="{{title}}">{{ __(title) }}</span>
		</span>
		<div class="column-options dropdown pull-right">
			<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<svg class="icon icon-sm">
					<use href="#icon-dot-horizontal"></use>
				</svg>
			</a>
			<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
				<li><a class="dropdown-item" data-action="archive">{{ __("Archive") }}</a></li>
			</ul>
		</div>
	</div>
	<div class="add-card">
		<div class="ellipsis">
			+ {{ __("Add {0}", [__(doctype)]) }}
		</div>
	</div>
	<div class="kanban-card new-card-area">
		<textarea name="title"></textarea>
	</div>
	<div class="kanban-cards">
	</div>
</div>`;

  // frappe-html:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/frappe/views/kanban/kanban_card.html
  frappe.templates["kanban_card"] = `<div class="kanban-card-wrapper {{ disable_click }}" data-name="{{encodeURIComponent(name)}}">
	<div class="kanban-card content">
		{% if(image_url) { %}
		<div class="kanban-image">
			<img  src="{{image_url}}" alt="{{title}}">
		</div>
		{% } %}
		<div class="kanban-card-body">
			<div class="kanban-title-area">
				<a href="{{ form_link }}">
					<div class="kanban-card-title ellipsis" title="{{title}}">
						{{ title }}
					</div>
				</a>
				<br>
				<div class="kanban-card-doc text-muted">
					{{ doc_content }}
				</div>
			</div>
			<div class="kanban-card-meta">
			</div>
		</div>
	</div>
</div>
`;
})();
/* @preserve
for translation, don't remove
__("List View") __("Report View") __("Dashboard View") __("Gantt View"),
__("Kanban View") __("Calendar View") __("Image View") __("Inbox View"),
__("Tree View") __("Map View") */
//# sourceMappingURL=list.bundle.S2LMQOWV.js.map

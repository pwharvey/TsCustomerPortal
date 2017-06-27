/*!
 * Data Aquarium Framework - Touch UI
 * Copyright 2008-2016 Code On Time LLC; Licensed MIT; http://codeontime.com/license
 */
(function() {
    function kr() {
        var t = h._toolbarHeight;
        return t || (t = h._toolbarHeight = n.toolbar().outerHeight()), t
    }

    function wv() {
        return s && ($(document.activeElement).is(":input") || l.height() < yf)
    }

    function bv(n, t) {
        var i = n.extension().viewStyle(),
            u = i == "List" || i == "Cards";
        u && t == null && (t = r.activePage.find(".app-listview .ui-li-has-thumb").length > 0);
        o.promoteActions && (i == "Map" ? (e.is(".app-promo-position-right") && e.removeClass("app-promo-position-right"), nu() ? e.is(".app-promo-position-left") && e.removeClass("app-promo-position-left") : e.is(".app-promo-position-left") || e.addClass("app-promo-position-left")) : (e.is(".app-promo-position-left") && e.removeClass("app-promo-position-left"), u && t || n.get_showMultipleSelection() ? e.is(".app-promo-position-right") || e.addClass("app-promo-position-right") : e.is(".app-promo-position-right") && e.removeClass("app-promo-position-right")))
    }

    function wf(n) {
        $(document).one("pageready.app", function(t) {
            t.namespace == "app" && n()
        })
    }

    function wi(n) {
        return n || (n = r.activePage), n.is(".app-page-modal")
    }

    function bi(n) {
        n && typeof n == "function" && wf(n);
        b = !0;
        es.go(-1)
    }

    function er() {}

    function kv(t) {
        var i = typeof t == "string";
        n.infoView($app.find(i ? t : t.id), i)
    }

    function bk() {
        return
    }

    function tc(n, t) {
        n._syncKey = t;
        n._selectedKey = t
    }

    function kk(t) {
        var i = t._controller;
        $(n._pages).each(function() {
            var r = this,
                n = r.dataView;
            n && r.id != t._id && !n.get_isForm() && n._syncKey == null && (n._controller == i ? n._syncKey = !0 : $(n._fields).each(function() {
                if (this.ItemsDataController == i) return n._syncKey = !0, !1
            }))
        })
    }

    function dv(n) {
        var i = l.width(),
            t = l.height();
        i = Math.min(i * .75, 900);
        i > 1024 && (t -= kr() * 2);
        t = Math.min(t * .8, 768);
        n.addClass("app-page-modal ui-overlay-shadow").css({
            "padding-top": 0,
            "min-height": t,
            height: t,
            top: "50%",
            "margin-top": -t / 2,
            width: i,
            left: "50%",
            "margin-left": -i / 2
        });
        n.find(".app-wrapper").css({
            top: 0,
            "min-height": 0,
            height: t
        });
        o.pageTransition != "none" && n.addClass("app-page-modal-transition")
    }

    function dk() {
        return ko >= 144
    }

    function ki(n) {
        return yi && yi.x || n
    }

    function ke(n) {
        return yi && yi.y || n
    }

    function gv(n) {
        var t = n.find(".ui-popup-arrow-container");
        return n.outerHeight() + (t.length ? t.height() / 2 : 0) + 5
    }

    function bf(n, t) {
        if (n.multiSelect()) {
            var i;
            t || (t = (d() == n._id ? r.activePage : r.activePage.find("#" + n._id + "_echo")).find(".app-listview .ui-btn.app-selected"), i = !0);
            t.is(".app-checked") || (n._selectedKeyList.length && rl(n, i), el(n, t))
        }
    }

    function gk(t) {
        function l() {
            cf && (cf(), cf = null, i && i.returnCallback && (i.returnCallback(), i.returnCallback = null))
        }
        var i, u, c, h, e;
        if (ht = !1, k(), th(!1), pp(), tr(100), setTimeout(function() {
                li();
                yc()
            }, 200), i = n.pageInfo(), c = $.Event("show.dataview.app"), i ? (i.initCallback ? (i.initCallback(), i.initCallback = null) : l(), c.dataView = i.dataView) : gc() && l(), $(document).trigger(c), n.busy(!1), b || (i && i && (u = i.dataView, u && u._syncKey && (u._syncKey == !0 ? u.sync() : u.sync(u._syncKey), u._syncKey = null)), r.activePage.find(".app-echo").each(function() {
                var t = $(this).attr("data-for"),
                    n = f.find(t);
                n._syncKey && (n._syncKey == !0 ? dataview.sync() : n.sync(n._syncKey), n._syncKey = null)
            })), t.toPage && t.prevPage && $(t.toPage).attr("id") == $(t.prevPage).attr("id")) return !1;
        o && (th(!1), di(), s || $(r.activePage).find(".app-wrapper").focus());
        ci();
        yu();
        hr();
        or();
        n.busy(!1);
        h = t.prevPage;
        e = t.toPage;
        h && (t.options.reverse ? wi(h) && !wi(e) && (e.css("display", ""), h.css("transition", "none").removeClass("app-page-modal-active").css({
            transition: "",
            display: ""
        })) : (gr(w()), wi(e) && (uo(h.css("display", "block")), uo(e), e.css("padding-top", 0).addClass("app-page-modal-active"))));
        $(document).trigger("pageready.app");
        i && i.dataView && bv(i.dataView);
        it(!1, 0);
        ir();
        wt(!0)
    }

    function nd(n, t) {
        var c = n.get_view(),
            h, r, i, u = [],
            e = {},
            o, s = [];
        return $(n._expressions).each(function() {
            var n = this;
            n.Scope == 2 && s.push(n.Target)
        }), $(n._categories).each(function() {
            var i = this,
                t = i.Wizard,
                n;
            t ? o : t = o ? "_after_" : "_before_";
            n = e[t];
            n || (n = {
                text: t,
                categories: []
            }, e[t] = n, u.push(n));
            n.categories.push(i)
        }), $(u).each(function() {
            var t = this,
                i = [],
                r = {},
                u = {};
            $(t.categories).each(function() {
                var n = this,
                    e = n.Tab,
                    t = r["t_" + e],
                    f, o = {
                        id: n.Id,
                        headerText: n.HeaderText,
                        desc: n.Description,
                        collapsed: n.Collapsed,
                        fields: []
                    };
                t ? n.NewColumn ? (f = {
                    categories: []
                }, t.columns.push(f)) : f = t.columns[t.columns.length - 1] : (f = {
                    categories: []
                }, t = {
                    text: n.Tab,
                    columns: [f]
                }, r["t_" + e] = t, i.push(t));
                u[n.Index] = o;
                f.categories.push(o)
            });
            $(n._fields).each(function() {
                var n = this,
                    t = u[n.CategoryIndex];
                t && t.fields.push(n)
            });
            t.tabList = i
        }), i = ['<div data-layout="form" data-layout-size="' + hs(t) + '">'], h = n.editRow(), $(u).each(function() {
            var e = this,
                o = e.tabList,
                u = o.length > 1,
                h = e.text,
                c = !h.match(/^\_(before|after)\_$/);
            c && i.push('<div data-container="wizard" data-wizard-step="' + f.htmlAttributeEncode(h) + '">');
            u && i.push('<div data-container="tabset">');
            $(o).each(function() {
                var o = this,
                    h = o.columns,
                    e = o.columns.length > 1,
                    c;
                u && i.push('<div data-container="tab" data-tab-text="' + f.htmlAttributeEncode(o.text) + '">');
                $(h).each(function() {
                    var o = this,
                        u = 100 / h.length - 1,
                        f = e ? t * u / 100 : t;
                    e && f <= 284 && (c = !0, e = !1);
                    e && i.push('<div data-container="column" style="width:' + u + '%">');
                    $(o.categories).each(function() {
                        var t = this,
                            u = t.desc,
                            e = u && u.replace(/\{([\w+\_]+)\}/g, '<span data-control="field" data-field="$1" data-read-only="true"><span class="app-control-inner">&#160;<\/span><\/span>'),
                            o = e && n._formatViewText(fv.DefaultCategoryDescriptions[e], !0, e);
                        i.push('<div data-container="collapsible" data-wrap="' + (f <= 420 ? "true" : "false") + '" data-header-text="' + (t.headerText || "none") + '"' + (t.collapsed ? 'data-collapsed="true" ' : "") + (s.indexOf(t.id) != -1 ? ' data-visibility="c:' + t.id + '"' : "") + ">");
                        u && (i.push('<div data-container="row">'), i.push('<div data-control="description"><span class="app-control-inner">' + o + "<\/span><\/div>"), i.push("<\/div>"));
                        $(t.fields).each(function() {
                            var t = this,
                                u = t.Type == "DataView",
                                n = t.Name;
                            i.push('<div data-container="row" data-visibility="f:' + n + '">');
                            u || i.push('<span data-control="label" data-field="' + n + '"><span class="app-control-inner">' + n + "<\/span><\/span>");
                            i.push('<span data-control="' + (u ? "dataview" : "field") + '" data-field="' + n + '"><span class="app-control-inner">[' + n + "]<\/span><\/span>");
                            i.push("<\/div>");
                            r || (r = t)
                        });
                        i.push("<\/div>")
                    });
                    e && i.push("<\/div>")
                });
                u && i.push("<\/div>")
            });
            u && i.push("<\/div>");
            c && i.push("<\/div>")
        }), r && !n.tagged("sticky-header-form-disabled") && i.splice(1, 0, '<div data-container="stickyheader"><span data-control="field" data-field="' + r.Name + '" data-read-only="true"><span class="app-control-inner">&#160;<\/span><\/span><\/div>'), i.push("<\/div>"), i = i.join("\n")
    }

    function hs(n) {
        var t = "xl";
        return n < 480 ? t = "tn" : n < 640 ? t = "xxs" : n < 768 ? t = "xs" : n < 992 ? t = "sm" : n < 1199 ? t = "md" : n < 1440 && (t = "lg"), t
    }

    function td(n, t) {
        var c = hs(t),
            l = n._controller + "_" + n._viewId + "_" + n._filterFields + "_layout_" + c,
            u = f.cache[l],
            e = n._survey,
            r, i, o, s, h, a, v;
        return u || (r = n.get_view().Layout, r && (o = $("<div>" + r + "<\/div>"), s = o.find("[data-layout]"), s.length ? (h = ["tn", "xxs", "xs", "sm", "md", "lg", "xl"], v = h.indexOf(c), s.each(function() {
            var t = $(this),
                r = t.attr("data-layout-size") || "tn",
                n = h.indexOf(r);
            n != -1 && n <= v && (!i || n > a) && (i = t, a = n)
        })) : (i = $('<div data-layout="form"><\/div>'), $(o.html()).appendTo(i))), i ? (i.find("[data-control]").each(function() {
            var n = $(this),
                t = n.contents().remove();
            t.appendTo($('<span class="app-control-inner"/>').appendTo(n))
        }), r = $("<div><\/div>").append(i.clone()).html()) : r = nd(n, t), u = {
            html: r
        }, e && (e.dynamic || !e.cache) || (f.cache[l] = u)), i = $(u.html), i.attr("data-input-container", n._id), n._isWizard = i.find('[data-container="wizard"]').length > 0, i
    }

    function id(n, i, r) {
        function s(n, t, i) {
            if (n.getAttribute) {
                var v = n.getAttribute("data-control"),
                    l = !v && n.getAttribute("data-container"),
                    a, y = n.childNodes,
                    o, p, r;
                for (v && t ? (f.push(n), o = $(n), p = o.offset(), r = {
                        self: o,
                        parent: i,
                        type: v,
                        children: []
                    }, c.push(r), i.children.push(r), o.data("node", r)) : l && (u.push(n), o = $(n), r = {
                        self: o,
                        children: [],
                        type: l
                    }, o.data("node", r), h.push(r), t ? (r.parent = i, i.children.push(r)) : e.push(r)), a = 0; a < y.length; a++) s(y[a], l ? n : t, l ? r : i, null)
            }
        }
        var a = n._allFields,
            v = n.get_viewType() == "Form",
            y = r.offset(),
            u = [],
            h = [],
            f = [],
            c = [],
            e = [],
            p = w(r),
            l = n.extension(),
            o = l.editing();
        r.data("prepared", !0);
        r.find("[data-visible-when]").each(function(t) {
            var i = $(this),
                r = n._expressions,
                e = i.attr("data-visible-when"),
                u = i.parent().is('[data-container="wizard"]'),
                f = {
                    Scope: u ? 2 : 7,
                    Target: t,
                    Test: e,
                    Type: 1,
                    ViewId: n._viewId
                };
            r || (r = n._expressions = []);
            r.push(f);
            i.attr({
                "data-visible-when": null,
                "data-visibility": (u ? "c:" : "v:") + f.Target
            })
        });
        t.evaluate({
            dataView: n,
            row: i,
            container: r
        });
        s(r[0]);
        u = $(u);
        f = $(f);
        r.data("rootNodes", e).attr("data-state", o ? "write" : "read");
        ny(n, i, o, e)
    }

    function ny(i, r, u, f) {
        $(f).each(function(f) {
            var e = this,
                o = e.self,
                h, c, y, l, a, v;
            !e.ready && o.is(":visible") && (e.ready = !0, e.type == "tabset" ? (h = [], $(e.children).each(function() {
                var n = this;
                n.type == "tab" && h.push({
                    text: n.self.attr("data-tab-text"),
                    content: n.self,
                    context: n
                })
            }), h.length && (e.tabs = h, n.tabs("create", {
                id: i._id + "_tabset_" + f,
                tabs: h,
                className: "app-tabs-layout",
                scope: i.get_selectedKey(),
                change: function(n) {
                    de({
                        dataView: i,
                        row: r,
                        controls: n.context.children
                    });
                    nf();
                    i.editing() && !s && t.focus({
                        container: n.content
                    })
                }
            }), $(h).each(function() {
                var n = this;
                if (n.active) return de({
                    dataView: i,
                    row: r,
                    editing: u,
                    controls: n.context.children
                }), !1
            }))) : (e.type == "collapsible" ? (c = o.attr("data-header-text"), c && c != "none" && (y = o.contents(), l = $('<div data-container="toggle" class="app-feedback"><\/div>'), a = $('<div data-container="simple"><\/div>)'), y.appendTo(a), $('<span class="app-collapsible-toggle-text"/>').appendTo(l).text(c), $('<span class="app-collapsible-toggle-button"/>').appendTo(l).attr("title", eu.Minimize), l.appendTo(o), a.appendTo(o), o.attr("data-collapsed") == "true" && o.addClass("app-container-collapsed"))) : e.type == "stickyheader" && (v = $('<div class="app-static-text"><\/div>'), o.contents().appendTo(v), v.appendTo(o.addClass("dv-heading"))), ty(i, r, u, e.children)))
        })
    }

    function ty(i, r, u, e) {
        $(e).each(function() {
            var l = this,
                o = l.self,
                b, a, c, e, v, it, p, ft, ot, rt;
            if (l.children.length) ny(i, r, u, [l]);
            else {
                if (l.ready || !o.is(":visible")) return;
                if (l.ready = !0, c = o.attr("data-field"), b = l.type, c) {
                    if (a = o.find(".app-control-inner"), e = i.findField(c), e)
                        if (e.AllowNulls || o.attr("data-required", !0), b == "label") e = i._allFields[e.AliasIndex], v = e.HeaderText, a.html(v), v && v != "&nbsp;" || o.attr("data-required", null);
                        else if (o.addClass("app-field-" + e.Name), b == "dataview") {
                        if (e.Type == "DataView" && e.DataViewController)
                            if (i.extension().inserting()) o.hide(), o.parent().is('[data-container="row"]') && o.parent().hide();
                            else {
                                var k = i.get_parentDataView(i),
                                    c = e.Name,
                                    s = i._id + "_" + c,
                                    h, et = 0,
                                    d, v = e.HeaderText,
                                    tt = e.DataViewFilterFields,
                                    g, ut = r[e.Index],
                                    y, nt;
                                for (y = i._dataViewFields, y || (y = i._dataViewFields = {}), y[c] ? s += y[c] ++ : y[c] = 1, h = f.find(s); h && h._dataViewFieldParentId != k._id;) s = k._id + "_" + c + et++, h = f.find(s);
                                l.echoSelector = "#" + i._id + " #" + s + "_echo";
                                o.empty().attr("id", s + "_ph");
                                h ? h._startPage = ut : (g = {
                                    id: s,
                                    controller: e.DataViewController,
                                    viewId: e.DataViewId,
                                    filterFields: e.DataViewFilterFields,
                                    baseUrl: __baseUrl,
                                    servicePath: __servicePath,
                                    showSearchBar: !0,
                                    autoHide: tt ? 2 : null
                                }, g.startPage = ut, tt && (g.filterSource = e.DataViewFilterSource ? i.findField(tt)._dataViewId : i._id), h = $create(Web.DataView, g, null, null, $("<p>")[0]), h._dataViewFieldName = c, e._dataViewId = s, h._dataViewFieldParentId = k._id, h._filterSourceSelected(k), d = n.pageInfo(s), d.text = v, d.headerText = v, d.activator.text = v);
                                it = w(o);
                                nt = it.find('[data-for="' + s + '"]');
                                nt.length || (nt = ll(s, it).addClass("app-echo-embedded"));
                                nt.width(o.width());
                                h.get_startPage() && (h._loadPage(), lr(s + "_echo"))
                            }
                    } else b == "field" && (e.ToolTip && o.attr("title", e.ToolTip), t.render({
                        container: o,
                        inner: a,
                        dataView: i,
                        field: e,
                        row: r,
                        editing: u
                    }))
                } else b == "action" && (a = o.find(".app-control-inner"), p = i.findAction(o.attr("data-action")), p ? (ot = p && i._isActionAvailable(p), ft = $('<span class="app-action-column-button"/>').appendTo(a.empty().addClass("app-action-column")).text(p.HeaderText), rt = p.Description, rt && ft.attr("title", rt)) : a.text("(" + a.text() + ")"))
            }
        })
    }

    function iy(n, i, r, u) {
        $(u).each(function() {
            var u = this,
                f = u.self,
                e;
            if (!u.ready) return !1;
            u.children.length ? iy(n, i, r, u.children) : u.ready && u.dirty && f.is(":visible") && (e = t.elementToField(f), t.render({
                container: f,
                dataView: n,
                field: e,
                editing: r,
                row: i
            }), u.dirty = !1)
        })
    }

    function de(n) {
        var t = n.dataView,
            r = n.row,
            u = n.editing,
            i = n.controls;
        i && i.length && (t || (t = $app.find($(i[0].self).closest("[data-input-container]").attr("data-input-container"))), r || (r = t.editRow()), u == null && (u = t.editing()), ty(t, r, u, i), iy(t, r, u, i))
    }

    function or(n, t) {
        if (t) {
            clearTimeout(h._syncEmbeddedViewsTimeout);
            h._syncEmbeddedViewsTimeout = setTimeout(function() {
                or(n)
            });
            return
        }
        n || (n = w());
        var i = [],
            u = n.offset(),
            r, f = nu();
        n.find('[data-control="dataview"]').each(function() {
            var n = $(this),
                u = n.data("node"),
                t = $(u.echoSelector),
                r = t.outerHeight(!0);
            t.length && r && (r != n[0].offsetHeight && n.height(r), i.push({
                p: n,
                e: t
            }))
        });
        r = n.scrollTop();
        $(i).each(function() {
            var n = this,
                i = n.p,
                t, e = i.width();
            e ? (t = i.offset(), n.e.css({
                visibility: "",
                left: t.left - (f ? 193 : 0),
                top: t.top + r - u.top,
                width: e
            })) : n.e.css("visibility", "hidden")
        });
        yu(n)
    }

    function rd(n, t) {
        for (var i = t.parent().hide().next(); i.length && !i.is(":visible");) i = i.show().next()
    }

    function ry() {
        return $(this).is(":visible")
    }

    function cs() {
        return $("<style/>").appendTo($("head"))
    }

    function ic(n) {
        return n._enumerateExpressions(Web.DynamicExpressionType.Any, Web.DynamicExpressionScope.ViewRowStyle, n.get_viewId())
    }

    function kf(n, t, i, r) {
        var f, u;
        r || (r = ic(n));
        r && r.length && (f = n._evaluateJavaScriptExpressions(r, t, !0), i && (u = [], $(r).each(function() {
            var n = this;
            n.Scope == 1 && u.push(n.Result)
        }), u = u.join(" "), i.removeClass(u), f && i.addClass(f)))
    }

    function ls(n) {
        var t = n.pageProp("frozenField");
        return !t && n._hasKey() && (t = "_first_"), t || "_none_"
    }

    function ge(n) {
        return n || (n = r.activePage), n.find(".dv-heading")
    }

    function uy(n) {
        ge(n).remove()
    }

    function fy(n) {
        var t = n.replace(/\.\w+$/, "").replace(/\W/g, "_").toLowerCase() || "page";
        return t.match(/^\_/) && (t = t.substring(1)), t
    }

    function no() {
        var n = l.width(),
            t = l.height();
        return n < 480 && t < 640 || t < 480 && n < 640
    }

    function ey(t) {
        n.pageInfo(typeof t == "string" ? t : t._id).echoChanged = !0
    }

    function oy() {
        return l.width() >= e.is(".app-sidebar-undocked") ? 480 : 673
    }

    function w(n) {
        return n ? n.closest(".app-wrapper") : r.activePage ? r.activePage.find(".app-wrapper") : $()
    }

    function sy() {
        var n = w(),
            t = n.find(".app-toolbar-stub");
        t.length && (si(n, n.data("restore-scroll-top")), t.remove())
    }

    function kt(n) {
        return $(n).closest(".app-echo")
    }

    function as() {
        w().focus()
    }

    function vs() {
        var n = h.location.href,
            t = n.indexOf("#");
        t >= 0 && (n = n.substr(0, t));
        h.location.reload(n)
    }

    function ys() {
        if (!pf) {
            var n = o.displayDensity;
            pf = 16;
            n == "Compact" ? pf == 14 : (n == "Condensed" || n == "Tiny") && (pf = 12)
        }
        return pf
    }

    function ud(n) {
        var t = $(this),
            r, u = t.is(".app-bar-tools") ? 8 : 4,
            i = ki(n.clientX),
            f = ke(n.clientY);
        return t.find(".ui-btn-icon-notext").each(function() {
            var n = $(this),
                t, r;
            if (n.is(":visible") && (t = n.offset().left, t - 8 <= i && i <= t + n.outerWidth() + 8)) return n.trigger("vclick"), r = !0, !1
        }), r
    }

    function si(n, t) {
        function r() {
            n.removeData("scrolling enableScrollEventsTimeout");
            gr(n)
        }
        n.data("scrolling", !0);
        n.scrollTop(t);
        var i = n.data("enableScrollEventsTimeout");
        i != null && clearTimeout(i);
        n.data("enableScrollEventsTimeout", setTimeout(r, 300))
    }

    function hu(t, i) {
        i || (i = $("#" + t._id + "_echo"));
        i.length && i.find(".app-echo-toolbar .app-echo-controls").addClass("app-stale");
        var r = d();
        clearTimeout(h._refreshEchoToolbar);
        h._refreshEchoToolbar = setTimeout(function() {
            r != d() || n.busy() || b || li()
        }, 500)
    }

    function rc(n) {
        return !n && no() ? o.pageTransition != "none" ? "slideup" : "none" : "fade"
    }

    function ps(n) {
        return n && typeof n == "string" && n.match(/glyphicon-/)
    }

    function hy() {
        return $(".ui-panel-open .ui-btn.app-animated")
    }

    function uc() {
        return $(".ui-popup-active .ui-btn.app-animated")
    }

    function fd() {
        var n = l.width();
        return n > 639 && n > l.height()
    }

    function cy(n) {
        so(f.find(n.dataViewId))
    }

    function ei() {
        n.promo("search", ri.PerformAdvancedSearch);
        n.promo().data("icon-list", null)
    }

    function ly() {
        var t = n._menuButton;
        v(t, function() {
            t.trigger("vclick")
        })
    }

    function ay(n) {
        $(n).find(".app-signature").each(function() {
            f.upload("resize", {
                container: this
            })
        })
    }

    function vy(n) {
        var t = n.find(".Current"),
            i, r;
        t.length && (r = n.offset(), i = t.offset(), n.scrollLeft(i.left - r.left - t.outerWidth(!0) / 2))
    }

    function cu(n, i) {
        function h(n) {
            var t, i = u.steps[n];
            return i.isDynamic && (t = !0, $(u.containers[n]).children().each(function() {
                var n = this;
                if (n.style.display != "none") return t = !1, !1
            })), !t
        }

        function c(n, t) {
            for (t == null && (t = u.active), t += n; t >= 0 && t < u.steps.length;)
                if (h(t)) break;
                else t += n;
            return t
        }

        function l(n, t) {
            var t = c(n, t);
            return t >= 0 && t < u.steps.length
        }

        function a() {
            lt();
            u.containers.removeClass("app-wizard-active");
            var n = u.active,
                t;
            n != -1 && (t = $(u.containers[n]).addClass("app-wizard-active"), de({
                controls: t.data("node").children
            }), nf())
        }

        function w() {
            a();
            v();
            s || t.focus({
                container: $(u.containers[u.active])
            })
        }

        function v() {
            var n = e.closest(".ui-content"),
                t, i;
            n.length || (n = e.find(".ui-content"));
            t = n.find('[data-action-path="wizard-next"]');
            i = n.find('[data-action-path="wizard-prev"]');
            t.toggleClass("app-btn-disabled", !l(1));
            i.toggleClass("app-btn-disabled", !l(-1));
            b()
        }

        function b() {
            var e = f.closest(".ui-page"),
                t = e.find(".app-status-bar"),
                n, i, r, o;
            t.length && (n = $app.find(e.attr("id")), n._statusBarAuto && (i = [n._controller + "." + n._viewId + "._wizard:" + u.active + "\n"], $(u.steps).each(function(n) {
                var r = this,
                    t, f = r.text;
                r.isDynamic && (t = !0, $(u.containers[n]).children().each(function() {
                    if (this.style.display != "none") return t = !1, !1
                }));
                t || i.push((n == u.active ? "[" + f + "]" : f) + " >")
            }), n._statusBarAuto = i.join("")), t.html(n.statusBar()), r = t.find("li.Segment"), o = r.length + 10, r.each(function(n) {
                this.style.zIndex = o - n
            }), vy(t))
        }
        var e, f, u, y, p, o;
        if (i || (i = {}), e = i.container || r.activePage, f = i.layout || e, f.is("[data-layout]") || (f = f.find("[data-layout]"), !f.length && e && (f = e.closest("[data-layout]"))), u = f.data("wizard-config"), u || (u = {
                steps: [],
                active: 0
            }, u.containers = f.find('[data-container="wizard"]').each(function() {
                var n = $(this),
                    t = {
                        text: n.attr("data-wizard-step"),
                        isDynamic: n.find("> [data-visibility]").length > 0
                    };
                u.steps.push(t)
            }), f.data("wizard-config", u)), u.steps.length) switch (n) {
            case "start":
                u.active = l(1, -1) ? 0 : -1;
                a();
                b();
                break;
            case "status":
                v();
                break;
            case "next":
                y = c(1);
                y != -1 && (u.active = y, w());
                break;
            case "prev":
                p = c(-1);
                p != -1 && (u.active = p, w());
                break;
            case "visible":
                if (i.step) return i.step.is(".app-wizard-active") ? !0 : (o = i.step.prevAll('[data-container="wizard"]').length, h(o));
                break;
            case "show":
                i.step && !i.step.is(".app-wizard-active") && (o = i.step.prevAll('[data-container="wizard"]').length, o != u.active && h(o) && (u.active = o, a(), v()))
        }
    }

    function fc() {
        var n = document.body.className;
        o.sidebar == "Landscape" ? fd() ? n.match(/\bapp-sidebar-undocked\b/) && e.removeClass("app-sidebar-undocked") : n.match(/\bapp-sidebar-undocked\b/) || e.addClass("app-sidebar-undocked") : o.sidebar == "Never" ? n.match(/\bapp-sidebar-undocked\b/) || e.addClass("app-sidebar-undocked") : n.match(/\bapp-sidebar-undocked\b/) && e.removeClass("app-sidebar-undocked")
    }

    function ec(n) {
        s ? h.location.href = n : h.open(n)
    }

    function df() {
        return (new Date).getTime()
    }

    function sr(n) {
        return parseFloat(n.replace(/[A-Za-z]/g, ""))
    }

    function ed(n) {
        return n.x != null && (n.x = Math.ceil(n.x)), n.y != null && (n.y = Math.ceil(n.y)), n
    }

    function od() {
        var t = n._toolbarUserName;
        if (!t.data("positioned")) {
            var e = n._toolbarButtons,
                h, r = n._contextButton,
                a = r.is(":visible"),
                u = l.width(),
                c = Math.ceil(r.show().offset().left),
                o = r.outerWidth(),
                s = Math.ceil(o / 2),
                i, f = e.length - 1;
            for (t.data("positioned", !0), t.is(":visible") && we ? (t.show().text(be).attr("title", be), t.css("right", u - r.position().left), i = Math.ceil(u - t.offset().left)) : i = u - c + s; f >= 0;) h = $(e[f]).css("right", i), i = i + o + s, f--
        }
    }

    function yy(n, t, i, r) {
        if (n.htmlEncode())
            if (n.TextMode == 3) {
                for (var u = f.htmlEncode(t).split(/\r?\n/), o, e = 0; e < u.length; e++) o = u[e], m = o.match(/^\s+/), m && (u[e] = Array(m[0].length * 2).join("&nbsp;") + o.substring(m[0].length));
                t = u.join("<br/>");
                u.length > 15 ? (i.html('<div class="app-text-collapsible"><\/div>').children().html(t), $('<span class="ui-btn ui-btn-icon-notext ui-btn-inline ui-icon-carat-d ui-inline ui-corner-all app-btn-toggle"/>').attr("title", eu.Maximize).appendTo(i)) : (i.html(t), r && i.css("white-space", "nowrap"))
            } else i.text(t);
        else i.html(t)
    }

    function sd(n) {
        return String.format("{0} - {1}", ri.QuickFindText, n.get_view().Label)
    }

    function to(n) {
        n.refreshCallback && (n.refreshCallback(), n.refreshCallback = null)
    }

    function py(t, i, r) {
        t.find("> .app-map, > .app-presenter-instruction").hide();
        r || (i._mapPageWindow = null);
        n.presenter("hide", {
            container: t
        })
    }

    function wy() {
        return String.format("{0:" + f.dateFormatStrings["{0:f}"] + "}", new Date)
    }

    function lu() {
        return !0
    }

    function oc(n, t, r) {
        if (n._hasKey()) {
            var u = $('<span class="app-btn-more">&nbsp;<\/span>').appendTo(t).attr("title", i.More);
            r && u.addClass("app-frozen")
        }
    }

    function sc(n, t) {
        if (n = $(n), t == null && (t = n.val().length), n.length) try {
            n[0].setSelectionRange(t, t)
        } catch (i) {}
    }

    function hc(n) {
        var t = cd();
        "path" in n || (n.path = t.path);
        "fileName" in n || (n.fileName = t.fileName);
        f.execute({
            controller: ut.siteContent,
            filter: [{
                field: "Path",
                operator: "=",
                value: n.path
            }, {
                field: "FileName",
                operator: "=",
                value: n.fileName
            }],
            success: function(t) {
                var i = {
                    FileName: n.fileName,
                    Path: n.path
                };
                t.SiteContent.length ? n.callback(t.SiteContent[0]) : f.confirm("This is a static application page. A copy of the page will be created in the content management system. Continue?", function() {
                    dy(i, "$Text", function() {
                        hc(n)
                    })
                })
            }
        })
    }

    function hd() {
        hc({
            callback: function(n) {
                var t = ut.siteContentPK;
                f.touch.navigate({
                    href: String.format("{0}pages/site-content?{1}={2}&_controller={3}&_commandName=Select&_commandArgument=editForm1", __baseUrl, t, n[t], ut.siteContent)
                })
            }
        })
    }

    function cd() {
        var n = h.location.pathname,
            t;
        return (n = n.substring(ut.rootUrl.length), n.match(/^\//) && (n = n.substring(1)), t = n.lastIndexOf("/"), t == -1) ? {
            path: null,
            fileName: n
        } : {
            path: n.substring(0, t),
            fileName: n.substring(t + 1)
        }
    }

    function by(n) {
        if (!n) {
            hc({
                callback: function(n) {
                    by(n)
                }
            });
            return
        }
        vd(n)
    }

    function ky(n, t) {
        n.errors.length ? f.alert(n.errors.join("\n")) : t(n)
    }

    function dy(n, t, i) {
        f.execute({
            controller: ut.siteContent,
            command: "Insert",
            view: "createForm1",
            values: [{
                name: "Path",
                newValue: n.Path
            }, {
                name: "FileName",
                newValue: n.FileName
            }, {
                name: "ContentType",
                newValue: "text/html"
            }, {
                name: "Text",
                newValue: t
            }],
            success: function(n) {
                ky(n, i)
            }
        })
    }

    function ld(n, t, i) {
        var r = ut.siteContentPK;
        f.execute({
            controller: ut.siteContent,
            command: "Update",
            view: "editForm1",
            values: [{
                name: r,
                oldValue: n[r]
            }, {
                name: "Path",
                value: n.Path
            }, {
                name: "FileName",
                value: n.FileName
            }, {
                name: "Text",
                oldValue: n.Text,
                newValue: t
            }],
            success: function(n) {
                ky(n, i)
            }
        })
    }

    function gy() {
        var n = $.mobile.activePage,
            t = n.find('[data-editable="true"]'),
            i;
        if (n.find(".app-page-content").addClass("app-editor-active"), n.find(".carousel").each(function() {
                $(this).carousel("pause").off("keydown.bs.carousel swipeleft swiperight")
            }), t.each(function() {
                var n = $(this),
                    t;
                n.is("a") && (n.attr({
                    "data-href": n.attr("href"),
                    tabIndex: 0
                }), n.removeAttr("href"));
                t = n.html();
                n.data("data-content", t);
                t && (t = t.replace(/\s*\r?\n\s*/g, " ").trim(), n.html(t))
            }).attr("contenteditable", "true"), i = n.find('.app-wrapper [data-editable="true"]').find("img, .glyphicon"), bo) i.on("mousedown", function(n) {
            $(n.target).focus()
        });
        return t
    }

    function cc(n) {
        $(document).trigger($.Event("editor" + n + ".app"))
    }

    function lc(n) {
        var t = $.mobile.activePage;
        t.find('[data-editable="true"]').each(function() {
            var t = $(this),
                i = t.data("data-content");
            t.removeAttr("contenteditable").removeData("data-content");
            t.is("a") && (t.attr({
                href: t.attr("data-href"),
                tabIndex: 0
            }), t.removeAttr("data-href"));
            n && t.html(i)
        });
        t.find(".app-page-content").removeClass("app-editor-active");
        cc("stop")
    }

    function ad(n) {
        var a = $.mobile.activePage,
            u = [],
            r, h, f, t, i, o, e, s = 0,
            c, l;
        if (f = a.find(".app-page-content").html(), r = n.Text, r && (h = r.match(/<footer/), t = n.Text.match(/<([\s\S]*?)data-content-framework\s*=\s*"\w+"([\s\S]*?)>/), t && (t = t[0], u.push(t), c = t.split(/<div[\s\S]*?>/gi), l = t.split(/<\/div>/gi), s = c.length - l.length), s)) {
            for (i = [], o = /\s*<\/div>/gi, e = o.exec(r); e;) i.push(e.index), e = o.exec(r);
            i = r.substring(i[i.length - s])
        }
        return h || (f = f.replace(/\s*<footer([\s\S]+?)<\/footer>/, "")), u.push(f), i && u.push(i), u.join("")
    }

    function np(n, t) {
        var i = ad(n);
        "Text" in n ? ld(n, i, t) : dy(n, i, t)
    }

    function vd(t) {
        function e() {
            fi.disabled = !1;
            n.bar("remove", i.off());
            n.bar("remove", r.off())
        }
        var u = $.mobile.activePage,
            i, r, f = gy();
        f.length && (fi.disabled = !0, i = $('<div class="app-bar-strip"><\/div>').appendTo(n.bar("create", {
            type: "header",
            page: u
        })).on("vclick", function(i) {
            gf();
            var r = $(i.target).closest("a");
            return r.length && v(r, function() {
                n.listPopup({
                    anchor: r,
                    iconPos: "left",
                    items: [{
                        text: "Save & Close",
                        icon: "check",
                        callback: function() {
                            lc();
                            np(t, function() {
                                e()
                            })
                        }
                    }, {
                        text: "Save & Keep Editing",
                        icon: "edit",
                        callback: function() {
                            lc();
                            np(t, function() {
                                gy();
                                cc("start")
                            })
                        }
                    }, {
                        text: "Stop Editing",
                        icon: "delete",
                        callback: function() {
                            lc(!0);
                            e()
                        }
                    }]
                })
            }), !1
        }), r = $('<div class="app-bar-strip"><\/div>').appendTo(n.bar("create", {
            type: "footer",
            page: u
        })).on("vclick", function(n) {
            function u() {
                i.is(".app-has-children") && t.trigger($.Event("contextmenu", {
                    relatedTarget: i
                })).addClass("app-editor-focus")
            }
            var i = $(n.target).closest(".ui-btn"),
                t;
            return i.length ? v(i, function() {
                t = i.data("elem");
                t && (t.is('[data-editable="true"]') ? t.focus() : gf(t), u())
            }) : (i = r.find(".ui-btn").last(), i.length && (t = i.data("elem"), t && t.is('[data-editable="true"]') && t.focus())), !1
        }), $('<a class="ui-btn ui-corner-all ui-mini app-has-children"/>').appendTo(i).text("Save & Close"), n.bar("show", i.parent()), n.bar("show", r.parent()), gf(f.first().focus()), cc("start"))
    }

    function yd() {
        return s ? "vclick contextmenu" : "contextmenu"
    }

    function gf(n) {
        var e = r.activePage,
            o = e.find(".app-bar-footer .app-bar-strip"),
            s, u, t, i, f, h;
        if (e.find(".app-editor-focus").removeClass("app-editor-focus"), s = o.find(".ui-btn"), n = $(n), s.removeData().remove(), n.length && !n.closest("footer,.footer").length) {
            for (n.is('[data-editable="true"]') || n.addClass("app-editor-focus"), u = []; n.length && !n.is(".app-page-content");) t = null, n.is('[data-editable="true"]') ? t = n.is(".btn") ? "button" : "text" : n.is(".jumbotron") ? t = "jumbotron" : n.is(".container") ? t = "container" : n.is(".carousel") ? t = "carousel" : n.parent().is(".row") && n.is("div") && (t = "column"), t && u.push({
                text: t,
                elem: n
            }), n = n.parent();
            for (i = u.length - 1; i >= 0;) f = u[i], n = f.elem, h = $('<a class="ui-btn ui-corner-all ui-mini"/>').appendTo(o).text(f.text).data("elem", n), i || n.is('[data-editable="true"]') && !n.is("a") || h.addClass("app-has-children"), i--
        }
    }

    function pd() {
        var i = "vclick",
            n = r.activePage,
            t;
        n.on("focus", '[data-editable="true"]', function() {
            var n = $(this).closest(".ui-page").find(".app-bar-footer .app-bar-strip .ui-btn");
            n.length && n.last().data("elem")[0] === this || gf(this)
        });
        n.on(i, '[data-editable="true"] .glyphicon', function() {
            function u(n) {
                t.attr("class", "glyphicon " + n)
            }

            function i() {
                var i = [];
                $(n).each(function() {
                    var n = this,
                        t = {
                            text: n,
                            icon: "glyphicon-" + n,
                            context: "glyphicon-" + n,
                            callback: u
                        };
                    r == n && (t.visible = !0);
                    i.push(t)
                });
                nt({
                    anchor: t,
                    iconPos: "left",
                    title: "Glyphicon",
                    items: i
                })
            }
            var t = $(this),
                r = (t.attr("class").match(/glyphicon-([\w+\-]+)/) || [])[1],
                n = f.glyphicons;
            return bo && t.parent().focus(), n ? i() : $.ajax({
                url: __baseUrl + "touch/bootstrap.min.css",
                dataType: "html",
                success: function(t) {
                    var e = /\.glyphicon-([\w\-]+)/g,
                        r, u;
                    for (n = [], r = e.exec(t); r;) u = r[1], n.indexOf(u) == -1 && n.push(u), r = e.exec(t);
                    n.sort();
                    f.glyphicons = n;
                    i()
                }
            }), !1
        });
        n.on(i, '.btn[data-editable="true"]', function(n) {
            function i(n) {
                r.removeClass("btn-default btn-primary btn-success btn-info btn-warning btn-danger").addClass("btn-" + n)
            }

            function u(n) {
                r.removeClass("btn-xs btn-sm btn-md btn-lg").addClass("btn-" + n)
            }

            function t(n, t, i, u) {
                return {
                    text: n,
                    icon: r.is("." + t + "-" + i) ? "check" : "",
                    context: i,
                    callback: u
                }
            }
            var r = $(this);
            return nt({
                anchor: n.relatedTarget || r,
                iconPos: "left",
                title: "Button",
                items: [t("Default", "btn", "default", i), t("Primary", "btn", "primary", i), t("Success", "btn", "success", i), t("Info", "btn", "info", i), t("Warning", "btn", "warning", i), t("Danger", "btn", "danger", i), {}, t("X-Small", "btn", "xs", u), t("Small", "btn", "sm", u), t("Medium", "btn", "md", u), t("Large", "btn", "lg", u), ]
            }), !1
        });
        n.on("vclick contextmenu", ".row > div,.container,.carousel,.jumbotron", function(t) {
            function r() {
                f.alert("context menu")
            }
            var i = $(this);
            if (!$(t.target).closest('[data-editable="true"],a').length) return n.find('[data-editable="true"]').blur(), i.is(".app-editor-focus") && t.type == "vclick" || (gf(i), t.type == "contextmenu" && r()), !1
        });
        n.on("vclick contextmenu", ".app-page-content", function(i) {
            if (!$(i.target).closest('[data-editable="true"],a').length && !t) {
                var r;
                return n.find(".app-page-content > *").each(function() {
                    var n = $(this);
                    if (n.offset().top <= i.clientY && n.offset().top + n.outerHeight() >= i.clientY && !n.is("footer,.footer")) return r = !0, setTimeout(function() {
                        t = !0;
                        n.trigger(i.type);
                        t = !1
                    }), !0
                }), r || gf(), !1
            }
        })
    }

    function wd() {
        var t = yd(),
            n = r.activePage;
        n.off("focus", '[data-editable="true"]');
        n.off(t, '[data-editable="true"] .glyphicon');
        n.off(t, '.btn[data-editable="true"]');
        n.off("vclick contextmenu", ".row > div,.container,.carousel,.jumbotron");
        n.off("vclick contextmenu", ".app-page-content")
    }

    function tp(n, t) {
        n.extension().quickFind(t);
        vp(n)
    }

    function ne(n) {
        var t = [];
        return n && n.viewProp("useAdvancedSearch") && (t = n.viewProp("advancedSearchFilter") || t), t
    }

    function io(n) {
        iu(n);
        rp(n);
        $(n._allFields).each(function() {
            delete this._listOfValues
        });
        gl(n);
        n._forceSync();
        n.refreshData();
        dc();
        vp(n)
    }

    function ac(n, t) {
        !t && ne(n).length && n.viewProp("advancedSearchFilter", null);
        n.clearFilter();
        io(n)
    }

    function ip(n) {
        var r = n._filter,
            t = ne(n),
            i;
        return t.length && (n._filter = t, i = n.extension().filterStatus(!0), n._filter = r), i
    }

    function rp(n) {
        var t = (n.get_filter() || []).slice(0),
            r = [],
            u, i = 0,
            f = $.Event("searching.app", {
                dataView: n
            });
        for ($(n.get_externalFilter()).each(function() {
                r.push(this.Name)
            }); i < t.length;) u = t[i], Array.indexOf(r, u.match(/^\w+/)[0]) != -1 ? t.splice(i, 1) : i++;
        n.viewProp("filter", t);
        $(document).trigger(f)
    }

    function up() {
        var t = n._menuStrip;
        return t && t.strip.is(":visible")
    }

    function ro(t) {
        var r = n._menuStrip,
            i = r && r.strip,
            u = n._menuPanel;
        if (i) {
            var o = $(u).find('li a[rel="external"]'),
                f = o.parent(),
                e = $(u).find(".ui-li-divider:not(.app-info):not(.app-copy)");
            arguments.length == 0 && (t = up());
            t ? (i.show(), f.hide(), e.hide(), n._title.addClass("app-hidden")) : (i.hide(), f.show(), e.show(), n._title.removeClass("app-hidden"))
        }
    }

    function fp(n) {
        n.length && n[n.length - 1].text && n.push({})
    }

    function dr(n) {
        var i = !0,
            t;
        if (n) setTimeout(function() {
            dr()
        }, 5);
        else try {
            h.getSelection ? (t = h.getSelection(), t && t.rangeCount > 0 && t.removeAllRanges()) : document.selection && document.selection.empty()
        } catch (r) {
            i = !1
        }
        return i
    }

    function ep() {
        var n, t, i, u, r;
        return document.selection && document.selection.createRange ? (n = document.selection.createRange(), t = n.htmlText) : window.getSelection && (i = window.getSelection(), i.rangeCount > 0 && (n = i.getRangeAt(0), u = n.cloneContents(), r = document.createElement("div"), r.appendChild(u), t = r.innerHTML)), t
    }

    function ws(t) {
        var r = n._menuStrip,
            i = r && r.strip;
        i && (i.hide(), arguments.length == 1 && i.attr("data-enabled", t ? "true" : "false"))
    }

    function bd(n, t) {
        t == "Cards" ? n.addClass("app-cardview").removeClass("app-grid app-onecolumnview") : t == "Grid" ? n.addClass("app-grid").removeClass("app-cardview app-onecolumnview") : t == "List" && n.addClass("app-onecolumnview").removeClass("app-cardview app-grid")
    }

    function te(n, t, i) {
        var r = f.find(n);
        iu(r);
        vt();
        r.extension().viewStyle(t, i);
        ey(n);
        it(!0);
        it(!1, 10)
    }

    function vc(n, t) {
        if (t.instruction) {
            var i = n.find("> .app-presenter-instruction"),
                r = t.instruction();
            i.length || (i = $('<div class="app-presenter-instruction"><\/div>').appendTo(n).hide());
            r ? (i.show(), i.html(r)) : i.hide();
            fo();
            op(t.dataView(), n.closest(".ui-page"), !1, !0)
        }
    }

    function op(n, t, i, r) {
        var e, o, f, u;
        vt();
        e = n.extension();
        e._instructed || n._totalRowCount == -1 || (f = e.instruction(), u = ge(t), f || i ? (u.empty(), e._instructed = !0, u.length || (u = $('<span class="dv-heading"/>').appendTo(t).hide()), f && $('<span class="app-view-instruction"/>').appendTo(u).html(f.replace(/<a.*?<\/a>/gi, "")), u.attr("data-selector", r ? ".app-presenter-instruction:visible" : "ul.app-listview li.app-list-instruction"), i && (o = ol(n, u), f || o.addClass("app-grid-header-no-description")), ir(), (i || n.extension().viewStyle().match(/Cards|List/) && n.get_groupExpression()) && $(document).trigger($.Event("scrollstop.app", {
            relatedTarget: t.find(".app-wrapper")
        }))) : u.remove())
    }

    function kd() {
        $('div[data-role="presenter"]').addClass("app-stale");
        yc()
    }

    function yc(t) {
        function i(i) {
            var u = i.attr("data-presenter"),
                r = n.dataView();
            !i.closest(".app-echo-inner").length && r && i.css("display") != "none" && n.presenter("show", {
                name: u,
                id: r._id,
                container: t || w(i)
            })
        }
        t ? (t.find('div[data-role="presenter"]').each(function() {
            i($(this))
        }), $('.ui-page:not(.ui-page-active) div[data-role="presenter"]').each(function() {
            var n = $(this);
            n.closest(".app-echo-inner").length || n.addClass("app-stale")
        })) : $('div[data-role="presenter"].app-stale').each(function() {
            var n = $(this);
            n.removeClass("app-stale");
            i(n)
        })
    }

    function sp(n) {
        n.find("> .app-map").each(function() {
            var i = $(this),
                u = n.find("> .app-page-header:visible"),
                f = n.find("> .app-presenter-instruction:visible"),
                r = $(f.length && f || u.length && u),
                e = i.data("data-map"),
                t, o;
            i.css("top", r.length ? r.position().top + r.outerHeight(!0) : 0);
            i.is(":visible") && e && (t = e.map, o = t.getCenter(), google.maps.event.trigger(t, "resize"), t.setCenter(o))
        })
    }

    function pc(n) {
        n.css({
            display: "block",
            "z-index": -10
        });
        di(n);
        n.css({
            display: "",
            "z-index": ""
        })
    }

    function di(n) {
        var e = r.activePage,
            t = n || e;
        if (!wi(t)) {
            var o = t.attr("id") == e.attr("id"),
                s = o ? t : e,
                u = s.css("padding-top"),
                i = s.css("min-height"),
                p = t.find(".ui-content"),
                w = p.children().filter(function() {
                    return $(this).is(".app-bar-header,.app-bar-actions,.app-tabs")
                }),
                b = p.find(".app-bar-footer"),
                h = pe && t.find(pe.fixedTop.selector),
                c = h && h.css("position") == "fixed" && h.outerHeight(),
                a = pe && t.find(pe.fixedBottom.selector),
                v = a && a.css("position") == "fixed" && a.outerHeight(),
                k = t.is(".app-stale"),
                f = 0,
                d = l.width();
            o ? (r.resetActivePageHeight(), i = s.css("min-height")) : t.css({
                "padding-top": u,
                "min-height": i
            });
            i = parseInt(i);
            u = parseInt(u);
            t.find(".app-wrapper").each(function() {
                var n = $(this),
                    e = n.offset(),
                    r = 0;
                n.data("scrolling", !0);
                k && (t.removeClass("app-stale"), ho(n), ho(t.find(".app-bar-actions,.app-bar-footer,.app-bar-header")));
                w.each(function() {
                    var n = $(this);
                    n.css("display") != "none" && (r += n.outerHeight(!0))
                });
                b.each(function() {
                    var n = $(this);
                    n.css("display") != "none" && (f += n.outerHeight(!0))
                });
                r && (i = i - r, u = u + r);
                c && (i -= c, u += c);
                v && (i -= v, f += v);
                f && (f -= 2);
                n.css({
                    top: u,
                    bottom: f,
                    "min-height": i - f
                });
                o && n.css({
                    height: i - f
                });
                n.data("vscrollbar").css({
                    height: n.height(),
                    right: d - (e.left + n.width()) + y.width,
                    top: u,
                    bottom: f
                });
                sp(n);
                n.data("scrolling", !1)
            })
        }
    }

    function dd() {
        function ft(n) {
            return n && n.match(/Landscape|Always|Never/)
        }
        var a = ut.mobileDisplayDensity,
            tt = ut.desktopDisplayDensity,
            u = Sys.Browser,
            v, f, y, t = $("#PageHeader").parent(),
            n = e.attr("data-theme") || (t.attr("class") || "").match(/\bpage-theme-(\w+)\b/i),
            p, h = $("div[data-content-framework]").first(),
            w = g("buttonShapes"),
            b = g("promoteActions"),
            k = g("smartDates");
        if (typeof n == "string" && (n = [0, n]), !n || !n[1]) {
            var d = document.cookie.split(";"),
                nt, c, l, it = __settings.appInfo.split("|")[1],
                rt = new RegExp("\\.COTTHEME" + it + "=(\\w+)");
            for (nt in d)
                if (c = d[nt], l = c && rt.exec(c), l) {
                    p = l[1];
                    break
                }
        }
        t.length || (t = e);
        o = {
            mapApiIdentifier: ut.mapApiIdentifier,
            pageTransition: g("pageTransition") || ut.transitions || (vr ? "fade" : dk() ? "slide" : "none"),
            sidebar: g("sidebar") || ft(ut.sidebar) || "Landscape",
            theme: n && n[1] || p || ut.theme,
            themeDisabled: n != null,
            displayDensity: g("displayDensity") || (ko < 144 ? tt : a == "Auto" ? ko >= 432 ? "Comfortable" : "Compact" : a),
            labelsInList: g("labelsInList") || ut.labelsInList,
            showSystemButtons: g("showSystemButtons") || "Auto",
            buttonShapes: w != null ? w : ut.buttonShapes,
            promoteActions: b != null ? b : ut.promoteActions,
            initialListMode: g("initialListMode") || ut.initialListMode || "SeeAll",
            smartDates: k != null ? k : ut.smartDates
        };
        u.agent == u.InternetExplorer && u.version <= 9 && (e.hide(), ut && ut.ui ? (v = (new Date).getDate() + 365, f = new Date, f.setDate(v), y = String.format("appfactorytouchui=false; expires={0}; path=/", f.toUTCString()), document.cookie = y, location.reload(r.path.parseUrl(location.href).hrefNoHash)) : alert(i.TouchUINotSupported));
        bt && (e.addClass("app-ios"), wo < 8 && e.addClass("app-ios7"));
        vr && e.addClass("app-android");
        o.buttonShapes == !1 && e.addClass("app-buttons-text-only");
        o.showSystemButtons != "Always" && e.addClass("app-show-system-buttons-on-hover");
        t.is(".Tall") && e.addClass("app-page-header-hidden");
        (t.is(".Wide") || h.length && h.attr("data-sidebar") != "true" || !h.length && $('div[data-app-role="page"]').first().attr("data-sidebar") == "false") && (o.sidebar = "Never", o.sidebarDisabled = !0);
        $(document).trigger($.Event("init.app"));
        r.defaultPageTransition = o.pageTransition;
        fc();
        o.displayDensity || (o.displayDensity = s ? "Comfortable" : "Compact");
        e.addClass(na(o.theme));
        e.addClass(ta(o.displayDensity));
        o.labelsInList == "DisplayedAbove" && e.addClass("app-labelsinlist-displayedabove")
    }

    function hp(n) {
        return (n.metaKey || n.ctrlKey) && n.shiftKey
    }

    function hr(t) {
        n.tabs("fit", {
            page: t
        })
    }

    function uo(n) {
        n = $(n);
        n.find(".app-wrapper").each(function() {
            var n = $(this),
                t = n.data("scroll-top");
            t && n.scrollTop() != t && si(n, t)
        });
        n.find(".app-echo-inner").each(function() {
            var n = $(this),
                t = n.data("scroll-left");
            n.parent().is(":visible") && t && n.scrollLeft() != t && n.scrollLeft(t)
        });
        se(n)
    }

    function bs(n) {
        n = $(n);
        n.is(":visible") && (n.find(".app-wrapper").each(function() {
            var n = $(this);
            n.data("scroll-top", n.scrollTop())
        }), n.find(".app-echo-inner").each(function() {
            var n = $(this);
            n.parent().is(":visible") && n.data("scroll-left", n.scrollLeft())
        }))
    }

    function cp(n) {
        var t = n.scrollTop();
        return {
            top: t * -1,
            height: n.height() + t,
            maxHeight: n[0].scrollHeight
        }
    }

    function ks(n) {
        var t = n.find(".ui-panel-inner"),
            i, r, u;
        if (t.length) t.on("scroll keydown keyup", function() {
            b || i || (i = !0, r = t.scrollTop(), ht = !0, u = setInterval(function() {
                var n = t.scrollTop();
                n != r ? r = n : (clearInterval(u), i = !1, ht = !1, t.data("scroll-stop-time", new Date))
            }, 200))
        })
    }

    function gd(n) {
        n.find(".ui-panel-inner").off("scroll keydown keyup")
    }

    function wc(n, t) {
        n || (n = w());
        gr(n, !1, t == !0);
        n.find(".app-data-list").each(function() {
            ds($(this))
        })
    }

    function ds(n, t, i) {
        function f() {
            t.css({
                left: r * u,
                width: n.width() * u,
                display: ""
            })
        }
        var r;
        n.length && (t || (t = n, n.parent().attr("class").match(/\-outer/) && (t = n.parent()), t = t.next().find(".app-hscrollbar-handle")));
        r = n.scrollLeft();
        var e = n.width(),
            o = n[0].scrollWidth,
            u = Math.abs(e - o) <= 2 ? 1 : e / o;
        t.parent().css("visibility", u == 1 ? "hidden" : "");
        u == 1 || n.find(".app-hidden").length ? (t.css("display", "none"), n.removeClass("app-inner-shadow-left app-inner-shadow-right app-inner-shadow-left-right")) : (r <= 0 ? n.addClass("app-inner-shadow-right").removeClass("app-inner-shadow-left app-inner-shadow-left-right") : r >= n[0].scrollWidth - n[0].clientWidth - 1 ? n.addClass("app-inner-shadow-left").removeClass("app-inner-shadow-right app-inner-shadow-left-right") : n.addClass("app-inner-shadow-left-right").removeClass("app-inner-shadow-right app-inner-shadow-left"), i && !1 ? requestAnimationFrame(f) : f())
    }

    function gr(n, t, i) {
        if (n.length)
            if (i) clearTimeout(h._updateVScrollbarTimeout), h._updateVScrollbarTimeout = setTimeout(function() {
                gr(n, t)
            }, 100);
            else {
                t || (t = n.next().find(".app-vscrollbar-handle"));
                var o = n[0].scrollHeight,
                    u = n.height(),
                    r = u / o,
                    s = t.parent(),
                    f = s.next();
                if (s.css("visibility", r == 1 ? "hidden" : ""), r == 1) t.css("display", "none"), f.addClass("app-bar-footer-no-scrolling");
                else {
                    var c = n.scrollTop(),
                        e = u * r;
                    e < 16 && (e = 16);
                    t.css({
                        top: c * r - 0,
                        height: e,
                        display: ""
                    });
                    o <= c + u ? f.addClass("app-bar-footer-no-scrolling") : f.removeClass("app-bar-footer-no-scrolling")
                }
            }
    }

    function gs(n, t) {
        function w() {
            r = i.data("lastScrollTop");
            r == null && (r = 0);
            var t = i.data("scroll-dir"),
                u = i.scrollTop(),
                n = u < r ? "up" : u == r ? "none" : "down";
            n == "none" && t == "none" && (n = "up");
            n != t && (i.data("scroll-dir", n), $(document).trigger($.Event("scrolldir.app", {
                relatedTarget: i
            })))
        }
        var i = n.find(".app-wrapper").first(),
            u, f, o, a, h, r, v, p, e, c;
        if (!i.length) {
            if (o = n.find(".ui-content"), a = o.contents(), i = $('<div class="app-wrapper"><\/div>').appendTo(o), y.width && i.css("overflow-y", "scroll"), ho(i), c = l.width(), i.toggleClass("app-display-tablet", c >= 960 || c >= 768 && !nu()), u = $('<div class="app-vscrollbar"><\/div>').insertAfter(i), f = $('<div class="app-vscrollbar-handle" data-draggable="vscrollbar"><\/div>').appendTo(u), i.data({
                    vscrollbar: u,
                    "vscrollbar-handle": f
                }), t == !1) i.on("scroll", function() {
                gr(i, f)
            });
            else i.on("touchstart", function() {
                bt && wo < 8 && (e = !1, ur = !0)
            }).on("touchmove", function() {
                bt && (v = df(), p = i.scrollTop())
            }).on("touchend", function() {
                if (bt && wo < 8) {
                    var t = df() - v,
                        n = i.scrollTop(),
                        r = Math.abs(p - n);
                    t > 0 && r / t > .25 || n < 0 || n > i.height() ? e = !0 : ur = !1
                }
            }).on("scroll", function() {
                if (b || i.data("scrolling")) {
                    clearInterval(i.data("scrollInterval"));
                    i.data("lastScrollTop", i.scrollTop());
                    return
                }
                gr(i, f);
                h ? w() : (h = !0, lt(), $(document).trigger($.Event("scrollstart.app", {
                    relatedTarget: i
                })), ht = !0, u.addClass("app-scrollbar-reveal"), i.data("scrollInterval", setInterval(function() {
                    var n = i.scrollTop();
                    n != r ? r = n : (clearInterval(i.data("scrollInterval")), w(), h = !1, ht = !1, i.data({
                        "scroll-stop-time": new Date,
                        lastScrollTop: i.scrollTop(),
                        scrollInterval: null
                    }), $(document).trigger($.Event("scrollstop.app", {
                        relatedTarget: i
                    })), u.removeClass("app-scrollbar-reveal"), e && (e = !1, ur = !1))
                }, 84)))
            });
            s || i.attr("tabindex", 0);
            $('<div class="app-page-header"><h2/><h1/><\/div>').appendTo(i);
            a.appendTo(i)
        }
        return i
    }

    function k(t) {
        n.activeLink(t)
    }

    function bc(n) {
        k(n);
        setTimeout(function() {
            k()
        }, 200)
    }

    function v(n, t) {
        t || (t = er);
        n = $(n);
        var i = n.attr("class");
        i && i.match(/\bapp-btn-/) ? (n.addClass("ui-btn-active"), setTimeout(function() {
            n.removeClass("ui-btn-active");
            gh = "link";
            t(n)
        }, ft)) : (k(n), setTimeout(function() {
            b && t == er || (k(), gh = "link", n && n.is(".app-btn") && (gh = "toolbar"), t(n))
        }, ft))
    }

    function lp(n, t) {
        if (t || (t = n.find(".app-stub,.app-stub-main")), t.length) {
            var i = Math.ceil(t.offset().top),
                r = Math.ceil(n.offset().top),
                u = n.height();
            i > r && (i > r + u ? t.height("") : t.height(u - (i - r)))
        }
    }

    function nh() {
        vt();
        n.promo(!1);
        e.find("> *").hide()
    }

    function kc() {
        oi && oi._updateLastActivity()
    }

    function dc() {
        ge().removeClass("app-disabled")
    }

    function ie() {
        return ph || (ph = $("#app-sidebar")), ph
    }

    function nu() {
        return ie().is(":visible")
    }

    function hi(n, t) {
        n && (as(), n.callback ? n.callback(n.context, t) : n.href && (h.location.href = n.href))
    }

    function th(n) {
        var t = r.activePage;
        t && t.find(".dv-load-at-top").css("visibility", n ? "hidden" : "");
        b = n
    }

    function d() {
        var n = r.activePage;
        return n ? n.attr("id") : "_"
    }

    function gc() {
        return d() == "Main"
    }

    function gi() {
        return d() == "advanced-search"
    }

    function nl(n, t) {
        return "rg_" + n._id + "_v_" + n._viewId + (n._groupExpression ? "_g_" + n._groupExpression.replace(/\W/g, "_") : "") + "_f_" + t.Name
    }

    function re(n) {
        return "rg_" + n._id + "_v_" + n._viewId + (n._groupExpression ? "_g_" + n._groupExpression.replace(/\W/g, "_") : "") + "_scroll_"
    }

    function ap(n) {
        var t = n.Columns;
        return t == 0 && n.Type == "String" && (t = Math.floor(n.Len)), n.ItemsTargetController ? t = 80 : t > 80 ? t = 80 : t || (n.Type == "String" ? (t = n.Rows > 1 ? 80 : 30, n.Len > 0 && n.Len < t && (t = n.Len)) : t = 7), n.Type.match(/^Date/) && t < 20 ? t = n.DataFormatString == "d" || n.DataFormatString == "{0:d}" ? 10 : t : n.Type == "Guid" && t < 36 && (t = 36), t
    }

    function tg(n, t) {
        t || (t = ys());
        var i = n.cols != null ? n.cols : ap(n),
            r = n.long ? i * .5 : i < 11 ? i : i < 21 ? Math.ceil(i * .5) : 10;
        return Math.ceil(t * (r <= 3 ? 1 : .55) * r)
    }

    function ci(t) {
        var i = Math.ceil(ys() * 1);
        $(t || r.activePage.find(".app-listview")).each(function() {
            var r = $(this),
                c = r.parent(),
                g = r.closest(".ui-page"),
                ft, pt = "w" + Math.ceil((l.width() - (nu() ? ie().outerWidth() : 0)) / i),
                u = vv[pt],
                nt, et, ot, wt, st, tt, ht = r.data("data-yardstick-class"),
                o = e.find("#app-yardstick"),
                bt = r.is(".app-grid"),
                it = c.is(".app-echo-inner"),
                dt, ai = it || c.is(".app-map-info"),
                gt, ni, vt, yt, ii, ri, ui, h, fi;
            if (u || (o.length || (o = $('<ul id="app-yardstick" class="app-listview"><li class="dv-item"><a><span>1<\/span><\/a><\/li><li><a class="dv-item">2<\/a><\/li><li><a class="dv-item">3<\/a><\/li><\/ul>').appendTo(e).listview()), it && bt && (c = w(c)), o.addClass("app-onecolumnview").appendTo(c).show(), nt = o.find("li").first(), ft = g.css("display"), ft != "block" && g.css("display", "block"), ot = nt.outerWidth(), o.toggleClass("app-onecolumnview  app-cardview"), et = nt.outerWidth(), o.toggleClass("app-cardview app-grid"), wt = o.find("span").first(), st = parseInt(wt.css("margin-left")), y.gridColumnPadding = st, dt = nt.outerWidth(), o.removeClass("app-grid"), ft != "block" && g.css("display", ""), o.appendTo(e).hide(), gt = hs(ot), ni = hs(et), u = {
                    listBreakpoint: gt,
                    cardBreakpoint: ni,
                    card: Math.floor(et / i),
                    list: Math.floor(ot / i),
                    columnPadding: st,
                    grid: {},
                    gridWidth: dt
                }, vv[pt] = u), tt = "app-listitem-" + (r.is(".app-cardview") ? u.cardBreakpoint : u.listBreakpoint), tt != ht && (ht && r.removeClass(ht), r.addClass("app-yardstick " + tt).data("data-yardstick-class", tt)), bt) {
                var ei = n.pageInfo(it ? kt(r).attr("data-for") : g.attr("id")),
                    t = ei.dataView,
                    a = t.session("grid-style"),
                    s = vu(t);
                if (!a || t.session("grid-style-changed") || s && (t.session("window-width") != l.width() || t.session("grid-with-sidebar") != nu())) {
                    t.session("grid-style-changed", null);
                    var oi = t._fields,
                        si = t._allFields,
                        ct = [],
                        v, hi = 0,
                        p = t.get_showMultipleSelection(),
                        f = r.is(":visible") ? r.width() : u.gridWidth,
                        lt = t._hasKey(),
                        ti = (lt ? 22 : 0) + (p ? 38 : 0) + y.gridColumnPadding,
                        rt = ti,
                        ut, vi = 2 * i + u.columnPadding,
                        h, b = t.gridSettings(),
                        at = new Sys.StringBuilder;
                    if ($(oi).each(function() {
                            var r = this,
                                n = si[this.AliasIndex];
                            r.Hidden || n.GroupBy || r.OnDemand || r.Type == "DataView" || (v = ap(n), ut = Math.ceil(Math.min(f * .5, v * i * (v <= 3 ? 1 : .55))), b && b.width[n.Name] && (ut = b.width[n.Name]), rt += ut + y.gridColumnPadding, hi += v, ct.push({
                                name: n.Name,
                                className: nl(t, n),
                                cols: v,
                                type: n.Type,
                                ew: ut,
                                long: n.ItemsDataController || n.Type == "String" && n.Rows > 1
                            }))
                        }), t) {
                        if (t.session("avail-width", f), vt = t.session("grid-avail-width"), yt = ti, t.tagged("grid-fit-none") && (s && vu(t, !1), s = !1), b) {
                            for (h in b.width) ri = !0;
                            ri && (s && vu(t, !1), s = !1)
                        }
                        vt == null || s ? (f -= y.gridColumnPadding + 1, it && (f -= y.width), s && (f < rt && (ui = (f - (p ? 22 : 0)) / rt, $(ct).each(function() {
                            var n = this,
                                t = tg(n, i);
                            n.ew = (n.ew + y.gridColumnPadding) * ui - y.gridColumnPadding;
                            n.ew < t && (n.ew = t, ii = !0);
                            yt += n.ew + y.gridColumnPadding
                        })), t.session("scroll-left", 0)), ii ? f = yt : s || (f = rt), t.session("grid-avail-width", Math.floor(f)), vu(t, s), t.session("window-width", l.width()), t.session("grid-with-sidebar", nu())) : f = vt
                    }
                    var ci, k = 0,
                        d = ls(t),
                        li = d != "_none_";
                    $(ct).each(function() {
                        h = this;
                        var n = h.ew;
                        h == ci && (lt && (n -= 22), p && (n -= 22 + u.columnPadding));
                        d != "_none_" && (k += n + u.columnPadding, (d == h.name || d == "_first_") && (d = "_none_"));
                        at.appendFormat(".{0} {{width:{1}px;max-width:{1}px}}", h.className, Math.floor(n));
                        at.appendLine()
                    });
                    fi = at.toString();
                    a || (a = cs(), t.session("grid-style", a));
                    a.text(fi);
                    k && (k += 4);
                    t.session("grid-frozen-width", !li && !p ? 0 : Math.floor(k + (lt ? 26 : 4)) + (p ? 22 + (k > 0 ? u.columnPadding : 4) : 0))
                }
            }
        })
    }

    function ig() {
        var r = n.pageInfo(),
            t, i;
        r && (t = r.dataView, i = t && t.extension(), i && t.get_isGrid() && (hk = !0, i.executeInContext("Eye", null, !1)))
    }

    function dt(t) {
        var i = n._menuButton;
        if (arguments.length == 0) return i.is(".app-transition");
        i && !t && n.toolbar().is(":visible") && (t ? i.removeClass("ui-icon-bars").addClass("app-transition") : i.removeClass(vh).addClass(yp() ? "ui-icon-bars" : "ui-icon-back"))
    }

    function tu() {
        dt(!0);
        l.one("beforeunload pagehide", function() {
            dt(!1)
        })
    }

    function vp() {}

    function yp() {
        var i = d(),
            t = n._pages;
        return i == "Main" || t.length && i == t[0].id && t[0].home
    }

    function pp() {
        var t = n._menuButton,
            r, u;
        t && n.toolbar().is(":visible") && (r = n.toolbar(), u = d(), yp() ? t.removeClass("ui-icon-back ui-icon-bars " + vh).addClass("ui-icon-bars").attr({
            "data-action": "#app-btn-menu",
            title: i.Menu
        }) : t.removeClass("ui-icon-bars " + vh).addClass("ui-icon-back").attr({
            "data-action": "#app-back",
            title: i.Back
        }))
    }

    function tl(n) {
        n.length && (av[d() + "_" + n.attr("id")] = n.find(".ui-panel-inner").scrollTop())
    }

    function rg(n) {
        n.length && n.find(".ui-panel-inner").scrollTop(av[d() + "_" + n.attr("id")] || 0)
    }

    function il(n) {
        var t = $(n.target).closest(".ui-btn,.app-grid-header").find(".app-btn-check");
        return t.length > 0 && ki(n.pageX) <= t.offset().left + t.outerWidth() + 8
    }

    function wp(n, t) {
        var u, i, f = ki(n.clientX),
            e = ke(n.clientY),
            o = $(n.target).closest(".ui-btn").find(".app-action-column"),
            r;
        return o.length && o.find(".app-action-column-button").each(function() {
            var n = $(this),
                o = n.offset();
            if (f >= o.left - 4 && f <= o.left + n.outerWidth() + 3 && e >= o.top - 6 && e <= o.top + n.outerHeight() + 4) return u = !0, n.addClass("ui-btn-active"), setTimeout(function() {
                n.removeClass("ui-btn-active");
                i = kt(n);
                cl(i);
                rh(t).removeClass("app-selected");
                r = n.closest(".ui-btn");
                t.extension().tap(r.data("data-context"), "none");
                i.length && r.addClass("app-selected");
                var u = [],
                    f = n.attr("data-action-path");
                ao("ActionColumn", t, u, t.extension().commandRow());
                $(u).each(function() {
                    var n = this;
                    if (n.path == f) return hi(n, r), !1
                });
                i.length ? hu(t, i) : ey(t._id)
            }, ft), !1
        }), u
    }

    function bp(n) {
        var t = $(n.target).closest(".ui-btn").find(".app-btn-more"),
            i = ki(n.clientX),
            r = ke(n.clientY);
        return t.length > 0 && t.offset().left - 8 <= i && i <= t.offset().left + t.outerWidth(!0) + 8 && t.offset().top - 8 <= r && r <= t.offset().top + t.outerHeight(!0) + 8
    }

    function kp(n) {
        return n.closest(".ui-btn").find(".app-btn-more")
    }

    function ih(n) {
        return String.format("app-style-dv-{0} app-style-c-{1} app-style-cv-{1}-{2}", n._id, n._controller, n._viewId)
    }

    function rh(n) {
        return $("#" + n._id).find('ul[data-role="listview"] li a')
    }

    function cr(n) {
        $(arguments).each(function(t) {
            t && (n ? $(this).addClass("app-btn-check-selected").closest(".ui-btn").addClass("app-checked").parent().addClass("app-checked") : $(this).removeClass("app-btn-check-selected").closest(".ui-btn").removeClass("app-checked").parent().removeClass("app-checked"))
        })
    }

    function uh(n) {
        n.is(".app-cardcolumn") && (n = n.parent());
        n.find("a.app-selected").removeClass("app-selected")
    }

    function rl(t, i) {
        function a() {
            o.length && hu(t, o)
        }
        var u = t._selectedKeyList,
            s = u.length == 0,
            e = r.activePage.find(".app-wrapper .app-style-dv-" + t._id),
            o = kt(e),
            h = e.find(".dv-item .ui-btn:not(.app-calculated) .app-btn-check"),
            v = e.closest(".ui-page").find(".app-grid-header .app-btn-check, .dv-heading .app-btn-check"),
            y = n.stickyHeaderBar().find(".app-grid-header .app-btn-check"),
            c, l;
        if (s && t._totalRowCount > nc) {
            f.alert(String.format(gt.Presenters.Charts.DataWarning, nc), function() {
                o.length && n.contextScope(t._id);
                ku({
                    mode: "everything"
                });
                n.contextScope(null)
            });
            return
        }
        if (u.splice(0, u.length), cr(s, h, v, y), s)
            if (h.length && !t.extension().commandRow() && (l = $(h[0]).closest(".ui-btn"), t.extension().tap(l.data("data-context"), "none"), o.length && l.addClass("app-selected")), t._keyFields.length == 1 && e.find(".dv-load-at-top,.dv-load-at-bottom,.dv-action-see-all").length) {
                if (t._busy()) return;
                c = t._createArgsForListOfValues(t._keyFields[0].Name);
                c.request.MaximumValueCount = nc;
                t._invoke("GetListOfValues", c, function(n) {
                    t._busy(!1);
                    $(n).each(function() {
                        u.push(this.toString())
                    });
                    t.set_selectedValue(u.join(";"));
                    fl(t);
                    a()
                })
            } else e.find(".dv-item .ui-btn:not(.app-calculated)").each(function() {
                u.push(t._createRowKey($(this).data("data-context").row))
            }), a();
        else i || t.extension().clearSelection(!0);
        t.set_selectedValue(u.join(";"));
        o.length ? (cr(s, n.page(t._id).find(".app-wrapper .app-listview .app-btn-check, .dv-heading .app-btn-check")), a()) : (n.pageInfo(t).echoChanged = !0, it());
        fl(t)
    }

    function ul(n) {
        return n.closest(".ui-page").find(".app-grid-header .app-btn-check, .dv-heading .app-btn-check")
    }

    function dp() {
        return n.stickyHeaderBar().find(".app-grid-header .app-btn-check")
    }

    function gp(n) {
        var t = n._selectedKeyList.length;
        return t ? " " + String.format(t > 1 ? i.ItemsSelectedMany : i.ItemsSelectedOne, t) + "." : ""
    }

    function fl(t) {
        var r = t._selectedKeyList.length,
            u = $("#" + t._id),
            i = $.merge(u.find(".app-multi-select-instruction"), $("#" + t._id + "_echo .app-multi-select-instruction"));
        d() == t._id && $.merge(i, n.stickyHeaderBar().find(".app-multi-select-instruction"));
        i.text(gp(t));
        r > 1 && fo()
    }

    function fo(t) {
        t || (t = n.stickyHeaderBar());
        t.find(".app-bar-text-instruction-hidden").removeClass("app-bar-text-instruction-hidden")
    }

    function el(t, i) {
        var h = t.extension(),
            a = i.find(".app-btn-check"),
            e = i.data("data-context"),
            r = t._selectedKeyList,
            c = r.length,
            v = e ? t._createRowKey(e.row) : t.get_selectedKey().join(";"),
            l = r.indexOf(v),
            u = i.closest(".ui-listview"),
            f = kt(u),
            y, p = dp(),
            o, s, w = i.is(".app-selected");
        y = ul(u);
        l != -1 ? (r.splice(l, 1), cr(!1, a), w && (uh(u), c > 1 ? t._clearSelectedKey() : h.clearSelection(!0), s = u.find(".dv-item.app-checked .ui-btn").first(), s.length ? (h.tap(s.data("data-context"), "none"), f.length && s.addClass("app-selected")) : r.length && t.sync(r[0])), f.length ? hu(t, f) : n.pageInfo(t).echoChanged = !0) : (r.push(v), cr(!0, a), uh(u), e && h.tap(e, "none"), f.length ? i.addClass("app-selected") : n.pageInfo(t).echoChanged = !0);
        cr(r.length, y, p);
        f.length && (u = n.page(t._id).find(".app-wrapper .app-listview"), u.length && (o = i.data("data-context"), u.find(".ui-btn").each(function() {
            var n = $(this),
                i = n.data("data-context"),
                f = 0;
            if (o && ($(t._keyFields).each(function() {
                    var n = t.findField(this.Name);
                    o.row && i && i.row && o.row[n.Index] == i.row[n.Index] && f++
                }), f == t._keyFields.length)) return checkBox = n.find(".app-btn-check"), l != -1 ? cr(!1, checkBox) : (uh(u), cr(!0, checkBox), n.addClass("app-selected")), cr(u, r.length, ul(u)), !1
        })));
        t.set_selectedValue(r.join(";"));
        (!c && r.length || c && !r.length) && it();
        fl(t)
    }

    function ol(n, t) {
        var l = n._fields,
            a = n._allFields,
            o = !0,
            r = $('<div data-draggable="grid-header" class="app-grid-header app-grid-header-cv-' + n._id + "-" + n._viewId + '"><\/div>').appendTo(t).attr("data-for", n._id),
            h = re(n),
            u = ls(n),
            e = u == "_none_",
            v = 0,
            c, f;
        return n.get_showMultipleSelection() && (f = $('<span class="app-btn-check"><\/span>').appendTo(r).attr("title", i.LookupSelectAction), $(pi).appendTo(f), n._selectedKeyList.length && f.addClass("app-btn-check-selected")), (u != "_none_" || f) && $('<span class="app-frozen-spacer ' + h + 'frozen_"/>').appendTo(r), $(l).each(function() {
            var f = this,
                t = a[f.AliasIndex],
                i, l, p, y, w, b;
            f.Hidden || t.GroupBy || f.OnDemand || f.Type == "DataView" || (i = $('<span data-draggable="grid-header-field"/>').addClass(nl(n, t)).text(t.HeaderText).attr("title", t.HeaderText).attr("data-field-name", t.Name).appendTo(r), t.Type.match(uv) ? i.addClass("app-field-type-numeric") : t.Type == "Boolean" && i.addClass("app-field-type-bool"), l = ru(n, t.Name), p = n.get_fieldFilter(t, !0), l && $('<span class="glyphicon"/>').appendTo(i).addClass("app-icon glyphicon-" + (l.match(/^asc/i) ? "sort-by-attributes" : "sort-by-attributes-alt")).attr("title", uu(t, l)), p && (b = $('<span class="app-icon glyphicon glyphicon-filter"><\/span>').appendTo(i), $(n._filter).each(function() {
                var n = this;
                if (n.startsWith(t.Name + ":")) return y = n, !1
            }), y && !s && (w = n._filter, n._filter = [y], b.attr("title", n.extension().filterStatus(!0)), n._filter = w)), o && (o = !1, oc(n, r)), c = $('<span class="app-field-separator" data-draggable="grid-header-separator"/>').appendTo(r), u != "_none_" ? (i.addClass("app-frozen"), t.Name == u || u == "_first_" ? (e = !0, u = "_none_") : c.addClass("app-frozen")) : e && (i.addClass(h + " app-scroll"), e = !1), v++)
        }), r
    }

    function nw(n, t, r, u) {
        if (n.get_showMultipleSelection()) {
            var f = $('<span class="app-btn-check"><\/span>').appendTo(u).attr("title", i.LookupSelectAction),
                e;
            $(pi).appendTo(f);
            r || (e = n._createRowKey(t), n._selectedKeyList.indexOf(e) != -1 && (f.addClass("app-btn-check-selected"), u.addClass("app-checked").parent().addClass("app-checked")))
        }
    }

    function sl(n, t) {
        var i = n.HyperlinkFormatString,
            r;
        return i && (r = n._dataView._parseLocation(i, t)), r
    }

    function eo(n, t, i, r, u) {
        if (u) switch (t.Type) {
            case "Date":
            case "DateTime":
                n.removeAttr("data-smart-type data-smart-value data-smart-text")
        }
        if (o.smartDates && i != null) {
            var f;
            switch (t.Type) {
                case "Date":
                case "DateTime":
                    f = iw(n, t.Type, i, r, new Date);
                    f && n.attr({
                        "data-smart-type": t.Type,
                        "data-smart-value": JSON.stringify(i),
                        "data-smart-text": r
                    })
            }
            return f && !h.smartValueInterval && (h.smartValueInterval = setTimeout(function() {
                tw();
                h.smartValueInterval = setInterval(tw, 6e4)
            }, 6e4 - (new Date).getSeconds() * 1e3)), f
        }
    }

    function tw(n) {
        n && n.length || (n = $("[data-smart-value]"));
        var t = new Date;
        n.each(function(i) {
            var r = n.eq(i),
                f = r.attr("data-smart-type"),
                u = JSON.parse(r.attr("data-smart-value")),
                e = r.attr("data-smart-text");
            switch (f) {
                case "Date":
                case "DateTime":
                    u = new Date(u)
            }
            iw(r, f, u, e, t)
        })
    }

    function iw(n, t, i, r, u) {
        if (i) switch (t) {
            case "Date":
            case "DateTime":
                var f = ug(i, u);
                return f ? (n.text(f), !0) : (n.removeAttr("data-smart-type").removeAttr("data-smart-value").removeAttr("data-smart-text").text(r), !1)
        }
    }

    function ug(n, t) {
        var f, c, u, h;
        if (n == null) return null;
        if (f = t - n, c = f / 864e5, c >= 8 || c < -14) return n.getYear() == t.getYear() ? String.format("{0:" + yr.MonthDayPattern.replace(/M+/, "MMM") + "}", n) + ue(n) : null;
        var o = t.getDate(),
            s = n.getDate(),
            e = o - s,
            l = yr.AbbreviatedDayNames,
            r = i.Dates;
        return ((f > 0 && s > o || f < 0 && s < o) && (e = -(s + (new Date(n.getFullYear(), n.getMonth(), 0).getDate() - o))), e > 1) ? r.Last + " " + l[n.getDay()] + ue(n) : e == 1 ? r.Yesterday + ue(n) : e == 0 ? rw(n) ? r.Today : (u = f / 6e4, h = u / 60, u %= 60, f > 0) ? h > 1 ? String.format("{0:" + yr.ShortTimePattern + "}", n) : h == 1 ? r.OneHour : u > 2 ? String.format(r.MinAgo, Math.floor(u)) : u > 1 ? r.AMinAgo : r.JustNow : h <= -1 ? String.format("{0:" + yr.ShortTimePattern + "}", n) : u <= -59 ? r.InHour : u < -2 ? String.format(r.InMin, -Math.floor(u)) : u < -1 ? r.InAMin : r.Now : e == -1 ? r.Tomorrow + ue(n) : e >= -7 ? l[n.getDay()] + ue(n) : r.Next + " " + l[n.getDay()] + ue(n)
    }

    function rw(n) {
        var t = n.getHours(),
            i = n.getMinutes(),
            r = n.getSeconds();
        return t == 0 && i == 0 && r == 0
    }

    function ue(n) {
        if (!rw(n)) {
            var t = n.getSeconds(),
                i = n.getMinutes(),
                r = n.getHours();
            if (r || i || t) return t == 0 ? ", " + String.format("{0:" + yr.ShortTimePattern + "}", n) : ", " + String.format("{0:" + yr.LongTimePattern + "}", n)
        }
        return ""
    }

    function oo(n, t, i, r, u) {
        var l = n._fields,
            a = n._allFields,
            h = re(n),
            e, f = ls(n),
            o = f == "_none_",
            c, s = !0,
            v = 0;
        (f != "_none_" || n.get_showMultipleSelection()) && $('<span class="app-frozen-spacer ' + h + 'frozen_"/>').appendTo(r);
        r.attr("data-draggable", "data-item");
        nw(n, t, u, r);
        $(l).each(function(l) {
            var b = this,
                y = a[b.AliasIndex],
                g = y.itemColumnClass || nl(n, y),
                p, w, d, nt, k = b.Items,
                tt;
            b.Hidden || y.GroupBy || b.OnDemand || b.Type == "DataView" || (p = $('<span data-draggable="data-item"><\/span>').appendTo(r).addClass(g + " app-field app-field-" + y.Name), y.itemColumnClass || (y.itemColumnClass = g), tt = w = t[u ? b.Index : y.Index], w == null ? (nt = !0, p.addClass("app-null")) : d = sl(b, t), w = y.text(w, y.TextMode != 3), s && oc(n, r, f != "_none_"), y.Type.match(uv) && p.addClass("app-field-type-numeric"), u ? (e = u ? u[l] : null, e && (w = t[b.Index], w = String.localeFormat(b.DataFormatString || "{0:n0}", w), p.text(w), $('<div class="app-static-text"><\/div>').text(e).insertBefore(p.contents()), p.attr("title", y.HeaderText + "\n" + e + " " + w))) : (y.Type == "Boolean" ? (p.addClass("app-field-type-bool"), !nt && k && k.length >= 2 && k[k.length - 1][1] == w ? $('<span class="app-icon glyphicon glyphicon-check"/>').appendTo(p) : p.html("&nbsp;")) : yy(y, w, p, !0), p.attr("title", y.HeaderText + ":\n" + w), d && p.attr("data-href", d)), eo(p, y, tt, w), s && i != null && $('<span class="app-item-number"/>').insertBefore(p.contents()).text(i + "."), u && (c = $('<span class="app-field-separator"/>').appendTo(r)), f != "_none_" ? (p.addClass("app-frozen"), y.Name == f || f == "_first_" ? (o = !0, f = "_none_") : u && c.addClass("app-frozen")) : o && (p.addClass(h), o = !1), v++, s = !1)
        })
    }

    function au(n, t, i, r, u, f, s, h) {
        var b = n._allFields,
            it = f.is("a"),
            k = $("<h3>").appendTo(f),
            g = b[i.heading],
            c, a, y, p, w;
        if (it && nw(n, t, null, f), i.thumb != null)
            if (c = t[i.thumb], c && c.toString().match(/^null/)) u.addClass("ui-li-has-thumb");
            else var vt = n.resolveClientUrl(n.get_appRootPath()),
                st = b[i.thumb],
                wt = $('<img class="ui-li-thumb"/>').appendTo(f).attr({
                    src: String.format("{0}blob.ashx?{1}=t|{2}{3}", vt, st.OnDemandHandler, c, st.OnDemandStyle == 2 ? "&_nocrop" : "")
                });
        if (c = t[i.heading], c = g.text(c), it && f.attr("title", c), g.HtmlEncode ? k.text(c) : k.html(c), k.addClass("app-field app-field-" + g.Name).attr("title", g.HeaderText + ":\n" + k.text()), r && $('<span class="app-item-number"/>').insertBefore(k.contents()).text(r + ". "), k.contents().wrap('<span class="app-field-data"/>'), i.desc.length) {
            var nt = $('<p class="app-para"/>').appendTo(f),
                d = nt,
                l, ht = 1,
                rt;
            $(i.desc).each(function(n) {
                var v = this,
                    e = b[v],
                    g = i.descLabels[n],
                    tt = i.descPara[n],
                    it = i.descColumn[n],
                    y, a, k = e.HeaderText,
                    h, p, w;
                tt && (d.is(".app-para") || (nt = $('<p class="app-para"/>').appendTo(f), l || nt.insertAfter(d), d = nt, ht++), l = null);
                it && (l || u.addClass("app-has-column"), l = $('<span class="app-column"/>').appendTo(f).addClass(l ? "" : "app-column-first"), y = 100 / i.descColumnCount + "%", l.css({
                    minWidth: y,
                    maxWidth: y
                }));
                c = t[v];
                p = c == null;
                h = $('<span class="app-item-desc"/>').insertAfter(d).addClass("app-field app-field-" + e.Name);
                l && h.appendTo(l);
                d = h;
                c = e.text(c);
                s ? (rt = $('<span class="app-field-data"/>').appendTo(h), yy(e, c, rt)) : e.HtmlEncode || e.TextMode == 3 ? h.text(c) : h.html(c);
                s && v == i.heading && (h.addClass("app-item-heading"), r && $('<span class="app-item-number"/>').insertBefore(rt.contents()).text(r + ". "));
                a = h.contents();
                h.attr("title", e.HeaderText + ":\n" + h.text());
                p || (i.descOriginal[n] != null && (e = b[i.descOriginal[n]]), w = sl(e, t), w && (a = a.wrap("<span/>").parent().attr("data-href", w)));
                g != null && ((o.labelsInList == "DisplayedAbove" || s) && $('<span class="app-field-label-before"/>').insertBefore(a.first()).text(k), o.labelsInList == "DisplayedBelow" && $('<span class="app-field-label-after"/>').insertAfter(a.last()).text(k));
                p ? a.wrap('<span class="app-null"/>') : s || a.wrap('<span class="app-field-data"/>');
                eo(s ? a : a.parent(), e, t[v], c)
            });
            ht > 1 && u.addClass("app-para-multi")
        }
        if (it) {
            var ut = n.extension(),
                yt = ut._commandRow,
                ft, ct = n.get_actionGroups("ActionColumn", !0),
                pt = 0,
                lt = ys();
            if (ct.length && h != !0) {
                ft = $('<span class="app-action-column"/>').appendTo(f);
                var et = sr(f.css("padding-left")),
                    ot = ct[0],
                    at = ot.groupText,
                    v = ot.groupTextMaxWidth,
                    tt;
                at && !v && (v = 0, tt = $('<span class="app-action-column"><span class="app-action-column-button"/><\/span>').appendTo(e).find("span"), $(at).each(function() {
                    tt.text(this);
                    v = Math.max(v, tt.outerWidth())
                }), tt.parent().remove(), ot.groupTextMaxWidth = v);
                ft.css({
                    left: et,
                    maxWidth: v
                });
                et += v + lt;
                f.css("padding-left", et / lt + "em");
                ut._commandRow = t;
                $(n.actionGroups("ActionColumn")).each(function() {
                    $(this.Actions).each(function() {
                        var n = this;
                        pt++;
                        $('<span class="app-action-column-button"/>').appendTo(ft).text(n.HeaderText).attr({
                            title: n.Description,
                            "data-action-scope": "ActionColumn",
                            "data-action-path": n.Path
                        })
                    })
                });
                ut._commandRow = yt
            }
            i.aside != null && (u.addClass("app-li-has-aside"), a = $('<p class="ui-li-aside"/>').appendTo(f), y = b[i.aside], c = t[i.aside], c = y.text(c), y.HtmlEncode ? a.text(c) : a.html(c), a.addClass("app-field app-field-" + y.Name).attr("title", y.HeaderText + ":\n" + a.text()), eo(a, y, t[i.aside], c), i.asideLabel && $('<span class="app-field-label"/>').insertBefore(a.contents()).text(y.HeaderText));
            i.count != null && (a == null || i.desc.length) && (p = $('<span class="ui-li-count"/>').appendTo(f), w = b[i.count], c = t[i.count], c = w.text(c), w.HtmlEncode ? p.text(c) : p.html(c), p.addClass("app-field app-field-" + w.Name).attr("title", w.HeaderText + ":\n" + p.text()), eo(p, w, t[i.count], c), i.countLabel && $('<span class="app-field-label"/>').insertBefore(p.contents()).text(w.HeaderText));
            oc(n, f)
        }
    }

    function fg(n, t, i) {
        var c = ".app-listview li a.app-selected,.app-wrapper .app-map",
            u = n._lookupInfo ? n._id : n._parentDataViewId || n._id,
            r = $("#" + u).find(c),
            e, o = f.find(u),
            h, s, l;
        return r.length || (r = $("#" + n._id + "_echo .app-echo-inner .app-selected"), u = n._id, o = n), r.length || (u = n._filterSource, r = $("#" + u).find(c), o = f.find(u)), r.length && (e = $('<li class="app-li-card">'), t && e.appendTo(t), r.is(".app-selected") ? (h = r.data("data-context"), h && (s = h.row)) : (l = r.data("data-map"), l && (s = o.extension().commandRow())), s && (au(o, s, o.extension().itemMap(), null, e, e), i != !1 && (contextDataView = f.find(u), $('<span class="app-li-corner">').appendTo(e.addClass("app-li-has-corner")).text(contextDataView.get_view().Label)), r.parent().is(".app-li-has-aside") && e.addClass("app-li-has-aside"))), e
    }

    function ti(t, i) {
        var u, f, e, s, h, o, c = "";
        if (i) f = i.closest(".ui-page");
        else {
            if (f = r.activePage, !f) return;
            i = f.find(".app-page-header")
        }
        if (s = i.find("h1"), h = i.find("h2"), e = f.attr("data-page-header") != "false", typeof t == "boolean") t && e ? i.show() : i.hide();
        else return u = i.data("data-text"), t ? (u && typeof u != "string" && typeof t == "string" && (u[1] = t, t = u), i.data("data-text", t)) : t = u, t && (typeof t == "string" ? o = t : (o = t[0], c = t[1])), i.attr("data-locked") != "true" && (s.text(o), h.text(c)), t != n.title() && e ? i.show() : (i.hide(), e && f.attr("data-page-header", "false")), t
    }

    function uw(n, t) {
        ai();
        var i = Math.ceil(l.width() * .9);
        !t && no() ? n.css({
            maxWidth: l.width() - 1,
            minWidth: l.width() - 1
        }) : (i > 800 && (i = 800), n.css({
            maxWidth: i
        }))
    }

    function so(t, i) {
        var f;
        if (i == null && (i = fr), fr = null, f = t.extension(), f.useAdvancedSearch()) fe(t, i, i && "none");
        else {
            if (d() != t._id) {
                var o = r.activePage.find("#" + n.pageInfo(t).echoId),
                    s = o.offset(),
                    h = kr(),
                    u = w(),
                    e = u.scrollTop();
                o.length && s.top - h + e > 0 && (u.data("restore-scroll-top", e), $('<div class="app-toolbar-stub"><\/div>').appendTo(u), si(u, s.top - h + e))
            }
            n.search("configure", {
                text: i || f.quickFind(),
                placeholder: sd(t),
                focus: !0,
                scope: t._id,
                setCursor: !!i
            })
        }
    }

    function fw(n) {
        var t = f.find($("#advanced-search").attr("data-scope"));
        gi() ? (t.extension().useAdvancedSearch(!1), v(n, function() {
            bi(function() {
                so(t)
            });
            cf = null
        })) : so(t)
    }

    function fh(n) {
        n.extension().useAdvancedSearch(!0);
        n.set_searchOnStart(!1);
        n._requiresContextRefresh = !0;
        fe(n, null)
    }

    function fe(t, u, h) {
        function ut(n, t, i, r) {
            var e = i.SearchOptions,
                u = t.FilterType;
            return {
                field: t.Name,
                originalField: i.Name,
                id: n._id,
                mappedId: n._mappedId,
                filterField: n._mappedId && n._filterFields[0],
                headerText: t.HeaderText,
                scopeText: n._mappedId && n.get_view().Label,
                filterType: u,
                operation: e && f.filterDef(at.Filters[u].List, e[0]) && e[0] || (u == "Boolean" ? "$true" : u == "Text" ? "$contains" : "="),
                value: null,
                value2: null,
                values: [],
                required: r == !0
            }
        }

        function ft(n, t, i) {
            var r = v(),
                f = r._fields,
                u = r._allFields;
            $(u).each(function() {
                var f = this,
                    s = u[f.AliasIndex],
                    e = f.Search,
                    o = e == 1 && n == "Required",
                    h = e == 2 && n === "Suggested",
                    c = e == 4,
                    l = !n && t.length < 3 || o || h;
                s.AllowQBE && l && !c && (!f.Hidden || o || h) && t.push(ut(r, s, f, o && i == !0))
            })
        }

        function k(n, t) {
            var a = t.find(".app-condition-list-field").text(n.headerText),
                i = n.operation,
                c = at.Filters[n.filterType],
                e = c.Kind.toLowerCase(),
                v = f.filterDef(c.List, i),
                l = !i.match(iv),
                y = l && i == "$between",
                s = t.find(".app-condition-list-operation"),
                r = t.find(".app-input-container").first(),
                p = r.find(".app-input-value"),
                w = r.find(".app-input-text"),
                h = r.next(),
                u = h.next(),
                b = u.find(".app-input-value"),
                k = u.find(".app-input-text"),
                o = t.find(".app-condition-list-values");
            n.scopeText && $("<span/>").appendTo(a).text(n.scopeText);
            s.text(v.Text);
            i.match(/month/) ? s.addClass("app-condition-list-operation-month") : s.removeClass("app-condition-list-operation-month");
            p.text(e);
            w.attr("placeholder", e);
            b.text(e);
            k.attr("placeholder", e);
            l ? r.show() : r.hide();
            y ? (h.show(), u.show()) : (h.hide(), u.hide());
            r.find(":input").val(n.value);
            u.find(":input").val(n.value2);
            i == "$in" || i == "$notin" ? (o.show(), o.text(n.lovText || ff.SelectLink), o.addClass("app-has-children")) : o.hide();
            t.data("condition", n)
        }

        function pt(n, t) {
            var r = $('<li class="app-condition ui-body-a"><\/li>').appendTo(t),
                f, u;
            return f = $('<a class="app-condition-list-field app-btn-select ui-btn ui-corner-all ui-btn-inline"/>').appendTo(r), (!n.required || r.closest(".app-conditions").prev().length) && f.addClass("app-has-children"), $('<a class="app-condition-list-operation app-btn-select ui-btn app-has-children ui-corner-all ui-btn-inline"/>').appendTo(r), u = $('<div class="app-input-container ui-first-child"><\/div>').appendTo(r), $('<input type="text" class="app-input-text"/>').appendTo(u), $('<span class="app-input-value"/>').appendTo(u).css("visibility", "hidden"), $('<span class="app-condition-and"/>').appendTo(r).text(at.Filters.Labels.And), u = $('<div class="app-input-container ui-last-child"><\/div>').appendTo(r), $('<input type="text" class="app-input-text"/>').appendTo(u), $('<span class="app-input-value"/>').appendTo(u).css("visibility", "hidden"), $('<a class="app-condition-list-values app-btn-select ui-btn ui-corner-all ui-btn-inline"/>').appendTo(r), $('<a class="ui-btn ui-btn-icon-notext app-btn-icon-transparent app-btn-more ui-btn-right"/>').appendTo(r).attr("title", i.More), k(n, r), r
        }

        function et(n, t) {
            var r = $('<ul class="app-condition-list ui-body-a"/>').appendTo($('<div class="app-conditions"><\/div>').appendTo(c)).data("group", t),
                f = $('<li class="app-matching ui-body-a"><\/li>').appendTo(r),
                u;
            return $('<a class="app-condition-list-scope app-btn-select ui-btn app-has-children ui-corner-all ui-btn-inline"/>').appendTo(f).text(i[t.scope]), $('<a class="ui-btn ui-btn-icon-notext app-btn-icon-transparent app-btn-more ui-btn-right"/>').appendTo(f).attr("title", i.More), $(t.conditions).each(function() {
                pt(this, r)
            }), u = $('<li class="app-condition app-condition-more ui-body-a"><\/li>').appendTo(r), $('<a class="app-condition-list-field app-btn-select ui-btn ui-corner-all ui-btn-inline app-has-children"/>').appendTo(u).text(ri.AddConditionText), b(t).length || !l() && st().length || u.hide(), r.parent()
        }

        function wt(n, t, i) {
            var r = r = {
                    scope: "MatchAll",
                    required: !1
                },
                u = [],
                f = [];
            ft("Required", u, i);
            ft("Suggested", f);
            u.length ? r.conditions = u.concat(f) : f.length ? r.conditions = f : (ft(null, u), r.conditions = u, t && (n.push(r), r = JSON.parse(JSON.stringify(r)), r.scope = "MatchAny"));
            n.push(r)
        }

        function b(n, t) {
            function e(n, t) {
                $(n._allFields).each(function() {
                    var i = this,
                        u = n._allFields[i.AliasIndex],
                        f = i.Search,
                        e = f == 4;
                    u.AllowQBE && !e && (!i.Hidden || i.Search >= 1 && i.Search <= 3) && r.indexOf(u.Name + "." + n._mappedId) == -1 && (!n._mappedId || i.Name != n._filterFields[0]) && t.push(i)
                })
            }
            var u = l(),
                i = [],
                r = [],
                f, o;
            if ($(n.conditions).each(function() {
                    r.push(this.field + "." + this.mappedId)
                }), f = r.indexOf(t), f >= 0 && r.splice(f, 1), e(v(), i), u) {
                i._hasChildren = !0;
                for (o in u) e(u[o], i)
            }
            return i
        }

        function bt(n, t, i, r) {
            var u;
            $(n).each(function() {
                var s = this,
                    f = s._dataView,
                    e = f._mappedId,
                    h, o;
                o = f._allFields[s.AliasIndex];
                n._hasChildren && (u ? e && u != e && (t.push({
                    text: f.get_view().Label
                }), u = e) : (t.push({
                    text: f.get_view().Label
                }), u = f._id || e));
                h = i == o.Name + "." + e;
                t.push({
                    text: o.HeaderText,
                    icon: h ? "check" : !1,
                    visible: h,
                    context: {
                        field: o.Name,
                        originalField: s.Name,
                        id: f._id,
                        mappedId: e
                    },
                    callback: r
                })
            })
        }

        function kt(n, t, i) {
            function e(t, u) {
                for (var s = 0; s < t.length; s++) {
                    var o = t[s],
                        h = o && o.Function,
                        c = h == n.operation;
                    o ? o.List ? e(o.List, u) : f && r.indexOf(h) == -1 || u.push({
                        text: o.Text,
                        icon: c ? "check" : !1,
                        visible: c,
                        context: h,
                        callback: i
                    }) : f || u.push({})
                }
            }
            var u = tt(n),
                o = u.findField(n.field),
                s = u.findField(n.originalField),
                r = s.SearchOptions,
                f = r && r.length;
            e(at.Filters[o.FilterType].List, t)
        }

        function d(n, t) {
            var i = st(),
                r = [];
            (uc().length || n == !0) && ($(i).each(function() {
                var n = f.find(this.id);
                r.push({
                    Controller: n._controller,
                    View: n._viewId,
                    RequiresMetaData: !0,
                    DoesNotRequireData: !0
                })
            }), f._invoke("GetPageList", {
                requests: r
            }, function(r) {
                if (n == !0 || n()) {
                    var u = {};
                    $(r).each(function(n) {
                        var r = this,
                            f = i[n],
                            o = f.id,
                            t = new Web.DataView($("<div><\/div>").appendTo(e));
                        t._render = er;
                        r.Expressions = [];
                        t._servicePath = v()._servicePath;
                        t._controller = r.Controller;
                        t._viewId = r.View;
                        t._onGetPageComplete(r);
                        t._filterFields = f.filterFields;
                        t._mappedId = o;
                        u[o] = t
                    });
                    l(u);
                    t()
                }
            }))
        }

        function dt(n, t) {
            var i = n.find(".ui-listview"),
                r = !s,
                u;
            r && i.hide();
            items = [];
            t(items);
            du(i);
            aa(i, items, {});
            i.listview("refresh");
            r && i.show();
            u = n.data("position-options");
            n.popup("reposition", n.data("position-options"))
        }

        function ci(n, t, i) {
            var r = [],
                u;
            t.mappedId && !l() ? r.push({
                text: ot.Loading,
                icon: "refresh",
                animate: !0,
                context: {},
                keepOpen: !0,
                callback: er
            }) : kt(t, r, i);
            nt({
                anchor: n,
                items: r,
                afterclose: function() {
                    u = !0;
                    ei()
                },
                afteropen: function() {
                    var n = this;
                    d(function() {
                        return u != !0
                    }, function() {
                        dt(n, function(n) {
                            kt(t, n, i)
                        })
                    })
                }
            })
        }

        function gt(n, t, i, r) {
            var s = v(),
                e = st(),
                o = b(t, i),
                u = [],
                f;
            bt(o, u, i, r);
            e.length && !l() && u.push({
                text: ot.Loading,
                icon: "refresh",
                animate: !0,
                context: {},
                keepOpen: !0,
                callback: function() {}
            });
            nt({
                anchor: n,
                items: u,
                afterclose: function() {
                    f = !0;
                    ei()
                },
                afteropen: function() {
                    var n = this;
                    d(function() {
                        return f != !0
                    }, function() {
                        dt(n, function(n) {
                            bt(b(t, i), n, i, r)
                        })
                    })
                }
            })
        }

        function v() {
            return f.find(a.attr("data-scope"))
        }

        function l(n) {
            if (arguments.length == 0) return a.data("detail-map");
            a.data("detail-map", n)
        }

        function st(t) {
            t || (t = v());
            var i = [];
            return $(n._pages).each(function() {
                var r = this,
                    n = r.dataView;
                n && n._filterSource == t._id && i.push({
                    id: n._id,
                    filterFields: n._filterFields.split(/,/)
                })
            }), i
        }

        function ni(t) {
            var i = a.find(".app-wrapper"),
                r = t.closest(".app-conditions"),
                u = r.offset();
            he(i, i.scrollTop() + u.top - (i.height() - r.outerHeight()) / 2, function() {
                n.blink(t.find(".app-matching .app-btn-select"), function() {
                    s || t.find("input:visible").first().focus()
                })
            })
        }

        function ht(t) {
            n.blink(t, function() {
                s || t.parent().find(":input:visible").first().focus()
            })
        }

        function li() {
            f.confirm(i.ResetSearchConfirm, function() {
                var n = v();
                n.viewProp("advancedSearchConfig", null);
                fe(n, null, "no")
            })
        }

        function ii(n, t) {
            if (t && t.length) {
                var u = t.slice().reverse(),
                    r = !0;
                $(u).each(function() {
                    var t = this,
                        f, u;
                    n && t.count < 5 || !n && t.count >= 5 || (r && (r = !1, $('<div class="app-clear-fix"><\/div>').appendTo(c), $('<div class="app-header"><\/div>').appendTo(c).text(n ? i.Favorites : i.Recent)), f = $('<ul class="app-condition-list app-condition-list-history ui-body-a"/>').appendTo($('<div class="app-conditions"><\/div>').appendTo(c)), u = $('<li class="app-condition app-condition-history ui-body-a"><\/li>').appendTo(f), $("<div><\/div>").appendTo(u).text(t.date), $("<div><\/div>").appendTo(u).text(t.text), $('<a class="ui-btn ui-btn-icon-notext app-btn-icon-transparent app-btn-more ui-btn-right"/>').appendTo(u).attr("title", i.More))
                })
            }
        }

        function g(n) {
            if (!n) return c.find(".app-clear-fix").nextAll().andSelf().detach();
            n.appendTo(c)
        }

        function ui(n, t) {
            var i = -1;
            return $(n).each(function(n) {
                if (this.text == t) return i = n, !1
            }), i
        }

        function fi(n, t, i) {
            var u = n[ui(n, t)],
                r = v();
            r.viewProp("advancedSearchConfig", u.config);
            he(w(), 0, function() {
                fe(r, null, i)
            })
        }

        function tt(n) {
            return f.find(n.id) || l()[n.mappedId]
        }

        function ai() {
            var t, n;
            o.pageTransition != "none" && u && h != "none" && (t = r.navigate.history.stack, t[t.length - 1].transition = "slidedown");
            n = c.find("input:visible").first();
            n.length && (u && !n.val().length && (n.val(u), n.closest(".app-condition").data("condition").value = u), s || (sc(n, n.val().length), n.focus()))
        }
        var vi = t.get_filter(),
            yi = t.extension(),
            p = n.content("advanced-search"),
            a = p.closest(".ui-page"),
            rt = p.find(".app-page-header"),
            lt = t.get_view().Label,
            vt = i.AdvancedSearch,
            c = p.find(".app-panel-filter"),
            yt = t.viewProp("advancedSearchRecent"),
            y, it, oi, ct, si, hi;
        if (sy(), sa(), n._contextButton.show().removeClass("ui-icon-dots").addClass("ui-icon-carat-d").attr("title", ri.HideAdvancedSearch), a.attr("data-scope") != t._id || a.attr("data-view") != t._viewId) {
            if (a.attr("data-scope", t._id), a.attr("data-view", t._viewId), it = l(), it)
                for (oi in it) ct = it[oi], ct._element.remove(), ct.dispose();
            l(null);
            a.find(".app-wrapper").data("scroll-top", null)
        }
        if (rt.attr("data-locked", "false"), ti(lt == n.title() ? [vt, ""] : [lt, vt], rt), rt.attr("data-locked", "true"), a.addClass("app-page-search app-page-scrollable"), wf(function() {
                cf = function() {
                    t._totalRowCount == -1 && t.sync()
                }
            }), !c.length) {
            c = $('<div class="app-panel-filter"><\/div>').appendTo($("<div><\/div>").appendTo(p)).on("vclick", function(t) {
                var r = $(t.target).closest(".ui-btn"),
                    u = c.data("config");
                r.length && n.callWithFeedback(r, function() {
                    var h, t, e, n;
                    if (r.is(".app-btn-more"))
                        if (r.parent().is(".app-matching")) nt({
                            anchor: r,
                            iconPos: "left",
                            tolerance: 2,
                            items: [{
                                text: ou.Delete.HeaderText,
                                icon: "trash",
                                callback: function() {
                                    var n = r.closest(".app-condition-list"),
                                        i = n.data("group"),
                                        t = !0;
                                    $(n).find(".app-condition").each(function() {
                                        var n = $(this),
                                            i = n.data("condition");
                                        if (i && i.required) return t = !1, nt({
                                            anchor: n.find(".app-condition-list-field"),
                                            title: uf.RequiredField
                                        }), !1
                                    });
                                    t && (u.splice(u.indexOf(i), 1), n.find(".app-condition").data("condition", null), n.data("group", null).parent().remove())
                                }
                            }, {
                                text: ou.Duplicate.HeaderText,
                                icon: "duplicate",
                                callback: function() {
                                    var n = r.closest(".app-condition-list").data("group"),
                                        t, i = g();
                                    n = JSON.parse(JSON.stringify(n));
                                    u.push(n);
                                    t = et(v(), n);
                                    c.find(".app-matching-more").closest(".app-conditions").appendTo(c);
                                    g(i);
                                    ni(t)
                                }
                            }],
                            afterclose: ei
                        });
                        else if (r.parent().is(".app-condition-history")) {
                        var w = v(),
                            p = r.parent().find("div").last().text(),
                            s = w.viewProp("advancedSearchRecent");
                        r.parent().addClass("app-selected");
                        nt({
                            anchor: r,
                            iconPos: "left",
                            tolerance: 2,
                            items: [{
                                text: ri.PerformAdvancedSearch,
                                icon: "search",
                                callback: function() {
                                    fi(s, p, "search")
                                }
                            }, {
                                text: ou.Edit.HeaderText,
                                icon: "edit",
                                callback: function() {
                                    fi(s, p, "no")
                                }
                            }, {}, {
                                text: ou.Delete.HeaderText,
                                icon: "trash",
                                callback: function() {
                                    s.splice(ui(s, p), 1);
                                    w.viewProp("advancedSearchRecent", s);
                                    var n = r.closest(".app-conditions");
                                    n.prev().is(".app-header") && !n.next().is(".app-conditions") && (n.prev().remove(), n.prev().remove());
                                    n.remove()
                                }
                            }],
                            afterclose: function() {
                                r.parent().removeClass("app-selected");
                                ei()
                            }
                        })
                    } else r.parent().is(".app-condition") && nt({
                        anchor: r,
                        iconPos: "left",
                        tolerance: 2,
                        items: [{
                            text: ou.Delete.HeaderText,
                            icon: "trash",
                            callback: function() {
                                var n = r.closest(".app-condition-list"),
                                    t = n.data("group"),
                                    i = r.parent(),
                                    f = i.data("condition");
                                f.required && !r.closest(".app-conditions").prev().length ? nt({
                                    anchor: i.find(".app-condition-list-field"),
                                    title: uf.RequiredField
                                }) : (t.conditions.splice(t.conditions.indexOf(f), 1), i.data("condition", null).remove(), n.find(".app-condition").length <= 1 ? (u.splice(u.indexOf(t), 1), n.data("group", null).parent().remove()) : b(t).length && n.find(".app-condition-more").show())
                            }
                        }],
                        afterclose: ei
                    });
                    else if (r.is(".app-btn-select"))
                        if (r.is(".app-condition-list-scope")) {
                            t = r.closest(".app-condition-list").data("group");

                            function a(n) {
                                t.scope = n;
                                r.text(i[n])
                            }
                            nt({
                                anchor: r,
                                iconPos: "left",
                                items: [{
                                    text: i.MatchAll,
                                    context: "MatchAll",
                                    icon: t.scope == "MatchAll" ? "check" : !1,
                                    callback: a
                                }, {
                                    text: i.MatchAny,
                                    context: "MatchAny",
                                    icon: t.scope == "MatchAny" ? "check" : !1,
                                    callback: a
                                }, {
                                    text: i.DoNotMatchAll,
                                    context: "DoNotMatchAll",
                                    icon: t.scope == "DoNotMatchAll" ? "check" : !1,
                                    callback: a
                                }, {
                                    text: i.DoNotMatchAny,
                                    context: "DoNotMatchAny",
                                    icon: t.scope == "DoNotMatchAny" ? "check" : !1,
                                    callback: a
                                }],
                                afterclose: ei
                            })
                        } else if (r.parent().is(".app-matching-more")) {
                        function y(n) {
                            wt(u, !1, u.length == 0);
                            var t = u[u.length - 1],
                                i, f = g();
                            t.scope = n;
                            i = et(v(), t);
                            r.closest(".app-conditions").appendTo(c);
                            g(f);
                            ni(i)
                        }
                        nt({
                            anchor: r,
                            items: [{
                                text: i.MatchAll,
                                context: "MatchAll",
                                callback: y
                            }, {
                                text: i.MatchAny,
                                context: "MatchAny",
                                callback: y
                            }, {
                                text: i.DoNotMatchAll,
                                context: "DoNotMatchAll",
                                callback: y
                            }, {
                                text: i.DoNotMatchAny,
                                context: "DoNotMatchAny",
                                callback: y
                            }],
                            afterclose: ei
                        })
                    } else if (r.parent().is(".app-condition-more")) h = r.closest(".app-condition-list"), t = h.data("group"), gt(r, t, null, function(n) {
                        var i = tt(n),
                            u = ut(i, i.findField(n.field), i.findField(n.originalField)),
                            f;
                        t.conditions.push(u);
                        f = pt(u, h);
                        r.parent().appendTo(h);
                        b(t).length ? r.parent().show() : r.parent().hide();
                        ht(f.find(".app-condition-list-field"))
                    });
                    else if (r.is(".app-condition-list-field")) {
                        var h = r.closest(".app-condition-list"),
                            t = h.data("group"),
                            e = r.parent(),
                            o = e.data("condition");
                        o.required && !r.closest(".app-conditions").prev().length ? nt({
                            anchor: e.find(".app-condition-list-field"),
                            title: uf.RequiredField
                        }) : gt(r, t, o.field + "." + o.mappedId, function(n) {
                            var u = tt(n),
                                i = ut(u, u.findField(n.field), u.findField(n.originalField));
                            i.value = o.value;
                            i.value2 = o.value2;
                            f.filterDef(at.Filters[i.filterType].List, o.operation) && (i.operation = o.operation);
                            t.conditions[t.conditions.indexOf(o)] = i;
                            k(i, e);
                            ht(r)
                        })
                    } else if (r.is(".app-condition-list-operation")) e = r.parent(), n = e.data("condition"), ci(r, n, function(t) {
                        n.operation = t;
                        k(n, e);
                        ht(r)
                    });
                    else if (r.is(".app-condition-list-values")) {
                        e = r.parent();
                        n = e.data("condition");

                        function it() {
                            var t = tt(n),
                                i = n.field;
                            yn(r, t, i, n.lov, function(r) {
                                var s = r.match(/^\w+\:((\$\w+)\$|=)(.+)$/),
                                    f = t.findField(i),
                                    u = n.operation,
                                    h, o, c = [];
                                s ? (h = n.lov = s[3], o = s[1], o == "=" ? u = "=" : u == "$in" ? o == "$in$" || (u = "$notin") : o == "$in$" || (u = "$in"), n.operation = u, u == "=" ? (n.value = f.text(t.convertStringToFieldValue(f, h)), n.lovText = null, n.lov = null) : ($(h.split(/\$or\$/g)).each(function() {
                                    var n = t.convertStringToFieldValue(f, this);
                                    c.push(f.text(n))
                                }), n.lovText = c.join(", "))) : (n.lov = null, n.lovText = null);
                                k(n, e);
                                ei()
                            }, ei)
                        }
                        n.mappedId && !l() ? d(!0, it) : it()
                    }
                })
            });
            c.on("change", function(n) {
                var t = $(n.target),
                    i, r;
                t.is(".app-input-text") && (i = t.closest(".app-condition").data("condition"), r = t.val(), t.parent().is(".ui-first-child") ? i.value = r : i.value2 = r)
            }).on("vclick", function(n) {
                var t = $(n.target);
                if (t.is(".app-condition")) return t.find(":input:visible").first().focus(), !1
            });
            $('<div class="app-promo-filler"><\/div>').appendTo(p);
            $(document).on("sidebar.app", function(n) {
                if (gi()) {
                    var t = n.items;
                    t.splice(0, t.length);
                    t.push({
                        text: i.AdvancedSearchInstruction,
                        isStatic: !0,
                        wrap: !0
                    });
                    t.push({});
                    t.push({
                        text: ri.ResetAdvancedSearch,
                        icon: "refresh",
                        callback: li
                    })
                }
            }).on("search.app", function(t, i) {
                function e() {
                    var n, d = l(),
                        t = v(),
                        g = {
                            MatchAll: "_match_:$all$",
                            MatchAny: "_match_:$any$",
                            DoNotMatchAll: "_donotmatch_:$all$",
                            DoNotMatchAny: "_donotmatch_:$any$"
                        },
                        o = {
                            positive: [],
                            negative: []
                        },
                        a, s, h, y, e, p = [],
                        w = [],
                        b = {},
                        k = 0,
                        u;
                    $(r).each(function(t) {
                        var i = this,
                            r, u;
                        $(i.conditions).each(function(e) {
                            function rt(n, i, r) {
                                return {
                                    gIndex: t,
                                    cIndex: e,
                                    text: n,
                                    focus: i,
                                    focus2: r
                                }
                            }
                            var s = this,
                                h = s.operation,
                                ut = !h.match(iv),
                                ft = s.value,
                                y, et = s.value2,
                                p, nt = f.find(s.id) || s.mappedId && d[s.mappedId],
                                tt = nt.findField(s.field),
                                it = tt.Name,
                                c, a, v = "",
                                ot;
                            if (ut ? (String.isBlank(ft) ? s.required && (n = rt(uf.RequiredField, !0)) : (y = {
                                    NewValue: ft.trim()
                                }, a = nt._validateFieldValueFormat(tt, y, !0), a ? n = rt(a, !0) : v = nt.convertFieldValueToString(tt, y.NewValue)), n || h == "$between" && (String.isBlank(et) ? s.required && (n = rt(uf.RequiredField, !1, !0)) : (p = {
                                    NewValue: et.trim()
                                }, a = nt._validateFieldValueFormat(tt, p, !0), a && (n = rt(a, !1, !0))), y && p && (!n && y.NewValue >= p.NewValue && (n = rt(et + " " + ok.LessThanOrEqual + " " + ft, !1, !0)), n || (v += "$and$" + nt.convertFieldValueToString(tt, p.NewValue))))) : (h == "$in" || h == "$notin") && (v = s.lov, ut = !0), n) return !1;
                            if (!ut || v) {
                                if (s.mappedId && (c = l()[s.mappedId], c == null)) return;
                                r || (r = !0, u = i.scope.startsWith("DoesNot") ? o.negative : o.positive, u.push(g[i.scope]), k++);
                                h.match(/\$/) && (h += "$");
                                s.mappedId && (ot = new Sys.StringBuilder, c._fieldNameHint = {}, c._fieldNameHint[it] = s.headerText + " (" + s.scopeText.toUpperCase() + ")", c._renderFilterDetails(ot, [it + ":" + h + v], !1), it += "," + c._controller + "." + (c._viewId || "grid1") + "." + s.filterField, b[it.replace(/\W/g, "_") + (k - 1)] = ot.toString());
                                u.push(it + ":" + h + v)
                            } else w.push(s)
                        });
                        r || p.push(i)
                    });
                    n ? (a = c.find(".app-condition-list").get(n.gIndex), s = $($(a).find(".app-condition").get(n.cIndex)), h = n.focus ? s.find(".ui-first-child .app-input-text") : n.focus2 ? s.find(".ui-last-child .app-input-text") : s.find(".app-condition-list-field"), nt({
                        anchor: h,
                        title: n.text,
                        xOffset: 8,
                        yOffset: "bottom",
                        afterclose: function() {
                            h.is(":input") && h.focus();
                            ei()
                        }
                    })) : (t.viewProp("advancedSearchFilter", o.positive.concat(o.negative)), $(r).each(function() {
                        var n = this;
                        $(w).each(function() {
                            var t = n.conditions.indexOf(this);
                            t >= 0 && n.conditions.splice(t, 1)
                        })
                    }), $(p).each(function() {
                        var n = r.indexOf(this);
                        n >= 0 && r.splice(n, 1)
                    }), t.viewProp("advancedSearchConfig", r.length == 0 ? null : r), t.viewProp("deepSearchInfo", b), r.length && (y = t._filter, t._filter = [], e = t.extension().filterStatus(), t._filter = y, u = t.viewProp("advancedSearchRecent") || [], $(u).each(function(n) {
                        var t = this;
                        if (t.text == e) return t.date = wy(), t.count++, u.splice(n, 1), u.push(t), e = null, !1
                    }), e && (u.push({
                        text: e,
                        date: wy(),
                        count: 1,
                        config: r
                    }), u.length > 30 && u.splice(30, 1)), t.viewProp("advancedSearchRecent", u)), i())
                }
                n.promo(!1);
                var r = [],
                    u;
                c.find(".app-condition-list").each(function() {
                    var n = $(this).data("group");
                    n && (r.push(n), $(n.conditions).each(function() {
                        this.mappedId && (u = !0)
                    }))
                });
                u && !l() ? d(!0, e) : e()
            })
        }
        if (y = t.viewProp("advancedSearchConfig"), y || (y = [], wt(y, !0, !0)), c.data("condition", null), c.find(".app-condition").data("condition", null), c.data("config", y).find(".app-condition-list").data("group", null).parent().remove(), c.find(".app-header,.app-clear-fix").remove(), $(y).each(function() {
                et(t, this)
            }), si = $('<ul class="app-condition-list app-condition-list-more ui-body-a"/>').appendTo($('<div class="app-conditions"><\/div>').appendTo(c)), hi = $('<li class="app-matching app-matching-more ui-body-a"><\/li>').appendTo(si), $('<a class="app-condition-list-field app-btn-select app-has-children ui-btn ui-corner-all ui-btn-inline"/>').appendTo(hi).text(i.AddMatchingGroup), ii(!0, yt), ii(!1, yt), $('<div class="app-clear-fix"><\/div>').appendTo(c), h == "no") {
            n.blink(c.find(".app-condition-list-scope"));
            return
        }
        if (h == "search") {
            n.blink(c.find(".app-condition-list-scope"), function() {
                hl(!1)
            });
            return
        }
        wf(ai);
        pc(a);
        r.changePage("#advanced-search", {
            changeHash: !0,
            transition: o.pageTransition == "none" ? "none" : h || "slidedown"
        })
    }

    function hl(t) {
        t ? v(n.promo(), function() {
            hl()
        }) : $(document).trigger("search.app", function() {
            var t = $("#advanced-search"),
                i = f.find(t.attr("data-scope")),
                n = r.navigate.history.stack;
            n[n.length - 1].transition = "none";
            bi(function() {
                io(i)
            });
            cf = null
        })
    }

    function eg(t, u) {
        function b() {
            (s || e.length > 0 && !t.get_useCase()) && (s && u.parent().addClass("app-page-tasks"), f = $('<ul data-role="listview" data-inset="true" data-shadow="false" class="app-listview app-listview-static"/>').appendTo(u), t && (y = fg(t, f, s)))
        }

        function k() {
            s && (e.length && e.push({}), e.push({
                text: i.Settings,
                icon: "gear",
                callback: function() {
                    n.contextScope("_taskAssistant");
                    ia()
                }
            }))
        }
        var e = [],
            h, a = n.pageInfo(t && t._id),
            s = !t,
            f, y, c = !1,
            l, p = "eye",
            g, w;
        if (t || (t = a && a.dataView), u || (u = n.content("taskassistant"), h = u.closest(".ui-page"), h.find(".app-page-header").remove(), h.addClass("app-page-tasks app-page-scrollable"), u.find('ul[data-role="listview"]').listview("destroy").remove(), n.tabs("destroy", {
                container: h
            }), pc(h)), t && (n.contextScope(t._id), e.isTaskAssistant = s, n.navContext(e, !s), n.contextScope(null), e.length && e[0].icon == tt && (e = e.splice(1)), b(), s && (t.inserting() ? (l = "Entering", p = "plus") : t.editing() ? (l = "Editing", p = "edit") : t._lookupInfo && (l = "Lookup")), !1 && n.renderContext(f, e, function(n) {
                var t = n.navigateTo == "detail";
                return t && (c = !0), t
            }), s && (c && $('<li data-role="list-divider">').appendTo(f), g = $("<li>").appendTo(f).attr("data-icon", p), resumeLink = $("<a/>").appendTo(g).text(i["Resume" + (l || (t.get_isForm() ? "Viewing" : "Browsing"))]), $('<p class="app-item-desc"/>').appendTo(resumeLink).text(a.text), k(), c = !0, n.renderContext(f, e, function(n) {
                return c && (c = !1, $('<li data-role="list-divider"/>').appendTo(f)), !n.navigateTo && (n.callback || n.href) && n.icon != "dots" && (!n.command || !n.command.match(/^(Eye|SideBar)$/))
            }))), s && !t && (k(), b(), n.renderContext(f, e)), f) {
            f.listview().on("vclick", function(n) {
                ai();
                var t = $(n.target).closest("a").andSelf("a"),
                    i = t.data("context-action"),
                    u = r.navigate.history.stack;
                return t.length && !hp(n) && v(t, function() {
                    d() == "taskassistant" ? (u[u.length - 1].transition = "none", bi(function() {
                        setTimeout(function() {
                            hi(i)
                        }, ft)
                    })) : hi(i)
                }), !1
            });
            f.find(".ui-btn-icon-right").toggleClass("ui-btn-icon-right ui-btn-icon-left");
            ci(f)
        }
        s && f && f.find("li").first().length && (w = [{
            text: ev.Tasks,
            content: $('#taskassistant ul[data-role="listview"]')
        }, {
            text: i.Recent,
            content: $()
        }, {
            text: i.Favorites,
            content: $()
        }], n.tabs("create", {
            tabs: w,
            className: "ui-header-fixed app-tabs-tasks",
            id: "tasks",
            scope: "user",
            placeholder: u
        }), wf(hr), r.changePage("#taskassistant", {
            changeHash: !0,
            transition: o.pageTransition == "none" ? "none" : "slidedown"
        }));
        s || !y || y.next().length || f.off().listview("destroy").remove()
    }

    function ee(n) {
        n.find(".app-listview a").removeData();
        n.find('ul[data-role="listview"]').listview("destroy").remove()
    }

    function og(n, t) {
        var r, u;
        typeof n == "string" && (n = f.find(n));
        u = n.extension().viewStyle();
        t.push({});
        u != "Grid" || n.tagged("grid-fit-none") || (r = n.viewProp("grid-is-fitted") != !1, t.push({
            text: i.FitToWidth,
            icon: r ? "check" : !1,
            callback: function() {
                var t = n.gridSettings();
                t && (t.width = {}, n.gridSettings(t));
                vu(n, !r, !0);
                lo(n);
                ci();
                se();
                yu();
                or()
            }
        }));
        u.match(/Grid|List|Cards/) && !n.tagged("multi-select-none") && (!n._lookupInfo || n._lookupInfo.multiSelect) && t.push({
            text: i.MultiSelection,
            icon: n.multiSelect() ? "check" : !1,
            callback: function() {
                n.multiSelect(!n.multiSelect());
                lo(n);
                n.sync()
            }
        });
        t.push({
            text: pr.Refresh,
            icon: "refresh",
            callback: function() {
                n.sync()
            }
        })
    }

    function ew(t, i) {
        t.find("h3").on("vclick", function(t) {
            var r = $(t.target).closest("h3"),
                o = r.offset(),
                e = [],
                h = n.contextScope(),
                c, u;
            return r.addClass("app-selected"), v(r, function() {
                c = gc();
                n.contextScope(i);
                ub(e, !1, !0);
                u = $.Event("viewselector.dataview.app");
                u.items = e;
                u.dataView = f.find(i);
                $(document).trigger(u);
                n.contextScope(h);
                nt({
                    anchor: r,
                    items: e,
                    iconPos: "left",
                    dropDown: !s,
                    y: o.top + r.outerHeight(),
                    y2: o.top
                })
            }), !1
        })
    }

    function ow(t, i) {
        t.on("vclick", ".ui-btn", function(t, r) {
            function o() {
                var r = f.context && f.context.group,
                    o = [],
                    t;
                r ? (t = n.pageInfo(i).dataView, ao(r.Id, t, o, t.extension().commandRow()), nt({
                    items: o,
                    iconPos: "left",
                    defaultIcon: "carat-r",
                    scope: t._id,
                    anchor: u,
                    y: e.top + u.outerHeight(!0) / 4 * 3,
                    y2: e.top,
                    dropDown: !s
                })) : f.callback(f.context)
            }
            var u = $(t.target).closest("a"),
                e = u.offset(),
                f = u.data("data-context");
            return u.length && !n.busy() && (r != !1 ? n.callWithFeedback(u, o) : o()), !1
        })
    }

    function cl(n) {
        n.find(".app-echo-inner .app-selected").removeClass("app-selected")
    }

    function ll(t, r) {
        function a(i) {
            function c(n) {
                var r = parseInt(s.attr("data-start-index")),
                    u = parseInt(s.attr("data-end-index")),
                    t = n == "next" ? u + 1 : r - 1,
                    i = 0;
                return t < 0 && (t = 0), i = Math.floor(t / o.extension().pageSize()), {
                    action: n,
                    rowIndex: t,
                    pageIndex: i,
                    ensurePageIndex: Math.max(n == "next" ? i + 1 : i - 1, 0),
                    pageY: f.offset().top
                }
            }
            var u = $(i.target),
                f = u.closest("a"),
                r = f.find(".app-btn-next"),
                s = f.find(".app-info"),
                h = t + "_echo",
                e = ki(i.pageX);
            r.length && e >= r.offset().left && e < r.offset().left + r.outerWidth() + 4 ? u = r : (r = f.find(".app-btn-prev"), r.length && e >= r.offset().left && e < r.offset().left + r.outerWidth() ? u = r : (f.find(".app-btn-see-all").addClass("ui-btn-active"), u = f));
            u.is(".app-btn-disabled") || (f.removeClass("ui-btn-active"), v(u, function() {
                u.removeClass("ui-btn-active");
                setTimeout(function() {
                    u.is(".app-btn-next") ? lr(h, c("next")) : u.is(".app-btn-prev") ? lr(h, c("prev")) : n.changePage(t)
                }, 25)
            }))
        }
        var u = $('<div class="app-echo"><\/div>').appendTo(r).attr({
                id: t + "_echo",
                "data-for": t
            }),
            c, l, h, o = f.find(t),
            e, y = n.pageInfo(t);
        y.echoChanged = !0;
        e = $('<div class="app-echo-toolbar"><h3><\/h3><a class="ui-btn ui-btn-inline ui-corner-all ui-icon-dots ui-btn-icon-notext app-btn-more"/><div class="app-echo-controls"><\/div><span class="app-echo-see-all"><span><\/span><a class="ui-btn ui-btn-inline ui-corner-all ui-icon-carat-r ui-btn-icon-notext"/><\/span><\/div>').appendTo(u);
        c = e.find("h3");
        o.get_showViewSelector() || c.addClass("app-hidden");
        e.find(".ui-icon-dots").attr("title", i.More).css("visibility", "hidden");
        ew(e, t);
        e.find(".ui-icon-carat-r").attr("title", i.SeeAll).toggleClass("ui-icon-recycle").prev().hide();
        e.find(".app-echo-see-all span").html(i.SeeAll);
        ow(e.find(".app-echo-controls"), t);
        o.get_showActionBar() || e.hide();
        $('<div class="app-echo-instruction"><\/div>').appendTo(u).hide();
        l = $('<div class="app-echo-inner"><\/div>').appendTo(u).on("vclick taphold", function(i) {
            var e = $(i.target),
                r = e.closest("a"),
                b, f, o, l, s, y = i.type,
                c = y != "taphold" && !i.ctrlKey,
                p = r.is(".dv-action-see-all"),
                w;
            if (!e.closest(".app-presenter").length || p) {
                if (h) {
                    h = !1;
                    return
                }
                if (r.length && !r.is(".app-divider") && nr(e, y) && (!p || c) && !n.busy())
                    if (p) a(i);
                    else {
                        if (e.is("[data-href]")) return;
                        if (n.contextScope(t), b = n.pageInfo(t), f = b.dataView, o = f.extension(), s = r.data("data-context"), w = r.is(".app-selected"), f._hasKey()) {
                            if (wp(i, f)) return !1;
                            l = f.get_showMultipleSelection();
                            c && l && il(i) ? el(f, r) : (cl(u), c ? r.addClass("app-selected") : w ? r.removeClass("app-selected") : r.addClass("app-selected"), rh(f).removeClass("app-selected"), c ? (l && r.find(".app-btn-check").addClass("app-btn-check-selected"), o.tap(s, "none"), bf(f, r), bp(i) ? yo(kp(e)) : o.tap(s)) : (w ? o.clearSelection() : o.tap(s, "none"), y == "taphold" && (h = !0)), v(e));
                            hu(f, u)
                        } else n.infoView(f, !0, s.row);
                        n.contextScope(null)
                    }
                if (!e.closest(".app-grid-header").length) return !1
            }
        }).on("contextmenu", function(i) {
            return vb(n.pageInfo(t).dataView, i)
        });
        $('<div class="app-echo-footer"><\/div>').appendTo(u).on("vclick", function() {
            var t = $(event.target),
                n = t.closest("a");
            return n.length && n.is(".dv-action-see-all") && a(event), !1
        });
        return $('<div class="app-echo-empty"><\/div>').appendTo(l).text(ot.Loading), sw(u), e.find("h3").text(n.pageInfo(t).text), s || u.find(".app-echo-inner").attr("tabindex", 0), o._hidden && u.hide(), u
    }

    function li(t, i, u) {
        var o, e, f, s = 0;
        t ? r.activePage.find(".app-echo-toolbar").each(function() {
            o = $(this).parent();
            e = o.attr("data-for");
            f = n.pageInfo(e);
            f.echoId && !f.dataView._busy() && lr(f.echoId)
        }) : ht || b || ur ? (clearTimeout(ov), ov = setTimeout(function() {
            li(t, i)
        }, 50)) : (n.callWhenVisible(u || ".app-echo", function(t) {
            setTimeout(function() {
                e = t.attr("data-for");
                f = n.pageInfo(e);
                !f.dataView || f.dataView._busy() || f.dataView.get_isForm() || (f.echoInitialized ? f.echoChanged && lr(f.echoId) : (f.echoId = t.attr("id"), n.pageInit(f.id, !1) && lr(f.id + "_echo")))
            }, i == null ? s : i);
            s += 50
        }), r.activePage.find(".app-echo-controls.app-stale").each(function() {
            var t = kt($(this).removeClass("app-stale")),
                i = t.attr("id"),
                r = n.pageInfo(i.substring(0, i.length - 5));
            yl(r.dataView, t)
        }))
    }

    function sw(n) {
        var t = o.displayDensity;
        t != "Condensed" && t != "Tiny" && (t == "Comfortable" && Math.min(su, yf) <= 414 ? n.addClass("app-density-compact") : t == "Compact" && Math.min(su, yf) <= 320 && n.addClass("app-density-condensed"))
    }

    function eh(n, t, i) {
        var r = n.find("h3").empty().text(t.get_view().Label || i.text),
            u = t._totalRowCount;
        return n.length && u > 0 && ($("<span> (<\/span>").appendTo(r), $('<span class="app-echo-count"><\/span>').appendTo(r).text(u), $("<span>)<\/span>").appendTo(r), s || r.attr("title", r.text())), r
    }

    function oe(n) {
        var i = re(n),
            t = n.session(i);
        return t || (t = cs(), t.text("." + i + "frozen_{display:none!important}"), n.session(i, t)), t
    }

    function vu(n, t, i) {
        if (arguments.length >= 2) n.session("grid-is-fitted", t), i && n.viewProp("grid-is-fitted", t ? null : !1);
        else {
            var r = n.session("grid-is-fitted");
            return r != null && n.session("window-width") != l.width() && (r = null), r == null && (r = n.viewProp("grid-is-fitted"), r == null && (r = !n.tagged("grid-fit-none")), n.session("grid-is-fitted", r)), r
        }
    }

    function al(n, t) {
        var r = n.session("grid-avail-width"),
            i, u = vu(n);
        r != null && (t.find(".app-hscrollbar-inner").width(r), y.height && kt(t).length && (i = t.parent(), i.parent().width() >= r ? i.hide() : i.show()))
    }

    function hw(n, t) {
        var r = n.session("grid-avail-width"),
            i = t.find(".app-hscrollbar");
        kt(t).length || i.css("margin-right", y.width);
        al(n, i);
        se(t)
    }

    function yu(n) {
        var t;
        n || (n = r.activePage, t = !0);
        n.find(".app-grid-header").each(function() {
            var r = $(this),
                s = r.height(),
                e = r.find("[data-field-name]").first(),
                o, n, i, u;
            s && e.length && (o = r.attr("data-for"), n = f.find(o), i = n.session("grid-header-style"), i || (i = cs(), n.session("grid-header-style", i)), (t || n.session("reset-grid-header")) && (i.text("").data("text", ""), n.session("reset-grid-header", null)), u = ".app-grid-header-cv-" + n._id + "-" + n._viewId + " > span {height:" + (r.height() - parseFloat(e.css("padding-top")) * 2) + "px}", i.data("text") != u && i.data("text", u).text(u))
        })
    }

    function pu(n, t, i, r) {
        function f() {
            vl(n, t)
        }

        function e() {
            p.scrollingAnimationFrame = null;
            i && (t = -1 * n.session("scroll-left"));
            var c = o + "-last-scroll-left",
                h = n.session(c),
                l = n.session("scroll-left-margin"),
                a = Math.abs(Math.abs(t) - Math.abs(h));
            i && h != null && a == 0 || (r && t < (h || 0) && f(), u.html("." + o + "{margin-left:" + (t ? t + l + "px!important" : "inherit") + ";transition:margin-left " + (r ? s + "ms ease-out" : "0 linear") + "}"), n.session(c, t), r ? setTimeout(function() {
                f();
                pu(n, t)
            }, s + 64) : f());
            i && (p.scrollingAnimationFrame = requestAnimationFrame(e))
        }
        var u = n.session("scroll-style"),
            o = re(n),
            h = +new Date,
            s = 384;
        if (u || (u = cs(), n.session("scroll-style", u)), arguments.length >= 2)
            if (i) {
                if (p.scrollingAnimationFrame) return;
                p.scrollingAnimationFrame = requestAnimationFrame(e)
            } else e();
        return u
    }

    function sg() {
        var t = $(this),
            i, n;
        t.data("ignore-scrolling") || (i = f.find(t.attr("data-view")), n = -t.scrollLeft(), pu(i, n), n = t.scrollLeft(), i.session("scroll-left", n), vl(i, n))
    }

    function vl(n, t) {
        var i = oe(n),
            r = t ? "inline-block" : "none",
            u = n.session("grid-frozen-width") || 0;
        if (i && (i.data("display") != r || i.data("width") != u)) return i.html("." + re(n) + "frozen_{display:" + r + "!important;width:" + u + "px}"), i.data("display", r).data("width", u), !0
    }

    function hg(n) {
        n.session("scroll-left", 0);
        var t = n.session("scroll-style");
        t && (t.remove(), n.session("scroll-style", null))
    }

    function se(n, t) {
        n || (n = r.activePage);
        n.find(".app-hscrollbar").each(function() {
            var u = $(this),
                n = f.find(u.attr("data-view")),
                i = n ? n.session("scroll-left") : null,
                e = u.closest(".app-grid");
            oe(n);
            e.length || (e = r.activePage.find(".app-grid"));
            (n.session("grid-avail-width") < e.width() || t) && (i = 0, n.session("scroll-left", i));
            al(n, u);
            i != null && (u.data("ignore-scrolling", i > 0).scrollLeft(i), t ? pu(n, i, !1) : vl(n, i), setTimeout(function() {
                u.removeData("ignore-scrolling")
            }, 100))
        })
    }

    function cw(n, t, i) {
        var r = n.extension(),
            u = r.aggregateLabels(),
            f = $('<div class="app-bar-aggregate-list"><\/div>').appendTo(t);
        $(n._fields).each(function(t) {
            var o = this,
                h = n._allFields[o.AliasIndex],
                s = u[t],
                r, e, c;
            s && (r = i[o.Index], r = String.localeFormat(o.DataFormatString || "{0:n0}", r), e = $('<a class="ui-btn ui-inline app-calculated app-btn-static"/>').appendTo(f), $('<span class="app-calculated-label"/>').text(h.HeaderText).appendTo(e), c = $('<span class="app-calculated-value"/>').text(r).appendTo(e), $('<div class="app-static-text"><\/div>').text(s).insertBefore(c.contents()), e.attr("title", h.HeaderText + "\n" + s + " " + r))
        })
    }

    function lr(t, u) {
        function tu() {
            ni && (cw(e, kt.show().empty(), ni), r.activePage.find(".app-echo:visible").length == 1 && p.prev().is(".app-page-header,.app-tabs") && (k -= kt.outerHeight()))
        }

        function iu() {
            $(h).each(function(n) {
                var t = this;
                if (e.rowIsSelected(t)) return tt = n, a.commandRow() || (a.tap(t, "none"), a.currentPageIndex(pt)), !1
            });
            it = h.length
        }

        function tr() {
            var n;
            u ? (tt = null, u.action == "prev" ? (v = u.rowIndex - c + 1, v < 0 && (v = 0), lastPageRowIndex = u.rowIndex % dt, n = lastPageRowIndex - c + 1, n > 0 ? h = h.slice(n, lastPageRowIndex + 1) : (h = h.slice(0, lastPageRowIndex + 1), u.pageIndex && (g = a.visibleDataRows(u.pageIndex - 1), g && (h = g.slice(g.length + n).concat(h))))) : (v = u.rowIndex, n = u.rowIndex % dt, h = h.slice(n, n + c + 1), h.length < c && (g = a.visibleDataRows(u.pageIndex + 1), g && (h = h.concat(g)))), iu()) : tt != null && c < ot && (ai = Math.floor(c / 2), ht = v + tt - ai + 1, ot - (v + tt) < ai && (ht -= ai - (ot - (v + tt))), ht < 0 && (ht = 0), ht != v && (ht > v ? (h = h.slice(0), h.splice(0, ht - v), tt -= ht - v, v = ht, h.length < c && pt < a.pageCount() - 1 && (g = a.visibleDataRows(pt + 1), g && (h = h.concat(g)))) : pt > 0 && (g = a.visibleDataRows(pt - 1), g && (g = g.slice(0), g.splice(0, dt - (v - ht)), tt += g.length, v = ht, h = g.concat(h)))), it = dt)
        }

        function vi(n, t, r) {
            n.empty();
            var u = $('<span class="app-btn-prev"/>').appendTo(n).text(i.Prev).attr("title", pr.Previous);
            return t || u.addClass("app-btn-disabled"), u = $('<span class="app-btn-next"/>').appendTo(n).text(i.Next).attr("title", pr.Next), r == ot - 1 && u.addClass("app-btn-disabled"), $('<span class="app-info"/>').appendTo(n).attr({
                "data-start-index": t,
                "data-end-index": r
            }).html(String.format(pr.ShowingItems, t + 1, r + 1, ot)), n
        }

        function lu(n) {
            if (u) {
                var r = n.offset().top,
                    t = Math.ceil(u.pageY) - Math.ceil(r),
                    i;
                t > 0 && t + n.outerHeight(!0) < d.height() && (i = n.parent().prev("li").first().find("a"), i.length && $('<div class="app-listview-stub"><\/div>').height(t).appendTo(i))
            }
        }
        var p, oi, ir, rr, ti, er, hr, nt, ft, et, cr, wt, ar, fu, vr;
        if (!ur && (p = $("#" + t), p.length)) {
            oi = p.is(".app-echo-embedded");
            p.removeClass("app-density-condensed app-density-compact");
            var d = w(p),
                eu = d.scrollTop(),
                ou = p.outerHeight(),
                o = p.find(".app-echo-inner").show(),
                kt = o.next().hide(),
                su = p.attr("data-for"),
                st = n.pageInfo(su),
                e = st.dataView,
                pi = ic(e),
                ot = e._totalRowCount,
                a = e.extension(),
                pt = u ? u.pageIndex : a.currentPageIndex() || 0,
                dt = a.pageSize(),
                v = pt * dt,
                si, ht, h = a.visibleDataRows(pt),
                g, f, l, b, gt, hi, ii = e.get_showRowNumber() == !0,
                wi = $(p).find(".app-echo-toolbar"),
                hu = wi.find(".app-echo-controls"),
                bi = wi.find(".app-echo-see-all"),
                ki = bi.find(".ui-btn"),
                yr, wr = o.prev(),
                di = a.instruction(!1),
                lt = a.viewStyle(),
                li = a.itemMap(lt == "List"),
                cu = r.getScreenHeight(),
                k = d.height() * .55,
                ri, tt, it, c, ai, rt, yt, br, ui, kr = e.get_selectedKey().length > 0,
                fi, dr, gi, ni = a.aggregates(),
                nu, nr;
            if (!e._checkedAutoSelect && (e._checkedAutoSelect = !0, a._autoSelect)) {
                setTimeout(function() {
                    fi = a._autoSelect;
                    a._autoSelect = null;
                    fi && !n.busy() && (st.echoChanged = !0, n.contextScope(e._id), a.tap(fi.row, fi.action), e._selectedKeyList = [e._createRowKey(fi.row)], n.contextScope(null))
                });
                return
            }
            if (!p.is(":visible")) {
                st.echoChanged = !0;
                return
            }
            if (st.echoChanged = !1, sw(p), !h || u && dt * u.ensurePageIndex < ot && !a.visibleDataRows(u.ensurePageIndex)) {
                e.goToPage(u && u.pageIndex || 0, !0);
                a.echoCallback = function() {
                    a.echoCallback = null;
                    lr(t, u)
                };
                return
            }
            if (yr = eh(wi, e, st), st.echoInitialized || (st.echoInitialized = !0, st.refreshed = !1), oi || (p.css("padding-bottom", ""), yt = d.find(".app-stub,.app-stub-main"), yt.length || (yt = $("<div><\/div>").appendTo(d).addClass("app-stub" + (gc() ? "-main" : ""))), yt.height(yt.outerHeight() + o.outerHeight(!0))), di && (h.length || di.match(/"app-filter"/)) ? wr.html(di).show() : wr.hide(), ri = o.scrollLeft(), o.find(".app-hscrollbar").off(), ee(o), nu = o.find('div[data-role="presenter"]').detach(), o.empty(), nu.appendTo(o), n.presenter("hide", {
                    container: o
                }), h.length) {
                if (o.removeClass("app-no-scrolling app-horizontal-scrolling"), e._filterSource || d.find(".app-echo").filter(ry).length != 1 ? s || d.css("overflow", "") : (k = cu - o.offset().top, s || (k -= sr(p.css("padding-top")) + sr(p.css("padding-bottom")), lt && lt.match(/List|Grid|Cards/) ? (d.css("overflow", ""), dr = !0) : d.css("overflow", ""))), bl(e, o), n.presenter("supports", lt) && (ir = [], rr = !1, n.presenter("enumerate", {
                        id: e._id,
                        list: ir
                    }), $(ir).each(function() {
                        if (this.name == lt) return rr = !0, !1
                    }), o.addClass("app-no-scrolling").height(""), rr && n.presenter("show", {
                        name: lt,
                        id: e._id,
                        container: o,
                        maxHeight: Math.ceil(k)
                    }) ? nr = !0 : lt = oy() ? "Grid" : "List"), !nr)
                    if (u || iu(), lt == "Grid") {
                        o.addClass("app-no-scrolling").height("");
                        ee(o);
                        f = $('<ul class="app-listview app-grid" data-role="listview"/>').addClass(ih(e)).appendTo(o);
                        l = $('<li data-role="list-divider" class="app-list-instruction"/>').appendTo(f);
                        ol(e, l);
                        l = $('<li data-icon="false" class="dv-item"/>').appendTo(f);
                        oo(e, h[0], null, $("<a/>").appendTo(l));
                        f.listview().listview("refresh");
                        gt = l.outerHeight();
                        ci(f);
                        yu(f);
                        k -= l.prev().outerHeight() + 1;
                        c = Math.ceil(k / (gt + 1));
                        ni && (c -= 2);
                        l.remove();
                        c < 4 && (c = 4);
                        tr();
                        var ut = [],
                            ct = [],
                            ei = 0,
                            vt, fr;
                        $(h).each(function(n) {
                            var i = this,
                                u = v + n + 1,
                                t = $('<li data-icon="false" class="dv-item"/>').appendTo(f),
                                r = $('<a class="ui-btn"/>').appendTo(t).data("data-context", {
                                    row: this.slice(0),
                                    pageIndex: 0
                                });
                            return oo(e, i, ii ? u : null, r), n == tt && (ui = i, r.addClass("app-selected")), kf(e, i, t, pi), si = v + n, !tt || n < tt ? ut.push(t) : ct.push(t), c < it && c - 1 == n ? !1 : void 0
                        });
                        ni && (l = $('<li data-icon="false" class="dv-item"/>').appendTo(f), b = $('<a class="app-divider app-calculated"/>').appendTo(l), oo(e, ni, null, b, a.aggregateLabels()));

                        function ru() {
                            rt = $('<a class="dv-action-see-all"/>').appendTo($("<li/>").appendTo(f)).html("text")
                        }
                        if (ti = $('<li class="app-echo-grid-hscrollbar"><div class="app-hscrollbar"><div class="app-hscrollbar-inner"><\/div><\/div><\/li>').height(y.height), er = ti.find(".app-hscrollbar").attr("data-view", e._id), oe(e), ti.appendTo(f), y.height) {
                            er.on("scroll", sg);
                            al(e, er);
                            requestAnimationFrame(function() {
                                hw(e, ti)
                            });
                            k -= ti.outerHeight()
                        } else ti.hide();
                        (c < it || it < ot) && ru();
                        f.listview().listview("refresh");
                        rt && (k -= rt.outerHeight());
                        f.find(".dv-item").each(function() {
                            ei += $(this).outerHeight()
                        });

                        function uu() {
                            vt && (ei -= vt.outerHeight(), vt.find(".ui-btn").removeData(), vt.remove())
                        }
                        if (ei > k) {
                            if (rt || (ru(), k -= rt.outerHeight()), ct.length)
                                while (ut.length + ct.length + 1 > 3 && ei > k) vt = null, fr == "before" ? (fr = "after", ut.length > 1 && ut.length >= ct.length && (vt = ut[0], ut.splice(0, 1), v++)) : (fr = "before", ct.length > 1 && ct.length > ut.length && (vt = ct[ct.length - 1], ct.splice(ct.length - 1, 1), si--)), uu();
                            else
                                while (ut.length > 3 && ei > k) u && u.action == "prev" ? (vt = ut[0], ut.splice(0, 1), v++) : (vt = ut[ut.length - 1], ut.splice(ut.length - 1, 1), si--), uu();
                            f.listview("refresh")
                        }
                        rt && (vi(rt.toggleClass("ui-btn-icon-right ui-btn-icon-left"), v, si), lu(rt))
                    } else if (lt == "List") {
                    for (c = 30, tr(), o.addClass("app-no-scrolling").height(""), ee(o), tu(), f = $('<ul class="app-listview app-onecolumnview" data-role="listview"/>').addClass(ih(e)).appendTo(o).listview(), hr = 0, nt = tt == null ? 0 : tt, ci(f), kl(e, f), u && (nt = u.action == "next" ? 0 : h.length - 1), ft = nt, et = nt, rt = $('<li data-icon="carat-r" class="dv-item"><a class="ui-btn dv-action-see-all"/><\/li>').appendTo(f), k -= rt.outerHeight(), rt.remove(); nt >= 0 && nt < h.length;) {
                        var yi = h[nt],
                            vu = v + nt + 1,
                            l = $('<li data-icon="false" class="dv-item"/>'),
                            b = $('<a class="ui-btn"/>').appendTo(l).data("data-context", {
                                row: yi.slice(0),
                                pageIndex: 0
                            });
                        if (u && u.action == "prev" && ar ? l.insertBefore(ar) : l.appendTo(f), ar = l, au(e, yi, li, ii ? vu : null, l, b, !0), nt == tt && (ui = yi, b.addClass("app-selected")), f.listview("refresh"), kf(e, yi, l, pi), hr += l.outerHeight(), hr >= k && et - ft >= 3) {
                            fu = !0;
                            break
                        }
                        u ? u.action == "next" ? (et++, nt = et) : (ft--, nt--) : wt == "up" ? (l.insertBefore(cr), cr = l, et < h.length - 1 ? (wt = "down", et++, nt = et) : (ft--, nt = ft)) : wt == "down" ? ft > 0 ? (wt = "up", ft--, nt = ft) : (et++, nt = et) : (cr = l, ft > 0 ? (ft--, wt = "up", nt = ft) : (et++, wt = "down", nt = et))
                    }
                    et - ft < ot && (wt == "down" || u && u.action == "next" ? et-- : ft++, fu && (b.removeData(), l.remove()), l = $('<li data-icon="carat-r" class="dv-item"/>').appendTo(f), b = vi($("<a/>").appendTo(l).addClass("dv-action-see-all"), v + ft, v + et), f.listview("refresh"), b.toggleClass("ui-btn-icon-left ui-btn-icon-right"))
                } else {
                    if (c = 30, tr(), it = h.length, f = $('<ul class="app-listview app-cardcolumn" data-role="listview"/>').hide().appendTo(o), l = $('<li data-icon="false" class="dv-item"/>').appendTo(f), b = $('<a class="ui-btn"/>').appendTo(l), tu(), au(e, h[0], li, ii ? 1 : null, l, b), f.listview().show(), gt = l.outerHeight(!0), hi = Math.floor(o.innerWidth() / l.outerWidth(!0)), c = Math.floor(k / gt), c < 1 && (c = 1), f = kt.find(".app-echo-container-see-all").hide(), ot > it && (kt.show(), f.length ? (f.show(), b = f.find(".ui-btn")) : (f = $('<div class="app-echo-container-see-all"><\/div>'), ni ? f.insertBefore(kt.find(".app-bar-aggregate-list")) : f.appendTo(kt), b = $('<a class="ui-btn-icon-left ui-btn-icon-right ui-btn ui-icon-carat-r dv-action-see-all"/>').appendTo(f)), rt = vi(b, v, v + it - 1), k -= f.outerHeight(!0), s || (k -= 8), c = Math.floor(k / gt), c < 1 && (c = 1)), hi * c >= h.length && (c = Math.ceil(h.length / hi), o.addClass("app-no-scrolling")), ot > it && hi * c >= it && o.addClass("app-no-scrolling"), o.is(".app-no-scrolling") || (o.addClass("app-horizontal-scrolling"), s || (c = Math.floor(k / gt), c < 1 && (c = 1))), ee(o), $(h).each(function(n) {
                            if (n >= it) return !1;
                            f && n % c != 0 || (f = $('<ul class="app-listview app-cardcolumn" data-role="listview"/>').addClass(ih(e)).appendTo(o), bl(e, f), kl(e, f));
                            var t = this,
                                u = v + n + 1,
                                i = $('<li data-icon="false" class="dv-item"/>').appendTo(f),
                                r = $('<a class="ui-btn"/>').appendTo(i).data("data-context", {
                                    row: this.slice(0),
                                    pageIndex: 0
                                });
                            au(e, t, li, ii ? u : null, i, r);
                            n == tt && (ui = t, r.addClass("app-selected"));
                            kf(e, t, i, pi)
                        }), it > c && (vr = c - it % c, vr < c))
                        while (vr-- > 0) l = $('<li data-icon="false" class="dv-item"/>').appendTo(f), b = $("<a/>").appendTo(l), au(e, h[0], li, ii ? 1 : null, l, b), b.css("visibility", "hidden").parent().addClass("app-hidden");
                    c == ot && f.addClass("app-list-one-column");
                    ci(o.find(".app-listview").listview());
                    f = o.find(".app-listview").first();
                    f.length && !s && o.height(f.height() + y.height + 8);
                    b = o.find(".app-selected");
                    b.length && (br = b.offset().left - o.offset().left + b.outerWidth(), br > o.width() && (ri = b.offset().left - o.offset().left - (o.width() - b.outerWidth()) / 2));
                    u && (u.action == "next" ? ri = 0 : (f = o.find(".app-listview").last(), ri = f.offset().left + f.outerWidth() - o.offset().left));
                    o.scrollLeft(ri);
                    rt && vi(rt, v, v + it - 1)
                }
            } else $('<div class="app-echo-empty"><\/div>').appendTo(o.height("")).text(at.NoRecords);
            oi || (p.prev().is(".app-echo") || p.next().is(".app-echo") || p.css("padding-bottom", 0), lp(d, yt), (d.scrollTop() || dr && yt.first().prev().offset().top + yt.first().prev().height() > d.offset().top + d.height()) && d.css("overflow", ""));
            nr || (kr ? ui || u ? e.rowIsSelected(a.commandRow()) || (a.clearSelection(), a.tap(ui, "none")) : a.clearSelection() : a.commandRow() && a.clearSelection());
            st.echoRefreshCallback && (st.echoRefreshCallback(), st.echoRefreshCallback = null);
            ki.is(".ui-icon-recycle") && (ki.removeClass("ui-icon-recycle").css({
                visibility: "hidden",
                "margin-left": "-1px",
                width: "1px"
            }).prev().show(), $('<span class="glyphicon glyphicon-menu-right"/>').insertBefore(ki));
            bi.css("visibility", ot == 0 ? "hidden" : "");
            yl(e, p, kr, hu, yr, bi);
            oi && or(d);
            gi = $(".app-data-input");
            gi.length && !bt && gi.offset().top > p.offset().top ? d.scrollTop(eu + p.outerHeight() - ou) : gr(d, null, !0);
            e.get_searchOnStart() && fh(e)
        }
    }

    function yl(n, t, i, r, u, f) {
        if (i == null && (i = n.get_selectedKey().length > 0), !r) {
            if (t || (t = $("#" + n._id + "_echo")), !t.length) return;
            r = t.find(".app-echo-toolbar .app-echo-controls");
            u = r.parent().find("h3");
            f = r.next()
        }
        var e = u.next().css("visibility", ""),
            o = e.offset().left + e.outerWidth(),
            s = f.offset().left;
        lw(n, r, o, s)
    }

    function lw(t, i, r, u, f, e) {
        function v(n) {
            return n.offset().left + n.outerWidth() > d + p - 1
        }
        var b = [],
            y = [],
            k, d, p, s = [],
            w = [],
            l, a = {},
            o, h, c;
        if (r == 0 || u == 0) i.addClass("app-stale");
        else if (u - r >= 28) {
            if (i.find(".ui-btn").data("data-context", null), i.hide().contents().remove(), k = n.contextScope(), n.contextScope(t._id), t.extension().context(b, ["ActionBar"]), n.contextScope(k), $(b).each(function() {
                    var n = this;
                    n.system ? n.icon != "search" || f || y.push(n) : n.text && !n.isStatic && y.push(n)
                }), $(y).each(function() {
                    var t = this,
                        n, r = t.icon,
                        u;
                    l = t.group;
                    e && r == e || (n = $('<a class="ui-btn"/>').appendTo(i).data("data-context", t).attr("title", t.text), r == "dots" || t.transition ? n.addClass("app-has-children ui-corner-all ui-mini").text(t.text) : (u = ps(r), n.addClass("ui-mini ui-btn-icon-left ui-corner-all ui-icon-" + (u ? "" : r || "carat-r")), u && n.toggleClass("ui-btn-icon-left ui-icon-"), r == "search" ? n.toggleClass("ui-btn-icon-left ui-btn-icon-notext ui-mini ") : n.text(t.text), u && $('<span class="glyphicon"> <\/span>').insertBefore(n.contents()).addClass(r), r == !1 && n.removeClass("ui-btn-icon-left"), o = a[l], o || (o = a[l] = []), o.push(n)))
                }), p = u - r - sr(i.css("marginRight")), i.width(p).show(), d = i.offset().left, i.find(".ui-btn").each(function() {
                    var n = $(this);
                    n.is(".ui-btn-icon-left") && w.push(n);
                    v(n) && s.push(n)
                }), s.length)
                for (w.reverse(); s.length;) {
                    if (h = s[0], c = v(h), c && (isGeneric = h.is(".ui-icon-carat-r"), isGeneric ? s.push(h) : h.is(".ui-btn-icon-left") && (h.toggleClass("ui-btn-icon-notext ui-mini ui-btn-icon-left"), c = v(h)), !isGeneric && c && $(w).each(function() {
                            var n = this;
                            if (s.indexOf(n) == -1 && n.is(".ui-btn-icon-left") && (n.is(".ui-icon-carat-r") ? n.hide() : n.toggleClass("ui-btn-icon-notext ui-mini ui-btn-icon-left"), c = v(h), !c)) return !1
                        }), c)) {
                        $(s).each(function() {
                            this.hide()
                        });
                        break
                    }
                    s.splice(0, 1)
                } else
                    for (l in a) o = a[l], o.length > 1 && ($(o).each(function() {
                        $(this).addClass("app-group-item")
                    }), o[0].addClass("app-group-first"), o[o.length - 1].addClass("app-group-last"));
            $('<a class="ui-btn ui-btn-icon-notext ui-corner-all"/>').appendTo(i).css("visibility", "hidden")
        } else i.hide()
    }

    function ho(n) {
        var t = nu() ? 193 : 0,
            i = l.width();
        n.each(function() {
            var n = $(this);
            n.width(i - t - parseInt(n.css("padding-left")) - parseInt(n.css("padding-right")) + y.width)
        })
    }

    function cg(t, i) {
        var r = $('<div class="app-bar-actions ui-header ui-bar-inherit ui-header-fixed"><\/div>').insertBefore(i),
            u = $("<h3/>").appendTo(r).text(n.pageInfo(t).text);
        return ho(r), $('<a class="ui-btn ui-btn-inline ui-btn-icon-notext ui-corner-all ui-icon-dots app-btn-more"/>').appendTo(r), ew(r, t._id), t.get_showViewSelector() || u.addClass("app-hidden"), ow($('<div class="app-bar-controls"><\/div>').appendTo(r), t._id), r
    }

    function lg() {
        var n = ht || b;
        return n == !0
    }

    function nr(n, t) {
        var i;
        if (ht || b || p.dragged()) return !1;
        if (bt)
            if (i = $(n).closest("a"), i.data("scroll-check") == !0) i.data("scroll-check", !1);
            else {
                ur = !1;
                var r = i.closest(".app-wrapper,.ui-panel-inner"),
                    u = r.data("scroll-stop-time"),
                    f = r.scrollTop();
                return u && df() - u.getTime() > 5e3 ? !0 : (i.data("scroll-check", !0), setTimeout(function() {
                    t || (t = "vclick");
                    f == r.scrollTop() ? ($(n).is(".app-btn-more") ? n : i).trigger(t) : (nr(i, t), k())
                }, 10), !1)
            }
        return !0
    }

    function co(n) {
        setTimeout(function() {
            $("div.ui-panel-open").panel("close", n != !0)
        }, ft)
    }

    function it(t, i, r) {
        function u() {
            if (b) it(t, ft, r);
            else {
                le = null;
                var u = d(),
                    i = ie(),
                    f = i.data("page-id"),
                    e = n.contextScope(),
                    o = wi();
                f == u && tl(i);
                n.contextScope(null);
                i.find(".app-show-request").removeClass("app-show-request").show().trigger("show.sidebar.app");
                i.find(".app-hide-request").removeClass("app-hide-request").hide().trigger("hide.sidebar.app");
                n.refreshContextMenu(i.data("page-id", u));
                n.contextScope(e);
                o || n.refreshMenuStrip();
                r && r()
            }
        }
        wh || (i == null && (i = wk), le && (clearTimeout(le), le = null), t || (i ? le = setTimeout(u, i) : u()))
    }

    function aw(n, t) {
        if (arguments.length == 1) return f.cache[n];
        f.cache[n] = t
    }

    function wu(n, t) {
        if (n = location.pathname.replace(/\W/g, "_") + "_" + n, arguments.length == 1) return g(n);
        g(n, t)
    }

    function g(n, t) {
        if (yh || (yh = __settings.appInfo.replace(/\W/g, "_")), n = yh + "_" + n, arguments.length == 1) {
            if (typeof Storage != "undefined") try {
                return t = localStorage[n], t != null && (t = JSON.parse(t)), t
            } catch (i) {}
            return null
        }
        if (typeof Storage != "undefined")
            if (t == null) localStorage.removeItem(n);
            else try {
                localStorage[n] = JSON.stringify(t)
            } catch (i) {}
    }

    function vw(n, t) {
        var r = {
                text: t,
                resolved: !0,
                description: null,
                type: null
            },
            i = n.attr("data-activator"),
            o, u, s, h = $(n).prev(".DataViewHeader").text(),
            e;
        return i || (s = n.closest("div[data-activator]"), i = s.attr("data-activator"), n = s), i && (o = n.parent(), u = o.attr("id"), u || (u = "aid" + pk++, o.attr("id", u)), r.container = u), i || (i = h), i && i != "false" ? (i = f.eval(i), e = db.exec(i), e ? (r.text = e[4] || e[2], r.type = e[1]) : r.text = i) : r.resolved = !1, r.description = n.attr("data-activator-description"), r
    }

    function pl(n, t) {
        return (t ? n.tagged("action-call") : n.tagged("action-call", "field-call")) || n.Name.match(ik) && (!t || !n.tagged("action-call-disabled"))
    }

    function wl(n, t) {
        return (t ? n.tagged("action-email") : n.tagged("action-email", "field-email")) || n.Name.match(rk) && !(t || !n.tagged("action-email-disabled"))
    }

    function ag(n, t) {
        return (t ? n.tagged("action-url") : n.tagged("action-url", "field-url")) || n.Name.match(uk) && (!t || !n.tagged("action-url-disabled"))
    }

    function bl(n, t) {
        n.get_isTagged("thumb-person") || n._controller.match(/\b(emp|acc|user|usr|person|cust)/i) && !n.get_isTagged("thumb-standard") ? t.addClass("app-thumb-person") : t.removeClass("app-thumb-person")
    }

    function kl(n, t) {
        n.get_showMultipleSelection() ? t.addClass("app-listview-multiselect") : t.removeClass("app-listview-multiselect")
    }

    function he(n, t, i) {
        n.data("scrolling", !0).animate({
            scrollTop: t
        }, "swing", function() {
            b = !1;
            i && i();
            setTimeout(function() {
                n.removeData("scrolling")
            }, 100)
        })
    }

    function yw(t, i, r) {
        var u, o, f;
        if (r || (r = {}), u = $(t), o = r.position || "right", ai(), lt(), hf = null, u.length == 0) {
            u = $(String.format('<div data-position-fixed="true" data-role="panel" data-draggable="panel" data-theme="a" data-display="overlay" class="app-popup-icon-left ui-panel ui-panel-display-overlay ui-panel-animate ui-panel-position-{0}"><ul/><\/div>', o)).appendTo(e).panel({
                animate: lu(),
                position: o,
                beforeopen: function() {
                    u.find(".ui-panel-inner").attr("tabindex", 0);
                    wt(!1);
                    sf = !0;
                    ae && (clearTimeout(ae), ae = null);
                    i && i()
                },
                open: function() {
                    setTimeout(function() {
                        sf = !1;
                        k();
                        r && r.afteropen && r.afteropen();
                        $(".ui-panel-open .ui-panel-inner").focus();
                        wt(!0)
                    })
                },
                beforeclose: function() {
                    wt(!1);
                    sf = !0;
                    tl(u)
                },
                close: function() {
                    setTimeout(function() {
                        wt(!0);
                        sf = !1;
                        hf && hf();
                        n.contextScope() && (ae = setTimeout(function() {
                            n.contextScope(null);
                            ae = null
                        }, 1e3));
                        hf = null;
                        w().focus();
                        r && r.close && r.close()
                    })
                }
            });
            lu(u);
            r.className && u.addClass(r.className);
            ks(u);
            t.match(/^#/) && u.attr("id", t.substring(1));
            u.find("ul").listview();
            u.on("vclick", function(n) {
                var i = $(n.target).closest("a"),
                    r = i.closest("li").attr("data-icon"),
                    t;
                if (sf || !i.length || !nr(i)) return !1;
                if (t = i.data("context-action"), t && !hv) {
                    if (t.dataRel) return !0;
                    t.feedback == !1 ? (k(), t.keepOpen == !0 || t.transition ? hi(t, i) : (u.panel("close", r != "dots" && r != tt), hf = function() {
                        setTimeout(function() {
                            hi(t, i)
                        }, 10)
                    })) : t.keepOpen == !0 || t.transition ? v(i, function() {
                        hi(t, i)
                    }) : v(i, function() {
                        var n, f, e;
                        t.icon == tt && (n = i.closest(".ui-panel-inner").find("ul"), f = n.first());
                        n && n.length > 1 ? (wt(!1), e = f.parent().addClass("app-list-container-reverse").css({
                            transition: "",
                            transform: "translate3d(" + -(-parseInt(f.css("margin-right")) + f.closest(".ui-panel").outerWidth() * (n.length - 2)) + "px,0,0)"
                        }).one("transitionend", function() {
                            setTimeout(function() {
                                n.last().remove();
                                e.removeClass("app-list-container-reverse");
                                wt(!0)
                            })
                        })) : (u.panel("close", r != "dots" && r != tt), hf = function() {
                            setTimeout(function() {
                                hi(t, i)
                            }, lu() ? 10 : ft)
                        })
                    })
                }
                return hv = !1, !1
            }).on("swipe", function() {});
            r && r.resetScrolling && u.addClass("app-reset-scrolling")
        } else f = u.find("ul"), !u.is(".ui-panel-open") && f.length > 1 && (f.first().parent().css({
            transition: "none",
            transform: "none"
        }).removeClass("app-list-container-reverse"), f.slice(1).remove());
        return u
    }

    function bu() {
        n.contextScope() == "_contextMenu" ? n._menuPanel.panel("toggle") : n.toggleContextPanel("#app-panel-context")
    }

    function ai() {
        vf && $(vf).blur()
    }

    function vt() {
        var t = !1;
        return n.stickyHeaderBar().is(":visible") && (t = !0, n.stickyHeaderBar().hide()), t
    }

    function tr(t) {
        t != null ? (clearTimeout(lv), lv = setTimeout(function() {
            n.fetchOnDemand()
        }, t)) : n.fetchOnDemand()
    }

    function ir() {
        return n.stickyHeader(), n
    }

    function st(t, i, r) {
        var u = $(".ui-panel-open"),
            s, f, e, c, l, o, h;
        if (u.length) {
            wt(!1);
            f = u.find(".ui-panel-inner").addClass("app-multi-list");
            e = f.find(".app-list-container");
            e.length || (f.contents().wrap('<div class="app-list-container"><\/div>'), e = f.find(".app-list-container"));
            s = u.outerWidth();
            h = '[data-panel="' + i + '"]';
            o = f.find(h);
            o.length || (o = $("<ul/>").attr("data-panel", i).appendTo(e).listview());
            c = u.find("ul").width(s);
            l = c.first();
            rt = t;
            n.refreshContextMenu(u, rt, h);
            e.css({
                transition: "",
                transform: "translate3d(" + -(-parseInt(l.css("margin-right")) + s * o.prevAll("ul").length) + "px,0,0)"
            }).one("transitionend", function() {
                setTimeout(function() {
                    o.nextAll("ul").remove();
                    r && r.afteropen && r.afteropen();
                    wt(!0);
                    $(".ui-panel-open .ui-panel-inner").focus()
                })
            })
        } else return ai(), rt = t, (n.contextScope() && (!r || r.position != "left") || r && r.position != "right") && (i += "-scope", r || (r = {}), r.position = "left"), yw(i, function() {
            n.refreshContextMenu(i, rt)
        }, r).panel("toggle")
    }

    function pw(n) {
        var r = new Sys.StringBuilder,
            o = n._fields,
            i, f, u = n.get_sortExpression(),
            e = ns,
            t;
        if (u)
            for (t = e.exec(u); t;) i = n.findField(t[1]), f = !t[3] || t[3].match(/^asc/) ? "asc" : "desc", i && i.AllowSorting && (r.isEmpty() || r.append(", "), r.appendFormat("{0} ({1})", i.HeaderText, uu(i, f))), t = e.exec(u);
        return r.toString()
    }

    function ww(n) {
        var i = new Sys.StringBuilder,
            o = n._fields,
            r, e, u = n.get_groupExpression(),
            f = ns,
            t;
        if (u)
            for (t = f.exec(u); t;) r = n.findField(t[1]), e = !t[3] || t[3].match(/^asc/) ? "asc" : "desc", r && r.AllowSorting && (i.isEmpty() || i.append(", "), i.appendFormat("{0}", r.HeaderText)), t = f.exec(u);
        return i.toString()
    }

    function iu(t) {
        t.extension()._instructed = !1;
        n.stickyHeaderBar().find(".app-bar-text").removeData("html")
    }

    function dl(n, t) {
        var e = n.groupExpression(),
            i = n.get_sortExpression(),
            u, r = 0;
        if (e && i) {
            for (i = i.split(f._simpleListRegex); r < i.length;) u = i[r].match(/(\w+)(\s+\w+)?/), !i[r] || u && e.indexOf(u[1]) != -1 ? i.splice(r, 1) : r++;
            i = i.join(",");
            n.set_sortExpression(i);
            n.viewProp("sortExpression", i)
        }
        n.viewProp("groupExpression", t);
        n.set_groupExpression(t);
        iu(n);
        vt();
        n._keepKeyList = !0;
        n.AutoPivots = null;
        lo(n);
        n.sync()
    }

    function gl(n) {
        n.session("reset-grid-header", !0)
    }

    function lo(n) {
        $(n._views).each(function() {
            var i = this,
                t = i.Id;
            i.Type != "Form" && (n.session("grid-style-changed", !0, t), n.session("grid-avail-width", null, t), n.session("window-width", null, t))
        })
    }

    function oh() {
        var t = n.contextDataView();
        ni != null && (t.set_sortExpression(ni), ni = null, iu(t), vt(), t._keepKeyList = !0, gl(t), t.sync())
    }

    function ru(n, t, i) {
        var e = ni == null ? n.get_sortExpression() || "" : ni,
            o = e.split(f._simpleListRegex),
            r, u;
        if (i == null) {
            if (e)
                for (r = 0; r < o.length; r++)
                    if (u = o[r].match(fk), u && u[1] == t) return u[3] || "asc";
            return null
        }
        ni = i ? String.format("{0} {1}", t, i) : "";
        n.viewProp("sortExpression", ni)
    }

    function uu(n, t) {
        var i = ot.GenericSortAscending,
            r = ot.GenericSortDescending;
        switch (n.FilterType) {
            case "Text":
                i = ot.StringSortAscending;
                r = ot.StringSortDescending;
                break;
            case "Date":
                i = ot.DateSortAscending;
                r = ot.DateSortDescending
        }
        return t == "asc" ? i : r
    }

    function yt(n, t) {
        rt = n;
        t ? setTimeout(t, 500) : ia()
    }

    function vg() {
        function t(n) {
            n == "OnHover" && e.addClass("app-show-system-buttons-on-hover");
            n == "Always" && e.removeClass("app-show-system-buttons-on-hover");
            g("showSystemButtons", n);
            o.showSystemButtons = n
        }
        var r = rt,
            u = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(r)
                }
            }, {
                text: i.ShowSystemButtons,
                isStatic: !1,
                instruction: !0
            }, {
                text: i.OnHover,
                icon: o.showSystemButtons == "OnHover" || o.showSystemButtons == "Auto" && !s ? "check" : !1,
                context: "OnHover",
                callback: t
            }, {
                text: i.Always,
                icon: o.showSystemButtons == "Always" ? "check" : !1,
                context: "Always",
                callback: t
            }, ];
        n.contextScope("_contextMenu");
        st(u, "#app-panel-settings-showsystembuttons")
    }

    function bw() {
        function t(t) {
            ws();
            vt();
            n.contextScope(null);
            o.sidebar = t;
            g("sidebar", t);
            fc();
            ci();
            tr(1e3);
            ig();
            it();
            setTimeout(function() {
                hr();
                li(!0);
                u();
                ir()
            }, 750)
        }

        function u() {
            yt(r, bw)
        }
        var r = rt,
            f = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(r)
                }
            }, {
                text: i.Sidebar,
                isStatic: !1,
                instruction: !0
            }, {
                text: i.Landscape,
                icon: o.sidebar == "Landscape" ? "check" : !1,
                context: "Landscape",
                callback: t
            }, {
                text: i.Always,
                icon: o.sidebar == "Always" ? "check" : !1,
                context: "Always",
                callback: t
            }, {
                text: i.Never,
                icon: o.sidebar == "Never" ? "check" : !1,
                context: "Never",
                callback: t
            }];
        n.contextScope("_contextMenu");
        st(f, "#app-panel-settings-sidebar")
    }

    function na(n) {
        return "app-theme-" + n.toLowerCase()
    }

    function yg(n, t) {
        var r = new Date,
            u = __settings.appInfo.split("|")[1],
            i;
        r.setMonth(r.getMonth() + 1);
        document.cookie = ".COTTHEME" + u + "=" + t + ";expires=" + r.toUTCString() + ";path=/";
        i = $("link.app-theme");
        i.length ? i.attr("href", i.attr("href").replace(new RegExp(n, "i"), t)) : $("head title").before($('<link href="../touch/app-themes.' + t + '.css" type="text/css" rel="stylesheet" class="app-theme" />'))
    }

    function ta(n) {
        var n = n.toLowerCase();
        return n == "tiny" && (n = "condensed app-font-tiny"), "app-density-" + n
    }

    function kw() {
        var r = rt,
            n = o.theme,
            u = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(r)
                }
            }, {
                text: i.Themes.Label,
                isStatic: !1,
                instruction: !0
            }];
        for (var t in i.Themes.List) u.push({
            text: i.Themes.List[t],
            icon: t == n ? "check" : !1,
            context: t,
            callback: function(t) {
                t != n && (n && e.removeClass(na(n)), o.theme = t, yg(n, t), e.addClass(na(t)), vt(), kd(), ir());
                yt(r, kw)
            }
        });
        st(u, "#app-panel-settings-theme")
    }

    function pg() {
        function e(n) {
            n != r && (o.pageTransition = n, g("pageTransition", n));
            f.confirm(i.ConfirmReload, function() {
                vs()
            }, function() {
                yt(t)
            })
        }
        var t = rt,
            r = o.pageTransition,
            u = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(t)
                }
            }, {
                text: i.Transitions.Label,
                isStatic: !1,
                instruction: !0
            }, ];
        for (var n in i.Transitions.List) u.push({
            text: i.Transitions.List[n],
            icon: n == r ? "check" : !1,
            context: n,
            callback: e
        });
        st(u, "#app-panel-settings-theme")
    }

    function dw() {
        var r = rt,
            n = o.displayDensity,
            u = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(r)
                }
            }, {
                text: i.DisplayDensity.Label,
                isStatic: !1,
                instruction: !0
            }, ];
        for (var t in i.DisplayDensity.List) u.push({
            text: i.DisplayDensity.List[t],
            icon: t == n ? "check" : !1,
            context: t,
            callback: function(t) {
                t != n && (l.trigger("resize"), e.removeClass(ta(n)), o.displayDensity = t, e.addClass(ta(t)), di(), g("displayDensity", t), pf = null, nf());
                yt(r, dw)
            }
        });
        st(u, "#app-panel-settings-display-density")
    }

    function wg() {
        var t = rt,
            u = o.labelsInList,
            r = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(t)
                }
            }, {
                text: i.LabelsInList.Label,
                isStatic: !1,
                instruction: !0
            }, ];
        for (var n in i.LabelsInList.List) r.push({
            text: i.LabelsInList.List[n],
            icon: n == u ? "check" : !1,
            context: n,
            callback: function(n) {
                o.labelsInList = n;
                g("labelsInList", n);
                f.confirm(i.ConfirmReload, function() {
                    vs()
                }, function() {
                    yt(t)
                })
            }
        });
        st(r, "#app-panel-settings-labels-in-form")
    }

    function gw() {
        function u(n) {
            o.buttonShapes = n;
            g("buttonShapes", n);
            n ? e.removeClass("app-buttons-text-only") : e.addClass("app-buttons-text-only");
            it();
            yt(t, gw)
        }
        var t = rt,
            r = o.buttonShapes,
            n = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(t)
                }
            }, {
                text: i.ButtonShapes,
                isStatic: !1,
                instruction: !0
            }, ];
        n.push({
            text: of,
            icon: r != !1 ? "check" : !1,
            context: !0,
            callback: u
        });
        n.push({
            text: ef,
            icon: r == !1 ? "check" : !1,
            context: !1,
            callback: u
        });
        st(n, "#app-panel-settings-button-shapes")
    }

    function nb() {
        function u(n) {
            o.promoteActions = n;
            g("promoteActions", n);
            it();
            yt(t, nb)
        }
        var t = rt,
            r = o.promoteActions,
            n = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(t)
                }
            }, {
                text: i.PromoteActions,
                isStatic: !1,
                instruction: !0
            }, ];
        n.push({
            text: of,
            icon: r != !1 ? "check" : !1,
            context: !0,
            callback: u
        });
        n.push({
            text: ef,
            icon: r == !1 ? "check" : !1,
            context: !1,
            callback: u
        });
        st(n, "#app-panel-promote-actions")
    }

    function bg() {
        var t = rt,
            u = o.initialListMode,
            r = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(t)
                }
            }, {
                text: i.InitialListMode.Label,
                isStatic: !1,
                instruction: !0
            }, ];
        for (var n in i.InitialListMode.List) r.push({
            text: i.InitialListMode.List[n],
            icon: n == u ? "check" : !1,
            context: n,
            callback: function(n) {
                g("initialListMode", n);
                f.confirm(i.ConfirmReload, function() {
                    vs()
                }, function() {
                    yt(t)
                })
            }
        });
        st(r, "#app-panel-settings-default-list-mode")
    }

    function kg() {
        function u(n) {
            o.smartDates = n;
            g("smartDates", n);
            f.confirm(i.ConfirmReload, function() {
                vs()
            }, function() {
                yt(t)
            })
        }
        var t = rt,
            r = o.smartDates,
            n = [{
                text: i.Back,
                icon: tt,
                callback: function() {
                    yt(t)
                }
            }, {
                text: i.Dates.SmartDates,
                isStatic: !1,
                instruction: !0
            }, ];
        n.push({
            text: of,
            icon: r != !1 ? "check" : !1,
            context: !0,
            callback: u
        });
        n.push({
            text: ef,
            icon: r == !1 ? "check" : !1,
            context: !1,
            callback: u
        });
        st(n, "#app-panel-smart-dates")
    }

    function ia() {
        var t = [];
        n.contextScope() != "_taskAssistant" && t.push({
            text: i.Back,
            icon: tt,
            callback: bu
        });
        t.push({
            text: i.Settings
        });
        o.displayDensityDisabled || t.push({
            text: i.DisplayDensity.Label,
            icon: !1,
            transition: !0,
            callback: dw,
            desc: i.DisplayDensity.List[o.displayDensity]
        });
        o.themeDisabled || t.push({
            text: i.Themes.Label,
            icon: !1,
            transition: !0,
            callback: kw,
            desc: i.Themes.List[o.theme]
        });
        o.pageTransitionDisabled || t.push({
            text: i.Transitions.Label,
            icon: !1,
            transition: !0,
            callback: pg,
            desc: i.Transitions.List[o.pageTransition]
        });
        o.sidebarDisabled || t.push({
            text: i.Sidebar,
            icon: !1,
            transition: !0,
            callback: bw,
            desc: o.sidebar == "Landscape" ? i.Landscape : o.sidebar == "Always" ? i.Always : i.Never
        });
        o.labelsInListDisabled || t.push({
            text: i.LabelsInList.Label,
            icon: !1,
            transition: !0,
            callback: wg,
            desc: i.LabelsInList.List[o.labelsInList]
        });
        o.buttonShapesDisabled || t.push({
            text: i.ButtonShapes,
            icon: !1,
            transition: !0,
            callback: gw,
            desc: o.buttonShapes != !1 ? of : ef
        });
        o.showSystemButtonsDisabled || s || t.push({
            text: i.ShowSystemButtons,
            icon: !1,
            transition: !0,
            callback: vg,
            desc: o.showSystemButtons == "OnHover" || o.showSystemButtons == "Auto" && !s ? i.OnHover : i.Always
        });
        o.promoteActionsDisabled || t.push({
            text: i.PromoteActions,
            icon: !1,
            transition: !0,
            callback: nb,
            desc: o.promoteActions != !1 ? of : ef
        });
        o.smartDatesDisabled || t.push({
            text: i.Dates.SmartDates,
            icon: !1,
            transition: !0,
            callback: kg,
            desc: o.smartDates != !1 ? of : ef
        });
        o.initialListModeDisabled || t.push({
            text: i.InitialListMode.Label,
            icon: !1,
            transition: !0,
            callback: bg,
            desc: i.InitialListMode.List[o.initialListMode]
        });
        st(t, "#app-panel-settings")
    }

    function ra(t) {
        function p(n) {
            var t = 0;
            return n.closest("ul").find(".app-keep-open").each(function() {
                var n = $(this).data("context-action").context;
                n.index && n.index > t && (t = n.index)
            }), t
        }

        function w(n, t) {
            n.closest("ul").find(".app-keep-open").each(function() {
                var n = $(this).data("context-action").context;
                n.index && n.index > t && n.index--
            })
        }

        function b(n) {
            n.closest("ul").find(".app-keep-open").each(function() {
                var n = $(this),
                    t = n.data("context-action").context;
                n.find(".ui-li-count").remove();
                t.index && $('<span class="ui-li-count ui-body-inherit"/>').appendTo(n).text(t.index)
            })
        }
        var u = n.contextDataView(),
            r = u.get_groupExpression(),
            l = u.get_view().Label,
            a = u._fields,
            v = u._allFields,
            s = [],
            f = [],
            h, e, y = 1,
            c, o = {};
        if (t || f.push({
                text: i.Back,
                icon: tt,
                callback: bu
            }), r && f.push({
                text: i.GroupedBy + " " + ww(u) + "."
            }, {
                text: at.Filters.Labels.Clear,
                icon: "delete",
                callback: function() {
                    dl(u, null)
                }
            }), f.push({}, {
                text: i.Apply,
                icon: "ok",
                callback: function(n, t) {
                    var i = [];
                    $(t).closest("ul").find(".app-keep-open").each(function() {
                        var n = $(this).data("context-action").context;
                        n.index && i.push(n)
                    });
                    i.sort(function(n, t) {
                        return n.index - t.index
                    });
                    r = "";
                    $(i).each(function() {
                        var n = this;
                        r && (r += ",");
                        r += n.field
                    });
                    dl(u, r)
                }
            }, {
                text: String.format(i.GroupByField, l)
            }), r)
            for (h = ns, e = h.exec(r); e;) c = u.findField(e[1]), c && (o[c.Name] = {
                field: e[1],
                index: y++
            }), e = h.exec(r);
        $(a).each(function() {
            var n = this,
                t = n;
            n = v[n.AliasIndex];
            !t.Hidden && n.AllowSorting && s.push(n)
        });
        s.sort(function(n, t) {
            var i = o[n.Name],
                r = o[t.Name];
            return (i ? i.index : 1e3) - (r ? r.index : 1e3)
        });
        $(s).each(function() {
            var t = this,
                n;
            n = o[t.Name];
            f.push({
                text: t.HeaderText,
                keepOpen: !0,
                icon: !1,
                context: n || {
                    field: t.Name
                },
                count: n ? n.index : null,
                callback: function(n, t) {
                    n.index ? (w(t, n.index), n.index = null) : n.index = p(t) + 1;
                    b(t)
                }
            })
        });
        st(f, "#app-panel-group-fields")
    }

    function dg() {
        function c(n) {
            var t, i = 0;
            $(r).each(function() {
                var i = this,
                    r = i.context;
                if (r && r.field == n.field) return t = i, !1
            });
            n.order ? (t.context.order || ($(r).each(function() {
                var n = this.context;
                n && n.index > i && (i = n.index)
            }), t.context.index = i + 1, t.count = i + 1), t.icon = n.order == "asc" ? "arrow-u" : "arrow-d", t.context.order = n.order) : ($(r).each(function() {
                var i = this,
                    n = i.context;
                n && n.index > t.context.index && (i.count--, n.index--)
            }), t.context.order = null, t.context.index = null, t.count = null, t.icon = !1);
            st(r, "#app-panel-sort-fields")
        }
        var t = n.contextDataView(),
            f = t.get_sortExpression(),
            l = t.get_view().Label,
            a = t._fields,
            v = t._allFields,
            o = [],
            r = [{
                text: i.Back,
                icon: tt,
                callback: bu
            }],
            s, u, y = 1,
            h, e = {};
        if (f && r.push({
                text: pw(t)
            }, {
                text: at.Filters.Labels.Clear,
                icon: "delete",
                callback: function() {
                    ni = "";
                    t.viewProp("sortExpression", ni);
                    oh()
                }
            }), r.push({}, {
                text: i.Apply,
                icon: "ok",
                callback: function(n, i) {
                    var r = [];
                    $(i).closest("ul").find(".ui-btn").each(function() {
                        var n = $(this).data("context-action").context;
                        n && n.order && r.push(n)
                    });
                    r.sort(function(n, t) {
                        return n.index - t.index
                    });
                    ni = "";
                    $(r).each(function() {
                        var n = this;
                        ni && (ni += ",");
                        ni += n.field + " " + n.order
                    });
                    t.viewProp("sortExpression", ni);
                    oh()
                }
            }, {
                text: String.format(i.SortByField, l)
            }), f)
            for (s = ns, u = s.exec(f); u;) h = t.findField(u[1]), h && (e[h.Name] = {
                field: u[1],
                index: y++,
                order: u[3] && u[3].match(/^desc/i) ? "desc" : "asc"
            }), u = s.exec(f);
        $(a).each(function() {
            var n = this,
                t = n;
            n = v[n.AliasIndex];
            !t.Hidden && n.AllowSorting && o.push(n)
        });
        o.sort(function(n, t) {
            var i = e[n.Name],
                r = e[t.Name];
            return (i ? i.index : 1e3) - (r ? r.index : 1e3)
        });
        $(o).each(function() {
            var u = this,
                n, f = t.groupExpression();
            n = e[u.Name];
            r.push({
                text: u.HeaderText,
                icon: n ? n.order == "asc" ? "arrow-u" : "arrow-d" : !1,
                context: n || {
                    field: u.Name
                },
                count: n ? n.index : null,
                transition: !0,
                callback: function(n) {
                    var u = t.findField(n.field),
                        e = [{
                            text: i.Back,
                            icon: tt,
                            callback: function() {
                                st(r, "#app-panel-sort-fields")
                            }
                        }, {
                            text: String.format(i.SortByOptions, t.get_view().Label, u.HeaderText)
                        }, {
                            text: uu(u, "asc"),
                            icon: n.order == "asc" ? "check" : !1,
                            transition: !0,
                            reverse: !0,
                            context: {
                                order: "asc",
                                field: n.field
                            },
                            callback: c
                        }, {
                            text: uu(u, "desc"),
                            icon: n.order == "desc" ? "check" : !1,
                            transition: !0,
                            reverse: !0,
                            context: {
                                order: "desc",
                                field: n.field
                            },
                            callback: c
                        }];
                    f && f.indexOf(n.field) != -1 || e.splice(2, 0, {
                        text: i.None,
                        icon: n.order ? !1 : "check",
                        transition: !0,
                        reverse: !0,
                        context: {
                            field: n.field
                        },
                        callback: c
                    });
                    st(e, "#app-panel-sort-field-options")
                }
            })
        });
        st(r, "#app-panel-sort-fields")
    }

    function gg(n) {
        var t = n.find(".app-group"),
            i = t.length ? t.first().outerHeight(!0) : 0;
        return t.remove(), i
    }

    function nn(n, t) {
        var r = n.groupExpression(),
            o = [],
            v = n.get_showFirstLetters() && !r,
            s, i = 0,
            u, f, e, c, l, h, a;
        if (r) {
            while (i < r.length) s = n.findField(r[i]), s ? r[i++] = n._allFields[s.AliasIndex] : r.splice(i, 1);
            t.find("li a").each(function() {
                var s = $(this),
                    k = s.data("data-context"),
                    t = [],
                    y = [],
                    p = [],
                    w, b = [],
                    d, n, g;
                k ? ($(r).each(function(l) {
                    var it = this,
                        nt = k.row[it.Index],
                        a, rt, tt, ft, ut;
                    if (nt != null && (a = v ? nt.substring(0, 1) : it.text(nt)), t.push(a), y.push(it.HeaderText), p.push(it.Type), b.push(nt), o.length && o[l] == a || (o[l] = a, d = !0), d && l == r.length - 1) {
                        for (u && ($('<span class="app-group-count"/>').appendTo(u).text(f + (h ? "+" : "")), h = !1), n = $('<li class="app-group"/>').insertBefore(s.parent()), $('<span class="glyphicon glyphicon-menu-up"/>').appendTo(n), tt = null, rt = null, w = p[p.length - 1].match(/^Date/), nt != null && p.length == 1 && w && (nt = b[b.length - 1], rt = yr.DayNames[nt.getDay()] + " " + nt.getDate(), tt = yr.MonthNames[nt.getMonth()], ft = nt.getFullYear()), tt && (e = $('<span class="app-group-info"/>').appendTo(n), $('<span class="app-group-info-value"/>').appendTo(e).text(tt), $('<span class="app-group-info-value-muted"/>').appendTo(e).text(ft), c != tt ? c = tt : e.addClass("app-group-info-duplicate")), w && n.addClass("app-group-fixed"), f = 0, i = 0; i < t.length - 1;) ut || (ut = $('<span class="app-group-path"/>').appendTo(n)), g = $('<span class="app-group-path-value"/>').appendTo(ut), a = t[i], a || (a = ot.BlankValue), g.text(a).attr("title", y[i] + ":\n" + a), i++;
                        a = rt || t[t.length - 1];
                        u = $('<span class="app-group-title"/>').appendTo(n).text(a);
                        a || (a = ot.BlankValue);
                        u.text(a).attr("data-text", a).attr("title", y[y.length - 1] + ":\n" + a)
                    }
                }), f++) : s.is(".dv-load-at-bottom") ? a = !0 : !l && s.is(".dv-load-at-top") && (h = !0, l = !0)
            });
            u && $('<span class="app-group-count"/>').appendTo(u).text(f + (a ? "+" : ""))
        }
    }

    function tn(n) {
        var t = n.get_filter(),
            i = n._externalFilter || [];
        return t && t.length && i.length < t.length || ne(n).length
    }

    function ua(n) {
        var t = $(".ui-panel-open .app-btn-apply,.ui-popup-active .app-btn-apply");
        t.is(".app-enabled") || (n ? t.removeClass("ui-disabled") : t.addClass("ui-disabled"))
    }

    function sh(n) {
        var t = n.find(".app-icon-check"),
            i = n.parent();
        n.is(".app-checked") ? (t.length || $(pi).appendTo(n), i.addClass("app-checked")) : (t.remove(), i.removeClass("app-checked"))
    }

    function rn(n, t) {
        var i = tb(t),
            r = fa(t);
        t.toggleClass("ui-btn-icon-right app-checked");
        sh(t);
        r.length > r.filter(".app-checked").length ? i.removeClass(tf) : i.addClass(tf);
        sh(i);
        ua(r.filter(".app-checked").length > 0)
    }

    function tb(n) {
        return n.closest(".ui-panel-inner").find(".app-btn-select-all a")
    }

    function fa(n) {
        return tb(n).parent().nextAll().find("a")
    }

    function un(n) {
        return n.length > 0 ? n.data("data-context") || n.data("context-action") : null
    }

    function fn(n, t) {
        var i = f.find(n.dataViewId),
            r = n.field,
            e = i.findField(r),
            o = i._allFields[e.AliasIndex],
            u = ib(i, r, t);
        i.removeFromFilter(o);
        u && i._filter.push(u);
        io(i)
    }

    function ib(n, t, i) {
        function s(t) {
            r = [];
            o.each(function() {
                var i = $(this),
                    u = i.is(".app-checked");
                (u && t || !u && !t) && r.push(n.convertFieldValueToString(f, f._listOfValues[un(i).context]))
            })
        }
        var f = n.findField(t),
            h = n._allFields[f.AliasIndex],
            u = [],
            r, e, o = fa(i);
        return o.filter(":not(.app-checked)").length && (s(!0), r.length && (u.push(h.Name + ":"), r.length == 1 ? u.push("=" + r[0]) : (e = r.length <= 10 || r.length <= r.length / 2, u.push(e ? "$in$" : "$notin$"), e || s(!1), $(r).each(function(n) {
            n > 0 && u.push("$or$");
            u.push(this)
        })))), u.join("")
    }

    function ku(t) {
        function s(n, t) {
            var f = n._dataView,
                u = f._allFields[n.AliasIndex],
                e = f.get_fieldFilter(u, !0);
            r || (t.push({
                text: i.Back,
                icon: tt,
                callback: l
            }), t.push({
                text: u.HeaderText
            }));
            e && t.push({
                text: at.Filters.Labels.Clear,
                context: u.Name,
                callback: function() {
                    f.removeFromFilter(u);
                    io(f)
                },
                icon: "delete"
            });
            t.push({
                text: at.Filters[u.FilterType].Text,
                context: u.Name,
                disabled: !0,
                callback: function() {},
                transition: !0,
                icon: !1
            });
            r || t.push({
                text: String.format(i.FilterByOptions, f.get_view().Label, u.HeaderText, i.Apply)
            })
        }

        function h(n, t) {
            var e, r, p, u = n._dataView,
                l = n._listOfValues || [],
                a = u._allFields[n.AliasIndex],
                h = u.get_fieldFilter(a, !0),
                v = [],
                o, y, s, f, c = h == "$notin";
            for (h && (h == "=" || h == "$in" || c) && (y = (u.get_fieldFilter(a) || "").split(/\$or\$/)), o = {
                    text: i.Apply,
                    icon: "ok",
                    disabled: !0,
                    itemClassName: "app-btn-apply",
                    context: {
                        dataViewId: u._id,
                        mappedId: u._mappedId,
                        field: n.Name
                    },
                    callback: fn
                }, t.push(o, {}), l.length > 1 && t.push({
                    text: at.Filters.Labels.SelectAll,
                    keepOpen: !0,
                    itemClassName: "app-btn-select-all",
                    icon: !1,
                    callback: function(n, t) {
                        var i = fa(t);
                        t.is(".app-checked") ? (t.removeClass(tf), i.removeClass(tf).find(".app-icon-check").remove(), ua(!1)) : (t.addClass(tf), $(pi).appendTo(i.addClass(tf)), ua(!0));
                        sh(t)
                    }
                }), e = 0; e < l.length; e++) r = l[e], f = y && y.indexOf(u.convertFieldValueToString(n, r)) != -1, c && (f = !f), p = r == null ? ot.EmptyValue : typeof r == "string" && r == "" ? ot.BlankValue : a.text(r), s = {
                text: p,
                icon: f ? "check" : !1,
                keepOpen: !0,
                context: e,
                callback: rn,
                linkClassName: f ? "app-checked" : ""
            }, f ? (c ? v.push(s) : t.push(s), o.disabled && (o.disabled = !1, o.itemClassName += " app-enabled")) : c ? t.push(s) : v.push(s);
            return t.concat(v)
        }

        function c(t) {
            var i = [],
                u = n.contextDataView(),
                r = u.findField(t),
                e = u._allFields[r.AliasIndex];
            s(e, i);
            o && i.splice(0, 1);
            r._listOfValues && r._listOfValues.length ? i = h(r, i) : i.push({
                text: ot.Loading,
                icon: "refresh",
                animate: !0,
                context: {
                    id: u._id,
                    field: t
                },
                keepOpen: !0,
                callback: er
            });
            st(i, "#app-panel-filter-field", {
                position: "right",
                resetScrolling: !0,
                afteropen: function() {
                    var u = hy().data("context-action"),
                        r = u && u.context,
                        i, e, t;
                    r && (i = f.find(r.id), t = i.findField(r.field), e = i._allFields, i._loadListOfValues(null, t.Name, e[t.AliasIndex].Name, function() {
                        var u = hy(),
                            f = u.length && u.data("context-action").context,
                            r = [];
                        u.length && f.id == i._id && f.field == t.Name && (s(t, r), o && r.splice(0, 1), r = h(t, r), n.refreshContextMenu(u.closest(".ui-panel"), r, '[data-panel="#app-panel-filter-field"]'))
                    }))
                }
            })
        }

        function l() {
            var t = n.contextDataView(),
                r = e ? [] : [{
                    text: i.Back,
                    icon: tt,
                    callback: bu
                }],
                u = {},
                f = t && t._filter;
            tn(t) && (r.push({
                text: t.extension().filterStatus()
            }), r.push({
                text: at.Filters.Labels.Clear,
                icon: "delete",
                callback: function() {
                    var t = n.contextDataView();
                    ac(t)
                }
            }), e && ne(t).length && r.push({
                text: ri.ShowAdvancedSearch,
                desc: ip(t),
                icon: "search",
                toolbar: !1,
                system: !0,
                context: {
                    dataViewId: t._id
                },
                callback: cy
            }));
            r.push({
                text: String.format(i.FilterByField, t.get_view().Label)
            });
            $(t._filter).each(function() {
                var n = this,
                    t = n.match(/^\w+/);
                t && (u[t[0]] = n)
            });
            $(t._externalFilter).each(function() {
                u[this.Name] = null
            });
            $(t._fields).each(function() {
                var o = this,
                    i, e, n;
                i = t._allFields[o.AliasIndex];
                e = u[i.Name];
                e && (t._filter = [e], n = t.extension().filterStatus(!0, !0), n.indexOf(i.HeaderText) == 0 && (n = n.substring(i.HeaderText.length).trim(), n.length > 2 && (n = n.charAt(0).toUpperCase() + n.slice(1))));
                !o.Hidden && i.AllowQBE && r.push({
                    text: i.HeaderText,
                    context: o.Name,
                    icon: e ? "filter" : !1,
                    desc: n,
                    transition: !0,
                    callback: c
                });
                t._filter = f
            });
            st(r, "#app-panel-filter")
        }
        var e, o, r, u;
        if (typeof t == "object" && (t._dataView ? r = t : t.scopeField ? r = t.scopeField : t.mode == "everything" ? e = !0 : t.mode == "field" && (o = !0)), r) return u = [], s(r, u), t.samples != !1 && (r._listOfValues && r._listOfValues.length ? u = h(r, u) : u.push({
            text: ot.Loading,
            icon: "refresh",
            animate: !0,
            context: {
                id: r._dataView._id,
                field: r.Name
            },
            keepOpen: !0,
            callback: er
        })), u;
        t && t.mode == "field" ? c(t.field) : l()
    }

    function rb(t, i, r, u) {
        r || (r = n.pageInfo());
        var f = r && r.dataView,
            e = f && f.get_view(),
            o = 0;
        return f && f.get_isGrid() && f.get_showViewSelector() && $(f.get_views()).each(function() {
            var n = this,
                s = n.Label == e.Label;
            i && n.Id == e.Id || (n.Type != "Form" && n.ShowInSelector || n.Id == e.Id) && (t.push({
                text: n.Label,
                icon: s ? "check" : i ? "" : !1,
                context: o,
                callback: function(t) {
                    var i = $.find("#" + r.id + " .ui-content > .app-tabs-views .ui-btn");
                    u && i.length ? $(i[t]).trigger("vclick", {
                        selectedTab: n.Label
                    }) : (f._forceSync(), f.extension()._commandRow = null, f._requestedSortExpression = f.pageProp(n.Id + "_sortExpression"), f._requestedFilter = f.pageProp(n.Id + "_filter"), f.executeCommand({
                        commandName: "Select",
                        commandArgument: n.Id
                    }), f.pageProp("viewId", n.Id), u && !i.length && wu(r.id + "_view-tabs", n.Label), r.id == d() && (ti(n.Label), uy(), iu(f), it()))
                }
            }), o++)
        }), o
    }

    function ub(t, r, u) {
        var e = n.contextDataView(),
            f = e.extension(),
            o = f.viewStyle(),
            h = e != n.dataView(),
            s = [];
        rb(t, null, n.contextPageInfo(), !0) == 1 && t.splice(t.length - 2, 2);
        e.get_isGrid() && e.get_showViewSelector() && (r == !1 ? t.length && t.push({}) : t.push({
            text: i.PresentationStyle
        }), (u == null || u == !0) && (f.tagged("view-style-grid-disabled") || t.push({
            text: i.Grid,
            icon: o == "Grid" ? "check" : !1,
            callback: function() {
                f.viewStyle("Grid")
            }
        }), f.tagged("view-style-list-disabled") || t.push({
            text: i.List,
            icon: o == "List" ? "check" : !1,
            callback: function() {
                f.viewStyle("List")
            }
        }), f.tagged("view-style-cards-disabled") || t.push({
            text: i.Cards,
            icon: o == "Cards" ? "check" : !1,
            callback: function() {
                f.viewStyle() != "Cards" && f.viewStyle("Cards")
            }
        }), h || f.tagged("view-style-map-disabled") || f.tagged("supports-view-style-map") && t.push({
            text: i.Map,
            icon: o == "Map" ? "check" : !1,
            callback: function() {
                f.viewStyle("Map")
            }
        }), n.presenter("enumerate", {
            id: e._id,
            list: s
        }), $(s).each(function() {
            var n = this;
            f.tagged("view-style-" + n.name.toLowerCase() + "-disabled") || (n.icon = n.name == o ? "check" : !1, t.push(n))
        })));
        og(e, t)
    }

    function en() {
        var n = [{
            text: i.Back,
            icon: tt,
            callback: bu
        }, {
            text: i.AlternativeView
        }];
        ub(n);
        st(n, "#app-panel-view-options")
    }

    function fb(t, i, r) {
        var s = t._parentDataViewId && !t._lookupInfo,
            e = t.extension(),
            o = t._id,
            h = t._allFields[t._fields[0].AliasIndex],
            f = i.length,
            u;
        r && r.length && !e.inserting() && i.isSideBar == !1 && (n.enumerateFields(t, i, null, r), f < i.length && (u = i[f], u.icon = "info", u.theme = "b", u.transition = !0, u.context = {
            id: o
        }, u.callback = kv))
    }

    function ea(n, t, i) {
        i && $(n._fields).each(function() {
            var r = n._allFields[this.AliasIndex],
                f = pl(r, !0),
                e = wl(r, !0),
                u;
            (f || e) && (u = i[r.Index], u != null && (f ? t.push({
                text: r.text(u),
                desc: r.HeaderText,
                icon: "phone",
                href: "tel:" + u,
                system: !0
            }) : e && t.push({
                text: r.text(u),
                desc: r.HeaderText,
                icon: "mail",
                href: "mailto:" + u,
                system: !0
            })))
        })
    }

    function on(n) {
        var t = null,
            i = n.CssClass;
        if (i && (t = i.match(/\bui-icon-([\w-]+)\b/), t ? t = t[1] : (t = i.match(/\bglyphicon-([\w\-]+)\b/), t && (t = t[0]))), !t) switch (n.CommandName) {
            case "Delete":
                t = "trash";
                break;
            case "New":
                t = "plus";
                break;
            case "Edit":
                t = "edit";
                break;
            case "Insert":
            case "Update":
            case "Confirm":
                t = "ok";
                break;
            case "Cancel":
                t = "back";
                break;
            case "Duplicate":
                t = "duplicate";
                break;
            case "Select":
                break;
            default:
                t = !1
        }
        return t
    }

    function ao(r, u, e, o, h) {
        function d(n) {
            for (var i = u._views, t = 0; t < i.length; t++)
                if (i[t].Id == n) return i[t].Type != "Form";
            return !1
        }
        var b = u.rowIsSelected(o),
            l, y = [],
            g = u.get_viewId(),
            p = u.get_isGrid(),
            w = {},
            a, c, v, k = s ? /^(DataSheet|Grid|Export(Rowset|Rss)|Import)$/ : /^(DataSheet|Grid|Import)$/;
        $(u.actionGroups(r)).each(function(s) {
            var g = this,
                nt = g.Scope;
            nt != "ActionBar" || g.Flat || g.Id == r ? (!g.Scope.match(/Grid|ActionColumn/) || b && p || g.Flat) && $(this.Actions).each(function(i) {
                var b = this,
                    r = b.CommandName,
                    tt = b.CommandArgument,
                    rt = r + "/" + tt + "/" + b.HeaderText,
                    it = y.indexOf(rt) == -1 && (!r || !r.match(k)) && (!g.Flat || b.HeaderText);
                v = r ? function() {
                    function e() {
                        if (u.editing()) {
                            var n = b.CausesValidation && r != "Cancel";
                            if (t.cancel(n), n && !t.valid()) return
                        }
                        lt();
                        r == "Edit" && bf(u);
                        u.extension().command(o, r, tt, n, b.Path)
                    }(n.contextScope(null), u._busy()) || (String.isNullOrEmpty(b.Confirmation) ? e() : u._confirm({
                        action: b,
                        scope: g.Scope,
                        actionIndex: i,
                        rowIndex: 0,
                        groupIndex: s
                    }, function(n) {
                        f.confirm(n, function() {
                            e()
                        })
                    }))
                } : null;
                c = null;
                it && (a = r && r.match(/^(Select|Edit|New|Duplicate)$/), a && p && (!tt || d(tt)) ? h && r == "Edit" ? tt = h : (w[r] = e[e.length - 1], it = !1) : a && (c = w[r]));
                it && !v && g.Scope.match(/Grid|ActionColumn/) && (it = !1);
                it && (y.push(rt), l = {
                    text: b.HeaderText,
                    callback: v,
                    icon: on(b),
                    uiScope: nt,
                    group: g.Id,
                    path: b.Path,
                    command: r,
                    argument: tt
                }, c ? Array.insert(e, e.indexOf(c) + 1, l) : e.push(l))
            }) : e.push({
                text: g.HeaderText,
                icon: !1,
                transition: !0,
                uiScope: nt,
                group: g.Id,
                context: {
                    group: g,
                    isSideBar: e.isSideBar
                },
                callback: function(n) {
                    rt = [];
                    n.isSideBar || rt.push({
                        text: i.Back,
                        icon: tt,
                        callback: bu
                    });
                    rt.push({
                        text: g.HeaderText
                    });
                    ao(n.group.Id, u, rt, o);
                    st(rt, "#app-panel-group-actions", n.isSideBar ? {
                        position: "left"
                    } : null)
                }
            })
        });
        u._editing = null
    }

    function sn(n, t) {
        function s(n, t) {
            $(e).each(function(i) {
                var r = e[i],
                    f = r.AliasIndex,
                    o = e[f];
                r.Hidden || o.GroupBy || !(u || r.tagged(n)) || t.call(r, f)
            })
        }

        function h(n) {
            s(n, function(t) {
                var e = this,
                    h = e.tagged(n + "desc"),
                    c = e.tagged(n + "para"),
                    l = e.tagged(n + "column"),
                    a = e.tagged(n + "nolabel"),
                    o = (e.tagged(n + "label") || h || c || l) && !a,
                    s = f.tagSuffix,
                    v = e.tagged(n + "count"),
                    y = e.tagged(n + "aside"),
                    p = e.tagged(n + "heading"),
                    w = e.tagged(n + "thumb"),
                    b;
                e.tagged(n + "none") || (!u || p || h || v || y || a || c || l || (i.heading == null ? i.heading = t : i.thumb == null && e.OnDemand && e.OnDemandStyle != 1 ? i.thumb = t : (h = !0, o = !0)), p && (i.heading = t), (!o || v || y) && !a || (i.desc.push(t), r = i.desc.length - 1, f.tagSuffix && (i.descRwd[r] = f.tagSuffix), o && (i.descLabels[r] = !0, s && (i.descLabelsRwd[r] = s)), c && (i.descPara[r] = !0), l && (i.descColumn[r] = !0, b = e.Columns, i.descColumnCount++)), v && (i.count = t, i.countRwd = f.tagSuffix, i.countLabel = o, i.countLabelRwd = s), y && (i.aside = t, i.asideRwd = f.tagSuffix, i.asideLabel = o, i.asideLabelRwd = s), w && (i.thumb = t))
            })
        }

        function c() {
            u = !0
        }
        var w = n._fields,
            e = n._allFields,
            i = t && n._listItemMap && n._listItemMap[n._viewId] || !t && n._cardItemMap && n._cardItemMap[n._viewId] || {
                heading: null,
                thumb: null,
                aside: null,
                count: null,
                desc: [],
                descOriginal: [],
                descRwd: [],
                descLabels: [],
                descLabelsRwd: [],
                descPara: [],
                descColumn: [],
                descColumnCount: 0
            },
            u, r;
        if (i.cached) return i;
        if (t ? (s("list-", c), u && h("list-")) : (s("card-", c), u && h("card-", !0)), u || (s("item-", c), u && h("item-")), u) i.heading == null && (i.heading = w[0].AliasIndex);
        else {
            var l, a, b = 0,
                o = [],
                v = 3,
                y;

            function p(n) {
                var f, s, h;
                if (!this.Hidden && !this.GroupBy)
                    if (this.OnDemand) i.thumb == null && this.OnDemandStyle != 1 && (i.thumb = n);
                    else if (!l || this.ShowInSummary) {
                    if (n = this.AliasIndex, f = e[n], s = f.Type.match(/^Date/), f.GroupBy) return;
                    h = f.Type != "String" && !f.OnDemand;
                    i.heading == null ? (i.heading = n, t && (i.desc.push(n), r = i.desc.length - 1, i.descLabels[r] = n, o.push(r))) : i.aside == null && s && i.count == null && !t ? i.aside = n : i.count != null || !h || s || i.aside != null || t ? (i.desc.push(n), r = i.desc.length - 1, i.descLabels[r] = n, t ? (o.push(r), !f.ItemsLookupStyle && (f.Rows > 1 || f.TextMode == 3) ? (i.descPara[r] = !0, a = !0) : a && (i.descPara[r] = !0, a = !1)) : b++ % 3 == 0 && (i.descPara[r] = !0)) : i.count = n;
                    u = !0
                }
            }
            t && (l = !1);
            $(e).each(p);
            t && !i.descPara.length && o.length > 3 && (o.length < 7 && (v = 2), y = Math.ceil(o.length / v), $(o).each(function(n) {
                n % y == 0 && (i.descColumn[this] = !0, i.descColumnCount++)
            }));
            u || (l = !1, $(e).each(p))
        }
        return i.desc.length && $(e).each(function() {
            var n = this,
                t = i.desc.indexOf(n.AliasIndex);
            t != -1 && n.Index != n.AliasIndex && (i.descOriginal[t] = n.Index)
        }), i.cached = !0, t ? (n._listItemMap || (n._listItemMap = {}), n._listItemMap[n._viewId] = i) : (n._cardItemMap || (n._cardItemMap = {}), n._cardItemMap[n._viewId] = i), i
    }

    function eb(n) {
        var t = {
                latitude: null,
                longitude: null,
                segments: []
            },
            i = [];
        return $(n._allFields).each(function(n) {
            var r = this;
            r.tagged("map-") && (r.tagged("map-latitude") ? t.latitude = n : r.tagged("map-longitude") ? t.longitude = n : i.push(this))
        }), $(["address", "city", "state", "region", "postalcode", "zipcode", "zip", "country"]).each(function() {
            var n = this;
            $(i).each(function(r) {
                var u = this;
                if (u.tagged("map-" + n)) return t.segments.push(u.Index), i.splice(r, 1), !1
            })
        }), t
    }

    function hn(n) {
        var t = ve || g("geoLocations"),
            i = null;
        return t && $(t).each(function() {
            var t = this;
            if (t.address == n) return i = t.lat == null && t.lng == null ? "ZERO_RESULTS" : {
                lat: t.lat,
                lng: t.lng
            }, !1
        }), ve || (ve = t), i
    }

    function ob(n, t, i) {
        var r = ve || g("geoLocations");
        r || (r = []);
        r.push({
            address: n,
            lat: t,
            lng: i
        });
        r.length > ck && r.splice(0, 1);
        ve = r;
        setTimeout(function() {
            g("geoLocations", r)
        }, 0)
    }

    function cn(n, t, i) {
        var r = new Sys.StringBuilder;
        return bt ? r.append("http://maps.apple.com/?") : r.append("https://maps.google.com/?"), i == "q" ? r.append("q=") : i == "to" ? r.append("daddr=") : r.append("saddr="), t.latitude != null && t.longitude != null ? r.appendFormat("{0},{1}", t.latitude, t.latitude) : $(t.segments).each(function(t) {
            var i = n[this];
            i && (t > 0 && r.append(",+"), r.append(i.trim().replace(/\s+/g, "+")))
        }), r.toString()
    }

    function ln(n, t) {
        var u, f, r, e, i;
        return t.latitude != null && t.longitude != null ? (u = n[t.latitude], f = n[t.longitude]) : (r = new Sys.StringBuilder, $(t.segments).each(function(t) {
            var i = n[this];
            i && (t > 0 && r.append(","), r.append(i))
        }), e = r.toString(), i = hn(e), i ? typeof i != "string" && (u = i.lat, f = i.lng) : i = e), typeof i != "string" && (i = new google.maps.LatLng(u, f)), i
    }

    function sb(n) {
        $(n.markers).each(function() {
            google.maps.event.clearListeners(this, "click");
            this.setMap(null)
        });
        n.markers = [];
        n.selected = null
    }

    function oa(n) {
        if (n.fit != !1) {
            var i = new google.maps.LatLngBounds,
                t = n.markers,
                r = n.map;
            t.length == 1 ? r.setCenter(t[0].position) : ($(t).each(function() {
                i.extend(this.position)
            }), r.fitBounds(i))
        }
    }

    function sa() {
        if (!!(__tf != 4)) {
            var n = ".noitide tcudorp ruoy ni detroppus ton si erutaef sihT".split("").reverse(),
                t = f.alert,
                i = Math.random() * 1e4;
            setTimeout(function() {
                $(".ui-popup-active .ui-popup").popup("close");
                setTimeout(function() {
                    t(n.join(""))
                }, 250)
            }, i)
        }
    }

    function ha(t) {
        t.items || (t.items = []);
        var c = t.dataView,
            w = c.extension(),
            k = [],
            f = no(),
            r = $('<div class="ui-content app-popup-message app-map-info"><\/div>').popup({
                transition: rc(),
                history: s,
                arrow: f ? null : t.x ? s ? "b,t,l,r" : "t,b,l,r" : null,
                theme: "a",
                overlayTheme: "b",
                tolerance: f ? 0 : 5,
                positionTo: f ? null : t.x ? "origin" : "window",
                afteropen: function() {
                    ca(null, r);
                    ci(r.find(".ui-listview"));
                    t.afteropen && t.afteropen(r);
                    b = !1
                },
                afterclose: function() {
                    r.find(".ui-btn").data("data-context", null);
                    y.listview("destroy").remove();
                    lh(r);
                    t.afterclose && t.afterclose(r);
                    setTimeout(function() {
                        u && u.callback && u.callback(u.context)
                    }, 50)
                }
            }),
            a = f ? {
                x: l.width() / 2,
                y: l.height() - 1
            } : {
                x: t.x,
                y: t.y
            },
            y = $('<ul class="app-listview"/>').appendTo(r),
            d = $('<li data-icon="false"/>').appendTo(y),
            p = $("<a/>").appendTo(d),
            nt = $('<div class="app-map-info-toolbar"><\/div>').appendTo(r),
            u, it, g, e, h;
        au(c, w.commandRow(), w.itemMap(!1), null, d, p, null, !0);
        p.find(".app-btn-check").remove();
        y.listview();
        l.width() < 640 && (o.displayDensity == "Comfortable" ? r.addClass("app-density-compact") : o.displayDensity == "Compact" && r.addClass("app-density-condensed"));
        $(t.items).each(function() {
            k.push(this.icon)
        });
        context = [];
        n.contextScope(c._id);
        n.navContext(context, !1);
        $(context).each(function() {
            var n = this;
            n.icon == "eye" && (it = n.text);
            n.icon == "dots" || n.navigateTo || n.system || !n.callback || k.indexOf(n.icon) != -1 || (!g && (n.icon || n.command == "Select") && (g = n, p.data("data-context", n)), n.command == "Edit" && (e = n), n.command == "Delete" && (h = n))
        });
        n.contextScope(null);
        t.hasMore || (t.items.splice(0, 0, {
            text: i.More,
            icon: "dots",
            callback: function() {
                a.itemsToAppend = [{
                    text: i.Back,
                    icon: tt,
                    callback: function() {
                        ha(t)
                    }
                }];
                yo(t.anchor, a)
            }
        }), e && t.items.push({
            text: e.text,
            icon: e.icon,
            callback: e.callback
        }), h && t.items.push({
            text: h.text,
            icon: h.icon,
            callback: h.callback
        }), t.hasMore = !0);
        $(t.items).each(function() {
            var n = this,
                t = $('<a class="ui-btn ui-btn-inline ui-btn-icon-notext ui-corner-all"/>').appendTo(nt).attr("title", n.text).addClass("ui-icon-" + n.icon).data("data-context", n);
            n.href && t.attr("href", n.href);
            n.target && t.attr("target", n.target)
        });
        f && r.addClass("app-popup-panel").parent().css("minWidth", "100%");
        b = !0;
        r.popupopen(a).on("vclick", ".ui-btn", function(n) {
            var t = $(n.target),
                i = t.closest("a");
            if (!t.is("[data-href]"))
                if (u = i.data("data-context"), u.href) u.keepOpen || fu(r), u = null;
                else return v(i, function() {
                    fu(r)
                }), !1
        }).on("vclick", "li", function(n) {
            if (!$(n.target).is("[data-href]")) return markerAction = !0, fu(r), !1
        })
    }

    function hb(n, t, r, u, f) {
        var s = n,
            e = t.data("data-map"),
            h = s.dataView(),
            o = new google.maps.Marker({
                map: e.map,
                position: r,
                title: u
            });
        return google.maps.event.addListener(o, "click", function() {
            function a(n) {
                google.maps.event.trigger(n || e.selected, "click")
            }

            function v() {
                if (e.fit = !1, o.setAnimation(null), n.getZoom() >= 17) {
                    var t = n.getStreetView();
                    t && t.getVisible() ? (t.setVisible(!1), a(o)) : (e.fit = !0, oa(e));
                    ch(o)
                } else n.setZoom(17), n.panTo(o.position), ch(o);
                a()
            }

            function y(t) {
                var i = -1;
                $(u).each(function(n) {
                    if (this == o) return i = n, !0
                });
                i != -1 && (t == "next" ? i++ : i--, i < 0 && (i = u.length - 1), i >= u.length && (i = 0), hh(e, u[i]), n.panTo(e.selected.position), a())
            }
            s.tap({
                row: f
            }, "none");
            var n = e.map,
                u = e.markers,
                l = an(o.position, n),
                c = l && {
                    x: l.x + t.offset().left,
                    y: l.y + t.offset().top
                },
                r = [];
            n.getZoom() >= 17 ? u.length > 1 && r.push({
                text: i.ZoomOut,
                icon: "zoomout",
                callback: v
            }) : r.push({
                text: i.ZoomIn,
                icon: "zoomin",
                callback: v
            });
            r.push({
                text: i.Directions,
                icon: "navigation",
                href: cn(f, eb(h), "to"),
                target: "_blank",
                keepOpen: !0
            });
            e.markers.length > 1 && (r.push({
                text: pr.Previous,
                icon: "arrow-l",
                context: "prev",
                callback: y
            }), r.push({
                text: pr.Next,
                icon: "arrow-r",
                context: "next",
                callback: y
            }));
            ha({
                x: c && c.x,
                y: c && c.y,
                dataView: h,
                afteropen: function() {
                    hh(e, o);
                    ch(o)
                },
                items: r
            })
        }), e.markers.push(o), o
    }

    function hh(n, t) {
        n.selected && n.selected.setIcon(null);
        n.selected = t;
        t && t.setIcon("http://mt.google.com/vt/icon?psize=30&font=fonts/arialuni_t.ttf&color=ff304C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=43&ay=48&text=%E2%80%A2")
    }

    function ch(n, t, i) {
        typeof t == "undefined" && (t = 755);
        n.setAnimation(i || google.maps.Animation.BOUNCE);
        t && setTimeout(function() {
            n.setAnimation(null)
        }, t)
    }

    function an(n, t) {
        var u = t.getBounds(),
            i = t.getProjection(),
            s = i.fromLatLngToPoint(u.getNorthEast()),
            r = i.fromLatLngToPoint(u.getSouthWest()),
            e = Math.pow(2, t.getZoom()),
            f = i.fromLatLngToPoint(n),
            o = 0;
        return (f.x < r.x || r.x == 0) && (o = $(t.getDiv()).width() / 2, r = i.fromLatLngToPoint(u.getCenter())), new google.maps.Point((f.x - r.x) * e + o, (f.y - s.y) * e)
    }

    function ca(t, i) {
        var r = i.closest(".ui-popup-container"),
            u = n.promo();
        e.addClass("app-has-popup-open");
        dr()
    }

    function vo(n) {
        n.popup("close")
    }

    function fu(n) {
        n.data("mobilePopup")._currentTransition = "none";
        vo(n)
    }

    function lh(n) {
        gd(n);
        e.removeClass("app-has-popup-open");
        n.data("position-options", null).popup("destroy").remove()
    }

    function du(n) {
        n.find("a").data("data-context", null);
        n.find("li").remove()
    }

    function cb(n) {
        du(n);
        n.off("vclick").listview("destroy")
    }

    function yo(t, i) {
        function s() {
            r.length && r[r.length - 1].text && r.push({})
        }

        function e(n) {
            var t = [];
            $(u).each(function() {
                var i = this,
                    u = i.icon;
                i.system ? n && (!i.system || u == "eye" || u == "phone" || u == "mail") && u != "dots" && t.push(i) : i.text && !i.isStatic && r.push(i)
            });
            n && t.length && (s(), $(t).each(function() {
                var n = this;
                r.push({
                    text: n.text,
                    icon: n.icon,
                    callback: n.href ? function() {
                        ec(n.href)
                    } : n.callback
                })
            }))
        }
        t = $(t);
        var h = kt(t),
            l = h.length ? h.attr("data-for") : null,
            a = n.pageInfo(l),
            o = a.dataView,
            f = o.extension(),
            u = i && i.context,
            r = [],
            c;
        f.lookupInfo() ? (u = [], f.context(u), e()) : (e(), i && i.autoPopulate == !1 || (u = [], f.context(u, ["ActionColumn"]), u.length && (s(), e()), s(), u = [], f.context(u, ["Grid"]), e(!0)));
        i && $(i.itemsToAppend).each(function() {
            r.push(this)
        });
        $(o._fields).each(function() {
            var i = this,
                u = o._allFields[i.AliasIndex],
                s = i.HyperlinkFormatString,
                e, n, t;
            s && (n = f.commandRow(), n && (t = n[u.Index], t != null && (e = sl(i, n), t = u.format(n[u.Index]), c || (c = !0, r.push({})), r.push({
                text: t,
                icon: "info",
                href: e
            }))))
        });
        nt({
            items: r,
            anchor: t,
            iconPos: "left",
            defaultIcon: "carat-r",
            x: i && i.x || t.length && t.offset().left + t.outerWidth() / 2,
            y: i && i.y || t.length && t.offset().top + t.outerHeight(!0) * .66,
            y2: i && i.y2 || t.length && t.offset().top + t.outerHeight(!0) * .33
        })
    }

    function vn(t) {
        var i = [];
        ss && i.push({
            text: ui.MyAccount,
            callback: function() {
                $app.touch.show({
                    controller: "MyProfile",
                    startCommand: "Edit",
                    startArgument: "myAccountForm"
                })
            }
        });
        os && i.push({
            text: ui.LogoutLink,
            icon: "power",
            callback: function() {
                nh();
                Web.Membership._instance.logout()
            }
        });
        nt({
            anchor: t,
            title: n._toolbarUserName.is(":visible") ? null : be,
            items: i,
            iconPos: "left"
        })
    }

    function yn(n, t, i, u, e, o) {
        var h = t._filter,
            s = !t._id,
            c = !s && t.viewProp("advancedSearchFilter");
        t._filter = u && [i + ":$in$" + u] || [];
        s || t.viewProp("advancedSearchFilter", null);
        la(n, {
            valuesOnly: !0,
            dataView: t,
            field: i,
            afterclose: function() {
                t._filter = h;
                s || t.viewProp("advancedSearchFilter", c);
                o && o()
            },
            callback: function(n, t) {
                e && e(ib(n.mappedId ? r.activePage.data("detail-map")[n.mappedId] : f.find(n.dataViewId), n.field, t))
            }
        })
    }

    function lb(t, i) {
        var r = kt(t),
            u = r.length ? r.attr("data-for") : null,
            f = n.pageInfo(u);
        return i && i.dataView || f.dataView
    }

    function la(t, r) {
        function tt(n, t) {
            $(n).each(function(i) {
                var r = this,
                    u = r.itemClassName;
                return u && u.indexOf("app-btn-apply") != -1 ? (n.splice(0, i), this.callback = t, !1) : r.animate ? (n.splice(0, i), !1) : void 0
            })
        }

        function it(t) {
            n.contextScope(u._id);
            ru(u, e, ru(u, e) == t ? !1 : t);
            oh();
            n.contextScope(null)
        }

        function ut() {
            var n = kt(t),
                i = n.length ? n.find(".app-grid.app-listview") : null;
            u.pageProp("frozenField", p == e ? "_none_" : e);
            u.extension()._reset = !0;
            lo(u);
            u.sync()
        }

        function ft() {
            f.alert("hidden")
        }
        var u = lb(t, r),
            e = r.field || t.attr("data-field-name"),
            w = t.offset(),
            k = no(),
            c = u.findField(e),
            y = u.findFieldUnderAlias(c),
            d = (ru(u, e) || "").toLowerCase(),
            a = [],
            o = [],
            v, g = c.AllowSorting && !r.valuesOnly,
            rt = c.AllowQBE,
            p = ls(u),
            b, h;
        (g && (o = [{
            text: uu(c, "asc"),
            icon: d == "asc" ? "check" : "false",
            context: "asc",
            callback: it
        }, {
            text: uu(c, "desc"),
            icon: d == "desc" ? "check" : "false",
            context: "desc",
            callback: it
        }, ], o.push({
            text: i.Group,
            icon: "group",
            callback: function() {
                dl(u, c.Name)
            }
        })), $(u._fields).each(function() {
            var n = this;
            n.Hidden || n.GroupBy || n.OnDemand || (b = n.Name, p == "_first_" && (p = b))
        }), e == b || r.valuesOnly || (r.hide && o.push({}), o.push({
            text: ri.Freeze,
            icon: e == p ? "check" : null,
            callback: ut
        })), r.hide && o.push({
            text: i.Hide,
            callback: ft
        }), rt && (v = ku({
            scopeField: y,
            samples: r.samples
        }), g && v.splice(0, 0, {}), r.valuesOnly && tt(v, r.callback)), o && (a = a.concat(o)), v && (a = a.concat(v)), a.length) && (h = {
            x: r && r.x || w.left + t.outerWidth() / 2,
            y: r && r.y || w.top + t.outerHeight(!0) * 3 / 4,
            y2: r && r.y2 || w.top
        }, nt({
            items: a,
            anchor: t,
            x: h.x,
            y: h.y,
            scope: u._id,
            afteropen: function(n) {
                uc().length && u._loadListOfValues(null, y.Name, c.Name, function() {
                    var i = uc(),
                        t = i.closest(".ui-listview"),
                        f = i.length && i.data("data-context"),
                        c = !s,
                        a = l.height(),
                        e;
                    f && u._id == f.context.id && y.Name == f.context.field && (c && t.hide(), e = ku(y), r.valuesOnly && tt(e, r.callback), du(t), aa(t, o.concat(e), r), t.listview("refresh"), c && t.show(), !k && h.y + 5 + gv(n) > a && h.y2 && (h.y = h.y2, n.popup("option", "arrow", "t,b,l,r")), n.popup("reposition", k ? {
                        x: l.width() / 2,
                        y: a - 8
                    } : h))
                })
            },
            afterclose: function() {
                r.afterclose && r.afterclose()
            }
        }))
    }

    function aa(n, t, i) {
        var r;
        $(t).each(function() {
            var t = this,
                f, u, s, h, o = t.icon,
                e = o,
                c = ps(o);
            t.text ? (r = !1, h = o == "check", h && (e = "false"), c && (e = "false"), f = $("<li/>").appendTo(n), e || e == !1 || (e = i.defaultIcon), s = e || "false", f.attr("data-icon", s == "ok" ? "check" : s), t.disabled && f.addClass("ui-disabled"), t.itemClassName && f.addClass(t.itemClassName), t.callback ? (u = $("<a/>").appendTo(f).text(t.text).data("data-context", t), t.keepOpen && (u.addClass("app-keep-open"), t.animate || u.addClass("app-btn-icon-transparent")), h && ($(pi).appendTo(u), f.addClass("app-checked")), t.linkClassName && u.addClass(t.linkClassName), t.animate && u.addClass("app-animated app-animation-spin")) : t.href ? u = $("<a/>").appendTo(f).text(t.text).attr("data-href", t.href) : f.text(t.text).addClass("app-list-instruction ui-li-divider ui-bar-a"), t.visible && (f.attr("data-visible", "true"), u.addClass("app-selected")), c && $('<span class="glyphicon"> <\/span>').insertBefore(u.contents()).addClass(o), t.color != null && $('<span class="app-event"> <\/span>').insertBefore(u.contents()).addClass("app-event-color-" + t.color)) : r || (r = !0, $('<li data-role="list-divider"/>').appendTo(n))
        });
        r && n.find("li").last().remove()
    }

    function pn(n) {
        var t, i = $(document.activeElement);
        return i.is(":input") && i.blur(), pv != null && +new Date - pv < 300 && s && (setTimeout(n, 300), t = !0), t
    }

    function nt(t) {
        function yt() {
            return ed({
                x: t && t.x || i && i.length && i.offset().left + i.outerWidth() / 2,
                y: t && t.y || i && i.length && i.offset().top + i.outerHeight(!0) * .8,
                y2: t && t.y2 || i && i.length && i.offset().top + i.outerHeight(!0) * .2
            })
        }

        function ht(i, r) {
            var f = n.contextScope(),
                u = i.callback;
            t.scope && n.contextScope(t.scope);
            u && u(i.context, r);
            n.contextScope(f)
        }
        var d;
        if (!b && !pn(function() {
                nt(t)
            })) {
            if (wv()) {
                setTimeout(function() {
                    nt(t)
                }, 100);
                return
            }
            var c = !s,
                a = l.height(),
                u = $('<div class="app-popup app-popup-listview" data-theme="a"><\/div>'),
                i = $(t.anchor),
                f, p, o, g, rt, ut, ot = t.items || [],
                st = i.is(".app-btn-promo"),
                w, e = no(),
                tt = e ? 0 : t.tolerance != null ? t.tolerance : 5;
            if (!i || (currentPage = $(i).closest(".ui-page"), !currentPage.length || currentPage.is(".ui-page-active"))) {
                dr();
                lt();
                k();
                typeof t.x == "number" && (t.x = Math.ceil(t.x));
                typeof t.y == "number" && (t.y = Math.ceil(t.y));
                t.x == null && i.length && (t.x = Math.ceil(i.offset().left + (t.xOffset ? t.xOffset : i.outerWidth() / 2)));
                t.y == null && i.length && (t.yOffset == "bottom" ? t.y = Math.ceil(i.offset().top + (c ? i.outerHeight() : i.outerHeight() / 2)) : typeof t.yOffset == "number" && (t.y = Math.ceil(i.offset().top + i.outerHeight() * (c ? t.y : 1 - t.y))));
                (t.iconPos == "left" || !0) && u.addClass("app-popup-icon-left");
                t.title && $('<h1 class="ui-title"/>').appendTo($('<div class="ui-header ui-bar-a"><\/div>').appendTo(u)).text(t.title);
                f = $('<div class="ui-panel-inner" tabindex="0"><\/div>').appendTo($('<div class="ui-content"><\/div>').appendTo(u));
                p = $('<ul class="app-listview"/>').appendTo(f);
                aa(p, ot, t);
                p.listview().on("vclick", function(n) {
                    var i = $(n.target),
                        t = i.closest("a");
                    return i.is("[data-href]") ? (ut = i.attr("data-href"), v(t, function() {
                        fu(u)
                    }), !1) : (t.length && !rt && nr(t) && (rt = !0, v(t, function() {
                        o = t.data("data-context");
                        g = t;
                        o.keepOpen ? (ht(o, g), o = null, g = null, rt = !1) : fu(u)
                    })), !1)
                });
                if (b = !0, wt(!1), u.popup({
                        history: !c,
                        arrow: e ? null : t.arrow || i && (c || t.dropDown ? "t,b,l,r" : "b,l,r,t"),
                        overlayTheme: "b",
                        tolerance: tt,
                        transition: rc(),
                        afteropen: function() {
                            ca(null, u);
                            t.afteropen && t.afteropen(u);
                            f.focus();
                            b = !1;
                            wt(!0)
                        },
                        afterclose: function() {
                            b = !1;
                            i && (!(i.data("data-context") || {}).row || i.is(".app-calendar-selected")) && i.removeClass("app-selected");
                            t.afterclose && t.afterclose(u, o);
                            setTimeout(function() {
                                t.autoFocus != !1 && as();
                                o && ht(o, g);
                                o = null;
                                g = null;
                                du(p);
                                cb(p);
                                lh(u);
                                ut && (h.location.href = ut)
                            }, 100)
                        },
                        beforeposition: function() {
                            if (e) f.width("");
                            else if (c) {
                                var n = f.width("").width() + y.width;
                                f.height() < p.outerHeight(!0) && (f.css({
                                    width: n
                                }), u.css({
                                    minWidth: n,
                                    maxWidth: "auto"
                                }))
                            }
                        }
                    }), ks(u), ot.length == 0 && (u.find(".ui-content").hide(), u.find(".ui-header").css({
                        "border-bottom-width": 0,
                        "margin-bottom": ".25em"
                    })), w = e ? {
                        x: l.width() / 2,
                        y: a - 8
                    } : yt(!0), i && i.length) {
                    st || t.highlightAnchor == !1 || i.is(".app-calendar-selected") || i.addClass("app-selected");
                    var ct = i.offset(),
                        pt = r.getScreenHeight(),
                        at = kr(),
                        it = ct.top,
                        ft = pt - (ct.top + i.outerHeight()),
                        vt = e ? a * .6 : Math.max(it - at * 2, ft - at * 2, 50),
                        et = gv(u),
                        bt = u.outerHeight() > a ? vt : Math.max(vt, f.height());
                    e || (!c && it - tt < et ? u.popup("option", "arrow", "r,l,t,b") : w.y2 && (it > ft && et > ft - tt || !c && et < it - tt) && (w.y = w.y2, u.popup("option", "arrow", "b,t,l,r")));
                    f.css({
                        minHeight: e ? Math.min(a * .4, a - 156) : null,
                        maxHeight: e ? Math.min(a * .6, a - 156) : bt
                    })
                }
                uw(u);
                d = p.find('li[data-visible="true"]');
                d.length && f.offset().top + f.outerHeight() < d.offset().top + d.outerHeight() && f.scrollTop(d.offset().top - f.offset().top - (f.outerHeight() - d.outerHeight()) / 2);
                st && n.promo().show();
                e && u.addClass("app-popup-panel");
                u.data("position-options", w).popupopen(w)
            }
        }
    }

    function wn(n) {
        var t = [];
        $(n).closest(".app-bar-buttons").find(".ui-btn:not(:visible):not(.app-btn-more)").each(function() {
            var n = $(this);
            t.push({
                text: n.text(),
                callback: function() {
                    n.trigger("vclick")
                }
            })
        });
        nt({
            anchor: n,
            items: t,
            y: n.offset().top + n.outerHeight() / 4 * 3,
            tolerance: 3
        })
    }

    function va(n) {
        return {
            overlayTheme: "b",
            history: s,
            transition: n || "pop",
            positionTo: "window",
            afteropen: function() {
                $(this).attr("tabindex", 0).focus();
                var n = us;
                n && setTimeout(function() {
                    n()
                }, 200);
                us = null
            },
            afterclose: function() {
                as();
                var n = rr;
                n && setTimeout(function() {
                    n()
                }, 100);
                rr = null
            }
        }
    }

    function ab(n) {
        var t = f.find(n.id),
            r = t.findField(n.field),
            i = n.op;
        t.removeFromFilter(r);
        i != "$clear" && (i.startsWith("$") && (i += "$"), t._filter.push(n.field + ":" + i + (i.match(/\$(true|false)/) ? "" : t.convertFieldValueToString(r, n.value))));
        io(t)
    }

    function vb(t, r) {
        function o(n, i) {
            var r = u.Name + ":" + n;
            n.startsWith("$") && (r += "$");
            r += t.convertFieldValueToString(u, v);
            d != r && h.push({
                text: f.filterDef(k, n).Text + (i ? " " + i : ""),
                context: {
                    id: t._id,
                    field: e,
                    op: n,
                    value: v
                },
                callback: ab
            })
        }

        function it(i) {
            var r = n.contextScope();
            n.contextScope(t._id);
            ru(t, e, ru(t, e) == i ? !1 : i);
            oh();
            n.contextScope(r)
        }

        function rt(i) {
            var r = kt(c),
                u = c.data("data-context");
            u && (rh(t).removeClass("app-selected"), r.length && cl(r), c.addClass("app-selected"), bf(t, c), t.extension().tap(u, "none"), r.length ? hu(t, r) : n.pageInfo(t).echoChanged = !0, i())
        }

        function y() {
            rt(function() {
                yo(c, ut)
            })
        }
        var l = $(r.target).closest(".app-field"),
            c = l.closest("a"),
            u, e, v, s, a, w, b = i.LookupViewAction,
            k, d, h = [],
            g, tt, ut = {
                x: ki(),
                y: ke()
            },
            p;
        if (l.length) {
            if (p = c.data("data-context"), !p) return;
            e = l.attr("class").match(/app\-field\-(\w+)/);
            e && (e = e[1]);
            e && (r.preventDefault(), u = t.findField(e), g = u.AllowQBE, tt = u.AllowSorting, a = t.findFieldUnderAlias(u.Name), a.ItemsDataController || (w = new RegExp("\\b" + e + "\\s*=\\s*\\w+"), $(t._fields).each(function() {
                var n = this;
                if (n.Copy && w.exec(n.Copy)) return a = n, b = String.format(ff.DetailsToolTip, t._allFields[n.AliasIndex].HeaderText), !1
            })), a.ItemsDataController && !a.ItemsTargetController && h.push({
                text: b,
                callback: function() {
                    rt(function() {
                        n.details({
                            field: a
                        })
                    })
                }
            }), tt && (h.length && h.push({}), h.push({
                text: uu(u, "asc"),
                icon: ru(t, e) == "asc" ? "check" : !1,
                context: "asc",
                callback: it
            }, {
                text: uu(u, "desc"),
                icon: ru(t, e) == "desc" ? "check" : !1,
                context: "desc",
                callback: it
            })), g && (h.length && h.push({}), k = at.Filters[u.FilterType].List, v = p.row[u.Index], $(t._filter).each(function() {
                var n = this;
                if (n.startsWith(e + ":")) return d = n, h.push({
                    text: String.format(ot.ClearFilter, u.HeaderText),
                    icon: "delete",
                    context: {
                        id: t._id,
                        field: e,
                        op: "$clear"
                    },
                    callback: ab
                }, {}), !0
            }), v == null ? (o("$isempty"), o("$isnotempty")) : (s = u.text(v), u.FilterType == "Text" && (s = '"' + s + '"'), u.FilterType == "Text" ? (o("=", s), o("<>", s), o("$contains", s), o("$doesnotcontain", s)) : u.FilterType == "Boolean" ? (o("$true"), o("$false")) : (o("=", s), o("<>", s), o("<=", s), o(">=", s), o("<", s), o(">", s)))), h.length ? (h.push({}, {
                text: i.More,
                icon: !1,
                callback: function() {
                    y(l)
                }
            }), nt({
                anchor: l,
                title: u.HeaderText,
                items: h,
                x: ki(r.pageX),
                iconPos: "left"
            })) : y(l))
        } else {
            if ($(r.target).closest(".app-grid-header").length) return;
            if ($(r.target).closest(".app-presenter").length) return;
            c = $(r.target).closest(".ui-btn");
            c.length ? y(c) : r.preventDefault()
        }
        return !1
    }

    function yb(t) {
        var i, r, e, u, o, f;
        if (ai(), i = $(t.target), r = i.data("icon"), i.is(".app-btn-promo")) {
            if (e = i.data("icon-list"), e) return v(i, function() {
                var r = [],
                    o = "ui-icon-" + i.data("icon"),
                    t, f;
                if (i.is(".app-btn-promo-cancel")) return $(".ui-popup-screen.in").trigger("vclick"), !1;
                $(e.icons).each(function() {
                    t = this;
                    t.match(rv) || (f = e.labels[t].split(/\n/), r.push({
                        text: f[0],
                        desc: f[1],
                        icon: t,
                        context: t,
                        callback: function(t) {
                            n.executeInContext(t)
                        }
                    }))
                });
                u = r[r.length - 1];
                u && u.callback ? u.callback(u.context) : (i.addClass("ui-icon-delete app-btn-promo-cancel").removeClass(o), nt({
                    anchor: n.promo(),
                    items: r,
                    iconPos: "left",
                    y: i.offset().top - 1,
                    arrow: "b",
                    afterclose: function() {
                        i.removeClass("ui-icon-delete app-btn-promo-cancel").addClass(o)
                    }
                }))
            }), !1;
            if (gi()) return v(i, hl), !1
        }
        return r == "search" ? (o = n.pageInfo(), f = o && o.dataView, f && (f.extension().useAdvancedSearch() && !fr ? v(i, function() {
            so(f, fr)
        }) : so(f))) : r == "user" ? v(i, function() {
            vn(i)
        }) : r == "phone" && vr ? n.executeInContext(r) : v(i, function() {
            n.executeInContext(r == "check" ? "ok" : r)
        }), !1
    }

    function pb(t, i, u) {
        var o, f;
        dt() || (t = r.path.convertUrlToDataUrl(r.path.makeUrlAbsolute(t, r.path.documentBase)), o = e.find("> div[data-url]").filter(function() {
            return $(this).attr("data-url") == t
        }), u ? (tu(), location.href = t) : o.length ? (f = n.pageInfo(o.attr("id")), f ? (f.navigateInfo = {
            href: t,
            transition: i
        }, n.changePage(f.id)) : r.navigate(t, {
            transition: i
        })) : (dt(!0), $.ajax({
            url: t,
            dataType: "html",
            success: function(r) {
                var u;
                if (dt(!1), u = r.match(/<td\s+id\s*=\s*"PageContent"\s*>([\s\S]+)?<\/td>\s*<td\s+id\s*="PageContent.+"\s*>/i), u || (u = r.match(/<div\s+id\s*=\s*"PageContent".+?>([\s\S]+)?<\/div>\s*<footer /i)), u && !r.match(/\$create\(Web.DataView|\s+data-controller\s*=\s*"/)) {
                    for (var f = u[1], o, h = new Sys.StringBuilder, c = /<script.+?>([\s\S]+?)<\/script>/ig, l, s; l = c.exec(f);) h.append(l[1]);
                    f = f.replace(c, "");
                    o = $("<div><\/div>").appendTo(e).hide().attr("data-href", t);
                    o.html(f).data("scripts", h.toString());
                    s = {
                        pageId: fy(t),
                        selector: o,
                        transition: i
                    };
                    n.pageInfo({
                        id: s.pageId + "_main",
                        text: s.pageId + "_main",
                        url: t,
                        root: !0
                    });
                    n.start(s);
                    o.data("scripts", null).remove()
                } else tu(), location.href = t
            },
            error: function() {
                dt(!1)
            }
        })))
    }

    function bn(n) {
        var t = $(n.target);
        if (t.is(".app-btn-toggle")) return t.addClass("ui-btn-active"), e.focus(), setTimeout(function() {
            function u() {
                i.removeClass("app-text-expanded");
                t.attr("title", eu.Maximize).toggleClass("ui-icon-carat-u ui-icon-carat-d");
                ir()
            }
            t.removeClass("ui-btn-active");
            var i = t.prev(),
                r, n;
            i.is(".app-text-expanded") ? (r = i.closest(".dv-item,.ui-field-contain"), r.length ? (n = w(t), he(n, r.offset().top - (n.offset().top - n.scrollTop()) - n.height() * .33, u)) : u()) : (i.addClass("app-text-expanded"), t.attr("title", eu.Minimize).toggleClass("ui-icon-carat-u ui-icon-carat-d"))
        }, ft), !1
    }

    function kn(t) {
        var y, o, h, f, l, a, p;
        if (!t.isDefaultPrevented()) {
            var c = $(t.target),
                u = c.is("a") ? c : c.closest("a"),
                s = u.attr("href") || (u.attr("data-action-path") ? "#app-action" : ""),
                i;
            if (!b) {
                switch (s) {
                    case "#app-menu":
                        i = "#app-btn-menu";
                        break;
                    case "#app-context":
                        i = "#app-btn-context";
                        break;
                    case "#app-back":
                        i = bi;
                        break;
                    case "#app-details":
                        i = function() {
                            var t = n.pageInfo(),
                                i;
                            t && t.dataView && (i = t.dataView.extension(), i.command(i.commandRow(), "Select"), fs = u.attr("data-field-text"), t.dataView._viewDetails(u.attr("data-field-name")))
                        };
                        break;
                    case "#app-refresh":
                        i = function() {
                            var t = n.pageInfo();
                            t && t.dataView && t.dataView.sync()
                        };
                        break;
                    case "#app-clear-filter":
                        i = function() {
                            var t = n.pageInfo();
                            t && t.dataView && ac(t.dataView, !1)
                        };
                        break;
                    case "#app-filter":
                        i = function() {
                            var t = n.pageInfo();
                            t && t.dataView && ku({
                                mode: "everything"
                            })
                        };
                        break;
                    case "#app-action":
                        if (u.is(".app-btn-disabled")) return u.removeClass("ui-btn-active"), !1;
                        i = function() {
                            var i = u.attr("class").match(/ui-icon-([\w\-]+)/) || [0, "carat-r"],
                                t = u.attr("data-action-path");
                            t == "wizard-next" ? setTimeout(function() {
                                cu("next", {
                                    container: w()
                                })
                            }) : t == "wizard-prev" ? setTimeout(function() {
                                cu("prev", {
                                    container: w()
                                })
                            }) : u.is(".app-btn-more") ? wn(u) : i && (i[1] == "carat-r" ? n.executeInContext(null, u.text(), t) : n.executeInContext(i[1], null, t))
                        };
                        break;
                    default:
                        if (s)
                            if (s.match(/^tel/)) i = function() {
                                ec(s)
                            };
                            else if (!u.attr("target"))
                            if (y = u.attr("data-content-type"), y && y.match(/^image/)) i = function() {
                                if (o = $("#app-popup-image"), !o.length) {
                                    o = $('<div id="app-popup-image" class="app-popup-image" data-role="popup" data-overlay-theme="b" data-theme="b" data-position-to="window"><a href="#app-back" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-icon-delete ui-btn-icon-notext ui-btn-right"/><img class="app-image-preview" style="max-width:10000px"/><div class="app-image-preview-box"><\/div><\/div>').appendTo(e).popup(va("none")).popup("option", "history", !0);
                                    o.find(".app-image-preview").one("load", function(t) {
                                        var i = $(t.target);
                                        setTimeout(function() {
                                            dt(!1);
                                            i.width("").height("");
                                            var e = o.find(".app-image-preview-box"),
                                                s = n.screen(),
                                                r = i.width(),
                                                f = s.width * .9,
                                                t = i.height(),
                                                u = s.height * .9;
                                            r > f ? (t *= f / r, r = f, t > u && (r *= u / t, t = u)) : t > u && (r *= u / t, t = u);
                                            i.hide();
                                            e.css({
                                                background: "",
                                                width: r + "px",
                                                height: t + "px"
                                            }).show();
                                            o.popup("reposition", {
                                                positionTo: "window"
                                            });
                                            e.css({
                                                background: String.format("url({0})", i.attr("src")),
                                                "background-size": String.format("{0}px {1}px", r, t)
                                            })
                                        }, 100)
                                    })
                                }
                                dt(!0);
                                o.find(".app-image-preview-box").hide();
                                o.find(".app-image-preview").attr("src", "").width(100).height("").show().attr("src", s + "&_ticks=" + (new Date).getTime());
                                rr = function() {
                                    lh(o)
                                };
                                o.popupopen()
                            };
                            else if (h = r.path.parseUrl(s), f = h.hash, h.host) i = function() {
                            if (!dt())
                                if (h.host == "maps.apple.com" || h.host == "maps.google.com" || u.is('[rel="external"]')) ec(s);
                                else {
                                    var t = h.pathname.replace(/\//g, "-").substring(1) || h.host.replace(/\W/g, "-"),
                                        f = h.filename.replace(/\W/g, " "),
                                        i = n.page(t),
                                        r = i.find("iframe");
                                    dt(!0);
                                    r.length && r.remove();
                                    r = $('<iframe class="app-page-external"/>').attr("src", s).appendTo(i.find(".app-wrapper").addClass("app-wrapper-external")).load(function() {
                                        d() == t ? dt(!1) : setTimeout(function() {
                                            n.pageInfo(t) || n.pageInfo({
                                                id: t,
                                                external: !0
                                            });
                                            n.changePage(t)
                                        }, 100)
                                    });
                                    bt && i.find(".app-wrapper").css("overflow", "auto")
                                }
                        };
                        else if (!u.closest(".ui-panel-inner").length)
                            if (f)
                                if (u.closest(".app-content-framework").length) {
                                    if (c.data("app-click-test")) return;
                                    c.data("app-click-test", !0);
                                    r.linkBindingEnabled = !1;
                                    t.type = "click";
                                    $(document).trigger(t);
                                    c.data("app-click-test", null);
                                    r.linkBindingEnabled = !0;
                                    t.isDefaultPrevented() || (f == "#" ? i = function() {
                                        he(w(), 0)
                                    } : (l = f && f.length > 1 && r.activePage.find(f + ',a[name="' + f.substring(1) + '"]'), a = w(), i = l && l.length ? function() {
                                        p = l.offset().top - (a.offset().top - a.scrollTop());
                                        v(u, function() {
                                            he(a, p)
                                        })
                                    } : function() {
                                        $(f).is(".ui-page") && n.changePage(f.substring(1))
                                    }));
                                    i && t.preventDefault()
                                } else f != "#" && (i = function() {
                                    r.navigate(f)
                                });
                        else i = function() {
                            pb(s, u.attr("data-transition"), u.attr("rel") == "external")
                        }
                }
                if (i && !n.busy()) return v(u, function() {
                    if (ai(), n.busy(!1), typeof i == "string") {
                        var t = i;
                        i = function() {
                            $(t).trigger("vclick")
                        }
                    }
                    i()
                }), !1
            }
        }
    }

    function dn() {
        var o, u, s, f, t, r;
        for (o in pt.Nodes) {
            pt.nodes = pt.Nodes[o];
            break
        }
        if (pt.nodes) {
            u = $("#app-btn-context").on("vclick", function() {
                if (!n.busy() && !u.data("skipClick")) {
                    var t = gi();
                    return ai(), v(u, function() {
                        t ? fw() : n.showContextMenu({
                            scope: ""
                        })
                    }), !1
                }
            });
            s = parseFloat(u.css("right")) + y.width;
            u.css("right", s);
            pt.footerIterators.unshift(function() {
                if ($(this).is(".level0")) {
                    var t = $("<a/>").text(i.Settings).appendTo($('<li data-icon="gear" data-theme="b"/>').appendTo(this)).on("vclick", function() {
                        wr || k(t);
                        vi = function() {
                            n.contextScope("_contextMenu");
                            ia()
                        };
                        co(!0)
                    });
                    return !0
                }
            });
            f = $("#app-btn-menu");
            f.on("vclick", function() {
                function u(t) {
                    setTimeout(function() {
                        k();
                        up() ? n._menuPanel.panel("toggle") : r.panel("toggle")
                    }, t)
                }
                if (!ht) return (ai(), k(f, !1), ai(), lt(), f.attr("data-action") == "#app-back") ? (setTimeout(function() {
                    k();
                    bi()
                }, ft), !1) : (t ? u(ft) : setTimeout(function() {
                    var d = $('div[data-role="page"]'),
                        o = $(),
                        f, l, a, v, y, p, s, w, c;
                    n._menuPanel = t = $('<div id="app-panel-menu" data-role="panel" data-position="left" data-position-fixed="true" data-display="overlay" data-theme="b" class="app-nav-panel"/>').appendTo(e);
                    f = $('<ul data-role="listview"><li data-role="list-divider" data-theme="a" class="app-info"><span class="appname"/><p class="welcome"/><\/li><\/ul>').appendTo($('<div class="ui-panel-inner" tabindex="0">').appendTo(t));
                    l = t.find('li[data-role="list-divider"]');
                    l.find(".appname").text(n.appName());
                    a = pt.headerIterators;
                    v = pt.footerIterators;
                    a.length == 0 ? l.find(".welcome").hide() : $(a).each(function() {
                        this.call(f) && (y = !0)
                    });
                    y && $('<li data-role="list-divider" data-theme="b"/>').appendTo(f);
                    p = pt.nodes;
                    s = -1,
                        function b(n, t, u, f, h) {
                            var c = "level" + h;
                            u.addClass(c);
                            f.addClass(c);
                            o = o.add(u);
                            $(n).each(function(n) {
                                var t = this,
                                    a = t.url,
                                    v, l, o, c;
                                if (t.children) {
                                    $(t.children).each(function() {
                                        this.selected && (v = !0)
                                    });
                                    var y = u.attr("id"),
                                        p = y + "-" + n,
                                        w = a;
                                    a = "#";
                                    l = $('<div data-role="panel" data-position="left" data-position-fixed="true" data-theme="b" data-display="overlay" class="app-nav-panel"><\/div>').appendTo(e).attr("id", p);
                                    o = $('<ul data-role="listview" data-theme="b"/>').appendTo($('<div class="ui-panel-inner" tabindex="0"><\/div>').appendTo(l));
                                    $("<a>").appendTo($('<li data-icon="arrow-u" data-theme="b"/>').appendTo(o)).attr({
                                        "data-for": y
                                    }).text(i.UpOneLevel);
                                    $('<li data-role="list-divider" data-theme="b"/>').appendTo(o);
                                    c = $('<a rel="external" class="app-btn-icon-transparent"/>').appendTo($("<li>").appendTo(o).attr({
                                        "data-theme": t.selected && !v ? "a" : "b",
                                        "data-icon": "false"
                                    })).attr("href", w).text(t.title);
                                    t.selected && !v && $(pi).appendTo(c);
                                    t.selected && h > s && (r = l, s = h);
                                    b(t.children, t, l, o, h + 1)
                                }
                                t.selected && h > s && (r = u, s = h);
                                c = $('<a rel="external" class="app-btn-icon-transparent"/>').appendTo($("<li>").appendTo(f).attr({
                                    "data-icon": t.children ? "dots" : "false",
                                    "class": t.children ? "menu-item menu-parent" : "menu-item",
                                    "data-theme": t.selected ? "a" : "b"
                                })).attr({
                                    href: a,
                                    title: t.description
                                }).text(t.title);
                                t.children ? c.attr("data-for", p) : t.selected && $(pi).appendTo(c)
                            })
                        }(p, null, t, f, 0);
                    w = o.find("ul").each(function() {
                        var n = $(this),
                            t;
                        $(v).each(function() {
                            this.call(n) && (t || (t = !0, $('<li data-role="list-divider" data-theme="b"/>').insertBefore(n.find("li").last())))
                        })
                    });
                    c = $("#PageFooterBar,footer small");
                    c.length && $('<li data-role="list-divider" class="app-wrap app-copy" data-theme="b"/>').appendTo(f);
                    w.listview().on("vclick", "a", function(n) {
                        var i = $(n.target),
                            t = i.attr("data-for"),
                            f = i.attr("href");
                        return !nr(i) || !f && !t ? !1 : (wr || (k(i), !t && f && tu()), vi || (vi = function() {
                            setTimeout(function() {
                                t ? (r = $("#" + t), u()) : h.location.href = f
                            }, ft)
                        }), co(t != null), !1)
                    }).on("swipe", function() {
                        wr = !0
                    });
                    c.length && f.find(".app-wrap").html(c.html());
                    ro();
                    t = o.panel({
                        animate: lu(),
                        beforeopen: function() {
                            wt(!1)
                        },
                        open: function() {
                            r = $(this);
                            wt(!0)
                        },
                        beforeclose: function() {
                            wt(!1)
                        },
                        close: function() {
                            !wr && vi && (lu() ? vi() : setTimeout(vi, ft));
                            vi = null;
                            wr = !1;
                            wt(!0)
                        }
                    });
                    t.attr("data-draggable", "panel");
                    lu(t);
                    ks(t);
                    r || (r = o.slice(0, 1));
                    setTimeout(function() {
                        u(ft)
                    }, 200)
                }), !1)
            });
            $('[data-app-role="sitemap"]').attr("class", "app-site-map").each(function() {
                function u() {
                    var n = $('<li><a rel="external"/><\/li>').appendTo(t).find("a");
                    $("#app-welcome").length && !r ? n.attr("href", "#app-welcome").text(ui.LoginButton) : oi.loginStatus(n)
                }
                var f = $(this),
                    t = $('<ul data-inset="false" />').appendTo(f),
                    r = oi && oi.loggedIn();
                oi && !r && u(),
                    function e(n, t, i) {
                        $(n).each(function() {
                            var n = this,
                                r = n.url,
                                f = $("<li/>").appendTo(t).addClass("app-depth" + i),
                                u, o;
                            r ? (u = r.match(ts), u && (r = u[2], o = u[1]), $("<a/>").appendTo(f).attr({
                                href: r,
                                target: o,
                                rel: "external"
                            }).text(n.title)) : $("<span><\/span>").appendTo(f).text(n.title);
                            n.children && e(n.children, t, i + 1)
                        })
                    }(pt.nodes, t, 1);
                oi && r && u();
                t.listview().on("vclick", 'a[rel="external"]', function(t) {
                    var i = $(t.target),
                        r = i.attr("href"),
                        u = i.attr("target"),
                        f = r.match(/^#/);
                    return nr(i) ? (f || u || tu(), v(i, function() {
                        f ? n.changePage(r.substring(1)) : (k(), u ? h.open(r, u) : h.location.href = r)
                    }), !1) : !1
                }).filterable({
                    filterPlaceholder: i.FilterSiteMap
                })
            })
        }
    }

    function ar(n) {
        var t = n.originalEvent.clientY != null && n.originalEvent || n.originalEvent.touches[0] || n.originalEvent.changedTouches[0],
            i = w(),
            r = i.length > 0;
        return {
            x: t.clientX,
            y: t.clientY,
            isScrollable: r,
            scrollTop: r ? i.scrollTop() : 0
        }
    }

    function ce() {
        clearTimeout(ba);
        gu && (gu.data("touch-start", null), gu = null)
    }

    function po(n) {
        if (c) {
            var t = c.moved && (c.originalX != c.x || c.originalY != c.y);
            t && (c.swipeLeft = c.originalX > c.x, c.swipeRight = c.originalX < c.x, c.swipeUp = c.originalY > c.y, c.swipeDown = c.originalY < c.y, c.swipeHorizontalDistance = Math.abs(c.originalX - c.x), c.swipeVerticalDistance = Math.abs(c.originalY - c.y));
            n.type != "touchcancel" && (n.type != "mousemove" || c.moved) || (p._keepTap = !0);
            $(document).trigger($.Event(t ? "dragend.app" : "dragcancel.app", {
                drag: c
            }));
            t || n.type == "taphold" ? (n.preventDefault(), n.stopPropagation(), p.dragged(!0)) : c.dir == "all" && n.type == "touchend" && (yi = {
                x: c.x,
                y: c.y
            }, $(document.elementFromPoint(c.x, c.y)).trigger("vclick"));
            c.target = null;
            c.data = null;
            c = null
        }
        et && (c = et, et = null, po(n));
        $(document).off("pointermove mousemove touchmove", ga).off("pointerup pointercancel mouseup touchend touchcancel", po)
    }

    function ga(n, t) {
        var i;
        if (et) {
            var i = ar(n),
                u = Math.abs(i.x - et.x),
                r = Math.abs(i.y - et.y),
                f = et.dir == "horizontal";
            if ((u < 1 || r < 1) && (c && (c.moved = !1), !t)) return;
            et.dir == "all" || f && u > (et.mouse ? 3 : et.pointer ? 2 : 1) && r < (et.pointer && et.touch ? 50 : 9) ? (ce(), c = et, (n.type == "touchmove" || n.type == "pointermove") && n.preventDefault(), et = null, wt(!1)) : (f && (u || r) && ce(), (!f || r) && po(n))
        }
        c && (n.preventDefault(), dr(), i = ar(n), c.moved || (c.moved = !0, c.originalX = c.x, c.originalY = c.y), (c.x != i.x || c.y != i.y) && (c.lastX = c.x, c.lastY = c.y, c.x = i.x, c.y = i.y, c.dropTarget = n.type.match(/^touch|pointer/) ? document.elementFromPoint(i.x, i.y) : n.target, $(document).trigger($.Event("dragmove.app", {
            drag: c
        }))))
    }

    function wt(n) {
        s || e.css("pointer-events", n ? "" : "none")
    }

    function wb() {
        nv || (nv = !0, ws(), lt(), vt(), $(document).trigger("resizing.app"), n._toolbarButtons.hide(), n._toolbarUserName.text("").removeData("positioned"))
    }

    function nf(t) {
        var i, u;
        b || (ht = !1, t ? (nv = !1, fc(), $(".ui-panel-dismiss").height(r.getScreenHeight()), $(".ui-page").addClass("app-stale"), di(), it(!1, null, function() {
            vt();
            ci();
            yu();
            ir();
            hr();
            se(null, !0);
            tr()
        })) : tr(), lt(), or(), i = w(), ay(i), t ? wc(i) : setTimeout(function() {
            wc(i)
        }), t && r.activePage.find(".app-echo-toolbar").each(function() {
            echo = $(this).parent();
            echo.is(":visible") && (pageId = echo.attr("data-for"), pageInfo = n.pageInfo(pageId), pageInfo.echoId && !pageInfo.dataView._busy() && yl(pageInfo.dataView, echo))
        }), clearTimeout(cv), cv = setTimeout(function() {
            if (!b) {
                li();
                n.refreshMenuStrip();
                var t = d();
                $(n._pages).each(function() {
                    var i = this,
                        n;
                    i.echoId && (n = $("#" + i.echoId), n.length && n.closest(".ui-page").attr("id") != t && (i.echoChanged = !0, n.find(".app-echo-controls").addClass("app-stale")))
                });
                yc(w())
            }
        }, 1e3), t && (u = $(".ui-popup"), u.is(".app-popup-message,.app-popup-listview") ? fu(u) : u.popup("reposition", {
            positionTo: "window"
        }), ht = !1, $(document).trigger("resized.app")))
    }

    function lt() {
        ct && ct[0].style.display != "none" && ct.hide();
        af && (clearTimeout(af), af = null)
    }

    function ah(n, t, i, r, u) {
        var f, v;
        if (!s || u) {
            f = i.split(/\n/g);
            ct || (ct = $('<div class="app-tooltip"><\/div>').appendTo(document.body).hide());
            ct.text(i);
            f && (i.match(/\t/) ? (v = $("<table/>").appendTo(ct.empty()), $(f).each(function() {
                var n = this.split(/\t/g),
                    t = $("<tr/>").appendTo(v);
                $(n).each(function() {
                    var n = this,
                        i = $("<td/>").appendTo(t);
                    n.match(/\"/) ? i.html(n.replace(/"(.+?)"/g, "<b>$1<\/b>")) : i.text(n)
                })
            })) : (ct.empty().removeClass("app-tooltip-message"), $(f).each(function(n) {
                var t = this;
                n && $("<br/>").appendTo(ct);
                t.match(/\"/) && (t = t.replace(/"(.+?)"/g, "<b>$1<\/b>"));
                $("<span/>").appendTo(ct).html(t)
            })));
            ct.css({
                left: 0,
                top: 0
            }).show();
            var o = l.scrollLeft(),
                y = l.scrollTop(),
                h = ct.outerWidth(),
                c = ct.outerHeight(),
                p = l.width(),
                e, a = r && r[0].className;
            a && typeof a == "string" && a.match(/\bapp-btn-float\b/) ? (e = r.offset(), n = r.css("right") != "auto" ? e.left - h - 4 : e.left + r.outerWidth() + 12, t = e.top + r.outerHeight() / 2 - c / 2 + 1) : (o + n + h >= o + p && (n = o + p - h - 16), y + t + c >= y + l.height() && (t = t - 24 - c));
            ct.css({
                left: n - 5,
                top: t
            });
            u && ct.addClass("app-tooltip-message")
        }
    }

    function bb() {
        $(".app-data-input").removeData("keepFocus").trigger("blur")
    }

    function gn(i) {
        var r, y, c, k, o, u, p, f, b, a, v, d;
        if (!t.valid()) return !1;
        if (b = $(".app-data-input"), f = i.closest("[data-input]"), b.length)
            if (s || !0) f.data("hitTest", !0), b.closest("[data-input]").data("hitTest") || (b = null), f.removeData("hitTest"), bb();
            else return;
        if (f.find("[data-input-hotspot]").length && !i.is("[data-input-hotspot]")) return !1;
        if (s && (clearTimeout(h.textInputStubTimeout), $(".app-text-input-stub").length || $('<div class="app-text-input-stub"><\/div>').height(l.height() * .75).appendTo(w())), u = $.Event("getvalue.input.app"), f.trigger(u), v = u.inputRows, r = v ? $('<textarea class="app-data-input" rows="' + (parseInt(v) + 1) + '"/>') : $('<input class="app-data-input"/>').attr("type", u.inputIsPassword ? "password" : "text"), s || v || r.attr("spellcheck", "true"), k = t.createContainer(f.addClass("app-has-focus")), r.appendTo(k), v && k.addClass("app-has-textarea"), c = u.inputAltValue || u.inputValue || "", u.inputMaxLength && r.attr("maxlength", u.inputMaxLength), r.val(c).data("original", c), u.placeholder && (y = $('<span class="app-data-input-placeholder"/>').insertAfter(r).text(u.placeholder).css("display", c ? "none" : ""), y.css({
                "margin-top": -y.height() / 2
            }), r.data("placeholder", y)), u.change && (r.data({
                change: u.change,
                last: c
            }), u.change = null), o = f.attr("data-type"), !o) {
            switch (u.inputDataType) {
                case "DateTime":
                    o = "datetime";
                    break;
                case "Date":
                    o = "date"
            }
            f.attr("data-type", o)
        }
        switch (o) {
            case "datetime":
                break;
            default:
                o && s && r.attr("type", o).val(u.inputValueRaw)
        }
        return (p = $.Event("beforefocus.input.app", {
            inputElement: r
        }), f.trigger(p), p.inputElement = null, p.isDefaultPrevented()) ? !1 : (vt(), r.focus()[0].setSelectionRange(s ? c.length : 0, c.length), s && (a = w(), d = a.parent().find(".app-bar-footer"), d.length && n.bar("hide", d), clearTimeout(h.textInputScrollTimeout), h.textInputScrollTimeout = setTimeout(function() {
            var u = r.offset(),
                s = r.outerHeight(),
                t, i, h = e.scrollTop(),
                f = a.height(),
                o = a.offset();
            bt && (f *= .5);
            u.top < o.top || u.top + s > o.top + h + f ? (bt && (t = r[0], i = r.val().length, i || r.val(" "), t.selectionStart = 0, t.selectionEnd = 0), n.animatedScroll(a, u.top - o.top + a.scrollTop() - h - f / 2 + s / 2, function() {
                bt && (i || r.val(""), t.selectionStart = i, t.selectionEnd = i);
                li()
            })) : li()
        }, 500)), !0)
    }
    var vh = "app-transition",
        tf = "ui-btn-icon-right app-checked",
        rf = navigator.userAgent,
        tv = navigator.platform,
        bt = /iPhone|iPad|iPod/.test(tv) && rf.indexOf("AppleWebKit") > -1,
        wo = bt ? parseInt(navigator.userAgent.match(/\(i.*;.*CPU.*OS (\d+)_\d+/)[1]) : null,
        vr = /Android/i.test(rf),
        ntt = /chrom(e|ium)/i.test(rf),
        bo = !!rf.match(/Trident\/7\./),
        ttt = /safari/i.test(rf),
        s, ko = 96,
        go = 100,
        itt = tv.match(/Mac/i) != null,
        kb = Sys.CultureInfo.CurrentCulture,
        yr = kb.dateTimeFormat,
        db = /^s*(\w+)\s*\|s*(.+?)\s*(\|\s*(.+)\s*)?$/,
        gb = /(<(\/*(a|span).*?>)|(&nbsp;)|onclick=\".+?\")/g,
        nk = /(<(\/*(b).*?>))/g,
        tk = /\" ([\.;])/g,
        ik = /phone/i,
        rk = /email/i,
        uk = /\burl/i,
        fk = /^\s*(\w+)(\s+(\w+)\s*)?$/,
        iv = /\$(true|false|in|notin|tomorrow|today|yesterday|next|this|last|year|past|future|quarter|month|isempty|isnotempty)/,
        ns = /\s*(\w+)(\s+(asc|ascending|desc|descending))?\s*(,|$)/gi,
        rv = /(delete|minus|trash|refresh)/,
        uv = /^(Byte|Currency|Decimal|Double|Int16|Int22|Int64|Single|SByte|UInt16|UInt32|UInt64)$/,
        ts = /^(_\w+):(.+)$/,
        oi, yh = "",
        pt, gt = Web.DataViewResources,
        fv = gt.Views,
        ev = gt.Menu,
        at = gt.Data,
        pr = gt.Pager,
        is = gt.ModalPopup,
        ot = gt.HeaderFilter,
        i = gt.Mobile,
        ri = gt.Grid,
        eu = gt.Form,
        ek = gt.Actions,
        uf = gt.Validator,
        ff = gt.Lookup,
        ui = Web.MembershipResources && Web.MembershipResources.Bar,
        ou = ek.Scopes.Grid,
        ok = gt.InfoBar,
        ef = at.BooleanDefaultItems[0][1],
        of = at.BooleanDefaultItems[1][1],
        sk = at.NullValueInForms,
        rs, ii, ov, sv, us, rr, sf, vi, wr, hf, hv, le, ph, cv, ae, lv, ht, ur, cf, b, av = {},
        rt, ni, hk, vv = {},
        ck = 500,
        lk = 500,
        br, lf, ak = "http://www.w3.org/2000/svg",
        ct, af, vk = 500,
        yk, pk = 0,
        yv, wh, bh, kh, fi, dh, vf, fs, ve, ye, gh, pe, o, ut, f = $app,
        t, h = window,
        es = history,
        e, l = $(h),
        su = l.width(),
        yf = l.height(),
        r = $.mobile,
        ft = 34,
        wk = 450,
        nc = 1e3,
        pf, y, fr, os, ss, we, be, yi, pv, p, c, et, tt = "glyphicon-menu-left",
        pi = '<svg class="app-icon-check" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-62 64 14 14" enable-background="new -62 64 14 14" xml:space="preserve"><polygon class="app-icon-themed" points="-48,67 -49.8,65.2 -57,72.4 -60.2,69.2 -62,71 -58.7,74.2 -58.8,74.2 -57,76 -57,76 -56.9,76 -55.2,74.2 -55.2,74.2 "/><\/svg>',
        ya, pa, wa, n, gu, ba, ka, da, nv;
    $.fn.popupopen = function(n) {
        return e.focus(), this.popup("open", n), this
    };
    typeof Web == "undefined" && (Web = {
        DataView: {}
    });
    Web.DataView.MobileBase = function() {
        Web.DataView.MobileBase.initializeBase(this)
    };
    Web.DataView.MobileBase.prototype = {
        initialize: function() {},
        show: function() {},
        hide: function() {},
        systemFilter: function() {
            return null
        },
        reset: function() {},
        notify: function() {},
        wait: function() {},
        dataView: function(n) {
            if (n == null) return this._dataView;
            this._dataView = n
        },
        inserting: function() {
            return this.dataView().inserting()
        },
        editing: function() {
            return this.dataView().editing()
        },
        content: function() {
            var t = this._dataView;
            return n.content(t._id)
        },
        commandRow: function(n) {
            if (arguments.length == 0) return this._commandRow;
            if (n) {
                var t = this._commandRow = n.slice(0);
                return this.dataView()._rows = [t.slice(0)], t
            }
            return n
        },
        command: function(n, t, i, r, u) {
            var e = this,
                f = e.dataView(),
                o = 0,
                s = f._keyFields,
                h;
            n && !n.length && (s.length && s[0].Name in n ? (h = n, n = [], $(f._allFields).each(function() {
                n.push(h[this.Name])
            })) : (n = null, o = null));
            e.commandRow(n);
            f.executeRowCommand(o, t, i, r, u)
        },
        action: function(n, t, i, r, u, f) {
            this.commandRow(n);
            var e = this.dataView().a;
            arguments.length == 1 ? (a = arguments[0], this.executeRowCommand(0, a.CommandName, a.CommandArgument, a.CausesValidation, a.Path)) : e.executeAction(0, t, i, r, u, f)
        },
        itemMap: function(n) {
            return sn(this.dataView(), n)
        },
        stateChanged: function() {
            it()
        },
        lookupInfo: function(n) {
            var t = this.dataView();
            if (arguments.length) t._lookupInfo = n;
            else return t._lookupInfo
        },
        viewDescription: function() {
            var t = this.dataView(),
                i = t._showDescription != !1,
                n = i && t.get_view().HeaderText;
            return n = i ? t._formatViewText(fv.DefaultDescriptions[n], !0, n) : "", n ? n.replace(/\n/g, "<p/>") : null
        },
        executeInContext: function(n, t, i, r) {
            var e = this.lookupInfo(),
                u = [],
                f;
            return i && this.lookupInfo(null), this.context(u), i && this.lookupInfo(e), $(u).each(function() {
                var i = this,
                    u = i.command;
                if (u && u == n && (t == null || i.argument == t)) return f = i, r || hi(i), !1
            }), f
        },
        tagged: function(n) {
            return this.dataView().get_isTagged(n)
        },
        filterStatus: function(n, t) {
            var u = this,
                i = u.dataView(),
                r, f = ne(i),
                e = i ? i.get_filter() : null,
                o = f.length > 0,
                s = i && e.length > 0 && !i.filterIsExternal();
            return (s || o) && u.options().filterDetails ? (r = new Sys.StringBuilder, o && !t && i._renderFilterDetails(r, f, !1), s && i._renderFilterDetails(r, e, !n), r.toString().replace(gb, "").replace(nk, '"').replace(tk, '"$1')) : null
        },
        aggregates: function() {
            var n = this._dataView._aggregates;
            return n && n.length ? n : null
        },
        aggregateLabels: function() {
            var n = [];
            return $(this._dataView._fields).each(function() {
                var t = this;
                n.push(t.Aggregate == 0 ? null : String.format(Web.DataViewResources.Grid.Aggregates[Web.DataViewAggregates[t.Aggregate]].FmtStr, "").trim())
            }), n
        },
        _disposeSession: function() {
            var r = this.dataView(),
                t = r._pageSession,
                n, i;
            if (t) {
                for (i in t) n = t[i], n && typeof n == "object" && (n.length == 1 && n[0] && n[0].tagName == "STYLE" && n.remove(), delete t[i]);
                delete r._pageSession
            }
        },
        focus: function(n, i) {
            var f = this,
                u = r.activePage.find('[data-input-container="' + f._dataView._id + '"]');
            u.length && t.focus({
                container: u,
                fieldName: n,
                message: i
            })
        }
    };
    Web.DataView.Extensions = {};
    Web.DataView.prototype.pageProp = function(n, t) {
        if (n = this._id + "_" + n, arguments.length == 1) return wu(n);
        wu(n, t)
    };
    Web.DataView.prototype.viewProp = function(n, t) {
        if (n = (this._viewId || "grid1") + "_" + n, arguments.length == 1) return this.pageProp(n);
        this.pageProp(n, t)
    };
    Web.DataView.prototype.session = function(n, t, i) {
        var u = this,
            r = u._pageSession;
        if (r || (r = u._pageSession = {}), n = (i || this._viewId || "grid1") + "_" + n, arguments.length == 1) return r[n];
        t ? r[n] = t : delete r[n]
    };
    Web.DataView.prototype.mobileUpdated = function() {
        var t = this,
            o = t.pageProp("viewId"),
            u, e, i;
        t._startPage || t.get_useCase() || t.get_lastCommandName() || (o && (t._viewId = o), u = t.viewProp("sortExpression"), e = t.viewProp("groupExpression"), i = t.viewProp("filter"), u && (t._sortExpression = u), e && (t._groupExpression = e), i && i.length && (t._filter = (t._filter || []).concat(i)));
        var h = $(t._element),
            r = vw(h, document.title),
            c = f.eval(h.attr("data-page-header")),
            l = {
                id: t.get_id(),
                text: c || r.text,
                headerText: c || r.text,
                dataView: t,
                activator: r
            };
        t._pageSize = rf.match(/iPad;.*CPU.*OS \d_\d/i) || !s ? 30 : 30;
        n.pageInfo(l);
        t._hidden || t._filterSource || n._appLoaded || $('<a class="app-action-navigate"/>').attr("href", "#" + l.id).appendTo($("<li>").appendTo(n.pageMenu())).text(r.text);
        $(t._element).remove();
        t._element = null
    };
    Web.DataView.prototype.gridSettings = function(n) {
        var t = this,
            i, r;
        if (arguments.length) {
            if (n) {
                for (i in n.width);
                for (r in n.hidden);
                n.sequence.length || i || r || (n = null)
            }
            t.viewProp("gridSettings", n)
        } else return n = t.viewProp("gridSettings"), n || (n = {
            sequence: [],
            width: {},
            hidden: {}
        }), n
    };
    Web.DataView.prototype.gridChanged = function() {
        var n = this;
        lo(n);
        gl(n);
        ci();
        yu();
        se();
        or();
        tr()
    };
    Web.DataView.Extensions.Grid = function(n) {
        return new Web.DataView.MobileGrid(n)
    };
    Web.DataView.Extensions.DataSheet = function(n) {
        return new Web.DataView.MobileGrid(n)
    };
    Web.DataView.MobileGrid = function(n) {
        Web.DataView.MobileGrid.initializeBase(this);
        this.dataView(n)
    };
    Web.DataView.MobileGrid.prototype = {
        initialize: function() {
            var n = this,
                t = n.dataView().pageProp("viewStyle");
            t || (n.tagged("view-style-map") && !n.tagged("disable-view-style-map") ? t = "Map" : n.tagged("view-style-cards") && !n.tagged("disable-view-style-cards") ? t = "Cards" : n.tagged("view-style-list") && !n.tagged("disable-view-style-list") ? t = "List" : n.tagged("view-style-grid") && !n.tagged("disable-view-style-grid") ? t = "Grid" : n.tagged("view-style-charts") && !n.tagged("disable-view-style-charts") ? t = "Charts" : n.tagged("view-style-calendar") && !n.tagged("disable-view-style-calendar") ? t = "calendar" : (t = l.width() > 480 ? "Grid" : "List", $(n._dataView._fields).each(function() {
                if (this.OnDemand && this.OnDemandStyle != 1) return t = "Cards", !1
            }), $(n._dataView._fields).each(function() {
                if (this.Rows > 1) return t = "List", !1
            })));
            n._viewStyle = t
        },
        options: function() {
            var n = this.dataView();
            return {
                quickFind: n.get_isGrid() && n.get_showQuickFind(),
                filterDetails: !0
            }
        },
        viewStyle: function(t) {
            var i = this,
                u = i.dataView(),
                f = i._viewStyle,
                e, o;
            if (arguments.length == 0) return f;
            e = r.activePage;
            o = f;
            i._viewStyle = t;
            e && (dc(), u.pageProp("viewStyle", t), vt(), i._instructed = !1, n.presenter("supports", t) || (i._reset = !0), t == "Grid" && hg(u), u.sync());
            it()
        },
        tap: function(t, i) {
            var u;
            if (t) {
                var r = this.dataView(),
                    e = n.pageInfo(r),
                    f = t.row || t;
                r._busy() || n.busy() || (r._hasKey() ? (this.command(f, "Select"), t.pageIndex != null && this.currentPageIndex(t.pageIndex), i && rh(r).each(function() {
                    var n = $(this),
                        t = n.data("data-context");
                    if (t && r.rowIsSelected(t.row)) return n.addClass("app-selected"), !1
                }), i && i != "select" || (this.lookupInfo() ? this.executeInContext("Select") : (u = [], n.navContext(u), $(u).each(function() {
                    var n = this;
                    if (n.text && n.icon != "dots" && !n.system && !n.isStatic) return hi(n), !1
                })))) : n.infoView(r, !0, f), it())
            }
        },
        clearSelection: function(n) {
            var r = this,
                t = r.dataView(),
                u = t._selectedKey,
                i;
            if (u && u.length) {
                if (t.multiSelect() && t._selectedKeyList.length) {
                    rl(t);
                    return
                }
                i = $.Event("clear.dataview.app");
                t._clearSelectedKey();
                t._forgetSelectedRow(!0);
                r._commandRow = null;
                r.currentPageIndex(null);
                i = $.Event("clear.dataview.app");
                i.dataView = t;
                $(document).trigger(i);
                n && ($("#" + t._id + "_echo").find('ul[data-role="listview"] a.app-selected').removeClass("app-selected"), $("#" + t._id).find('.app-wrapper > ul[data-role="listview"] a.app-selected').removeClass("app-selected"), hu(t));
                it()
            }
        },
        quickFind: function(n) {
            var t = this.dataView();
            if (n != null) t.viewProp("quickFind", n), t._executeQuickFind(n), rp(t);
            else return t.viewProp("quickFind") || ""
        },
        useAdvancedSearch: function(n) {
            var i = this.dataView(),
                t;
            if (arguments.length) i.viewProp("useAdvancedSearch", n);
            else return t = i.viewProp("useAdvancedSearch"), t == null && (t = i.get_searchOnStart()), t == !0
        },
        dispose: function() {
            var i = this,
                u = i.dataView(),
                r = u._lookupInfo,
                t = i.content();
            n.presenter("dispose", {
                id: u._id,
                container: t
            });
            ee(t);
            t.prev().find("h3, .app-bar-controls").off();
            t.find(".app-map").each(function() {
                var t = $(this),
                    n = t.data("data-map");
                n && (sb(n), n.map = null, t.data("data-map", null))
            });
            r && (r.field = null, r.callback = null);
            i._disposeSession()
        },
        refresh: function() {
            function vi(n) {
                n ? (sr = h.css("display") != "block", sr && (h.css({
                    display: "block",
                    "z-index": -10
                }), di(h)), f.isModal && dv(h)) : sr && (bs(h), h.css({
                    display: "",
                    "z-index": ""
                }))
            }

            function uu() {
                if (!wu) {
                    var n = t.get_selectedKey();
                    t._selectedKeyList = n.length ? [n.join(";")] : [];
                    iu(t)
                }
            }

            function fu(n) {
                var i = $('<li data-icon="false" class="dv-item"/>').appendTo(n),
                    r = $('<a class="ui-btn app-divider app-calculated"/>').appendTo(i);
                return oo(t, lt, null, r, u.aggregateLabels()), i
            }

            function kr() {
                var y, i, g, c;
                if (vi(!0), n.bar(w ? "show" : "hide", gt), lt && (w && pt ? s[0].scrollHeight - parseInt(pt.css("margin-bottom")) < s.height() ? n.bar("hide", nt) : (pt.prev().addClass("ui-last-child" + (pt.is(".app-has-promo") ? " app-has-promo" : "")), pt.remove(), n.bar("show", nt)) : (n.bar(lt ? "show" : "hide", nt), y = !0)), w && (oe(t), hw(t, gt), yu(e)), y || di(h), k || !u._synced) {
                    if (op(t, h, w), i = t.get_master(), i && (i.inserting() ? ti(f.text, st) : (g = i.extension().commandRow(), c = i._fields[0], c = i._allFields[c.AliasIndex], ti([c.format(g[c.Index]), f.text], st))), t._lookupInfo && (ti(f.headerText, st), ri != 0 && (h.attr("data-page-header", !1), ti(!1, st))), p.length) {
                        var r = s.offset().top,
                            l = s.height(),
                            v, o = Math.ceil(p.offset().top),
                            it = p.outerHeight(!0);

                        function rt(n, t) {
                            var i = n.find("p");
                            t += parseInt(n.css("height"));
                            n.css("height", t);
                            i.css("margin-top", (t - i.outerHeight()) / 2)
                        }
                        et = s.scrollTop();
                        tt && tt > 0 && tt + it < l ? (o - r < tt ? rt(e.find(".dv-load-at-top"), tt - (et + o - r)) : (v = s[0].scrollHeight, v - (et + o - r - tt) < l && rt(e.find(".dv-load-at-bottom"), l - (v - (et + o - r - tt)))), si(s, et + o - r - tt)) : si(s, et + o - r - (l - it) / 2);
                        k && t.raiseSelected()
                    } else if (u._synced || !t.get_selectedKey().length || t._lookupInfo) u.clearSelection();
                    else {
                        function ut() {
                            d() != f.id || b ? setTimeout(ut, 50) : t.sync()
                        }
                        ut()
                    }
                    u._synced = !0;
                    p && p.length && t.multiSelect() && cr(!0, ul(e), dp, p.find(".app-btn-check"));
                    vt()
                } else p && p.length && !k && !a && ai != null && si(s, s.scrollTop() + p.offset().top - s.offset().top - ai);
                hr(h);
                vi(!1);
                dt(!1);
                s.focus()
            }
            var u = this,
                g = u.pageIndex(),
                lu = u.pageCount(),
                t = u.dataView(),
                ei = t._totalRowCount,
                f = n.pageInfo(t),
                vu = t._fields,
                pu = t._allFields,
                ht = u.content(),
                h = $("#" + f.id),
                yt = u.visibleDataRows(g),
                e = ht.find('ul[data-role="listview"]').show(),
                dr, gt = h.find(".app-bar-hscrollbar"),
                nt = h.find(".app-bar-aggregates"),
                pt, lt = u.aggregates(),
                ni = this.pageSize(),
                k = u._reset,
                wu = t._keepKeyList,
                gr = g > 0,
                nu = g < lu - 1,
                oi, fr, tu = t.get_showRowNumber() == !0,
                y = u.viewStyle(),
                w, s = ht,
                et = s.scrollTop(),
                hi, ai, tt, st = s.find(".app-page-header"),
                er, or, sr, bu, ru, ii = ht.prevAll(".app-bar-actions"),
                yr, rt, ou, kt, ct, bi, ki, su, fi, hu, gi, rr, ur, cu;
            if (u.echoCallback) {
                u.echoCallback();
                return
            }
            if (!yt) {
                k && du(e);
                t.goToPage(g, !0);
                return
            }
            if (f.echoId && !f.echoInitialized) {
                lr(f.echoId);
                f.displayed || (f.initialized = !1);
                return
            }
            if (t._keepKeyList = !1, k && (f.echoChanged = !0, u.currentPageIndex(g)), !b && f.id != d() && f.id != yv && !t._lookupInfo) {
                uu();
                to(f);
                li();
                t._keepKeyList = !0;
                return
            }
            if (f.initialized = !0, f.displayed = !0, u._autoSelect && f.requiresInitCallback) {
                n.promo(!1);
                f.initCallback = function() {
                    var i = u._autoSelect;
                    u._autoSelect = null;
                    n.busy(!1);
                    wh = !0;
                    u.tap(i.row, i.action);
                    wh = !1;
                    tc(t, t.get_selectedKey())
                };
                f.requiresInitCallback = !1;
                f.loading = !0;
                $('<h1 class="app-page-loading"/>').appendTo(ht).text(ot.Loading);
                n.navigate(f.id);
                return
            }
            if (f.loading && (f.loading = !1, h.find(".app-page-loading").remove()), p = e.find("a.app-selected").first(), p.length && (ai = p.offset().top - s.offset().top), k && (tt = ai, uu()), t._requiresContextRefresh && (t._requiresContextRefresh = !1, it()), u._checkedViews || (u._checkedViews = !0, !t._lookupInfo && t.get_showActionBar() ? (ii = cg(t, ht), t._id == d() && it()) : (er = [], rb(er, !1, f) > 1 && (or = [], $(er).each(function() {
                    var n = this;
                    or.push({
                        text: n.text,
                        active: n.icon == "checked",
                        callback: n.callback
                    })
                }), n.tabs("create", {
                    tabs: or,
                    className: "ui-header-fixed app-tabs-views",
                    id: t._id + "_view-tabs",
                    scope: "page",
                    placeholder: ht
                }), ti(!1, st), bu = !0))), ii.length && st.addClass("app-has-action-bar"), n.presenter("supports", {
                    name: y,
                    id: t._id
                })) {
                function ar() {
                    return t._rows.forEach(function(n) {
                        if (t.rowIsSelected(n)) return u.commandRow() ? u.commandRow(n) : (t._forgetSelectedRow(!0), u.command(n, "Select")), !1
                    }), eh(ii, t, f), vc(s, u), n.bar("hide", gt), n.bar("hide", nt), n.presenter("show", {
                        name: y,
                        id: t._id,
                        container: s,
                        reset: k
                    })
                }
                f.requiresInitCallback ? (f.initCallback = function() {
                    t.get_searchOnStart() ? fh(t) : ar()
                }, f.requiresInitCallback = !1, n.navigate(f.id)) : f.requiresReturnCallback ? (f.returnCallback = function() {
                    ar()
                }, f.requiresReturnCallback = !1) : ar();
                u._reset = !1;
                to(f);
                return
            }
            if (y.match(/Grid|Cards|List|Map/) || (y = u._viewStyle = oy() ? "Grid" : "List", t.pageProp("viewStyle", y)), t.groupBy(), w = y == "Grid", fr = u.itemMap(y == "List"), bv(t, fr.thumb != null), py(s, u, y == "Map"), y == "Map") {
                if (n.bar("hide", gt), n.bar("hide", nt), ht.find('ul[data-role="listview"]').hide(), uy(h), !u.tagged("supports-view-style-map")) {
                    u.viewStyle(l.width() > 480 ? "Grid" : "List");
                    it();
                    return
                }
                if (sa(), k) {
                    u._reset = !1;
                    u._mapPageWindow = null;
                    yr = !1;
                    $(yt).each(function() {
                        if (t.rowIsSelected(this)) return yr = !0, u.tap(this, "none"), !1
                    });
                    yr ? t.raiseSelected() : u.clearSelection();
                    u.refresh();
                    return
                }
                ti(!0);
                vi(!0);
                vc(s, u);
                eh(ii, t, f);
                rt = s.find("> .app-map");
                rt.length || (rt = $('<div class="app-map"><\/div>').appendTo(s).attr("data-map-for", t._id).hide());
                n.registerAPI("Map") || (s.find(".app-presenter-instruction").hide(), $('<div class="app-api-error">Google MAP API Key is required. Specify a valid key in <i>Settings | Features | Touch UI<\/i> section of your project properties.<br/><br/><a href="https://developers.google.com/maps/documentation/javascript/get-api-key" rel="external">Get The Key Now!<\/a><\/div>').appendTo(rt.empty().show()));
                hr(h);
                vi(!1);

                function ku(i) {
                    function f() {
                        var c = s != n.asyncJob(),
                            o, l, e, h;
                        if (r.length && !c) o = r[0], l = new Date, i.geocoder.geocode({
                            address: o.address
                        }, function(n, e) {
                            var s, h, c, a;
                            if (e == google.maps.GeocoderStatus.OK) s = n[0].geometry.location, h = hb(u, rt, s, o.title, o.row), t.rowIsSelected(o.row) && hh(i, h), ob(o.address, s.lat(), s.lng()), oa(i), ch(h, 750, google.maps.Animation.DROP);
                            else if (e == google.maps.GeocoderStatus.ZERO_RESULTS) ob(o.address);
                            else {
                                if (e == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                                    setTimeout(f, 1e3);
                                    return
                                }
                                alert(e + ": " + o.address)
                            }
                            r.splice(0, 1);
                            c = new Date - l;
                            a = 675;
                            c < a ? setTimeout(function() {
                                f()
                            }, a - c) : f()
                        });
                        else {
                            if (!c && r.length == 0 && i.markers.length < lk && (e = u._mapPageWindow, e || (e = u._mapPageWindow = {
                                    top: g,
                                    bottom: g,
                                    dir: "up"
                                }), e.dir == "up" ? e.bottom < u.pageCount() - 1 ? (e.bottom++, e.dir = "down") : e.top-- : e.top > 0 ? (e.top--, e.dir = "up") : e.bottom++, h = e.dir == "down" ? e.bottom : e.top, h >= 0 && h < u.pageCount() - 1)) {
                                u.pageIndex(h);
                                u.refresh();
                                return
                            }
                            c || (dt(!1), u._mapPageWindow = null)
                        }
                    }
                    var o = eb(t),
                        r = [],
                        s = n.nextAsycJob(),
                        e;
                    i.fit = !0;
                    u._mapPageWindow == null && sb(i);
                    $(yt).each(function() {
                        var n = this.slice(0),
                            f = ln(n, o),
                            s = pu[vu[0].AliasIndex],
                            h = s.text(n[s.Index]);
                        typeof f == "string" ? f != "ZERO_RESULTS" && (r.push({
                            address: f,
                            title: h,
                            row: n
                        }), i.geocoder || (i.geocoder = new google.maps.Geocoder)) : (e = hb(u, rt, f, h, n), t.rowIsSelected(n) && hh(i, e))
                    });
                    oa(i);
                    dt(!0);
                    f()
                }

                function yi() {
                    var t = rt.data("data-map");
                    t ? (rt.show(), sp(s), ku(t)) : n.supports("Map") ? (t = {
                        map: new google.maps.Map(rt.get(0), {
                            zoom: 8
                        }),
                        geocoder: null,
                        markers: []
                    }, rt.data("data-map", t).show(), u.refresh()) : setTimeout(yi, 100)
                }
                f.requiresInitCallback ? (f.initCallback = function() {
                    t.get_searchOnStart() ? fh(t) : yi()
                }, f.requiresInitCallback = !1, n.navigate(f.id)) : f.requiresReturnCallback ? (f.returnCallback = function() {
                    yi()
                }, f.requiresReturnCallback = !1) : yi();
                u._reset = !1;
                to(f);
                return
            }
            bo || (hi = $('<div class="app-scrollable-cover"><\/div>').appendTo(s.parent()).css({
                position: "absolute",
                left: s.offset().left,
                top: s.offset().top,
                width: s.outerWidth(),
                height: s.outerHeight(),
                zIndex: 2,
                backgroundColor: vr ? "transparent" : "#fff"
            }));
            e.length || (e = $('<ul data-role="listview" class="app-listview"/>').addClass(ih(t)).appendTo(ht).listview().on("taphold", function(n, i) {
                if (i && (n = i), lg()) return !1;
                if (!t._busy()) {
                    var s = $(n.target),
                        r = s.closest("a"),
                        h = r.data("data-context"),
                        o = t.multiSelect() && !1;
                    return r.closest("li").is(".dv-item") && !r.is(".app-divider") && (r.is(".app-selected") ? (r.removeClass("app-selected"), o || (u.clearSelection(), u.lookupInfo() ? v(r, function() {
                        u.executeInContext("Clear")
                    }) : v(r, function() {}))) : t._hasKey() && (o || uh(e), r.addClass("app-selected"), u.tap(h, "none"), f.echoChanged = !0, v(r)), oi = !0), !1
                }
            }).on("vclick", function(i) {
                function w(n) {
                    t._busy() || (u._loadAtTop = !n, u.pageIndex(u.pageIndex(n ? "bottom" : "top") + (n ? 1 : -1)), u.refresh())
                }
                var o = $(i.target),
                    r = o.closest("a").removeClass("ui-btn-active"),
                    c, l, a, p, h, y, s, b;
                if (!o.is(".app-btn-toggle,[data-href]")) {
                    if (l = o.closest(".app-field"), l.length && (a = l.find("[data-href]"), a.length)) return setTimeout(function() {
                        a.trigger("vclick")
                    }, 10), !1;
                    if (!r.length || r.is(".app-divider") || hp(i)) {
                        if (p = o.closest(".app-group"), p.length) return o.is(".app-group") || (b = o.closest(".app-group").find(".app-group-path,.app-group-title").addClass("ui-btn-active"), setTimeout(function() {
                            b.removeClass("ui-btn-active");
                            ra(!0)
                        }, ft)), !1
                    } else {
                        if (r.is(".dv-load-at-bottom")) w(!0);
                        else if (r.is(".dv-load-at-top:visible")) vt(), setTimeout(function() {
                            w(!1)
                        }, 50);
                        else {
                            if (oi) {
                                oi = !1;
                                return
                            }
                            if (!nr(o) || n.busy()) return !1;
                            if (i.ctrlKey) return e.trigger("taphold", i), oi = !1, !1;
                            if (r.is(".dv-action-none") || wp(i, t)) return !1;
                            c = t.multiSelect();
                            c && il(i) ? el(t, r) : (h = r.data("data-context"), y = bp(i), h ? (c && r.find(".app-btn-check").addClass("app-btn-check-selected"), e.find("a.app-selected").removeClass("app-selected"), y ? (o = kp(o), s = function() {
                                bf(t, r);
                                u.tap(h, "none");
                                yo(o)
                            }) : s = function() {
                                t._hasKey() ? (r.addClass("app-selected"), y || (bf(t, r), u.tap(h)), f.echoChanged = !0) : u.tap(h)
                            }) : r.is(".dv-action-refresh") ? s = function() {
                                t.sync()
                            } : r.is(".dv-action-new") ? s = function() {
                                u.executeInContext("New", null, !1)
                            } : r.is(".dv-action-filter-clear") && (s = function() {
                                ac(t, !0)
                            }), s && (s(), v(o)))
                        }
                        return !1
                    }
                }
            }).contextmenu(function(n) {
                return vb(u.dataView(), n)
            }), bl(t, e), !nt.length && lt && (dr = n.bar("create", {
                type: "footer",
                page: h
            }), nt = $('<div class="app-bar-aggregates"><\/div>').appendTo(dr)), gt.length || y != "Grid" || oe(t));
            k && du(e);
            k != !1 && nt.length && lt && (w ? fu(aggregateListView = $('<ul class="ui-listview app-listview app-grid"/>').appendTo(nt.empty())) : cw(t, nt.empty(), lt));
            bd(e, y);
            y == "Grid" && oe(t);
            eh(ii, t, f);
            kl(t, e);
            var ut = e.find(".dv-item"),
                wt = ut.length > ni * 2,
                bt = e.find("li").last(),
                c, ri, a = u._loadAtTop,
                p, ui, wr, br = bt && bt.length && bt.prev(),
                gu = br && br.position().top,
                eu, pi, wi;
            eu = gg(e);
            (gr && bt.length == 0 || wt && !a && !e.find("li.dv-load-at-top-parent").length) && (st.hide(), c = $(String.format('<li data-icon="false" class="dv-load-at-top-parent"><a class="dv-load-at-top"><p>{0}<\/p><\/a><\/li>', ot.Loading)), wt ? (c.insertBefore(ut.get(0)), gr = !0) : c.appendTo(e));
            a ? (c = e.find("li").first(), c.is(".app-list-instruction") && (c = c.next()), ui = c.length && c.next(), wr = ui && ui.position().top + eu, yt = yt.slice(0).reverse()) : bt.remove();
            ri = g * ni;
            ou = ic(t);
            $(yt).each(function(n) {
                var i = this,
                    r = $('<li class="dv-item" data-icon="false"/>'),
                    o = a ? ri + ni - n : ri + n + 1,
                    f = $('<a class="ui-btn"/>').appendTo(r).data("data-context", {
                        row: this.slice(0),
                        pageIndex: g
                    });
                t.rowIsSelected(i) && (f.addClass("app-selected"), u.commandRow() ? u.commandRow(i) : (t._forgetSelectedRow(!0), u.command(i, "Select")));
                a ? r.insertAfter(c) : r.appendTo(e);
                w ? oo(t, i, tu ? o : null, f) : au(t, i, fr, tu ? o : null, r, f, y == "List");
                kf(t, i, r, ou)
            });
            (nu && !a || wt && a && !e.find(".dv-load-at-bottom-parent").length) && (bt = gi = $(String.format('<li data-icon="false" class="dv-load-at-bottom-parent"><a class="dv-load-at-bottom"><p>{0}<\/p><\/a><\/li>', ot.Loading)).appendTo(e));
            a && g == 0 && c.remove();
            ei || (pi = $('<li data-icon="refresh"><a class="dv-action-refresh"><p/><\/a><\/li>').appendTo(e).find("a"), pi.attr("title", pr.Refresh).find("p").text(at.NoRecords), t._filter && t._filter.length && !t.filterIsExternal() && (wi = $('<li data-icon="filter"><a class="dv-action-filter-clear"><p/><\/a><\/li>').appendTo(e).find("a"), wi.attr("title", i.ClearFilter).find("p").text(i.ClearFilter)));
            nu || (lt && w && ei > 0 && (pt = fu(e)), o.promoteActions ? ru = !0 : (kt = u.executeInContext("New", null, !1, !0), kt && (bi = $('<li class="dv-action-new">').appendTo(e).attr("data-icon", kt.icon), ct = $('<a class="dv-action-new"/>').appendTo(bi).attr("title", i.LookupNewAction), w ? $("<p>").appendTo(ct).text(kt.text) : ($("<h3>").appendTo(ct), ki = bi.prev(), ki.is(".dv-item") && (ct.html(ki.find("a").html()).find("p,img,span").css("visibility", "hidden"), ki.is(".ui-li-has-thumb") && bi.addClass("ui-li-has-thumb")), ct.find("h3").text(kt.text), ei || $("<p>").appendTo(ct.html("")).text(kt.text)))));
            a && (h.attr("data-page-header", ""), ti(ri == 0, st));
            su = e.find("li").first();
            fi = u.instruction();
            (fi || w) && !e.find(".app-list-instruction").length && (gi = $('<li data-role="list-divider" class="app-list-instruction"/>').insertBefore(c ? c : su), fi && $('<span class="app-view-instruction"/>').appendTo(gi).html(fi), w && !!ei && (hu = ol(t, gi), fi || hu.addClass("app-grid-header-no-description")));
            a && c && c.find(".ui-btn").css("height", "").find("p").css("margin-top", "");
            wt && (a ? (ut = ut.slice(ni * (vr ? 2 : 2)), ut.find("a").data("data-context", null), ut.remove(), e.find("li.dv-action-new").remove()) : (st.hide(), rr = $(String.format('<li style="clear:left;height:{0}px"><\/li>', r.getScreenHeight() * 10)).appendTo(e), e.find("li.app-li-card").remove(), ut = ut.slice(0, ni), ut.find("a").data("data-context", null), ut.remove().empty()));
            nn(t, e);
            ci(e);
            e.listview("refresh");
            ru && e.find("li.dv-item").last().addClass("app-has-promo");
            p = e.find("a.app-selected");
            tt == null && (wt ? a ? (ur = ui.position().top, si(s, et + ur - wr)) : (cu = br.position().top, si(s, et + cu - gu)) : a ? (ur = ui.position().top, si(s, et + ur - wr)) : a == null && si(s, 0));
            rr && setTimeout(function() {
                rr.prev().addClass("ui-last-child");
                rr.remove()
            }, 100);
            w && (pi && pi.removeClass("ui-btn-icon-right").addClass("ui-btn-icon-left"), ct && ct.removeClass("ui-btn-icon-right").addClass("ui-btn-icon-left"), wi && wi.removeClass("ui-btn-icon-right").addClass("ui-btn-icon-left"));
            f.requiresInitCallback ? (kr(), f.initCallback = function() {
                t.get_searchOnStart() ? fh(t) : tr(200)
            }, f.requiresInitCallback = !1, n.navigate(f.id)) : f.requiresReturnCallback ? (kr(), f.returnCallback = function() {
                tr(200)
            }, f.requiresReturnCallback = !1) : (kr(), tr(k ? 10 : 200), ir());
            hi && (vr && wt ? setTimeout(function() {
                hi.remove()
            }, 300) : hi.remove());
            u._reset = !1;
            u._loadAtTop = null;
            to(f)
        },
        reset: function() {
            var f = this.dataView(),
                t = n.pageInfo(f),
                e = "#" + t.id,
                i = r.navigate.history,
                u;
            this._reset = !0;
            $(i.stack).each(function(n) {
                return n > i.activeIndex ? !1 : this.hash == e ? (u = !0, !1) : void 0
            });
            u || (t.initialized = !1, t.echoInitialized = !1, t.echoId = !1)
        },
        visibleDataRows: function(n) {
            var u = this._dataView,
                i = u._cachedPages,
                t, r;
            if (i)
                for (t = 0; t < i.length; t++)
                    if (r = i[t], r.index == n) return r.rows;
            return null
        },
        currentPageIndex: function(n) {
            return arguments.length && (this._currentPageIndex = n), this._currentPageIndex
        },
        pageIndex: function(n) {
            var t = this._dataView,
                i, r;
            if (typeof n == "string") return n == "bottom" && (i = this.content().parent().find("ul li.dv-item").last().find("a").data("data-context"), i) ? i.pageIndex : n == "top" && (r = this.content().parent().find("ul li.dv-item").first().find("a").data("data-context"), r) ? r.pageIndex : t.get_pageIndex();
            if (n == null) return t.get_pageIndex();
            t.set_pageIndex(n)
        },
        pageCount: function() {
            var n = this._dataView;
            return n.get_pageCount()
        },
        pageSize: function() {
            var n = this._dataView;
            return n.get_pageSize()
        },
        instruction: function(n) {
            var f = this,
                e = f.lookupInfo(),
                o, r = f.dataView(),
                c = f.viewDescription() || "",
                t = c ? [c] : [],
                h = f.filterStatus(),
                s = r.groupExpression(),
                u;
            return e && (t.length && t.push(" "), o = e.field, t.push(String.format(o.ItemsDescription || i.LookupInstruction, o._dataView._allFields[o.AliasIndex].HeaderText)), e.value && (u = e.text, u && u.length > 50 && (u = u.substring(0, 50) + "..."), t.push(String.format(i.LookupOriginalSelection, u)))), r.multiSelect() && t.push('<span class="app-multi-select-instruction">' + gp(r) + "<\/span>"), n != !1 && (t.length || h || s) && r._totalRowCount > 1 && (t.length && (t.push(" "), t.push(String.format(i.ShowingItemsInfo, r._totalRowCount))), $(s).each(function(n) {
                var u = r.findField(this);
                u && (n == 0 && (t.length && t.push(" "), t.push(i.GroupedBy, " ")), n && (n == s.length - 1 ? t.push(" ", at.Filters.Labels.And, " ") : t.push(", ")), t.push(u.HeaderText), n == s.length - 1 && t.push("."))
            })), h && (t.length && t.push(" "), t.push(String.format('<span class="app-filter" title="{1}">{0}<\/span>', h, i.Filter))), t.join("")
        },
        context: function(u, f) {
            var c = this,
                e = c.dataView(),
                p = e.extension(),
                l = e._totalRowCount,
                w = e.get_view().Label,
                b = e.get_sortExpression(),
                o = c.commandRow() || [],
                s = this.lookupInfo(),
                h, a = o && o.length,
                y;
            if (l != -1)
                if (e.get_showViewSelector() && u.push({
                        text: w,
                        count: l,
                        icon: "gear",
                        system: !0,
                        toolbar: !1,
                        transition: !0,
                        callback: en
                    }), (e.get_showQuickFind() && (l > 1 || e.get_filter().length > e.get_externalFilter().length) || ne(e).length) && u.push({
                        text: ri.PerformAdvancedSearch,
                        desc: ip(e),
                        icon: "search",
                        toolbar: !1,
                        system: !0,
                        context: {
                            dataViewId: e._id
                        },
                        callback: cy
                    }), u.push({
                        text: i.Sort,
                        icon: "sort",
                        transition: !0,
                        desc: pw(e),
                        toolbar: !1,
                        system: !0,
                        callback: dg
                    }), u.push({
                        text: i.Filter,
                        icon: "filter",
                        transition: !0,
                        desc: p.filterStatus(!0),
                        toolbar: !1,
                        system: !0,
                        callback: ku
                    }), u.push({
                        text: i.Group,
                        icon: "group",
                        transition: !0,
                        desc: ww(e),
                        toolbar: !1,
                        system: !0,
                        callback: ra
                    }), s && s.value == null || u.push({}), fb(e, u, o), s ? r.activePage.find(".dv-heading.app-disabled").length && !nu() && u.push({
                        text: a ? c.instruction() : null
                    }) : ea(e, u, o), s) {
                    h = s.field;

                    function v(n, i, r) {
                        var u = t.methods.lookup._rowToValues(n, i, r);
                        u && bi(function() {
                            s.change(u)
                        })
                    }
                    a && u.push({
                        text: i.LookupSelectAction,
                        icon: "ok",
                        command: "Select",
                        callback: function() {
                            v(h, n.pageInfo().dataView, o)
                        }
                    });
                    s.value && u.push({
                        text: i.UnSelect,
                        icon: "delete",
                        command: "Clear",
                        callback: function() {
                            v(h, n.pageInfo().dataView, null)
                        }
                    });
                    String.isNullOrEmpty(h.ItemsNewDataView) || u.push({
                        text: i.LookupNewAction,
                        icon: "plus",
                        command: "New",
                        system: !0,
                        callback: function() {
                            c.executeInContext("New", h.ItemsNewDataView, !0)
                        }
                    });
                    u.push({});
                    a && !h.tagged("lookup-details-hidden") && u.push({
                        text: i.LookupViewAction,
                        callback: function() {
                            Web.DataView._defaultUseCase = "ObjectRef";
                            c.executeInContext("Select", "editForm1", !0)
                        }
                    });
                    ea(e, u, o);
                    u.push({
                        text: pr.Refresh,
                        icon: "refresh",
                        callback: function() {
                            e.sync()
                        }
                    })
                } else f || (f = ["Grid", "ActionColumn", "ActionBar"]), f.length == 1 && f[0] == "Grid" && $(e._views).each(function() {
                    var n = this;
                    if (n.Type == "Form" && n.Id.match(/edit/)) return y = n.Id, !1
                }), ao(f, e, u, o, y)
        }
    };
    Web.DataView.Extensions.Form = function(n) {
        return new Web.DataView.MobileForm(n)
    };
    Web.DataView.MobileForm = function(n) {
        Web.DataView.MobileForm.initializeBase(this);
        this.dataView(n)
    };
    Web.DataView.MobileForm.prototype = {
        initialize: function() {
            this._editors = {};
            this._initRow()
        },
        _initRow: function() {
            var n = this.dataView(),
                t = this.inserting() ? n._newRow : n._rows[0];
            return n._mergeRowUpdates(t), this.commandRow(t)
        },
        reset: function() {
            this._reset = !0;
            this._initRow()
        },
        options: function() {
            return {
                quickFind: !1,
                filterDetails: !1
            }
        },
        dispose: function() {
            this._dispose();
            this._disposeSession()
        },
        _disposeLayout: function(n) {
            function t(n) {
                for (var i, r = 0; r < n.length; r++) i = n[r], t(i.children), i.children = null, i.self.removeData(), i.self = null
            }
            n = $(n);
            n.find(".app-data-list").remove();
            n.find(".app-drop-box").each(function() {
                f.upload("destroy", {
                    container: this
                })
            });
            t(n.data("rootNodes"))
        },
        _dispose: function(t) {
            var u = this,
                e = u._dataView,
                i = this.content(),
                f, r;
            u._newValues = null;
            i.find('[data-layout="form"]').each(function() {
                u._disposeLayout(this)
            });
            i.find(".app-data-list").remove();
            $(e._allFields).each(function() {
                var i = this,
                    t;
                i._dataViewId && (t = $app.find(i._dataViewId), t._filterSource == e._id && n.deletePage(t._id))
            });
            i.find(".app-status-bar, .app-bar-buttons,.app-stub,.app-form-grid").remove();
            f = i.parent().find('div[data-role="header"]');
            f.find('div[data-role="navbar"]').navbar("destroy").remove();
            f.toolbar("destroy").remove();
            ee(i);
            r = i.find(".app-echo").each(function() {
                var i = $(this).attr("data-for"),
                    t = n.pageInfo(i);
                t && (t.echoId = null, t.echoInitialized = !1)
            });
            r.find(".app-echo-toolbar").find(".ui-icon-dots, h3, .app-echo-controls, .app-echo-see-all").off();
            r.find(".app-echo-inner").off();
            r.find(".app-echo-footer").off();
            r.remove();
            n.tabs("destroy", {
                container: i
            });
            t && it();
            u._disposeSession()
        },
        viewStyle: function() {
            return "Form"
        },
        refresh: function() {
            function ot() {
                v && vy(v);
                ay(u);
                n.bar("show", y);
                n.refreshAppButtons(a, {
                    buttonBars: e != "None" ? y : [],
                    layout: c,
                    toolbar: !1
                });
                tr(200);
                s || setTimeout(function() {
                    t.focus({
                        container: u
                    })
                }, ft)
            }
            var f = this,
                i = f.dataView(),
                st = f.editing(),
                o = n.pageInfo(i),
                ct = i._fields,
                lt = i._allFields,
                c, at = i._categories,
                u = f.content(),
                w, l = [],
                a, v, k, y, tt = this.inserting(),
                ht = this._reset,
                e = i.get_showActionButtons(),
                it = i._confirmContext,
                h = $("#" + o.id),
                rt = h.find(".app-page-header"),
                ut, d, g, p, nt;
            if (o.headerText = it && it.WindowTitle || i.get_view().Label, tt && rt.attr("data-locked", "false").data("data-text", null), ti(o.headerText, rt), u.closest(".ui-page"), ht && (f._dispose(), f._commandRow = null), w = st ? i.editRow() : f.commandRow() || f._initRow() || [], c = td(i, u.width()), k = i.statusBar(), k && (v = $('<div class="app-status-bar"><\/div>').html(k).appendTo(u), s && v.css("overflow-x", "auto")), d = f.viewDescription(), d && (g = $('<ul data-role="listview" class="app-list-instruction"/>').appendTo(u), $('<li data-role="list-divider" class="app-list-instruction"/>').appendTo(g).html(d), g.listview()), (e == "TopAndBottom" || e == "Top") && $('<div class="app-bar-buttons"><\/div>').appendTo(u), c.appendTo(u), e == "Auto" && (su <= 414 || yf <= 414) && (e = "None"), e == "Auto" ? y = $('<div class="app-bar-buttons"><\/div>').appendTo(n.bar("create", {
                    type: "footer",
                    page: h
                })) : ((e == "TopAndBottom" || e == "Bottom") && $('<div class="app-bar-buttons"><\/div>').appendTo(u), y = u.find(".app-bar-buttons")), a = [], f.context(a), !tt) {
                l = [];

                function et() {
                    n.tabs("create", {
                        tabs: l,
                        className: "app-tabs-echo",
                        scope: i.get_selectedKey(),
                        change: function() {}
                    })
                }
                $(n._pages).each(function() {
                    var r = this,
                        t, n, e, f = r.dataView,
                        o = f && f._filterSource;
                    o && o == i._parentDataViewId && !f._dataViewFieldName && (n = r.activator, n && n.type == "Tab" && ($(l).each(function() {
                        if (n.text == this.text) return t = this, !1
                    }), t || (p != n.container && (p && (et(), l = []), p = n.container), t = {
                        text: n.text,
                        content: []
                    }, l.push(t))), e = ll(r.id, u), t && t.content.push(e))
                });
                p && et()
            }
            ut = $('<div class="app-stub"><\/div>').appendTo(u);
            u.find(".app-echo").length && ut.height(r.getScreenHeight() * .6);
            f.stateChanged();
            f._reset = !1;
            o.requiresInitCallback ? (nt = h.css("display") != "block", nt && h.css({
                display: "block",
                "z-index": -10
            }), o.isModal && dv(h), e != "None" && e != "Auto" && n.refreshAppButtons(a, {
                buttonBars: u.find(".app-bar-buttons"),
                toolbar: !1
            }), id(i, w, c), kf(i, w, c), i._isWizard && cu("start", {
                layout: c
            }), or(u), hr(h), nt && h.css({
                display: "",
                "z-index": ""
            }), o.requiresInitCallback = !1, b = !1, o.initCallback = ot, n.navigate(o.id)) : ot();
            to(o)
        },
        collect: function() {
            var t = this,
                i = [],
                n = t.dataView(),
                f = n._allFields,
                r, e = t.inserting(),
                u;
            return u = n.editRow(), r = n._originalRow, $(f).each(function(n) {
                var t = this,
                    f = u[n],
                    o = r[n];
                t.Type.match(/^Date/) && (f = f != null ? new Date(f) : null);
                t.Type != "DataView" && i.push({
                    Name: t.Name,
                    NewValue: f,
                    OldValue: o,
                    Modified: f != o || f == null && !t.AllowNulls && !t.IsPrimaryKey,
                    ReadOnly: !!(t.ReadOnly && !(t.IsPrimaryKey && e))
                })
            }), i
        },
        stateChanged: function() {
            var i = this,
                r = i.dataView(),
                f = i.content(),
                n = f.find("[data-layout]"),
                u;
            n.data("prepared") ? (u = r.editRow(), t.evaluate({
                dataView: r,
                row: u,
                container: n
            }), t.render({
                container: n,
                dataView: r,
                row: u
            }), it(!1, 0), nf(), i.editing() && !s && t.focus({
                container: n
            })) : it()
        },
        context: function(n) {
            var t = this,
                i = t.dataView(),
                r = t.commandRow(),
                u = t.editing();
            n.isSideBar || fb(i, n, r);
            u || ea(i, n, r);
            ao(["Form", "ActionBar"], i, n, r)
        },
        afterCalculate: function() {
            return
        },
        _refreshButtons: function() {
            var n;
            $(this.dataView()._actionGroups).each(function() {
                return $(this.Actions).each(function() {
                    if (this._whenClientScript) return n = !0, !1
                }), n ? !1 : void 0
            });
            n && it()
        }
    };
    Web.DataView.alert = function(t, i) {
        function o() {
            r.popupopen()
        }
        var f;
        n.busy(!1);
        typeof t != "string" && (t = t.toString());
        ya = i;
        var r = $("#app-popup-alert"),
            s = d(),
            u = $("div.ui-popup-active div").first();
        if (r.length == 0) {
            r = $(String.format('<div id="app-popup-alert" class="app-popup app-popup-alert" data-theme="a" data-overlay-theme="a" data-dismissible="false" data-history="false"><div class="ui-header ui-bar-a" role="banner"><h1 class="ui-title" role="heading" aria-level="1">{0}<\/h1><\/div><div role="main" class="ui-content"><div class="app-popup-text"><\/div><div class="app-popup-buttons"><a class="ui-btn ui-corner-all ui-mini">{1}<\/a><\/div><\/div><\/div>', n.appName(), is.Close)).appendTo(e).popup(va());
            r.find("a").on("vclick", function() {
                return u.length ? (rr = function() {
                    u.popupopen()
                }, us = ya) : rr = ya, v(this, function() {
                    vo(r)
                }), !1
            })
        }
        f = r.find(".app-popup-text").css("max-height", l.height() * .8 - kr() * 2);
        t = (t || "").replace(/\n/g, "<p/>");
        t.match(/<\w+/) ? f.html(t) : f.text(t);
        u.length ? (rr = o, vo(u)) : o()
    };
    Web.DataView.confirm = function(t, i, r) {
        function s() {
            u.popupopen()
        }
        var o;
        n.busy(!1);
        typeof t != "string" && (t = t.toString());
        pa = i;
        wa = r;
        var u = $("#app-popup-confirm"),
            h = d(),
            f = $("div.ui-popup-active div").first();
        if (u.length == 0) {
            u = $(String.format('<div id="app-popup-confirm" class="app-popup app-popup-confirm" data-role="popup" data-theme="a" data-overlay-theme="a" data-dismissible="false" data-history="false"><div class="ui-header ui-bar-a" role="banner"><h1 class="ui-title" role="heading" arial-level="1">{0}<\/h1><\/div><div role="main" class="ui-content"><div class="app-popup-text"><\/div><div class="app-popup-buttons"><a class="app-btn-confirm ui-btn ui-corner-all ui-mini">{1}<\/a><a class="ui-btn ui-corner-all ui-mini">{2}<\/a><\/div><\/div><\/div>', n.appName(), is.OkButton, is.CancelButton)).appendTo(e).popup(va());
            u.find("a").on("vclick", function(n) {
                var t = $(n.target).is(".app-btn-confirm");
                return rr = f.length ? function() {
                    f.popupopen();
                    us = t ? pa : wa
                } : t ? pa : wa, v(this, function() {
                    vo(u)
                }), !1
            })
        }
        o = u.find(".app-popup-text");
        t = (t || "").replace(/\n/g, "<p/>");
        t.match(/<\w+/) ? o.html(t) : o.text(t);
        f.length ? (rr = s, vo(f)) : s()
    };
    f.showMessage = function(n) {
        n && this.alert(n)
    };
    pt = Web.Menu = {};
    pt.Nodes = {};
    pt.headerIterators = [];
    pt.footerIterators = [];
    h.$nextTabIndex = h.$closeHovers = er;
    typeof Web.Membership != "undefined" && (Web.Membership.prototype.initialize = function() {
        var t = this;
        os = t.get_authenticationEnabled();
        ss = t.get_displayMyAccount();
        we = t.loggedIn();
        be = t.get_user();
        pt.headerIterators.push(function() {
            var s = $(this),
                h = t.get_cultures(),
                u, l, r, e, o;
            if (!String.isNullOrEmpty(h) && !(__tf != 4)) {
                var f = {
                        value: "Detect,Detect",
                        text: ui.AutoDetectLanguageOption,
                        selected: !1
                    },
                    c = [f];
                $(h.split(/;/)).each(function() {
                    if (this.length) {
                        var n = this.split("|"),
                            t = {
                                value: n[0],
                                text: n[1],
                                selected: n[2] == "True"
                            };
                        c.push(t);
                        t.selected && (f = t)
                    }
                });
                l = $("<a/>").text(f.text).appendTo($('<li data-icon="location" data-theme="b"/>').appendTo(s)).on("vclick", function() {
                    return wr || k(l), vi = function() {
                        rt = [{
                            text: i.Back,
                            icon: tt,
                            callback: function() {
                                n._menuPanel.panel("toggle")
                            }
                        }, {
                            text: ui.ChangeLanguageToolTip,
                            instruction: !0
                        }];
                        $(c).each(function(n) {
                            var i = this;
                            rt.push({
                                text: i.text,
                                icon: n == 0 ? "" : i.selected ? "check" : !1,
                                context: i,
                                callback: function(n) {
                                    t.changeCulture(n.value)
                                }
                            });
                            n == 0 && rt.push({})
                        });
                        st(rt, "#app-panel-languague", {
                            position: "left"
                        })
                    }, co(!0), !1
                });
                u = !0
            }
            if (r = this.find(".welcome"), we) e = t.get_welcome(), String.isNullOrEmpty(e) ? r.hide() : r.html(String.localeFormat(e, t.get_user(), new Date));
            else if (t._allowLoginInMenu) {
                r.hide();
                o = $("<a/>").text(ui.LoginLink).appendTo($('<li data-icon="lock" data-theme="b"/>').appendTo(s));
                o.on("vclick", function() {
                    wr || k(o);
                    vi = function() {
                        k();
                        t.showLogin()
                    };
                    co()
                });
                u = !0
            }
            return u
        });
        we && (ss || os) && pt.footerIterators.push(function() {
            var n = !1,
                i;
            if (ss && $(this).is(".level0") && !1 && ($(String.format("<li>{0}<\/li>", ui.MyAccount)).appendTo(this), n = !0), os) {
                i = $("<a/>").text(ui.LogoutLink).appendTo($('<li data-icon="power" data-theme="b"/>').appendTo(this));
                i.on("vclick", function() {
                    wr || k(i);
                    vi = function() {
                        nh();
                        t.logout()
                    };
                    co()
                });
                n = !0
            }
            return n
        })
    }, Web.Membership.prototype.dispose = function() {}, Web.Membership.prototype.updated = function() {
        if (oi = this, kc(), this.get_idleTimeout()) $(document).on("awake.app", function() {
            return !oi.idle()
        });
        this.idleInterval(!0);
        n && this.mobileUpdated()
    }, Web.Membership.prototype._idle = function() {
        ai();
        var n = this;
        n.idleInterval(!1);
        f.alert(ui.UserIdle, function() {
            nh();
            n.logout()
        })
    }, Web.Membership.prototype.loginStatus = function(n) {
        var t = this,
            i = t.loggedIn(),
            r = $(n).text(i ? ui.LogoutLink : ui.LoginLink).on("vclick", function() {
                return v(r, function() {
                    i ? (nh(), t.logout()) : t.showLogin()
                }), !1
            })
    }, Web.Membership.prototype.mobileUpdated = function() {
        var n = this,
            t;
        $(document).on("start.app", function() {
            n._allowLoginInMenu = n.get_displayLogin();
            !t && location.href.match(/(\?|&)ReturnUrl=/) && n._allowLoginInMenu && n.showLogin()
        });
        this.loginStatus('a[data-app-role="loginstatus"]')
    }, Web.Membership.prototype.showLogin = function() {
        $app.touch.show({
            controller: "MyProfile",
            startCommand: "New",
            startArgument: "loginForm",
            showActionButtons: "Bottom"
        })
    });
    Web.Mobile = function() {
        var n = this;
        n._asyncJob = 0;
        n._pageMap = {};
        n._pages = [];
        n._toolbar = $("#app-bar-tools");
        n._actionButton = $(".app-btn-promo");
        n._toolbarButtons = n._toolbar.find(".app-btn");
        n._toolbarUserName = n._toolbar.find(".app-user-name");
        n._title = n._toolbar.find("h1").addClass("app-hidden");
        n._stickyHeaderBar = $("#app-bar-heading");
        n._menuButton = $("#app-btn-menu");
        n._contextButton = $("#app-btn-context");
        n._modalDataViews = [];
        n._modalStack = []
    };
    Web.Mobile.prototype = {
            settings: function() {
                return o
            },
            appName: function() {
                var n = this;
                return n._appName || (n._appName = $("#PageHeaderBar").text() || $('head meta[name="application-name"]').attr("content")), n._appName
            },
            height: function() {
                var n = l.height();
                return navigator.userAgent.match(/Mobile.+Safari/) && !navigator.userAgent.match(/Chrome/) && (n += 60), n
            },
            page: function(n) {
                n || (n = "Main");
                var t = $("#" + n);
                return t.length || (t = $(String.format('<div data-role="page" id="{0}"><div data-role="content"><\/div><\/div>', n)).appendTo(e).page(), gs(t), di(t)), t
            },
            activeLink: function(n, t) {
                if ($(r.activeClickedLink).is(".app-tab-active") || r.removeActiveLinkClass(!0), n) {
                    var i = $(n).closest("a");
                    i.length && (n = i);
                    n.is(".app-btn-static") || (n.addClass("ui-btn-active"), (t == null || t) && (r.activeClickedLink = n))
                }
            },
            blink: function(n, t) {
                k(n);
                setTimeout(function() {
                    k();
                    setTimeout(function() {
                        k(n);
                        setTimeout(function() {
                            k();
                            t && t()
                        }, 200)
                    }, 200)
                }, 200)
            },
            content: function(n) {
                var t = this.page(n),
                    i = t.find(".app-wrapper").last();
                return i.length ? i : t.find('[data-role="content"]')
            },
            showContextPanel: function(n, t, i) {
                st(n, "#" + t, i)
            },
            toggleContextPanel: function(n) {
                this.contextScope() && (n += "-scope");
                $(n).panel("toggle")
            },
            causesCalculate: function() {},
            pageVar: function(n, t) {
                if (arguments.length == 1) return wu(n);
                wu(n, t)
            },
            userVar: function(n, t) {
                if (arguments.length == 1) return g(n);
                g(n, t)
            },
            callWithFeedback: function(n, t) {
                n = $(n);
                n && n.length && v(n, t)
            },
            pageHeader: function(t) {
                var i = n.pageInfo(t.id),
                    r = [t.text];
                t.text2 && (r[1] = t.text2);
                i && (i.headerText = r, i.id == d() && ti(r))
            },
            dataView: function() {
                var n = this.pageInfo();
                return n ? n.dataView : null
            },
            prevPageInfo: function() {
                var t = r.navigate.history.stack,
                    i, u;
                return t.length > 1 && (i = t[t.length - 2].pageUrl, i && (u = n.pageInfo(i))), u
            },
            pageInfo: function(n) {
                if (n ? n._id && n._controller ? n = n._id : n.selector != null && n.length != null && (n = n.attr("id") || "") : n = d(), typeof n == "string") return this._pageMap[n];
                if (n) this._pageMap[n.id] = n, n.dataView && n.dataView._id && (this._pageMap[n.dataView._id] = n), this._pages.push(n);
                else return null
            },
            unloading: function() {
                tu()
            },
            refresh: function(n, t, i) {
                it(n, t, i)
            },
            refreshEchoToolbarWithDelay: function(n, t) {
                hu(n, t)
            },
            listPopup: function(n) {
                nt(n)
            },
            cardPopup: function(n) {
                ha(n)
            },
            busyIndicator: function(n) {
                dt(n)
            },
            viewStyle: function(n, t, i) {
                te(n, t, i)
            },
            bar: function(t, i) {
                function l() {
                    f = r.prev();
                    f.is(".app-bar-actions") && f.is(":visible") ? r.css("top", f.offset().top + f.outerHeight()) : r.css("top", "")
                }

                function a() {
                    var t = !0;
                    r.children().each(function() {
                        var n = $(this);
                        n.css("display") != "none" && (t = !1)
                    });
                    t ? (r.hide(), r.is(".app-bar-footer") && n.promo().css("margin-bottom", ""), v()) : r.show()
                }

                function v() {
                    di(r.closest(".ui-page"))
                }
                var r, f, u, e;
                if (t == "create") {
                    var s = i.type,
                        h = i.page,
                        o = h.is(".ui-page") ? h.find(".app-wrapper") : w($(h)),
                        c;
                    return r = o.find(".app-bar-" + s), r.length || (s == "header" ? (r = $('<div class="app-bar-header ui-header ui-bar-inherit ui-header-fixed"><\/div>').hide().insertBefore(o), l()) : s == "footer" && (c = o.next(), r = $('<div class="app-bar-footer ui-footer ui-bar-inherit ui-footer-fixed"><\/div>').hide().insertAfter(c.is(".app-vscrollbar") ? c : o)), ho(r)), r
                }(u = i, u && u.length) && (r = u.parent(), t == "show" ? (r.is(".app-bar-header") && l(), r.show(), u.show(), r.is(".app-bar-footer") && (e = n.promo(), e.length && e.css("margin-bottom", "").css("margin-bottom", sr(e.css("margin-bottom")) + r.outerHeight())), v(), n.tabs("fit")) : t == "hide" ? (u.hide(), a()) : t == "remove" && (u.remove(), a()))
            },
            promo: function(t, i) {
                function s() {
                    if (!u.is(".ui-disabled") && (o.promoteActions || gi())) {
                        u.css({
                            "margin-bottom": ""
                        });
                        var i = u.is(":visible"),
                            t, e = u.attr("class").match(/ui-icon-\w+/);
                        i || (t = n.pageInfo(), t && e && (t._promo || (t._promo = {}), t._promo[e[0]] ? i = !0 : t._promo[e[0]] = !0), u.css({
                            "margin-bottom": "",
                            transform: i ? "none" : "scale(.5)"
                        }).css({
                            transition: i ? "none" : "transform 200ms"
                        }).show());
                        f = r.activePage.find(".app-bar-footer");
                        f.length && f.height() && u.css("margin-bottom", sr(u.css("margin-bottom")) + f.outerHeight());
                        i || setTimeout(function() {
                            u.css("transform", "none")
                        }, 50)
                    } else u.hide()
                }
                var u = this._actionButton,
                    e, f;
                return arguments.length == 0 ? u : typeof t == "boolean" ? (t ? s() : u.hide(), u) : typeof t == "string" ? (e = u.data("icon"), e && u.removeClass("ui-icon-" + e), u.addClass("ui-icon-" + t).data("icon", t).attr("title", i), t.match(rv) ? (u.hide().addClass("ui-disabled"), !1) : (u.removeClass("ui-disabled"), s(), !0)) : void 0
            },
            toolbar: function(n) {
                var t = this._toolbar;
                return typeof n == "boolean" ? n ? t.show() : t.hide() : typeof n == "string" && $("<span/>").text(n).appendTo(this._title.empty()), t
            },
            search: function(t, r) {
                function e(t) {
                    t != !1 && u.blur();
                    k();
                    n._toolbar.removeClass("app-logo-hidden");
                    rs.show();
                    ii.hide();
                    n.refreshMenuStrip();
                    it();
                    n._contextButton.data("skipClick", !0);
                    setTimeout(function() {
                        n._contextButton.removeData("skipClick")
                    }, 300)
                }

                function c() {
                    if (rs = $(".ui-title,#app-btn-menu,.app-btn-cluster-right").hide(), ii = n._toolbar.find("#app-controls-find"), ii.length == 0) {
                        ii = $('<div id="app-controls-find" class="app-bar-search"><form><input type="search" id="app-input-search" data-role="search" data-mini="true"/><a class="app-btn-search-cancel ui-btn-left ui-btn ui-icon-back ui-btn-icon-notext ui-shadow ui-corner-all"/><a class="app-btn-search-more ui-btn ui-btn-right ui-corner-all ui-btn-icon-notext ui-icon-carat-d"/><\/form><\/div>').insertBefore(n._toolbar.find(".ui-title"));
                        ii.find(".app-btn-search-more").attr("title", ri.ShowAdvancedSearch).on("mousedown vclick", function() {
                            function i() {
                                var f = n.pageInfo(u.attr("data-scope") || r.scope),
                                    i = f.dataView,
                                    o = u.val();
                                i.extension().useAdvancedSearch(!0);
                                v(t, function() {
                                    fe(i, o);
                                    e()
                                })
                            }
                            if (!n.busy() || !ht) {
                                var t = $(this);
                                return ht = !0, setTimeout(function() {
                                    ht = !1
                                }, 200), i(), !1
                            }
                        }).css("right", n._contextButton.css("right"));
                        ii.css("padding-right", parseFloat(n._contextButton.css("right")) + n._contextButton.outerWidth() + 4);
                        n._searchInput = u = ii.find("input").textinput({
                            mini: !0,
                            clearBtnText: i.ClearText
                        }).attr("type", "text").keydown(function(t) {
                            if (t.keyCode == 27) return u.blur(), !1;
                            if (t.keyCode == 40 || t.keyCode == 114) {
                                var f = n.pageInfo(u.attr("data-scope") || r.scope),
                                    i = f.dataView,
                                    o = u.val();
                                return i.extension().useAdvancedSearch(!0), v(ii.find(".ui-icon-carat-d"), function() {
                                    e();
                                    fe(i, o)
                                }), !1
                            }
                        }).focus(function() {
                            n._toolbar.addClass("app-logo-hidden")
                        }).blur(function() {
                            var t = u.data("allow-blur") != !1;
                            if (!t) {
                                u.parent().addClass("ui-focus");
                                return
                            }
                            ws(!0);
                            e(!1);
                            sy();
                            ht = !0;
                            setTimeout(function() {
                                ht = !1;
                                var t = n.dataView();
                                t && t._totalRowCount == -1 && t.sync()
                            }, 200)
                        });
                        o = $('<span class="app-btn-options app-has-children"/>').appendTo(u.parent()).attr("title", i.QuickFindScope).on("vmousedown", function() {
                            function f(n, i) {
                                i.toggleClass("app-checked");
                                t[n]._selected = i.is(".app-checked");
                                var r;
                                $(t).each(function() {
                                    if (this._selected) return r = !0, !1
                                });
                                r || (t[n]._selected = !0, i.toggleClass("app-checked"));
                                sh(i)
                            }
                            var s = n.pageInfo(u.attr("data-scope") || t.scope),
                                r = s.dataView,
                                t = [{
                                    text: r.get_view().Label,
                                    _hint: r._controller + "." + (r._viewId || "grid1"),
                                    keepOpen: !0,
                                    context: 0,
                                    callback: f
                                }],
                                h = (r.viewProp("quickFindHint") || "").split(";"),
                                e;
                            return $(n._pages).each(function() {
                                var i = this,
                                    n = i.dataView;
                                n && n._filterSource == r._id && (t.length == 1 && t.push({}), t.push({
                                    text: n.get_view() && n.get_view().Label || i.text,
                                    _hint: n._controller + "." + (n._viewId || "grid1") + "." + n._filterFields,
                                    keepOpen: !0,
                                    context: t.length,
                                    callback: f
                                }))
                            }), $(t).each(function() {
                                var n = this;
                                n._selected = h.indexOf(n._hint) != -1;
                                n._selected && (n.icon = "check", n.linkClassName = "app-checked", e = !0)
                            }), e || (t[0]._selected = !0, t[0].icon = "check", t[0].linkClassName = "app-checked"), u.data("allow-blur", !1), nt({
                                anchor: o,
                                highlightAnchor: !1,
                                iconPos: "right",
                                y: o.offset().top + o.outerHeight() * .8,
                                title: i.QuickFindScope,
                                items: t,
                                afteropen: function() {
                                    setTimeout(function() {
                                        u.parent().addClass("ui-focus")
                                    })
                                },
                                afterclose: function() {
                                    setTimeout(function() {
                                        u.data("allow-blur", null);
                                        u.focus()
                                    }, 200);
                                    var n = [];
                                    $(t).each(function(t) {
                                        var i = this;
                                        i.text && i._selected && (t > 0 && n.push(";"), n.push(i._hint))
                                    });
                                    r.viewProp("quickFindHint", n.length == 1 ? null : n.join(""))
                                }
                            }), !1
                        });
                        u.parent().find(".ui-input-clear").on("vmousedown", function() {
                            return sc(u, 0), $(this).trigger("click"), !1
                        });
                        ii.find("form").submit(function() {
                            return e(), h(u.val()), !1
                        });
                        var t = ii.find(".ui-icon-back").attr("title", is.CancelButton).on("vclick", function() {
                            return v(t, function() {
                                e()
                            }), !1
                        })
                    }
                    u.attr("data-scope", r.scope)
                }

                function h(t) {
                    var f = n.pageInfo(u.attr("data-scope") || r.scope),
                        i = f.dataView,
                        e = i.extension();
                    i._busy() || (iu(i), tp(i, t), n.toolbar(n.title()), dc())
                }
                var u = $(n._searchInput).attr("data-scope", r.scope),
                    f = r && r.text,
                    o, s;
                if (t == "configure") r.focus ? (c(), ii.show(), ws(!1), r.placeholder && u.attr("placeholder", r.placeholder), f ? (u.val(f), s = u.parent().find("a"), f ? s.removeClass("ui-input-clear-hidden") : s.addClass("ui-input-clear-hidden")) : u.val(""), u.focus().select(), r.setCursor && sc(u, u.val().length)) : (rs && rs.show(), ii && ii.hide(), typeof f != "undefined" && u.val(f)), u.attr("data-scope", r.scope);
                else if (t == "execute") h(r.text);
                else return u.val()
            },
            stickyHeaderBar: function() {
                return this._stickyHeaderBar
            },
            enumerateFields: function(n, t, i, r) {
                var u = n._allFields,
                    f = i == null;
                r || (r = n.extension().commandRow());
                f ? (i = [], $(u).each(function() {
                    this.ShowInSummary && !this.Hidden && i.push(this)
                })) : t.push({
                    text: n.get_view().Label,
                    theme: "a",
                    isStatic: !1,
                    instruction: !0
                });
                $(i).each(function() {
                    var i = u[this.AliasIndex],
                        f = r[i.Index],
                        e = i.text(f);
                    i.OnDemand ? i.OnDemandStyle != 1 && f && !f.match(/^null/) && t.push({
                        src: String.format("{0}blob.ashx?{1}=t|{2}{3}", n.resolveClientUrl(n.get_appRootPath()), i.OnDemandHandler, f, i.OnDemandStyle == 2 ? "&_nocrop" : ""),
                        desc: i.HeaderText,
                        display: "before"
                    }) : pl(i) && f ? t.push({
                        text: e,
                        desc: i.HeaderText,
                        href: "tel:" + e,
                        icon: "phone"
                    }) : wl(i) && f ? t.push({
                        text: e,
                        desc: i.HeaderText,
                        href: "mailto:" + e,
                        icon: "mail"
                    }) : t.push({
                        text: e,
                        desc: i.HeaderText,
                        isStatic: !0,
                        display: "before"
                    })
                })
            },
            infoView: function(n, t, r, u) {
                var e = [],
                    l = t ? "left" : u || "",
                    h, s, o, c;
                for (t || e.push({
                        text: i.Back,
                        callback: bu,
                        icon: tt
                    }); n;) c = e.length, h = n.extension().itemMap(), s = n._allFields, o = [s[h.heading]], t || $(h.desc).each(function() {
                    o.push(s[this])
                }), $(n._fields).each(function() {
                    this.Hidden || o.indexOf(s[this.AliasIndex]) != -1 || o.push(this)
                }), this.enumerateFields(n, e, o, r), c <= e.length - 2 && (e[c + 1].theme = "b"), n = f.find(n._filterSource);
                st(e, "#app-panel-info-view" + (l ? "-standalone" : ""), {
                    position: l,
                    className: "app-panel-info-view"
                })
            },
            deletePage: function(t) {
                typeof t == "string" && (t = n.pageInfo(t));
                var r = $("#" + t.id),
                    u = t.dataView,
                    i;
                u.dispose();
                r.page("destroy").remove().empty();
                i = n._modalDataViews.indexOf(t.id);
                i != -1 && n._modalDataViews.splice(i, 1);
                i = n._pages.indexOf(t);
                i != -1 && n._pages.splice(i, 1)
            },
            modalDataView: function(n, t) {
                var i = this,
                    r, u;
                t != !1 && i.busy() || (n && i.busy(!0), t && setTimeout(function() {
                    n != d() && i.modalDataView(n, !1)
                }), n ? (r = i.pageInfo(n), u = i.page(n), fs && (r.text = fs, fs = null), r.dataView._lookupInfo || (r.dataView._isModal = !0), i._modalDataViews.indexOf(n) == -1 && i._modalDataViews.push(n), i.changePage(n)) : ($(i._modalStack).each(function() {
                    i.deletePage(this)
                }), i._modalStack = []))
            },
            unloadPage: function(n, t) {
                var i = this.pageInfo(n),
                    u;
                if (i && (u = this._modalDataViews.indexOf(i.id), u >= 0)) {
                    var o = i.dataView,
                        s = f.find(o._parentDataViewId),
                        r = this.pageInfo(t),
                        e = r ? this._modalDataViews.indexOf(r.id) : -1;
                    (r && (s == r.dataView || r.home) || t.attr("id") == "Main" || e >= 0 && u > e) && this._modalStack.indexOf(i) == -1 && this._modalStack.push(i)
                }
            },
            sidebar: function() {
                return ie()
            },
            desktop: function() {
                return !s
            },
            rowContext: function(n, t) {
                yo(n, t)
            },
            animate: function() {
                return lu()
            },
            clearHtmlSelection: function(n) {
                dr(n)
            },
            lastTouch: function() {
                return yi
            },
            syncEmbeddedViews: function(n) {
                or(n)
            },
            animatedScroll: function(n, t, i) {
                he(n, t, i)
            },
            scroll: function(n, t) {
                si(n, t)
            },
            configureFilter: function(t) {
                n.contextScope(t.scope);
                ku(t);
                n.contextScope(null)
            },
            pointer: function() {
                return s ? "touch" : "mouse"
            },
            busy: function(n) {
                var i = this,
                    r = i._busy == !0,
                    t;
                if (arguments.length == 1) i._busy = n, t = i._glassPain, t || (t = i._glassPain = $('<div class="app-glass-pane"><\/div>').on("touchstart pointerdown mousedown", function(n) {
                    t.addClass("app-glass-pane-reject");
                    n.preventDefault();
                    n.stopPropagation()
                })), n ? t.is(".app-glass-pane-active") || t.addClass("app-glass-pane-active").appendTo(e) : t.detach().removeClass("app-glass-pane-reject app-glass-pane-active");
                else return i._busy == !0
            },
            executeInContext: function(t, i, r) {
                if (!n.busy()) {
                    var u = [];
                    n.navContext(u);
                    $(u).each(function() {
                        var n = this;
                        if (!r && (t && n.icon == t || !t && n.text == i) || r && r == n.path) return hi(n), !1
                    })
                }
            },
            navigate: function(t) {
                typeof t == "string" ? (t.match(/^#/) && (t = t.substring(1)), n.changePage(t)) : t.id && $("#" + t.id).length ? ($("#" + t.id).trigger("navigating.app"), n.changePage(t.id)) : t.href && pb(t.href, t.transition)
            },
            changePage: function(t, i) {
                var b;
                d() != t && n.busy(!0);
                var c = r.activePage,
                    k, e = c && this.pageInfo(c.attr("id")),
                    f = this.pageInfo(t),
                    p = $.Event("navigating.app");
                if (f && (bk(f), f.navigating ? f.navigating = !1 : ($("#" + t).trigger(p), p.isDefaultPrevented() && (f.initialized = !1, f.navigating = !0))), vt(), th(!0), this.pageInit(t)) {
                    k = this.page(t).css("padding-top", f.isModal ? 0 : c.css("padding-top"));
                    var w = o.pageTransition,
                        u = this.pageInfo(t),
                        a = u.home ? "none" : u.transition || w,
                        g = r.navigate.history,
                        v, s, l, y = u.navigateInfo;
                    if (y) {
                        u.navigateInfo = null;
                        r.navigate(y.href, {
                            transition: y.transition
                        });
                        return
                    }
                    s = u.replaceUrl;
                    e && e.deleted && (h.location.replace("#" + t), wf(function() {
                        var t = n.dataView();
                        t._doneCallback = e.dataView._doneCallback;
                        t._cancelCallback = e.dataView._cancelCallback;
                        n.deletePage(e)
                    }));
                    u.isModal ? a = "none" : wi(c) && (a = "fade");
                    r.changePage("#" + t, {
                        changeHash: !(i == !1) && !u.home,
                        transition: a
                    });
                    v = g.stack;
                    l = v[v.length - 1];
                    s && (u.replaceUrl = null, b = r.path.makeUrlAbsolute(s, r.path.documentBase), $("#" + t).attr("data-url", s), l.hash != "#advanced-search" && r.navigate.navigator.squash(s), l.url = b);
                    u.home && (l.transition = w, r.path.documentBase.hrefNoHash = r.path.documentBase.hrefNoSearch, r.path.documentBase.href = r.path.documentBase.hrefNoSearch + r.path.documentBase.hash)
                }
            },
            title: function() {
                return document.title
            },
            navContext: function(t, r) {
                var o = this,
                    e = o.contextPageInfo(),
                    p = e,
                    u = e && e.dataView,
                    l = u,
                    s = l && l.extension(),
                    y = u && u.get_useCase(),
                    c = u && u.extension(),
                    a = !0,
                    v = -1;
                __designerPort && !t.isSideBar && t.push({
                    text: "Design",
                    system: !0,
                    icon: "glyphicon-edit",
                    callback: $app.loadDesigner
                }, {});
                c && (r || c && c.context(t), e.dataView._parentDataViewId && (e = o.pageInfo(e.dataView._parentDataViewId), u = e.dataView, v--));
                !s || s.inserting() || s.lookupInfo() || $(o._pages).each(function() {
                    var h = this,
                        e = h.dataView,
                        l = e && e.extension(),
                        c, s = !1;
                    e && (c = !e._hidden && !e._parentDataViewId, c && (u && u._filterSource ? (c = f.find(u._filterSource) == e, s = c, c || (c = f.find(e._filterSource) == u)) : c = e._filterSource ? f.find(e._filterSource) == u : !1));
                    !c || y || h.external || (a && (r || t.push({}), a = !1), s || o.contextScope() && s || e._autoHide == 0 && !u.extension().commandRow() || t.push({
                        text: s ? i.Back : h.text,
                        icon: s ? "back" : null,
                        count: s ? null : l && (!l._reset || n.pageInfo(e).echoInitialized) ? e._totalRowCount : null,
                        callback: s ? function() {
                            es.go(v)
                        } : function() {
                            o.changePage(h.id)
                        },
                        system: !0,
                        navigateTo: s ? "master" : "detail",
                        pageTransition: !s,
                        sidebarCollapse: s ? null : "detail",
                        context: h && h.id,
                        activator: h && h.activator
                    }))
                });
                t.isSideBar || t.isTaskAssistant || (t.length && t.push({}), kh || (kh = {
                    text: i.More,
                    system: !0,
                    toolbar: !1,
                    icon: !1,
                    callback: function() {
                        d() == "taskassistant" ? bi() : eg()
                    }
                }), ut.siteContent && (fi || (fi = {
                    text: "Edit",
                    system: !0,
                    callback: by
                }, fi.isStatic = !0, fi.icon = "glyphicon-edit", fi.desc = "Page", dh = {
                    text: "Properties",
                    system: !0,
                    callback: hd
                }, dh.icon = "glyphicon-wrench"), fi.disabled || (t.push(fi), t.push(dh), t.push({}))), t.push(kh), ut.help && !h.location.pathname.match(/\/help(\/|$)/) && oi && (bh || (bh = {
                    text: ui.HelpLink,
                    system: !0,
                    toolbar: !1,
                    icon: "info",
                    callback: function() {
                        oi.help()
                    }
                }), t.push(bh)))
            },
            refreshAppButtons: function(t, u) {
                var ht = this,
                    ct = wi(),
                    d = ht._title,
                    ni = d.is(".app-hidden"),
                    ti = d.removeClass("app-hidden").offset().left + d.outerWidth() - 1,
                    y, s, ut = n._contextButton,
                    g = [],
                    p, h = [],
                    nt = {
                        search: ri.PerformAdvancedSearch,
                        user: be
                    },
                    k, w = [],
                    tt = [],
                    lt, at, vt, yt, pt, c = n.dataView(),
                    ft = 0,
                    a, wt = u && u.buttonBars || r.activePage.find(".app-bar-buttons"),
                    it = u && u.layout || r.activePage.find("[data-layout]"),
                    b = c && n.content(c._id).prevAll(".app-bar-actions"),
                    et, bt, kt, ot, dt, gt, rt, v, st;
                if (ni && d.addClass("app-hidden"), (!u || u.toolbar) && (gi() ? ut.show().attr("title", ri.HideAdvancedSearch).addClass("ui-icon-carat-u").removeClass("ui-icon-dots") : (ut.attr("title", i.More).removeClass("ui-icon-carat-u").addClass("ui-icon-dots"), t.length && ut.show()), !ct && (od(), ht._toolbarButtons.each(function() {
                        y = $(this);
                        y.show();
                        y.offset().left > ti && g.push(y);
                        y.hide()
                    }), p = g.length, p > 0))) {
                    for (dt = !c || !c.get_showActionBar() || c.get_isForm(), $(t).each(function() {
                            var n = this,
                                t;
                            s = n.icon;
                            t = n.toolbar != !1 && s != "dots" && s != "back";
                            s && (dt || n.uiScope == "ActionBar" && (s == "plus" || s == "edit") || n.system && s != "info") && !ps(s) && (s == "search" ? pt = !0 : s == "refresh" ? at = !0 : s == "phone" ? lt = !0 : s == "mail" ? yt = !0 : s == "eye" && t ? vt = !0 : t && h.indexOf(s) == -1 ? h.push(s) : s = null, s && (nt[s] = n.text), n.uiScope == "ActionBar" && tt.push(s))
                        }), yt && h.push("mail"), lt && h.push("phone"), vt && h.push("eye"), at && h.push("refresh"), h.length && (!c || c.get_isGrid() && !c.editing()) && o.promoteActions ? (ot = h.indexOf("plus"), ot > 0 && (h.splice(ot, 1), h.unshift("plus")), k = h[0], c && n.pageInfo(c._id).loading || !n.promo(k, nt[k]) || (n.promo().data("icon-list", {
                            icons: h.slice().reverse(),
                            labels: nt
                        }), w.push(k), h.splice(0, 1))) : gi() ? ei() : n.promo(!1), pt && (h.length < p ? h.push("search") : h[p - 1] = "search"), we && h.length < p && l.width() > 767 && h.push("user"); tt.length > 0;) s = tt[0], tt.splice(0, 1), h.indexOf(s) != -1 && h.splice(h.indexOf(s), 1);
                    for (h.length < p && (ft = p - h.length), a = 0; a < ft; a++) $(g[a]).hide();
                    while (a < p) y = $(g[a]), s = h[a - ft], gt = y.data("icon"), y.attr("title", nt[s]), w.push(s), s == "ok" && (s = "check"), y.removeClass("ui-icon-" + gt).addClass("ui-icon-" + s).data("icon", s).show(), a++
                }
                for (wt.length && wt.each(function() {
                        var r = $(this),
                            n, o, l, f, u, h, a, s, y, p;
                        if (r.is(":visible"))
                            if (r.children().remove(), rt) r.append(rt.html()).toggleClass("app-bar-buttons-md", rt.is(".app-bar-buttons-md"));
                            else if (rt = r, s = c && c._isWizard, v || (v = [], $(t).each(function() {
                                var n = this,
                                    t = n.icon;
                                !n.system && t != "dots" && n.text && n.uiScope == "Form" && (v.push(n), n.command == "Cancel" && (f = v.length - 1))
                            })), s && (v = v.reverse(), f != null && (f = v.length - 1 - f)), u = r.width(), s && (v.splice(0, 0, {
                                text: i.Prev,
                                path: "wizard-prev",
                                classNames: "app-btn-has-glyph"
                            }, {
                                text: i.Next,
                                path: "wizard-next",
                                classNames: "app-btn-has-glyph"
                            }), f != null && (f += 2, cancelButton = v[f], v.splice(f, 1), u > 375 && v.splice(0, 0, cancelButton))), $(v).each(function() {
                                var n = this,
                                    t = n.classNames,
                                    i = $('<a class="ui-btn ui-corner-all ui-mini"/>').text(n.text).attr("data-action-path", n.path).appendTo(r);
                                t && i.addClass(t)
                            }), cu("status", {
                                layout: it
                            }), n = r.toggleClass("app-bar-buttons-md", u >= 768).find(".ui-btn").last(), n.length && (y = r.offset().left + u, p = n.offset().left + n.outerWidth() - parseInt(n.css("margin-right")) - 1, n.position().left + n.outerWidth() - 1 > u + 2 && (r.find(".ui-btn").css("min-width", "8em"), n.length && n.position().left + n.outerWidth() - 1 > u + 2))) {
                            if (r.find(".ui-btn").css("min-width", "4em"), n.length && n.position().left + n.outerWidth() - 1 > u + 2 && s && r.find(".app-btn-has-glyph").text("").css("min-width", "2em"), n.length && n.position().left + n.outerWidth() - 1 > u + 2)
                                for (o = $('<a data-action-path="more" class="ui-btn ui-corner-all ui-mini app-btn-more"/>').html("&nbsp;").attr("title", i.More).appendTo(r); n.length && o.position().left + o.outerWidth() - 1 > u + 2;) n = n.hide().prev();
                            e.is(".app-buttons-text-only") || (h = 0, l = r.find(".ui-btn:visible").each(function() {
                                h += $(this).outerWidth(!0)
                            }), a = Math.ceil((u - h) / (l.length - (o ? 1 : 0))), r.find(".ui-btn:visible:not(.app-btn-more)").each(function() {
                                var n = $(this);
                                n.width(n.width() + a)
                            }))
                        }
                    }), it.length && (st = {}, it.find('[data-control="action"]').each(function() {
                        var r = $(this),
                            t = it.attr("data-input-container"),
                            n, i;
                        n = st[t];
                        n || (n = f.find(t), st[t] = n);
                        n && (i = n.findAction(r.attr("data-action")), i && r.toggleClass("app-disabled", !n._isActionAvailable(i)))
                    })); w.length;)
                    if (a = 0, w[0] == "user") w.splice(0, 1);
                    else
                        while (a < t.length) w.length && t[a].icon == w[0] ? (t.splice(a, 1), w.splice(0, 1)) : a++;
                    (!u || u.toolbar != !1) && b && b.length && !ct && (et = b.find("h3").next(), bt = Math.floor(et.offset().left) + et.outerWidth(!0), kt = Math.floor(b.offset().left) + b.outerWidth() - 8, lw(c, b.find(".app-bar-controls"), bt, kt, !0, k))
            },
            endModalState: function(t, i) {
                if (!b) {
                    b = !0;
                    var r = n.page(i._id);
                    wi(r) && (bs(r), r.css("display", "none"));
                    bi()
                }
            },
            renderContext: function(n, t, r) {
                var o = !1,
                    s, h, u, e, f = {};
                $(t).each(function() {
                    var a, b, v;
                    if (!r || r(this)) {
                        var i = this,
                            h = i.icon,
                            y = ps(h),
                            l = h == "check" || y ? "false" : h == "ok" ? "check" : h,
                            e = $("<li/>").attr({
                                "data-icon": !l && i.pageTransition ? "false" : l,
                                "data-theme": i.theme || "a"
                            }).appendTo(n),
                            u, c = i.sidebarCollapse,
                            p = !1,
                            w;
                        i.callback || i.dataRel ? (u = $("<a/>").appendTo(e).text(i.text).data("context-action", i), i.count != null && $('<span class="ui-li-count"/>').appendTo(u).html(i.count), i.dataRel && u.attr("data-rel", i.dataRel), i.isStatic && u.addClass("app-summary-btn")) : i.href ? (e.attr("data-icon", l), u = $('<a rel="external"/>').appendTo(e).text(i.text).data("context-action", i).attr("href", i.href)) : i.isStatic ? e.html(i.text) : i.src ? $('<img class="ui-li-thumb"/>').appendTo(e.addClass("ui-li-has-thumb")).attr({
                            src: i.src
                        }) : (o ? e.remove() : (w = e.attr("data-role", "list-divider").html(i.text), !i.isStatic && i.text && i.instruction != !1 && w.addClass("app-list-instruction")), o = !0, p = !0);
                        p || (o = !1);
                        i.desc && (a = i.display == "before", a && $('<p class="app-item-desc app-item-desc-before"/>').insertBefore((u ? u : e).contents()).text(i.desc), b = $('<p class="app-item-desc"/>').appendTo(u ? u : e).text(i.desc), a && b.addClass("app-item-desc-after"));
                        i.wrap && e.addClass(i.callback ? "app-wrap-text" : "app-wrap");
                        y && (v = $('<span class="glyphicon"> <\/span>').addClass(h), s == null && (s = n.closest(".app-sidebar, .ui-content.app-page-tasks").length > 0), s ? v.insertBefore(u.contents()) : v.appendTo(u), e.addClass("app-has-glyphicon"));
                        i.disabled && e.addClass("ui-disabled");
                        i.itemClassName && e.addClass(i.itemClassName);
                        i.linkClassName && u.addClass(i.linkClassName);
                        i.keepOpen && (u.addClass("app-keep-open"), i.animate || i.count || u.addClass("app-btn-icon-transparent"));
                        i.animate && u.addClass("app-animated app-animation-spin");
                        (i.selected || h == "check") && $(pi).appendTo(u);
                        c && t.isSideBar && (f[c] || (f[c] = []), f[c].push(e));
                        (i.transition && !i.reverse || i.pageTransition) && $('<span class="glyphicon glyphicon-menu-right app-transition-icon"/>').appendTo(u.addClass("app-has-transition-icon"))
                    }
                });
                for (h in f)
                    if (u = f[h], u.length > 4) {
                        for (e = 3; e < u.length; e++) u[e].hide();
                        $("<a/>").appendTo($('<li data-icon="false" data-theme="a"/>').insertBefore(u[3])).text("+" + (u.length - 3) + " " + i.More.toLowerCase()).data("context-action", {
                            callback: rd
                        })
                    }
            },
            tabs: function(n, u) {
                function e(n, t) {
                    if (!n || n == "page" || n == "user") return null;
                    var r = aw(u.id) || [],
                        i, f;
                    if (n = n.toString(), $(r).each(function(t) {
                            var r = this;
                            if (r.oid == n) return i = r, f = t, !1
                        }), arguments.length == 1) return i ? i.tab : null;
                    i ? r.splice(f, 1) : i = {
                        oid: n
                    };
                    i.tab = t;
                    r.push(i);
                    r.length > 10 && r.splice(0, 1);
                    aw(u.id, r)
                }

                function s() {
                    function a() {
                        n.find(".app-tab-active").is(":visible") || n.find(".app-tab-more").addClass("ui-btn-active")
                    }
                    var i = u.tabs,
                        l = u.scope,
                        y = u.placeholder || $((i[0].content || [])[0]),
                        s = u.container || $('<div class="app-tabs ui-header ui-bar-inherit"><\/div>').insertBefore(y).addClass(u.className),
                        n = $("<ul/>").appendTo(s),
                        h = i[0].text,
                        c;
                    $(i).each(function() {
                        var n = this;
                        n.selected && (h = n.text);
                        $(n.content).each(function() {
                            $(this).addClass("app-tab-content")
                        })
                    });
                    u.id || (u.id = y.attr("id"), u.id && (u.id += "_tabs"));
                    u.id && (s.attr("id", u.id), h = e(l) || l == "page" && wu(u.id) || l == "user" && g(u.id) || h);
                    $(i).filter(function() {
                        return this.text == h
                    }).length || (h = i[0].text);
                    $(i).each(function(t) {
                        var i = this,
                            f = $('<a class="ui-btn"/>').appendTo($("<li/>").appendTo(n)).text(i.text).attr("data-text", i.text),
                            r = i.content,
                            u;
                        i.active = i.text == h;
                        i.active && (t > 0 && (r && r.length && $(r[0]).is('[data-container="tab"]') && (r = r.children()), $(r).each(function() {
                            var n = this.style;
                            if (n && n.display != "none") return u = !0, !1
                        })), u || t == 0 ? f.addClass("ui-btn-active app-tab-active") : (h = null, i.active = !1))
                    });
                    h || (i[0].active = !0, n.find(".ui-btn").first().addClass("ui-btn-active app-tab-active"));
                    n.on("vclick", function(h) {
                        var l = $(h.target).closest("a"),
                            et = n.find(".app-tab-active"),
                            b = s.parent(),
                            y = b.find(".app-stub,.app-stub-main"),
                            d = arguments.length != 2 ? null : arguments[1].selectedTab,
                            p = c || d || l.attr("data-text"),
                            it = r.activePage,
                            w, k = 0,
                            rt, tt, ut;
                        if (t.cancel()) {
                            if (d && (c = d), l.length)
                                if (!c && l.is(".app-tab-more")) n.find(".ui-btn").removeClass("ui-btn-active"), v(l, function() {
                                    l.addClass("ui-btn-active");
                                    tt = [];
                                    $(u.tabs).each(function(t) {
                                        var i = this;
                                        tt.push({
                                            text: i.text,
                                            icon: i.active ? "check" : !1,
                                            wrap: !0,
                                            context: {
                                                text: i.text,
                                                index: t
                                            },
                                            linkClassName: "app-btn-icon-transparent",
                                            callback: function(t) {
                                                l.removeClass("ui-btn-active");
                                                c = t.text;
                                                $(n.find(".ui-btn")[t.index]).trigger("vclick")
                                            }
                                        })
                                    });
                                    nt({
                                        items: tt,
                                        anchor: l,
                                        afterclose: function() {
                                            setTimeout(function() {
                                                l.removeClass("ui-btn-active");
                                                n.find(".app-tab-active").addClass("ui-btn-active");
                                                a()
                                            }, 50)
                                        }
                                    })
                                });
                                else {
                                    if (u.stickyHeader && (ut = vt()), n.find(".ui-btn").removeClass("app-tab-active ui-btn-active"), l.addClass("app-tab-active ui-btn-active"), $(i).each(function() {
                                            var n = this;
                                            n.active && (p == n.text && (rt = !0), $(n.content).each(function() {
                                                k += $(this).outerHeight(!0)
                                            }));
                                            n.active = n.text == p;
                                            n.active && (w = n)
                                        }), rt) {
                                        c = null;
                                        a();
                                        return
                                    }
                                    u.scope == "page" ? wu(u.id, p) : u.scope == "user" ? g(u.id, p) : e(u.scope, p);
                                    k && y.length && y.offset().top + y.outerHeight() - k < b.offset().top + b.height() && y.height(k + y.outerHeight());
                                    bs(it);
                                    c && (c = null, f(s));

                                    function ft() {
                                        o(s);
                                        a();
                                        w.callback && w.callback();
                                        u.change && (ur = !1, u.change(w), li(), u.restoreScrolling != !1 && uo(it));
                                        u.stickyHeader && ut && ir();
                                        lp(b, y)
                                    }!1 && w.content ? ft() : (vt(), setTimeout(function() {
                                        ft()
                                    }))
                                }
                            return !1
                        }
                    });
                    s.data({
                        "data-tabs": u.tabs,
                        options: u
                    });
                    o(s);
                    f(s, !1)
                }

                function h(n) {
                    n || (n = u.container ? u.container.find(".app-tabs") : r.activePage.find(".app-wrapper .app-tabs"));
                    n.find("ul").off();
                    n.data({
                        "data-tabs": null,
                        options: null
                    }).remove()
                }

                function o(n) {
                    n || (n = r.activePage.find(".app-wrapper .app-tabs"));
                    $(n).each(function() {
                        $($(this).data("data-tabs")).each(function() {
                            var n = this;
                            $(n.content).each(function() {
                                $(this).toggleClass("app-tab-active", n.active)
                            })
                        })
                    })
                }

                function f(n) {
                    n || (n = (u && u.page || r.activePage).add($(".ui-page.ui-page-active .app-bar-header.ui-header-fixed")));
                    var t = n.find(".app-tabs");
                    t.find("ul").css("visibility", "");
                    t.each(function() {
                        var u = $(this),
                            r = u.width(),
                            s = u.data("data-tabs"),
                            f = u.offset().left + sr(u.css("padding-left")),
                            t, n, o, e;
                        if (r && (u.find(".app-tab-more").parent().remove(), t = u.find(".ui-btn").css({
                                "padding-left": "",
                                "padding-right": "",
                                "min-width": "",
                                "max-width": "",
                                display: ""
                            }), $(s).each(function(n) {
                                var r = this,
                                    u = !0,
                                    i = $(r.content);
                                i.length == 1 && $(i[0]).is('[data-container="tab"]') && (i = $(r.content).children());
                                i.each(function() {
                                    var t = this,
                                        n = t.style;
                                    if (n && n.display == "none") return u = !1, !1
                                });
                                u || (t[n].style.display = "none")
                            }), n = t.last(), n.offset().left - f + n.outerWidth() > r && (t.css("min-width", "8em"), n.offset().left - f + n.outerWidth() > r && (t.css("min-width", "4em"), n.offset().left - f + n.outerWidth() > r && (t.css({
                                "padding-left": "1em",
                                "padding-right": "1em"
                            }), n.offset().left - f + n.outerWidth() > r && (t.css({
                                "padding-left": ".5em",
                                "padding-right": ".5em"
                            }), n.offset().left - f + n.outerWidth() > r))))))
                            for (n = $('<a class="ui-btn app-tab-more"/>').appendTo($("<li/>").appendTo(n.closest("ul"))).text(i.More).css({
                                    "min-width": "4em",
                                    "padding-left": "0.5em",
                                    "padding-right": "0.5em"
                                }), e = t.length - 1; n.offset().left - f + n.outerWidth() > r;) {
                                if (!e) {
                                    $(t.get(0)).css("max-width", r - n.outerWidth() - 12);
                                    break
                                }
                                o = $(t.get(e)).css("display", "none");
                                o.is(".app-tab-active") && n.addClass("ui-btn-active");
                                e--
                            }
                    })
                }
                switch (n) {
                    case "create":
                        u.tabs && u.tabs.length > 1 && s(u);
                        break;
                    case "destroy":
                        h();
                        break;
                    case "fit":
                        f()
                }
            },
            refreshMenuStrip: function() {
                var f;
                pt.nodes || dn();
                var t = this._menuStrip,
                    e = t && t.strip,
                    p = this._title,
                    ut = p.is(".app-hidden"),
                    b = p.removeClass("app-hidden").offset().left,
                    k = this._toolbar.find(".app-btn-cluster-right .ui-btn").filter(ry).first(),
                    w = (k.length ? k.offset().left : this._toolbar.outerWidth()) - 10,
                    d = pt.nodes,
                    c, y, o, ft, g, l, u, nt, tt;
                if (!e) {
                    for (t = this._menuStrip = {
                            strip: $('<div class="app-menu-strip"><\/div>').appendTo(this.toolbar())
                        }, e = t.strip, c = $("<ul/>"), f = 0; f < d.length; f++) {
                        var a = d[f],
                            u = $("<li/>").appendTo(c),
                            it = $('<a class="ui-btn"/>').appendTo(u).text(a.title).attr({
                                title: a.description
                            }).data("data-node", a);
                        a.children && it.addClass("app-has-children");
                        a.selected && it.addClass("app-selected")
                    }
                    t.links = c.find(".ui-btn");
                    t.items = t.links.parent();
                    t.more = $('<a class="ui-btn app-has-children"/>').appendTo($("<li/>").appendTo(c)).text(i.More);

                    function rt(n) {
                        var i = n.url,
                            t;
                        i && (t = i.match(ts), t ? h.open(t[2], t[1]) : h.location.href = i)
                    }
                    c.appendTo(e).on("vclick contextmenu", function(t) {
                        var u = $(t.target).closest(".ui-btn"),
                            f = u.is(".app-selected"),
                            i = u.data("data-node"),
                            o = i && i.url && !i.children;
                        if (u.length == 0) return !1;
                        if (o) {
                            if (t.type == "contextmenu") return !1;
                            i.url && !i.url.match(ts) && tu()
                        }
                        return v(u, function() {
                            if (o) rt(i);
                            else {
                                f || u.addClass("app-selected");
                                var t = $('<div class="app-popup app-popup-listview app-popup-menu" data-theme="a"><\/div>'),
                                    h = $('<div class="ui-panel-inner" tabindex="0"><\/div>').appendTo($('<div class="ui-content"><\/div>').appendTo(t)),
                                    a = $('<ul class="app-listview"/>').appendTo(h),
                                    c, v, l, y = 1;

                                function p(n, t) {
                                    if (n.title) {
                                        var i = $('<li data-icon="false"/>').addClass("app-depth" + t).appendTo(a),
                                            r = $("<a/>").appendTo(i).text(n.title).attr("title", n.description).data("data-context", n);
                                        n.selected && (v = r)
                                    }
                                    $(n.children).each(function() {
                                        p(this, t + 1)
                                    })
                                }
                                i || (y = 0, i = {
                                    children: []
                                }, e.find("li:hidden a").each(function() {
                                    i.children.push($(this).data("data-node"))
                                }));
                                p(i, y);
                                v && $(pi).appendTo(v).parent().addClass("app-selected").parent().attr("data-icon", "false");
                                a.listview().on("vclick", function(i) {
                                    var r = $(i.target).closest(".ui-btn"),
                                        u = r.data("data-context");
                                    return nr(r) && u && u.url && n.callWithFeedback(r, function() {
                                        c = u;
                                        fu(t)
                                    }), !1
                                });
                                t.popup({
                                    history: s,
                                    transition: rc(!0),
                                    tolerance: 3,
                                    arrow: "t,l,r,b",
                                    overlayTheme: "b",
                                    positionTo: u,
                                    beforeposition: function() {
                                        var i = r.getScreenHeight(),
                                            u = kr(),
                                            f = t.outerHeight(!0),
                                            n;
                                        f >= i - u && (h.css("height", i - u * 2.25), s || (n = h.width() + 20, h.css({
                                            width: n
                                        }), t.css({
                                            minWidth: n,
                                            maxWidth: "auto"
                                        })))
                                    },
                                    afteropen: function() {
                                        ca(null, t);
                                        s || h.focus()
                                    },
                                    afterclose: function() {
                                        f || u.removeClass("app-selected");
                                        c && c.url && !c.url.match(ts) && tu();
                                        gi() && ei();
                                        setTimeout(function() {
                                            as();
                                            cb(a);
                                            lh(t);
                                            h.off();
                                            c && rt(c)
                                        }, 100)
                                    }
                                });
                                ks(t);
                                uw(t, !0);
                                t.popupopen().closest(".ui-popup-container").css("marginTop", sr(u.css("fontSize")) * 2 / 3);
                                l = h.find(".ui-btn.app-selected").parent();
                                l.length && l.position().top + l.outerHeight() - 1 > h.outerHeight() && h.scrollTop(l.position().top - (h.outerHeight() - l.outerHeight()) / 2)
                            }
                        }), !1
                    })
                }
                if (ut && p.addClass("app-hidden"), l = w - b, l != e.data("tested-width") || !e.is(":visible"))
                    if (e.data("tested-width", l), l >= 50 && e.attr("data-enabled") != "false")
                        for (ro(!0), e.width(l).css({
                                left: b
                            }), y = t.items, o = t.more.removeClass("app-selected").parent(), ft = o.find(".ui-btn").text(i.More), o.hide(), y.show(), f = y.length - 1; f >= 0; f--) {
                            if (u = $(y[f]), tt = u.outerWidth(), nt = u.offset().left, nt + tt - 1 >= w && (o.show(), g = o.outerWidth(), u.hide()), u.is(":hidden") && u.find(".app-selected").length && t.more.addClass("app-selected"), !o.is(":visible") || o.offset().left + g - 1 < w) {
                                f <= 1 && !u.is(":visible") && ro(!1);
                                break
                            } else u.hide(), u.find(".app-selected").length && t.more.addClass("app-selected");
                            if (f <= 1) {
                                ro(!1);
                                break
                            }
                        } else ro(!1)
            },
            refreshSideBar: function(t, r) {
                function ut() {
                    (a = !1, o.dataView().get_showViewSelector()) && (fp(r), o.tagged("view-style-grid-disabled") || r.push({
                        text: i.Grid,
                        icon: "grid",
                        selected: k,
                        callback: function() {
                            k || te(s, "Grid")
                        }
                    }), o.tagged("view-style-list-disabled") || r.push({
                        text: i.List,
                        icon: "bullets",
                        selected: g,
                        callback: function() {
                            g || te(s, "List")
                        }
                    }), o.tagged("view-style-cards-disabled") || r.push({
                        text: i.Cards,
                        icon: "cards",
                        selected: d,
                        callback: function() {
                            d || te(s, "Cards")
                        }
                    }), o.tagged("supports-view-style-map") && !o.tagged("view-style-map-disabled") && r.push({
                        text: i.Map,
                        icon: "location",
                        selected: nt,
                        callback: function() {
                            nt || te(s, "Map")
                        }
                    }), n.presenter("enumerate", {
                        id: s,
                        list: tt
                    }), $(tt).each(function() {
                        var n = this;
                        o.tagged("view-style-" + n.name.toLowerCase() + "-disabled") || (n.name == c && (n.selected = !0), r.push(n))
                    }), fp(r))
                }
                var ft = this,
                    et = ie().find(".ui-panel-inner"),
                    y = n.pageInfo(),
                    u = y && y.dataView,
                    p = u,
                    s = u && u._id,
                    e = u && u.get_parentDataView(u),
                    h = [],
                    w = u && u.get_showActionBar(),
                    l = $('.TaskBox.About .Inner .Value, head meta[name="description"]'),
                    b = e && !e._parentDataViewId,
                    a = u && u.get_isGrid(),
                    o = u && u.extension(),
                    c = a && o.viewStyle(),
                    k = c == "Grid",
                    d = c == "Cards",
                    g = c == "List",
                    nt = c == "Map",
                    tt = [],
                    ot = {
                        items: r
                    },
                    it = [],
                    rt = ["back", "check", "info"],
                    v;
                if (b) {
                    while (u && h.indexOf(u) == -1) {
                        if (e && e._dataViewFieldName) break;
                        (u.get_showInSummary() || e && u != e && e.get_showInSummary()) && !u.inserting() && u.extension().commandRow() && h.unshift(u);
                        u.get_isForm() && (u = e);
                        u = f.find(u._filterSource)
                    }
                    $(h).each(function() {
                        n.enumerateFields(this, r)
                    });
                    r.length && (u = h[h.length - 1], v = r[0], v.icon = "info", v.context = u._id, v.callback = kv, r.push({}))
                }
                w && p && (p.extension().context(it, ["ActionBar"]), $(it).each(function() {
                    var t = this,
                        n = t.icon;
                    t.uiScope == "ActionBar" && n && n != "dots" && n != "carat-r" && rt.push(n)
                }));
                $(t).each(function() {
                    var n = this;
                    rt.indexOf(n.icon) != -1 || n.system && n.toolbar == !1 || n.command == "Select" || n.icon == "eye" && (!e || e.get_showInSummary()) || (n.text || r.length) && (n.navigateTo && a && ut(), n.theme = null, n.uiScope == "ActionBar" && w || r.push(n))
                });
                a && ut();
                l.length && b != !1 && (r.length && r[r.length - 1].text && r.push({}), r.push({
                    text: l.is("meta") ? l.attr("content") : l.html(),
                    isStatic: !0,
                    wrap: !0
                }))
            },
            contextPageInfo: function() {
                return n.pageInfo(this._contextScope)
            },
            refreshContext: function() {
                it()
            },
            contextScope: function(n) {
                if (arguments.length == 0) return this._contextScope;
                this._contextScope = n
            },
            contextDataView: function(n) {
                var t, i;
                return n != null && (t = kt(n), t.length) ? f.find(t.attr("data-for")) : (i = this.contextPageInfo(), i ? i.dataView : null)
            },
            showContextMenu: function(t) {
                var i = "#app-panel-context";
                t && (this.contextScope(t.scope), t.scope && (i += "-scope", t.position = "left"));
                yw(i, function() {
                    n.refreshContextMenu(i)
                }, t).panel("toggle")
            },
            refreshContextMenu: function(n, t, r) {
                var s = this,
                    u = $(n),
                    f = u.find(r || "ul"),
                    y = f.outerHeight(),
                    c, a, o = u.is(".app-sidebar"),
                    h, v;
                if (o && (!u.is(":visible") || wi())) {
                    t = [];
                    s.navContext(t);
                    s.refreshAppButtons(t);
                    return
                }
                for (o && !bo && (a = $("<div><\/div>").appendTo(e).css({
                        "z-index": 2e3,
                        position: "absolute",
                        left: 0,
                        top: u.find(".ui-panel-inner").offset().top,
                        width: u.outerWidth(),
                        height: l.height(),
                        "background-color": "#fff"
                    })), y && (c = $("<div><\/div>").height(y).insertAfter(f)), du(f), f.find("a").removeData(), f.find("li").remove(), t || (t = [], t.isSideBar = o, s.navContext(t)), o && (s.refreshAppButtons(t), v = [], this.refreshSideBar(t, v), t = v, t.isSideBar = !0), h = $.Event(o ? "sidebar.app" : "more.app"), h.items = t, h.panel = u, $(document).trigger(h); t.length && !t[t.length - 1].text && !t[t.length - 1].src;) t.splice(t.length - 1);
                t.length || o || t.push({
                    text: i.EmptyContext
                });
                this.renderContext(f, t);
                f.listview("refresh");
                (o || !0) && f.find("a.ui-btn-icon-right").removeClass("ui-btn-icon-right").addClass("ui-btn-icon-left");
                f.find("li.app-wrap").addClass("ui-li-static ui-body-a").find("a").attr({
                    "class": ""
                });
                u.is(".app-reset-scrolling") ? u.find(".ui-panel-inner").scrollTop(0) : rg(u);
                c && c.remove();
                a && a.remove()
            },
            pageShown: function(n) {
                wf(n)
            },
            details: function(i) {
                var r = i.field,
                    u = r._dataView,
                    e = u.extension().commandRow();
                n.show({
                    controller: r.ItemsDataController,
                    view: i.view || "editForm1",
                    filter: [{
                        name: r.ItemsDataValueField,
                        value: i.key || e[r.Index]
                    }],
                    done: function(e) {
                        if (d() == u._id)
                            if (u.get_isForm()) {
                                if (!(e._newRow && e._newRow.length)) {
                                    var o = f.input.methods.lookup._rowToValues(r, e, e.editRow());
                                    t.execute({
                                        dataView: u,
                                        values: o
                                    })
                                }
                                i.done && i.done(e)
                            } else u.sync();
                        else n.dataView().sync()
                    },
                    cancel: i.cancel
                })
            },
            lookup: function(i) {
                var h;
                if (lt(), i.create) {
                    var u = i.field,
                        k = i.dataInput,
                        a = i.value,
                        v = u.ItemsDataTextField,
                        e = u._dataView;
                    n.show({
                        controller: u.ItemsDataController,
                        startCommand: "New",
                        startArgument: u.ItemsNewDataView,
                        filter: e.get_contextFilter(u, e.extension().collect()),
                        defaultValues: a != null && v ? [{
                            name: v,
                            value: a
                        }] : null,
                        done: function(n) {
                            var o = t.methods.lookup._rowToValues(u, n, n.editRow()),
                                i = [];
                            $(o).each(function() {
                                i.push(this.value)
                            });
                            var f = 0,
                                e = u.DynamicItems || u.Items,
                                r = i[1] ? i[1].toString().toLowerCase() : "undefined";
                            if (u.ItemsStyle.match(/AutoComplete|Lookup/))
                                for (;;) {
                                    if (u._dataView.session(u.Name + "_listOfValues_" + r, null), !r.length) break;
                                    r = r.substring(0, r.length - 1)
                                } else $(e).each(function(n) {
                                    if (this[0] == null || this[1].toString().toLowerCase() < r) f = n;
                                    else return !1
                                }), e.splice(f + 1, 0, i);
                            u.ItemsStyle.match(/AutoComplete|Lookup|DropDownList/) ? (t.methods.lookup.focus(k.data("autoComplete", !1)), t.methods.lookup._useItemValue(u, i)) : t.methods.listbox._useItemValue(u, i, !0)
                        }
                    });
                    return
                }
                var o, f = i.field,
                    s = f._dataView,
                    y = f._dataView,
                    p = y.get_contextFilter(f, y.extension().collect()),
                    c, e, l, w = i.query,
                    d = s._allFields[f.AliasIndex],
                    b = d.HeaderText,
                    g = s.editRow();
                if (fo(), !f.ContextFields && (o = n._modalStack.length && n._modalStack[0].dataView, h = r.navigate.history, o && o._lookupInfo && o._lookupInfo.field == f && h.activeIndex < h.stack.length - 1 && h.stack[h.activeIndex + 1].hash == "#" + o._id)) {
                    o._lookupInfo = i;
                    es.go(1);
                    return
                }
                this.modalDataView();
                c = f.ItemsDataController.toLowerCase();
                $find(c) && (c += Sys.Application.getComponents().length);
                e = $create(Web.DataView, {
                    id: c,
                    baseUrl: s.get_baseUrl(),
                    servicePath: s.get_servicePath(),
                    controller: f.ItemsDataController,
                    viewId: f.ItemsDataView,
                    externalFilter: p,
                    filterSource: p.length > 0 ? "options" : null,
                    showSearchBar: !0,
                    showFirstLetters: f.ItemsLetters,
                    searchOnStart: f.SearchOnStart,
                    description: f.ItemsDescription
                }, null, null, $("<p>")[0]);
                l = this.pageInfo(e);
                w && e.viewProp("quickFind", w);
                l.headerText = i.value ? [i.text, b] : b;
                l.resolved = !0;
                e._lookupInfo = i;
                i.value == null || f.ItemsValueSyncDisabled || tc(e, [i.value]);
                e._parentDataViewId = s._id;
                this.modalDataView(l.id, !0)
            },
            show: function(t) {
                var h = t.controller,
                    l = t.view || "grid1",
                    e, c = JSON.stringify(t),
                    i, u, o, s = n._modalStack,
                    f;
                if (o = s.length && s[s.length - 1], f = r.navigate.history, o && o.showSign == c && t.cache != !1 && f.activeIndex < f.stack.length - 1 && f.stack[f.activeIndex + 1].hash == "#" + o.id) {
                    es.go(1);
                    return
                }
                return fo(), $(t.filter).each(function() {
                    var n = this;
                    n.name && (n.Name = n.name);
                    n.value && (n.Value = n.value)
                }), this.modalDataView(), e = h.toLowerCase(), $find(e) && (e += Sys.Application.getComponents().length), i = $create(Web.DataView, {
                    id: e,
                    baseUrl: __baseUrl,
                    servicePath: __servicePath,
                    controller: h,
                    viewId: l,
                    externalFilter: t.filter,
                    showSearchBar: !0,
                    startCommandName: t.startCommand,
                    startCommandArgument: t.startArgument,
                    showActionButtons: t.showActionButtons,
                    exitModalStateCommands: ["Cancel"]
                }, null, null, $("<p>")[0]), i._doneCallback = function(i) {
                    n.pageInfo(i).showSign = null;
                    kk(i);
                    bi(function() {
                        t.done && t.done(i)
                    })
                }, i._ditto = t.defaultValues, i._cancelCallback = t.cancel || bi, u = this.pageInfo(i), u.headerText = t.headerText, u.resolved = !0, u.showSign = c, t.key && tc(i, [t.key]), this.modalDataView(u.id, !0), i
            },
            pageInit: function(n, t) {
                var i = this.pageInfo(n),
                    r, u;
                return i == null ? !1 : (r = i.dataView, u = i.initialized || !i.dataView && i.initialized != !1, r && r._busy()) ? !1 : (i.initialized || (i.initialized = !0, r && (i.requiresInitCallback = !0, t != !1 && dt(!0), i.refreshed == !1 ? (i.refreshed = !0, r.extension().refresh()) : r._loadPage())), u)
            },
            pageShow: function(n) {
                var t;
                if (r.activePage && (r.activePage.find("[data-role='navbar'] a.app-tab-active").addClass("ui-btn-active"), t = this.pageInfo(n), t != null)) {
                    var i = t.dataView,
                        u = i ? i.extension() : null,
                        f = this._modalStack.indexOf(t);
                    f >= 0 && this._modalStack.splice(f, 1);
                    t.initialized || (t.initialized = !0, i && i._loadPage());
                    u && u._reset && u.refresh()
                }
            },
            screen: function() {
                var n = r.window.scrollTop(),
                    t = kr(),
                    i = r.getScreenHeight();
                return {
                    top: n + t,
                    bottom: n + r.getScreenHeight(),
                    height: i - t,
                    width: l.width()
                }
            },
            callWhenVisible: function(n, t) {
                r.activePage.find(n).each(function() {
                    var n = $(this);
                    if (n.is(":visible") && n[0].style.visibility != "hidden") {
                        var i = n.offset().top,
                            u = i + n.outerHeight(),
                            e = w(n),
                            r = e.offset().top,
                            f = r + e.height() - 1;
                        (r <= i && i <= f || r <= u && u <= f || i <= r && f <= u) && t(n)
                    }
                })
            },
            asyncJob: function() {
                return this._asyncJob
            },
            nextAsycJob: function() {
                return ++this._asyncJob
            },
            supports: function(n) {
                switch (n) {
                    case "Map":
                        return this._supportsMap == !0
                }
                return !1
            },
            registerAPI: function(t, i) {
                var r = this,
                    u, e, f;
                if (t == "Map") return r._mapAPI ? i && i() : (e = !!h.location.host.match(/^localhost\b/), f = o.mapApiIdentifier || (e ? "key=AIzaSyAhggwxCKiA2oEdxaRqap4t4-_96ajw_uw" : ""), u = "https://maps.googleapis.com/maps/api/js?&callback=appFactoryCallback", f ? (u += "&" + f, r._mapAPI = !0, h.appFactoryCallback = function() {
                    r._supportsMap = !0;
                    $(document).trigger($.Event("map.init.app"));
                    i && i();
                    h.appFactoryCallback = null
                }, $.getScript(u)) : i && i()), r._mapAPI;
                t != "Charts" || r._chartsAPI || n.registerAPI("Map", function() {
                    $.getScript("https://www.google.com/jsapi", function() {
                        r._chartsAPI = !0;
                        $(document).trigger($.Event("charts.init.app"));
                        i && i()
                    })
                })
            },
            fetchOnDemand: function() {
                function t(n) {
                    n.trigger("vclick")
                }
                if (!ur) {
                    var i = n.dataView();
                    this.callWhenVisible(".dv-load-at-bottom", t);
                    this.callWhenVisible(".dv-load-at-top", t)
                }
                return this
            },
            keyboard: function() {
                return wv()
            },
            callInAnimationFrame: function(n) {
                if (requestAnimationFrame) var t = requestAnimationFrame(function() {
                    n();
                    cancelAnimationFrame(t)
                });
                else n()
            },
            toPixels: function(n) {
                return sr(n)
            },
            stickyHeader: function() {
                var n = this,
                    t = h._stickyHeaderHideInstruction;
                return h._stickyHeaderHideInstruction = !1, requestAnimationFrame(function() {
                    var l = ge(),
                        f = l.attr("data-selector"),
                        u = f ? r.activePage.find(f) : l.find(".app-static-text"),
                        i = n.stickyHeaderBar(),
                        e, o, s = !0;
                    if (!i.is(".app-disabled") && !b && (u.length || f) && !l.is(".app-disabled") && !vf) {
                        var v = w(),
                            y = Math.ceil(u.length ? u.offset().top : -1),
                            h, c, a, p = 0;
                        y < v.offset().top && (f || u.height() > 0) && (i.is(":visible") ? s = !1 : (s = !1, i.show().width(v.width() - parseInt(i.css("padding-left")) - parseInt(i.css("padding-right"))), r.activePage.find(".ui-content").children().each(function() {
                            var n = $(this);
                            n.is(".app-tabs,.app-bar-actions,.app-bar-header") && n.css("display") != "none" && (p += n.outerHeight())
                        }), c = u.closest("li").find("label").first().text(), o = i.find(".app-bar-label"), c != o.data("label") && (c ? o.text(c).show() : o.hide(), o.data("label", c)), e = i.css("top", kr() + p - 1).find(".app-bar-text"), f ? (a = l.html(), a != e.data("html") && (e.data("html", a).html(a).css("white-space", "normal"), t && i.find(".app-view-instruction,.app-group:not(.app-group-fixed)").addClass("app-hidden").parent().addClass("app-bar-text-instruction-hidden"))) : (h = u.text().trim(), h ? h != e.data("text") && e.data("text", h).text(h).css("white-space", "") : s = !0), i.outerHeight() + i.offset().top < u.outerHeight() + y && (i.hide(), s = !0)))
                    }(s || $(document.activeElement).closest("[data-input]").length) && i.hide()
                }), n
            },
            wait: function() {},
            start: function(t) {
                function g(n) {
                    return $(n).each(function() {
                        return this.url && this.url.toLowerCase() == location.pathname.toLowerCase() ? (a = this, !1) : this.children && (g(this.children), a) ? (this.selected = !0, !1) : void 0
                    }), null
                }

                function tt() {
                    var n = t && $(t.selector).data("scripts");
                    n && eval(n);
                    $(document).trigger($.Event("start.app"))
                }

                function it() {
                    n.tabs("create", {
                        tabs: y,
                        className: "app-tabs-echo",
                        scope: "page",
                        change: function() {}
                    })
                }
                var d, a;
                if (t || this._appLoaded && this._pageCreated) {
                    $(".ui-loader").remove();
                    r.ignoreContentEnabled = !0;
                    var i = n.pageMenu(t && t.pageId),
                        b = 0,
                        l, k = $(t && t.selector || "#PageContent"),
                        u = k.attr("data-href"),
                        w = k.find('div[data-app-role="page"]').each(function(r) {
                            var o = $(this),
                                l = o.find('> div[data-role="content"]'),
                                h = o.attr("data-content-framework");
                            h && o.attr("data-enhance", "false");
                            l.length || (l = $('<div data-role="content"><\/div>'), o.contents().appendTo(l), l.appendTo(o));
                            o.attr({
                                "data-role": "page",
                                "data-app-role": null
                            }).addClass("app-page-scrollable").appendTo(e);
                            var y = f.eval(o.attr("data-page-header")),
                                c = vw(o),
                                s = {
                                    text: (y != "false" ? y : "") || c.text || n.title(),
                                    description: c.description,
                                    activator: c,
                                    url: u,
                                    transition: t && t.transition
                                },
                                a = o.attr("id") || fy(u || location.pathname) + (r > 0 || u ? r + 1 : "") || "_root",
                                p, v;
                            s.headerText = s.text;
                            o.find('div[data-role="content"]').contents().wrapAll('<div class="app-page-content' + (h ? " app-content-framework app-" + h : "") + '"><\/div>');
                            o.page();
                            o.attr("id", a);
                            s.id = a;
                            n.pageInfo(s);
                            v = gs(o, !1).find(".app-page-content");
                            h && (o.attr("data-page-header", "false"), f.configureFramework(h, v, function(n) {
                                pe = n
                            }));
                            v.find(".carousel").on("swipeleft swiperight", function(n) {
                                $(n.target).closest(".carousel").find((n.type == "swipeleft" ? ".right" : ".left") + ".carousel-control").trigger("click")
                            });
                            c.text && (b++, p = $('<a class="app-action-navigate" />').attr("href", "#" + a).text(c.text).appendTo($("<li/>").appendTo(i)), s.description && $("<p/>").appendTo(p).text(s.description));
                            pc(o)
                        });
                    w.length && (l = w.first(), b == 0 && l.attr("data-activator") != "false" && $('<a class="app-action-navigate" />').attr("href", "#" + l.attr("id")).text(l.attr("data-page-header") || ev.SeeAlso).appendTo($("<li/>").appendTo(i)), i.is(".ui-listview") && i.listview().listview("refresh"));
                    d = pt.nodes;
                    t || g(d);
                    a && !w.length && i.find("a").length == 0 && $(a.children).each(function() {
                        $('<a rel="external"/>').attr("href", this.url).appendTo($("<li/>").appendTo(i)).text(this.title)
                    });
                    var rt = this,
                        s = t ? n.page(t.pageId) : r.activePage,
                        v = s.find("a.app-action-navigate"),
                        ut = location.href.match(/#(.+)$/),
                        c, y = [],
                        p, nt = this._pages[0];
                    v.length == 1 && (t || o.initialListMode == "SeeAll" || !nt.dataView || nt.dataView.get_lastCommandName() || h.location.href.match(/_controller=.+_commandName=.+/)) ? $(this._pages).each(function() {
                        var t = this,
                            i = t.dataView;
                        return yv = i && i._id, (!u || t.url == u && !t.root) && (!i || !i._hidden) ? (u || (t.home = !0, u = r.path.documentBase.pathname + h.location.search), tt(), r.navigate.history.clearForward(), u && (t.replaceUrl = u), ye == null && (ye = !0, setTimeout(function() {
                            ye = !1
                        }, 1e3)), i && (gs($("#Main")), $('<h1 class="app-page-loading"/>').appendTo(n.content().empty()).text(ot.Loading)), rt.changePage(t.id), !1) : void 0
                    }) : s.attr("id") == "Main" && (v.length && s.find('a[rel="external"]').parent().remove(), v.show(), c = gs(s), s.addClass("app-page-scrollable"), ti(document.title), $(v).each(function() {
                        var u = $(this),
                            f = u.attr("href"),
                            r = f && n.pageInfo(f.substring(1)),
                            i, e, t;
                        r && r.dataView && r.activator.type != "Button" && (t = r.activator, t && t.type == "Tab" && ($(y).each(function() {
                            if (this.text == t.text) return i = this, !1
                        }), i || (p != t.container && (p && (it(), y = []), p = t.container), i = {
                            text: t.text,
                            content: []
                        }, y.push(i))), e = ll(r.id, c), i && i.content.push(e), u.parent().remove())
                    }), p && it(), i = n.pageMenu(), i.find('a.app-action-navigate,a[rel="external"]').length ? i.listview().show() : i.remove(), di(), c.find(".app-tabs").length > 1 && $('<div class="app-stub-main"><\/div>').appendTo(c), hr(), tt(), li(), n.content().focus(), pp(), gr(c))
                }
            },
            pageMenu: function(n) {
                var r = this,
                    i = this.content(n),
                    t = i.find("ul.app-page-menu");
                return t.length || (t = $('<ul data-role="listview" data-inset="false" class="app-page-menu"/>').appendTo(i).hide().on("vclick", function(n) {
                    var t = $(n.target),
                        i, u;
                    return t.is("a") || (t = t.closest("a")), t.length && (i = t.attr("href"), u = i.match(/^#/), u || tu(), v(t, function() {
                        u ? r.changePage(i.substring(1)) : (k(t, !1), h.location.href = i)
                    })), !1
                })), t
            },
            initialize: function() {
                function c() {
                    var n = df(),
                        t;
                    if (n - o > 2500) {
                        if (t = $.Event("awake.app"), $(document).trigger(t), t.isDefaultPrevented()) return;
                        n = df()
                    }
                    o = n;
                    setTimeout(c, 1250)
                }
                var l = this,
                    o = df(),
                    i = r.path.parseUrl(location.href),
                    u = i && i.hash,
                    f, s = $("head"),
                    t = $('<div class="app-scrollbar-info"><div><\/div><\/div>').appendTo(e);
                y = {
                    width: t[0].offsetWidth - t[0].clientWidth,
                    height: t[0].offsetWidth - t[0].clientWidth,
                    gridColumnPadding: 16
                };
                t.remove();
                e.is(".app-ms-tablet") || l._stickyHeaderBar.css("right", y.width);
                dd();
                u && (u.match(/\W/) || !$(u).length) && (r.navigate.history.initialDst = "", f = r.navigate.history.stack[0], f.url = i.hrefNoHash, f.hash = "", r.path.documentBase.href = r.path.documentBase.hrefNoHash);
                bt ? $('<meta name="apple-mobile-web-app-capable" content="yes"/><meta name="apple-mobile-web-app-status-bar-style" content="black' + (wo >= 8 ? "-translucent" : "") + '"/><link rel="apple-touch-icon" href="../touch/logo-icon.png"/>').appendTo(s) : vr && ($('<meta name="mobile-web-app-capable" content="yes"/><link rel="icon" sizes="196x196" href="../touch/logo-icon.png"/>').appendTo(s), function() {
                    var n, t;
                    h.WebFontConfig = {
                        google: {
                            families: ["Roboto::latin"]
                        }
                    };
                    n = document.createElement("script");
                    n.src = "https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
                    n.type = "text/javascript";
                    n.async = "true";
                    t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(n, t)
                }());
                setTimeout(c, 10);
                ut.appInfo.match(/\|$/) || $("#app-welcome").remove();
                n.refreshMenuStrip()
            },
            presenter: function(t, i) {
                function u() {
                    r[i.name] = i
                }

                function e(n) {
                    te(n.id, n.name)
                }

                function o() {
                    var n = r[typeof i == "string" ? i : i.name];
                    return n && (typeof i == "string" || n.supports(f.find(i.id), i.config))
                }

                function s() {
                    var e = f.find(i.id),
                        s = e.extension(),
                        o = i.container.is(".app-echo-inner"),
                        t = sa(),
                        u;
                    if (o || e == n.dataView()) {
                        if (t = r[i.name], o && t.echo && !t.echo()) return !1;
                        o || (py(i.container, s), i.container.find('ul[data-role="listview"]').hide(), vc(i.container, s));
                        u = $(i.container).find('div[data-presenter="' + t.name + '"][data-scope="' + e._viewId + '"]');
                        u.length || (u = $('<div data-role="presenter" class="app-presenter"><\/div>').appendTo(i.container).attr({
                            "data-presenter": t.name,
                            "data-scope": e._viewId
                        }));
                        u.show();
                        i.container = u;
                        t.show(i)
                    } else lr(i.id + "_echo");
                    return !0
                }

                function h() {
                    $(i.container).find('div[data-role="presenter"]').each(function() {
                        var n = $(this),
                            u = n.attr("data-presenter"),
                            t = r[u];
                        t && (i.container = n, t.hide(i), n.hide())
                    })
                }

                function c() {
                    $(i.container).find('div[data-role="presenter"]').each(function() {
                        var n = $(this),
                            u = n.attr("data-presenter"),
                            t = r[u];
                        t && (i.container = n, t.dispose(i), n.remove())
                    })
                }

                function l() {
                    var o = f.find(i.id),
                        s = n.contextDataView() != n.dataView(),
                        u, t;
                    for (u in r) t = r[u], t.supports(o) && (!s || !t.echo || t.echo()) && i.list.push({
                        name: u,
                        text: t.text(),
                        icon: t.icon(),
                        context: {
                            id: o._id,
                            name: u
                        },
                        callback: e
                    })
                }

                function a() {
                    return r[i.name]
                }
                var r = n._presenters;
                switch (t) {
                    case "supports":
                        return o();
                    case "enumerate":
                        l();
                        break;
                    case "register":
                        u();
                        break;
                    case "show":
                        return s();
                    case "hide":
                        h();
                        break;
                    case "dispose":
                        c();
                        break;
                    case "find":
                        return a()
                }
            }
        },
        function() {
            var t, u, b, l, a;
            $.event.special.swipe.teardown();
            $.event.special.swipe.setup = function() {};
            $.event.special.tap.teardown();
            $.event.special.tap.setup = er;
            var d = /\b_touch_(\w+)=(\w+)\b/g.exec(location.href),
                y = r.focusPage;
            if (r.focusPage = function(n) {
                    y(n);
                    di(n);
                    uo(n)
                }, $.extend($.fn.buttonMarkup, {
                    initSelector: "a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a"
                }), r.resetActivePageHeight = function(n) {
                    var t = $("." + r.activePageClass);
                    typeof n == "number" && n--;
                    n = n || r.getScreenHeight();
                    n -= kr();
                    n == NaN || wi(t) || t.css("min-height", n)
                }, e = $("body"), t = h.matchMedia("screen and (min-resolution: 144dpi)"), t.matches || (t = h.matchMedia("screen and (-webkit-min-device-pixel-ratio: 1.5)")), t.matches && (ko = 144, t = h.matchMedia("screen and (min-resolution: 240dpi)"), t.matches || (t = h.matchMedia("screen and (-webkit-min-device-pixel-ratio: 2.5)")), t.matches && (screepDPI = 432)), s = "ontouchstart" in h, s) {
                if (!bt && !vr) $(document).on("mousemove touchstart", function(n) {
                    yi = null;
                    n.type.match(/^touch/) ? s || (s = !0, e.removeClass("app-desktop app-show-system-buttons-on-hover")) : s && (s = !1, o && o.showSystemButtons == "Always" || e.addClass("app-show-system-buttons-on-hover"), e.addClass("app-desktop"))
                })
            } else if (h.PointerEvent) {
                s = !0;
                $(document).on("pointerdown pointermove", function(n) {
                    var t = n.originalEvent.pointerType;
                    t == "touch" ? s || (s = !0, e.removeClass("app-desktop app-show-system-buttons-on-hover")) : t == "mouse" && s && (s = !1, o && o.showSystemButtons == "Always" || e.addClass("app-show-system-buttons-on-hover"), e.addClass("app-desktop"))
                })
            }
            s || e.addClass("app-desktop");
            $("#aspnetForm").hide();
            var f = $('<div id="app-bar-tools" data-role="header" data-position="fixed" data-theme="a" class="app-bar-tools"><\/div>').appendTo(e),
                p = $('<div data-role="page" id="Main"><\/div>').appendTo(e),
                c = '<a class="ui-btn-right app-btn ui-btn ui-btn-icon-notext ui-shadow ui-corner-all"/>',
                g = $('<a class="ui-btn ui-btn-a ui-btn-icon-notext app-btn-float app-btn-promo"/>').hide().appendTo(e).on("vclick", yb),
                w;
            $('<div data-role="content" class="app-content-main"><\/div>').appendTo(p);
            w = $('<a data-role="button" id="app-btn-menu" class="ui-btn ui-btn-icon-notext ui-shadow ui-corner-all ui-icon-bars"/>').appendTo(f);
            $('<h1 class="ui-title"/>').appendTo(f).on("vclick", function() {
                if (n._menuButton.is(".ui-icon-bars")) return n._menuButton.trigger("vclick"), !1
            });
            u = $('<div class="app-btn-cluster-right"><\/div>').appendTo(f);
            f.on("vclick", ud);
            $(c).appendTo(u);
            $(c).appendTo(u);
            $(c).appendTo(u);
            $(c).appendTo(u);
            $(c).appendTo(u);
            $('<span class="app-user-name"/>').appendTo(u);
            $('<a id="app-btn-context" data-icon="dots" data-iconpos="notext" data-role="button" class="ui-btn-right app-btn-context"/>').appendTo(u).attr("title", i.More).hide();
            $('<div id="app-bar-heading" class="app-bar-heading"><div class="app-bar-label"><\/div><div class="app-bar-text"><\/div><\/div>').appendTo(e).hide().on("vclick contextmenu", function(n) {
                var t = $(n.target);
                if (t.closest(".app-group").length && !t.is(".app-group")) return ra(!0), !1
            });
            b = f.find(".app-btn").data("icon", "gear").on("vclick", yb);
            f.toolbar({
                updatePagePadding: !1,
                trackPersistentToolbars: !1,
                tapToggle: !1
            });
            l = $('<div id="app-sidebar" class="ui-panel ui-panel-fixed ui-body-a app-sidebar"><div class="ui-panel-inner" tabindex="0"><ul/><\/div><\/div>').appendTo(e);
            a = l.find("ul");
            a.listview().on("vclick", function(t) {
                if (sf || !nr(t.target)) return !1;
                ai();
                var i = $(t.target).closest("a"),
                    r = i.data("context-action");
                if (i.length) {
                    if (r) return n.busy() || v(i, function() {
                        hi(r, i)
                    }), !1;
                    k(i, !1)
                }
            })
        }();
    n = f.touch = f.mobile = new Web.Mobile;
    n.activeLinkBlacklist = ".ui-slider-handle,.dv-action-see-all,.app-do-not-activate";
    n._presenters = {};
    e.on("pagebeforeload", function(n, t) {
        n.preventDefault();
        setTimeout(function() {
            location.replace(t.toPage)
        }, 200)
    }).on("pagecontainercreate", function() {
        n._shown || setTimeout(function() {
            n.start();
            n._shown = !0
        }, 100)
    }).on("pagecontainerbeforeshow", function(t, i) {
        var f = r.activePage,
            u = n.pageInfo();
        n.toolbar(n.title());
        e.is(".app-page-header-hidden") ? ti(!1) : ti(u && u.headerText || u && u.dataView && u.dataView.get_view().Label || document.title);
        n.pageShow(d());
        n.unloadPage(i.prevPage, f);
        kc();
        n.contextScope(null)
    }).on("pagecontainerbeforehide", function() {
        b = !0;
        n.busy(!0)
    }).on("pagecontainerbeforetransition", function(t, i) {
        if (i.toPage && i.prevPage) {
            var u = $(i.toPage).attr("id"),
                f = n.pageInfo(u),
                e = $(i.prevPage).attr("id");
            if (u == e || f && f.deleted) return !1
        }
        lt();
        wt(!1);
        n.promo(!1);
        bs(r.activePage);
        tl(ie())
    }).on("pagecontainershow", function() {
        r.activePage && uo(r.activePage)
    }).on("pagecontainertransition", function(n, t) {
        setTimeout(function() {
            gk(t)
        })
    });
    f.dragMan = p = new function() {
        return this.prototype = {
            active: function() {
                return this._active == !0
            },
            call: function(t, i) {
                if (i.drag) {
                    this._dragged = !1;
                    var u = this,
                        r = this[i.drag.type],
                        s = r && r[t],
                        f = i.drag,
                        o, e;
                    clearTimeout(u._draggedTimeout);
                    t == "start" ? (p._keepTap = !1, u._active = !0, e = f.target, o = n.contextDataView(e), f.dataView = o, r && (!r.options || r.options.taphold != !1) && (u._tapholdTimeout = setTimeout(function() {
                        if (u._tapholdTimeout = null, f) {
                            if (f.touch) $(document).one("vmouseup pointerup", function(n) {
                                n.preventDefault();
                                n.stopPropagation();
                                ht = !0;
                                setTimeout(function() {
                                    ht = !1
                                }, 250)
                            });
                            var n = $.Event("taphold.app", {
                                drag: f
                            });
                            f.target = e;
                            f.dataView = o;
                            $(e).trigger(n);
                            po(n)
                        }
                    }, 750))) : p._keepTap || u._tapholdTimeout && (clearTimeout(u._tapholdTimeout), u._tapholdTimeout = null);
                    r && s && (!r.options || !r.options.dataView || f.dataView) && r[t](i.drag);
                    (t == "end" || t == "cancel") && (i.drag.dataView = null, u._active = !1, wt(!0))
                }
            },
            dragged: function(n) {
                var t = this;
                return arguments.length && (t._dragged = n, n && clearTimeout(t._draggedTimeout), t._draggedTimeout = setTimeout(function() {
                    t._dragged = !1
                }, 200)), t._dragged == !0
            }
        }
    };
    $(document).on("mousedown pointerdown touchstart", "[data-draggable]", function(n) {
        var u = n.type;
        if ((u != "mousedown" || n.which == 1) && !et && !c) {
            dr();
            lt();
            var f = ar(n),
                o = $(this),
                i = o.attr("data-draggable"),
                r = p[i],
                e = n.originalEvent.pointerType,
                t = r && r.options;
            if (et = {
                    x: f.x,
                    y: f.y,
                    lastX: f.x,
                    lastY: f.y,
                    target: o,
                    type: i,
                    data: null,
                    cancel: !1,
                    mouse: e == "mouse" || u == "mousedown",
                    pointer: !!u.match(/^pointer/),
                    touch: e == "touch" || !!u.match(/^touch/),
                    pen: e == "pen",
                    tooltip: t && t.tooltip
                }, $(document).trigger($.Event("dragstart.app", {
                    drag: et
                })), i != et.type && (i = et.type, r = p[i], t = r && r.options), et.cancel) et = null;
            else {
                (et.dir == "all" || t && t.immediate) && (n.preventDefault(), t && t.immediate && ga(n, !0));
                $(document).on("pointermove touchmove mousemove", ga).on("pointerup pointercancel touchend touchcancel mouseup", po);
                if (n.isDefaultPrevented()) return !1
            }
        }
    }).on("dragstart.app", function(n) {
        p.call("start", n)
    }).on("dragmove.app", function(n) {
        p.call("move", n)
    }).on("dragend.app", function(n) {
        p.call("end", n)
    }).on("dragcancel.app", function(n) {
        p.call("cancel", n)
    }).on("taphold.app", function(n) {
        p.call("taphold", n)
    });
    p.hscrollbar = {
        options: {
            taphold: !1,
            immediate: !0
        },
        start: function(n) {
            var t = this,
                i = n.target.parent().prev();
            i.css("overflow-x") != "auto" && (i = i.children().first());
            n.dir = "all";
            t._scrollable = i;
            n.target.parent().addClass("app-scrollbar-dragging");
            t._rect = n.target.parent()[0].getBoundingClientRect();
            t._ratio = t._scrollable[0].offsetWidth / n.target.width();
            t._offset = n.x - n.target.offset().left
        },
        move: function(n) {
            var t = this;
            t._scrollable.scrollLeft((n.x - t._rect.left - t._offset) * t._ratio)
        },
        cancel: function(n) {
            this.end(n)
        },
        end: function(n) {
            n.target.parent().removeClass("app-scrollbar-dragging");
            n.target.parent().prev().focus()
        }
    };
    p.vscrollbar = {
        options: {
            taphold: !1,
            immediate: !0
        },
        start: function(n) {
            n.dir = "all";
            this._scrollable = n.target.parent().prev();
            n.target.parent().addClass("app-scrollbar-dragging");
            this._rect = n.target.parent()[0].getBoundingClientRect();
            this._ratio = this._scrollable[0].scrollHeight / this._scrollable.height();
            this._offset = n.y - n.target.offset().top
        },
        move: function(n) {
            var t = this;
            t._scrollable.scrollTop((n.y - t._rect.top - t._offset) * t._ratio)
        },
        cancel: function(n) {
            this.end(n)
        },
        end: function(n) {
            n.target.parent().removeClass("app-scrollbar-dragging");
            w().focus()
        }
    };
    p["grid-header"] = {
        options: {
            dataView: !0
        },
        start: function(n) {
            if (s) {
                var t;
                n.target.find(".app-field-separator").each(function() {
                    var i = $(this),
                        r = i.offset(),
                        u = n.x - r.left;
                    Math.abs(u) <= 22 && (t = i)
                });
                t && (n.originalType = n.type, n.type = "grid-header-separator", n.target = t, p["grid-header-separator"].start(n))
            }
        }
    };
    p["grid-header-field"] = {
        options: {
            dataView: !0
        },
        start: function(n) {
            var t = n.target,
                i, u = t.offset(),
                r;
            n.mouse || (i = t.width(), i > y.gridColumnPadding * 2 && (u.left + i - y.gridColumnPadding < n.x ? (n.target = t.next(), r = !0) : u.left + y.gridColumnPadding > n.x && t.prev().is(".app-field-separator") && (n.target = t.prev(), r = !0)));
            r ? (n.originalType = n.type, n.type = "grid-header-separator", p["grid-header-separator"].start(n)) : n.dir = n.mouse ? "all" : "horizontal"
        },
        move: function(n) {
            var t = this,
                o = n.dataView,
                i = t._lastDropTarget,
                u, c = t._dragLine,
                g = 0,
                nt, ft, a = kt(n.target),
                v, et, b, tt, ot, k = s ? 30 : 20,
                h, f, it, d, rt = t._mirror;
            if (h = (a.length ? a : r.activePage.find(".app-grid")).find(".dv-item").first(), f = h.offset(), d = o.session("grid-frozen-width") || 0, !t._dragLine) {
                nt = w();
                ft = nt.offset();
                ot = !0;
                i = t._lastDropTarget = n.target;
                t._targetFieldName = i.attr("data-field-name");
                v = a.length ? a.find(".dv-item").last() : null;
                et = l.height() - (v ? v.offset().top + v.outerHeight() : ft.top + nt.outerHeight());
                c = t._dragLine = $('<div class="app-drag-line"><\/div>').appendTo(e);
                c.css({
                    top: i.offset().top,
                    bottom: et
                });
                n.target.css("color", c.css("background-color"));
                p["data-item"]._scrollbar(n, !1);
                var ut = i.prevAll(".app-field-separator").first(),
                    st = i.nextAll(".app-field-separator").first(),
                    ht = ut.length ? ut.offset().left + Math.ceil(ut.outerWidth() / 2) : i.offset().left - (s ? y.gridColumnPadding / 2 : 2),
                    at = st.offset().left + Math.ceil(st.outerWidth() / 2),
                    ct = i.css("padding-top"),
                    lt = i.css("padding-bottom");
                rt = t._mirror = $('<span class="app-drag-header-field"/>').appendTo(e).css({
                    "font-size": i.css("font-size"),
                    paddingLeft: y.gridColumnPadding / 2,
                    paddingRight: y.gridColumnPadding / 2,
                    paddingTop: ct,
                    paddingBottom: lt,
                    textAlign: i.css("text-align")
                }).width(at - ht - y.gridColumnPadding).height(i.closest(".app-grid-header").height() - parseInt(ct) - parseInt(lt)).text(i.text());
                t._mirrorDispX = n.x - ht;
                t._mirrorDispY = n.y - i.offset().top + (n.mouse ? 0 : i.outerHeight());
                t._mirrorWidth = rt.outerWidth()
            }
            h.find(".app-field").each(function() {
                var t = $(this),
                    i = t.offset();
                (t.is(".app-frozen") || i.left > f.left + d) && n.x >= i.left - y.gridColumnPadding / 2 && n.x < i.left + t.width() + y.gridColumnPadding / 2 && (b = t)
            });
            b && (tt = b.attr("class").match(/\bapp-field-([\w\_]+)\b/i), tt && (i = b, t._targetFieldName = tt[1]));
            t._lastDropTarget = i;
            u = i.prev();
            u.is(".app-field-separator") ? g = Math.ceil(u.outerWidth(!0) / 2) + 2 : (u = i, g = -y.gridColumnPadding / 2);
            u.length && c.css({
                transform: "translate3d(" + (u.offset().left + g) + "px,0,0)",
                transition: ot || n.instantFeedback ? "" : "transform 160ms ease-out"
            });
            t._mirror.css({
                left: n.x - t._mirrorDispX,
                top: n.y - t._mirrorDispY
            });
            n.instantFeedback = !1;
            clearTimeout(t._gridScrollTimeout);
            it = h.width();
            (f.left + it - (n.x - t._mirrorDispX + t._mirrorWidth - 1) <= k || n.x - t._mirrorDispX - (f.left + d) <= k) && (t._gridScrollTimeout = setTimeout(function() {
                var r = o.session("grid-avail-width"),
                    e = Math.ceil(r - r * (h.width() / r)),
                    i = o.session("scroll-left") || 0,
                    s = n.x - t._mirrorDispX,
                    l = s + rt.outerWidth() - 1,
                    c = s - (f.left + d),
                    u;
                i < e && f.left + it - l <= k ? (i = Math.min(i + 32, e), u = !0) : i > 0 && c > 0 && c <= k ? (i = Math.max(i - 32, 0), u = !0) : clearTimeout(t._gridScrollTimeout);
                u && (o.session("scroll-left", i), pu(o, -i), n.instantFeedback = !0, n.dropTarget = document.elementFromPoint(ki(), ke()), t.move(n))
            }, 100))
        },
        end: function(n) {
            var e = this,
                t = n.dataView,
                f = t._allFields,
                o = t.gridSettings(),
                i = o.sequence,
                r = n.target.attr("data-field-name"),
                u = e._targetFieldName;
            r = f[t.findFieldUnderAlias(r).Index].Name;
            u = f[t.findFieldUnderAlias(u).Index].Name;
            i.length || $(t._fields).each(function() {
                i.push(this.Name)
            });
            i.splice(i.indexOf(r), 1);
            i.splice(i.indexOf(u), 0, r);
            this._removeDragState(n);
            t.gridChanged()
        },
        cancel: function(n) {
            this._removeDragState(n)
        },
        taphold: function(n) {
            la(n.target, {
                x: n.x,
                samples: !1,
                hide: !0
            })
        },
        _removeDragState: function(n) {
            var t = this;
            clearTimeout(t._gridScrollTimeout);
            n.target.css("color", "");
            t._lastDropTarget = null;
            t._dragLine && (t._dragLine.remove(), t._dragLine = null, t._mirror.remove(), t._mirror = null);
            p["data-item"]._scrollbar(n, !0)
        }
    };
    p["grid-header-separator"] = {
        options: {
            dataView: !0,
            taphold: !1,
            immediate: !0
        },
        start: function(n) {
            var t = this,
                u = w(),
                i = n.target.prevAll("[data-field-name]").first(),
                f = kt(i),
                r = f.length ? f.find(".dv-item").last() : null,
                o = l.height() - (r ? r.offset().top + r.outerHeight() : u.offset().top + u.outerHeight());
            t._columnHeader = i;
            t._left = Math.ceil(i.offset().left);
            t._minRight = t._left + ys() + n.target.outerWidth() + 2;
            i.next().is(".app-btn-more") && (t._minRight += i.next().outerWidth());
            t._maxRight = t._left + (i.closest(".app-bar-heading").length ? w() : i.closest(".app-grid")).width() * .75;
            t._dragLine = $('<div class="app-drag-line"><\/div>').appendTo(e).css({
                transform: "translate3d(" + (n.target.offset().left + Math.floor(n.target.outerWidth() / 2)) + "px,0,0)",
                top: n.target.offset().top,
                bottom: o
            });
            t._leftLine = $('<div class="app-drag-line"><\/div>').appendTo(e).css({
                left: t._left - Math.ceil(y.gridColumnPadding / 2),
                top: i.offset().top,
                bottom: o
            });
            i.css("color", t._dragLine.css("background-color"));
            n.dir = n.mouse ? "all" : "horizontal"
        },
        move: function(n) {
            var t = this,
                i = n.x;
            i < t._minRight && (i = t._minRight);
            i > t._maxRight && (i = t._maxRight);
            t._right = i;
            t._dragLine.css("transform", "translate3d(" + i + "px,0,0)")
        },
        end: function(n) {
            var t = this,
                o = t._dragLine,
                f = t._right - t._left - n.target.outerWidth() - 2,
                i = n.dataView,
                r = i.gridSettings(),
                u = t._columnHeader,
                e = i.findField(u.attr("data-field-name"));
            u.next().is(".app-btn-more") && (f -= u.next().outerWidth());
            r.width[e.Name] || u.parent(".app-grid-header").find("[data-field-name]").each(function() {
                var n = $(this),
                    t = n.width();
                r.width[n.attr("data-field-name")] = t
            });
            r.width[e.Name] = f;
            i.gridSettings(r);
            p.dragged(!0);
            t._removeLine(n);
            vu(i, !1, !0);
            i.gridChanged()
        },
        cancel: function(n) {
            this._removeLine(n)
        },
        _removeLine: function(n) {
            var t = this;
            n.target.prevAll("[data-field-name]").first().css("color", "");
            t._dragLine.remove();
            t._leftLine.remove();
            t._columnHeader = null
        }
    };
    p.dismiss = {
        start: function(n) {
            n.dir = "all"
        },
        move: function() {},
        end: function(n) {
            this.cancel(n)
        },
        cancel: function(n) {
            n.target.trigger("vclick")
        }
    };
    p.panel = {
        start: function(n) {
            var t = this;
            n.dir = "horizontal";
            t._lastX = t._x = n.x;
            t._time = +new Date
        },
        move: function(n) {
            var t = this,
                i = n.target,
                r = t._dir,
                u = n.x - t._x;
            t._dir || (r = t._dir = i.is(".ui-panel-position-right") ? "right" : "left", r == "right" ? i.offset().left : i.outerWidth(), i.css({
                position: "absolute"
            }), t._animated = i.is(".ui-panel-animate"));
            t._displacement = u;
            t._movedBy = n.x - n.lastX;
            r == "right" ? i.css({
                right: Math.min(0, -t._displacement)
            }) : i.css({
                left: Math.min(0, t._displacement)
            });
            t._lastX = n.x
        },
        end: function(n) {
            function c() {
                f ? t.panel("close", !0) : t.css({
                    transform: "none",
                    transition: "transform 0 linear",
                    right: e == "right" ? 0 : "",
                    left: e == "left" ? 0 : ""
                });
                i._done(t)
            }
            var i = this,
                r = i._displacement,
                t = n.target,
                u = t.outerWidth(),
                e = i._dir,
                o = s ? 30 : 10,
                h = +new Date - i._time <= 250,
                f;
            if (e == "right")
                if (parseInt(t.css("right")) == 0) i._done(t);
                else {
                    f = i._movedBy >= 0 && (h && r >= o || Math.abs(r) >= u * .5);
                    t.css({
                        transition: "transform 300ms ease",
                        transform: "translate3d(" + (f ? u - r : -r) + "px,0,0)"
                    }).removeClass("ui-panel-animate").one("transitionend", c)
                } else if (parseInt(t.css("left")) == 0) i._done(t);
            else {
                f = i._movedBy <= 0 && (h && -r >= o || Math.abs(u + r) <= u * .5);
                t.css({
                    transition: "transform 300ms ease",
                    transform: "translate3d(" + (f ? -(u + r) : -r) + "px,0,0)"
                }).removeClass("ui-panel-animate").one("transitionend", c)
            }
        },
        cancel: function(n) {
            this._done(n.target)
        },
        _done: function(n) {
            var t = this;
            t._dir = null;
            n.css({
                position: "",
                transition: "",
                transform: "",
                left: "",
                right: ""
            });
            t._animated && setTimeout(function() {
                n.addClass("ui-panel-animate")
            }, 100)
        }
    };
    p["data-item"] = {
        options: {
            dataView: !0
        },
        start: function(n) {
            var t = this,
                i = n.dataView,
                s = i.extension().viewStyle(),
                h = n.target.closest(".app-listview"),
                r = i.session("grid-avail-width"),
                f = h.width(),
                u, e, o;
            if (s == "Grid" && r > f) {
                if (i.multiSelect() && (u = n.target.closest(".ui-btn").find(".app-btn-check"), u.length && n.x < u.offset().left + u.outerWidth() + 8)) return;
                e = f / r;
                o = Math.ceil(r - r * e);
                t._maxScroll = o;
                t._originalX = n.x;
                t._lastX = n.x;
                t._listViewWidth = f;
                t._scrollLeft = i.session("scroll-left") || 0;
                n.dir = "horizontal";
                t._minScroll = parseInt($("span." + re(i)).css("margin-left"), 10) + t._scrollLeft;
                i.session("scroll-left-margin", t._minScroll)
            }
        },
        move: function(n) {
            var t = this,
                r = n.dataView,
                u, i = t._scrollLeft;
            t._scrollbar(n);
            u = Math.ceil(t._originalX - n.x);
            i += u;
            i < 0 ? (i = 0, t._originalX = n.x, t._scrollLeft = i) : i > t._maxScroll && (i = t._maxScroll, t._originalX = n.x, t._scrollLeft = i);
            n.time = +new Date;
            r.session("scroll-left", i);
            pu(r, -i, !0)
        },
        end: function(n) {
            this._stopAnimation(n);
            var r = this._scrollLeft,
                u = +new Date,
                f = n.time,
                e = (u - f) * 100,
                i = n.x - n.lastX;
            if (e > 0 && Math.abs(i) > 5) {
                var o = i < 0 ? 1 : -1,
                    t = r + this._listViewWidth * o;
                t < this._minScroll ? t = 0 : t > this._maxScroll && (t = this._maxScroll);
                n.dataView.session("scroll-left", t);
                pu(n.dataView, -t, !1, !0)
            }
        },
        cancel: function(n) {
            this._stopAnimation(n)
        },
        taphold: function(n) {
            n.target.is(".app-btn-more") ? n.target.trigger("vclick") : n.target.trigger("contextmenu")
        },
        _stopAnimation: function(n) {
            p.scrollingAnimationFrame != null && (cancelAnimationFrame(p.scrollingAnimationFrame), p.scrollingAnimationFrame = null);
            this._scrollbar(n, !0)
        },
        _scrollbar: function(n, t) {
            t ? n.hscrollbar && (se(n.hscrollbar.parent().parent()), n.hscrollbar = null) : n.scrollbarHandled || (n.scrollbarHandled = !0, y.height > 0 && (n.hscrollbar = kt(n.target).length ? n.target.closest(".app-grid").find(".app-hscrollbar-inner") : r.activePage.find(".app-bar-hscrollbar .app-hscrollbar-inner"), n.hscrollbar.width(1).parent().data("ignore-scrolling", !0), setTimeout(function() {
                n.hscrollbar && n.hscrollbar.parent().removeData("ignore-scrolling", !0)
            }, 100)))
        }
    };
    $(document).ready(function() {
        ut = __settings;
        n.initialize()
    }).on("dragend", function() {
        $.event.special.swipe.eventInProgress = !1
    }).on("touchstart pointerdown", function(t) {
        if (yi = ar(t), !vf && !$(t.target).is(":input")) {
            if (b) {
                t.preventDefault();
                return
            }
            var r = $(t.target),
                i = r.closest("a,.app-feedback"),
                u = ka = ar(t);
            da = vf == null && !yi.isScrollable;
            i.length && (gu = i.data("touch-start", u), i.is(n.activeLinkBlacklist) || (i.parent().is("li") ? (clearTimeout(ba), ba = setTimeout(function() {
                gu && k(gu, !1)
            }, 250)) : s && k(i, !1)))
        }
    }).on("touchmove pointermove", function(n) {
        var u, i = $(n.target),
            f = $(gu),
            e = i.closest(".ui-panel-inner,.app-wrapper"),
            t = ar(n),
            r = f.length && f.data("touch-start"),
            o;
        if (bt && i.closest(".app-bar-tools").length && !i.closest(".ui-btn").length) {
            n.preventDefault();
            return
        }
        if (da) {
            if (da = !1, e.length && (t.y > ka.y ? u = e.scrollTop() == 0 : t.y < ka.y && (o = cp(e), u = o.height >= o.maxHeight - 1)), u) {
                ce();
                k();
                n.preventDefault();
                bt && (ur = !1);
                return
            }
            if (i.is(".ui-panel-dismiss,.ui-popup-screen,.app-scrollable-cover")) {
                n.preventDefault();
                return
            }
        }
        f.length && (r && (r.scrollTop != t.scrollTop || Math.abs(r.x - t.x) > 0 || Math.abs(r.y - t.y) > 0) && k(), ce())
    }).on("touchend pointerup", function(n) {
        yi = ar(n);
        var i = $(n.target).closest("a"),
            r = ar(n),
            t = i.length && i.data("touch-start");
        i.length && (!t || t.scrollTop != r.scrollTop || Math.abs(t.x - r.x) > 0 || Math.abs(t.y - r.y) > 0) && n.preventDefault();
        ce()
    }).on("touchcancel pointercancel", function() {
        k();
        ce()
    }).on("scrollstart.app", function() {
        kc()
    }).on("scrolldir.app scrollstop.app", function(t) {
        if (t.relatedTarget) {
            var r = $(t.relatedTarget),
                s = r.find("> .app-listview").filter(":visible"),
                f = s.find(".app-group"),
                e, l, a, o;
            f.length && (e = ge(), e.length && (group = e.find(".app-group"), group.length || (group = $('<div class="app-group"><\/div>').appendTo(e), $(f[0]).is(".app-group-fixed") && group.addClass("app-group-fixed")), l = r.offset().top + n.stickyHeaderBar().outerHeight(!0), f.each(function() {
                var n = $(this);
                if (n.offset().top + n.outerHeight(!0) / 2 > l) return !1;
                a = n
            }), o = (a || $(f[0])).html(), o != group.html() && (group.html(o), n.stickyHeaderBar().find(".app-group").html(o))));
            var c = r.data("scroll-dir"),
                y = s.filter(".app-grid"),
                p = s.find(".app-group-fixed").first(),
                u = y.length > 0 || p.length,
                v = n.stickyHeaderBar(),
                i = u ? v.find(".app-view-instruction,.app-group:not(.app-group-fixed)") : null,
                w = i && i.parent();
            c == "up" ? (u && i.length && !i.is(":visible") && i.removeClass("app-hidden"), fo(v), ir()) : (c == "down" || !c && u) && (u && r.scrollTop() != 0 ? u && (i.addClass("app-hidden"), w.addClass("app-bar-text-instruction-hidden"), h._stickyHeaderHideInstruction = !0, ir()) : vt());
            t.type == "scrollstop" && (clearInterval(sv), sv = setTimeout(function(n) {
                var t = cp(n);
                t.top <= 0 && t.height <= t.maxHeight + 1 && (tr(), li())
            }, 250, r))
        }
    }).on("contextmenu MSHoldVisual selectstart", function(n) {
        var t, i, r, u;
        s && !$(n.target).is(":input") || b ? n.preventDefault() : n.type == "contextmenu" ? (t = $(n.target), t.is(".ui-popup-screen") ? (i = $(".ui-popup-active .ui-popup.app-popup-listview"), i.length && (fu(i), n.preventDefault(), r = ar(n), u = document.elementFromPoint(r.x, r.y), setTimeout(function() {
            var n = $(u);
            n.trigger(n.closest(".app-control-helper").length ? "vclick" : "contextmenu")
        }, 50))) : t.closest(".ui-popup").length ? n.preventDefault() : t.is(".app-has-children") && (n.preventDefault(), setTimeout(function() {
            t.trigger("vclick")
        }, 50))) : n.type == "MSHoldVisual" && n.preventDefault()
    }).one("pagecreate", "#Main", function() {
        n._pageCreated = !0
    }).on("pagecontainerbeforechange", function(t, i) {
        var o = typeof i.toPage == "string" ? i.toPage : $(i.toPage).attr("id"),
            u;
        if (typeof i.toPage == "string" && i.toPage.match(/^http/)) return (th(!1), ye) ? (ye = !1, !1) : void 0;
        if (i.options.deferred) {
            var s = n.pageInfo(),
                e = $(i.toPage),
                r = n.pageInfo(e.attr("id")),
                f = r && r.dataView;
            n.stickyHeaderBar().find(".app-bar-text, .app-bar-label").removeData();
            r && !i.toPage.prevObject || (vt(), u = f && f.extension(), n.search("configure", {
                allow: u ? u.options().quickFind : !1
            }))
        }
    }).on("vclick", "a", kn).on("vclick", ".app-input-value", function(n) {
        return $(n.target).prev().focus(), !1
    }).on("vclick", ".app-btn-toggle", bn).on("vclick", ".app-filter", function(t) {
        var i = kt(t.target);
        return i.length && n.contextScope(i.attr("data-for")), ku({
            mode: "everything"
        }), !1
    }).on("vclick", "[data-href]", function() {
        var n = $(this),
            t = n.attr("data-href"),
            i = n.closest(".app-field");
        return i.addClass("app-selected"), setTimeout(function() {
            i.removeClass("app-selected");
            var n = t.match(/^(_\w+)\:(.+)$/),
                f, r;
            n && n[1] ? (u = n[2], r = n[1] == "_blank" ? null : "modal=yes,alwaysRaised=yes,resizable=yes", r ? h.open(u, f, r) : h.open(u, f)) : h.location.href = t
        }, ft), !1
    }).on("vclick contextmenu", ".app-grid-header", function(n) {
        if (p.dragged() || ht) {
            n.preventDefault();
            n.stopPropagation();
            return
        }
        dr();
        var t = $(n.target),
            i = {
                x: n.pageX,
                y: null
            };
        if (!t.is(".app-btn-more")) return t.is(".app-icon") && (t = t.parent()), il(n) ? rl(lb(t)) : (t.attr("data-field-name") || $(this).find("span").each(function() {
            var i = $(this),
                r = i.offset().left;
            if (!i.is(".app-btn-check,.app-btn-more") && r <= n.pageX && n.pageX < r + i.outerWidth(!0)) return t = i, !1
        }), t.is("span") && !t.is(".app-btn-check,.app-frozen-spacer,.app-field-separator") && (t.addClass("ui-btn-active"), i.x && (i.y = t.offset().top + t.outerHeight() * .75), (n.type == "contextmenu" || n.type == "vclick" && n.ctrlKey) && (i.samples = !1, i.hide = !0), n.preventDefault(), setTimeout(function() {
            t.removeClass("ui-btn-active");
            la(t, i)
        }, ft))), !1
    }).on("keydown keypress", function(t) {
        var l = $(t.target),
            a = n._toolbar,
            s = t.type == "keydown",
            u, v = t.key,
            h = t.keyCode,
            i, f = s && (h == 114 || h == 70 && t.ctrlKey),
            r = s && h == 27,
            o;
        if ((c || et) && r) {
            $(document).trigger($.Event("dragcancel.app", {
                drag: et || c
            }));
            t.preventDefault();
            return
        }
        if (!s || r || f) {
            if (!vf && !l.is("#app-input-search") && (u = String.fromCharCode(t.which), u.match(/[\w\-\"]/) || r || f)) {
                if (gi() && !fr) {
                    if (f) return setTimeout(function() {
                        fw(n._contextButton)
                    }), !1;
                    if (r && !e.find(".ui-popup-active").length) return ly(), !1
                } else if (d() == "taskassistant" && r) return ly(), !1;
                if (i || (i = a.find(".ui-icon-search:visible"), o = n.dataView()), i.length) {
                    if (r)
                        if (o && o.extension().quickFind()) tp(o, ""), iu(o), bc(i);
                        else return !1;
                    else if (f) i.trigger("vclick", !1), bc(i);
                    else if (t.type == "keypress") {
                        if (gi()) return;
                        fr != null && (u = fr + u);
                        fr = u;
                        fr.length == 1 && (i.trigger("vclick", !1), bc(i))
                    }
                    return !1
                }
            }
            if (f) return !1
        }
    }).on("editorstart.app", pd).on("editorstop.app", wd);
    l.on("resize", function() {
        s || (su = l.width(), yf = l.height(), wb())
    }).on("throttledresize", function() {
        nf(!0)
    }).on("orientationchange", function() {
        setTimeout(function() {
            su = l.width();
            yf = l.height()
        }, 200);
        s && wb()
    });
    $(document).on("mousedown", function() {
        var n = ct && ct[0];
        n && n.display != "none" && !n.className.match(/\bapp-tooltip-message\b/) && lt()
    }).on("mousemove", function(n) {
        n.pageX != null && (br = n.pageX, lf = n.pageY)
    }).on("vclick", ".app-tooltip-message", function() {
        lt()
    }).on("mouseenter", "[title]", function(n, t) {
        var i = $(this),
            r = i.attr("title"),
            u = br,
            f = lf;
        if (r) {
            if (yk) {
                r && (i.attr("title", null), setTimeout(function() {
                    i.attr("title", r)
                }, 1e3));
                return
            }
            i.attr("title", "").data("title", r);
            clearTimeout(af);
            af = setTimeout(function() {
                if (af = null, !c || c.tooltip) {
                    var n = i.offset();
                    i[0].namespaceURI == ak && Math.abs(u - br) <= 11 && Math.abs(f - lf) <= 11 || br >= n.left && br < n.left + i.outerWidth() && lf >= n.top && lf < n.top + i.outerHeight() ? ah(br, lf + 23, r, i) : ct && !ct[0].className.match(/\bapp-tooltip-message\b/) && ct.hide()
                }
            }, t != null ? t : vk)
        }
    }).on("mouseleave", "[title]", function() {
        var n = $(this),
            t = n.data("title");
        t && n.attr("title", t);
        ct && !ct[0].className.match(/\bapp-tooltip-message\b/) && lt()
    });
    t = f.input = {
        methods: {
            none: {
                render: er
            },
            text: {
                render: function(n) {
                    var s = n.container,
                        f = n.inner,
                        l = n.row,
                        i = n.field,
                        h = i._dataView,
                        c = n.originalField,
                        o, e, r, u;
                    c || i.Index == i.AliasIndex || (i = h._allFields[i.AliasIndex]);
                    e = l[i.Index];
                    e == null ? (r = n.editing ? t.fieldToPlaceholder(c || i) : "", s.addClass("app-null")) : (i.ItemsStyle && i.ItemsStyle != "Lookup" && i.ItemsStyle != "AutoComplete" ? (o = h._findItemByValue(i, e), o && (r = o[1])) : r = i.text(e), i.TextMode == 1 && (r = new Array(r.length + 1).join("*")), s.removeClass("app-null"));
                    i.Rows && !i.ItemsTargetController && n.inner.css({
                        "min-height": i.Rows + "em"
                    }).addClass("app-text-multiline");
                    r ? i.HtmlEncode ? f.text(r) : f.html(r) : f.html("&nbsp;");
                    eo(f, i, e, r, !0) && f.attr("title", r);
                    n.editing && (i.Type.match(/^(Byte|Currency|Decimal|Double|Int16|Int32|Int64|Single|SByte|UInt16|UInt32|UInt64)$/) ? u = "number" : pl(i) ? u = "tel" : wl(i) ? u = "email" : ag(i) && (u = "url"), u && n.container.attr("data-type", u))
                },
                focus: function(n) {
                    var t = n.closest("[data-input]").find(".app-data-input");
                    if (t.length) t.focus();
                    else return gn(n)
                }
            },
            blob: {
                render: function(n) {
                    var w = n.container,
                        u = n.inner,
                        i = n.field,
                        o = i._dataView,
                        c = n.row,
                        v = n.editing,
                        l = c[i.Index],
                        h, a;
                    if (!l || l.match(/^null/)) h = t.fieldToPlaceholder(i), w.addClass("app-null"), u.text(h);
                    else {
                        h = l;
                        v || (a = u.find(".app-drop-box"), a.length && f.upload("destroy", {
                            container: a
                        }));
                        u.empty();
                        var y = o.resolveClientUrl(o.get_appRootPath()),
                            r = $('<a rel="external"/>').appendTo(u).attr("href", String.format("{0}blob.ashx?{1}=o|{2}", y, i.OnDemandHandler, h)),
                            e, p = i.Name.toLowerCase();
                        i.OnDemandStyle != 1 ? (r.addClass("app-has-image"), $("<img/>").appendTo(r).attr({
                            src: String.format("{0}blob.ashx?{1}=t|{2}&_nocrop", y, i.OnDemandHandler, h),
                            title: at.BlobDownloadHint
                        }), $(o._allFields).each(function() {
                            var n = this,
                                t = n.Name.toLowerCase();
                            if (t == p + "contenttype" || t == p + "content_type") return e = c[n.Index], !1
                        }), $(o._allFields).each(function() {
                            var n = this,
                                t = n.Name.toLowerCase();
                            if (t == "contenttype" || t == "content_type") return e = c[n.Index], !1
                        }), e || (e = "image"), e.match(/^image/i) ? r.attr("data-content-type", e) : s || r.attr("target", "_blank")) : (r.appendTo(u).addClass("app-link-blob").attr("title", at.BlobDownloadHint), $('<span class="glyphicon glyphicon-download"> <\/span>').appendTo(r), $("<span/>").text(at.BlobDownloadLink).appendTo(r), s || r.attr("target", "_blank"))
                    }
                    v && f.upload("create", {
                        container: $('<div tabstop="0"><\/div>').appendTo(u).addClass("drop-box-" + i.Index),
                        dataViewId: o._id,
                        fieldName: i.Name,
                        change: function() {}
                    })
                },
                focus: function(n) {
                    if (!n.is(":input")) return n.find(".app-drop-box").focus(), !0
                }
            },
            checkbox: {
                render: function(n) {
                    var f = n.container,
                        i = n.inner,
                        r, e = n.field,
                        o = e.Items,
                        u, s = n.editing,
                        h = n.row[e.Index];
                    u = o[o.length - 1][0] == h;
                    h == null ? i.html(sk) : $(String.format('<span class="glyphicon glyphicon-{0}"/>', u ? "check" : "unchecked")).appendTo(i.empty());
                    i.css("visibility", s ? "hidden" : "");
                    s ? (r = $('<div class="app-checkbox-container" tabindex="0"><\/div>').appendTo(t.createContainer(f)), u && r.addClass("app-checkbox-on"), $(pi).appendTo($('<a class="app-checkbox-button" />').appendTo(r))) : f.find(".app-data-input-container").remove()
                },
                focus: function(n, t) {
                    var i = n.find(".app-checkbox-container").focus();
                    return t && t.is('[data-control="label"]') && this._toggleState(i), !0
                },
                click: function(n) {
                    var i = ki(n.clientX),
                        t = $(n.target).closest("[data-input]").find(".app-checkbox-container");
                    t.offset().left - 8 <= i && i <= t.offset().left + t.outerWidth() + 8 && (this._toggleState(t), s || t.focus(), n.preventDefault())
                },
                _toggleState: function(n) {
                    var r = n.is(".app-checkbox-on"),
                        f = n.find(".app-checkbox-button"),
                        u = n.closest("[data-checkbox-style]").attr("data-checkbox-style"),
                        i;
                    if (t.cancel()) {
                        if (lt(), n.toggleClass("app-checkbox-on"), u != "circle" && u != "square")
                            if (r) n.addClass("app-checkbox-on app-animation").addClass("app-animate-off").one("transitionend", function() {
                                setTimeout(function() {
                                    n.removeClass("app-animation").removeClass("app-checkbox-on app-animate-off")
                                })
                            });
                            else n.addClass("app-animation").addClass("app-animate-on").one("transitionend", function() {
                                n.removeClass("app-animation").removeClass("app-animate-on")
                            });
                        i = t.elementToField(n);
                        t.execute({
                            dataView: i._dataView,
                            values: [{
                                name: i.Name,
                                value: !r
                            }],
                            redraw: !1
                        })
                    }
                }
            },
            lookup: {
                render: function(n) {
                    var u = n.originalField = n.field,
                        a = u.ItemsTargetController;
                    n.field = n.dataView._allFields[n.field.AliasIndex];
                    var o = n.inner,
                        s = n.container,
                        e = s.find(".app-data-input-button"),
                        p = s.data("node"),
                        c = n.editing,
                        l, h, v, r, y;
                    !c && a ? t.methods.listbox.render(n) : (c && !e.is(".app-data-input-button") && (e = $('<span class="app-data-input-button"><span class="app-caret"><\/span><\/span>').insertAfter(o).attr("title", ou.Select.HeaderText), l = u.ItemsStyle, l == "Lookup" ? e.addClass("app-caret-r") : l == "DropDownList" && $('<span class="app-caret"><\/span>').appendTo(e.addClass("app-caret-u-d"))), c ? o.css("max-width", p.self.width() - (e.outerWidth() || 22) - parseInt(o.css("padding-left")) * 2) : (e.length && e.is(".app-data-input-button") && e.remove(), o.find(".app-control-before").remove(), s.removeClass("app-null app-has-helper")), a ? (h = s.find(".app-control-before"), h.length || (o.text(t.fieldToPlaceholder(u)), s.addClass("app-null app-has-helper"), h = $('<span class="app-control-before app-control-helper" tabindex="0"/>').insertBefore(o), y = $("<ul/>").appendTo(h), v = u.DynamicItems || u.Items, r = n.row[u.Index], r || (r = ""), typeof r != "string" && (r = r.toString()), r ? (r = r.split(f._simpleListRegex), $(v).each(function(n) {
                        var t = this,
                            i = t[0],
                            u;
                        r.indexOf(i.toString()) != -1 && (u = $("<li/>").text(t[1]).attr("data-index", n).appendTo(y))
                    })) : h.hide())) : t.methods.text.render(n), c || !u.ItemsDataController || n.row[u.Index] == null || u.tagged("lookup-details-hidden") || $('<span class="app-field-object-ref app-feedback"/>').appendTo(o).attr("title", i.LookupViewAction))
                },
                focus: function(n) {
                    var r = n.find(".app-control-helper"),
                        s = r.data("focus") == !1,
                        f = n.find("li"),
                        e, u, i, o;
                    return (r.removeData("focus"), !s && f.length) ? t.valid() ? (e = n.closest("[data-input]"), e.addClass("app-has-focus"), r.focus(), f.removeClass("app-focus").first().addClass("app-focus"), !0) : !1 : (u = t.methods.text.focus(n), u && (i = t.elementToField(n), o = i._dataView.editRow(), n.data("autoComplete") == !1 ? n.removeData("autoComplete") : o[i.Index] == null && (t.elementToButton(n).removeClass("app-caret-r"), i.ItemsStyle == "Lookup" && this._showList({
                        field: i,
                        value: null,
                        input: n.closest("[data-input]").find(".app-data-input")
                    }))), u)
                },
                click: function(r) {
                    var e = t.eventToButton(r),
                        h = e.offset(),
                        c = ki(r.clientX),
                        u = $(r.target),
                        f;
                    if (u.is("li")) {
                        if (!t.cancel()) return r.preventDefault(), !1;
                        if (f = u.closest("[data-input]"), f.find(".app-data-input").length) {
                            r.preventDefault();
                            f.find(".app-data-input").blur();
                            setTimeout(function() {
                                u.trigger("vclick")
                            }, 100);
                            return
                        }

                        function l() {
                            f.removeClass("app-has-focus");
                            u.removeClass("app-focus")
                        }
                        u.is(".app-focus") || u.parent().find("li").removeClass("app-focus");
                        f.find(".app-data-input").blur();
                        var a = f.find(".app-control-helper").blur(),
                            o = t.elementToField(u),
                            v = [{
                                text: ou.Delete.HeaderText,
                                icon: "trash",
                                callback: function() {
                                    t.methods.lookup._removeBasketItem(u, !0);
                                    a.focus()
                                }
                            }];
                        o.tagged("lookup-details-hidden") || v.push({
                            text: i.LookupViewAction,
                            icon: "carat-r",
                            callback: function() {
                                l();
                                n.details({
                                    field: o,
                                    key: o.Items[parseInt(u.attr("data-index"))][0]
                                })
                            }
                        });
                        f.addClass("app-has-focus");
                        u.addClass("app-focus");
                        nt({
                            anchor: u,
                            items: v,
                            autoFocus: !1,
                            afterclose: function(n, t) {
                                s ? l() : t || a.focus()
                            }
                        });
                        r.preventDefault()
                    } else u.closest(".app-control-helper").length ? u.closest(".app-control-helper").focus() : e.length && h.left <= c && c < h.left + e.outerWidth() + 8 && this.clickButton(r) && r.preventDefault()
                },
                clickButton: function(i, r) {
                    function y() {
                        f.removeClass("ui-btn-active");
                        o = u._dataView;
                        c = o._allFields[u.AliasIndex];
                        l = o.editRow();
                        n.lookup({
                            field: u,
                            value: v ? l[u.Index] : null,
                            text: v ? c.format(l[c.Index]) : null,
                            change: function(n) {
                                if (u.ItemsTargetController) {
                                    if (n.length >= 2)
                                        if (t.methods.lookup._useItemValue(u, [n[0].value, n[1].value])) s || e.find(".app-control-helper").data("focus", !1);
                                        else {
                                            e.addClass("app-has-focus").find(".app-control-helper").focus();
                                            return
                                        }
                                } else t.execute({
                                    dataView: o,
                                    values: n
                                });
                                s || setTimeout(function() {
                                    a.focus(e)
                                }, 100)
                            }
                        })
                    }
                    var f = t.eventToButton(i),
                        a = t.elementToMethod(f),
                        e = f.closest("[data-input]"),
                        h = e.find(".app-data-input").length > 0,
                        u = t.eventToField(i),
                        o, c, v = !u.ItemsTargetController,
                        l;
                    return !h && !t.cancel() ? !1 : (h && t.popup(":visible") ? (t.popup("hide"), t.methods.lookup._buttonUp(f)) : u.ItemsStyle != "Lookup" ? (f.removeClass("ui-btn-active"), h || a.focus(e), e.find(".app-data-input").trigger($.Event("keydown", {
                        ctrlKey: !0,
                        which: 32
                    }))) : r != !1 ? (f.addClass("ui-btn-active"), setTimeout(y, ft)) : y(), ht = !0, setTimeout(function() {
                        ht = !1
                    }, 200), !0)
                },
                blur: function(n) {
                    var i = $(n.target),
                        u = i.closest("[data-input]"),
                        f = u.find(".app-control-inner"),
                        e = i.data("restoreText"),
                        r = t.eventToField(n);
                    r.ItemsTargetController ? (f.text(t.fieldToPlaceholder(r)), t.fitContainer(u)) : e != null && f.text(e);
                    this._buttonUp(i);
                    t.popup("hide");
                    clearTimeout(r._showListTimeout)
                },
                setup: function(n) {
                    var i = t.eventToField(n);
                    n.change = function(n) {
                        var e = i._dataView,
                            r = n.input,
                            f, u;
                        if (n.value ? i.AllowAutoComplete == !1 && (r.val(r.data("original")).select(), n.value = "") : (t.popup(":visible") || i.AllowAutoComplete == !1 || i.ItemsStyle == "DropDownList") && (clearTimeout(i._showListTimeout), r.val(""), r.removeData("restoreText"), t.popup("hide"), t.methods.lookup._clearValue(i), r.data("original", ""), i.ItemsTargetController && (u = r.closest("[data-input]"), u.find(".app-control-inner").text(t.fieldToPlaceholder(i)), t.fitContainer(u))), f = t.elementToButton(r), f.removeClass("app-caret-r"), r.data("autoComplete") == !1) r.removeData("autoComplete"), clearTimeout(i._showListTimeout);
                        else {
                            if (!n.value && (t.methods.lookup._clearValue(i), i.ItemsTargetController && n.keyCode)) return;
                            t.methods.lookup._showList({
                                field: i,
                                value: n.value,
                                originalValue: r.data("original"),
                                input: r,
                                keyCode: n.keyCode
                            })
                        }
                    }
                },
                _clearValue: function(n) {
                    if (!n.ItemsTargetController) {
                        var e = n._dataView,
                            r = [{
                                name: n.Name,
                                value: null
                            }],
                            o = n.Copy,
                            u, i;
                        if (n.Index != n.AliasIndex && r.push({
                                name: e._allFields[n.AliasIndex].Name,
                                value: null
                            }), o)
                            while (i = f._fieldMapRegex.exec(o)) i = i[1], u = n._dataView.findField(i), (u && u.ReadOnly || i == "null") && r.push({
                                name: i,
                                value: null
                            });
                        t.execute({
                            dataView: e,
                            values: r
                        })
                    }
                },
                _buttonUp: function(n) {
                    var i = t.elementToField(n);
                    n.is(".app-data-input-button") || (n = t.elementToButton(n));
                    i.ItemsStyle == "Lookup" && n.addClass("app-caret-r");
                    n.removeClass("app-caret-u app-caret-d")
                },
                _getCopyFields: function(n) {
                    var o = n.Copy,
                        i, t, r, u, e;
                    if (o && (i = n._dataView, t = t = i.session(n.Name + "_copyFields"), !t)) {
                        for (t = []; r = f._fieldMapRegex.exec(o);) u = r[1], e = r[2], (i.findField(u) || e == "null") && t.push({
                            fromField: e,
                            toField: u
                        });
                        i.session(n.Name + "_copyFields", t)
                    }
                    return t
                },
                _showList: function(r) {
                    function it(n) {
                        var k, h, lt;
                        o = s.val();
                        var b = l.data("ul"),
                            k, h, d = s.offset(),
                            at = s.outerHeight(),
                            tt = w(s),
                            a = tt.offset(),
                            bt = tt.width(),
                            it, v, vt = o && RegExp.escape(o),
                            kt = o ? new RegExp(p ? vt : "^" + vt + ".*", "i") : null,
                            f, st = 0,
                            yt, c, ut, ht, ft, et, e, pt, wt, ct, rt;
                        l.data("list", n).css({
                            width: "",
                            "max-width": "",
                            "min-width": "",
                            "max-height": "",
                            height: ""
                        }).removeClass("app-wrap");
                        b.empty();
                        l.appendTo(tt).show();
                        $(n).each(function(e) {
                            var h = this,
                                s, c;
                            h.totalRowCount ? o.length >= h.value.length && st < h.totalRowCount && $('<li class="app-instruction"/>').appendTo(b).text(String.format(i.ShowingItemsRange, st, h.totalRowCount)) : h.text ? (c = $("<li/>").appendTo(b).text(h.text), h.instruction && c.addClass("app-instruction"), h.command && (c.attr("data-command", h.command), h.command == "SeeAll" && $('<span class="app-icon app-caret-r"><span class="app-caret"/><\/span>').appendTo(c))) : (s = h[1], f = s ? s.toString().match(kt) : null, (u.AllowNulls || h[0] != null || !o || o == s) && (y || !o && (u.ItemsStyle == "AutoComplete" || u.ItemsStyle == "Lookup") || o && s && (f || s == o || o == r.originalValue)) && (st++, s != null && (s = s.toString()), c = $("<li/>").appendTo(b).attr("data-index", e), !yt && f && (v = s, it = c, yt = h[0] != null), f && p && o != r.originalValue ? (f.index && $("<span/>").text(s.substring(0, f.index)).appendTo(c), $("<b/>").text(s.substring(f.index, f.index + f[0].length)).appendTo(c), f.index + f.length < s.length - 1 && $("<span/>").text(s.substring(f.index + f[0].length)).appendTo(c)) : f && !p ? ($('<span class="app-text-normal"/>').text(s.substring(0, o.length)).appendTo(c), $('<span class="app-text-bold"/>').text(s.substring(o.length)).appendTo(c)) : c.text(s), s == wt && h.length > 2 ? (rt = t.methods.lookup._itemToDetails(u, h), rt && $("<i/>").text(rt).appendTo(c), ct || (rt = t.methods.lookup._itemToDetails(u, n[e - 1]), rt && $("<i/>").text(rt).appendTo(c.prev()), ct = !0)) : ct = !1, wt = s))
                        });
                        !it && o && n[0].text != ot.Loading && n[0].text != i.NoMatches && ($('<li class="app-instruction"/>').text(i.NoMatches).insertBefore(b.find("li:first")), k = g.parent(), h = k.find(".app-control-inner"), h.length && s.data("restoreText") == null && s.data("restoreText", h.text()), h.text(o + "  "), t.fitContainer(k, g));
                        c = Math.max(b[0].getBoundingClientRect().width + 2, nt.length ? nt.offset().left - d.left + nt.outerWidth() : 0);
                        c = Math.min(c, bt * .9);
                        l.addClass("app-wrap");
                        l.css({
                            width: c,
                            "max-width": c,
                            "min-width": c
                        });
                        ut = d.left - a.left - 1;
                        ft = d.top - a.top;
                        ht = d.top + at - a.top + tt.scrollTop();
                        et = a.top + tt.height() - (d.top + at) + 1;
                        e = l.outerHeight();
                        et < e ? ft > et ? (pt = !0, e = ft < e ? ft : "") : e = et : e = "";
                        e && (e -= 20);
                        e = e || l.outerHeight();
                        pt && (ht = d.top - e - a.top + tt.scrollTop(), lt = t.elementToButton(s), lt.is(".app-caret-u-d") || lt.addClass("app-caret-u"));
                        ut + c + a.left > su - 10 && (ut = su - a.left - 1 - c - 10);
                        l.css({
                            left: ut,
                            top: ht,
                            "max-height": e,
                            height: e
                        });
                        it && (it.addClass("app-selected"), l.scrollTop(it.position().top - (e - it.outerHeight()) / 2), v = v.trim(), o.length < v.length && !p && r.keyCode != 8 && (k = s.closest("[data-input]"), h = k.find(".app-control-inner"), h.length && s.data("restoreText") == null && s.data("restoreText", h.text()), h.text(v), t.fitContainer(k, s.closest(".app-data-input-container").width("")), s.data("autoComplete", !1), s.val(v)[0].setSelectionRange(o.length, v.length), s.removeData("autoComplete")))
                    }

                    function et(n) {
                        l.is(":visible") && l.data("field") == c._id + "_" + u.Name && (e.splice(0, 1), it([
                            [null, n.get_message()]
                        ].concat(e)))
                    }

                    function st() {
                        var v = u.ItemsDataController,
                            h = u.ItemsDataTextField,
                            p = u.ItemsDataValueField,
                            a = c.editRow(),
                            y = [h],
                            w = c.get_contextFilter(u, c.extension().collect()),
                            b = o != r.originalValue ? [h + ":$" + ft + "$%js%" + f.serializer.serialize(o)] : [];
                        l.data("field", c._id + "_" + u.Name);
                        $(t.methods.lookup._getCopyFields(u)).each(function() {
                            this.fromField != "null" && y.push(this.fromField)
                        });
                        $app.execute({
                            controller: v,
                            view: u.ItemsDataView,
                            sync: a[d.Index] == o ? a[u.Index] : null,
                            lookupContext: {
                                Controller: c._controller,
                                View: c._viewId,
                                FieldName: u.Name
                            },
                            _filter: b,
                            sortExpression: h,
                            format: !0,
                            pageSize: go,
                            fieldFilter: y,
                            externalFilter: w,
                            success: function(t) {
                                if (n.pageInfo(c) && s.parent().length) {
                                    var r = [],
                                        f = t[v];
                                    $(f).each(function() {
                                        var n = this,
                                            i = [n[p || t.primaryKey[0]], n[h]];
                                        rt && $(rt).each(function() {
                                            i.push(n[this.fromField])
                                        });
                                        r.push(i)
                                    });
                                    u.ContextFields || c.session(u.Name + "_listOfValues_" + (a[d.Index] == o ? "" : o).toLowerCase(), r);
                                    e.splice(0, 1);
                                    f.length < t.totalRowCount && r.push({
                                        totalRowCount: t.totalRowCount,
                                        value: o
                                    });
                                    l.is(":visible") && l.data("field") == c._id + "_" + u.Name && (u.ItemsStyle != "Lookup" || o ? e = r.concat(e) : (e.splice(0, 1), e = r.concat(e), e.splice(0, 0, {
                                        text: ut,
                                        instruction: !0
                                    })), e.length || (e = [{
                                        text: i.NoMatches,
                                        instruction: !0
                                    }]), it(e))
                                }
                            },
                            error: et
                        })
                    }
                    var u = r.field,
                        c = u._dataView,
                        y = u.ItemsStyle != "Lookup" && u.ItemsStyle != "AutoComplete",
                        rt = this._getCopyFields(u),
                        b, k, ut = i.TypeToSearch,
                        d = c._allFields[u.AliasIndex],
                        ft = d.AutoCompleteAnywhere ? "contains" : "beginswith",
                        p = ft == "contains",
                        o = r.value || "",
                        h, l = t.popup(),
                        s = r.input,
                        g = s.parent(),
                        nt = t.elementToButton(s),
                        tt, a, v, e = [];
                    if (lt(), g.length) {
                        if (u.ItemsTargetController && s.closest("[data-input]").find(".app-control-before .app-focus").removeClass("app-focus"), y) e = u.DynamicItems || u.Items;
                        else {
                            if (u.AllowAutoComplete != !1)
                                if (o || u.ItemsStyle == "AutoComplete") {
                                    if (h = o.toLowerCase(), !u.ContextFields) {
                                        for (a = c.session(u.Name + "_listOfValues_" + h); !a && h.length;)
                                            if (h = h.substring(0, h.length - 1), a = c.session(u.Name + "_listOfValues_" + h), a && a.length >= go) {
                                                a = null;
                                                break
                                            }
                                        while (a && h.length) {
                                            for (h = h.substring(0, h.length - 1), v = c.session(u.Name + "_listOfValues_" + h); !v && h.length;)
                                                if (h = h.substring(0, h.length - 1), v = c.session(u.Name + "_listOfValues_" + h), v && v.length >= go) {
                                                    v = null;
                                                    break
                                                }
                                            v && v.length < go && (a = v)
                                        }
                                    }
                                    a ? e = e.concat(a) : (e.push({
                                        value: null,
                                        text: ot.Loading,
                                        instruction: !0
                                    }), tt = !0)
                                } else e.push({
                                    value: null,
                                    text: ut,
                                    instruction: !0
                                });
                            u.ItemsStyle == "Lookup" && (u._doSearch ? (u._doSearch = !1, a = u.ContextFields ? null : c.session(u.Name + "_listOfValues_"), a ? e = e.concat(a) : (tt = !0, e.splice(1, 0, {
                                value: null,
                                text: ot.Loading,
                                instruction: !0
                            }))) : o || e.push({
                                text: i.ShowOptions,
                                command: "ShowOptions"
                            }), e.push({
                                text: i.SeeAll,
                                command: "SeeAll"
                            }))
                        }
                        t.canCreateItems(u) && (y && (e = e.slice(0)), e.push({
                            text: ff.GenericNewToolTip,
                            command: "New"
                        }));
                        !y && r.originalValue && e.push({
                            text: i.LookupClearAction,
                            command: "Clear"
                        });
                        e.length || e.push({
                            text: i.NoMatches,
                            instruction: !0
                        });
                        it(e);
                        tt && (clearTimeout(u._showListTimeout), u.ItemsDataValueField || (k = u.ItemsDataController + "_" + u.ItemsDataView + "_DataValueField", u.ItemsDataValueField = f.cache[k]), u.ItemsDataTextField || (b = u.ItemsDataController + "_" + u.ItemsDataView + "_DataTextField", u.ItemsDataTextField = f.cache[b]), u.ItemsDataTextField && u.ItemsDataValueField ? u._showListTimeout = setTimeout(st, 300) : $app.execute({
                            controller: u.ItemsDataController,
                            view: u.ItemsDataView,
                            requiresData: !1,
                            success: function(n) {
                                u.ItemsDataValueField = n.primaryKey[0].Name;
                                u.ItemsDataTextField = n.fields[0].Name;
                                f.cache[k] = u.ItemsDataValueField;
                                f.cache[b] = u.ItemsDataTextField;
                                st()
                            },
                            error: et
                        }))
                    }
                },
                _itemToDetails: function(n, t) {
                    var r = [],
                        u = 2,
                        e = n.Copy,
                        i, o;
                    if (e)
                        while (o = f._fieldMapRegex.exec(e)) i = n._dataView.findField(o[1]), !i || i.Hidden || i.OnDemand || i.Index != i.AliasIndex || r.push(n.format(t[u])), u++;
                    return r.join("; ")
                },
                _rowToValues: function(n, t, i) {
                    var p = n._dataView._allFields[n.AliasIndex],
                        y = n.Copy,
                        o = n.ItemsDataValueField,
                        s = n.ItemsDataTextField,
                        e, r, c, h, l, a = null,
                        v = null,
                        u;
                    if (o || $(t._allFields).each(function() {
                            if (this.IsPrimaryKey) return o = this.Name, !1
                        }), s || $(t._allFields).each(function() {
                            var n = this;
                            if (!n.Hidden && !n.OnDemand) return s = n.Name, !1
                        }), e = t.findField(o), r = t.findField(s), i && (v = i[r.Index], a = i[e.Index]), e)
                        if (r) {
                            if (n.ItemsTargetController && r) e && (u = [{
                                name: e.Name,
                                value: a
                            }]), r && u.push({
                                name: r.Name,
                                value: v
                            });
                            else if (u = [{
                                    name: n.Name,
                                    value: a
                                }], n.Index != n.AliasIndex && u.push({
                                    name: p.Name,
                                    value: v
                                }), y)
                                while (c = f._fieldMapRegex.exec(y)) l = c[2], h = t.findField(l), (h || l == "null") && u.push({
                                    name: c[1],
                                    value: h && i ? i[h.Index] : null
                                })
                        } else f.alert("Invalid text field " + s);
                    else f.alert("Invalid value field " + o);
                    return u
                },
                _removeBasketItem: function(n, i) {
                    if (n.length) {
                        var o = n.closest("[data-input]"),
                            e = t.elementToField(n),
                            s = e._dataView,
                            h = s.editRow(),
                            r = (h[e.Index] || "").split(f._simpleListRegex),
                            c = e.Items[parseInt(n.attr("data-index"))],
                            u;
                        i ? (u = n.next(), u.length || (u = n.prev())) : (u = n.prev(), u.length || (u = n.next()));
                        u.addClass("app-focus");
                        n.remove();
                        r.splice(r.indexOf((c[0] || "").toString()), 1);
                        r.length || (r = null);
                        o.data("redraw", !1);
                        t.execute({
                            dataView: s,
                            values: [{
                                name: e.Name,
                                value: r ? r.join(",") : r
                            }]
                        });
                        r || (o.find(".app-control-helper").hide(), t.methods.lookup.focus(o))
                    }
                },
                _useItemValue: function(n, i) {
                    var f = i[0],
                        u = i[1] || "",
                        c = n._dataView,
                        v = c.editRow(),
                        y = c._allFields[n.AliasIndex],
                        e = $(".app-data-input"),
                        o = e.closest("[data-input]"),
                        p = o.find(".app-control-inner"),
                        w, l, s, h, a;
                    if (n.ItemsTargetController) return s = v[n.Index] || "", f != null && (f = f.toString()), $(s.split(",")).each(function(n) {
                        if (f == this) return w = n, !1
                    }), h = w == null, $(n.Items).each(function(n) {
                        var t = this,
                            i = t[0] != null ? t[0].toString() : i;
                        if (i == f) return l = n, !1
                    }), h && (s && (s += ","), s += f, l == null && (n.Items.push(i), l = n.Items.length - 1)), r.activePage.find('[data-input-container="' + c._id + '"] [data-control="field"][data-field="' + n.Name + '"]').each(function() {
                        var t = $(this),
                            n = t.find(".app-control-helper");
                        n.length && (n.find("li").removeClass("app-focus"), h ? ($("<li/>").text(u).attr("data-index", l).appendTo(n.show().find("ul")), t.data("redraw", !1)) : n.find('li[data-index="' + l + '"]').addClass("app-focus").closest("[data-input]").addClass("app-has-focus"))
                    }), u = "", e.length && (e.data("original", u).val(u)[0].setSelectionRange(0, 0), o.find(".app-data-input-placeholder").show(), p.text(t.fieldToPlaceholder(n)), p.css("width", ""), t.fitContainer(o, e.closest(".app-data-input-container").width("")), h || o.addClass("app-has-focus").find(".app-control-helper").focus()), h && t.execute({
                        dataView: c,
                        values: [{
                            name: n.Name,
                            value: s
                        }]
                    }), h;
                    e.data("original", u).val(u)[0].setSelectionRange(0, u.length);
                    p.text(u);
                    t.fitContainer(o, e.closest(".app-data-input-container").width(""));
                    o.find(".app-data-input-placeholder").hide();
                    (v[n.Index] != f || v[y.Index] != u) && (a = [{
                        name: n.Name,
                        value: f
                    }], n.Index != y.Index && a.push({
                        name: y.Name,
                        value: u
                    }), $(t.methods.lookup._getCopyFields(n)).each(function(n) {
                        a.push({
                            name: this.toField,
                            value: this.fromField == "null" ? null : i[n + 2]
                        })
                    }), t.execute({
                        dataView: c,
                        values: a
                    }))
                }
            },
            autocomplete: {
                render: function(n) {
                    t.methods.lookup.render(n)
                },
                focus: function(n) {
                    return t.methods.lookup.focus(n)
                },
                click: function(n) {
                    t.methods.lookup.click(n)
                },
                clickButton: function(n, i) {
                    return t.methods.lookup.clickButton(n, i)
                },
                blur: function(n) {
                    t.methods.lookup.blur(n)
                },
                setup: function(n) {
                    t.methods.lookup.setup(n)
                }
            },
            dropdownlist: {
                render: function(n) {
                    t.methods.lookup.render(n)
                },
                focus: function(n) {
                    return t.methods.lookup.focus(n)
                },
                click: function(n) {
                    t.methods.lookup.click(n)
                },
                clickButton: function(n, i) {
                    return t.methods.lookup.clickButton(n, i)
                },
                blur: function(n) {
                    t.methods.lookup.blur(n)
                },
                setup: function(n) {
                    t.methods.lookup.setup(n)
                }
            },
            radiobuttonlist: {
                render: function(n) {
                    t.methods.listbox.render(n)
                },
                focus: function(n) {
                    return t.methods.listbox.focus(n)
                },
                click: function(n) {
                    t.methods.listbox.click(n)
                },
                clickButton: function(n, i) {
                    return t.methods.listbox.clickButton(n, i)
                },
                blur: function(n) {
                    t.methods.listbox.blur(n)
                }
            },
            checkboxlist: {
                render: function(n) {
                    t.methods.listbox.render(n)
                },
                focus: function(n) {
                    return t.methods.listbox.focus(n)
                },
                click: function(n) {
                    t.methods.listbox.click(n)
                },
                clickButton: function(n, i) {
                    return t.methods.listbox.clickButton(n, i)
                },
                blur: function(n) {
                    t.methods.listbox.blur(n)
                }
            },
            listbox: {
                render: function(n) {
                    var u = n.inner,
                        b, i, c, r = n.field,
                        s, a, k = n.row,
                        l, d = r.Columns,
                        e, g = r.DynamicItems || r.Items,
                        v, o, h, p, w, nt;
                    if (s = k[r.Index], n.editing) {
                        if (l = t.canCreateItems(r, k), o = g.length, d ? e = Math.ceil((o + (l ? 1 : 0)) / d) : (e = r.Rows, e || (e = 5)), n.container.removeClass("app-null"), p = u.find(".app-focus").text(), i = u.find(".app-data-list"), !i.length) {
                            u.empty();
                            y.height && (b = $('<span class="app-data-list-outer"/>').appendTo(u));
                            i = $('<span class="app-data-list" tabindex="0"/>').appendTo(b || u);
                            y.height && i.css("margin-bottom", -y.height);
                            h = $('<span class="app-hscrollbar2"><span class="app-hscrollbar-handle" data-draggable="hscrollbar"><\/span><\/span>').appendTo(u).find(".app-hscrollbar-handle");
                            i.on("scroll", function() {
                                if (i.data("scrolling") == !1) i.removeData("scrolling");
                                else {
                                    ds(i, h, !0);
                                    var n = h.data("reveal-timeout"),
                                        t = h.parent();
                                    t.addClass("app-scrollbar-reveal");
                                    clearInterval(n);
                                    n = setInterval(function() {
                                        t.removeClass("app-scrollbar-reveal");
                                        clearInterval(n)
                                    }, 200);
                                    h.data("reveal-timeout", n)
                                }
                            })
                        }
                        o && i.empty();
                        i.removeClass("app-inner-shadow-right app-inner-shadow-left app-inner-shadow-left-right");
                        r.ItemsStyle == "CheckBoxList" && s && (v = s.toString().split(f._simpleListRegex));
                        $(g).each(function(n) {
                            n % e == 0 && (c = $("<ul/>").appendTo(i));
                            var t = this,
                                u = $("<li>").appendTo(c).attr("data-index", n);
                            r.HtmlEncode ? u.text(t[1]) : u.html(t[1]);
                            (v && v.indexOf((t[0] || "").toString()) != -1 || s == t[0]) && u.addClass("app-selected")
                        });
                        w = i.find('[data-index="new"]');
                        l ? w.length || (e && o % e != 0 || o < r.Rows || (c = $("<ul/>").appendTo(i)), $("<li>").appendTo(c).attr("data-index", "new").text(ff.GenericNewToolTip)) : w.remove();
                        this._scrollItemIntoView(i, !1);
                        o || l && i.find("li").length == 1 || i.children().addClass("app-hidden");
                        p && u.find("li").each(function() {
                            var n = $(this);
                            if (p == n.text()) return n.addClass("app-focus"), !1
                        });
                        nt = i.next().show();
                        o ? ds(i) : nt.hide()
                    } else u.find(".app-data-list").remove(), (r.ItemsStyle == "CheckBoxList" || r.ItemsTargetController) && s ? (a = r.text(s, !1), r.HtmlEncode ? u.text(a) : u.html(a)) : t.methods.text.render(n)
                },
                focus: function(n) {
                    var t = n.find(".app-data-list");
                    return t.length || (t = n.closest(".app-data-list")), t.focus(), this._focusItem(t), this._scrollItemIntoView(t), !1
                },
                click: function(i) {
                    var r = $(i.target).closest("li"),
                        f, s, u, h, e, o;
                    if (t.cancel() && !r.parent().is(".app-hidden") && (lt(), r.length)) {
                        if (f = r.closest(".app-data-list"), u = t.elementToField(r), u._dataView._busy() || r.parent().is(".app-hidden")) return;
                        if (r.attr("data-index") == "new") {
                            this._focusItem(r);
                            n.lookup({
                                field: u,
                                create: !0,
                                dataInput: f.closest("[data-input]")
                            });
                            i.preventDefault();
                            return
                        }
                        if (h = u._dataView, e = u.DynamicItems || u.Items, e.length)
                            if (u.ItemsStyle == "CheckBoxList") r.toggleClass("app-selected"), o = [], f.find(".app-selected").each(function() {
                                var n = parseInt($(this).attr("data-index")),
                                    t = e[n];
                                o.push((t[0] || "").toString())
                            }), t.execute({
                                dataView: h,
                                values: [{
                                    name: u.Name,
                                    value: o.join(",")
                                }],
                                redraw: !1
                            });
                            else {
                                if (r.is(".app-selected")) {
                                    this._focusItem(f);
                                    return
                                }
                                f.find(".app-selected").removeClass("app-selected");
                                r.addClass("app-selected");
                                t.methods.listbox._useItemValue(u, e[parseInt(r.attr("data-index"))])
                            }
                        s = w(f);
                        s.height() > f.height() && f.focus();
                        this._scrollItemIntoView(r);
                        this._focusItem(r);
                        i.preventDefault()
                    }
                },
                blur: function() {},
                _scrollItemIntoView: function(n, t) {
                    if (n.is(".app-selected,.app-focus") || (n = n.find(".app-selected,.app-focus").first()), n.length) {
                        var r = n.offset(),
                            f = n.outerWidth(),
                            i = n.closest(".app-data-list"),
                            e = i.width(),
                            o = Math.min(f * .2, e * .1),
                            u = i.offset();
                        r.left < u.left ? i.data("scrolling", !1).scrollLeft(n.parent().prev().length ? i.scrollLeft() + r.left - u.left - o : 0) : r.left + f > u.left + e && i.data("scrolling", !1).scrollLeft(i.scrollLeft() + r.left - u.left - (e - f - o));
                        t != !1 && ds(i, null, !1)
                    }
                },
                _focusItem: function(n) {
                    if (!s) {
                        var t = n.closest(".app-data-list"),
                            i = t.find("li").removeClass("app-focus");
                        n.is("li") || (n = t.find(".app-selected").first());
                        n.length || (n = i.first());
                        n.addClass("app-focus")
                    }
                },
                _useItemValue: function(n, i, r) {
                    var e = n._dataView,
                        s, u = [{
                            name: n.Name,
                            value: i[0]
                        }],
                        h = n.Copy,
                        c, l = n.Index != n.AliasIndex,
                        o;
                    if (n.ItemsTargetController) s = e.editRow(), o = s[n.Index] || "", o && (o += ","), o += i[0].toString(), u[0].value = o;
                    else if (l && u.push({
                            name: e._allFields[n.AliasIndex].Name,
                            value: i[1]
                        }), h)
                        for (c = 2; copyInfo = f._fieldMapRegex.exec(h);) copyToField = copyInfo[1], copyFromField = copyInfo[2], e.findField(copyToField) && u.push({
                            name: copyToField,
                            value: copyFromField == "null" ? null : i[c++]
                        });
                    r || (t.execute({
                        dataView: e,
                        values: u,
                        redraw: !1
                    }), u.splice(0, l ? 2 : 1));
                    u.length && t.execute({
                        dataView: e,
                        values: u
                    })
                }
            }
        },
        fieldToPlaceholder: function(n) {
            var t = "",
                i;
            return n.Watermark ? t = n.Watermark : n.ItemsTargetController ? t = ff.AddItem : n.ItemsStyle && n.ItemsStyle != "CheckBox" && n.ItemsStyle != "CheckBoxList" && !n.ItemsTargetController ? (i = n.DynamicItems || n.Items, t = i && i.length && i[0][0] == null ? i[0][1] : ff.SelectLink) : n.AllowNulls || (t = uf.Required), t
        },
        eventToButton: function(n) {
            return this.elementToButton(n.target)
        },
        elementToButton: function(n) {
            return $(n).closest("[data-input]").find(".app-data-input-button")
        },
        eventToMethod: function(n) {
            return this.elementToMethod(n.target)
        },
        elementToMethod: function(n) {
            var i = $(n).closest("[data-input]");
            return t.methods[i.attr("data-input")]
        },
        eventToField: function(n) {
            return this.elementToField($(n.target))
        },
        elementToField: function(n) {
            var e = n.closest("[data-field]"),
                i = e.attr("data-field"),
                r = n.closest("[data-input-container]"),
                t, u;
            if (i && r.length) return t = f.find(r.attr("data-input-container")), t && (u = t.findField(i)), u
        },
        peersOf: function(n) {
            var t = n.closest("[data-input-container]"),
                i, r;
            return t.length || (t = e), n.data("active", !0), r = t.find('[data-input]:not([data-input="none"])').filter(function() {
                return $(this).is(":visible")
            }).each(function(n) {
                var t = $(this);
                if (t.data("active")) return i = n, t.removeData("active"), !1
            }), {
                list: r,
                index: i
            }
        },
        eventToDirection: function(n) {
            function u() {
                return $(t).closest('[data-layout="form"]').length > 0
            }
            var t = n.target,
                r, i = n.keyCode || n.which;
            if (i == 9 && (r = n.shiftKey ? "left" : "right"), i != 37 || this.selectionStart != 0 || t.selectionEnd != 0 || u() || (r = "left"), i == 39 && t.value && t.selectionStart == t.value.length && !u() && (r = "right"), (i != 38 || n.ctrlKey) && (i != 13 || !n.shiftKey) || t.tagName == "TEXTAREA" && t.selectionStart || (r = "up"), i == 40 && !n.ctrlKey || i == 13 && !n.shiftKey) {
                var f = t.tagName == "TEXTAREA",
                    e = t.tagName == "INPUT",
                    o = t.selectionStart,
                    s = t.value;
                (e || f) && !e && (!f || (i != 40 || o != s.length) && (i != 13 || o != 0 || t.selectionEnd != s.length)) || (r = "down")
            }
            return r
        },
        blur: function(n) {
            this.move(n)
        },
        move: function(n, i, r) {
            function c(i) {
                if (t.valid()) {
                    var r = $(i),
                        e = r.attr("data-input"),
                        u = t.methods[e],
                        f = r.find("[data-input-hotspot]");
                    u && u.focus && u.focus(f.length ? f : r, n)
                }
            }
            var e;
            n.is("[data-input]") || (n = n.closest("[data-input]"));
            var o = n.find(".app-data-input"),
                h = n.closest('[data-layout="form"]').length > 0,
                f = typeof i == "string" ? null : i,
                u;
            lt();
            !f && i && (h && (i == "down" && (i = "right"), i == "up" && (i = "left")), e = t.peersOf(n), i == "left" ? e.index ? f = e.list[e.index - 1] : r == 9 && (u = t.find(n, "up"), u && u.length && (f = u[u.length - 1])) : i == "right" ? e.index < e.list.length - 1 ? f = e.list.get(e.index + 1) : r == 9 && (u = t.find(n, "down"), u && u.length && (f = u[0])) : (i == "up" || i == "down") && (u = t.find(n, i), u && (f = u[u.length > e.index ? e.index : u.length - 1])), h && !f && (f = n));
            s ? (o.blur(), f && c(f)) : setTimeout(function() {
                o.blur();
                f && setTimeout(function() {
                    c(f)
                }, 10)
            }, 10)
        },
        find: function(n, t) {
            var i, r, u;
            return n.is("[data-input-container]") || (n = n.closest("[data-input-container]")), i = n.data("active", !0).parent().find("[data-input-container]"), $(i).each(function(n) {
                var t = $(this);
                if (t.data("active")) return r = n, t.removeData("active"), !1
            }), u = t == "up" ? r == 0 ? null : $(i.get(r - 1)) : r < i.length - 1 ? $(i.get(r + 1)) : null, u ? u.find('[data-input]:not([data-input="none"])') : null
        },
        popup: function() {
            var t = this,
                n = t._popup;
            if (arguments.length == 1)
                if (arguments[0] == "hide") $(n).hide().appendTo(e);
                else return $(n).is(arguments[0]);
            else return n || (n = t._popup = $('<div class="app-data-input-popup"><\/div>').hide(), n.data("ul", $("<ul/>").appendTo(n))), n
        },
        render: function(n) {
            var i = n.container,
                e = n.inner,
                o = n && n.dataView || f.find(i.closest("[data-input-container]").attr("data-input-container")),
                r = n.field,
                s = n.row,
                u = n.editing,
                h, c, l, a, v;
            if (o && !r) {
                if (i.is("[data-layout]") && !i.data("prepared")) return;
                u = u != null ? u : o.extension().editing();
                i.attr("data-state", u ? "write" : "read");
                s || (s = o.extension().commandRow());
                u ? i.find('[data-control="field"]').each(function() {
                    var i = $(this),
                        f = i.data("node"),
                        r, n;
                    f.ready && (r = i.attr("data-field"), n = o.findField(r), n && n.Type != "DataView" && t.render({
                        container: i,
                        dataView: o,
                        field: n,
                        editing: u,
                        row: s
                    }))
                }) : i.find('[data-control="field"]').removeAttr("data-input")
            } else {
                if (v = i.data("node"), !v.ready) return;
                if (!i.is(":visible")) {
                    v.dirty = !0;
                    return
                }
                r && (a = u && i.attr("data-read-only") != "true" && !r.isReadOnly() && !r._inputReadOnly, c = (r.ItemsStyle || (r.OnDemand ? "blob" : "text")).toLowerCase(), i.attr("data-input", a ? c : "none"), h = i.attr("data-placeholder"), h && (r.Watermark = h == "$label" ? r.HeaderText : h));
                l = t.methods[c];
                l && (e || (e = i.find(".app-control-inner")), e.length ? e.addClass("app-field-data") : e = i, l.render({
                    container: i,
                    inner: e,
                    dataView: o,
                    field: r,
                    row: s,
                    editing: a
                }))
            }
        },
        createContainer: function(n) {
            var i = n.children(),
                t = $('<div class="app-data-input-container"><\/div>').appendTo(n);
            return i.each(function() {
                var n = this;
                n.className.match(/\b(app-control-helper)\b/) || (n.style.visibility = "hidden")
            }), this.fitContainer(n, t), t
        },
        fitContainer: function(n, t) {
            t || (t = n.find(".app-data-input-container"));
            var i = n.find(".app-data-input-button"),
                u = n.is(".app-has-helper"),
                r = n.find(".app-control-inner"),
                f = (r.length ? r : n)[0].getBoundingClientRect().height;
            i.length && (i.css("visibility", ""), t.css({
                height: f,
                width: u ? r.outerWidth() : Math.ceil(i.position().left) - parseInt(t.css("padding-left")) * 2 + 3
            }))
        },
        execute: function(n) {
            var i = n.dataView,
                e = n.values,
                v = e.length,
                c = n.populateDynamicLookups,
                a, y = {},
                o, u, s, l;
            typeof i == "string" && (i = f.find(i));
            a = n.container || r.activePage.find('[data-input-container="' + i._id + '"]');
            c != !1 && $(e).each(function() {
                var n = this,
                    t = i.findField(n.name || n.Name);
                t && i._enumerateContextFieldValues(t, e, y)
            });
            l = i.editRow();
            c != !1 && $(e).each(function() {
                var n = this,
                    r = n.name || n.Name,
                    t = i.findField(r);
                t.CausesCalculate && !o && (o = t);
                l[t.Index] = n.name ? n.value : n.NewValue
            });
            c != !1 && (u = {
                dataView: i,
                row: l,
                fields: [],
                container: a
            }, t.evaluate(u), u.visibilityChanged && (clearTimeout(h._visibilityChangeTimeout), h._visibilityChangeTimeout = setTimeout(function() {
                nf()
            }, 10)));
            u && u.fields.length ? (s = e.slice(), $(s).each(function() {
                var n = this,
                    r = i.findField(n.name || n.Name),
                    t = u.fields.indexOf(r);
                t != -1 && u.splice(t, 1)
            }), $(u.fields).each(function() {
                s.push({
                    name: this.Name
                })
            })) : s = e;
            $(s).each(function() {
                var r = this,
                    u = r.name || r.Name,
                    f = i.findField(u),
                    e = i.editing(),
                    o = $(a).find('[data-control][data-field="' + u + '"]');
                o.each(function() {
                    var r = $(this),
                        o = r.attr("data-control"),
                        u;
                    o != "label" && (u = e && r.attr("data-read-only") != "true" && !f.isReadOnly(), r.data("redraw") == !1 ? r.removeData("redraw") : n.redraw == !1 && u || t.render({
                        container: r,
                        inner: r.find(".app-control-inner"),
                        dataView: i,
                        field: f,
                        row: l,
                        editing: u
                    }))
                })
            });
            o && n.raiseCalculate != !1 && i._raiseCalculate(o, o);
            c != !1 && v != e.length && i._raisePopulateDynamicLookups();
            or(null, !0)
        },
        evaluate: function(n) {
            var t = n.dataView,
                u = n.row,
                i = n.scope,
                f = n.fields,
                r = n.container,
                e, o = [],
                s = [];
            $(t._expressions).each(function() {
                var h = this,
                    c = h.Scope,
                    a, l, v, y = "",
                    p;
                h.Type == 1 && (c == 5 && (!i || i.readOnly) ? (a = t.findField(h.Target), a && (l = !!t._evaluateJavaScriptExpressions([h], u, !1), v = a._inputReadOnly != l, a._inputReadOnlyChanged = v, a._inputReadOnly = l, v && f && f.indexOf(a) == -1 && f.push(a))) : (c == 3 || c == 2 || c == 7) && r && (!i || i.visibility) ? (l = !!t._evaluateJavaScriptExpressions([h], u, !1), v = h._visChanged != l, h._visChanged = l, v && (n.visibilityChanged = !0, c == 3 ? y = "f:" : c == 2 ? (y = "c:", e = !0) : c == 7 && (y = "v:"), p = r.find('[data-visibility="' + y + h.Target + '"]').css("display", l ? "" : "none"), l && $(p).each(function() {
                    var n = $(this).data("node");
                    n && o.push(n)
                }))) : c == 1 && (!i || i.readOnly) && s.push(h))
            });
            s.length && r && kf(t, u, r, s);
            e && t._isWizard && cu("status");
            o.length && de({
                controls: $(o)
            });
            e && hr()
        },
        value: function(n) {
            var t = $(".app-data-input").first();
            if (arguments.length) t.val(n), t.closest("[data-input]").find(".app-data-input-placeholder").css("display", n ? "none" : "");
            else return t.length ? t.val() : null
        },
        valid: function(n) {
            if (arguments.length) this._valid = n != !1;
            else return this._valid != !1
        },
        cancel: function(n) {
            return t._canceled = n == !1, bb(), t._canceled = !1, t.valid()
        },
        triggerSetValue: function(n, t, i) {
            this.valid(!0);
            var r = $.Event("setvalue.input.app", {
                inputValue: t,
                inputOriginalValue: i,
                inputElement: n[0],
                inputValid: !0,
                inputError: null
            });
            return n.trigger(r), r.inputElement = null, this.valid(r.inputValid), r
        },
        focus: function(n) {
            var u;
            if (!b) {
                var f = n.fieldName ? '[data-field="' + n.fieldName + '"]' : "",
                    i = n.container || r.activePage.find('[data-layout][data-state="write"]'),
                    e = i.find("[data-control]" + f + ':not([data-input="none"])');
                e.each(function() {
                    var r = $(this),
                        a = r.offset(),
                        s = t.methods[r.attr("data-input")],
                        h, e = r.closest('[data-container="tab"]'),
                        o = r.closest('[data-container="wizard"]'),
                        l, c;
                    if (s && s.focus && (f || !e.length || e.is(".app-tab-active")) && (!o.length || cu("visible", {
                            step: o,
                            container: i
                        }))) return o.length && cu("show", {
                        step: o,
                        container: i
                    }), r.closest('[data-container="collapsible"].app-container-collapsed').each(function() {
                        var n = $(this);
                        n.removeClass("app-container-collapsed").find(".app-icon-carat").attr("title", eu.Minimize);
                        wc($(n.children()[1]), !0)
                    }), e.length && !e.is(".app-tab-active") && e.closest('[data-container="tabset"]').first().find(".app-tabs").first().find(".ui-btn").filter(function() {
                        return $(this).text() == e.attr("data-tab-text")
                    }).trigger("vclick"), vt(), s.focus(r), u = !0, n.message && (t.popup("hide"), l = t.elementToField(r), l.ItemsStyle == "Lookup" && (c = t.elementToButton(r), c.addClass("app-caret-r"), c.removeClass("app-caret-u app-caret-d")), h = r.find(".app-data-input,.app-data-list"), h.length && setTimeout(function() {
                        var t = h.offset();
                        ah(t.left + 1, t.top + r.outerHeight(), n.message, null, !0)
                    })), !1
                })
            }
            return u
        },
        focusCopyMaster: function(n) {
            var i, r = new RegExp("\\b" + n.Name + "\\s*=\\s*.+\\b");
            $(n._dataView._fields).each(function() {
                var n = this,
                    t = n.Copy;
                if (t && r.exec(t)) return i = n.Name, !1
            });
            i && t.focus({
                fieldName: i
            })
        },
        canCreateItems: function(n, t) {
            t || (t = n._dataView.editRow());
            var i = !!n.ItemsNewDataView,
                u = n.ContextFields,
                r, e;
            if (i && u)
                while (e = f._fieldMapRegex.exec(u)) r = n._dataView.findField(e[2]), r && t[r.Index] == null && (i = !1);
            return i
        }
    };
    $(document).on("getvalue.input.app", function(n) {
        var i = t.eventToField(n),
            e = t.eventToMethod(n),
            u, f, o, r, s;
        i && (f = i._dataView, u = f._allFields[i.AliasIndex], i.Index == u.AliasIndex || i.ItemsStyle || (u = i), s = f.editRow(), r = s[i.Index], i.ItemsTargetController ? r = null : i.ItemsStyle && i.ItemsStyle != "Lookup" && i.ItemsStyle != "AutoComplete" && (o = f._findItemByValue(i, r), o && (r = o[1])), n.inputValue = r != null ? i.format(r) : "", n.inputValueRaw = r, n.inputDataType = i.Type, u.Len && (n.inputMaxLength = u.Len), i.Index != u.Index && (r = s[u.Index], n.inputAltValue = r != null ? u.format(r) : ""), i.ItemsStyle || (n.inputRows = i.Rows), n.inputIsPassword = i.TextMode == 1, n.placeholder = t.fieldToPlaceholder(i), e && e.setup && e.setup(n))
    }).on("setvalue.input.app", function(n) {
        var i = t.eventToField(n),
            u, s, h = $(n.target),
            c = h.closest("[data-field]"),
            r = n.inputValue,
            e, o, f;
        !i || i.isReadOnly() || i.ItemsStyle || i.OnDemand || (u = i._dataView, s = i.Name, o = u.editRow(), o && (String.isBlank(r) ? r = null : (e = {
            NewValue: r
        }, f = u._validateFieldValueFormat(i, e, !0), f || (r = e.NewValue)), f ? (n.inputError = f, n.inputValid = !1) : (i.Index != i.AliasIndex && (i.AliasIndex = i.Index), t.execute({
            dataView: u,
            values: [{
                name: i.Name,
                value: r
            }]
        }))))
    }).on("vclick", '[data-control="action"]', function(n) {
        var r = $(n.target),
            u = r.closest("[data-control]"),
            e = u.closest("[data-input-container]"),
            i = f.find(e.attr("data-input-container")),
            t;
        if (i) return lt(), t = i.findAction(u.attr("data-action")), t && i._isActionAvailable(t) && v(r.closest(".app-action-column-button"), function() {
            var n = i.extension();
            n.command(n.commandRow(), t.CommandName, t.CommandArgument, t.CausesValidation, t.Path)
        }), !1
    }).on("vclick", '[data-control="label"]', function() {
        var i = $(this),
            e = i.closest("[data-input-container]"),
            o = f.find(e.attr("data-input-container")),
            h = i.attr("data-field"),
            c, n, l, a, r, u;
        return o && (s || !ep()) && (u = o.findField(h), u && (i.data("active", !0), e.find("[data-control]").each(function() {
            var t = $(this),
                i = t.attr("data-control"),
                r = t.attr("data-field");
            if (i == "label") t.data("active") && (l = !0);
            else if (r == h)
                if (l) {
                    if (n) return !1;
                    n = t
                } else c = t
        }), i.removeData("active"), n || (n = c), n && (a = n.attr("data-input"), r = t.methods[a], r && (r.focus ? r.focus(n, i) : t.focusCopyMaster(u))))), !1
    }).on("vclick mousedown", "[data-input]", function(n) {
        var i, r;
        if (!$(n.target).closest(".app-data-input-button").length) {
            if (n.type == "mousedown" && n.which != 3) return;
            if ($(this).find(".app-data-input").length && !$(n.target).closest(".app-control-helper").length) return
        }
        if (!ht && (i = t.eventToMethod(n), i)) {
            if (i.click && i.click(n), n.isDefaultPrevented()) return !1;
            i.focus ? i.focus($(n.target)) && (vt(), n.preventDefault(), n.type == "mousedown" && $(this).find(".app-data-input-placeholder").css("display", "none")) : n.type == "vclick" && (s || !ep()) && (r = t.eventToField(n), t.focus({
                fieldName: r.Name
            }) || t.focusCopyMaster(r))
        }
    }).on("blur", ".app-data-input", function(i) {
        function p(n, t) {
            clearTimeout(h._focusTextInputTimeout);
            h._focusTextInputTimeout = setTimeout(function() {
                u.focus();
                n && (u.attr("title", n), ah(u.offset().left + 1, u.offset().top + u.outerHeight() + 1, n, null, !0));
                t && t(e)
            }, 10)
        }

        function k() {
            if (s) {
                clearTimeout(h.textInputScrollTimeout);
                clearTimeout(h.textInputStubTimeout);
                var t = r.activePage.find(".app-bar-footer");
                h.textInputStubTimeout = setTimeout(function() {
                    $(".app-text-input-stub").remove();
                    t.length && n.bar("show", t)
                }, 200)
            }
        }

        function c(n) {
            t.valid(!0);
            var i = $.Event("remove.input.app", {
                input: u
            });
            $(document).trigger(i);
            setTimeout(function() {
                u.attr("title") && lt();
                u.remove();
                y.remove().empty();
                e.find(".app-control-helper .app-focus").length || e.removeClass("app-has-focus");
                w.contents().css("visibility", "");
                n && n(e);
                $(".cloud-grid-focus").removeClass("cloud-grid-focus")
            }, 10);
            k()
        }

        function l(n) {
            var t, n = n.split(/,/);
            return n.length == 1 ? t = b.closest(n[0]).is(u.closest(n[0])) : $(n).each(function() {
                return t = l(this), t ? !1 : void 0
            }), t
        }
        var u = $(i.target),
            o = t.eventToMethod(i),
            e = u.closest("[data-input]"),
            a = u.data("original"),
            v = u.val().trim(),
            y = u.parent(),
            w = y.parent(),
            b = $(i.relatedTarget),
            f;
        if (t._canceled) {
            clearTimeout(h._focusTextInputTimeout);
            c();
            return
        }
        if (l(".app-data-input-popup,.app-data-input-helper,.app-data-input-button")) return !1;
        if (u.data("keepFocus")) return u.removeData("keepFocus"), !1;
        (o && o.blur && o.blur(i), i.isDefaultPrevented()) || (l(".app-data-input-container,.app-data-input-placeholder") ? (i.preventDefault(), p()) : v == a ? c() : (f = t.triggerSetValue(u, v, a), f.inputValid ? c(f.inputValidCallback) : (i.preventDefault(), p(f.inputError, f.inputErrorCallback))))
    }).on("keydown", ".app-data-input", function(n) {
        var f = this,
            v = n.ctrlKey || n.metaKey,
            i = n.keyCode || n.which,
            p, ot, o = $(n.target),
            s = o.closest("[data-input]"),
            d, ht = o.closest('[data-layout="form"]').length > 0,
            g, u, b, ct, h, r, nt, e, tt, it, k, c, rt, ut, l, a;
        if (i == 13 && f.type == "password" && f.value) return ct = w($(f)).closest(".ui-page").find(".app-bar-buttons .ui-btn").first().trigger("vclick"), !1;
        if (!v && (i == 38 || i == 8)) {
            var ft = $(f).closest("[data-input]").find(".app-control-before"),
                et = ft.find("li"),
                y = ft.find(".app-focus"),
                at = y,
                st;
            if (et.length && !y.length && !f.value && !t.popup(":visible")) return y = et.last(), i == 38 && (st = y.offset(), et.each(function() {
                var n = $(this),
                    t = n.offset();
                if (t.top == st.top) return y = n, !1
            })), y.addClass("app-focus"), setTimeout(function() {
                ft.focus().addClass("app-has-focus")
            }), !1
        }
        if (i == 27) return n.stopPropagation(), n.preventDefault(), b = o.data("change"), p = o.data("original"), b ? (o.val(p), p || s.data("autoComplete", !1), t.move(s, t.popup(":visible") ? s.data("autoComplete", !1) : null)) : (tt = $.Event("cancel.input.app", {
            inputElement: o
        }), s.trigger(tt), tt.inputElement = null, tt.isDefaultPrevented() || (ot = o.val() != p, ot ? (lt(), o.val(p).select()) : (t.blur(s), w().focus()))), !1;
        if ((i == 13 && !v || i == 9) && t.popup(":visible"))
            if (r = t.popup().find(".app-selected"), h = t.elementToField(o), r.length) {
                if (i == 9 && h.ItemsTargetController && (i = 13), (!r.is("[data-command]") || i == 13) && (r.trigger("vclick", {
                        feedback: !1
                    }), i == 13)) return !1
            } else if (i == 13 && h.AllowAutoComplete != !1 && (o.data("original") || !!o.val())) return !1;
        if ((i == 13 && v || i == 39 && f.selectionStart == f.selectionEnd && (!f.value || f.value.length == f.selectionEnd)) && (it = t.eventToButton(n), it.length && t.elementToField(it).ItemsStyle == "Lookup" && it.is(":visible") && (d = t.eventToMethod(n), d && d.clickButton))) return t.popup(":visible") || (t.blur(s), n.stopPropagation(), n.preventDefault(), d.clickButton(n)), !1;
        if (v && i == 13) return t.blur(s), n.preventDefault(), !1;
        if (!v && (i == 38 || i == 40) && (h = t.eventToField(n), k = h.DynamicItems || h.Items, c = -1, h.ItemsStyle == "DropDownList" && !t.popup(":visible") && !h.ItemsTargetController)) return $(k).each(function(n) {
            if (this[1] == f.value) return c = n, !1
        }), c != -1 ? (i == 38 && c > (!h.AllowNulls && k[0][0] == null ? 1 : 0) && c--, i == 40 && c < k.length - 1 && c++) : c = 0, rt = k[c], rt && ($(f).data("last", rt[1]), setTimeout(function() {
            t.methods.lookup._useItemValue(h, rt, !0)
        })), n.preventDefault(), !1;
        if (g = t.eventToDirection(n), i == 32 && !(n.ctrlKey || n.shiftKey || n.altKey) && !f.value.trim()) return !1;
        if (i == 40 && v || i == 32 && v) {
            if (b = o.data("change"), b) return t.popup(":visible") || (n.stopPropagation(), n.preventDefault(), setTimeout(function() {
                b({
                    input: o,
                    value: o.val(),
                    lastValue: o.data("last")
                })
            })), !1;
            if (ut = $.Event("help.input.app", {
                    inputElement: o
                }), s.trigger(ut), ut.inputElement = null, ut.isDefaultPrevented() || i == 32) return !1
        }
        if ((i == 8 || i == 46) && f.selectionStart > 0 && f.selectionStart < f.selectionEnd && t.popup(":visible") && o.data("autoComplete", !1), (i == 33 || i == 34) && t.popup(":visible")) {
            if (u = t.popup(), r = u.find(".app-selected"), r.length) {
                for (e = r.removeClass("app-selected"), u.scrollTop(u.scrollTop() + (i == 33 ? -1 : 1) * u.height()); e.length;) {
                    if (i == 33) {
                        if (e.offset().top < u.offset().top) break
                    } else if (e.offset().top + e.outerHeight() - 1 > u.offset().top + u.height()) break;
                    e.is(".app-instruction") || (r = e);
                    e = i == 33 ? e.prev() : e.next()
                }
                r.addClass("app-selected")
            } else r = u.find("li:not(.app-instruction)").first().addClass("app-selected");
            return !1
        }
        if ((i == 38 || i == 40) && !(n.ctrlKey || n.shiftKey || n.altKey) && t.popup(":visible")) {
            if (n.preventDefault, n.stopPropagation(), u = t.popup(), r = u.find(".app-selected").removeClass("app-selected"), nt = u.find("li:not(.app-instruction)"), r.length)
                for (e = r; e.length;) {
                    if (e = i == 38 ? e.prev() : e.next(), e.length && !e.is(".app-instruction")) {
                        r = e;
                        break
                    }
                    e.length || nt.filter(":not([data-command])").length || (r = [])
                } else r = i == 38 ? nt.last() : nt.first();
            if (r.length) return r.addClass("app-selected"), i == 38 && r.prev().is(".app-instruction") && (r = r.prev()), i == 40 && r.next().is(".app-instruction") && (r = r.next()), l = r.offset(), a = u.offset(), i == 38 ? l.top < a.top ? u.scrollTop(l.top - a.top + u.scrollTop() - 1) : l.top >= a.top + u.height() && u.scrollTop(l.top - a.top + u.scrollTop() - (u.height() - r.outerHeight()) - 1) : i == 40 && (l.top + r.outerHeight() >= a.top + u.height() ? u.scrollTop(l.top - a.top + u.scrollTop() - (u.height() - r.outerHeight()) - 1) : l.top < a.top && u.scrollTop(l.top - a.top + u.scrollTop() - 1)), !1
        }
        if (g && s.is('[data-input-tab-stop="false"]')) return (i == 13 || i == 9) && (t.blur(s), n.stopPropagation(), n.preventDefault()), !1;
        if (g) return ht && i == 13 && n.stopPropagation(), setTimeout(function() {
            t.move(s, g, i)
        }), n.preventDefault(), !1;
        if (i == 113) {
            selectionStart = f.selectionStart;
            selectionEnd = f.selectionEnd;
            selectionStart == 0 && selectionEnd == f.value.length ? f.selectionStart = selectionEnd : (f.selectionStart = 0, f.selectionEnd = this.value.length);
            n.preventDefault();
            return
        }
    }).on("keyup", ".app-data-input", function(n) {
        var h = this,
            u = n.keyCode || n.which,
            t = $(h),
            r = t.data("placeholder"),
            f, o = t.data("change"),
            e, i = t.val(),
            s = i.trim();
        (s || (i = s), u != 38 && u != 40 && u != 13) && (r && (f = i ? "none" : "", r = r[0], r.style.display != f && (r.style.display = f)), o && (e = t.data("last"), i != e && (t.data("last", i), setTimeout(function() {
            o({
                input: t,
                value: i,
                lastValue: e,
                keyCode: u
            })
        }), n.preventDefault())))
    }).on("cut paste", ".app-data-input", function() {
        var n = $(this);
        setTimeout(function() {
            n.trigger("keyup")
        })
    }).on("contextmenu", ".app-data-input", function() {
        $(this).data("keepFocus", !0)
    }).on("mousedown contextmenu", ".app-data-input-placeholder", function() {
        $(this).css("display", "none")
    }).on("vclick mousedown", ".app-data-input-popup", function(i) {
        function l() {
            if (o)
                if (s = t.elementToMethod(r), o == "SeeAll") i.target = r, setTimeout(function() {
                    t.popup("hide");
                    s && s.clickButton && s.clickButton(i, !1)
                }, ft);
                else if (o == "Clear") setTimeout(function() {
                r.blur();
                t.methods.lookup._clearValue(e);
                setTimeout(function() {
                    t.methods.lookup.focus(c)
                }, 100)
            }, ft);
            else if (o == "New") {
                var l = r.val();
                r.blur();
                n.lookup({
                    field: e,
                    create: !0,
                    dataInput: c,
                    value: l
                })
            } else o == "ShowOptions" && setTimeout(function() {
                e._doSearch = !0;
                t.methods.lookup._showList({
                    field: e,
                    value: null,
                    input: r
                })
            }, ft);
            else t.popup("hide"), h && e && (r.removeData("restoreText"), t.methods.lookup._buttonUp(r), f.input.methods.lookup._useItemValue(e, h[parseInt(u.attr("data-index"))]))
        }
        var u = $(i.target).closest("li"),
            o = u.attr("data-command"),
            h = t.popup().data("list"),
            r = $(".app-data-input"),
            c = r.closest("[data-input]"),
            e = t.elementToField(r),
            s;
        return u.length && !u.is(".app-instruction") && (u.parent().find(".app-selected").removeClass("app-selected"), u.addClass("app-selected"), r.focus(), arguments.length != 2 || arguments[1].feedback ? setTimeout(l, ft) : l()), !1
    }).on("keydown", ".app-checkbox-container", function(n) {
        var r = n.keyCode || n.which,
            i = $(this),
            u;
        return u = r == 32 || r == 39 && !i.is(".app-checkbox-on") || r == 37 && i.is(".app-checkbox-on") ? "toggle" : t.eventToDirection(n), u ? (u == "toggle" ? t.elementToMethod(i)._toggleState(i) : t.move(i, u, r), !1) : void 0
    }).on("keydown", ".app-data-list", function(n) {
        var f = n.keyCode || n.which,
            e = $(this),
            i, u, r;
        return (f == 32 ? i = "vclick" : f == 8 || f == 46 ? i = "clear" : n.ctrlKey || (f == 38 ? i = "up" : f == 40 ? i = "down" : f == 37 ? i = "left" : f == 39 ? i = "right" : f == 36 ? i = "home" : f == 35 && (i = "end")), i) ? (u = e.find(".app-focus"), u.length ? i == "up" ? (r = u.prev(), r.length || (r = u.parent().prev().find("li").last())) : i == "down" ? (r = u.next(), r.length || (r = u.parent().next().find("li").first())) : i == "right" ? (r = u.parent().next().find(":eq(" + u.index() + ")"), r.length || (r = u.parent().next().find("li").last())) : i == "left" ? r = u.parent().prev().find(":eq(" + u.index() + ")") : i == "home" ? r = e.find("ul").first().find("li").first() : i == "end" ? r = e.find("ul").last().find("li").last() : i == "vclick" ? (r = null, u.trigger("vclick")) : i != "clear" || e.closest("[data-control]").is('[data-input="checkboxlist"]') || (r = null, e.find("ul").first().find("li").first().trigger("vclick")) : t.methods.listbox._scrollItemIntoView(e.find(".app-selected").first().addClass("app-focus")), r && r.length && (t.methods.listbox._focusItem(r), t.methods.listbox._scrollItemIntoView(r)), !1) : (i = t.eventToDirection(n), i) ? (t.move(e, i, f), !1) : void 0
    }).on("keydown", ".app-control-helper", function(n) {
        var c = $(this),
            r = n.keyCode || n.which,
            s = c.find("li"),
            i = c.find(".app-focus"),
            l = i,
            o;
        if (s.length && i.length) {
            if (o = i.offset(), r == 32 || r == 40 && (n.ctrlKey || n.metaKey)) return i.trigger("vclick"), !1;
            if (r == 46 || r == 8) return t.methods.lookup._removeBasketItem(i, r != 8), !1;
            if (r == 9 || r == 13 || r == 27) return setTimeout(function() {
                var u = i.closest("[data-input]");
                n.shiftKey && r != 27 ? t.move(u, "up", r) : (c.data("focus", !1), t.methods.lookup.focus(u))
            }), !1;
            if (r == 36) i = s.first();
            else if (r == 35) i = s.last();
            else if (r == 38) {
                var f = o.left,
                    u = f + i.outerWidth() - 1,
                    e = 0,
                    h = o.top - 1;
                $(s.get().reverse()).each(function() {
                    var o = $(this),
                        r = o.offset(),
                        n = r.left,
                        t = n + o.outerWidth() - 1,
                        s;
                    if (e == 0 && r.top < h || e > 0 && r.top == h) t < f || n > u || (s = n >= f && t <= u ? t - n + 1 : n < f && t <= u ? t - f + 1 : n < u && t >= u ? u - n + 1 : u - f + 1, s > e && (i = o, e = s, h = r.top));
                    else if (e) return !1
                })
            } else if (r == 40) {
                var f = o.left,
                    u = f + i.outerWidth() - 1,
                    e = 0,
                    h = o.top + 1;
                s.each(function() {
                    var o = $(this),
                        r = o.offset(),
                        n = r.left,
                        t = n + o.outerWidth() - 1,
                        s;
                    if (e == 0 && r.top > h || e > 0 && r.top == h) t < f || n > u || (s = n >= f && t <= u ? t - n + 1 : n < f && t <= u ? t - f + 1 : n < u && t >= u ? u - n + 1 : u - f + 1, s > e && (i = o, e = s, h = r.top));
                    else if (e) return !1
                })
            } else s.each(function() {
                var t = $(this),
                    n = t.offset();
                if (r == 39 && n.top == o.top && n.left > o.left) return i = t, !1;
                r == 37 && n.top == o.top && n.left < o.left && (i = t)
            });
            if (i == l) {
                if (r == 39 && i.next().length && (i = i.next()), r == 37 && i.prev().length && (i = i.prev()), r == 38) return setTimeout(function() {
                    t.move(i.closest("[data-input]"), "up", 9)
                }), !1;
                if (r == 40) return setTimeout(function() {
                    c.data("focus", !1);
                    t.methods.lookup.focus(i.closest("[data-input]"))
                }), !1
            }
            return s.removeClass("app-focus"), i.addClass("app-focus"), !1
        }
    }).on("blur", ".app-data-list,.app-control-helper", function() {
        $(this).find(".app-focus").removeClass("app-focus")
    }).on("keydown", ".app-drop-box", function(n) {
        var r = n.keyCode || n.which,
            u = $(this),
            i;
        return i = r != 32 && (r != 13 || n.shiftKey) ? r == 8 || r == 46 ? "clear" : t.eventToDirection(n) : "vclick", i ? (i == "vclick" ? u.trigger(i) : i == "clear" ? u.parent().find(".app-clear").trigger("vclick") : t.move(u, i, r), !1) : void 0
    }).on("keydown", ".app-popup-alert,.app-popup-confirm", function(n) {
        var i = $(this).find(".ui-btn"),
            t = n.keyCode || n.which;
        return t == 13 || t == 32 ? i.first().trigger("vclick") : t == 27 && i.last().trigger("vclick"), !1
    }).on("keydown", ".app-wrapper", function(t) {
        var tt = t.keyCode || t.which,
            s, v, y, d, o, f, p, h, e, g, i, l, w, b, u;
        switch (tt) {
            case 35:
                i = "end";
                break;
            case 36:
                i = "home";
                break;
            case 39:
                i = "right";
                break;
            case 40:
                i = "down";
                break;
            case 37:
                i = "left";
                break;
            case 38:
                i = "up";
                break;
            case 13:
                i = "enter"
        }
        if (i && !t.ctrlKey && !$(t.target).is(":input") && (s = $(this), o = s.children(".app-listview"), o.length && o.is(":visible"))) {
            if (i.match(/left|right|home|end/) && o.is(".app-grid")) {
                e = n.dataView();
                var k = e.session("grid-avail-width"),
                    nt = o.find(".dv-item").first(),
                    a = nt.length && Math.ceil(k - k * (nt.width() / k)),
                    r = e.session("scroll-left") || 0,
                    c;
                a && (i == "right" && r < a ? (r = Math.min(r + 32, a), c = !0) : i == "left" && r > 0 ? (r = Math.max(r - 32, 0), c = !0) : i == "home" ? (r = 0, c = !0) : i == "end" && (r = a, c = !0));
                c && (e.session("scroll-left", r), pu(e, -r));
                t.preventDefault();
                return
            }
            f = o.find(".dv-item .app-selected");
            f.length || (f = o.find(".dv-item").first().find("a"), i = "none");
            f.length && (u = f.parent(), e = n.dataView(), g = e.extension(), i == "right" ? i = "down" : i == "left" && (i = "up"), i == "down" ? u = u.next() : i == "up" && (u = u.prev()), f = u.find("a"), p = f.data("data-context"), p && !u.is(".dv-load-at-top-parent,.dv-load-at-bottom-parent,.app-calculated") && (o.find(".ui-btn.app-selected").removeClass("app-selected"), bf(e, f), g.tap(p, i == "enter" ? null : "none"), n.pageInfo(e).echoChanged = !0, i == "enter" ? f.addClass("app-selected") : i.match(/up|down/) && (h = u.offset(), v = s.offset(), y = n.stickyHeaderBar(), d = y.offset(), w = Math.max(v.top, d.top + y.outerHeight()), b = v.top + s.height() - 1, h.top < w ? l = h.top - w : h.top + u.outerHeight() > b && (l = h.top + u.outerHeight() - b)), t.preventDefault(), l && setTimeout(function() {
                s.scrollTop(s.scrollTop() + l)
            }, 10)))
        }
    }).on("mousedown", ".app-hscrollbar2", function(n) {
        if (!s) {
            var i = $(this),
                t;
            $(n.target).is(".app-hscrollbar-handle") || (t = i.prev(), t.attr("class").match(/-outer/) && (t = t.children().first()), t.scrollLeft(t.scrollLeft() + (n.pageX < i.find(".app-hscrollbar-handle").offset().left ? -1 : 1) * t.width()))
        }
    }).on("mousedown", ".app-vscrollbar", function(n) {
        if (!s) {
            var i = $(this),
                t;
            $(n.target).is(".app-vscrollbar-handle") || (t = i.prev(), t.attr("class").match(/-outer/) && (t = t.children().first()), t.scrollTop(t.scrollTop() + (n.pageY < i.find(".app-vscrollbar-handle").offset().top ? -1 : 1) * t.height()))
        }
    }).on("transitionend", ".app-hidden", function() {
        var t = $(this).parent(),
            i, n;
        t.is(".app-data-list") && (n = t.find('[data-index="new"]'), n.length && (i = t.data("revealTimeout"), clearTimeout(i), t.data("revealTimeout", setTimeout(function() {
            n.parent().prevAll().remove();
            n.prevAll().remove();
            n.parent().removeClass("app-hidden")
        }, 50))))
    }).on("vclick", '[data-container="toggle"]', function() {
        var n = $(this),
            i = n.find(".app-collapsible-toggle-button"),
            t = i.offset(),
            r;
        return n.addClass("ui-btn-active"), setTimeout(function() {
            n.removeClass("ui-btn-active");
            setTimeout(function() {
                r = n.parent().toggleClass("app-container-collapsed").is(".app-container-collapsed");
                r || de({
                    controls: n.closest('[data-container="collapsible"]').data("node").children
                });
                i.attr("title", r ? eu.Maximize : eu.Minimize).removeData("title");
                !s && t && br >= t.left && br < t.left + i.outerWidth() && ah(t.left, t.top + 25, i.attr("title"));
                nf()
            })
        }, ft), dr(), lt(), !1
    }).on("vclick", ".app-field-object-ref", function() {
        var t = $(this),
            u = t.closest("[data-control]"),
            f = t.closest("[data-input-container]"),
            i, r;
        return i = $app.find(f.attr("data-input-container")), i && (r = i.findField(u.attr("data-field")), r && v(t, function() {
            n.details({
                field: r
            })
        })), !1
    }).on("vclick", ".app-echo-see-all", function() {
        var t = $(this).find("span").first().addClass("app-selected");
        return setTimeout(function() {
            t.removeClass("app-selected");
            n.changePage(t.closest(".app-echo").attr("data-for"))
        }, ft), !1
    }).on("vclick", ".app-echo-toolbar a", function(t) {
        var i = $(t.target),
            r = i.closest(".app-echo").attr("data-for");
        return nr(i) && !n.busy() && v(i, function() {
            i.is(".ui-icon-dots") && n.showContextMenu({
                scope: r
            })
        }), !1
    });
    Sys.Application.add_init(function() {});
    Sys.Application.add_load(function() {
        n._appLoaded = !0
    });
    Web.DataView.MobileGrid.registerClass("Web.DataView.MobileGrid", Web.DataView.MobileBase);
    Web.DataView.MobileForm.registerClass("Web.DataView.MobileForm", Web.DataView.MobileBase)
})();
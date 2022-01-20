function GetQueueIdWhenRedirectedToTarget() {
    var n = window;
    return n.queueViewModel ? n.queueViewModel.getIsRedirectedToTarget ? n.queueViewModel.getIsRedirectedToTarget() ? n.queueViewModel.getQueueId() : void 0 : null : null
}
var __awaiter = this && this.__awaiter || function (n, t, i, r) {
        return new(i || (i = Promise))(function (u, f) {
            function o(n) {
                try {
                    e(r.next(n))
                } catch (t) {
                    f(t)
                }
            }

            function s(n) {
                try {
                    e(r["throw"](n))
                } catch (t) {
                    f(t)
                }
            }

            function e(n) {
                n.done ? u(n.value) : new i(function (t) {
                    t(n.value)
                }).then(o, s)
            }
            e((r = r.apply(n, t || [])).next())
        })
    },
    __generator = this && this.__generator || function (n, t) {
        function o(n) {
            return function (t) {
                return s([n, t])
            }
        }

        function s(e) {
            if (f) throw new TypeError("Generator is already executing.");
            while (r) try {
                if (f = 1, u && (i = u[e[0] & 2 ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(u, e[1])).done) return i;
                (u = 0, i) && (e = [0, i.value]);
                switch (e[0]) {
                    case 0:
                    case 1:
                        i = e;
                        break;
                    case 4:
                        return r.label++, {
                            value: e[1],
                            done: !1
                        };
                    case 5:
                        r.label++;
                        u = e[1];
                        e = [0];
                        continue;
                    case 7:
                        e = r.ops.pop();
                        r.trys.pop();
                        continue;
                    default:
                        if (!(i = r.trys, i = i.length > 0 && i[i.length - 1]) && (e[0] === 6 || e[0] === 2)) {
                            r = 0;
                            continue
                        }
                        if (e[0] === 3 && (!i || e[1] > i[0] && e[1] < i[3])) {
                            r.label = e[1];
                            break
                        }
                        if (e[0] === 6 && r.label < i[1]) {
                            r.label = i[1];
                            i = e;
                            break
                        }
                        if (i && r.label < i[2]) {
                            r.label = i[2];
                            r.ops.push(e);
                            break
                        }
                        i[2] && r.ops.pop();
                        r.trys.pop();
                        continue
                }
                e = t.call(n, r)
            } catch (o) {
                e = [6, o];
                u = 0
            } finally {
                f = i = 0
            }
            if (e[0] & 5) throw e[1];
            return {
                value: e[0] ? e[1] : void 0,
                done: !0
            }
        }
        var r = {
                label: 0,
                sent: function () {
                    if (i[0] & 1) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            },
            f, u, i, e;
        return e = {
            next: o(0),
            "throw": o(1),
            "return": o(2)
        }, typeof Symbol == "function" && (e[Symbol.iterator] = function () {
            return this
        }), e
    },
    __extends, QueueIt;
(function (n) {
    var t;
    (function (n) {
        var t;
        (function (t) {
            var e = function () {
                    function n() {}
                    return n.retry = function (n, t, i, r) {
                        var u = 1,
                            f = function () {
                                return t(function (t, e) {
                                    e && u++ < n ? setTimeout(f, r(u)) : i(t, e)
                                })
                            };
                        f()
                    }, n
                }(),
                u, r, i, f;
            t.RetryHelper = e;
            u = function () {
                function n(n, t) {
                    this.eventId = n;
                    this.customerId = t
                }
                return n.prototype.logAjaxCallError = function (n, t, i, r, u) {
                    if (u === void 0 && (u = ""), t)
                        if (t.status === 0 || t.readyState === 0 || t.status == 503 || t.status == 504) console.info("server call error");
                        else {
                            var f = "Ajax Error: ";
                            u && (f += u);
                            i && (f += " textStatus: " + i);
                            r && (f += " errorThrow: " + r);
                            f += " jqXHR.status: " + t.status;
                            window.logger.Error({
                                Page: n,
                                Message: f,
                                ResponseText: t.responseText
                            }, this.eventId, this.customerId)
                        }
                }, n
            }();
            t.AjaxLogger = u;
            r = function () {
                function n() {
                    var n = window.onerror,
                        t = this;
                    window.onerror = function (r, u, f, e) {
                        (r !== "Script error." || u) && t.Error({
                            Message: "Unhandled Exception in window.onerror: '" + r + "', url: '" + u + "', line: " + f + ", col: " + e
                        }, null, null, null, i.Critical);
                        n && typeof n == "function" && n.apply(window, arguments)
                    }
                }
                return n.prototype.getUserId = function () {
                    return this.userId || (this.userId = $("#queue-it_log").attr("data-userid")), this.userId
                }, n.prototype.Log = function (n) {
                    var i, t, r, u, f;
                    try {
                        if (console.info(n.LogMessageInfo.Message + (n.LogMessageInfo.Ex ? n.LogMessageInfo.Ex.message : "")), !this.logContainer && (this.logContainer = $("#queue-it_log"), this.userId = this.logContainer.attr("data-userid"), this.proxyUrl = this.logContainer.attr("data-proxyurl"), !this.proxyUrl)) return;
                        i = {};
                        n.LogMessageInfo.Ex && n.LogMessageInfo.Ex.stack && (i.StackTrace = n.LogMessageInfo.Ex.stack);
                        n.LogMessageInfo.Ex && n.LogMessageInfo.Ex.message && (i.ErrorMessage = n.LogMessageInfo.Ex.message);
                        n.LogMessageInfo.Message || (n.LogMessageInfo.Message = "Unexpected Error");
                        n.LogMessageInfo.Page && (n.LogMessageInfo.Message = n.LogMessageInfo.Message + "; in page: " + n.LogMessageInfo.Page);
                        t = window.queueViewModel;
                        r = n.CustomerId;
                        !r && t && (r = t.customerId);
                        u = n.EventId;
                        !u && t && (u = t.eventId);
                        f = n.QueueId;
                        !f && t && t.queueId && (f = $.isFunction(t.queueId) ? t.queueId() : t.queueId);
                        this.logToProxy({
                            QueueId: f,
                            CustomerId: r,
                            EventId: u,
                            Message: n.LogMessageInfo.Message,
                            ResponseText: n.LogMessageInfo.ResponseText,
                            Severity: n.Severity,
                            Exception: i,
                            UserId: this.userId,
                            Service: "JavaScript(queuefront)",
                            Url: window.location.href,
                            UserAgent: navigator.userAgent,
                            PlatformInfo: window.getClientInfo(),
                            Timestamp: (new Date).toISOString(),
                            CustomInfo: n.CustomInfo
                        })
                    } catch (e) {
                        console.debug(e)
                    }
                }, n.prototype.Error = function (n, t, r, u, f, e) {
                    t === void 0 && (t = "");
                    r === void 0 && (r = "");
                    u === void 0 && (u = "");
                    f === void 0 && (f = i.Error);
                    e === void 0 && (e = null);
                    this.Log({
                        LogMessageInfo: n,
                        Severity: i[f],
                        QueueId: u,
                        CustomerId: r,
                        EventId: t,
                        CustomInfo: e
                    })
                }, n.prototype.Warning = function (n, t, r, u, f, e) {
                    t === void 0 && (t = "");
                    r === void 0 && (r = "");
                    u === void 0 && (u = "");
                    f === void 0 && (f = i.Warning);
                    e === void 0 && (e = null);
                    this.Log({
                        LogMessageInfo: n,
                        Severity: i[f],
                        QueueId: u,
                        CustomerId: r,
                        EventId: t,
                        CustomInfo: e
                    })
                }, n.prototype.Business = function (n, t, r, u, f, e) {
                    t === void 0 && (t = "");
                    r === void 0 && (r = "");
                    u === void 0 && (u = "");
                    f === void 0 && (f = i.Information);
                    e === void 0 && (e = null);
                    this.Log({
                        LogMessageInfo: n,
                        Severity: i[f],
                        QueueId: u,
                        CustomerId: r,
                        EventId: t,
                        CustomInfo: e
                    })
                }, n.prototype.Debug = function (n, t, r, u, f, e) {
                    t === void 0 && (t = "");
                    r === void 0 && (r = "");
                    u === void 0 && (u = "");
                    f === void 0 && (f = i.Information);
                    e === void 0 && (e = null);
                    this.Log({
                        LogMessageInfo: n,
                        Severity: i[f],
                        QueueId: u,
                        CustomerId: r,
                        EventId: t,
                        CustomInfo: e
                    })
                }, n.prototype.logToProxy = function (n) {
                    try {
                        var t = this.objectToQuery(n, "");
                        $("head").append('<script type="text/javascript" src="' + this.proxyUrl + "?" + t + '"><\/script>')
                    } catch (i) {
                        window && window.console && typeof window.console.log == "function" && (console.log("Failed to log to loggly because of exception:\n" + i), console.log("Failed log data:", n))
                    }
                }, n.prototype.objectToQuery = function (n, t) {
                    var r = "";
                    for (var i in n)
                        if (n.hasOwnProperty(i)) {
                            if (!n[i]) continue;
                            r && (r += "&");
                            r += typeof n[i] == "object" ? this.objectToQuery(n[i], i) : t + i.substr(0, 1).toUpperCase() + i.substr(1) + "=" + encodeURIComponent(n[i])
                        } return r
                }, n
            }();
            t.Logger = r,
                function (n) {
                    n[n.Critical = 1] = "Critical";
                    n[n.Error = 2] = "Error";
                    n[n.Warning = 4] = "Warning";
                    n[n.Information = 8] = "Information"
                }(i = t.ErrorSeverity || (t.ErrorSeverity = {}));
            f = function () {
                function t() {}
                return t.registerForPush = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var u, r, i, f;
                        return __generator(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    if (!("serviceWorker" in navigator)) return [3, 9];
                                    if (!("PushManager" in window)) return [3, 7];
                                    e.label = 1;
                                case 1:
                                    return e.trys.push([1, 5, , 6]), [4, navigator.serviceWorker.register("serviceWorker.js")];
                                case 2:
                                    return e.sent(), [4, navigator.serviceWorker.ready];
                                case 3:
                                    return u = e.sent(), [4, u.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: t.urlBase64ToUint8Array(t.VAPID)
                                    })];
                                case 4:
                                    return r = e.sent(), i = JSON.parse(JSON.stringify(r)), console.log(r), [2, {
                                        Endpoint: i.endpoint,
                                        P256DH: i.keys.p256dh,
                                        Auth: i.keys.auth,
                                        PublicKey: n.Helpers.PushSubscriptionManager.VAPID
                                    }];
                                case 5:
                                    return f = e.sent(), console.log(f), [3, 6];
                                case 6:
                                    return [2, null];
                                case 7:
                                    return [2, null];
                                case 8:
                                    return [3, 10];
                                case 9:
                                    return [2, null];
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }, t.urlBase64ToUint8Array = function (n) {
                    for (var u = "=".repeat((4 - n.length % 4) % 4), f = (n + u).replace(/\-/g, "+").replace(/_/g, "/"), i = window.atob(f), r = new Uint8Array(i.length), t = 0; t < i.length; ++t) r[t] = i.charCodeAt(t);
                    return r
                }, t.VAPID = "BEV3FxAISbs6r7IGVpU_si1od6biF-ldnxpRn-CSS4pLPD2Woyr1l7SabgmpMADnSUSmaf0STUi9lupYEgzm2mw", t
            }();
            t.PushSubscriptionManager = f;
            window.logger = new r;
            window.pushSubscription = ko.observable()
        })(t = n.Helpers || (n.Helpers = {}))
    })(t = n.Queue || (n.Queue = {}))
})(QueueIt || (QueueIt = {})),
function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n() {}
            return n.prototype.getCookie = function (n) {
                var i = "; " + document.cookie,
                    t = i.split("; " + n + "=");
                if (t.length == 2) return t.pop().split(";").shift()
            }, n
        }();
        n.CookieUtil = t
    })(t = n.Tools || (n.Tools = {}))
}(QueueIt || (QueueIt = {})),
function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n() {
                var n = this;
                this.post = function (t, i, r, u, f) {
                    var e = !0;
                    f != null && f && (e = !1);
                    $.ajax({
                        type: "POST",
                        url: t,
                        async: e,
                        data: n.serialize(i),
                        success: function (n) {
                            r(n)
                        },
                        error: function (n, t, i) {
                            u(n, t, i)
                        },
                        dataType: "json",
                        contentType: "application/json"
                    })
                };
                this.get = function (n, t, i) {
                    $.ajax({
                        type: "GET",
                        url: n,
                        success: function (n) {
                            t(n)
                        },
                        error: function (n) {
                            i(n)
                        },
                        dataType: "json",
                        contentType: "application/json"
                    })
                };
                this.serialize = function (n) {
                    return JSON.stringify(n)
                }
            }
            return n
        }();
        n.HttpUtil = t
    })(t = n.Tools || (n.Tools = {}))
}(QueueIt || (QueueIt = {})),
function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n() {}
            return n.prototype.padRight = function (n, t) {
                return this.pad(n, t, !1)
            }, n.prototype.padLeft = function (n, t) {
                return this.pad(n, t, !0)
            }, n.prototype.pad = function (n, t, i) {
                return typeof t == "undefined" ? n : i ? (n + t).slice(-n.length) : (t + n).substring(0, n.length)
            }, n
        }();
        n.StringUtil = t
    })(t = n.Tools || (n.Tools = {}))
}(QueueIt || (QueueIt = {})),
function (n) {
    var t;
    (function (n) {
        var t = function () {
            function n(n, t) {
                var i = this;
                this.inQueueView = n;
                this.initialInqueueInfo = t;
                this.inQueueVM = n;
                this.inqueueInfo = t;
                this.queueNumberVisibleByLayout = n.layout.queueNumberVisible();
                this.usersAheadVisibleByLayout = n.layout.usersInLineAheadOfYouVisible();
                this.relativeTimeVisibleByLayout = n.layout.whichIsInVisible();
                this.absoluteTimeVisibleByLayout = n.layout.expectedServiceTimeVisible();
                this.dynamicMessageVisibleByLayout = n.layout.dynamicMessageVisible();
                this.reminderFormVisibleByLayout = n.layout.reminderVisible();
                this.connectionLost = ko.observable(!1);
                this.connectionLost.subscribe(function () {
                    return i.connectionLostChange()
                });
                this.javascriptDisabled = ko.observable();
                this.javascriptDisabled.subscribe(function () {
                    return i.javascriptDisabledChange()
                });
                this.queuePaused = ko.observable(!1);
                this.queuePaused.subscribe(function () {
                    return i.queuePausedChange()
                });
                this.firstInLine = ko.observable(!1);
                this.firstInLine.subscribe(function () {
                    return i.firstInLineChange()
                });
                this.serviceSoon = ko.observable(!1);
                this.serviceSoon.subscribe(function () {
                    return i.serviceSoonChange()
                });
                this.redirectModal = this.inQueueVM.showConfirmRedirectDialog;
                this.redirectModal.subscribe(function () {
                    return i.redirectModalChange()
                });
                this.hideDynamicMessage = ko.observable();
                this.hideDynamicMessage.subscribe(function () {
                    return i.hideDynamicMessageChange()
                });
                this.reminderEmailStatus = ko.observable();
                this.reminderEmailStatus.subscribe(function () {
                    return i.reminderEmailStatusChange()
                })
            }
            return n.prototype.connectionLostChange = function () {
                this.inQueueVM.isRunning(!this.inQueueVM.isRunning())
            }, n.prototype.javascriptDisabledChange = function () {
                $("#noscript").toggle()
            }, n.prototype.queuePausedChange = function () {
                this.redirectModal() && this.redirectModal(!1);
                this.inqueueInfo.layout.queueIsPausedVisible = !this.inqueueInfo.layout.queueIsPausedVisible;
                this.absoluteTimeVisibleByLayout && (this.inqueueInfo.layout.expectedServiceTimeVisible = !this.inqueueInfo.layout.expectedServiceTimeVisible);
                this.relativeTimeVisibleByLayout && (this.inqueueInfo.layout.whichIsInVisible = !this.inqueueInfo.layout.whichIsInVisible);
                this.inQueueVM.refresh(this.inqueueInfo)
            }, n.prototype.firstInLineChange = function () {
                this.serviceSoon() && this.serviceSoon(!1);
                this.usersAheadVisibleByLayout && (this.inqueueInfo.layout.usersInLineAheadOfYouVisible = !this.inqueueInfo.layout.usersInLineAheadOfYouVisible);
                this.inqueueInfo.layout.firstInLineVisible = !this.inqueueInfo.layout.firstInLineVisible;
                this.inQueueVM.refresh(this.inqueueInfo)
            }, n.prototype.serviceSoonChange = function () {
                this.absoluteTimeVisibleByLayout && (this.inqueueInfo.layout.expectedServiceTimeVisible = !this.inqueueInfo.layout.expectedServiceTimeVisible);
                this.relativeTimeVisibleByLayout && (this.inqueueInfo.layout.whichIsInVisible = !this.inqueueInfo.layout.whichIsInVisible);
                this.inQueueVM.refresh(this.inqueueInfo);
                this.serviceSoon() && this.inQueueVM.layout.servicedSoonVisible(!0)
            }, n.prototype.redirectModalChange = function () {
                if (this.redirectModal()) {
                    var n = new Date;
                    this.inQueueVM.ticket.windowStartTime(n.getHours() + (n.getMinutes() < 10 ? ":0" : ":") + n.getMinutes())
                }
            }, n.prototype.hideDynamicMessageChange = function () {
                this.dynamicMessageVisibleByLayout && (this.inqueueInfo.layout.dynamicMessageVisible = !this.inqueueInfo.layout.dynamicMessageVisible, this.inQueueVM.refresh(this.inqueueInfo))
            }, n.prototype.reminderEmailStatusChange = function () {
                this.reminderEmailStatus() == "success" ? (this.inQueueVM.notify("We will send you an e-mail containing a link to your place in the queue, and another e-mail when it is time for you to return to the queue. E-mails may be delayed, moved to your spam folder, or lost due to reasons beyond our control, so we recommend that you check your status in the queue frequently.", "Success"), $("#aUpdateEmail").addClass("btn-disabled")) : ($("#aUpdateEmail").removeClass("btn-disabled"), this.inQueueVM.notify("Error subscribing", "Error"))
            }, n.prototype.hideReminderStatusMessage = function () {
                this.reminderEmailStatus("");
                $("#divEmailStatusFrame").hide();
                $("#aUpdateEmail").removeClass("btn-disabled")
            }, n.prototype.minimizeWindow = function () {
                $("#PreviewQueueStatesDiv").toggleClass("min")
            }, n
        }();
        n.PreviewQueueStateVM = t
    })(t = n.Queue || (n.Queue = {}))
}(QueueIt || (QueueIt = {})),
function (n) {
    var t;
    (function (n) {
        var i = function () {
                function t(t, i) {
                    this.callbackArray = [];
                    this.statusChangeCallbackArray = [];
                    this.customerId = t;
                    this.eventId = i;
                    this.logger = new n.Helpers.AjaxLogger(i, t);
                    this.userId = (new n.Helpers.Logger).getUserId();
                    this.listenChildFrame()
                }
                return t.prototype.listenChildFrame = function () {
                    var n = this,
                        t = this;
                    window.addEventListener ? window.addEventListener("message", function (i) {
                        return n.receiveMessageSafe(i, t)
                    }, !1) : window.attachEvent && window.attachEvent("onmessage", function (i) {
                        return n.receiveMessageSafe(i, t)
                    })
                }, t.prototype.receiveMessageSafe = function (n, t) {
                    var i;
                    try {
                        if (i = JSON.parse(n.data), !i) return
                    } catch (r) {
                        return
                    }
                    this.receiveMessage(i, t)
                }, t.prototype.modelUpdated = function (n) {
                    this.callbackArray.push(n)
                }, t.prototype.notifyFrames = function (n) {
                    var t = document.getElementById("toppanel_iframe"),
                        i = document.getElementById("leftpanel_iframe"),
                        r = document.getElementById("rightpanel_iframe"),
                        u = document.getElementById("middlepanel_iframe"),
                        f = document.getElementById("bottompanel_iframe"),
                        e = document.getElementById("sidebar_iframe");
                    this.notifyMainFrame(n);
                    this.notifyFrame(t, n);
                    this.notifyFrame(i, n);
                    this.notifyFrame(r, n);
                    this.notifyFrame(u, n);
                    this.notifyFrame(f, n);
                    this.notifyFrame(e, n)
                }, t.prototype.notifyMainFrame = function (n) {
                    var t = window.queueUserInfoClient;
                    if (t && t.refresh) try {
                        t.refresh(n.toString())
                    } catch (i) {
                        window.logger.Error({
                            Message: "Error notifying main frame",
                            Ex: i
                        }, this.eventId, this.customerId)
                    }
                }, t.prototype.notifyFrame = function (n, t) {
                    if (n && n.contentWindow) try {
                        n.contentWindow.postMessage(t.toString(), "*")
                    } catch (i) {
                        window.logger.Error({
                            Message: "Error notifying frames",
                            Ex: i
                        }, this.eventId, this.customerId)
                    }
                }, t.prototype.doCallbacks = function (n) {
                    for (var t = 0; t < this.callbackArray.length; t++) try {
                        $.isFunction(this.callbackArray[t]) && this.callbackArray[t](n)
                    } catch (i) {
                        window.logger.Error({
                            Message: "Error executing callback: " + i.message,
                            Ex: i
                        }, this.eventId, this.customerId)
                    }
                }, t.prototype.pageReady = function (n) {
                    this.statusChangeCallbackArray.push(n)
                }, t.prototype.doStatusChangeCallbacks = function (n) {
                    for (var t = 0; t < this.statusChangeCallbackArray.length; t++) try {
                        $.isFunction(this.statusChangeCallbackArray[t]) && this.statusChangeCallbackArray[t](n)
                    } catch (i) {
                        window.logger.Error({
                            Message: "Error executing Status change callback: " + i.message,
                            Ex: i
                        }, this.eventId, this.customerId)
                    }
                }, t.prototype.onReady = function (n) {
                    this.doStatusChangeCallbacks(n)
                }, t
            }(),
            t;
        n.ViewBase = i;
        t = function () {
            function n(n) {
                this.messageType = n
            }
            return n.prototype.toString = function () {
                return JSON.stringify(this)
            }, n
        }();
        n.FrameDto = t
    })(t = n.Queue || (n.Queue = {}))
}(QueueIt || (QueueIt = {}));
__extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }(),
    function (n) {
        var t;
        (function (n) {
            var t = function (t) {
                function i(n) {
                    var i = t.call(this, n.customerId, n.eventId) || this;
                    return i.jsErrors = 0, i.updateInterval = 5e3, i.creole = new Parse.Simple.Creole({
                        forIE: document.all
                    }), i.queueId = n.queueId, i.language = n.language, i.layoutName = n.layoutName, i.message = ko.observable(), i.tags = n.tags, i
                }
                return __extends(i, t), i.prototype.ajaxGetMessage = function () {
                    var n = this;
                    $.ajax({
                        type: "GET",
                        contentType: "application/json",
                        url: "/after/" + this.customerId + "/" + this.eventId + "/" + this.queueId + "/status?cid=" + this.language + "&l=" + this.layoutName,
                        success: function (t) {
                            var i = t.redirectUrl;
                            if (i) {
                                document.location.href = i;
                                return
                            }
                            n.refreshClientInfo(t);
                            n.jsErrors = 0
                        },
                        error: function (t, i, r) {
                            n.jsErrors = n.jsErrors + 1;
                            n.logger.logAjaxCallError("AfterPage", t, i, r)
                        }
                    })
                }, i.prototype.updateTimer = function () {
                    var n = this;
                    setTimeout(function () {
                        n.ajaxGetMessage();
                        n.updateTimer()
                    }, this.updateInterval)
                }, i.prototype.getCreole = function () {
                    return this.creole
                }, i.prototype.init = function () {
                    this.notifyFrames(new n.UpdateQueueFrameDto(null, null, "after", [], null, null, this.tags));
                    this.updateTimer()
                }, i.prototype.refreshClientInfo = function (t) {
                    this.updateInterval = t.updateInterval ? t.updateInterval : 5e3;
                    t.message && t.message.text ? this.message(new n.Message(t.message)) : this.message(null)
                }, i.prototype.receiveMessage = function (t) {
                    switch (t.messageType) {
                        case "RequestRefresh":
                            this.notifyFrames(new n.UpdateQueueFrameDto(null, null, "after", [], null, null, this.tags));
                            return;
                        default:
                            return
                    }
                }, i
            }(n.ViewBase);
            n.AfterView = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (t) {
            var i = function () {
                    function n() {}
                    return n.ENTERED_QUEUE_GOT_QUEUEID = "EnteredQueueGotQueueId", n.QUEUEID_ALREADY_EXIST = "QueueIdAlreadyExist", n.INVALID_CAPTCHA_TOKEN = "InvalidCaptchaToken", n.MISSING_CUSTOM_DATA_KEY = "MissingCustomDataKey", n.UNIQUE_KEY_VIOLATION = "UniqueKeyViolation", n.UNEXPECTED_FAILURE_TO_ENQUEUE = "UnexpectedFailureToEnqueue", n.IDLE_QUEUE_ILLEGAL_ACTION = "IdleQueueIllegalAction", n.CUSTOM_DATA_UPDATED = "CustomDataUpdated", n.MISSING_QUEUE_ID = "MissingQueueId", n.UNEXPECTED_FAILURE_TO_UPDATE = "UnexpectedFailureToUpdate", n.INVALID_QUEUEIT_ENQUEUE_TOKEN = "InvalidQueueitEnqueueToken", n
                }(),
                v = function (n) {
                    function t(t) {
                        var r = n.call(this, i.ENTERED_QUEUE_GOT_QUEUEID) || this;
                        return r.queueId = t, r
                    }
                    return __extends(t, n), t
                }(t.FrameDto),
                e, r, o, s, h, c, l, u, a, f, y;
            t.EnteredQueueGotQueueIdDto = v;
            e = function (n) {
                function t() {
                    return n.call(this, i.IDLE_QUEUE_ILLEGAL_ACTION) || this
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.IdleQueueIllegalActionDto = e;
            r = function (n) {
                function t(t, r) {
                    var u = n.call(this, i.QUEUEID_ALREADY_EXIST) || this;
                    return u.queueId = t, u.enqueueParams = r, u
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.QueueIdAlreadyExistDto = r;
            o = function (n) {
                function t() {
                    return n.call(this, i.MISSING_QUEUE_ID) || this
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.MissingQueueIdForUpdateDto = o;
            s = function (n) {
                function t(t) {
                    var r = n.call(this, i.INVALID_CAPTCHA_TOKEN) || this;
                    return r.enqueueParams = t, r
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.InvalidCaptchaTokenDto = s;
            h = function (n) {
                function t(t) {
                    var r = n.call(this, i.MISSING_CUSTOM_DATA_KEY) || this;
                    return r.enqueueParams = t, r
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.MissingCustomDataKeyDto = h;
            c = function (n) {
                function t(t) {
                    var r = n.call(this, i.UNIQUE_KEY_VIOLATION) || this;
                    return r.enqueueParams = t, r
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.UniqueKeyViolationDto = c;
            l = function (n) {
                function t() {
                    return n.call(this, i.CUSTOM_DATA_UPDATED) || this
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.CustomDataUpdatedDto = l;
            u = function (n) {
                function t(t) {
                    var r = n.call(this, i.UNEXPECTED_FAILURE_TO_ENQUEUE) || this;
                    return r.enqueueParams = t, r
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.UnexpectedFailureToEnqueueDto = u;
            a = function (n) {
                function t() {
                    return n.call(this, i.UNEXPECTED_FAILURE_TO_UPDATE) || this
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.UnexpectedFailureToUpdateDto = a;
            f = function (n) {
                function t(t) {
                    var r = n.call(this, i.INVALID_QUEUEIT_ENQUEUE_TOKEN) || this;
                    return r.enqueueParams = t, r
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.InvalidQueueitEnqueueTokenMessage = f;
            y = function () {
                function i(i, u, y) {
                    var p = this;
                    this.options = i;
                    this.frameNotifier = u;
                    this.http = new n.Tools.HttpUtil;
                    this.setCaptchaSession = function (n) {
                        p.captchaSession = n;
                        p.doEnqueueIfReady()
                    };
                    this.receiveMessage = function (n) {
                        var t, i, u, s, h;
                        if (!p.isMessageFromCaptcha(n.origin))
                            if (t = n.data, i = t.Key, t.Type) {
                                if (t.Type == "Enqueue" || t.Type == "Update") {
                                    if (p.options.isIdle) {
                                        p.notify(new e);
                                        return
                                    }
                                    u = t.Email;
                                    s = p.getAllKeyValues(t.CustomData);
                                    t.Type == "Enqueue" ? p.inqueueView.hasQueueId() && i ? p.notify(new r(p.inqueueView.queueId(), p.getEnqueueParams())) : (p.customDataEnqueue = {
                                        Email: u,
                                        Key: i,
                                        CustomData: s
                                    }, p.doEnqueueIfReady()) : t.Type == "Update" && (p.inqueueView.hasQueueId() ? (h = "/api/customdata/" + p.options.customerId + "/" + p.options.eventId + "/" + p.inqueueView.queueId() + "/update", p.http.post(h, p.buildUpdateCustomDataDto(u, s), p.onUpdateCustomDataSuccess, p.onUpdateCustomDataFailed)) : p.notify(new o))
                                } else if (t.Type == "QueueitEnqueueToken") {
                                    if (p.options.isPreview) return;
                                    if (p.inqueueView.hasQueueId()) {
                                        p.notify(new r(p.inqueueView.queueId(), p.getEnqueueParams()));
                                        return
                                    }
                                    if (!t.QueueitEnqueueToken) {
                                        p.notify(new f(p.getEnqueueParams()));
                                        return
                                    }
                                    p.queueitEnqueueToken = t.QueueitEnqueueToken;
                                    p.doEnqueueIfReady()
                                }
                            } else return
                    };
                    this.isMessageFromCaptcha = function (n) {
                        return n == "https://www.google.com"
                    };
                    this.onUpdateCustomDataSuccess = function () {
                        p.notify(new l)
                    };
                    this.onUpdateCustomDataFailed = function (n, t, i) {
                        p.logger.logAjaxCallError("Update CustomData: ", n, t, i);
                        p.notify(new a)
                    };
                    this.onEnqueuePostSuccess = function (n) {
                        if (n.redirectUrl) {
                            document.location.href = n.redirectUrl;
                            return
                        }
                        n.queueId ? (p.notify(new v(n.queueId)), p.inqueueView.setQueueId(n.queueId), p.inqueueView.notifyFrames(new t.UpdateQueueFrameDto(null, null, null, null, null, n.queueId, null)), $("body").removeClass("queueit-enqueue-token-required"), $("body").removeClass("key-required"), p.inqueueView.continueAfterResolvingQueueId()) : n.captchaFailed ? (p.notify(new s(p.getEnqueueParams())), p.logWarning("Failed to enqueue with CustomData. Invalid captcha verification token")) : n.missingCustomDataKey ? (p.notify(new h(p.getEnqueueParams())), p.logWarning("Failed to enqueue. CustomDataKey is missing")) : n.customDataUniqueKeyViolation ? (p.notify(new c(p.getEnqueueParams())), p.logWarning("Failed to enqueue. CustomDataKey is not unique")) : n.invalidQueueitEnqueueToken && (p.notify(new f(p.getEnqueueParams())), p.logWarning("Failed to enqueue. QueueitEnqueueToken is not valid."))
                    };
                    this.getEnqueueParams = function () {
                        return {
                            targetUrl: p.options.targetUrl,
                            layoutName: p.options.layout
                        }
                    };
                    this.buildUpdateCustomDataDto = function (n, t) {
                        return {
                            Email: n,
                            CustomData: t
                        }
                    };
                    this.buildEnterQueueDto = function () {
                        return {
                            CustomUrlParams: p.options.customUrlParams,
                            CaptchaSession: p.captchaSession,
                            LayoutName: p.options.layout,
                            TargetUrl: p.options.targetUrl,
                            CustomDataEnqueue: p.customDataEnqueue,
                            QueueitEnqueueToken: p.queueitEnqueueToken
                        }
                    };
                    this.getAllKeyValues = function (n) {
                        for (var r, o = JSON.stringify(n), e = o.replace(/[{}"\[\]]/g, ""), u = [], i = "", t = "", f = 0; f < e.length; f++) r = e.substr(f, 1), r == ":" ? (i = t, t = "") : r == "," ? (u.push({
                            Key: i,
                            Value: t
                        }), t = "") : t = t + r;
                        return i.length > 0 && t.length > 0 && u.push({
                            Key: i,
                            Value: t
                        }), u
                    };
                    this.notify = function (n) {
                        window.customDataClient ? window.customDataClient.notifyDirect(n) : window.queueitEnqueueTokenClient ? window.queueitEnqueueTokenClient.notifyDirect(n) : p.frameNotifier.notifyFrames(n)
                    };
                    this.listenOnFrames = function () {
                        window.addEventListener ? window.addEventListener("message", p.receiveMessage, !1) : window.attachEvent && window.attachEvent("onmessage", function () {
                            return p.receiveMessage
                        })
                    };
                    this.logWarning = function (n) {
                        window.logger.Warning({
                            Message: n
                        }, p.options.eventId, p.options.customerId)
                    };
                    this.logger = new t.Helpers.AjaxLogger(i.eventId, i.customerId);
                    this.listenOnFrames();
                    this.inqueueView = u;
                    this.softblockValidationSessionInfo = y
                }
                return i.prototype.doEnqueueIfReady = function () {
                    var n = this,
                        i, r, f;
                    this.options.isPreview || (i = "/queue/" + this.options.customerId + "/" + this.options.eventId + "/enqueue?cid=" + (this.options.culture ? this.options.culture : ""), this.softblockValidationSessionInfo && (i = i + "&scv=" + this.softblockValidationSessionInfo), (!this.options.showCaptcha || this.captchaSession) && (!this.options.isQueueitEnqueueTokenRequired || this.queueitEnqueueToken) && (!this.options.requireKey || this.options.isQueueitEnqueueTokenRequired || this.customDataEnqueue) && (r = function (t) {
                        n.http.post(i, n.buildEnterQueueDto(), function (i) {
                            if (i.serverIsBusy) t(i, "ServerIsBusy");
                            else {
                                n.onEnqueuePostSuccess(i);
                                t(i, null)
                            }
                        }, function (i, r, f) {
                            n.logger.logAjaxCallError("Enqueue with custom data: ", i, r, f);
                            n.notify(new u(n.getEnqueueParams()));
                            t(null, null)
                        })
                    }, f = function (t, i) {
                        i == "ServerIsBusy" && (n.notify(new u(n.getEnqueueParams())), window.logger.Error({
                            Message: "Error in enqueueing with customdata: ServerIsBusy"
                        }, n.options.customerId, n.options.eventId))
                    }, t.Helpers.RetryHelper.retry(6, r, f, function (n) {
                        return n * 1e4 - 9e3
                    })))
                }, i
            }();
            t.CustomData = y
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function (t) {
                function i(i) {
                    var r = t.call(this, i.customerId, i.eventId) || this;
                    return r.options = i, r.notifyFrames(new n.UpdateQueueFrameDto(null, null, "error", [], r.options.targetUrl, null, r.options.tags)), r
                }
                return __extends(i, t), i.prototype.receiveMessage = function (t) {
                    switch (t.messageType) {
                        case "RequestRefresh":
                            this.notifyFrames(new n.UpdateQueueFrameDto(null, null, "error", [], this.options.targetUrl, null, this.options.tags));
                            return;
                        default:
                            return
                    }
                }, i
            }(n.ViewBase);
            n.ErrorView = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function (t) {
                function i(i) {
                    var r = t.call(this, i.customerId, i.eventId) || this;
                    return r.queueId = i.queueId, r.language = i.language, r.tags = i.tags, r.notifyFrames(new n.UpdateQueueFrameDto(null, null, "exit", [], null, null, r.tags)), r
                }
                return __extends(i, t), i.prototype.receiveMessage = function (t) {
                    switch (t.messageType) {
                        case "RequestRefresh":
                            this.notifyFrames(new n.UpdateQueueFrameDto(null, null, "exit", [], null, null, this.tags));
                            return;
                        default:
                            return
                    }
                }, i
            }(n.ViewBase);
            n.ExitView = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function () {
                function t(t) {
                    var i = this;
                    this.options = t;
                    this.logger = new n.Helpers.AjaxLogger(t.eventId, t.customerId);
                    this.queueId = ko.observable(t.queueId);
                    this.hasQueueId = ko.computed(function () {
                        return i.queueId() != "00000000-0000-0000-0000-000000000000"
                    });
                    this.isBeforeOrIdle = t.isBeforeOrIdle;
                    this.isPreview = t.isPreview;
                    this.updateFraudProtectionInterval = 6e4;
                    this.captchaSolveTimeoutInterval = 3e5
                }
                return t.prototype.init = function () {
                    this.isPreview || this.startFraudProtectionCheck()
                }, t.prototype.setQueueId = function (n) {
                    this.queueId(n)
                }, t.prototype.startFraudProtectionCheck = function () {
                    this.hasQueueId() || (this.updateFraudProtectionTimer(), this.updateCaptchaSolveTimer())
                }, t.prototype.updateFraudProtectionTimer = function () {
                    var n = this;
                    setTimeout(function () {
                        n.getFraudProtectionStatus()
                    }, this.updateFraudProtectionInterval)
                }, t.prototype.updateCaptchaSolveTimer = function () {
                    var n = this;
                    setTimeout(function () {
                        n.captchaSolveTimeout()
                    }, this.captchaSolveTimeoutInterval)
                }, t.prototype.getFraudProtectionStatus = function () {
                    var n = this,
                        t;
                    this.hasQueueId() || (t = "/fraudprotection/getstatus?c=" + this.options.customerId + "&e=" + this.options.eventId, $.ajax({
                        type: "GET",
                        dataType: "json",
                        contentType: "application/json",
                        url: t,
                        success: function (t) {
                            if (t && t.redirectUrl) {
                                document.location.href = t.redirectUrl;
                                return
                            }
                            n.isInErrorState = !1;
                            n.updateFraudProtectionInterval = 6e4;
                            n.updateFraudProtectionTimer()
                        },
                        error: function (t, i, r) {
                            n.isInErrorState = !0;
                            n.logger.logAjaxCallError("FraudProtection: isBeforeOrIdle = " + n.isBeforeOrIdle, t, i, r);
                            t && (t.status === 503 || t.status === 504) && (n.updateFraudProtectionInterval *= 1.25, n.updateFraudProtectionInterval > 12e4 && (n.updateFraudProtectionInterval = 12e4));
                            n.updateFraudProtectionTimer()
                        }
                    }))
                }, t.prototype.captchaRuntimeError = function (n) {
                    this.captchaTimeout("/fraudprotection/captcharuntimeerror?c=" + this.options.customerId + "&e=" + this.options.eventId + "&captchaProvider=" + n)
                }, t.prototype.captchaSolveTimeout = function () {
                    this.captchaTimeout("/fraudprotection/captchasolvetimeout?c=" + this.options.customerId + "&e=" + this.options.eventId)
                }, t.prototype.captchaTimeout = function (n) {
                    this.hasQueueId() || this.isInErrorState || (this.options.targetUrl && (n += "&t=" + this.options.targetUrl), this.options.layout && (n += "&l=" + this.options.layout), this.options.customUrlParams && (n = this.addTargetUrlParams(n)), document.location.href = n)
                }, t.prototype.addTargetUrlParams = function (t) {
                    for (var u, i = 0, r = n.getTargetUrlParams(this.options.customUrlParams); i < r.length; i++) u = r[i], t += "&t_" + u.key + "=" + u.value;
                    return t
                }, t
            }();
            n.FraudProtection = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (t) {
            function f(n) {
                for (var o, t, s, r = "t_", h = decodeURIComponent(n), f = [], i = 0, e = h.split("&"); i < e.length; i++) o = e[i], t = o.split("="), t.length == 2 && (s = t[0].length >= r.length ? t[0].substr(r.length) : t[0], f.push(new u(s, t[1])));
                return f
            }
            var i, u, r, e;
            t.getTargetUrlParams = f;
            i = function (n) {
                function t(t, i, r, u, f, e, o) {
                    var s = n.call(this, "UpdateQueue") || this;
                    return isNaN(t) || (s.queueNumber = t), isNaN(i) || (s.usersInLineAheadOfYou = i), r && (s.pageId = r), s.targetUrlParams = u, s.targetUrl = f, e && (s.queueId = e), s.tags = o, s
                }
                return __extends(t, n), t
            }(t.FrameDto);
            t.UpdateQueueFrameDto = i;
            u = function () {
                function n(n, t) {
                    this.key = n;
                    this.value = t
                }
                return n
            }();
            t.TargetUrlParam = u,
                function (n) {
                    n[n.None = 0] = "None";
                    n[n.Recaptcha = 1] = "Recaptcha";
                    n[n.RecaptchaInvisible = 2] = "RecaptchaInvisible";
                    n[n.MachineCaptcha = 4] = "MachineCaptcha"
                }(r = t.CaptchaType || (t.CaptchaType = {}));
            e = function (u) {
                function e(n, f, e) {
                    var o = u.call(this, n.customerId, n.eventId) || this;
                    return o.redirector = f, o.cssReplacer = e, o._firstInLine = !1, o._soundIsPlayingFlag = !1, o.isRedirectPromptDialogConfirmed = null, o._logSoundPlayerInfo = {
                        SoundPlayer_setup_IsCalled: !1,
                        SoundPlayer_onready_IsCalled: !1,
                        SoundPlayer_onready_Exception: !1
                    }, o.waitingStateUpdateInterval = 6e4, o.originalUrl = window.location.href, o.getStatus = function () {
                        return o.inqueueStatus
                    }, o.getIsRedirectedToTarget = function () {
                        return o.isRedirectedToTarget
                    }, o.getQueueId = function () {
                        return o.options.queueId
                    }, o.setQueueId = function (n) {
                        o.options.queueId = n;
                        o.queueId(n);
                        o.fraudProtection && o.fraudProtection.setQueueId(n)
                    }, o.updateNotify = function () {
                        o.toggleButton("#aUpdateEmail", !0);
                        $("#MainPart_inpEmailAddress").on("change keyup paste", function () {
                            o.toggleButton("#aUpdateEmail", !1)
                        });
                        $.ajax({
                            type: "POST",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify({
                                email: o.emailAddress(),
                                targetUrl: o.options.targetUrl,
                                customUrlParams: o.options.customUrlParams,
                                layoutName: o.options.layout
                            }),
                            url: "queue/" + o.options.customerId + "/" + o.options.eventId + "/" + o.options.queueId + "/UpdateEmail/?cid=" + (o.options.culture ? o.options.culture : ""),
                            success: function (n) {
                                o.notify(n.Message, n.Status)
                            },
                            error: function (n, t, i) {
                                o.toggleButton("#aUpdateEmail", !1);
                                o.notify("Error subscribing", "error");
                                o.logger.logAjaxCallError("InqueuePage", n, t, i, "Error subscribing")
                            }
                        })
                    }, o.handleCaptchaCallback = function (n) {
                        var t = n;
                        o.verifyCaptcha(t, o.verifyCaptchaCallback)
                    }, o.verifyCaptchaCallback = function (n, t) {
                        if (t) {
                            window.logger.Error({
                                Message: "Error verifying captcha: " + t
                            }, o.eventId, o.customerId);
                            o.options.captchaType == r.MachineCaptcha && qitmCaptcha.canRetry ? qitmCaptcha.retry() : grecaptcha.reset(o._captchaWidgetID);
                            return
                        }
                        $("body").removeClass("captcha").addClass("captcha-solved");
                        o.setQueueId(n);
                        o.notifyFrames(new i(null, null, null, null, null, o.queueId(), null));
                        o.initialWindowLocation(null);
                        o.continueAfterResolvingQueueId()
                    }, o.options = n, o.inqueueStatus = "NotReadyYet", o.notReadyCount = 0, o.jsErrorCount = 0, o.lastTryUpdate = new Date, o.lastLayoutVersion = n.layoutVersion, o.lastLayoutName = n.layout, o.requireKey = n.requireKey, o.requireKeyToBeUnique = n.requireKeyToBeUnique, o.isQueueitEnqueueTokenRequired = n.isQueueitEnqueueTokenRequired, o.detector = new t.InactivityDetector, o.queueItemInfoHelper = new t.QueueItemInfoHelper, o.isWebPushNotificationEnabled = n.isWebPushNotificationEnabled, o.redirector || (o.redirector = {
                        redirect: function (n) {
                            n ? window.location.href = n : window.location.reload()
                        }
                    }), o.cssReplacer || (o.cssReplacer = {
                        replace: function (n) {
                            $("head< link").filter("[href$='.css']").remove();
                            $("head").append(n)
                        }
                    }), o.creole = new Parse.Simple.Creole({
                        forIE: document.all
                    }), o.isBeforeOrIdle = n.isBeforeOrIdle, o.updateInterval = o.isBeforeOrIdle ? 5e3 : 2e3, o.showConfirmRedirectDialog = ko.observable(!1), o.queueIdLinkModalVisible = ko.observable(!1), o.message = ko.observable(undefined), o.queueId = ko.observable(n.queueId), o.hasQueueId = ko.computed(function () {
                        return o.queueId() != "00000000-0000-0000-0000-000000000000"
                    }), o.isRunning = ko.observable(!0), o.isRedirected = !1, o.isRedirectedToTarget = !1, o.emailAddress = ko.observable(o.options.emailAddress), o.isClientInactive = ko.observable(!1), o.ticket = new t.Ticket(null), o.initialWindowLocation = ko.observable(""), o
                }
                return __extends(e, u), e.prototype.get_firstInLine = function () {
                    return this._firstInLine
                }, e.prototype.set_firstInLine = function (n) {
                    this._firstInLine != n && (this._firstInLine = n, n && window.welcomeAudioPlayer && this.playWelcomeSound())
                }, e.prototype.init = function () {
                    var n = this;
                    this.set_firstInLine(this.options.inqueueInfo.forecastStatus == "FirstInLine");
                    this.doCallbacks(this.options.inqueueInfo);
                    this.layout = new t.Layout(this.options.inqueueInfo.layout, this.get_firstInLine());
                    this.texts = new t.InQueueTexts(this.options.inqueueInfo.texts);
                    this.ticket.refresh(this.options.inqueueInfo.ticket);
                    this.options.inqueueInfo.message && this.options.inqueueInfo.message.text && this.message(new t.Message(this.options.inqueueInfo.message));
                    this.options.isBeforeOrIdle || this.initSoundTrack();
                    this.notifyFrames(new i(this.options.isBeforeOrIdle ? null : parseInt(this.options.inqueueInfo.ticket.queueNumber), this.options.isBeforeOrIdle ? null : parseInt(this.options.inqueueInfo.ticket.usersInLineAheadOfYou), this.options.isBeforeOrIdle ? "before" : "queue", this.getTargetUrlParams(), this.options.targetUrl, this.queueId(), this.options.inqueueInfo.texts.tags));
                    this.setupBlinkingDot();
                    this.customData = new t.CustomData(this.options, this, this.tryGetSoftblockValidationsessionInfofromUrl());
                    this.options.showCaptcha ? (window.loadCaptchaWidget = function () {
                        return n.loadCaptchaWidget()
                    }, this.fraudProtection = new t.FraudProtection(this.options), this.fraudProtection.init()) : (!(this.requireKey || this.isQueueitEnqueueTokenRequired) || this.options.isIdle || this.hasQueueId()) && this.start(!this.options.isPreview)
                }, e.prototype.getTargetUrlParams = function () {
                    return f(this.options.customUrlParams)
                }, e.prototype.start = function (n) {
                    n === void 0 && (n = !0);
                    n && (this.updateTimer(), this.updateCheckTimer())
                }, e.prototype.getCreole = function () {
                    return this.creole
                }, e.prototype.refresh = function (n) {
                    !n.isBeforeOrIdle && this.isBeforeOrIdle && ($("body").attr("data-pageid", "queue").addClass("queue").removeClass("prequeue").removeClass("before").removeClass("idle"), this.doStatusChangeCallbacks("queue"), this.isBeforeOrIdle = !1);
                    this.isBeforeOrIdle ? this.refreshBeforeStatusUpdate(n) : this.refreshGetForecast(n)
                }, e.prototype.refreshBeforeStatusUpdate = function (t) {
                    this.doCallbacks(t);
                    this.notifyFrames(new i(null, null, t.pageId, this.getTargetUrlParams(), this.options.targetUrl, null, t.texts != null ? t.texts.tags : null));
                    this.updateInterval = t.updateInterval ? t.updateInterval : 4e4;
                    var r = t.ticket.secondsToStart;
                    $("#defaultCountdown").countdown("option", {
                        until: r
                    });
                    this.ticket.refresh(t.ticket);
                    this.lastLayoutVersion = t.layoutVersion;
                    this.lastLayoutName = t.layoutName;
                    t.layout && this.layout.refresh(t.layout, !1);
                    t.texts && (this.texts.styleSheets != t.texts.styleSheets && this.cssReplacer.replace(t.texts.styleSheets), this.texts.refresh(t.texts));
                    this.message(t.message && t.message.text ? new n.Queue.Message(t.message) : undefined)
                }, e.prototype.refreshGetForecast = function (t) {
                    this.inqueueStatus !== "NotReadyYet" && t.forecastStatus && t.forecastStatus === "NotReadyYet" || this.get_firstInLine() && t.forecastStatus !== "FirstInLine" || (this.updateInterval = t.updateInterval, this.inqueueStatus = t.forecastStatus, this.inqueueStatus === "NotReadyYet" && this.notReadyCount++, this.notReadyCount >= 10 && (this.isRedirected = !0, this.redirector.redirect()), this.doCallbacks(t), this.notifyFrames(new i(t.ticket.queueNumber, t.ticket.usersInLineAheadOfYou, t.pageId, this.getTargetUrlParams(), this.options.targetUrl, null, t.texts != null ? t.texts.tags : null)), this.isRedirectPromptDialogConfirmed || t.ticket.queuePaused != !1 || this.inqueueStatus != "FirstInLine" || (this.layout.isRedirectPromptDialogEnabled || this.isClientInactive()) && (this.ticket.windowStartTime() && (this.updateInterval = Math.max(this.updateInterval, this.waitingStateUpdateInterval)), this.showConfirmRedirectDialog(!0), this.message(null), this.isRedirectPromptDialogConfirmed = !1), this.inqueueStatus === "FirstInLine" && this.set_firstInLine(!0), this.ticket.refresh(t.ticket), this.layout.refresh(t.layout, this.get_firstInLine()), t.texts && (t.texts.styleSheets !== this.texts.styleSheets && this.cssReplacer.replace(t.texts.styleSheets), this.texts.refresh(t.texts)), this.lastLayoutVersion >= t.layoutVersion && this.lastLayoutName == t.layoutName) || (this.message(t.message ? new n.Queue.Message(t.message) : undefined), this.initSoundTrack(), this.lastLayoutVersion = t.layoutVersion, this.lastLayoutName = t.layoutName)
                }, e.prototype.updateTimer = function () {
                    var n = this;
                    setTimeout(function () {
                        n.lastTryUpdate = new Date;
                        n.isBeforeOrIdle || n.showConfirmRedirectDialog() || n.isRedirectPromptDialogConfirmed || n.isClientInactive(n.detector.isHidden());
                        n.ajaxGetStatus()
                    }, this.updateInterval)
                }, e.prototype.initSoundTrack = function () {
                    var n = this;
                    if (!window.welcomeAudioPlayer && this.texts.isWelcomeSoundEnabled) try {
                        this._logSoundPlayerInfo.SoundPlayer_setup_IsCalled = !0;
                        window.soundManager.setup({
                            url: "/css/sound",
                            debugMode: !1,
                            preferFlash: !1,
                            onready: function () {
                                n._logSoundPlayerInfo.SoundPlayer_onready_IsCalled = !0;
                                try {
                                    window.welcomeAudioPlayer = window.soundManager.createSound({
                                        url: n.texts.welcomeSoundUrls
                                    });
                                    n.get_firstInLine() && n.playWelcomeSound()
                                } catch (t) {
                                    window.logger.Error({
                                        Message: "Error initing sound file",
                                        Ex: t,
                                        Page: "InqueuePage"
                                    }, n.eventId, n.customerId, n.options.queueId || "");
                                    n._logSoundPlayerInfo.SoundPlayer_onready_Exception = !0
                                }
                            }
                        })
                    } catch (t) {
                        window.logger.Error({
                            Message: "Error setuping soundmanager",
                            Ex: t,
                            Page: "InqueuePage"
                        }, this.eventId, this.customerId, this.options.queueId || "")
                    }
                }, e.prototype.playWelcomeSound = function (t) {
                    var i = this;
                    try {
                        this._soundIsPlayingFlag = !0;
                        setTimeout(function () {
                            i._soundIsPlayingFlag = !1
                        }, 1e4);
                        this.texts.isWelcomeSoundEnabled && (window.welcomeAudioPlayer ? window.welcomeAudioPlayer.play({
                            onfinish: function () {
                                i._soundIsPlayingFlag = !1;
                                t && t()
                            }
                        }) : window.logger.Debug({
                            Message: "Not expected case in playing welcome sound"
                        }, this.eventId, this.customerId, this.options.queueId || "", n.Queue.Helpers.ErrorSeverity.Information, this._logSoundPlayerInfo))
                    } catch (r) {
                        this._soundIsPlayingFlag = !1;
                        window.logger.Error({
                            Message: "Error playing sound",
                            Ex: r,
                            Page: "InqueuePage"
                        }, this.eventId, this.customerId, this.options.queueId || "")
                    }
                }, e.prototype.updateCheckTimer = function () {
                    var n = this;
                    setInterval(function () {
                        (new Date).getTime() - n.lastTryUpdate.getTime() > 6e4 && setTimeout(function () {
                            (new Date).getTime() - n.lastTryUpdate.getTime() > 12e4 && n.redirector.redirect()
                        }, 6e4);
                        n.jsErrorCount > 3 && n.isRunning(!1)
                    }, 2e3)
                }, e.prototype.setupBlinkingDot = function () {
                    var n = this;
                    setInterval(function () {
                        n.jsErrorCount == 0 ? $("#defaultViewPb1").toggleClass("active") : $("#defaultViewPb1").removeClass("active")
                    }, 2e3)
                }, e.prototype.ajaxGetStatus = function (n, t) {
                    var i = this,
                        u, r;
                    if (n === void 0 && (n = this.isRedirectPromptDialogConfirmed), !this.isRedirected) {
                        if (this._soundIsPlayingFlag) {
                            this.updateTimer();
                            return
                        }
                        u = "/queue/" + this.options.customerId + "/" + this.options.eventId + "/" + this.options.queueId + "/GetStatus?cid=" + (this.options.culture ? this.options.culture : "") + "&l=" + (this.options.layout ? this.options.layout : "");
                        this.options.sdkVersion && (u += "&sdkv=" + this.options.sdkVersion);
                        r = this;
                        $.ajax({
                            type: "POST",
                            dataType: "json",
                            beforeSend: function (n) {
                                r.queueItemInfoHelper.setHeaderFromCache(r.options.queueId, n)
                            },
                            contentType: "application/json",
                            data: JSON.stringify({
                                targetUrl: this.options.targetUrl,
                                customUrlParams: this.options.customUrlParams,
                                layoutVersion: this.lastLayoutVersion,
                                layoutName: this.lastLayoutName,
                                isClientRedayToRedirect: this.isBeforeOrIdle ? null : this.GetClientReadyToRedirect(n),
                                isBeforeOrIdle: this.isBeforeOrIdle
                            }),
                            url: u,
                            success: function (n, u, f) {
                                try {
                                    if (r.queueItemInfoHelper.tryCacheHeader(r.options.queueId, f), n.redirectUrl && !n.isRedirectToTarget) {
                                        document.location.href = n.redirectUrl;
                                        return
                                    }
                                    if (n.isRedirectToTarget) {
                                        i.redirectToTarget(n);
                                        return
                                    }
                                    i.refresh(n);
                                    i.jsErrorCount = 0;
                                    i.isRunning(!0)
                                } catch (e) {
                                    i.jsErrorCount++;
                                    window.logger.Error({
                                        Message: "Error in updating result ajaxGetForecast",
                                        Ex: e,
                                        Page: "InqueuePage"
                                    }, i.eventId, i.customerId, i.options.queueId || "")
                                } finally {
                                    t && t();
                                    i.updateTimer()
                                }
                            },
                            error: function (n, r, u) {
                                i.logger.logAjaxCallError("InqueuePage: isBeforeOrIdle = " + i.isBeforeOrIdle, n, r, u);
                                try {
                                    $.isFunction(i.options.errorCallback) && i.options.errorCallback()
                                } finally {
                                    i.jsErrorCount++;
                                    n && (n.status === 503 || n.status === 504) && (i.updateInterval *= 1.25, i.updateInterval > 2e5 && (i.updateInterval = 2e5));
                                    t && t();
                                    i.updateTimer()
                                }
                            }
                        })
                    }
                }, e.prototype.redirectToTarget = function (n) {
                    var t = this,
                        i;
                    this.isRedirected = !0;
                    this.isRedirectedToTarget = n.isRedirectToTarget;
                    this.get_firstInLine() ? this.redirector.redirect(n.redirectUrl, n.isRedirectToTarget) : (this._firstInLine = !0, i = setTimeout(function () {
                        t.redirector.redirect(n.redirectUrl, n.isRedirectToTarget)
                    }, 1e4), this.ticket.setProgressBar(100), this.playWelcomeSound(function () {
                        clearTimeout(i);
                        t.redirector.redirect(n.redirectUrl, n.isRedirectToTarget)
                    }))
                }, e.prototype.notify = function (n, t) {
                    $("#divEmailStatusFrame").removeClass().show().addClass(t == "Success" ? "submit_success alert alert-success" : "submit_failure alert alert-error").delay(6e4).fadeOut().click(function () {
                        $(this).stop(!0, !0).fadeOut()
                    });
                    $("#divEmailStatus").html(n)
                }, e.prototype.registerForWebPush = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var i = this,
                            n;
                        return __generator(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return [4, t.Helpers.PushSubscriptionManager.registerForPush()];
                                case 1:
                                    return (n = r.sent(), !n || !n.Endpoint) ? (this.notify("Error subscribing for web push", "error"), [2]) : ($.ajax({
                                        type: "POST",
                                        dataType: "json",
                                        contentType: "application/json",
                                        data: JSON.stringify(n),
                                        url: "queue/" + this.options.customerId + "/" + this.options.eventId + "/" + this.options.queueId + "/RegisterForPush/?cid=" + (this.options.culture ? this.options.culture : "") + "&l=" + this.options.layout,
                                        success: function () {
                                            i.toggleButton("#aRegisterForWebPush", !0);
                                            console.log("It is registered for web push!")
                                        },
                                        error: function () {
                                            console.log("Error subscribing for web push")
                                        }
                                    }), [2])
                            }
                        })
                    })
                }, e.prototype.setActiveClient = function () {
                    var n = this;
                    (this.isClientInactive(!1), this.showConfirmRedirectDialog(!1), this.options.isPreview) || this.ajaxGetStatus(!0, function () {
                        n.isRedirectPromptDialogConfirmed = !0
                    })
                }, e.prototype.GetClientReadyToRedirect = function (n) {
                    return n || !this.layout.isRedirectPromptDialogEnabled && !this.isClientInactive()
                }, e.prototype.machineCaptchaErrorHandler = function (n) {
                    qitmCaptcha.canRetry() ? setTimeout(qitmCaptcha.retry, 1e3) : (window.logger.Error({
                        Message: "Error performing machine captcha: " + n
                    }, this.eventId, this.customerId), this.fraudProtection.captchaRuntimeError(this.getCaptchaProvider()))
                }, e.prototype.continueAfterResolvingQueueId = function () {
                    this.removeURLParameter(this.originalUrl, "scv");
                    var t = window.location.href.indexOf("?") === -1 ? "?" : "&",
                        n = window.location.href + t + "q=" + this.queueId();
                    window.history.replaceState ? window.history.replaceState(null, document.title, n) : window.location.href = n;
                    this.removeQueueIdParameter();
                    this.start(!this.options.isPreview)
                }, e.prototype.loadCaptchaWidget = function () {
                    this.options.captchaType == r.RecaptchaInvisible ? (this._captchaWidgetID = grecaptcha.render("captcha-widget-container", {
                        sitekey: this.options.captchaInvisiblePublicKey,
                        callback: this.handleCaptchaCallback,
                        size: "invisible"
                    }), grecaptcha.execute()) : this.options.captchaType == r.Recaptcha ? this._captchaWidgetID = grecaptcha.render("captcha-widget-container", {
                        sitekey: this.options.captchaPublicKey,
                        callback: this.handleCaptchaCallback
                    }) : this.options.captchaType == r.MachineCaptcha ? qitmCaptcha.execute({
                        callback: this.handleCaptchaCallback,
                        errorHandler: this.machineCaptchaErrorHandler.bind(this),
                        userId: this.userId,
                        tags: {
                            CustomerId: this.customerId,
                            EventId: this.eventId
                        }
                    }) : window.logger.Error({
                        Message: "Could not detect captcha type",
                        Ex: new Error("Captcha type " + this.options.captchaType + " is not defined"),
                        Page: "InqueuePage"
                    }, this.eventId, this.customerId, this.options.queueId || "")
                }, e.prototype.verifyCaptcha = function (t, i) {
                    var r = this,
                        u = function (n) {
                            return $.ajax({
                                type: "POST",
                                dataType: "json",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    captchaProvider: r.getCaptchaProvider(),
                                    sessionId: t,
                                    customerId: r.customerId,
                                    eventId: r.eventId,
                                    version: 3
                                }),
                                url: r.options.captchaVerifyEndpoint,
                                success: function (t) {
                                    r.options.isPreview ? (r.queueId(r.guid()), $("body").removeClass("captcha").addClass("captcha-solved")) : !t.sessionInfo || r.requireKey || r.isQueueitEnqueueTokenRequired ? t.sessionInfo && (r.requireKey || r.isQueueitEnqueueTokenRequired) ? ($("body").removeClass("captcha").addClass("captcha-solved"), r.customData.setCaptchaSession(t.sessionInfo)) : i(null, "No captcha session info returned") : r.enqueueWithCaptcha(t.sessionInfo, n)
                                },
                                error: function (t, i, u) {
                                    r.logger.logAjaxCallError("InqueuePage", t, i, u, "Error captcha verify");
                                    n(null, "Error from captcha verify end point: " + i + " - " + u)
                                }
                            })
                        },
                        f = function (n) {
                            return 300 * n
                        };
                    n.Queue.Helpers.RetryHelper.retry(10, u, i, f)
                }, e.prototype.getCaptchaProvider = function () {
                    return this.options.captchaType == r.RecaptchaInvisible ? "recaptcha-invisible" : this.options.captchaType == r.MachineCaptcha ? "machinecaptcha" : "recaptcha"
                }, e.prototype.enqueueWithCaptcha = function (t, i) {
                    var r = this,
                        f = this.tryGetSoftblockValidationsessionInfofromUrl(),
                        u = "queue/" + this.options.customerId + "/" + this.options.eventId + "/enqueue?cid=" + (this.options.culture ? this.options.culture : ""),
                        e, o;
                    f && (u = u + "&scv=" + f);
                    e = function (n) {
                        return $.ajax({
                            type: "POST",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify({
                                captchaSession: t,
                                layoutName: r.options.layout,
                                customUrlParams: r.options.customUrlParams,
                                targetUrl: r.options.targetUrl
                            }),
                            url: u,
                            success: function (t) {
                                if (t.captchaFailed) return n(null, "Captcha verification failed");
                                if (t.redirectUrl) {
                                    document.location.href = t.redirectUrl;
                                    return
                                }
                                t.queueId ? n(t.queueId, null) : n(null, "Missing queue id")
                            },
                            error: function (t, i, u) {
                                r.logger.logAjaxCallError("InqueuePage", t, i, u, "Error enqueuing (enqueueWithCaptcha function call)");
                                n(null, "Error from enqueue end point: " + i + " - " + u)
                            }
                        })
                    };
                    o = function (n) {
                        return 300 * n
                    };
                    n.Queue.Helpers.RetryHelper.retry(10, e, i, o)
                }, e.prototype.onReady = function () {
                    var t, i, n, r;
                    this.hasQueueId() && this.removeURLParameter(this.originalUrl, "scv");
                    this.removeQueueIdParameter();
                    t = this.isBeforeOrIdle ? "before" : "queue";
                    this.isBeforeOrIdle && (i = this.options.culture, n = $, n.countdown.setDefaults(n.countdown.regional[i]), r = this.ticket.secondsToStart(), n("#defaultCountdown").countdown({
                        until: r,
                        format: "dhmS",
                        layout: '{d<}{dnn} <span class="countdown_label">{dl}<\/span>{d>} {h<}{hnn} <span class="countdown_label">{hl}<\/span>{h>} {m<}{mnn} <span class="countdown_label">{ml}<\/span>{m>} {snn} <span class="countdown_label">{sl}<\/span>',
                        expiryText: '<div class="finished">' + this.texts.countdownFinishedText + " <\/div>"
                    }));
                    u.prototype.onReady.call(this, t)
                }, e.prototype.removeQueueIdParameter = function () {
                    var n, t, i;
                    this.initialWindowLocation() || this.initialWindowLocation(window.location.toString());
                    n = window.location.href.indexOf("&q=");
                    n != -1 && this.hasEventCookie() && (t = window.location.href.substr(n, 39), i = window.location.href.replace(t, ""), window.history.replaceState && window.history.replaceState(null, document.title, i))
                }, e.prototype.hasEventCookie = function () {
                    var t = "Queue-it-" + (new n.Tools.StringUtil).padRight(Array(21).join("_"), this.customerId) + this.eventId,
                        i = (new n.Tools.CookieUtil).getCookie(t);
                    return i != undefined
                }, e.prototype.receiveMessage = function (n, t) {
                    switch (n.messageType) {
                        case "RequestRefresh":
                            this.notifyFrames(new i(this.isBeforeOrIdle ? null : parseInt(t.ticket.queueNumber()), this.isBeforeOrIdle ? null : t.ticket.usersInLineAheadOfYou(), this.isBeforeOrIdle ? "before" : "queue", this.getTargetUrlParams(), this.options.targetUrl, this.queueId(), this.options.inqueueInfo.texts != null ? this.options.inqueueInfo.texts.tags : null));
                            return;
                        default:
                            return
                    }
                }, e.prototype.toggleButton = function (n, t) {
                    $(n).prop("disabled", t);
                    t ? $(n).addClass("btn-disabled") : $(n).removeClass("btn-disabled")
                }, e.prototype.toggleQueueIdLinkModal = function () {
                    this.clipboard || (this.clipboard = new ClipboardJS(".btn"));
                    this.queueIdLinkModalVisible(!this.queueIdLinkModalVisible())
                }, e.prototype.guid = function () {
                    function n() {
                        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
                    }
                    return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
                }, e.prototype.tryGetSoftblockValidationsessionInfofromUrl = function () {
                    var n = function (n, t) {
                        for (var r, f, e = n.split("&"), i = 0, u = e; i < u.length; i++)
                            if (r = u[i], f = r.split("=")[0], f == t) return r.split("=")[1];
                        return undefined
                    };
                    return n(this.originalUrl, "scv")
                }, e.prototype.removeURLParameter = function (n, t) {
                    var u = n.split("?"),
                        f, i, r, e;
                    if (window.history.replaceState && u.length >= 2) {
                        for (f = encodeURIComponent(t) + "=", i = u[1].split(/[&;]/g), r = i.length; r-- > 0;) i[r].lastIndexOf(f, 0) !== -1 && i.splice(r, 1);
                        e = u[0] + (i.length > 0 ? "?" + i.join("&") : "");
                        window.history.replaceState(null, document.title, e)
                    }
                }, e
            }(t.ViewBase);
            t.InQueueView = e
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function () {
                function n() {
                    var n = this;
                    try {
                        document.addEventListener("visibilitychange", function () {
                            return n.handleVisibilityChange()
                        }, !1)
                    } catch (t) {
                        window.logger.Debug({
                            Message: "Error in adding visibilitychange",
                            Ex: t
                        })
                    }
                    try {
                        document.addEventListener("mozvisibilitychange", function () {
                            return n.handleVisibilityChange()
                        }, !1)
                    } catch (t) {
                        window.logger.Debug({
                            Message: "Error in adding mozvisibilitychange",
                            Ex: t
                        })
                    }
                    try {
                        document.addEventListener("webkitvisibilitychange", function () {
                            return n.handleVisibilityChange()
                        }, !1)
                    } catch (t) {
                        window.logger.Debug({
                            Message: "Error in adding webkitvisibilitychange",
                            Ex: t
                        })
                    }
                    try {
                        document.addEventListener("msvisibilitychange", function () {
                            return n.handleVisibilityChange()
                        }, !1)
                    } catch (t) {
                        window.logger.Debug({
                            Message: "Error in adding msvisibilitychange",
                            Ex: t
                        })
                    }
                }
                return n.prototype.handleVisibilityChange = function () {
                    var n = document;
                    this._isHidden = n.hidden || n.mozHidden || n.webkitHidden || n.msHidden
                }, n.prototype.isHidden = function () {
                    return this._isHidden
                }, n
            }();
            n.InactivityDetector = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function () {
                function n(n) {
                    this.body = ko.observable();
                    this.disclaimerText = ko.observable();
                    this.header = ko.observable();
                    this.bottompanelIFrameSrc = ko.observable();
                    this.leftpanelIFrameSrc = ko.observable();
                    this.logoSrc = ko.observable();
                    this.middlepanelIFrameSrc = ko.observable();
                    this.rightpanelIFrameSrc = ko.observable();
                    this.sidepanelIFrameSrc = ko.observable();
                    this.toppanelIFrameSrc = ko.observable();
                    this.whatIsThisUrl = ko.observable();
                    this.languages = ko.observableArray();
                    this.selectedLanguage = ko.observable();
                    this.refresh(n)
                }
                return n.prototype.refresh = function (n) {
                    n && (this.welcomeSoundUrls = n.welcomeSoundUrls, this.isWelcomeSoundEnabled = this.welcomeSoundUrls && this.welcomeSoundUrls.length > 0, this.body() != n.body && this.body(n.body), this.disclaimerText() != n.disclaimerText && this.disclaimerText(n.disclaimerText), this.header() != n.header && this.header(n.header), this.logoSrc() != n.logoSrc && this.logoSrc(n.logoSrc), this.styleSheets = n.styleSheets, this.initLanguage(n), this.sidepanelIFrameSrc() != n.sidepanelIFrameSrc && this.sidepanelIFrameSrc(n.sidepanelIFrameSrc), this.toppanelIFrameSrc() != n.toppanelIFrameSrc && this.toppanelIFrameSrc(n.toppanelIFrameSrc), this.rightpanelIFrameSrc() != n.rightpanelIFrameSrc && this.rightpanelIFrameSrc(n.rightpanelIFrameSrc), this.middlepanelIFrameSrc() != n.middlepanelIFrameSrc && this.middlepanelIFrameSrc(n.middlepanelIFrameSrc), this.leftpanelIFrameSrc() != n.leftpanelIFrameSrc && this.leftpanelIFrameSrc(n.leftpanelIFrameSrc), this.bottompanelIFrameSrc() != n.bottompanelIFrameSrc && this.bottompanelIFrameSrc(n.bottompanelIFrameSrc), this.whatIsThisUrl() != n.whatIsThisUrl && this.whatIsThisUrl(n.whatIsThisUrl), this.countdownFinishedText != n.countdownFinishedText && (this.countdownFinishedText = n.countdownFinishedText))
                }, n.prototype.initLanguage = function (n) {
                    var i = this,
                        t;
                    if (n.languages) {
                        for (this._selectedLanguageSubscribe && this._selectedLanguageSubscribe.dispose(), this.languages.removeAll(), t = 0; t < n.languages.length; ++t) this.languages.push({
                            text: n.languages[t].Text,
                            value: n.languages[t].Value
                        }), n.languages[t].Selected && this.selectedLanguage(n.languages[t].Value);
                        this._selectedLanguageSubscribe = this.selectedLanguage.subscribe(function () {
                            return i.changeLanguage()
                        })
                    }
                }, n.prototype.changeLanguage = function () {
                    var i = document.location.href,
                        r = i.split("?"),
                        u, n, t;
                    if (r.length >= 2) {
                        for (u = encodeURIComponent("cid") + "=", n = r[1].split(/[&;]/g), t = n.length - 1; t >= 0; t--) n[t].lastIndexOf(u, 0) !== -1 && n.splice(t, 1);
                        i = r[0] + "?" + n.join("&")
                    }
                    document.location.href = i + "&cid=" + this.selectedLanguage()
                }, n
            }();
            n.InQueueTexts = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function () {
                function n(n, t) {
                    this.servicedSoonDelayLengthMS = 15e3;
                    this.firstInLineTimeStamp = null;
                    this.bottomPanelVisible = ko.observable();
                    this.dynamicMessageVisible = ko.observable();
                    this.expectedServiceTimeVisible = ko.observable();
                    this.firstInLineVisible = ko.observable();
                    this.highLoadVisible = ko.observable();
                    this.leftPanelVisible = ko.observable();
                    this.middlePanelVisible = ko.observable();
                    this.queueIsPausedVisible = ko.observable();
                    this.queueNumberVisible = ko.observable();
                    this.queueNumberLoadingVisible = ko.observable();
                    this.reminderEmailVisible = ko.observable();
                    this.reminderVisible = ko.observable();
                    this.rightPanelVisible = ko.observable();
                    this.servicedSoonVisible = ko.observable();
                    this.sidePanelVisible = ko.observable();
                    this.topPanelVisible = ko.observable();
                    this.usersInLineAheadOfYouVisible = ko.observable();
                    this.usersInQueueVisible = ko.observable();
                    this.logoVisible = ko.observable();
                    this.whichIsInVisible = ko.observable();
                    this.progressVisible = ko.observable();
                    this.servicedSoonDelayVisible = ko.observable(!1);
                    this.languageSelectorVisible = ko.observable();
                    this.refresh(n, t)
                }
                return n.prototype.refresh = function (n, t) {
                    n && (this.isRedirectPromptDialogEnabled = n.isRedirectPromptDialogEnabled, this.bottomPanelVisible(n.bottomPanelVisible), this.dynamicMessageVisible(n.dynamicMessageVisible), this.expectedServiceTimeVisible(n.expectedServiceTimeVisible && !t), this.firstInLineVisible(t || n.firstInLineVisible), this.highLoadVisible(n.highLoadVisible), this.leftPanelVisible(n.leftPanelVisible), this.middlePanelVisible(n.middlePanelVisible), this.queueIsPausedVisible(n.queueIsPausedVisible), this.queueNumberVisible(n.queueNumberVisible), this.queueNumberLoadingVisible(n.queueNumberLoadingVisible), this.reminderEmailVisible(n.reminderEmailVisible), this.reminderVisible(n.reminderVisible), this.rightPanelVisible(n.rightPanelVisible), this.servicedSoonVisible(t && !n.queueIsPausedVisible), this.sidePanelVisible(n.sidePanelVisible), this.topPanelVisible(n.topPanelVisible), this.usersInLineAheadOfYouVisible(n.usersInLineAheadOfYouVisible && !t), this.usersInQueueVisible(n.usersInQueueVisible), this.logoVisible(n.logoVisible), this.whichIsInVisible(n.whichIsInVisible && !t), this.progressVisible(n.progressVisible), this.languageSelectorVisible(n.languageSelectorVisible), t && this.firstInLineTimeStamp == null ? this.firstInLineTimeStamp = new Date : t && this.firstInLineTimeStamp != null && !this.servicedSoonDelayVisible() && Date.now() - this.firstInLineTimeStamp.valueOf() > this.servicedSoonDelayLengthMS && this.servicedSoonDelayVisible(!0))
                }, n
            }();
            n.Layout = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function () {
                function n(n) {
                    this.header = n == null ? null : n.header;
                    this.id = n == null ? null : n.id;
                    this.text = n == null ? null : n.text;
                    this.timestamp = n && n.timestamp ? new Date(parseInt(n.timestamp.substr(6))) : new Date;
                    this.timestampFormatted = n == null ? null : n.timestampFormatted;
                    this.timeZonePostfix = n == null ? null : n.timeZonePostfix
                }
                return n
            }();
            n.Message = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function () {
                function n() {
                    this.cache = {}
                }
                return n.prototype.tryCacheHeader = function (t, i) {
                    if (t && i) {
                        var r = i.getResponseHeader(n.HeaderName);
                        r && (this.cache[t] = r)
                    }
                }, n.prototype.setHeaderFromCache = function (t, i) {
                    if (t && i) {
                        var r = this.cache[t];
                        r && i.setRequestHeader(n.HeaderName, r)
                    }
                }, n.HeaderName = "X-Queueit-Queueitem-V1", n
            }();
            n.QueueItemInfoHelper = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (t) {
            var i = function (i) {
                function r(n) {
                    var r = i.call(this, n.customerId, n.eventId) || this;
                    return r._options = n, r.notifyFrames(new t.UpdateQueueFrameDto(null, null, "softblock", [], null, null, r._options.tags)), window.loadCaptchaWidget = function () {
                        return r.loadCaptchaWidget()
                    }, r
                }
                return __extends(r, i), r.prototype.loadCaptchaWidget = function () {
                    var n = this,
                        t = function (t) {
                            var i = t;
                            n.verifyCaptcha(i)
                        };
                    this._captchaWidgetID = grecaptcha.render("captcha-widget-container", {
                        sitekey: this._options.captchaPublicKey,
                        callback: t
                    })
                }, r.prototype.verifyCaptcha = function (t) {
                    var i = this,
                        r = function (n) {
                            return $.ajax({
                                type: "POST",
                                dataType: "json",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    captchaProvider: "recaptcha",
                                    sessionId: t,
                                    customerId: i.customerId,
                                    eventId: i.eventId,
                                    version: 3
                                }),
                                url: i._options.captchaVerifyEndpoint,
                                success: function (t) {
                                    t.sessionInfo ? window.location.href = decodeURIComponent(i._options.inqueueUrl) + "&scv=" + encodeURIComponent(JSON.stringify(t.sessionInfo)) : n("No captcha session info returned")
                                },
                                error: function (t, i, r) {
                                    n("Error from captcha verify end point: " + i + " - " + r)
                                }
                            })
                        },
                        u = function (n) {
                            return 300 * n
                        },
                        f = function (n) {
                            window.logger.Error({
                                Message: "Error verifying captcha: " + n
                            }, i.eventId, i.customerId);
                            grecaptcha.reset(i._captchaWidgetID)
                        };
                    n.Queue.Helpers.RetryHelper.retry(10, r, f, u)
                }, r.prototype.receiveMessage = function (n) {
                    switch (n.messageType) {
                        case "RequestRefresh":
                            this.notifyFrames(new t.UpdateQueueFrameDto(null, null, "softblock", [], null, null, this._options.tags));
                            return;
                        default:
                            return
                    }
                }, r
            }(t.ViewBase);
            t.SoftblockViewModel = i
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {})),
    function (n) {
        var t;
        (function (n) {
            var t = function () {
                function n(n) {
                    var t = this;
                    this.isReady = !1;
                    this.expectedServiceTime = ko.observable();
                    this.lastUpdated = ko.observable();
                    this.queueNumber = ko.observable();
                    this.usersInLineAheadOfYou = ko.observable();
                    this.whichIsIn = ko.observable();
                    this.highLoad = ko.observable();
                    this.progress = ko.observable(.01);
                    this.timeZonePostfix = ko.observable();
                    this.windowStartTime = ko.observable();
                    this.eventStartTimeFormatted = ko.observable();
                    this.secondsToStart = ko.observable();
                    this.usersInQueue = ko.observable(0);
                    this.refresh(n);
                    $(window).load(function () {
                        t.isReady = !0;
                        t.setProgressBar(t.progress() * 100)
                    })
                }
                return n.prototype.refresh = function (n) {
                    n && (this.expectedServiceTime() != n.expectedServiceTime && this.expectedServiceTime(n.expectedServiceTime), this.lastUpdated() != n.lastUpdated && this.lastUpdated(n.lastUpdated), this.queueNumber() != n.queueNumber && this.queueNumber(n.queueNumber), this.usersInLineAheadOfYou() != parseInt(n.usersInLineAheadOfYou) && (isNaN(this.usersInLineAheadOfYou()) || isNaN(parseInt(n.usersInLineAheadOfYou)) || this.usersInLineAheadOfYou() > parseInt(n.usersInLineAheadOfYou)) && this.usersInLineAheadOfYou(parseInt(n.usersInLineAheadOfYou)), this.whichIsIn() != n.whichIsIn && this.whichIsIn(n.whichIsIn), this.highLoad() != n.highLoad && this.highLoad(n.highLoad), n.progress != null && n.progress != this.progress() && (this.progress(n.progress), this.setProgressBar(this.progress() * 100)), this.timeZonePostfix(n.timeZonePostfix), !this.windowStartTime() && n.windowStartTime && this.windowStartTime(n.windowStartTime), this.eventStartTimeFormatted(n.eventStartTimeFormatted), this.secondsToStart(n.secondsToStart), this.usersInQueue(n.usersInQueue))
                }, n.prototype.setProgressBar = function (n) {
                    this.isReady && window.progressBar(n, $(".progressbar"))
                }, n
            }();
            n.Ticket = t
        })(t = n.Queue || (n.Queue = {}))
    }(QueueIt || (QueueIt = {}));
/*
邀请码: QK9JN8
感谢填写!感谢填写!!感谢填写!!!
1.5 快看点开宝箱完成
平台:   青龙
软件:  快看点 app 
收益:  10000金币 = 1元  不清楚,没写完   
注意事项 ： 一定要认真阅读以下内容

[Script]
cron "1-59/20 * * * *" script-path=https://raw.githubusercontent.com/yml2213/javascript/master/kkdkbx.js,tag=快看点开宝箱

*/

const $ = new Env("快看点开宝箱");
const notify = $.isNode() ? require("./sendNotify") : "";

/* 
let status;
status = (status = ($.getval(`zcystatus`) || "1")) > 1 ? `${status}` : "";    // 账号扩展字符       
*/

let kkdhdArr = []; //数组 Array
let host = "api.yuncheapp.cn";
let kkdhd = { Authorization: "", "User-Agent": "" };
// let kkdhdstr = $.isNode() ? (process.env.kkdhd ? process.env.kkdhd : "") : ($.getdata('kkdhd') ? $.getdata('kkdhd') : "");   //字符串 str/String
let kkdhds = "";
let kkdkbx = process.env.kkdkbx;
let kkdheader = process.env.kkdheader;
let kkdcookie = process.env.kkdcookie;

//开始运行

!(async () => {
  // await wyy();
  // await $.wait(2000); // 延迟 2000ms  也就是2秒
  await kbx();
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done());

// 1000 ms == 1 s    60000 ms == 1 min    600000 ms == 10 min
//这里是要执行的代码     ====== 如果有您不需要的  请自行注释  使用 // 注释就行 ========

//每日网抑云
function wyy(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://tenapi.cn/comment/`,
    };
    $.get(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          $.log(
            `\n【网抑云时间】: ${data.data.content}  by--${data.data.song}`
          );
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}

// https://api.yuncheapp.cn/pearl-incentive/api/v1/task/intervalAward/receive?oc=apple&lon=&dpbs=3sCt3iAAMzE1NTc1MTQ3Ac8HAIinM9cIsaW3TBAAAAC1e4eqFnhrRLWwUK%2BwfrGN&kpf=IPHONE&isp=460_01&kpn=pearl&fr=iOS&os=15.2&md=iPhone%2013%20Pro&app=pearl&mi=&ve=3.55.1&did=B92C0F70-3B2A-4E00-8BC4-DBF7E4D0FD1B&sr=1170*2532&egid=DFPA700BE9EC0CF6975BB8D6CB0044E4E22EAF38930C9630BB92C274A7154D2A&nt=WIFI&lat=&__clientSign2=XMXXVmHVAgxlOGY5YTNiYWMwNjQ0ZGM4NjRhMGEzYTI1NzRjYjI4ZGI1YmE2ZWRiYmRiMWJmYTk%3D&ss=U0RMUV81Rw%3D%3D

// https://api.yuncheapp.cn/pearl-incentive/api/v1/task/intervalAward/receive?nt=WIFI&isp=&lon=MTE2Ljk3MTE0Mw%3D%3D%0A&fr=ANDROID&egid=DFP4F60F8487C5B5BD869580B5E2105F0DE936A1E5B3D9914EA6697C7FF2883D&oc=Xiaomi&od=ca4e03060fbf8f5f&md=M2007J3SC&lan=zh-cn&mi=&apiLevel=30&lat=MzYuNjQ2NDk1%0A&sr=1080*2266&app=pearl&cc=cn&ss=Q01DQ181Rw%3D%3D%0A&kpf=ANDROID&os=11&ch=ANDROID_XIAOMI_XM_KKDZY_CPD&kpn=pearl&abi=arm64&_body=25eb1324bae606378f7761862bd408a4b435f2299b01531ecb29e37070d36532&__clientSign2=xwIH9wGhbTowMzEyNDQ0MTZiZGJkNTMxMWM0YjQ4NDk1NGQzNTNlY2UzY2E4NTMwNTc1YTU0NDI&ve=3.53.2.902&dpbs=3sCt3iAAMzE1NTc5Mjk5AM8HAIinM9cEghdxSxAAAAAeHestimueHL22FfqLsfLQ%0A&did=ANDROID_2069711f1df5483e
// 开宝箱

function kbx(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: "https://api.yuncheapp.cn/pearl-incentive/api/v1/task/intervalAward/receive?oc=apple&lon=&dpbs=3sCt3iAAMzE1NTc1MTQ3Ac8HAIinM9cIsaW3TBAAAAC1e4eqFnhrRLWwUK%2BwfrGN&kpf=IPHONE&isp=460_01&kpn=pearl&fr=iOS&os=15.2&md=iPhone%2013%20Pro&app=pearl&mi=&ve=3.55.1&did=B92C0F70-3B2A-4E00-8BC4-DBF7E4D0FD1B&sr=1170*2532&egid=DFPA700BE9EC0CF6975BB8D6CB0044E4E22EAF38930C9630BB92C274A7154D2A&nt=WIFI&lat=&__clientSign2=XMXXVmHVAgxlOGY5YTNiYWMwNjQ0ZGM4NjRhMGEzYTI1NzRjYjI4ZGI1YmE2ZWRiYmRiMWJmYTk%3D&ss=U0RMUV81Rw%3D%3D",
      headers: {
        "Content-Type": "application/ x - www - form - urlencoded",
        Cookie: kkdcookie,
        host: host,
        "User-Agent": "Artemis/3.55.1 (iPhone; iOS 15.2; Scale/3.00)",
      },
      body: "",
    };

    console.log(url);

    $.post(
      url,
      async (err, resp, data) => {
        try {
          console.log(`输出data开始===================`);
          console.log(data);
          console.log(`输出data结束===================`);

          result = JSON.parse(data);
          if (result.status == 0) {
            $.log(
              `\n【🎉🎉🎉 恭喜您鸭 🎉🎉🎉】开宝箱:${result.data.title} , 获得金币${result.data.coins}`
            );
            await $.wait(10000); // 延时 10秒
            // await kbx();
          } else {
            $.log(
              `\n【🎉 恭喜个屁 🎉】:开宝箱:失败🙅🏻了呢,原因可能是:${result.message}`
            );
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}

//固定板块，无需动
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? { url: t } : t;
      let s = this.get;
      return (
        "POST" === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new (class {
    constructor(t, e) {
      (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = "box.dat"),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = "\n"),
        (this.encoding = "utf-8"),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i)
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise((e) => {
        this.get({ url: t }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise((s) => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: { script_text: t, mock_type: "cron", timeout: r },
            headers: { "X-Key": o, Accept: "*/*" },
          };
        this.post(n, (t, e, i) => s(i));
      }).catch((t) => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s
          ? this.fs.writeFileSync(t, r)
          : i
          ? this.fs.writeFileSync(e, r)
          : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) =>
                Object(t[s]) === t[s]
                  ? t[s]
                  : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
              t
            )[e[e.length - 1]] = s),
          t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r)
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? ("null" === o ? null : o || "{}") : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, e)
        : this.isNode()
        ? ((this.data = this.loaddata()),
          (this.data[e] = t),
          this.writedata(),
          !0)
        : (this.data && this.data[e]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require("got")),
        (this.cktough = this.cktough ? this.cktough : require("tough-cookie")),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie &&
            void 0 === t.cookieJar &&
            (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (
        (t.headers &&
          (delete t.headers["Content-Type"],
          delete t.headers["Content-Length"]),
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
          $httpClient.get(t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        this.isNeedRewrite &&
          ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            (t) => e(t)
          );
      else if (this.isNode()) {
        let s = require("iconv-lite");
        this.initGotEnv(t),
          this.got(t)
            .on("redirect", (t, e) => {
              try {
                if (t.headers["set-cookie"]) {
                  const s = t.headers["set-cookie"]
                    .map(this.cktough.Cookie.parse)
                    .toString();
                  s && this.ckjar.setCookieSync(s, null),
                    (e.cookieJar = this.ckjar);
                }
              } catch (t) {
                this.logErr(t);
              }
            })
            .then(
              (t) => {
                const {
                  statusCode: i,
                  statusCode: r,
                  headers: o,
                  rawBody: h,
                } = t;
                e(
                  null,
                  { status: i, statusCode: r, headers: o, rawBody: h },
                  s.decode(h, this.encoding)
                );
              },
              (t) => {
                const { message: i, response: r } = t;
                e(i, r, r && s.decode(r.rawBody, this.encoding));
              }
            );
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (
        (t.body &&
          t.headers &&
          !t.headers["Content-Type"] &&
          (t.headers["Content-Type"] = "application/x-www-form-urlencoded"),
        t.headers && delete t.headers["Content-Length"],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
          $httpClient[s](t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        (t.method = s),
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            (t) => e(t)
          );
      else if (this.isNode()) {
        let i = require("iconv-lite");
        this.initGotEnv(t);
        const { url: r, ...o } = t;
        this.got[s](r, o).then(
          (t) => {
            const { statusCode: s, statusCode: r, headers: o, rawBody: h } = t;
            e(
              null,
              { status: s, statusCode: r, headers: o, rawBody: h },
              i.decode(h, this.encoding)
            );
          },
          (t) => {
            const { message: s, response: r } = t;
            e(s, r, r && i.decode(r.rawBody, this.encoding));
          }
        );
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds(),
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (s.getFullYear() + "").substr(4 - RegExp.$1.length)
        ));
      for (let e in i)
        new RegExp("(" + e + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? i[e]
              : ("00" + i[e]).substr(("" + i[e]).length)
          ));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = (t) => {
        if (!t) return t;
        if ("string" == typeof t)
          return this.isLoon()
            ? t
            : this.isQuanX()
            ? { "open-url": t }
            : this.isSurge()
            ? { url: t }
            : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return { openUrl: e, mediaUrl: s };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return { "open-url": e, "media-url": s };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return { url: e };
          }
        }
      };
      if (
        (this.isMute ||
          (this.isSurge() || this.isLoon()
            ? $notification.post(e, s, i, o(r))
            : this.isQuanX() && $notify(e, s, i, o(r))),
        !this.isMuteLog)
      ) {
        let t = [
          "",
          "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3==============",
        ];
        t.push(e),
          s && t.push(s),
          i && t.push(i),
          console.log(t.join("\n")),
          (this.logs = this.logs.concat(t));
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]),
        console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s
        ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack)
        : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log(
        "",
        `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`
      ),
        this.log(),
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  })(t, e);
}
jQuery.fn.scramble = function (t, e, i, n) {
    ("number" != typeof t || NaN === t || t < 1e3 || t > 2e4) && (t = 3e3),
        ("number" != typeof e || NaN === e || e < 5 || e > 1e3) && (e = 20);
    var r = {
        numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        alphabet: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ],
        punctuation: [
            " ",
        ],
        emoji: [
            "😀",
        ],
        get alphanumeric() {
            return this.numbers.concat(this.alphabet);
        },
        get all() {
            return this.alphanumeric.concat(this.punctuation);
        },
        get allPlusEmoji() {
            return this.all.concat(this.emoji);
        },
    };
    (void 0 !== i && i in r) || (i = "all"),
        (i = r[i]),
        (n = void 0 !== n && !1 !== n);
    var a = this.text();
    this.text("");
    var s = new (function (r, a) {
            (this.iteration = 0),
                (this.spliceIteration = 0),
                (this.$element = r),
                (this.word = a),
                (this.len = a.length),
                (this.arr = a.split("")),
                (this.terminated = !1),
                r.on("click", (t) => {
                    this.terminated = !0;
                });
            var s = parseInt(t / e / this.len);
            this.scramble = function (t) {
                if (this.terminated)
                    return this.$element.text(a), void window.clearInterval(t);
                this.iteration += 1;
                var e = (function (t) {
                    for (var e, r, a, s = [], h = 0; h < t; h++)
                        s.push(
                            ((a = void 0),
                            (r = (e = i).length),
                            (a = e[Math.floor(Math.random() * r)]),
                            n ? a.toUpperCase() : a)
                        );
                    return s;
                })(this.len);
                this.iteration % s == 0 && (this.spliceIteration += 1),
                    (function (t, e, i) {
                        var n = e.slice(0, i);
                        (n = n.join("")), t.splice(0, n.length, n);
                    })(e, this.arr, this.spliceIteration);
                var r = e.join("");
                this.$element.text(r),
                    this.spliceIteration === this.len &&
                        window.clearInterval(t);
            };
        })(this, a),
        h = window.setInterval(function () {
            s.scramble(h);
        }, e);
    return this;
};

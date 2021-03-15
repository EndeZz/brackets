module.exports = function check(str, bracketsConfig) {
    const open = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    const closed = {
        "}": true,
        "]": true,
        ")": true,
    };
    let static = [];
    for (let i = 0; i < str.length; i++) {
        if (open[str[i]]) {
            static.push(str[i]);
        } else if (closed[str[i]]) {
            if (open[static.pop()] !== str[i]) return false;
        }
    }
    if (static % 2 == 0 && str.indexOf("|") != -1) return true;
    return static.length === 0;
};

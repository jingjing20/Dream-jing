// 深度优先遍历 json 格式数据。后端传过来的数据经常是 json 格式，需要我们前端处理。常用

const json = {
    a: { b: { c: 1 } },
    d: [1, 2],
};

const dfs = (n, path) => {
    console.log(n, path);
    Object.keys(n).forEach((k) => {
        dfs(n[k], path.concat(k));
    });
};

dfs(json, []);

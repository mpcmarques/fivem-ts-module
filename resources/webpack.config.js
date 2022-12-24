const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const glob = require("glob");
const serverBuild = path.resolve(__dirname, "../build/server");
const clientBuild = path.resolve(__dirname, "../build/client");
const sharedBuild = path.resolve(__dirname, "../build/shared");

const client = {
    entry: glob.sync("./client/**.ts").reduce(function (obj, el) {
        obj[path.parse(el).name] = el;
        return obj;
    }, {}),
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "esbuild-loader",
                options: {
                    loader: "tsx", // Or 'ts' if you don't need tsx
                    target: "es2015",
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "client.js",
        path: path.resolve(clientBuild),
    },
};

const server = {
  entry: glob.sync("./server/**.ts").reduce(function (obj, el) {
    obj[path.parse(el).name] = el;
    return obj;
}, {}),
    target: "node",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "esbuild-loader",
                options: {
                    loader: "tsx", // Or 'ts' if you don't need tsx
                    target: "es2015",
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "server.js",
        path: path.resolve(serverBuild),
    },
};

const shared = {
  entry: glob.sync("./shared/**.ts").reduce(function (obj, el) {
    obj[path.parse(el).name] = el;
    return obj;
}, {}),
    target: "node",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "esbuild-loader",
                options: {
                    loader: "tsx", // Or 'ts' if you don't need tsx
                    target: "es2015",
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "shared.js",
        path: path.resolve(sharedBuild),
    },
};

module.exports = [server, shared, client];

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var WebpackObfuscator = require("webpack-obfuscator");
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
                    loader: "tsx",
                    target: "es2015",
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackObfuscator({
            compact: true,
            debugProtection: false,
            debugProtectionInterval: 4000,
            disableConsoleOutput: true,
            identifierNamesGenerator: "hexadecimal",
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
            selfDefending: true,
            simplify: true,
            splitStrings: true,
            splitStringsChunkLength: 5,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayEncoding: ["rc4"],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 5,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 5,
            stringArrayWrappersType: "function",
            stringArrayThreshold: 1,
            transformObjectKeys: true,
            unicodeEscapeSequence: false,
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
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
                    loader: "tsx",
                    target: "es2015",
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackObfuscator({
            compact: true,
            debugProtection: false,
            debugProtectionInterval: 4000,
            disableConsoleOutput: true,
            identifierNamesGenerator: "hexadecimal",
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
            selfDefending: true,
            simplify: true,
            splitStrings: true,
            splitStringsChunkLength: 5,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayEncoding: ["rc4"],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 5,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 5,
            stringArrayWrappersType: "function",
            stringArrayThreshold: 1,
            transformObjectKeys: true,
            unicodeEscapeSequence: false,
        }),
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(serverBuild),
    },
};

module.exports = [server, client];

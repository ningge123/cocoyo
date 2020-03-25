const fs = require('fs')
const path = require('path')

module.exports = {
    // Project deployment base
    // By default we assume your app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com/
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at
    // https://www.foobar.com/my-app/
    // then change this to '/my-app/'
    publicPath: '/',

    // where to output built files
    outputDir: 'dist',

    // where to put static assets (js/css/img/font/...)
    // assetsDir: '',

    // whether to use eslint-loader for lint on save.
    // valid values: true | false | 'error'
    // when set to 'error', lint errors will cause compilation to fail.
    lintOnSave: true,

    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: false,

    // babel-loader skips `node_modules` deps by default.
    // explicitly transpile a dependency with this option.
    transpileDependencies: [
        /* string or regex */
    ],

    // generate sourceMap for production build?
    productionSourceMap: true,

    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => { },
    configureWebpack: {
        resolve: {
            alias: {
                $components: path.resolve(__dirname, 'src/components'),
                $utils: path.resolve(__dirname, 'src/utils'),
                $modules: path.resolve(__dirname, 'src/modules'),
                $assets: path.resolve(__dirname, 'src/assets'),
                $config: path.resolve(__dirname, 'src/config')
            },
            extensions: ['.vue']
        }
    },

    // CSS related options
    css: {
        // extract CSS in components into a single CSS file (only in production)
        // can also be an object of options to pass to extract-text-webpack-plugin
        extract: true,

        // enable CSS source maps?
        sourceMap: false,

        // Enable CSS modules for all css / pre-processor files.
        // This option does not affect *.vue files.
        // modules: false
    },

    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,

    // options for the PWA plugin.
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},

    // configure webpack-dev-server behavior
    devServer: {
        port: 8081,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null
    },
    // options for 3rd party plugins
    pluginOptions: {},

    // devServer: {
    //     //测试机器
    //     /*proxy: 'http://10.60.36.78:8080'*/
    //     //权洛
    //     /*proxy: 'http://10.19.4.4'*/
    //     //嘉宁 10.19.100.117
    //     port: 8081,
    //     proxy: {
    //         '^/': {
    //             target: 'http://127.0.0.1:8080',
    //             ws: false,
    //             changOrigin: true,
    //             pathRewrite: {
    //                 '^/': '/'
    //             }
    //         }
    //     }
    // }
}

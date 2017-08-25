module.exports = function (config) {
    config.externals = {
        d3: 'd3',
        Hammer: 'hammerjs'
    };
    return config;
};

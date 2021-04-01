const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
	alias({
		'@components': 'src/components',
		'@utils': 'src/utils',
		'@assets': 'src/assets',
		'@store': 'src/store',
		'@constants': 'src/constants',
	})(config);

	return config;
};

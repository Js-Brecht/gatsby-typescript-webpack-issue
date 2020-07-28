/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    require('fs').writeFileSync(
        `./webpack.config-${stage}.json`,
        JSON.stringify(
            getConfig(),
            (key, val) => (
                val instanceof RegExp ||
                val instanceof Function
                    ? val.toString()
                    : val
            ),
            2,
        ),
    );
};
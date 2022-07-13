import { babel } from '@rollup/plugin-babel';
import extensionsFn from 'rollup-plugin-extensions';
import clear from 'rollup-plugin-clear';
import rollupPostcssLessLoader from 'rollup-plugin-postcss-webpack-alias-less-loader'
import postcss from 'rollup-plugin-postcss';

const extensions = ['.tsx', '.ts'];

export default [
  {
    input: 'src/index.tsx',
    output: {
      file: './dist/index.js',
      format: 'es'
    },
    plugins: [
      clear({
        targets: ['./dist'],
        watch: true
      }),
      extensionsFn({
        extensions,
        resolveIndex: true
      }),
      babel({
        extensions,
        exclude: 'node_modules/**'
      }),
      postcss({
        plugins: []
      })
    ]
  }
]
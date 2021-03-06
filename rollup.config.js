import commonjs from '@rollup/plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'src/index.ts',
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
        resolve({ extensions }),
        commonjs(),
        typescript({
            typescript: require('typescript'),
        }),
        babel({ extensions, include: ['src/**/*'] }),
        terser({
            mangle: {
                keep_fnames: true,
                keep_classnames: true,
            },
        }),
    ],
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
};

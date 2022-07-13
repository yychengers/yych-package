module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22"
      }
    ]
  ]
}
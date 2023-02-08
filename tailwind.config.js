/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "navBarImage": "url('~/assets/images/rockTexture.webp')",
        "mainBodyImage": "url('~/assets/images/papertexture.png')"
      }
    },
  },
  plugins: [],
}

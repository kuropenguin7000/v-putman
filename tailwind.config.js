export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#282828'
      },
      backgroundImage: {
        day: `url('@/assets/bg-day.svg')`,
        night: `url('@/assets/bg-night.svg')`,
        sun: `url('@/assets/sun.svg')`,
        moon: `url('@/assets/moon.svg')`
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : {
      backgroundImage: {
        'top-image': "url('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1685641077/topimage2_yc6hjr.webp')",
        'page-break-1440': "url('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1691625162/PageBreakImg1440pxAVIF_xjkfx3.avif')",
        'page-break-1024': "url('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1691625162/PageBreakImg1024pxAVIF_fvvsnd.avif')",
        'page-break-768': "url('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1691625162/PageBreakImg768pxAVIF_rzf4ma.avif')",
        'page-break-425': "url('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1691625162/PageBreakImg425pxAVIF_qee0qb.avif')",
        'page-break-375': "url('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1691625162/PageBreakImg375pxAVIF_kvj1i8.avif')"
      },
      fontFamily: {
        'top': ['"Zen Kurenaido"'],
      }
    },
  },
  plugins: [],
}

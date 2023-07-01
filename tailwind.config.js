/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        primary: "#FFFFFF",
        // primary: "#020101",
        // primary: "#020201",
        secondary: "#2AC299",
      },
      boxShadow: {
        primary: "0 3px 13px 2px rgba(255,255,255)",
      },

      animation: {
        slideup: "slideup 0.7s ease-in-out",
        slideup0: "slideup 0.5s ease-in-out",
        slideup42: "slideup42 1s ease-in-out",
        slideup422: "slideup42 0.6s ease-in-out",
        slideup423: "slideup42 1.4s ease-in-out",

        slidedown: "slidedown 1s ease-in-out",
        slidedown2: "slidedown2 1.8s ease-in-out",
        slidelefttranfrom: "slidelefttranfrom 1.5s ease-in-out",
        slideleft: "slideleft 1.2s ease-in-out",
        slideleftT2: "slideleft 1s ease-in-out",
        slideleftT3: "slideleft 1.3s ease-in-out",
        slideleftT4: "slideleft 1.6s ease-in-out",
        slideleft0: "slideleft 0.3s ease-in-out",
        slideleft3: "slideleft3 1s ease-in-out",
        slideleft4: "slideleft3 2.3s ease-in-out",
        slideleft2: "slideleft2 1.8s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        slideright2: "slideright2 1.3s ease-in-out",
        slideright3: "slideright2 1.9s ease-in-out",
        widthChange: "widthChange 8s ease-in-out",
        dropdownHight: "dropdownHight 0.4s  ease",
        dropupHight: "dropupHight 1s ease-in-out",
        wave: "wave 1.2s linear infinite",
        slowfade: "slowfade 2.2s ease-in-out",
        slowfade2: "slowfade2 1.5s ease-in-out",
        slowfade3: "slowfade2 0.7s ease-in-out",
        shake: "shake 0.1s linear infinite",
        slowfadehidden: "slowfadehidden 2s ease-in-out",
        slowspin: "slowspin 0.2s linear infinite",
        Fastspin: "slowspin 2.5s linear infinite",
        flip: "flip 2s linear infinite",
        VerySlowspin: "slowspin 3.5s linear infinite",
        pluseCustom: "pluseCustom 1s linear infinite",
      },
      keyframes: {
        shake: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(10deg)" },
        },
        slowspin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        flip: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(180deg)" },
        },
        slowfade2: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        dropdownHight: {
          from: { height: "0%" },
          to: { height: "95%" },
        },
        dropupHight: {
          from: { height: "100%" },
          to: { height: "0%" },
        },
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slowfadehidden: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(180deg)" },
        },
        slowfade2: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: "translateY(5%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideup0: {
          from: { opacity: 0, transform: "translateY(50%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideup42: {
          from: { opacity: 0, transform: "translateY(100%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown2: {
          from: { opacity: 0, transform: "translateY(-600px)" },
          to: { opacity: 1, transform: "none" },
        },
        slideleft: {
          from: { opacity: 0, transform: "translateX(-250px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slidelefttranfrom: {
          from: { opacity: 0, transform: "translateY(290px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideleft3: {
          from: { opacity: 0, transform: "translateX(-350px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideleft2: {
          from: { opacity: 0, transform: "translateX(-500px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright2: {
          from: { opacity: 0, transform: "translateX(500px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        widthChange: {
          from: { transform: "w-[90%]" },
          to: { transform: "w-[100%]" },
        },
        pluseCustom: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },

    screens: {
      225: "225px",
      310: "310px",
      340: "340px",
      350: "350px",
      370: "370px",
      400: "400px",
      420: "420px",
      450: "450px",
      500: "500px",
      550: "550px",
      600: "600px",
      630: "630px",
      660: "660px",
      720: "720px",
      800: "800px",
      840: "840px",
      860: "860px",
      900: "900px",
      950: "950px",
      1000: "1000px",
      1140: "1140px",
      1250: "1250px",
      1260: "1260px",
      1280: "1280px",
      1300: "1300px",
    },
  },
  plugins: [],
};

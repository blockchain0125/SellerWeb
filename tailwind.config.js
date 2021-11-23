module.exports = {
  purge: ["./components/**/*.tsx", "./**/*.styles.ts", "./src/**/*.tsx", "./stories/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        unset: "unset",
        "1px": "1px",
        "3px": "3px",
        "5/4": "120%",
        "9/16": "56.25%",
        "10vh": "10vh",
        4.5: "1.125rem",
        5.5: "1.375rem",
        8.5: "2.125rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        25: "6.25rem",
        26: "6.5rem",
        30: "7.5rem",
        44: "11rem",
        46: "11.5rem",
        50: "12.5rem",
        66: "16.5rem",
        69: "17.25rem",
        78: "19.5rem",
        85.5: "21.375rem",
        86: "21.5rem",
        92: "23rem",
        102: "25.5rem",
        120: "30rem",
        124: "31rem",
        105.5: "26.375rem",
        137.5: "34.375rem",
        140: "35rem",
        146: "36.5rem",
        150: "37.5rem",
        186: "46.5rem",
        256: "64rem",
      },
      borderRadius: {
        xxs: "4px",
        xs: "12px",
        sm: "16px",
        md: "24px",
        DEFAULT: "40px",
        "10px": "10px",
        "1/2": "50%",
      },
      fontSize: {
        8: "2rem",
      },
      maxWidth: {
        screen: "100vw",
        sm: "424px",
        siteWidth: "1137px",
        headerContentWidth: "1366px",
      },
      width: {
        smContainer: "424px",
        "367px": "367px",
        "391px": "391px",
        "520px": "520px",
        188: "47rem",
        mdContainer: "879px",
      },
      boxShadow: {
        DEFAULT: "0px 0px 32px rgba(161, 169, 178, 0.28)",
      },
    },
    colors: {
      // brand colors
      primary: "#cc0000",
      white: "#fff",
      black: "#292929",
      background: "#f6f8f9",

      // primary colors
      primary01: "#b20405",

      primary80: "#d53232",
      primary60: "#de6464",
      primary40: "#e89696",
      primary20: "#f1c8c8",

      // secondary colors
      secondary00: "#409aef",
      secondary01: "#ecf5fd",

      // feedback colors
      success: "#00daa1",
      warning: "#ff8b00",
      error: "#e42526",

      // neutral colors
      grey80: "#546171",
      grey60: "#969ea8",
      grey40: "#bbc0c6",
      grey20: "#dddfe3",
      grey10: "#eeeff1",

      // special colors
      star: "#fdd446",

      // chats users
      user1: "#e46a25",
      user2: "#e0e425",
      user3: "#90e425",
      user4: "#25e438",
      user5: "#25e494",
      user6: "#25e4cd",
      user7: "#25d9e4",
      user8: "#259fe4",
      user9: "#2566e4",
      user10: "#2538e4",
      user11: "#4b25e4",
      user12: "#6225e4",
      user13: "#9025e4",
      user14: "#e025e4",

      // social media colors
      facebook: "#3b5998",
      messenger: "#0084ff",
      twitter: "#00a2f9",
      whatsapp: "#75cf6c",
      pinterest: "#a5221f",
      google: "#ea4335",
      linkedin: "#0e76a8",

      // new seller colors
      lightBg2: "#FBFBFD",
      subTt: "#8181A5",

      inherit: "inherit",
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
      margin: ["last"],
    },
  },
  plugins: [],
};

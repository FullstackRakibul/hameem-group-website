export interface Award {
  year: string
  title: string
  description?: string
  issuer?: string
  image?: string
}

export const awardsData: Award[] = [
  {
    year: "2021 - 2022",
    title: "BANGABANDHU SHEIKH MUJIB EXPORT TROPHY",
    description:
      "The winning exporters received Gold, Silver, and Bronze awards. Some 28 firms were conferred Gold Awards, 27 Silver and 21 Bronze awards.",
    issuer: "State Minister for Commerce",
    image: "/assets/achivements/2021-2022/BSMET-21-22.JPG",
  },
  {
    year: "2020 - 2021",
    title: "NATIONAL EXPORT TROPHY GOLD",
    description:
      "Honored for outstanding contribution to the national export economy and exceptional export performance.",
    issuer: "Ministry of Commerce",
    image: "/assets/achivements/2020-2021/NETG-20-21.JPG",
  },
  {
    year: "2019 - 2020",
    title: "NATIONAL EXPORT TROPHY",
    description:
      "Recognized for highest export earnings in the apparel sector and commitment to quality and innovation.",
    image: "/assets/achivements/2019-2020/NET-19-20.JPG",
  },
  {
    year: "2018 - 2019",
    title: "NATIONAL EXPORT TROPHY",
    description:
      "A testament to persistent growth, reliability, and global trust in Ha-Meem Group's products and services.",
    image: "/assets/achivements/2018-2019/NET-18-19.JPG",
  },
  {
    year: "2017",
    title: "KOHL'S GREATNESS AWARD 2017",
    description: "Recognized for exceptional product excellence, innovation, and outstanding global collaboration.",
    issuer: "KOHL'S",
    image: "/assets/achivements/2017/KHOLS-2017.png",
  },
]

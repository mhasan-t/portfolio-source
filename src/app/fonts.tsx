import { Urbanist, Koulen, Heebo, Inter, Black_Ops_One, Roboto, Quicksand } from "next/font/google";

const primary = Quicksand({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const title = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
});

const header = Quicksand({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const fonts = { primary, title, header };
export default fonts;

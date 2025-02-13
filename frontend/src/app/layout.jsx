import "./globals.css";
import Wrapper from "./wrapper";



export const generateMetadata = () => {
  return {
    title: "Aditya Wedding & Event Planner",
    description:
      "Aditya Wedding & Event Planner",
    keywords:
      "Aditya Wedding & Event Planner",
    // url: "https://www.tradegyan.co/",
    image: "/android-chrome-192x192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      // url: "https://www.tradegyan.co/",
      title: "Aditya Wedding & Event Planner",
      description:
        "Aditya Wedding & Event Planner",
      image: "/android-chrome-192x192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Aditya Wedding & Event Planner",
      description:
        "Aditya Wedding & Event Planner",
      image: "/android-chrome-192x192.png",
    },
  };
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}

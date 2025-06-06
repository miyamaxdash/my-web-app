import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Hobbies } from "./components/Hobbies";
import { MMSE } from "./components/MMSE";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";

const app = new Hono();

app.use(
  "*",
  jsxRenderer(({ children }) => (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Masahiro Miyata | Infra Engineer</title>
        <link rel="stylesheet" href="/assets/tailwind.css" />
      </head>
      <body class="font-sans text-gray-800 bg-gray-50">{children}</body>
    </html>
  ))
);

app.get("/", (c) =>
  c.render(
    <>
      <Hero />
      <About />
      <Hobbies />
      <MMSE />
      <Events />
      <Footer />
    </>
  )
);

export default app;

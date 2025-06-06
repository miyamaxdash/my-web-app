import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

const app = new Hono()

// ★ JSX レンダラーミドルウェアを '*' で登録
app.use(
  '*',
  jsxRenderer(({ children }) => (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hono + Tailwind</title>
        <link rel="stylesheet" href="/assets/tailwind.css" />
      </head>
      <body class="p-8 bg-gray-50">
        <main class="max-w-xl mx-auto text-center">{children}</main>
      </body>
    </html>
  ))
)

// ルート
app.get('/', (c) =>
  c.render(
    <>
      <h1 class="text-4xl font-bold text-blue-600 mb-3">Tailwind OK!</h1>
      <p class="text-gray-700">これは Hono v4 + jsxRenderer で表示しています。</p>
    </>
  )
)

export default app

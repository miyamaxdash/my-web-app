export const Footer = () => (
    <footer class="py-10 text-center text-sm text-gray-500">
        <a
            href="https://mecha-mote-se.connpass.com/"
            class="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
            target="_blank"
            rel="noopener noreferrer"
        >
            コミュニティを見る
        </a>

        <p class="mt-6">&copy; {new Date().getFullYear()} Masahiro&nbsp;Miyata</p>
    </footer>
);

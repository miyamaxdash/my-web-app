import { FC } from "hono/jsx";

export const Hero: FC = () => (
    <section class="relative flex flex-col items-center text-center py-12">
        {/* 右上ロゴ背景 */}
        <img
            src="/assets/images/mmse-logo.webp"
            alt="MMSE Logo"
            class="absolute top-4 right-4 w-32 opacity-20 pointer-events-none select-none"
        />

        <img
            src="/assets/images/solo.jpg"
            alt="Masahiro Miyata"
            class="w-32 md:w-40 rounded-full shadow-lg animate-slide-up"
            loading="lazy"
        />

        <h1 class="mt-6 text-4xl md:text-5xl font-bold text-primary font-serif animate-fade-in">
            Masahiro&nbsp;Miyata
        </h1>
        <p class="mt-2 text-lg text-gray-600 animate-fade-in [animation-delay:0.2s]">
            Infra Engineer&nbsp;×&nbsp;Mecha&nbsp;Mote&nbsp;SE Organizer
        </p>
    </section>
);

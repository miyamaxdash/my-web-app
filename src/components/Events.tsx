const events = [
    "飲み会",
    "合コン",
    "BBQ",
    "ミスチル会",
    "皇居ラン",
    "激辛会",
    "ファッション会",
    "もくもく会",
];

export const Events = () => (
    <section class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Events</h2>
        {events.map((e) => (
            <span class="inline-block m-1 px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                {e}
            </span>
        ))}
    </section>
);

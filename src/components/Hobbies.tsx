const hobbies = [
    ["🍺", "お酒"],
    ["🎸", "ギター / ミスチル"],
    ["🏃", "マラソン"],
    ["🏄", "サーフィン"],
    ["📚", "漫画 / SF映画"],
    ["🌶️", "激辛料理"],
    ["🎣", "釣り"],
    ["💪", "筋トレ"],
];

export const Hobbies = () => (
    <section class="my-8">
        <h2 class="text-2xl font-semibold mb-4">Hobbies</h2>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {hobbies.map(([icon, label]) => (
                <div class="flex flex-col items-center p-3 bg-white rounded shadow hover:scale-105 transition">
                    <span class="text-3xl">{icon}</span>
                    <span class="mt-2 text-sm text-gray-700">{label}</span>
                </div>
            ))}
        </div>
    </section>
);

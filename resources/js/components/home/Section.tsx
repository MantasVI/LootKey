import Card from "./Card";

type SectionProps = {
    title: string;
    games: {
        id: number;
        name: string;
        region: string;
        price: number;
        cashback: number;
    }[];
};

export default function Section({ title, games }: SectionProps) {
    return (
        <section className="mt-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6">{title}</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {games.map((game) => (
                        <Card
                            key={game.id}
                            name={game.name}
                            region={game.region}
                            price={game.price}
                            cashback={game.cashback}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

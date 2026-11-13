<?php

namespace Database\Seeders;

use App\Models\Product;
use Database\Factories\ProductFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Number of products to create.
     */
    private const PRODUCT_COUNT = 100;

    /**
     * Real game titles mapped to the platforms they are sold on; region and price are generated.
     *
     * @var array<string, list<string>>
     */
    private const GAME_PLATFORMS = [
        'Terraria' => ['steam', 'psn', 'xbox', 'nintendo'],
        'Minecraft' => ['psn', 'xbox', 'nintendo'],
        'Elden Ring' => ['steam', 'psn', 'xbox'],
        'Grand Theft Auto V' => ['steam', 'epic_games', 'psn', 'xbox'],
        'Red Dead Redemption 2' => ['steam', 'epic_games', 'psn', 'xbox'],
        'The Witcher 3: Wild Hunt' => ['steam', 'epic_games', 'psn', 'xbox', 'nintendo'],
        'Cyberpunk 2077' => ['steam', 'epic_games', 'psn', 'xbox'],
        'Hollow Knight' => ['steam', 'psn', 'xbox', 'nintendo'],
        'Stardew Valley' => ['steam', 'psn', 'xbox', 'nintendo'],
        'Hades' => ['steam', 'epic_games', 'psn', 'xbox', 'nintendo'],
        'Baldur\'s Gate 3' => ['steam', 'psn', 'xbox'],
        'Celeste' => ['steam', 'epic_games', 'psn', 'xbox', 'nintendo'],
        'Portal 2' => ['steam'],
        'Half-Life: Alyx' => ['steam'],
        'Doom Eternal' => ['steam', 'psn', 'xbox', 'nintendo'],
        'Sekiro: Shadows Die Twice' => ['steam', 'psn', 'xbox'],
        'Dark Souls III' => ['steam', 'psn', 'xbox'],
        'Monster Hunter: World' => ['steam', 'psn', 'xbox'],
        'Resident Evil 4' => ['steam', 'psn', 'xbox'],
        'Forza Horizon 5' => ['steam', 'xbox'],
        'It Takes Two' => ['steam', 'psn', 'xbox', 'nintendo'],
        'Disco Elysium' => ['steam', 'epic_games', 'psn', 'xbox', 'nintendo'],
        'Subnautica' => ['steam', 'epic_games', 'psn', 'xbox', 'nintendo'],
        'Valheim' => ['steam', 'xbox'],
        'Rust' => ['steam', 'psn', 'xbox'],
        'Dead Cells' => ['steam', 'psn', 'xbox', 'nintendo'],
        'Cuphead' => ['steam', 'psn', 'xbox', 'nintendo'],
        'Hogwarts Legacy' => ['steam', 'epic_games', 'psn', 'xbox', 'nintendo'],
        'Starfield' => ['steam', 'xbox'],
        'Palworld' => ['steam', 'xbox'],
        'Lethal Company' => ['steam'],
        'Satisfactory' => ['steam', 'epic_games'],
        'Factorio' => ['steam'],
        'RimWorld' => ['steam'],
        'Slay the Spire' => ['steam', 'psn', 'xbox', 'nintendo'],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect(self::GAME_PLATFORMS)
            ->flatMap(fn (array $platforms, string $title): array => collect($platforms)
                ->crossJoin(ProductFactory::REGIONS)
                ->map(fn (array $pair): array => [$title, ...$pair])
                ->all())
            ->shuffle()
            ->take(self::PRODUCT_COUNT)
            ->each(function (array $combination): void {
                [$title, $platform, $region] = $combination;

                Product::factory()->game()->create([
                    'name' => $title,
                    'slug' => Str::slug("{$title} {$platform} {$region}"),
                    'platform' => $platform,
                    'region' => $region,
                ]);
            });
    }
}

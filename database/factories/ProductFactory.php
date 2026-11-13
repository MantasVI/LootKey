<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * @var list<string>
     */
    public const TYPES = ['game', 'dlc', 'gift_card', 'game_points', 'subscription', 'software'];

    /**
     * @var list<string>
     */
    public const PLATFORMS = ['steam', 'psn', 'xbox', 'nintendo', 'epic_games', 'riot_games'];

    /**
     * @var list<string>
     */
    public const REGIONS = ['global', 'europe', 'north_america', 'united_kingdom'];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = Str::title(fake()->unique()->words(3, true));
        $price = fake()->randomFloat(2, 1.99, 79.99);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'image' => null,
            'type' => fake()->randomElement(self::TYPES),
            'platform' => fake()->randomElement(self::PLATFORMS),
            'region' => fake()->randomElement(self::REGIONS),
            'price' => $price,
            'cashback' => round($price * fake()->randomFloat(2, 0.05, 0.11), 2),
        ];
    }

    /**
     * Indicate that the product is a game key.
     */
    public function game(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'game',
        ]);
    }
}

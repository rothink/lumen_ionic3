<?php

namespace App\Providers;

use App\Dish;
use Illuminate\Support\ServiceProvider;
use App\Observers\DishObserver;
use App\Observers\RestaurantPhotoObserver;
use App\Observers\RestaurantObserver;
use App\RestaurantPhoto;
use App\Restaurant;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Restaurant::observe(RestaurantObserver::class);
        RestaurantPhoto::observe(RestaurantPhotoObserver::class);
        Dish::observe(DishObserver::class);
    }
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

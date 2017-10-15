<?php

namespace App\Providers;

use App\Observers\RestaurantPhotoObserver;
use App\RestaurantPhoto;
use Illuminate\Support\ServiceProvider;
use App\Restaurant;
use App\Observers\RestaurantObserver;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Restaurant::observe(RestaurantObserver::class);
        RestaurantPhoto::observe(RestaurantPhotoObserver::class);
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

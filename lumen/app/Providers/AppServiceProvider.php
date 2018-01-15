<?php

namespace App\Providers;

use App\Address;
use App\Dish;
use App\RestaurantPhoto;
use App\Restaurant;
use App\Observers\AddressObserver;
use App\Observers\DishObserver;
use App\Observers\RestaurantPhotoObserver;
use App\Observers\RestaurantObserver;
use Illuminate\Support\ServiceProvider;


class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Restaurant::observe(RestaurantObserver::class);
        RestaurantPhoto::observe(RestaurantPhotoObserver::class);
        Dish::observe(DishObserver::class);
        Address::observe(AddressObserver::class);
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

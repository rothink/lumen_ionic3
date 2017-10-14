<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

Dusterio\LumenPassport\LumenPassport::routes($router);

$router->get('/', function () use ($router) {
//    return $router->app->version();
    return view('teste');
});

$router->group(['prefix' => 'api/v1', 'namespace' => 'Api\V1' , 'middleware' => 'auth'], function() use ($router) {
    $router->get('restaurants', 'RestaurantsController@index');
    $router->get('restaurants/{id}', 'RestaurantsController@show');
    $router->post('restaurants', 'RestaurantsController@store');
    $router->put('restaurants/{id}', 'RestaurantsController@update');
    $router->post('restaurants/{id}', 'RestaurantsController@update');
    $router->delete('restaurants/{id}', 'RestaurantsController@destroy');
    $router->post('restaurants/{id}/address', 'RestaurantsController@address');
    $router->post('restaurants/{id}/upload', 'RestaurantsController@upload');

    $router->get('auth/me', 'AuthController@me');
});

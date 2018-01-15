<?php

namespace App\Observers;

use App\Address;
use App\Dish;

class AddressObserver
{
    public function creating(Address $model)
    {
        if(!$model->latitude or !$model->longitude) {
            $this->setLatAndLong($model);
        }
    }

    public function updating(Address $model)
    {
        $this->setLatAndLong($model);
    }

    private function setLatAndLong($model)
    {
        $location = $model->address . ',' .
            $model->numer . '-' .
            $model->neighborhood . '-' .
            $model->city . '-' .
            $model->state . '-' .
            $model->address;
    }

}
<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    const ADMIN = 1;
    const GENERAL = 0;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "name",
        "email",
        "image",
        "password",
        "password_digest",
        "content",
        "age",
        "sex",
        "blood_type",
        "height",
        "body_shape",
        "residence",
        "birth_place",
        "holiday",
        "work",
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'password_digest',
        'remember_token',
        'remember_digest',
        'activated',
        'activation_digest',
        'activated_at',
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'password_digest' => 'hashed',
    ];

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function getDisplaySexAttribute()
    {
        $sex_value = $this->sex;
        
        return  config('user.sex_radios')[$sex_value]['label'];
    }

    public function getDisplayBloodTypeAttribute()
    {
        $blood_type_value = $this->blood_type;
        
        return  config('user.blood_type_radios')[$blood_type_value]['label'];
    }

    public function getDisplayBodyShapeAttribute()
    {
        $body_shape_value = $this->body_shape;
        
        return  config('user.body_shape_selects')[$body_shape_value]['label'];
    }

    public function getDisplayResidenceAttribute()
    {
        $residence_value = $this->residence;
        
        return  config('user.residence_selects')[$residence_value]['label'];
    }

    public function getDisplayBirthPlaceAttribute()
    {
        $birth_place_value = $this->birth_place;
        
        return  config('user.residence_selects')[$birth_place_value]['label'];
    }

    public function getDisplayHolidayAttribute()
    {
        $holiday_value = $this->holiday;
        
        return  config('user.holiday_selects')[$holiday_value]['label'];
    }

    public function getDisplayWorkAttribute()
    {
        $work_value = $this->work;
        
        return  config('user.work_selects')[$work_value]['label'];
    }
}

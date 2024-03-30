<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    const DEFAULT_FILE_NAME = 'user_default_image.png';
    const DEFAULT_FILE_PATH = '/storage/images/';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "file_name",
        "path",
        "user_id",
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

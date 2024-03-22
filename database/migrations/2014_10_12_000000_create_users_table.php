<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('image');
            $table->string('remember_digest')->nullable();
            $table->string('password');
            $table->string('password_digest');
            $table->text('content');
            $table->integer('age');
            $table->integer('sex');
            $table->integer('blood_type');
            $table->integer('height');
            $table->integer('body_shape');
            $table->integer('residence');
            $table->integer('birth_place');
            $table->integer('holiday');
            $table->integer('work');
            $table->boolean('admin')->default(false);
            $table->boolean('activated')->default(false);
            $table->string('activation_digest')->nullable();
            $table->timestamp('activated_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};

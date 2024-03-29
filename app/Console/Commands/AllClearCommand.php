<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AllClearCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clear:all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear cache, config, view, route and then cache the config';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // キャッシュのクリア
        $this->call('cache:clear');
        $this->info('Cache cleared successfully.');

        // 設定のクリア
        $this->call('config:clear');
        $this->info('Config cache cleared successfully.');

        // ビューのクリア
        $this->call('view:clear');
        $this->info('View cache cleared successfully.');

        // ルートのクリア
        $this->call('route:clear');
        $this->info('Route cache cleared successfully.');

        // 設定のキャッシュ
        $this->call('config:cache');
        $this->info('Config cached successfully.');

        $this->info('Success!');
    }
}

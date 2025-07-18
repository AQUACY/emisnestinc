<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class GenerateSqlServerModels extends Command
{
    protected $signature = 'generate:sqlsrv-models';
    protected $description = 'Generate basic Eloquent models from SQL Server tables';

    public function handle()
    {
        $database = config('database.connections.sqlsrv.database');
        $tables = DB::select("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'");

        if (empty($tables)) {
            $this->error('No tables found.');
            return;
        }

        $modelsPath = app_path('Models');
        if (!File::exists($modelsPath)) {
            File::makeDirectory($modelsPath);
        }

        foreach ($tables as $table) {
            $tableName = $table->TABLE_NAME;
            $modelName = Str::studly(Str::singular($tableName));
            $filePath = "{$modelsPath}/{$modelName}.php";

            if (File::exists($filePath)) {
                $this->warn("Model for table '{$tableName}' already exists, skipping.");
                continue;
            }

            $content = <<<EOT
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class {$modelName} extends Model
{
    protected \$table = '{$tableName}';
    public \$timestamps = false;
}
EOT;

            File::put($filePath, $content);
            $this->info("Created model: {$modelName}");
        }

        $this->info('✅ Model generation complete!');
    }
}

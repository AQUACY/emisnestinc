<?php

namespace Illuminate\Http;

interface Request
{
    /**
     * @return \App\Models\AspNetUsers|null
     */
    public function user($guard = null);
}
<?php

namespace Illuminate\Contracts\Auth;

interface Guard
{
    /**
     * @return \App\Models\AspNetUsers|null
     */
    public function user();
}
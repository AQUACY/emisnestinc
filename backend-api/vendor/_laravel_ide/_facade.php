<?php

namespace Illuminate\Support\Facades;

interface Auth
{
    /**
     * @return \App\Models\AspNetUsers|false
     */
    public static function loginUsingId(mixed $id, bool $remember = false);

    /**
     * @return \App\Models\AspNetUsers|false
     */
    public static function onceUsingId(mixed $id);

    /**
     * @return \App\Models\AspNetUsers|null
     */
    public static function getUser();

    /**
     * @return \App\Models\AspNetUsers
     */
    public static function authenticate();

    /**
     * @return \App\Models\AspNetUsers|null
     */
    public static function user();

    /**
     * @return \App\Models\AspNetUsers|null
     */
    public static function logoutOtherDevices(string $password);

    /**
     * @return \App\Models\AspNetUsers
     */
    public static function getLastAttempted();
}
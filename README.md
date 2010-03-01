# jQuery Embed Data
> Version 0.1

In a nutshell:

    <div id="my-div">
        <script type="jquery/data" class="metadata">
        {"some":"metadata"}
        </scrip>
    </div>
    <script type="text/javascript" class="metadata">
        $(document).ready(function(){

            // getting data:
            $("#my-div").edata("get").some == "metadata";

            // setting/updating data:
            $("#my-div").edata("set", "other", "new data");

            // getting raw json (even updated)
            $("#my-div").edata("raw") == '{"some":"metadata","other":"new data"}';

            // counting
            $("#my-div").edata("total") == 1;

        });
    </script>

## What is it ?

A jQuery plugin that stores JSON data within HTML elements.

## What is this for ?

To save/retrieve JSON data from server.
If you need to get JSON data from server without making AJAX requests.

## Why ?

Because I needed something:

+ simple -> It is just as jQuery-ish as I like
+ robust -> A jQuery plugin which is unit-tested
+ compliant -> I just do not like to get a messy HTML. No unexistent attributes in my elements.

# Licensing

The plugin is under LGPL3:

    Copyright (C) <2009>  Gabriel Falcão <gabriel@nacaolivre.org>

    This program is free software: you can redistribute it and/or
    modify it under the terms of the GNU Lesser General Public License
    as published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.


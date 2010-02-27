# jQuery Embed Data
In a nutshell:

    <div id="my-div">
        <script type="text/javascript" class="metadata">
        {some: "metadata"}
        </scrip>t
    </div>
    <script type="text/javascript" class="metadata">
        $(document).ready(function(){
            $("#my-div").edata("get").some == "metadata";
        });
    </script>

## What is it ?

A jQuery plugin that stores JSON data within HTML elements.

## What is this for ?

> To save/retrieve JSON data from server.
> If you need to get JSON data from server without making AJAX requests.

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


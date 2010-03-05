# jQuery Embed Data
> Version 0.2

In a nutshell:

    <div id="my-div">
        <script type="jquery/data">
        {"some":"metadata"}
        </scrip>
    </div>
    <script type="text/javascript">
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

## Does it have a documentation ?

Off course, see below!

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

# Documentation

## Setting JSON data to a element that doesn't have any embedded metadata

> Given we a html element (i.e: a span tag), and we want to store metadata within it

  <span id="greetings">Hello John!</span>

    <script type="text/javascript">
        $(document).ready(function(){
            $("#greetings").edata("set", {user: "John", fullname: "John Doe", age: 22})
        })
    </script>

> After loading, then the DOM will look like this:

  ...
  <span id="greetings">
      Hello John!
      <script type="jquery/data">{"user":"John","fullname":"John Doe","age":22}</script>
  </span>
  ...

## If the HTML already have a <script type="jquery/data"> it works as well

  <div id="some-div">
    <script type="jquery/data"></script>
  </div>

    <script type="text/javascript">
        $(document).ready(function(){
            $("#some-div").edata("set", {some: [1, 2, 3], data: "yes!"});
        })
    </script>

> After loading, then the DOM will look like this:

  ...
  <div id="some-div">
    <script type="jquery/data">{"some":[1,2,3],"data":"yes!"}</script>
  </div>
  ...

## getting data from elements

> Given the element

  ...
  <ul class="tweets">
      <script type="jquery/data">
          {
              username: "gabrielfalcao",
              fetch: 10
          }
      </script>
  </ul>
  ...

> I could fetch tweets like this:

    <script type="text/javascript">
        $(document).ready(function(){
            $("ul.tweets").each(function(index) {
                var $ul = $(this);
                var username = $ul.edata("get", "username");
                var amount = $ul.edata("get", "fetch");

                $.getJSON("/fetch/" + amount + "/tweets-by/user/" + username, function (tweets){
                    $.each(tweets, function() {
                        var tweetMessage = this;
                        $ul.append("<li>" + tweetMessage + "</li>");
                    });
                });
            });

        })
    </script>

## Need to send the raw json data to server ? We can do it!

    <div id="data">
      <script type="jquery/data">
          {
              foo: "bar"
          }
      </script>
    </div>

    <script type="text/javascript">
        $(document).ready(function(){
            $.post("/send/to/server", $("#data").edata("raw"));
        })
    </script>

## Getting data:

    <div id="data">
      <script type="jquery/data">
          {
              foo: "bar"
          }
      </script>
    </div>

    <script type="text/javascript">
        $("#data").edata("get") == { foo: "Bar" };
        $("#data").edata("get", "foo") == "Bar";
    </script>


## Setting data:

    <div id="data">
      <script type="jquery/data">
          {
              foo: "bar"
          }
      </script>
    </div>

    <script type="text/javascript">
        $("#data").edata("set", "other", "with this value");
        $("#data").edata("set", "and_other", "too");
        $("#data").edata("get") == {foo:"bar", other: "with this value", and_other: "too"}

        $("#data").edata("set", {"new": "value"});

        $("#data").edata("get") == {"new": "value"};
    </script>

## Counting data

    <div id="data">
      <script type="jquery/data">
          {
              attr1: "value1",
              attr2: "value2",
              attr3: "value3"
          }
      </script>
    </div>

    <script type="text/javascript">
        $("#data").edata("total") == 3;
    </script>

# Licensing

> Copyright (c) 2009 Gabriel Falcão
> Dual licensed under the MIT and GPL 3+ licenses.
> http://www.opensource.org/licenses/mit-license.php
> http://www.gnu.org/copyleft/gpl.html

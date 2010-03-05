module("edata");
test('It should recover data from inline script tag.', function() {
         expect(2);
         var data = $("div#test1").edata("get");
         var value = $("div#test1").edata("get", "test_data");
         equal(data.test_data, "Greetings from test1");
         equal(value, "Greetings from test1");
     });

test('It should count the data length', function() {
         expect(1);
         var number = $("div#test2").edata("total");
         equal(number, 5, "The data count should be 5");
     });

test('It should get the raw data', function() {
         expect(1);
         var raw = $("div#test1").edata("raw");
         equal(raw, '{test_data: "Greetings from test1"}');
     });

test('It should be able to update some field', function() {
         expect(3);
         var old = $("div#test3").edata("get", "will_be_updated");
         $("div#test3").edata("set", "will_be_updated", "totally new value");
         var got = $("div#test3").edata("get", "will_be_updated");

         notEqual(old, got, "The new value should be different of the old one");
         equal(got, "totally new value", "The got value should be 'totally new value'");
         equal($("div#test3").edata("raw"), '{"will_be_updated":"totally new value"}');
     });

test('If the element has no embeded metadata, and <script type="jquery/data"> tag, it can be set', function() {
         expect(2);

         var data = {name: "John Doe", age: 22}
         $("div#test-empty").edata("set", data);

         var name = $("div#test-empty").edata("get", "name");
         var age = $("div#test-empty").edata("get", "age");

         equal(name, "John Doe");
         equal(age, 22);
     });

test('If the element has no embeded metadata, but has the script tag, it can also be set', function() {
         expect(2);

         var data = {name: "John Contrane", instrument: "Piano"}
         $("div#test-with-script").edata("set", data);

         var name = $("div#test-with-script").edata("get", "name");
         var instrument = $("div#test-with-script").edata("get", "instrument");

         equal(name, "John Contrane");
         equal(instrument, "Piano");
     });

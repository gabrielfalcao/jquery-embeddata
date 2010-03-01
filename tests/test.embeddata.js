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

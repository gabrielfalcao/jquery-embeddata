module("Core");
test('It should recover data from inline script tag.', function() {
         expect(1);
         var data = $("div#test1").edata("get");
         ok(data.test_data == "Greetings from test1", "The div #test1 have the attribute 'test_data'");
     });

test('It should count the data length', function() {
         expect(1);
         var number = $("div#test2").edata("total");
         ok(number == 1, "The data count should be 1");
     });

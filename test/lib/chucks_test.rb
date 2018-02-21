require 'test_helper'
require './lib/scripts/scraper'


class Chucks_85Test < Minitest::Test
   def setup
     @chucks = Chucks_85.new
   end

   def test_response_code
     byebug
     assert_equal '200', @chucks.page.code
   end
end

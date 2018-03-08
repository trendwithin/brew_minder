require 'test_helper'
require './lib/scripts/scraper'

class Chucks_CDTest < Minitest::Test
   def setup
     VCR.use_cassette('chucks_CD') do
       url = 'http://chucks-cd.jjshanks.net/draft'
       @chucksCD = Chucks_CD.new(url)
     end
   end

   def test_response_code_from_mechanize
      assert_equal '200', @chucksCD.page.code
   end

   def test_mechanize_page_for_valid_css_tag_brewery_name
     count = @chucksCD.page.css('td[class=draft_brewery]').size
     assert_equal 50, count
   end

   def test_mechanize_page_for_valid_css_tag_draft_name
     count = @chucksCD.page.css('td[class=draft_name]').size
     assert_equal 50, count
   end

   def test_strip_draft_name_returns_proper_format
     @chucksCD.strip_draft_brewery
     assert_equal Array, @chucksCD.draft_brewery.class
     assert_equal 50, @chucksCD.draft_brewery.size
   end

   def test_strip_draft_name_returns_proper_format
     @chucksCD.strip_draft_name
     assert_equal Array, @chucksCD.draft_brewery.class
     assert_equal 50, @chucksCD.draft_name.size
   end

   def test_zip_beer_list_format
     @chucksCD.draft_brewery.push('testing')
     @chucksCD.draft_name.push('one, two, three')
     zipped_array = @chucksCD.zip_beer_list
     assert_equal ['testing one, two, three'], zipped_array
   end

   def test_formatted_beer_list
     list = [['testing', 'one, two, three']]
     expected = { chucksCD: list }
     assert_equal expected, @chucksCD.format_list(list)
   end
end

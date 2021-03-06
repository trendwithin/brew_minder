require 'test_helper'
require './lib/scripts/scraper'

class Chucks_85Test < Minitest::Test
   def setup
     VCR.use_cassette('chucks85') do
       url = 'http://chucks.jjshanks.net/draft'
       @chucks85 = Chucks_85.new(url)
     end
   end

   def test_response_code_from_mechanize
      assert_equal '200', @chucks85.page.code
   end

   def test_mechanize_page_for_valid_css_tag_brewery_name
     count = @chucks85.page.css('td[class=draft_brewery]').size
     assert_equal 50, count
   end

   def test_mechanize_page_for_valid_css_tag_draft_name
     count = @chucks85.page.css('td[class=draft_name]').size
     assert_equal 50, count
   end

   def test_strip_draft_name_returns_proper_format
     @chucks85.strip_draft_brewery
     assert_equal Array, @chucks85.draft_brewery.class
     assert_equal 50, @chucks85.draft_brewery.size
   end

   def test_strip_draft_name_returns_proper_format
     @chucks85.strip_draft_name
     assert_equal Array, @chucks85.draft_brewery.class
     assert_equal 50, @chucks85.draft_name.size
   end

   def test_zip_beer_list_format
     @chucks85.draft_brewery.push('testing')
     @chucks85.draft_name.push('one, two, three')
     zipped_array = @chucks85.zip_beer_list
     assert_equal ['testing one, two, three'], zipped_array
   end

   def test_formatted_beer_list
     list = [['testing', 'one, two, three']]
     expected = { chucks85: list }
     assert_equal expected, @chucks85.format_list(list)
   end
end

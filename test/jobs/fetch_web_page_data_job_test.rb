require 'test_helper'
require "#{Rails.root}/lib/scripts/scrape_runner"


class FetchWebPageDataJobTest < ActiveJob::TestCase

  test "returned value is array" do
    # scrape = Seattle::SeattleScraper.chucks_85
    # assert_equal Array, scrape.class
  end
end

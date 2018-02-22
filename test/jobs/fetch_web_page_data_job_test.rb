require 'test_helper'
require "#{Rails.root}/lib/scripts/scrape_runner"


class FetchWebPageDataJobTest < ActiveJob::TestCase

  def setup
    VCR.use_cassette('chucks85_job_test') do
      @chucks85 = Seattle::SeattleScraper.chucks_85
    end
  end

  test "returned value is a hash" do
    assert_equal Hash, @chucks85.class
  end
end

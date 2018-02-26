require 'test_helper'

class BeerReportMailerTest < ActionMailer::TestCase
  def setup
    VCR.use_cassette('chucks85_job_test') do
      @chucks85 = Seattle::SeattleScraper.chucks_85
    end
  end
end

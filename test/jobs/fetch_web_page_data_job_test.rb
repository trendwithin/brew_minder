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

  test "beer report mailer" do
    user = users(:mackey)
    email = BeerReportMailer.beer_report user, @chucks85
    assert_difference 'ActionMailer::Base.deliveries.size', +1 do
      email.deliver_now
    end
  end
end

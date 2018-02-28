require 'test_helper'
require "#{Rails.root}/lib/scripts/scrape_runner"


class FetchWebPageDataJobTest < ActiveJob::TestCase

  def setup
    VCR.use_cassette('chucks85_job_test') do
      @email_beer_list = Seattle::SeattleScraper.all
    end
  end

  test "returned value is a hash" do
    assert_equal Hash, @email_beer_list.class
  end

  test "beer report mailer" do
    user = users(:mackey)
    email = BeerReportMailer.beer_report user, @email_beer_list
    assert_difference 'ActionMailer::Base.deliveries.size', +1 do
      email.deliver_now
    end
  end
end

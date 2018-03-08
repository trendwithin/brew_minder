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

  test "beer list keys match expected" do
    beer_list = @email_beer_list
    expected_keys = [:chucks85, :chucksCD]
    assert_equal expected_keys, beer_list.keys
  end

  test "beer list values match expected" do # Brittle- Cassette Dependent Tests
    beer_list = @email_beer_list
    values = beer_list.values
    assert_equal true, values[1].include?("Council Brewing In The Blind IPA")
    assert_equal values[0].size, 50
    assert_equal values[1].size, 50
  end

  test "beer list values fail with unexpected" do
    beer_list = @email_beer_list
    values = beer_list.values
    refute values[1].include?("Anchor Porter")
  end

  test "user beer list matches user base beer list" do
    beer_list = @email_beer_list
    user_list = User.build_users_beer_list
    user_one = user_list[0][0]
    user_one_beer_list = user_list[0][1]
    assert_equal user_one, "vic@theshield.net"
    assert_equal true, user_one_beer_list.include?("Firestone")
    refute user_one_beer_list.include?("Walker")
  end

  test "job returns scraped beer list" do
    beer_list = @email_beer_list
    user_list = User.build_users_beer_list
    user_one = user_list[0]
    user_one_beer_list = user_list[1]
    job = FetchWebPageDataJob.build_user_email user_list, beer_list
    assert_equal "vic@theshield.net", job[0][0]
    assert_equal true, job[0][1].keys.include?(:chucks85)
    assert_equal true, job[0][1].keys.include?(:chucksCD)
    assert_equal true, job[0][1].values[1].include?("Schilling Lemon Raspberry Sour Cider")
  end
end

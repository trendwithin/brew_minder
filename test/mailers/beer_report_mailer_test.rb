require 'test_helper'

class BeerReportMailerTest < ActionMailer::TestCase
  def setup
    @user = users(:mackey)
    VCR.use_cassette('chucks85_job_test') do
      @email_beer_list = Seattle::SeattleScraper.chucks_85
    end
  end

  test 'valid user recieves email report' do
    mail = BeerReportMailer.beer_report(@user, @email_beer_list)
    assert_equal "Nightly Beer Report", mail.subject
    assert_equal [@user.email], mail.to
    assert_equal ['noreply@example.org'], mail.from
  end

  test 'nightly beer report includes user beer list' do
    mail = BeerReportMailer.beer_report(@user, @email_beer_list)
    user_beer_list = @user.user_beer_list.pluck(:beer)
    user_beer_list.each do |beer|
      assert_equal true, mail.body.encoded.include?(beer)
    end
  end
end

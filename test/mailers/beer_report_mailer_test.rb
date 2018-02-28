require 'test_helper'

class BeerReportMailerTest < ActionMailer::TestCase
  def setup
    @user = users(:mackey)
    VCR.use_cassette('beer_report_job_test') do
      @email_beer_list = Seattle::SeattleScraper.all
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

  test 'nightly beer report from multiple sources' do
    mail = BeerReportMailer.beer_report(@user, @email_beer_list)
    assert_equal true, mail.body.encoded.include?('chucks85')
    assert_equal true, mail.body.encoded.include?('chucksCD')
  end
end

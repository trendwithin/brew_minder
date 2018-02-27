require 'test_helper'

class BeerReportMailerTest < ActionMailer::TestCase
  def setup
    @user = users(:mackey)
    VCR.use_cassette('chucks85_job_test') do
      @chucks85 = Seattle::SeattleScraper.chucks_85
    end
  end

  test 'valid user recieves email report' do
    mail = BeerReportMailer.beer_report(@user)
    assert_equal "Nightly Beer Report", mail.subject
    assert_equal [@user.email], mail.to
    assert_equal ['noreply@example.org'], mail.from
    assert_equal true, mail.body.encoded.include?('<h1>chucks85</h1>')
  end
end

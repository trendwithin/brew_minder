# Preview all emails at http://localhost:3000/rails/mailers/beer_report_mailer
class BeerReportMailerPreview < ActionMailer::Preview
  def beer_report_notifiction
    user = User.new(email: 'mailer_preview_user@example.org')
    beer_list = { chucks85: ['check one', 'check two'] }
    BeerReportMailer.beer_report(user, beer_list)
  end
end

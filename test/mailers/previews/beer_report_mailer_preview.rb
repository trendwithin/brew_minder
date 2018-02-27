# Preview all emails at http://localhost:3000/rails/mailers/beer_report_mailer
class BeerReportMailerPreview < ActionMailer::Preview
  def beer_report_notifiction
    user = User.new(email: 'mailer_preview_user@example.org')
    BeerReportMailer.beer_report(user)
  end
end

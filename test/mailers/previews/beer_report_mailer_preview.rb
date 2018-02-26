# Preview all emails at http://localhost:3000/rails/mailers/beer_report_mailer
class BeerReportMailerPreview < ActionMailer::Preview
  def beer_report_notifiction
    BeerReportMailer.beer_report.deliver_now
  end
end

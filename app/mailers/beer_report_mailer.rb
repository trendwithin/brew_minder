require "#{Rails.root}/lib/scripts/scrape_runner"

class BeerReportMailer < ApplicationMailer
  default from: 'noreply@example.org'

  def beer_report user, beer_list
    @email_beer_list = beer_list

    mail(
      to: user.email,
      subject: 'Nightly Beer Report'
    )
  end
end

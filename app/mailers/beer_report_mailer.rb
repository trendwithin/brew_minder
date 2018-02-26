require "#{Rails.root}/lib/scripts/scrape_runner"

class BeerReportMailer < ApplicationMailer
  default from: 'noreply@example.org'

  def beer_report
    @chucks85 = {chucks85: ['beer one', 'beer two']}

    mail(
      to: 'user@example.org',
      subject: 'BEER REPORT'
    )
  end
end

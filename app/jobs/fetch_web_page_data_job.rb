require "#{Rails.root}/lib/scripts/scrape_runner"

class FetchWebPageDataJob < ApplicationJob
  queue_as :default

  def perform(*args)
    Seattle::SeattleScraper.chucks_85
  end
end

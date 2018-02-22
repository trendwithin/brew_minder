require_relative './scraper'

module Seattle
  class SeattleScraper
    def self.chucks_85
      chucks_85th = Chucks_85.new
      chucks_85th.strip_draft_name
      chucks_85th.strip_draft_brewery
      chucks_85th.zip_beer_list
    end
  end
end

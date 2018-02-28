require_relative './scraper'

module Seattle
  class SeattleScraper

    def self.all
      beer_list = {}
      beer_list[:chucks85] = chucks85
      beer_list[:chucksCD] = chucksCD
      beer_list
    end

    def self.chucks85
      chucks_85th = Chucks_85.new
      chucks_85th.strip_draft_name
      chucks_85th.strip_draft_brewery
      chucks_85th.zip_beer_list
    end

    def self.chucksCD
      chucks_cd = Chucks_CD.new
      chucks_cd.strip_draft_name
      chucks_cd.strip_draft_brewery
      chucks_cd.zip_beer_list
    end
  end
end

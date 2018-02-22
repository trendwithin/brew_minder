require 'mechanize'

class Scraper
  attr_reader :page

  def initialize url = ''
    @page = Mechanize.new.get url
  end
end

class Chucks_85 < Scraper
  attr_accessor :draft_brewery, :draft_name, :beer_list

  def initialize url = 'http://localhost:3000/pages/chucks'
    super
    @page = Mechanize.new.get url
    @draft_brewery = []
    @draft_name = []
    @beer_list = []
  end

  def strip_draft_brewery
    @page.css('td[class=draft_brewery]').each do |elem|
      @draft_brewery.push(elem.text)
    end
  end

  def strip_draft_name
    @page.css('td[class=draft_name]').each do |elem|
      @draft_name.push(elem.text)
    end
  end

  def zip_beer_list
    @beer_list = @draft_brewery.zip(@draft_name)
  end
end

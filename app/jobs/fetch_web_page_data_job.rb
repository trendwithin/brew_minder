require "#{Rails.root}/lib/scripts/scrape_runner"

class FetchWebPageDataJob < ApplicationJob
  queue_as :default

  def perform(*args)
    scraped_data = Seattle::SeattleScraper.all
    users_list = User.build_users_beer_list
    build_user_email users_list, scraped_data
    scraped_data
  end

  def self.build_user_email users_list, beer_list
    email_list = []
    beers = []
    obj = {}

    users_list.each do |user|
      user[1].each do |ub|
        beer_list.each do |b|
          b[1].each do |e|
            beers << e if e.include?(ub)
          end
          obj[b[0]] = beers
        end
      end
      email_list.push([user[0], obj])
    end
    email_list
  end
end

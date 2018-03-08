class User < ApplicationRecord
  has_many :user_beer_list
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  def self.build_users_beer_list
    users_beer_list = []
    User.all.each do |u|
      beer_list = u.user_beer_list.pluck(:beer)
      users_beer_list.push([u.email, beer_list]) unless beer_list.empty?
    end
    users_beer_list
  end
end

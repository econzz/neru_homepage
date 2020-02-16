class Game < ApplicationRecord

  validates :title, presence: true, length: {minimum: 1, maximum: 50}

  validates :url, presence: true, length: {minimum: 1, maximum: 300}

  validates :description, presence: true, length: {minimum: 1, maximum: 300}

end
class Contact < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true

  # before_create :add_to_list

  # def add_to_list
  #   list_id = "42337eae19"
  #   @gb = Gibbon::Request.new
  #   subscribe = @gb.lists(list_id).members.create(body: { name: self.name, email_address: self.email, status: “subscribed”, double_optin: false })
  # end

end


class SubscribeToNewsletterService
  def initialize(contact)
    @contact = contact
    @gibbon = Gibbon::Request.new(api_key: ENV['MAILCHIMP_API_KEY'])
    @list_id = ENV['MAILCHIMP_LIST_ID']
  end

  def call
    @gibbon.lists(@list_id).members.create(
      body: {
        email_address: @contact.email,
        status: "subscribed",
      }
    )
  end
end

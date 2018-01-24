class Forest::Guest
  include ForestLiana::Collection

  collection :guests

  field :fullname, type: 'String' do
    "#{object.firstname} #{object.lastname}"
  end
end

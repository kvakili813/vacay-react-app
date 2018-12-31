Rails.application.routes.draw do
  scope '/api' do
    get :places, to: 'places#index'
  end
end

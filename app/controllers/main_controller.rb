class MainController < ApplicationController
	require 'oauth2'
	
	def redirect_url
		return 'http://localhost:3000/redirect'
	end


  def client
  	client_id = '595c342ebf0f17b5d2bafdd6cb39ce9d'
  	client_secret = 'a545b978b5964afd5b743911bafc0650'
  	client = OAuth2::Client.new(client_id, client_secret, :site => 'https://cs3213.herokuapp.com', :authorize_url => '/oauth/new')
  end

  def authorize
  	redirect_to client.auth_code.authorize_url(:authorize_url => '/oauth/new', :redirect_uri => redirect_url)
  end

  def redirect
  	token = client.auth_code.get_token(params[:code], :redirect_uri => redirect_url)
  	session[:access_token] = token.token
  	redirect_to '/'
  end
end

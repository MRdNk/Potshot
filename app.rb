require 'sinatra'
require "sinatra/reloader" if development?

set :root,  File.dirname(__FILE__)
set :views, File.join( settings.root, "views" )

get '/', :provides => 'html' do
  send_file File.join( settings.views, 'index.html')
end

get '/:file.html', :provides => 'html' do |f|
  send_file File.join( settings.views, "#{f}.html")
end

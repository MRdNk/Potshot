require "sinatra"
require "sprockets"

class Assets < Sinatra::Base
  configure do
    set :assets, (Sprockets::Environment.new { |env|
      env.append_path(settings.root + "/assets/images")
      env.append_path(settings.root + "/assets/javascripts")
      env.append_path(settings.root + "/assets/stylesheets")

      env.append_path(settings.root + "/vendor/assets/javascripts")
      env.append_path(settings.root + "/vendor/assets/swf")

      # compress everything in production
      # if ENV["RACK_ENV"] == "production"
      #   env.js_compressor  = YUI::JavaScriptCompressor.new
      #   env.css_compressor = YUI::CssCompressor.new
      # end
    })
  end

  get "/assets/app.js" do
    content_type("application/javascript")
    settings.assets["app.js"]
  end

  get "/assets/style.css" do
    content_type("text/css")
    settings.assets["style.css"]
  end

  get "/assets/:javascript.js" do |js|
    content_type "text/javascript"
    settings.assets[js + ".js"]
  end

  get "/assets/:swf.swf" do |swf|
    content_type "video/x-flv"
    settings.assets[swf + ".swf"]
  end

  %w{jpg png}.each do |format|
    get "/assets/:image.#{format}" do |image|
      content_type("image/#{format}")
      settings.assets["#{image}.#{format}"]
    end
  end
end

require ::File.expand_path('../../config/environment',  __FILE__)
Rails.application.eager_load!

require 'action_cable/process/logging'

ActionCable.server.config.allowed_request_origins = ["https://hidden-badlands-5177.herokuapp.com"]
run ActionCable.server

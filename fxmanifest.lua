fx_version 'cerulean'

games {"gta5"}

author "Codex <mateus@codexfactory.com.br>"
description "FiveM Vite TS + ReactJS Template"
version '1.0.0'

lua54 'yes'

require 'yarn'

ui_page 'ui/build/index.html'

client_script "build/client/**/*"
shared_script 'build/shared/**/*'
server_scripts {'@oxmysql/lib/MySQL.ts', "build/server/**/*"}

files {'ui/build/index.html', 'ui/build/**/*'}

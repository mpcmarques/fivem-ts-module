fx_version 'cerulean'

games {"gta5"}

author "Codex <mateus@codexfactory.com.br>"
description "FiveM Vite TS + ReactJS Template"
version '1.0.0'

lua54 'yes'

ui_page 'project/ui/build/index.html'

client_script "project/build/client/**/*"
shared_script 'project/build/shared/**/*'
server_scripts {'@oxmysql/lib/MySQL.ts', "project/build/server/**/*"}

files {'project/ui/build/index.html', 'project/ui/build/**/*'}

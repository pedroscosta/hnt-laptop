fx_version "cerulean"

description "hnt-laptop"
author "HunterFP"
version '1.0.0'
repository 'https://github.com/pedroscosta/hnt-laptop'

lua54 'yes'

games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script "server/**/*"

shared_scripts {
  'config.lua'
}

files {
  'web/build/index.html',
  'web/build/**/*'
}
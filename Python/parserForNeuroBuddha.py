from bs4 import BeautifulSoup as Bs
import requests

page = 1
book = ''

while True:
    r = requests.get('https://mir-knig.com/read_262117-' + str(page))
    html = Bs(r.content, 'html.parser')

    text = html.select('.text-block')

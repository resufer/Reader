from bs4 import BeautifulSoup as Bs
import requests

page = 1
book = ''

while True:
    r = requests.get('https://mir-knig.com/read_262117-' + str(page))
    html = Bs(r.content, 'html.parser')

    text = html.select('.text-block')

    if len(text):
        for p in text:
            for txt in p.select('p'):
                book += txt.text
        print('current page is' + str(page))
        page += 1
    else:
        break
